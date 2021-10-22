import tw, { styled } from "twin.macro";
import * as Landing from "./styled";

const Card = () => {
  return (
    <Landing.CardWrapper>
      <Landing.CardBackground>
        <Landing.CardContent>
          <div className="lg:self-center">
            <Landing.CardTitle>
              <span className="block">Ready to dive in?</span>
              <span className="block text-red-900">Get started for free.</span>
            </Landing.CardTitle>
            <p className="mt-4 text-lg leading-6 text-orange-50">
              Find all what Drawshift has to offer free of charge, and
              pay-as-you go for features that you like.
            </p>
            <Landing.CardButton href="#">Sign up for free</Landing.CardButton>
          </div>
        </Landing.CardContent>
        <div className="flex items-start pt-10 pb-12 lg:pt-12">
          <Landing.CardImage src="/drawshift.gif" alt="App screenshot" />
        </div>
      </Landing.CardBackground>
    </Landing.CardWrapper>
  );
};

export default Card;
