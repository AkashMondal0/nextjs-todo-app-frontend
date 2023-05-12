import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function TabView() {

  const fun = () => {
    return (
      <div>
        <h1>hello</h1>
      </div>
    )
  }
  const data = [
    {
      label: "Tasks",
      value: "Tasks",
      desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people 
        who are like offended by it, it doesn't matter.`,
    },

    {
      label: "Complete",
      value: "Complete",
      desc: fun(),
    },
    // {
    //   label: "Vue",
    //   value: "vue",
    //   desc: `We're not always in the position that we want to be at.
    //   We're constantly growing. We're constantly making mistakes. We're
    //   constantly trying to express ourselves and actualize our dreams.`,
    // },
    // {
    //   label: "Angular",
    //   value: "angular",
    //   desc: `Because it's about motivating the doers. Because I'm here
    //   to follow my dreams and inspire other people to follow their dreams, too.`,
    // },
    // {
    //   label: "Svelte",
    //   value: "svelte",
    //   desc: `We're not always in the position that we want to be at.
    //   We're constantly growing. We're constantly making mistakes. We're
    //   constantly trying to express ourselves and actualize our dreams.`,
    // },
  ];

  return (

    <Tabs value="Tasks">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}