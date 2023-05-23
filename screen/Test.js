import Swiper from "react-native-swiper";
import Home from "./home";
import Bonus from "./bonus";
import Basket from "./basket";

const Test = () => {
  return (
    <Swiper showsPagination={false} loop={false}>
      <Home />
      <Bonus />
      <Basket />
    </Swiper>
  );
};

export default Test;
