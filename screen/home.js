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
import { useState } from "react";
import catalog from "../assets/catalog.png";
import CatalogPlus from "../assets/Icons/CatalogPlus";
import Navigation from "../components/Navigation";
import { useNavigation } from "@react-navigation/native";
import styles from "../style/homeStyle";
import slide1 from "../assets/images/slider/slide-1.jpg";
import slide2 from "../assets/images/slider/slide-2.jpg";
import slide3 from "../assets/images/slider/slide-3.jpg";
import slide4 from "../assets/images/slider/slide-4.jpg";
import bonus from "../assets/images/slider/bonus.jpg";
import { StatusBar } from "expo-status-bar";

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

const catalogData = [
  {
    title: "Європіддон б/в 1-й сорт, дерев’яний, світлий.",
    desc: `Розміри: 800х1200х144(мм). Навантаження: до 2500кг. Маркування:
        знаками EUR і відмітками IPPC`,
  },
  {
    title: "Європіддон б/в 1-й сорт, дерев’яний, світлий.",
    desc: `Розміри: 800х1200х144(мм). Навантаження: до 2500кг. Маркування:
        знаками EUR і відмітками IPPC`,
  },
  {
    title: "Європіддон б/в 1-й сорт, дерев’яний, світлий.",
    desc: `Розміри: 800х1200х144(мм). Навантаження: до 2500кг. Маркування:
        знаками EUR і відмітками IPPC`,
  },
  {
    title: "Європіддон б/в 1-й сорт, дерев’яний, світлий.",
    desc: `Розміри: 800х1200х144(мм). Навантаження: до 2500кг. Маркування:
        знаками EUR і відмітками IPPC`,
  },
  {
    title: "Європіддон б/в 1-й сорт, дерев’яний, світлий.",
    desc: `Розміри: 800х1200х144(мм). Навантаження: до 2500кг. Маркування:
        знаками EUR і відмітками IPPC`,
  },
  {
    title: "Європіддон б/в 1-й сорт, дерев’яний, світлий.",
    desc: `Розміри: 800х1200х144(мм). Навантаження: до 2500кг. Маркування:
        знаками EUR і відмітками IPPC`,
  },
];

const Home = () => {
  const [testTab, setTestTab] = useState(true);

  const router = useNavigation();
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

          <View style={styles.grey}>
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
            {catalogData.map((item, index) => (
              <TouchableOpacity
                onPress={() => router.navigate("catalog-item", { test: "2" })}
                key={index}
                style={styles.catalogItem}
              >
                <Image source={catalog} style={styles.catalogImg} />
                <View style={styles.catalogContent}>
                  <Text style={styles.catalogTitle}>{item.title}</Text>
                  <Text style={styles.catalogDesc}>{item.desc}</Text>
                  <TouchableOpacity style={styles.catalogBasket}>
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
