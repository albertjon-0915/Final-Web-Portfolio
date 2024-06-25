import React from "react";
import "../styles/homePage.scss";

import { mockData } from "../mockData/mockData";

export default function ToolsAndTechnology() {
     console.log(mockData);

     const technologies = mockData.technologies.map((item) => {
          return (
               <div key={item} className="toolsAndTech" id={item}>
                    {item}
               </div>
          );
     });

     const tools = mockData.tools.map((item) => {
          return (
               <div key={item} className="toolsAndTech" id={item}>
                    {item}
               </div>
          );
     });

     return (
          <>
               <div className="techContainer">{technologies}</div>
               <div className="toolsContainer">{tools}</div>
          </>
     );
}
