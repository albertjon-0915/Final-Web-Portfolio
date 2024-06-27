import React from "react";
import { mockData } from "../mockData/mockData";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaConnectdevelop, FaComputer } from "react-icons/fa6";
import "../styles/footer.scss";

export default function Footer() {
     return (
          <>
               <footer>
                    <div className="footerContainer1">
                         <div>
                              <ul className="list-unstyled">
                                   {mockData.technologies.map((item) => (
                                        <li>{item}</li>
                                   ))}
                              </ul>
                         </div>
                         <div>
                              <ul className="list-unstyled">
                                   {mockData.tools.map((item) => (
                                        <li>{item}</li>
                                   ))}
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
                                   <a href="#" target="_blank">
                                        <BsFacebook />
                                   </a>
                              </li>
                              <li>
                                   <a href="#" target="_blank">
                                        <BsLinkedin />
                                   </a>
                              </li>
                              <li>
                                   <a href="#" target="_blank">
                                        <BsGithub />
                                   </a>
                              </li>
                         </ul>
                         <span href="#" target="_blank">
                              Albert Inciong
                         </span>
                         <span href="#" target="_blank">
                              2024&copy;
                         </span>
                         <span href="#" target="_blank">
                              All Rights Reserved
                         </span>
                    </div>
               </footer>
          </>
     );
}
