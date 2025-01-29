import { Metadata } from "next";
import { siteMetadata } from "@/site/siteMatedata";
import { ogNoteImage } from "@/site/data";

import NotePage from "./components/NotePage";
import Content from "@/components/contents/Content";
import { getNotePageContent } from "@/actions/notion-x";

export const metadata: Metadata = {
  title: `${siteMetadata.title} — Notes`,
  description: `I put all my notes, shortcuts, and quotes in here. ✌️`,
  openGraph: {
    images: [ogNoteImage],
  },
};

const Note = async () => {
  const recordMap = await getNotePageContent();

  return <div>note page</div>;
  // <NotePage>{recordMap && <Content recordMap={recordMap} />}</NotePage>;
};

export default Note;
