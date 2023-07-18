import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import { propTypesClassName } from "@material-tailwind/react/types/components/accordion";
import TopArtistCard from "./TopArtistCard";

  export default function TopArtist() {
    const data = [
      {
        label: "Popular",
        value: "html",
        img: "https://cdn.dribbble.com/users/383277/screenshots/18055765/media/e5fc935b60035305099554810357012a.png?compress=1&resize=450x338&vertical=top",
      },
      {
        label: "Following",
        value: "react",
        img: "https://cdn.dribbble.com/users/383277/screenshots/18055765/media/e5fc935b60035305099554810357012a.png?compress=1&resize=450x338&vertical=top",
      }
    ];
   
    return (
      <div className="topListArtist">
       <Tabs id="custom-animation" value="html">
       <div className="top-artist-btn-bg  w-[540px] m-auto">
         <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
         </TabsHeader>
       </div>
        <TabsBody
          animate={{
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, img }) => (
            <TabPanel key={value} value={value}>
              <TopArtistCard />
            </TabPanel>
          ))}
        </TabsBody>
       </Tabs>
      </div>
    );
  }