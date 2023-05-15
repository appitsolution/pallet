import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Navigation from "../../components/Navigation";
import { StatusBar } from "react-native";
import styles from "../../style/profile/profile-visibility";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import BackCatalog from "../../assets/Icons/BackCatalog";
import catalog from "../../assets/catalog.png";
import CatalogPlus from "../../assets/Icons/CatalogPlus";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const catalogData = [
  {
    id: "1",
    title: "Європіддон б/в 1-й сорт, дерев’яний, світлий.",
    desc: `Розміри: 800х1200х144(мм). Навантаження: до 2500кг. Маркування:
        знаками EUR і відмітками IPPC`,
  },
  {
    id: "2",
    title: "Європіддон б/в 1-й сорт, дерев’яний, світлий.",
    desc: `Розміри: 800х1200х144(мм). Навантаження: до 2500кг. Маркування:
        знаками EUR і відмітками IPPC`,
  },
  {
    id: "3",
    title: "Європіддон б/в 1-й сорт, дерев’яний, світлий.",
    desc: `Розміри: 800х1200х144(мм). Навантаження: до 2500кг. Маркування:
        знаками EUR і відмітками IPPC`,
  },
  {
    id: "4",
    title: "Європіддон б/в 1-й сорт, дерев’яний, світлий.",
    desc: `Розміри: 800х1200х144(мм). Навантаження: до 2500кг. Маркування:
        знаками EUR і відмітками IPPC`,
  },
  {
    id: "5",
    title: "Європіддон б/в 1-й сорт, дерев’яний, світлий.",
    desc: `Розміри: 800х1200х144(мм). Навантаження: до 2500кг. Маркування:
        знаками EUR і відмітками IPPC`,
  },
  {
    id: "6",
    title: "Європіддон б/в 1-й сорт, дерев’яний, світлий.",
    desc: `Розміри: 800х1200х144(мм). Навантаження: до 2500кг. Маркування:
        знаками EUR і відмітками IPPC`,
  },
];

const ProfileVisibility = () => {
  const isFocusScreen = useIsFocused();
  const navigation = useNavigation();
  const [visibilityData, setVisibilityData] = useState([]);

  const requestHistory = async () => {
    const getHistory = await AsyncStorage.getItem("catalogHistory");

    if (!getHistory) return setVisibilityData([]);

    return setVisibilityData(JSON.parse(getHistory));
  };
  useEffect(() => {
    requestHistory();
  }, [isFocusScreen]);
  return (
    <>
      <View style={{ paddingBottom: 200 }}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate("profile")}
        >
          <View style={{ flexDirection: "row" }}>
            <BackCatalog />

            <Text style={styles.backText}>Переглядали раніше</Text>
          </View>
        </TouchableOpacity>

        <ScrollView>
          <View style={styles.catalogContainer}>
            {visibilityData.length === 0 ? (
              <></>
            ) : (
              <>
                {visibilityData.map((item, index) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("catalog-item", { test: "2" })
                    }
                    key={index}
                    style={styles.catalogItem}
                  >
                    <Image source={catalog} style={styles.catalogImg} />
                    <View style={styles.catalogContent}>
                      <Text style={styles.catalogTitle}>{item.title}</Text>
                      <Text style={styles.catalogDesc}>{item.desc}</Text>
                      <TouchableOpacity
                        onPress={() => addBasketItem(item.id)}
                        style={styles.catalogBasket}
                      >
                        <CatalogPlus />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                ))}
              </>
            )}
          </View>
        </ScrollView>
      </View>
      <Navigation active="profile" />
      <StatusBar barStyle="dark-content" />
    </>
  );
};

export default ProfileVisibility;
