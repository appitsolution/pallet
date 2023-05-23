import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from "react-native";
import styles from "../style/order";
import styleBuyout from "../style/buyout";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

import Navigation from "../components/Navigation";
import backgroundOrder from "../assets/images/backgroundOrderFinally.jpg";

const BuyoutResult = () => {
  const isFocusedAccept = useIsFocused();
  const navigation = useNavigation();
  const [dataOrder, setDataOrder] = useState(null);

  const getOrder = async () => {
    const getDataOrder = await AsyncStorage.getItem("orderData");

    setDataOrder(JSON.parse(getDataOrder));
    await AsyncStorage.setItem("basket", JSON.stringify([]));
  };

  useEffect(() => {
    if (isFocusedAccept) {
      getOrder();
    }
  }, [isFocusedAccept]);

  const addDashEveryThirdCharacter = (inputString) => {
    const regex = /(.{3})/g;
    const result = inputString.replace(regex, "$1-");

    return result.slice(0, -1);
  };
  return (
    <>
      <View style={styles.finallyWrapper}>
        <View style={styles.finally}>
          <ImageBackground style={styles.finallyImage} source={backgroundOrder}>
            <Text style={styles.finallyText}>Дякуємо !</Text>
          </ImageBackground>
        </View>
      </View>

      <View style={styles.messageFinally}>
        <Text style={styles.messageFinallyText}>
          Наш менеджер зв’яжеться з Вами по телефону чи відправивши SMS або
          Viber-повідомлення
        </Text>
      </View>

      <View style={styleBuyout.bannerBonusWrapper}>
        <View style={styleBuyout.bannerBonus}>
          <Text style={styleBuyout.bannerBonusTitle}>Нарахування бонусів</Text>
          <Text style={styleBuyout.bannerBonusText}>
            Після завершення угоди Вам будуть нараховані бонуси, які Ви зможете
            обміняти за програмою лояльності{" "}
          </Text>
          <View style={styleBuyout.bannerBonusScoreWrapper}>
            <Text style={styleBuyout.bannerBonusScore}>500</Text>
            <Text style={styleBuyout.bannerBonusScoreText}>бонусів</Text>
          </View>
        </View>
      </View>

      <View style={styles.orderButtonsWrapper}>
        <TouchableOpacity
          style={styles.orderButtonGoOrders}
          onPress={() => {
            navigation.navigate("profile/order");
          }}
        >
          <Text style={styles.orderButtonText}>Мої пропозиції</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.orderButtonGoCatalog}
          onPress={() => {
            navigation.navigate("home");
          }}
        >
          <Text style={styles.orderButtonText}>нова пропозиція</Text>
        </TouchableOpacity>
      </View>

      <StatusBar barStyle="dark-content" />
      <Navigation />
    </>
  );
};

export default BuyoutResult;
