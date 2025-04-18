"use client";

import Link from "next/link";
import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
import Loading from "@/components/ui/organisms/loading";
import { RepoType } from "@/components/ui/molecules/githubRepo";
import { openSource, socialMediaLinks } from "@/constants";
import React, { useState, useEffect, Suspense, lazy, useCallback } from "react";
import { Fade } from "react-awesome-reveal";

export default function Projects() {
  const GithubRepoCard = lazy(
    () => import("@/components/ui/molecules/githubRepo")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setRepo] = useState<RepoType[] | string[]>([""]);

  const getRepoData = useCallback(() => {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: (operation) => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${openSource.githubConvertedToken}`,
          },
        });
      },
    });

    client
      .query({
        query: gql`
        {
        user(login: "${openSource.githubUserName}") {
          pinnedItems(first: 6, types: [REPOSITORY]) {
            totalCount
            edges {
              node {
                ... on Repository {
                  name
                  description
                  forkCount
                  stargazers {
                    totalCount
                  }
                  url
                  id
                  diskUsage
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
        `,
      })
      .then((result) => {
        setRepoFunction(result.data.user.pinnedItems.edges);
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
        setRepoFunction(["Error"]);
        console.log(
          "Because of this Error, nothing is shown in place of Projects section. Projects section not configured"
        );
      });
  }, []);

  function setRepoFunction(array: string[] | RepoType[]) {
    setRepo(array);
  }

  useEffect(() => {
    getRepoData();
  }, [getRepoData]);

  if (!(typeof repo === "string" || repo instanceof String)) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="w-[90%] mx-auto text-center md:text-start border-b border-b-gray-500/50">
          <h1 className="text-4xl font-extrabold">Open Source Projects</h1>
          <Fade direction="left" duration={1000}>
            <div
              className="pb-5 "
              id="opensource"
            >
              <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4">
                {repo.map((v, idx) =>
                  v.constructor === Object && typeof v !== "string" ? (
                    <GithubRepoCard key={idx} repo={v} />
                  ) : null
                )}
              </div>
              <Link
                target="_blank"
                className="project-button"
                href={socialMediaLinks.github}
              >
                {"More Projects"}
              </Link>
            </div>
          </Fade>
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
