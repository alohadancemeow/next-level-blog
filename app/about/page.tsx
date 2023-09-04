import { Metadata } from "next";
import { siteMetadata } from "@/site/siteMatedata";
import { ogNoteImage } from "@/site/data";

import AboutPage from "@/components/about/AboutPage";
import Content from "@/components/Post/Content";
import { getPageContent } from "@/lib/notion";

export const metadata: Metadata = {
  title: `${siteMetadata.title} — About me`,
  description: `About me. ✌️`,
  openGraph: {
    images: [ogNoteImage],
  },
};

type Props = {};

const About = async (props: Props) => {
  const recordMap = await getPageContent(
    process.env.NOTION_ABOUT_PAGE_ID as string
  );

  return (
    <AboutPage>{recordMap && <Content recordMap={recordMap} />}</AboutPage>
  );
};

export default About;
