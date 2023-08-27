import { Metadata } from "next";
import { siteMetadata } from "@/site/siteMatedata";
import { ogNoteImage } from "@/site/data";

import NotePage from "@/components/note/NotePage";

export const metadata: Metadata = {
  title: `${siteMetadata.title} — Notes`,
  description: `I put all my notes, shortcuts, and quotes in here. ✌️`,
  openGraph: {
    images: [ogNoteImage],
  },
};

type Props = {};

const Note = (props: Props) => {
  return <NotePage />;
};

export default Note;
