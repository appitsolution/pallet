import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  StatusBar,
} from "react-native";
import styles from "../../style/order";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import BackCatalog from "../../assets/Icons/BackCatalog";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LocationIcon from "../../assets/Icons/LocationIcon";
import { useEffect, useState } from "react";
import CloseBasket from "../../assets/Icons/CloseBasket";
import { SERVER_ADMIN } from "@env";

const OrderSelectCity = () => {
  const isFocusedAccept = useIsFocused();
  const navigation = useNavigation();

  const [selectCityData, setSelectCityData] = useState([
    {
      title: "Київ",
      active: true,
    },
    {
      title: "Львів",
      active: false,
    },
    {
      title: "Черкаси",
      active: false,
    },
  ]);

  const updateOrder = async (city) => {
    const getOrder = await AsyncStorage.getItem("orderData");

    const newOrderCreate = await AsyncStorage.setItem(
      "orderData",
      JSON.stringify({
        ...JSON.parse(getOrder),
        city: city,
      })
    );
    navigation.navigate("order/select-delivery");
  };

  const getOrderData = async () => {
    const getOrder = await AsyncStorage.getItem("orderData");
    const newSelectCity = selectCityData.map((item) => {
      if (item.title === JSON.parse(getOrder).city) {
        return {
          title: item.title,
          active: true,
        };
      } else {
        return {
          title: item.title,
          active: false,
        };
      }
    });
    setSelectCityData(newSelectCity);
  };
  useEffect(() => {
    if (isFocusedAccept) {
      getOrderData();
    }
  }, [isFocusedAccept]);

  return (
    <>
      <View>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate("order/select-delivery")}
        >
          <View style={{ flexDirection: "row" }}>
            <BackCatalog />

            <Text style={styles.backText}>Виберіть місто </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.selectCityWrapper}>
          <View style={styles.selectCity}>
            {selectCityData.map((item) => {
              console.log(item);
              if (item.active) {
                return (
                  <TouchableOpacity
                    key={item.title}
                    style={styles.selectCityItemActive}
                    onPress={() => {
                      updateOrder(item.title);
                    }}
                  >
                    <View style={styles.cityButtonInfo}>
                      <View style={styles.cityButtonInfoIcon}>
                        <LocationIcon />
                      </View>
                      <View style={styles.cityButtonInfoContent}>
                        <Text style={styles.cityButtonInfoContentText}>
                          Ваше місто
                        </Text>
                        <Text style={styles.cityButtonInfoContentCity}>
                          {item.title}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              } else {
                return (
                  <TouchableOpacity
                    style={styles.selectCityItem}
                    key={item.title}
                    onPress={() => {
                      updateOrder(item.title);
                    }}
                  >
                    <Text style={styles.selectCityItemText}>{item.title}</Text>
                  </TouchableOpacity>
                );
              }
            })}
          </View>
        </View>
      </View>

      <StatusBar barStyle="dark-content" />
    </>
  );
};

export default OrderSelectCity;
