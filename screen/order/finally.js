import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from "react-native";
import styles from "../../style/order";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { SERVER } from "@env";

import Navigation from "../../components/Navigation";
import backgroundOrder from "../../assets/images/backgroundOrderFinally.jpg";
import axios from "axios";
import useVerify from "../../components/hook/useVerify";

const OrderSelectFinally = () => {
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
            <Text style={styles.finallyText}>Дякуємо за замовлення!</Text>
          </ImageBackground>
        </View>
      </View>

      <View style={styles.messageFinally}>
        <Text style={styles.messageFinallyText}>
          Ми повідомимо Вам про готовність відправивши SMS або
          Viber-повідомлення
        </Text>
      </View>

      <View style={styles.orderFinallyWrapper}>
        <TouchableOpacity style={styles.orderFinally}>
          <View style={styles.orderFinallyBlock}>
            <Text style={styles.orderFinallyNumber}>
              № {dataOrder ? addDashEveryThirdCharacter(dataOrder.id) : ""}
            </Text>
            <Text style={styles.orderFinallyDate}>
              від {dataOrder ? dataOrder.dateCreate : ""}
            </Text>
          </View>
          <View style={styles.orderFinallyNotification}>
            <Text style={styles.orderFinallyNotificationText}>
              Нове замовлення
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.orderButtonsWrapper}>
        <TouchableOpacity
          style={styles.orderButtonGoOrders}
          onPress={() => {
            navigation.navigate("profile/order");
          }}
        >
          <Text style={styles.orderButtonText}>Мої замовлення</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.orderButtonGoCatalog}
          onPress={() => {
            navigation.navigate("home");
          }}
        >
          <Text style={styles.orderButtonText}>Продовжити покупки</Text>
        </TouchableOpacity>
      </View>

      <StatusBar barStyle="dark-content" />
      <Navigation />
    </>
  );
};

export default OrderSelectFinally;
