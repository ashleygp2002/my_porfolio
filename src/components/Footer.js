// import React from "react";
// import styled from "styled-components";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <FooterContent>
//         <p>© 2025 Ashley Gonzalez Perez | All Rights Reserved</p>
//         <SocialIcons>
//           <a
//             href="https://www.linkedin.com/in/ashley-gonzalez-perez/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaLinkedin className="icon" />
//           </a>
//           <a
//             href="https://github.com/ashleygp2002"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaGithub className="icon" />
//           </a>
//           <a href="mailto:agonzalezperez2020@gmail.com">
//             <FaEnvelope className="icon" />
//           </a>
//         </SocialIcons>
//       </FooterContent>
//     </FooterContainer>
//   );
// };

// const FooterContainer = styled.footer`
//   background: rgba(0, 0, 0, 0.5);
//   backdrop-filter: blur(10px);
//   color: white;
//   text-align: center;
//   padding: 20px;
//   width: 100vw;         
//   margin: 0;            
//   box-shadow: 0px -3px 10px rgba(255, 255, 255, 0.1);
// `;


// const FooterContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 10px;
//   font-size: 14px;
// `;

// const SocialIcons = styled.div`
//   display: flex;
//   gap: 20px;

//   .icon {
//     font-size: 22px;
//     color: white;
//     transition: color 0.3s ease, transform 0.3s ease;
//   }

//   .icon:hover {
//     color: #ebc660; /* Highlight on Hover */
//     transform: translateY(-3px);
//   }
// `;


// export default Footer;

import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Ashley Gonzalez Perez | All Rights Reserved</p>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/ashley-gonzalez-perez/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/ashleygp2002" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="mailto:agonzalezperez2020@gmail.com"><FaEnvelope /></a>
      </div>
    </footer>
  );
};

export default Footer;
