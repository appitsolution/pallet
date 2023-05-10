import { View, Text, TouchableOpacity, Image } from "react-native";
import BackCatalog from "../assets/Icons/BackCatalog";
import Swiper from "react-native-swiper";
import normal from "../style/normal";
import CatalogItemImg from "../assets/cattalog-item.jpg";
import Navigation from "../components/Navigation";
import ShopIcon from "../assets/Icons/ShopIcon";
import { useNavigation, useRoute } from "@react-navigation/native";

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
  return (
    <>
      <View style={{ backgroundColor: "#ffffff" }}>
        <View style={{ width: "100%", paddingTop: 50 }}>
          <TouchableOpacity onPress={() => navigation.navigate("home")}>
            <BackCatalog />
          </TouchableOpacity>
        </View>

        <View style={normal.container}>
          <View style={{ width: "100%", height: 188, marginTop: 10 }}>
            <Swiper
              showsButtons={false}
              paginationStyle={{ position: "absolute", bottom: -20 }}
            >
              {images.map((item, index) => (
                <Image key={index} source={item} style={{ width: "100%" }} />
              ))}
            </Swiper>
          </View>

          <View style={{ marginTop: 40 }}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 16,
                fontWeight: "700",
                color: "#272727",
              }}
            >
              Піддон полегшений 800х1200 2-й гатунок
            </Text>
            <Text
              style={{
                fontSize: 13,
                lineHeight: 18,
                fontWeight: "400",
                color: "#272727",
              }}
            >
              дерев’яний, світлий.
            </Text>
            <Text
              style={{
                fontSize: 12,
                lineHeight: 24,
                fontWeight: "700",
                color: "#272727",
                marginTop: 16,
              }}
            >
              Код товару: Pl-103
            </Text>
            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  fontSize: 13,
                  lineHeight: 18,
                  fontWeight: "400",
                  color: "#272727",
                }}
              >
                Розміри: 800х1200х144(мм).
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  lineHeight: 18,
                  fontWeight: "400",
                  color: "#272727",
                }}
              >
                Вага: 18кг. Навантаження: до 2500кг.
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  lineHeight: 18,
                  fontWeight: "400",
                  color: "#272727",
                }}
              >
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
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginTop: 20,
              borderRadius: 4,
              backgroundColor: "#272727",
              paddingBottom: 12,
              paddingTop: 16,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.14,
              shadowRadius: 5,
              elevation: 1,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.12,
              shadowRadius: 10,
              elevation: 2,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 4,
            }}
          >
            <ShopIcon />
            <Text
              style={{
                fontSize: 14,
                lineHeight: 16,
                fontWeight: "500",
                color: "white",
              }}
            >
              Додати в кошик
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Navigation />
    </>
  );
};

export default CatalogItem;
