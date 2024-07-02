import { useCallback } from "react";
import { PageData } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPostsByCategory } from "@/lib/notion";

interface Props {
  categoryName: string;
}

const limit = 6;

const useFetchPosts = ({ categoryName }: Props) => {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["posts", categoryName],
      initialPageParam: 1,

      queryFn: async ({ pageParam }) => {
        return (await getPostsByCategory(
          categoryName,
          limit,
          pageParam
        )) as PageData[];
      },

      getNextPageParam(lastPage, allPages) {
        //   return lastPage && lastPage.length > 0
        //     ? allPages.length + 1
        //     : undefined;
        //   //   return lastPage.nextPageParam;
        // },
        return allPages.length + 1;
      },
      initialData: {
        pages: [],
        pageParams: [1],
      },
    });

  // const posts = data?.pages.flatMap((page) => page) ?? [];
  const posts =
    data && data.pages.flatMap((page) => page || []).filter(Boolean);

  // handle loading next page
  const loadNextPost = useCallback(async () => {
    if (hasNextPage && !isFetchingNextPage) {
      await fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage]);

  return { posts, loadNextPost, isFetchingNextPage, hasNextPage };
};

export default useFetchPosts;
