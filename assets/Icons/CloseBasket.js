import Svg, { Path, Rect, Defs, G, ClipPath } from "react-native-svg";

const CloseBasket = ({ color = "", width = 25, height = 25 }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.8337 5.34169L14.6587 4.16669L10.0003 8.82502L5.34199 4.16669L4.16699 5.34169L8.82533 10L4.16699 14.6584L5.34199 15.8334L10.0003 11.175L14.6587 15.8334L15.8337 14.6584L11.1753 10L15.8337 5.34169Z"
        fill={color === "" ? "black" : color}
        fill-opacity="0.87"
      />
    </Svg>
  );
};

export default CloseBasket;
