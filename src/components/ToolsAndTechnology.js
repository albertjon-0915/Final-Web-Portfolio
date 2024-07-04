import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import "../styles/homePage.scss";

export default function ToolsAndTechnology() {
     const [tech, setToolsAndTech] = useState({});

     const fetchData = () => {
          fetch(`${process.env.REACT_APP_API_URL}/projects/tech`)
               .then((res) => res.json())
               .then((data) => {
                    if (data.message === "found items") {
                         setToolsAndTech(data.result[0].toolsAndTech);
                         // console.log(tech);
                         // // console.log(tech.tools);
                         // // console.log(tech.tech);
                    }
               })
               .catch((error) => console.error("Error fetching data:", error));
     };

     useEffect(() => {
          fetchData();
     }, []);

     return (
          <>
               <div className="techContainer">
                    {Array.isArray(tech.tech) && tech.tech.length > 0 ? (
                         tech.tech.map((item) => (
                              <div key={item} className="toolsAndTech" id={item}>
                                   {item}
                              </div>
                         ))
                    ) : (
                         // spinners
                         <div className="position-relative container fluid d-flex justify-content-center" id="loader">
                              <Spinner animation="border" size="md" />
                         </div>
                    )}
               </div>
               <div className="toolsContainer">
                    {Array.isArray(tech.tools) && tech.tech.length > 0 ? (
                         tech.tools.map((item) => (
                              <div key={item} className="toolsAndTech" id={item}>
                                   {item}
                              </div>
                         ))
                    ) : (
                         // spinners
                         <div className="position-relative container fluid d-flex justify-content-center" id="loader">
                              <Spinner animation="border" size="md" />
                         </div>
                    )}
               </div>
          </>
     );
}
