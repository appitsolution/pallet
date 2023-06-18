import Swiper from "react-native-swiper";
import { useState, useEffect } from "react";
import Home from "./home";
import Bonus from "./bonus";
import Basket from "./basket";
import Profile from "./profile";
import Navigation from "../components/Navigation";

const TabNavigation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentNavigationName = () => {
    const names = ["home", "bonus", "shop", "profile"];

    return names[currentIndex];
  };

  return (
    <>
      <Swiper
        showsPagination={false}
        loop={false}
        onIndexChanged={(index) => {
          setCurrentIndex(index);
        }}
      >
        <Home refresh={currentIndex === 0 ? true : false} />
        <Bonus refresh={currentIndex === 1 ? true : false} />
        <Basket refresh={currentIndex === 2 ? true : false} />
        <Profile />
      </Swiper>
      {/* <Navigation active={currentNavigationName()} /> */}
    </>
  );
};

export default TabNavigation;
