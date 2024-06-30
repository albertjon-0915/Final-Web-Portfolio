import React from "react";
import { useState, useEffect } from "react";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaConnectdevelop } from "react-icons/fa6";
import "../styles/footer.scss";

export default function Footer() {
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
               <footer>
                    <div className="footerContainer1">
                         <div>
                              <ul className="list-unstyled">
                                   {Array.isArray(tech.tech) && tech.tech.map((item) => <li>{item}</li>)}
                              </ul>
                         </div>
                         <div>
                              <ul className="list-unstyled">
                                   {Array.isArray(tech.tools) && tech.tools.map((item) => <li>{item}</li>)}
                              </ul>
                         </div>
                         <div>
                              <ul className="list-unstyled">
                                   <li>albert.jon.inciong@gmail.com</li>
                                   <li>09154018912</li>
                                   <li>Web Developer</li>
                              </ul>
                         </div>
                         <div>
                              <FaConnectdevelop className="footerImg" />
                         </div>
                    </div>
                    <div className="socials">
                         <ul className="list-unstyled d-flex">
                              <li>
                                   <a
                                        href="https://www.facebook.com/alaric.0915"
                                        target="_blank"
                                   >
                                        <BsFacebook />
                                   </a>
                              </li>
                              <li>
                                   <a
                                        href="https://www.linkedin.com/in/albert-jon-7a8957288/"
                                        target="_blank"
                                   >
                                        <BsLinkedin />
                                   </a>
                              </li>
                              <li>
                                   <a
                                        href="https://github.com/albertjon-0915"
                                        target="_blank"
                                   >
                                        <BsGithub />
                                   </a>
                              </li>
                         </ul>
                         <span href="#">Albert Inciong</span>
                         <span>2024&copy;</span>
                         <span>All Rights Reserved</span>
                    </div>
               </footer>
          </>
     );
}
