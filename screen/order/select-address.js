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
import MapView, { Marker } from "react-native-maps";
import SearchIcon from "../../assets/Icons/SearchIcon";
import { useEffect, useMemo, useState } from "react";
import SelectAddressIcon from "../../assets/Icons/SelectAddressIcon";

const OrderSelectAddress = () => {
  const isFocusedAccept = useIsFocused();
  const navigation = useNavigation();
  const [searchInput, setSearchInput] = useState("");
  const [focusSearch, setFocusSearch] = useState(false);

  const region = {
    latitude: 50.2335773,
    longitude: 30.6236303,
    latitudeDelta: 1.0122, // Масштаб по широте
    longitudeDelta: 1.0421, // Масштаб по долготе
  };

  const addressData = [
    {
      id: "1",
      address: "бул-р Незалежності 31, оф 406, 401 ",
      schedule: "Пн-Пт: 09:00-19:00; Сб: 10.00-16.00; Нд: вихідний ",
      coordinate: { latitude: 50.5335773, longitude: 30.8236303 },
    },
    {
      id: "2",
      address: "бул-р Незалежності 31, оф 406, 401 ",
      schedule: "Пн-Пт: 09:00-19:00; Сб: 10.00-16.00; Нд: вихідний ",
      coordinate: { latitude: 50.5335773, longitude: 30.8236303 },
    },
    {
      id: "3",
      address: "бул-р Миру 31, оф 406, 401 ",
      schedule: "Пн-Пт: 09:00-19:00; Сб: 10.00-16.00; Нд: вихідний ",
      coordinate: { latitude: 50.5335773, longitude: 30.5236355 },
    },
  ];

  const searchAddressFilter = useMemo(() => {
    if (searchInput === "") return [];
    const filter = addressData.filter((item) => {
      if (item.address.includes(searchInput)) {
        return item;
      }
    });
    return filter;
  }, [searchInput]);

  const goToPayment = async (address) => {
    const getOrder = await AsyncStorage.getItem("orderData");
    const newOrderCreate = await AsyncStorage.setItem(
      "orderData",
      JSON.stringify({
        ...JSON.parse(getOrder),
        address: address, // Адресс склада
      })
    );
    navigation.navigate("order/select-payment");
  };
  return (
    <>
      <View>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate("order/select-delivery")}
        >
          <View style={{ flexDirection: "row" }}>
            <BackCatalog />

            <Text style={styles.backText}>Адреса та час роботи</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.searchAddress}>
          <View style={styles.searchAddressIcon}>
            <SearchIcon />
          </View>
          <TextInput
            placeholder="Введіть адресу"
            value={searchInput}
            onChangeText={(value) => setSearchInput(value)}
            onFocus={() => setFocusSearch(true)}
            onBlur={() => setFocusSearch(false)}
          />
        </View>

        {!focusSearch ? (
          <MapView
            style={{ width: "100%", height: "100%" }}
            initialRegion={region}
          >
            {addressData.map((item, index) => (
              <Marker
                key={index}
                coordinate={item.coordinate}
                onPress={() => goToPayment(item.address)}
              />
            ))}
          </MapView>
        ) : (
          <View style={styles.selectAdressWrapper}>
            <View style={styles.selectAdress}>
              {searchAddressFilter.length === 0 ? (
                <>
                  {addressData.map((item) => (
                    <TouchableOpacity
                      style={styles.selectAdressItem}
                      key={item.id}
                      onPress={() => goToPayment(item.address)}
                    >
                      <View style={styles.selectAdressItemIcon}>
                        <SelectAddressIcon />
                      </View>
                      <View style={styles.selectAdressItemContent}>
                        <Text style={styles.selectAdressItemContentText}>
                          Склад:
                        </Text>
                        <Text style={styles.selectAdressItemContentAddress}>
                          {item.address}
                        </Text>
                        <Text style={styles.selectAdressItemContentDay}>
                          {item.schedule}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </>
              ) : (
                <>
                  {searchAddressFilter.map((item) => (
                    <TouchableOpacity
                      style={styles.selectAdressItem}
                      key={item.id}
                      onPress={() => goToPayment(item.address)}
                    >
                      <View style={styles.selectAdressItemIcon}>
                        <SelectAddressIcon />
                      </View>
                      <View style={styles.selectAdressItemContent}>
                        <Text style={styles.selectAdressItemContentText}>
                          Склад:
                        </Text>
                        <Text style={styles.selectAdressItemContentAddress}>
                          {item.address}
                        </Text>
                        <Text style={styles.selectAdressItemContentDay}>
                          {item.schedule}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </>
              )}
            </View>
          </View>
        )}
      </View>

      <StatusBar barStyle="dark-content" />
    </>
  );
};

export default OrderSelectAddress;
