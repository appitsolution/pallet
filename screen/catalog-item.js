import { View, Text, TouchableOpacity, Image } from "react-native";
import BackCatalog from "../assets/Icons/BackCatalog";
import Swiper from "react-native-swiper";
import normal from "../style/normal";
import styles from "../style/catalog-item";
import CatalogItemImg from "../assets/catalog-item.png";
import Navigation from "../components/Navigation";
import ShopIcon from "../assets/Icons/ShopIcon";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const images = [
  CatalogItemImg,
  CatalogItemImg,
  CatalogItemImg,
  CatalogItemImg,
  CatalogItemImg,
];

const CatalogItem = () => {
  const navigation = useNavigation();
  const router = useRoute();

  console.log(router.params);

  const addBasketItem = async () => {
    // const findCatalog = catalogData.find((item) => item.id === id);
    // if (!findCatalog) return;

    const basket = await AsyncStorage.getItem("basket");
    if (!basket) {
      AsyncStorage.setItem(
        "basket",
        JSON.stringify([
          {
            id: "1",
            title: "Європіддон б/в 1-й сорт, дерев’яний, світлий.",
            desc: `Розміри: 800х1200х144(мм). Навантаження: до 2500кг. Маркування:
            знаками EUR і відмітками IPPC`,
            score: 1,
          },
        ])
      );
      return;
    }

    const result = [
      ...JSON.parse(basket),
      {
        id: "1",
        title: "Європіддон б/в 1-й сорт, дерев’яний, світлий.",
        desc: `Розміри: 800х1200х144(мм). Навантаження: до 2500кг. Маркування:
      знаками EUR і відмітками IPPC`,
        score: "1",
      },
    ];

    AsyncStorage.setItem("basket", JSON.stringify(result));
  };
  return (
    <>
      <View style={styles.catalog}>
        <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.navigate("home")}>
            <BackCatalog />
          </TouchableOpacity>
        </View>

        <View style={normal.container}>
          <View style={styles.sliderContainer}>
            <Swiper
              activeDotStyle={styles.sliderActiveDot}
              showsButtons={false}
              paginationStyle={styles.sliderPagination}
            >
              {images.map((item, index) => (
                <Image key={index} source={item} style={styles.sliderItem} />
              ))}
            </Swiper>
          </View>

          <View style={{ marginTop: 40 }}>
            <Text style={styles.catalogTitle}>
              Піддон полегшений 800х1200 2-й гатунок
            </Text>
            <Text style={styles.catalogTitleSub}>дерев’яний, світлий.</Text>
            <Text style={styles.catalogIndex}>Код товару: Pl-103</Text>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.catalogText}>Розміри: 800х1200х144(мм).</Text>
              <Text style={styles.catalogText}>
                Вага: 18кг. Навантаження: до 2500кг.
              </Text>
              <Text style={styles.catalogText}>
                Виготовлений за стандартами EUR, здійснив 2-3 цикли обігової
                тари. На середньому кубику клеймо IPPC та набита скоба, на
                крайніх кубиках клеймо EUR. П'ять досок верхнього настилу
                145мм/100мм/145мм/100мм/145мм. Товщина досок верхнього настилу,
                перемичок та основи 22мм. Висота кубиків (шашок) 78мм. Все
                элементы поддона - светлые, без повреждений.
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.basketGo}
            onPress={() => addBasketItem()}
          >
            <ShopIcon />
            <Text style={styles.basketGoText}>Додати в кошик</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Navigation />
    </>
  );
};

export default CatalogItem;
