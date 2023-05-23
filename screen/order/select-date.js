import { View, Text, TouchableOpacity, StatusBar, Button } from "react-native";
import styles from "../../style/order";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import BackCatalog from "../../assets/Icons/BackCatalog";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { SERVER } from "@env";
import { Calendar, LocaleConfig } from "react-native-calendars";
import useVerify from "../../components/hook/useVerify";
import axios from "axios";
import moment from "moment";
import "moment/locale/uk";

const OrderSelectDate = () => {
  const isFocusedAccept = useIsFocused();
  const navigation = useNavigation();

  const [currentDate, setCurrentDate] = useState("2023-05-26");

  const handleDayPress = (day) => {
    // console.log("Выбранная дата:", day);
    setCurrentDate(day.dateString);
  };

  LocaleConfig.locales["uk"] = {
    monthNames: [
      "Січень",
      "Лютий",
      "Березень",
      "Квітень",
      "Травень",
      "Червень",
      "Липень",
      "Серпень",
      "Вересень",
      "Жовтень",
      "Листопад",
      "Грудень",
    ],

    dayNames: [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ],
    dayNamesShort: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  };

  LocaleConfig.defaultLocale = "uk";

  const formatDate = (dateString) => {
    const date = moment(dateString).locale("uk");
    console.log(date.format("ddd, MMMM YYYY"));
    return date.format("ddd, MMMM YYYY");
  };

  function generateNumber() {
    var number = "";

    for (var i = 0; i < 9; i++) {
      number += Math.floor(Math.random() * 10);
    }

    return String(number);
  }

  const getCurrentDate = () => {
    var currentDate = new Date();

    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();

    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }

    var formattedDate = year + "-" + month + "-" + day;

    return formattedDate;
  };

  const responseOrder = async () => {
    const fetchOrderData = await AsyncStorage.getItem("orderData");

    console.log(`Suka: ${SERVER}`);
    await axios.post(`${SERVER}/auth/create/order`, {
      ...JSON.parse(fetchOrderData),
    });
  };

  const updateOrder = async (payment) => {
    const getOrder = await AsyncStorage.getItem("orderData");
    const generateId = generateNumber();
    const user = await useVerify();

    const newOrderCreate = await AsyncStorage.setItem(
      "orderData",
      JSON.stringify({
        ...JSON.parse(getOrder),
        dateSend: currentDate, //  Дата доставки
        id: generateId, // Ид заказа
        idUser: user.dataFetch._id,
        statusOrder: "В процесі оброблення",
        dateCreate: getCurrentDate(),
      })
    );
    await responseOrder();
    navigation.navigate("order/finally");
  };

  return (
    <>
      <View>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate("order/select-payment")}
        >
          <View style={{ flexDirection: "row" }}>
            <BackCatalog />

            <Text style={styles.backText}>Дата постачання </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.dateCurrent}>
          <Text style={styles.dateCurrentText}>{formatDate(currentDate)}</Text>
        </View>

        <Calendar
          theme={{
            borderColor: "rgba(244, 0, 0, 0.74)",
            borderWidth: 1,
            backgroundColor: "#ffffff",
          }}
          onDayPress={handleDayPress}
          markedDates={{
            [currentDate]: {
              selected: true,
              customStyles: {
                container: {
                  borderColor: "rgba(244, 0, 0, 0.74)",
                  borderWidth: 1,
                  backgroundColor: "#ffffff",
                },
              },
              customContainerStyle: {
                borderColor: "rgba(244, 0, 0, 0.74)",
                borderWidth: 1,
                backgroundColor: "#ffffff",
                width: 100,
                height: 100,
              },
            },
          }}
        />

        <View style={styles.selectNextWrapper}>
          <TouchableOpacity style={styles.selectNext} onPress={updateOrder}>
            <Text style={styles.selectNextText}>Вибрати</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar barStyle="dark-content" />
    </>
  );
};

export default OrderSelectDate;
