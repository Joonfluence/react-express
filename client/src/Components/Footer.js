import React from "react";
import styled from "styled-components";
import { MdLocalPostOffice } from "react-icons/md";

const FooterBlock = styled.footer`
  background-color: ${(props) => props.theme.color.grey};
  height: 10vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterBlock>
      <div>
        <dl
          style={{
            display: "flex",
            alignitems: "center",
            justifyContent: "center",
            margin: "1rem",
          }}
        >
          {/* AiFillGithub */}
          <dt>Icons : Blog, Git-hub, Rocket-Punch</dt>
          {/*  */}
          <dt>© 2021, heyJoon</dt>
        </dl>
      </div>
      <div>
        <MdLocalPostOffice /> goodfluence@naver.com
      </div>
    </FooterBlock>
  );
};

export default Footer;
