import { DOMAIN } from "@/helpers/constants";
// import { SingleArticle } from "@/utils/types";
import { Site } from "@prisma/client";

// Get articles based on pageNumber
export async function getSites(
  pageNumber: string | undefined
): Promise<Site[]> {
  const response = await fetch(`${DOMAIN}/api/sites?pageNumber=${pageNumber}`, {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch sites");
  }

  return response.json();
}

// Get articles count
// export async function getArticlesCount(): Promise<number> {
//   const response = await fetch(`${DOMAIN}/api/articles/count`, {
//     cache: "no-cache",
//   });

//   if (!response.ok) {
//     throw new Error("Failed to fetch articles count");
//   }

//   const { count } = (await response.json()) as { count: number };

//   return count;
// }

// Get articles based on searchText
// export async function getArticlesBasedOnSearch(
//   searchText: string | undefined
// ): Promise<Article[]> {
//   const response = await fetch(
//     `${DOMAIN}/api/articles/search?searchText=${searchText}`,
//     {
//       cache: "no-cache",
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to fetch articles");
//   }

//   return response.json();
// }

// Get single article by id
// export async function getSingleArticle(
//   articleId: string
// ): Promise<SingleArticle> {
//   const response = await fetch(`${DOMAIN}/api/articles/${articleId}`, {
//     cache: "no-cache",
//   });

//   if (!response.ok) {
//     throw new Error("Failed to fetch articles");
//   }

//   return response.json();
// }
