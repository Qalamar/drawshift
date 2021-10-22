import tw, { styled } from "twin.macro";
import * as Card from "./styles";

const Showcase = () => {
  return (
    <Card.Wrapper>
      <Card.Background>
        <Card.Content>
          <div className="">
            <Card.Title>
              <span className="block">Ready to dive in?</span>
              <span className="block text-red-900">Get started for free.</span>
            </Card.Title>
            <Card.Subtitle>
              Drawshift is free of charge while in beta.
            </Card.Subtitle>
            <Card.Button href="#">Source Code</Card.Button>
          </div>
        </Card.Content>
        <Card.ImageWrapper>
          <Card.Image src="/drawshift.gif" alt="App screenshot" />
        </Card.ImageWrapper>
      </Card.Background>
    </Card.Wrapper>
  );
};

export default Showcase;
