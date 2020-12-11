import React from "react";
import GithubIcon from "../../assets/icons/GithubIcon";
import InfoIcon from "../../assets/icons/InfoIcon";
import MailIcon from "../../assets/icons/MailIcon";
import Divider from "../../components/common/Divider";
import tw, { styled } from "twin.macro";

const Container = styled.div`
  ${tw`relative mt-32 bg-deep-purple-accent-400`}
`;

const Buttons = styled.div`
  ${tw`flex justify-center h-28 items-center mt-4 space-x-4 sm:mt-0`}
`;

const Footer = () => {
  return (
    <Container>
      <Divider />
      <Buttons>
        <GithubIcon />
        <MailIcon />
        <InfoIcon />
      </Buttons>
    </Container>
  );
};

export default Footer;
