import { Metadata } from "next";
import { siteMetadata } from "@/site/siteMatedata";
import { ogNoteImage } from "@/site/data";

import NotePage from "@/components/note/NotePage";
import Content from "@/components/Post/Content";
import { getPageContent } from "@/lib/notion";

export const metadata: Metadata = {
  title: `${siteMetadata.title} — Notes`,
  description: `I put all my notes, shortcuts, and quotes in here. ✌️`,
  openGraph: {
    images: [ogNoteImage],
  },
};

type Props = {};

const Note = async (props: Props) => {
  const recordMap = await getPageContent(
    process.env.NOTION_NOTE_PAGE_ID as string
  );

  return <NotePage>{recordMap && <Content recordMap={recordMap} />}</NotePage>;
};

export default Note;
