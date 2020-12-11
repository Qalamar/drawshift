import React from "react";
import tw, { styled } from "twin.macro";
import DottedIcon from "../../assets/icons/DottedIcon";
import FeatureIcon from "../../assets/icons/FeatureIcon";

const Container = styled.div`
  ${tw`px-4 mt-16 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20`}
`;

const Header = styled.div`
  ${tw`max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12`}
`;

const Title = styled.h2`
  ${tw`max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto`}
`;

const List = styled.div`
  ${tw`max-w-lg space-y-3 sm:mx-auto lg:max-w-xl`}
`;

const Item = styled.div`
  ${tw`flex items-center p-2 transition-colors duration-200 border rounded shadow hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400`}
`;

const ItemContent = styled.div`
  ${tw`text-gray-800 transition-colors duration-200 group-hover:text-white`}
`;

const features = require("../../assets/data/features.json");

const Features = () => {
  return (
    <Container>
      <Header>
        <Title>
          <span className="relative inline-block">
            <DottedIcon />
            <span className="relative">Play</span>
          </span>
          anywhere you want
        </Title>
      </Header>
      <List>
        {features.map((feature: { text: string }) => (
          <Item key={feature.text} text={feature.text} className="group">
            <FeatureIcon />
            <ItemContent>{feature.text}</ItemContent>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Features;
