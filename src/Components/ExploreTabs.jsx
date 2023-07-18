import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import NftCard from "./NftCard";
   
  export default function ExploreTabs() {
    const data = [
      {
        label: "Hot",
        value: "html",
        img: "https://cdn.dribbble.com/users/383277/screenshots/18055765/media/e5fc935b60035305099554810357012a.png?compress=1&resize=450x338&vertical=top",
      },
      {
        label: "Virtual World",
        value: "react",
        img: "https://cdn.dribbble.com/users/383277/screenshots/18055765/media/e5fc935b60035305099554810357012a.png?compress=1&resize=450x338&vertical=top",
      },
   
      {
        label: "Music",
        value: "vue",
        img: "https://cdn.dribbble.com/users/383277/screenshots/18055765/media/e5fc935b60035305099554810357012a.png?compress=1&resize=450x338&vertical=top",
      },
   
      {
        label: "Art",
        value: "angular",
        img: "https://cdn.dribbble.com/users/383277/screenshots/18055765/media/e5fc935b60035305099554810357012a.png?compress=1&resize=450x338&vertical=top",
      },
   
      {
        label: "Sculpture",
        value: "svelte",
        img: "https://cdn.dribbble.com/users/383277/screenshots/18055765/media/e5fc935b60035305099554810357012a.png?compress=1&resize=450x338&vertical=top",
      },
    ];
   
    return (
      <Tabs id="custom-animation" value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, img }) => (
            <TabPanel key={value} value={value}>
              <NftCard />
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }