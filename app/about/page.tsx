import { Metadata } from "next";
import { siteMetadata } from "@/site/siteMatedata";
import { ogNoteImage } from "@/site/data";

import AboutPage from "@/components/about/AboutPage";
import Content from "@/components/Post/Content";
import { getAboutPageContent } from "@/lib/notion";

export const metadata: Metadata = {
  title: `${siteMetadata.title} — About me`,
  description: `About me. ✌️`,
  openGraph: {
    images: [ogNoteImage],
  },
};

type Props = {};

const About = async (props: Props) => {
  const recordMap = await getAboutPageContent();

  return (
    <AboutPage>{recordMap && <Content recordMap={recordMap} />}</AboutPage>
  );
};

export default About;
