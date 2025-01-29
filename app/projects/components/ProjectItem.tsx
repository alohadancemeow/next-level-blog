"use client";

import classes from "./item.module.css";
import { Accordion, Button, Center, Space } from "@mantine/core";
import { RocketIcon } from "@/components/icons/Icons";

const groceries = [
  {
    emoji: "🍎",
    value: "Apples",
    description:
      "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
  },
  {
    emoji: "🍌",
    value: "Bananas",
    description:
      "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
  },
  {
    emoji: "🥦",
    value: "Broccoli",
    description:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
];

const ProjectItem = () => {
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>
        {item.description}

        <Space h={"xl"} />

        <Center p={10}>
          <Button
            component="a"
            href="#"
            variant="outline"
            leftSection={<RocketIcon />}
          >
            Open in new tab
          </Button>
          <Space w={"xl"} />
          <Button
            component="a"
            href="#"
            variant="outline"
            leftSection={<RocketIcon />}
          >
            Open in new tab
          </Button>
        </Center>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion
      className="w-[340px] md:min-w-[600px]"
      // miw={600}
      defaultValue="Apples"
      classNames={classes}
    >
      {items}
    </Accordion>
  );
};

export default ProjectItem;
