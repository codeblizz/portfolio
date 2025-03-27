"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

export type RepoType = {
  node: {
    id: string;
    url: string;
    description: string;
    name: string;
    primaryLanguage: { color: string; name: string };
    forkCount: string;
    diskUsage: string;
    stargazers: {
      totalCount: number;
    };
  };
};

export default function GithubRepoCard({ repo }: { repo: RepoType }) {
  function openRepoInNewTab(url: string) {
    if (typeof window !== "undefined") {
      const win = window.open(url, "_blank");
      win?.focus();
    }
  }

  return (
    <>
      <Fade direction="down" duration={1000}>
        <div
          key={repo.node.id}
          className={"p-8 cursor-pointer shadow-[0px_10px_30px_-15px_hsla(0,0%,0%,0.2)] hover:shadow-[0px_20px_30px_-10px_hsla(0,0%,0%,0.2)]"}
          onClick={() => openRepoInNewTab(repo.node.url)}
        >
          <div className="flex items-center">
            <svg
              role="img"
              width="14"
              height="20"
              aria-hidden="true"
              viewBox="0 0 12 16"
              className="mr-2 min-w-[16px]"
            >
              <path
                fill-rule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              />
            </svg>
            <p className="whitespace-nowrap tracking-[-0.5px] text-ellipsis space- m-0 overflow-hidden mb-3 text-2xl font-bold">{repo.node.name}</p>
          </div>
          <p className="overflow-hidden line-clamp-2">{repo.node.description}</p>
          <div className="flex justify-between text-sm">
            <div className="flex grow">
              {repo.node.primaryLanguage !== null && (
                <span className="flex items-center mr-3">
                  <div
                    className="size-[10px] bg-blue-700 mr-1 rounded-full"
                    style={{
                      backgroundColor: repo.node.primaryLanguage.color,
                    }}
                  ></div>
                  <p>{repo.node.primaryLanguage.name}</p>
                </span>
              )}
              <span>
                <svg
                  role="img"
                  width="12"
                  height="20"
                  className="mr-1"
                  aria-hidden="true"
                  viewBox="0 0 10 16"
                  // className="octicon"
                  fill="rgb(106, 115, 125)"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                  />
                </svg>
                <p>{repo.node.forkCount}</p>
              </span>
              <span>
                <svg
                  aria-hidden="true"
                  role="img"
                  width="14"
                  height="20"
                  className="mr-1"
                  viewBox="0 0 14 16"
                  // className="octicon"
                  fill="rgb(106, 115, 125)"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                  />
                </svg>
                <p>{repo.node.stargazers.totalCount}</p>
              </span>
            </div>
            <div className="repo-right-stat">
              <p>{repo.node.diskUsage} KB</p>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}
