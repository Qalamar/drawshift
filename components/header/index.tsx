import Icon from "components/common/Icon";
import TextLoop from "react-text-loop";
import * as Headers from "./styles";

const features = [
  {
    icon: "NewspaperIcon",
    text: "Charts",
  },
  {
    icon: "TemplateIcon",
    text: "Boards",
  },
  {
    icon: "ChartPieIcon",
    text: "Graphs",
  },
];

export default function Header() {
  return (
    <Headers.Wrapper>
      <div>
        <Headers.Title>
          Make{" "}
          <TextLoop
            springConfig={{ stiffness: 180, damping: 16 }}
            mask={true}
            className="-mt-2 text-left md:-mt-0"
            interval={3000}
          >
            {features.map((feature) => (
              <Headers.Feature key={`${feature.text}`}>
                <Icon icon={feature.icon} />
                {feature.text}
              </Headers.Feature>
            ))}
          </TextLoop>{" "}
          on the go
        </Headers.Title>
        <Headers.Subtitle>
          Drawshift is a cross-platfrom drawing app to express and store your
          ideas, bringing them everywhere you go.
        </Headers.Subtitle>
      </div>
    </Headers.Wrapper>
  );
}
