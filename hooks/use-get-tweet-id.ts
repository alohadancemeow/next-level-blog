import { useMemo } from "react";
import { ExtendedRecordMap } from "notion-types";

type Props = {
  recordMap: ExtendedRecordMap;
};

const useGetTweetId = ({ recordMap }: Props) => {
  const tweetId = useMemo(() => {
    try {
      const tweetBlock = Object.values(recordMap.block).filter(
        (b) => b.value.type === "tweet"
      );

      if (!tweetBlock) return null;

      const url = tweetBlock[0].value.properties?.source[0][0] as string;
      const str = url.split("/");
      const id = str[str.length - 1];

      return id;
    } catch (error) {
      console.log(error);
    }
  }, [recordMap]);

  return { tweetId };
};

export default useGetTweetId;
