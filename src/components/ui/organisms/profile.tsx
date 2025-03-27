"use client";

import ApolloClient, { gql } from "apollo-boost";
import { openSource } from "@/constants/portfolio.data";
import Loading from "@/components/ui/organisms/loading";
import { GitHubProfile } from "@/components/ui/molecules/githubProfile";
import React, { useState, useEffect, lazy, Suspense, useCallback } from "react";

const renderLoader = <Loading />;
const GithubProfileCard = lazy(
  () => import("@/components/ui/molecules/githubProfile")
);
export default function Profile() {
  const [prof, setRepo] = useState<string[] | GitHubProfile[]>([""]);

  function setProfileFunction(array: string[] | GitHubProfile[]) {
    setRepo(array);
  }

  const getProfileData = useCallback(() => {
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
        query: gql`{
          user(login:"${openSource.githubUserName}") { 
            name
            bio
            isHireable
            avatarUrl
            location
          }
        }`,
      }).then((result) => {
        setProfileFunction(result.data.user);
      }).catch(function (error) {
        console.log(error);
        setProfileFunction(["Error"]);
        console.log(
          "Because of this Error Contact Section is Showed instead of Profile"
        );
        openSource.showGithubProfile = false;
      });
  }, []);

  useEffect(() => {
    if (openSource.showGithubProfile) {
      getProfileData();
    }
  }, [getProfileData]);

  // if (
  //   openSource.showGithubProfile &&
  //   !(typeof prof === "string" || prof instanceof String)
  // ) { else { }

  return prof.map((p, k) =>
    p.constructor === Object && typeof p !== "string" ? (
      <Suspense key={k} fallback={renderLoader}>
        {" "}
        <GithubProfileCard prof={p} />{" "}
      </Suspense>
    ) : null
  );
}
