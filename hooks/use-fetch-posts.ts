import { useCallback } from "react";
import { PageDataSchemaType } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPostsByCategory } from "@/actions/get-post-by-cat";

interface Props {
  categoryName: string;
}

const useFetchPosts = ({ categoryName }: Props) => {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["posts", categoryName],
      initialPageParam: 1,

      queryFn: async ({ pageParam }) => {
        return (await fetchPostsByCategory(
          categoryName,
          pageParam
        )) as PageDataSchemaType[];
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
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return { posts, loadNextPost, isFetchingNextPage, hasNextPage };
};

export default useFetchPosts;
