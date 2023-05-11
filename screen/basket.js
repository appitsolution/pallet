import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Navigation from "../components/Navigation";
import catalog from "../assets/catalog.png";
import CloseBasket from "../assets/Icons/CloseBasket";
import { useNavigation } from "@react-navigation/native";
import styles from "../style/basket";
import BasketNull from "../assets/Icons/BasketNull";

const catalogData = [
  {
    title: "Європіддон б/в 1-й сорт, дерев’яний, світлий.",
    desc: `Розміри: 800х1200х144(мм). Навантаження: до 2500кг. Маркування: знаками EUR і відмітками IPPC`,
  },
  {
    title: "Європіддон б/в 1-й сорт, дерев’яний, світлий.",
    desc: `Розміри: 800х1200х144(мм). Навантаження: до 2500кг. Маркування: знаками EUR і відмітками IPPC`,
  },
  {
    title: "Європіддон б/в 1-й сорт, дерев’яний, світлий.",
    desc: `Розміри: 800х1200х144(мм). Навантаження: до 2500кг. Маркування: знаками EUR і відмітками IPPC`,
  },
  {
    title: "Європіддон б/в 1-й сорт, дерев’яний, світлий.",
    desc: `Розміри: 800х1200х144(мм). Навантаження: до 2500кг. Маркування: знаками EUR і відмітками IPPC`,
  },
  {
    title: "Європіддон б/в 1-й сорт, дерев’яний, світлий.",
    desc: `Розміри: 800х1200х144(мм). Навантаження: до 2500кг. Маркування: знаками EUR і відмітками IPPC`,
  },
  {
    title: "Європіддон б/в 1-й сорт, дерев’яний, світлий.",
    desc: `Розміри: 800х1200х144(мм). Навантаження: до 2500кг. Маркування: знаками EUR і відмітками IPPC`,
  },
];

const Basket = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.basket}>
        <View style={styles.basketTitle}>
          <Text style={styles.basketTitleText}>Кошик</Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {catalogData.length !== 0 ? (
            <>
              <View style={styles.basketList}>
                {catalogData.map((item, index) => (
                  <View key={index} style={styles.basketItem}>
                    <Image source={catalog} style={styles.basketImage} />
                    <View style={styles.basketContent}>
                      <Text style={styles.basketContentTitle}>
                        {item.title}
                      </Text>
                      <Text style={styles.basketContentDesc}>{item.desc}</Text>
                      <View style={styles.basketContentBonus}>
                        <View style={styles.basketContentBonusBlock}>
                          <Text style={styles.basketContentBonusScore}>
                            + 500{" "}
                          </Text>
                          <Text style={styles.basketContentBonusText}>
                            балів
                          </Text>
                        </View>
                        <TextInput
                          style={styles.basketContentBonusInput}
                          value="100"
                        />
                      </View>
                    </View>
                    <TouchableOpacity style={styles.basketContentClose}>
                      <CloseBasket />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate("home")}
                style={styles.basketButtonBack}
              >
                <Text style={styles.basketButtonBackText}>
                  Додати ще товарів
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("sign")}
                style={styles.basketButtonOrder}
              >
                <Text style={styles.basketButtonOrderText}>
                  Оформити замовлення
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <View>
              <BasketNull />
            </View>
          )}
        </ScrollView>
      </View>

      <Navigation active="shop" />
    </>
  );
};

export default Basket;
