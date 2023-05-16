import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import Logo from "../components/Logo";
import Swiper from "react-native-swiper";
import { useEffect, useState } from "react";
import CatalogPlus from "../assets/Icons/CatalogPlus";
import Navigation from "../components/Navigation";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../style/homeStyle";
import slide1 from "../assets/images/slider/slide-1.jpg";
import slide2 from "../assets/images/slider/slide-2.jpg";
import slide3 from "../assets/images/slider/slide-3.jpg";
import slide4 from "../assets/images/slider/slide-4.jpg";
import bonus from "../assets/images/slider/bonus.jpg";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { SERVER_ADMIN } from "@env";

const slideData = [
  {
    id: "1",
    image: slide1,
    bonus: true,
  },
  {
    id: "2",
    image: slide2,
    bonus: false,
  },
  {
    id: "3",
    image: slide3,
    bonus: false,
  },
  {
    id: "4",
    image: slide4,
    bonus: false,
  },
];

const sortButtons = [
  { text: "Всі", active: true },
  { text: "Eur/Epal", active: false },
  { text: "800x120", active: false },
  { text: "1000x1200", active: false },
  { text: "Нові", active: false },
  { text: "Пластикові", active: false },
];

const Home = () => {
  const [testTab, setTestTab] = useState(true);
  const isFocusedScreen = useIsFocused();

  const [catalogData, setCatalogData] = useState([]);

  const router = useNavigation();

  const addBasketItem = async (id) => {
    const findCatalog = catalogData.find((item) => item.id === id);
    if (!findCatalog) return;

    const requestBasket = await AsyncStorage.getItem("basket");

    if (!requestBasket || JSON.parse(requestBasket).length === 0) {
      await AsyncStorage.setItem(
        "basket",
        JSON.stringify([{ ...findCatalog, score: "1" }])
      );
      return;
    }

    const basket = JSON.parse(requestBasket);
    const basketCurrent = basket.find((item) => item.id === id);

    if (!basketCurrent) {
      await AsyncStorage.setItem(
        "basket",
        JSON.stringify([...basket, { ...findCatalog, score: "1" }])
      );
      return;
    } else {
      await AsyncStorage.setItem(
        "basket",
        JSON.stringify([
          ...basket.filter((item) => item.id !== basketCurrent.id),
          { ...basketCurrent, score: String(Number(basketCurrent.score) + 1) },
        ])
      );
      return;
    }
  };

  const requestCatalog = async () => {
    try {
      const getCatalog = await axios.get(`${SERVER_ADMIN}/api/products`);
      setCatalogData(getCatalog.data.docs);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isFocusedScreen) {
      requestCatalog();
    }
  }, [isFocusedScreen]);

  return (
    <>
      <View style={styles.home}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          showsVerticalScrollIndicator={false}
        >
          <Logo color="white" />
          <View style={styles.banner}>
            <Swiper
              showsButtons={false}
              paginationStyle={styles.bannerPagination}
              activeDotStyle={styles.bannerActiveDot}
              dotStyle={styles.bannerDot}
              autoplay
            >
              {slideData.map((item) => {
                if (item.bonus) {
                  return (
                    <View style={styles.bannerItem} key={item.id}>
                      <View style={styles.bannerFirstBonus}>
                        <ImageBackground
                          source={item.image}
                          style={{ width: "100%", height: "100%" }}
                        ></ImageBackground>
                      </View>
                      <View style={styles.bannerLast}>
                        <ImageBackground
                          source={bonus}
                          style={{ width: "100%", height: "100%" }}
                        ></ImageBackground>
                      </View>
                    </View>
                  );
                } else {
                  return (
                    <View style={styles.bannerItem} key={item.id}>
                      <View style={styles.bannerFirst}>
                        <ImageBackground
                          source={item.image}
                          style={{ width: "100%", height: "100%" }}
                        ></ImageBackground>
                      </View>
                    </View>
                  );
                }
              })}
            </Swiper>
          </View>

          <View>
            <View style={styles.tabs}>
              <TouchableOpacity
                style={styles.tabsItem(testTab)}
                onPress={() => setTestTab(true)}
              >
                <Text style={styles.tabsText}>Поставка палет</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.tabsItem(!testTab)}
                onPress={() => {
                  setTestTab(false);
                }}
              >
                <Text style={styles.tabsText}>Викуп піддонів</Text>
              </TouchableOpacity>
              <View style={styles.tabsBorder(testTab)}></View>
            </View>

            <View style={styles.sortButton}>
              <FlatList
                style={styles.sortButtonList}
                data={sortButtons}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.sortButtonItem(item.active)}>
                    <Text style={styles.sortButtonItemText(item.active)}>
                      {item.text}
                    </Text>
                  </TouchableOpacity>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          <View style={styles.catalogContainer}>
            {catalogData.map((item) => (
              <TouchableOpacity
                onPress={() => router.navigate("catalog-item", { id: item.id })}
                key={item.id}
                style={styles.catalogItem}
              >
                <View style={styles.catalogImage}>
                  <Image
                    source={{
                      uri: `${SERVER_ADMIN}/media/${item.images[0].catalog.filename}`,
                    }}
                    style={styles.catalogImg}
                    resizeMode="center"
                  />
                </View>
                <View style={styles.catalogContent}>
                  <Text style={styles.catalogTitle}>{item.name}</Text>
                  <Text style={styles.catalogDesc}>
                    Розміри: {item.size}(мм).
                  </Text>
                  <Text style={styles.catalogDesc}>
                    Навантаження: до {item.upload}кг.
                  </Text>

                  <TouchableOpacity
                    onPress={() => addBasketItem(item.id)}
                    style={styles.catalogBasket}
                  >
                    <CatalogPlus />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <Navigation active="home" />
      <StatusBar style="light" />
    </>
  );
};

export default Home;
