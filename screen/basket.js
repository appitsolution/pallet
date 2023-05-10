import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Navigation from "../components/Navigation";
import catalog from "../assets/catalog.jpg";
import CloseBasket from "../assets/Icons/CloseBasket";
import { useNavigation } from "@react-navigation/native";

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

const Basket = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={{ backgroundColor: "#ffffff" }}>
        <View
          style={{
            width: "100%",
            paddingTop: 50,
            paddingBottom: 10,
            paddingHorizontal: 8,
          }}
        >
          <Text style={{ fontSize: 20, lineHeight: 24, fontWeight: "500" }}>
            Кошик
          </Text>
        </View>

        <ScrollView
          contentContainerStyle={{ paddingBottom: 210, paddingHorizontal: 8 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ width: "100%", marginTop: 20, gap: 16 }}>
            {catalogData.map((item, index) => (
              <View
                key={index}
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
                  position: "relative",
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
                </View>
                <TouchableOpacity
                  style={{ position: "absolute", top: 0, right: 0 }}
                >
                  <CloseBasket />
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("home")}
            style={{
              paddingVertical: 16,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "#272727",
              borderWidth: 1,
              borderRadius: 4,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                lineHeight: 16,
                fontWeight: "500",
                color: "#717171",
              }}
            >
              Додати ще товарів
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("sign")}
            style={{
              paddingVertical: 16,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
              marginTop: 10,

              backgroundColor: "#272727",
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
            <Text
              style={{
                fontSize: 14,
                lineHeight: 16,
                fontWeight: "500",
                color: "#FFFFFF",
              }}
            >
              Оформити замовлення
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <Navigation active="shop" />
    </>
  );
};

export default Basket;
