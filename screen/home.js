import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import normal from "../style/normal";
import Logo from "../components/Logo";
import Swiper from "react-native-swiper";
import { useState } from "react";
import catalog from "../assets/catalog.jpg";
import CatalogPlus from "../assets/Icons/CatalogPlus";

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
];

const Home = () => {
  const [testTab, setTestTab] = useState(true);
  return (
    <View style={styles.home}>
      <Logo />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.banner}>
          <Swiper showsButtons={false}>
            <View style={styles.bannerItem}>
              <View style={styles.bannerFirst}>
                <Text>Test</Text>
              </View>
              <View style={styles.bannerLast}></View>
            </View>
            <View style={styles.bannerItem}>
              <View style={styles.bannerFirst}></View>
              <View style={styles.bannerLast}></View>
            </View>
          </Swiper>
        </View>

        <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              paddingVertical: 12,

              borderBottomColor: testTab ? "#272727" : "transparent",
              borderBottomWidth: 4,
            }}
            onPress={() => setTestTab(true)}
          >
            <Text
              style={{
                textAlign: "center",
                textTransform: "uppercase",
                fontSize: 13,
                lineHeight: 16,
                fontWeight: 500,
              }}
            >
              Поставка палет
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              paddingVertical: 12,
              borderBottomColor: !testTab ? "#272727" : "transparent",
              borderBottomWidth: 4,
            }}
            onPress={() => {
              setTestTab(false);
            }}
          >
            <Text
              style={{
                textAlign: "center",
                textTransform: "uppercase",
                fontSize: 13,
                lineHeight: 16,
                fontWeight: 500,
              }}
            >
              Викуп піддонів
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sortButton}>
          <FlatList
            style={styles.sortButtonList}
            data={sortButtons}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{
                    ...styles.sortButtonItem,
                    backgroundColor: item.active ? "#272727" : "#F1F1F1",
                  }}
                >
                  <Text
                    style={{
                      ...styles.sortButtonItemText,
                      color: item.active ? "#ffffff" : "#272727",
                    }}
                  >
                    {item.text}
                  </Text>
                </TouchableOpacity>
              );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ width: "100%", marginTop: 20, gap: 16 }}>
          {catalogData.map((item) => (
            <View
              style={{
                backgroundColor: "#FFFFFF",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.14,
                shadowRadius: 1,
                elevation: 2,
                borderRadius: 4,
                padding: 12,
                paddingRight: 16,
                flexDirection: "row",
                gap: 14,
              }}
            >
              <Image source={catalog} style={{ width: "40%" }} />
              <View style={{ width: "60%" }}>
                <Text
                  style={{
                    fontSize: 13,
                    lineHeight: 16,
                    fontWeight: "700",
                    marginBottom: 5,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{ fontSize: 13, lineHeight: 18, fontWeight: "400" }}
                >
                  {item.desc}
                </Text>
                <TouchableOpacity
                  style={{ marginLeft: "auto", marginRight: 16 }}
                >
                  <CatalogPlus />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    ...normal.containerTop,
    backgroundColor: "#ffffff",
  },
  banner: {
    position: "relative",
    marginTop: 12,
    height: "100%",
    maxHeight: 142,
  },
  bannerItem: {
    flex: 1,
    flexDirection: "row",
    columnGap: 4,
    marginHorizontal: 4,
  },
  bannerFirst: {
    width: "70%",
    backgroundColor: "#D8D8D8",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  bannerLast: {
    width: "30%",
    backgroundColor: "#D8D8D8",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  sortButton: {
    marginTop: 30,
  },
  sortButtonList: {
    width: "100%",
    gap: 7,
  },
  sortButtonItem: {
    marginHorizontal: 5,
    borderRadius: 5,
    overflow: "hidden",
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  sortButtonItemText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 500,
    color: "#272727",
  },
});

export default Home;
