import { Metadata } from "next";
import { siteMetadata } from "@/site/siteMatedata";
import { ogNoteImage } from "@/site/data";

import ProjectPage from "@/components/projects/ProjectPage";
import Content from "@/components/Post/Content";
import { getPageContent } from "@/lib/notion";

export const metadata: Metadata = {
  title: `${siteMetadata.title} — Projects`,
  description: `All projects. ✌️`,
  openGraph: {
    images: [ogNoteImage],
  },
};

type Props = {};

const Projects = async (props: Props) => {
  const recordMap = await getPageContent(
    process.env.NOTION_PROJECT_PAGE_ID as string
  );

  return (
    <ProjectPage>{recordMap && <Content recordMap={recordMap} />}</ProjectPage>
  );
};

export default Projects;
