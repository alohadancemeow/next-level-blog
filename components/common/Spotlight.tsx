"use client";

import {
  Spotlight as MantineSpotlight,
  SpotlightActionData,
  SpotlightActionGroupData,
} from "@mantine/spotlight";
import { useRouter } from "next/navigation";
import { PageDataSchemaType } from "@/types";
import {
  IconHome,
  // IconDashboard,
  IconFileText,
} from "@tabler/icons-react";

type Props = {
  data: PageDataSchemaType[];
};

const CustomSpotlight = ({ data }: Props) => {
  const router = useRouter();

  const actions: (SpotlightActionGroupData | SpotlightActionData)[] = [
    {
      group: "Pages",
      actions: [
        {
          id: "home",
          label: "Home",
          description: "Get to home page",
          onClick: () => router.push(`/`),
          leftSection: <IconHome size={24} stroke={1.5} />,
        },
        // {
        //   id: "dashboard",
        //   label: "Dashboard",
        //   description: "Get full information about current system status",
        //   onClick: () => console.log("Dashboard"),
        //   leftSection: <IconDashboard size={24} stroke={1.5} />,
        // },
        {
          id: "note",
          label: "Note",
          description: "Visit note to lean more about all features",
          onClick: () => router.push(`/note`),
          leftSection: <IconFileText size={24} stroke={1.5} />,
        },
      ],
    },
    {
      group: "New Posts",
      actions: data.map((post) => ({
        id: post.id,
        label: `📝 ${post.title}`,
        description: post.description,
        onClick: () => router.push(`/posts/${post.id}`),
      })),
    },
  ];

  return (
    <MantineSpotlight
      actions={actions}
      searchProps={{
        placeholder: "🪶 Search for posts...",
      }}
      nothingFound="🤔 Nothing found..."
      shortcut="mod + K"
      limit={7}
      highlightQuery
      // transitionProps={{ duration: 300, transition: "slide-down" }}
    />
  );
};

export default CustomSpotlight;
