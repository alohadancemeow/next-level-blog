import { Metadata } from "next";
import { siteMetadata } from "@/site/siteMatedata";
import { ogNoteImage } from "@/site/data";

import ProjectPage from "./components/ProjectPage";
import Content from "@/components/Post/Content";
import { getProjectPageContent } from "@/actions/notion-x";

export const metadata: Metadata = {
  title: `${siteMetadata.title} — Projects`,
  description: `All projects. ✌️`,
  openGraph: {
    images: [ogNoteImage],
  },
};

const Projects = async () => {
  const recordMap = await getProjectPageContent();

  return (
    <ProjectPage>
      {recordMap && <Content recordMap={recordMap} />}
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus
      cupiditate iure unde laborum, sed accusantium iusto quia velit hic.
    </ProjectPage>
  );
};

export default Projects;
