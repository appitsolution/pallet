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
import axios from "axios";
import { SERVER_ADMIN, GOOGLE_KEY } from "@env";

const OrderSelectAddress = () => {
  const isFocusedScreen = useIsFocused();
  const navigation = useNavigation();
  const [searchInput, setSearchInput] = useState("");
  const [focusSearch, setFocusSearch] = useState(false);

  const [region, setRegion] = useState({
    latitude: 50.2335773,
    longitude: 30.6236303,
    latitudeDelta: 1.9022, // Масштаб по широте
    longitudeDelta: 1.3421, // Масштаб по долготе
  });

  const [addressData, setAddressData] = useState([]);

  const getRegion = async () => {
    const currentCity = await AsyncStorage.getItem("orderData");

    const getRegion = await axios(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${
        JSON.parse(currentCity).city
      }&key=${GOOGLE_KEY}`
    );

    const getRegionGeo = getRegion.data.results[0].geometry.location;

    setRegion({
      latitude: getRegionGeo.lat,
      longitude: getRegionGeo.lng,
      latitudeDelta: 1.9022, // Масштаб по широте
      longitudeDelta: 1.3421,
    });
  };

  const getAddress = async () => {
    const response = await axios(`${SERVER_ADMIN}/api/storehouse`);

    if (response.data.docs.length === 0) return;
    const listStorehouse = response.data.docs;

    const googleGeo = await Promise.all(
      listStorehouse.map(async (item) => {
        const responseGoogle = await axios(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${
            item.city + "-" + item.address
          }&key=${GOOGLE_KEY}`
        );

        const location = responseGoogle.data.results[0].geometry.location;

        return {
          id: item.id,
          address: item.address,
          schedule: item.schedule,
          coordinate: { latitude: location.lat, longitude: location.lng },
        };
      })
    );

    setAddressData(googleGeo);
  };

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

  useEffect(() => {
    if (isFocusedScreen) {
      getRegion();

      getAddress();
    }
  }, [isFocusedScreen]);
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
            key={region.latitude}
            style={{ width: "100%", height: "100%" }}
            initialRegion={region}
          >
            {addressData.length === 0 ? (
              <></>
            ) : (
              <>
                {addressData.map((item, index) => (
                  <Marker
                    key={index}
                    coordinate={item.coordinate}
                    onPress={() => goToPayment(item.address)}
                  />
                ))}
              </>
            )}
          </MapView>
        ) : (
          <View style={styles.selectAdressWrapper}>
            <View style={styles.selectAdress}>
              {searchAddressFilter.length === 0 ? (
                <>
                  {addressData.length === 0 ? (
                    <></>
                  ) : (
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
                  )}
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
