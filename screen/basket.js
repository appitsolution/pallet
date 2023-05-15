import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StatusBar,
} from "react-native";
import Navigation from "../components/Navigation";
import catalog from "../assets/catalog.png";
import CloseBasket from "../assets/Icons/CloseBasket";
import { useNavigation } from "@react-navigation/native";
import styles from "../style/basket";
import BasketNull from "../assets/Icons/BasketNull";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SERVER_ADMIN } from "@env";

const Basket = () => {
  const navigation = useNavigation();
  const [basketData, setBasketData] = useState([]);
  const [test, setTest] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("basket").then((value) => {
      if (!value) return;
      const result = JSON.parse(value);
      setBasketData(result);
    });
  });

  const deleteBasket = async (id) => {
    const basket = await AsyncStorage.getItem("basket");
    const list = JSON.parse(basket);

    const result = list.filter((item) => item.id !== id);

    await AsyncStorage.setItem("basket", JSON.stringify(result));

    setBasketData(result);
  };

  const changeInput = async (value, id) => {
    const newValue = value.replace(/[^0-9]/g, "");
    const newBasket = basketData.map((item) => {
      if (item.id === id) return { ...item, score: newValue };
      return item;
    });
    setBasketData(newBasket);
    await AsyncStorage.setItem("basket", JSON.stringify(newBasket));
  };

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
          {basketData.length !== 0 ? (
            <>
              <View style={styles.basketList}>
                {basketData.map((item, index) => (
                  <View key={index} style={styles.basketItem}>
                    <Image
                      source={{
                        uri: `${SERVER_ADMIN}/media/${item.images[0].catalog.filename}`,
                      }}
                      resizeMode="center"
                      style={styles.basketImage}
                    />
                    <View style={styles.basketContent}>
                      <Text style={styles.basketContentTitle}>{item.name}</Text>
                      <Text style={styles.basketContentDesc}>{item.span}</Text>
                      <View style={styles.basketContentBonus}>
                        <View style={styles.basketContentBonusBlock}>
                          <Text style={styles.basketContentBonusScore}>
                            + {String(Number(item.score) * 5)}{" "}
                          </Text>
                          <Text style={styles.basketContentBonusText}>
                            балів
                          </Text>
                        </View>
                        <TextInput
                          onChangeText={(value) => changeInput(value, item.id)}
                          style={styles.basketContentBonusInput}
                          value={String(item.score)}
                          onBlur={async (event) => {
                            if (event.nativeEvent.text === "") {
                              const newBasket = basketData.map((el) => {
                                if (el.id === item.id)
                                  return { ...item, score: "1" };
                                return item;
                              });
                              setBasketData(newBasket);
                              await AsyncStorage.setItem(
                                "basket",
                                JSON.stringify(newBasket)
                              );
                            }
                          }}
                        />
                      </View>
                    </View>
                    <TouchableOpacity
                      style={styles.basketContentClose}
                      onPress={() => deleteBasket(item.id)}
                    >
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
            <View style={styles.basketNull}>
              <BasketNull />
              <Text style={styles.basketNullTitle}>Кошик порожній</Text>
              <Text
                style={styles.basketNullDesc}
              >{`Але це ніколи не пізно виправити :)`}</Text>
            </View>
          )}
        </ScrollView>
      </View>

      <StatusBar barStyle="dark-content" />
      <Navigation active="shop" scoreBasket={basketData.length} />
    </>
  );
};

export default Basket;
