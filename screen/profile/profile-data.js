import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import axios from "axios";

import Navigation from "../../components/Navigation";
import styles from "../../style/profile/profile-data";
import BackCatalog from "../../assets/Icons/BackCatalog";
import ChangeIcon from "../../assets/Icons/ChangeIcon";
import ChangePassword from "../../components/profile/ChangePassword";
import ProfileDataComponent from "../../components/profile/ProfileData";
import useVerify from "../../components/hook/useVerify";
import {SERVER} from "@env"

const ProfileData = () => {
  const [isShowPassModal, setIsShowPassModal] = useState(false);
  const [showChangeData, setShowChangeData] = useState(false);
  const [showChangeAddress, setShowChangeAddress] = useState(false);

  const navigation = useNavigation();
  const isFocusScreen = useIsFocused();

  const [data, setData] = useState({
    _id: "",
    delivery: {
      _id: "",
      city: "",
      house: "",
      index: "",
      region: "",
      street: "",
    },
    birthday: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    phone: "",
  });

  const [dataInput, setDataInput] = useState({
    birthday: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [deliveryInput, setDeliveryInput] = useState({
    city: "",
    house: "",
    index: "",
    region: "",
    street: "",
  });

  const verifyFun = async () => {
    const { verify, dataFetch } = await useVerify();

    setData(dataFetch);
    setDataInput({
      birthday: dataFetch.birthday,
      email: dataFetch.email,
      firstName: dataFetch.firstName,
      lastName: dataFetch.lastName,
      phone: dataFetch.phone,
    });

    setDeliveryInput({
      city: dataFetch.delivery.city,
      house: dataFetch.delivery.house,
      index: dataFetch.delivery.index,
      region: dataFetch.delivery.region,
      street: dataFetch.delivery.street,
    });
  };

  const changeData = async () => {
    try {
      await axios.post(`${SERVER}/auth/change/data`, {
        ...dataInput,
        id: data._id,
      });
      verifyFun();
      setShowChangeData(false);
    } catch (err) {
      console.log(err);
    }
  };

  const changeDelivery = async () => {
    try {
      await axios.post(`${SERVER}/auth/change/delivery`, {
        ...deliveryInput,
        id: data._id,
      });

      verifyFun();
      setShowChangeAddress(false);
    } catch (err) {
      console.log(err);
    }
  };

  const changePassword = (value) => {
    try {
      axios.post(`${SERVER}/auth/change/password`, {
        id: data._id,
        currentPassword: value.currentPassword,
        newPassword: value.newPassword,
      });
      setIsShowPassModal(false);
      verifyFun();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    verifyFun();
  }, [isFocusScreen]);

  return (
    <>
      <View style={{ paddingBottom: 220 }}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            navigation.navigate("profile");
          }}
        >
          <BackCatalog />
          <Text style={styles.backText}>Особистий кабінет</Text>
        </TouchableOpacity>

        <View
          style={styles.positionWrapper(showChangeData || showChangeAddress)}
        >
          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              navigation.navigate("profile");
            }}
          >
            <BackCatalog />
            <Text style={styles.backText}>Особистий кабінет</Text>
          </TouchableOpacity>

          {showChangeData ? (
            <View style={styles.data}>
              <TouchableOpacity
                style={styles.dataButton}
                onPress={() => {
                  setShowChangeData(!showChangeData);
                }}
              >
                <Text style={styles.dataButtonText}>Особисті дані</Text>
                <ChangeIcon />
              </TouchableOpacity>
              {showChangeData ? (
                <View style={styles.wrapperBlock}>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.inputPlaceholder}>Ваше ім’я</Text>
                    <TextInput
                      style={styles.input}
                      value={dataInput.firstName}
                      onChangeText={(value) => {
                        setDataInput({ ...dataInput, firstName: value });
                      }}
                    />
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.inputPlaceholder}>Прізвище</Text>
                    <TextInput
                      style={styles.input}
                      value={dataInput.lastName}
                      onChangeText={(value) =>
                        setDataInput({ ...dataInput, lastName: value })
                      }
                    />
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.inputPlaceholder}>Дата народження</Text>
                    <TextInput
                      style={styles.input}
                      value={dataInput.birthday}
                      onChangeText={(value) =>
                        setDataInput({ ...dataInput, birthday: value })
                      }
                    />
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.inputPlaceholder}>Телефон</Text>
                    <TextInput
                      style={styles.input}
                      value={dataInput.phone}
                      onChangeText={(value) =>
                        setDataInput({ ...dataInput, phone: value })
                      }
                    />
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.inputPlaceholder}>Ел. почта</Text>
                    <TextInput
                      style={styles.input}
                      value={dataInput.email}
                      onChangeText={(value) =>
                        setDataInput({ ...dataInput, email: value })
                      }
                    />
                  </View>
                  <TouchableOpacity
                    style={styles.saveButton}
                    onPress={changeData}
                  >
                    <Text style={styles.saveButtonText}>Зберегти</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <></>
              )}
            </View>
          ) : (
            <></>
          )}

          {showChangeAddress ? (
            <View style={styles.address}>
              <TouchableOpacity
                style={styles.dataButton}
                onPress={() => setShowChangeAddress(!showChangeAddress)}
              >
                <Text style={styles.dataButtonText}>Адреса доставки</Text>
                <ChangeIcon />
              </TouchableOpacity>

              <View style={styles.wrapperBlock}>
                <View style={styles.inputWrapper}>
                  <Text style={styles.inputPlaceholder}>Область</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(value) =>
                      setDeliveryInput({
                        ...deliveryInput,
                        region: value,
                      })
                    }
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.inputPlaceholder}>
                    Місто або населений пункт
                  </Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(value) =>
                      setDeliveryInput({
                        ...deliveryInput,
                        city: value,
                      })
                    }
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.inputPlaceholder}>Вулиця</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(value) =>
                      setDeliveryInput({
                        ...deliveryInput,
                        street: value,
                      })
                    }
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.inputPlaceholder}>Номер будинку</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(value) =>
                      setDeliveryInput({
                        ...deliveryInput,
                        house: value,
                      })
                    }
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.inputPlaceholder}>Почтовий індекс</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(value) =>
                      setDeliveryInput({
                        ...deliveryInput,
                        index: value,
                      })
                    }
                  />
                </View>
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={changeDelivery}
                >
                  <Text style={styles.saveButtonText}>Зберегти</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <></>
          )}
        </View>
        <View style={styles.data}>
          <TouchableOpacity
            style={styles.dataButton}
            onPress={() => setShowChangeData(!showChangeData)}
          >
            <Text style={styles.dataButtonText}>Особисті дані</Text>
            <ChangeIcon />
          </TouchableOpacity>

          {showChangeData ? <></> : <ProfileDataComponent data={data} />}
        </View>

        <View style={styles.address}>
          <TouchableOpacity
            style={styles.dataButton}
            onPress={() => setShowChangeAddress(!showChangeAddress)}
          >
            <Text style={styles.dataButtonText}>Адреса доставки</Text>
            <ChangeIcon />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.changePassword}
          onPress={() => setIsShowPassModal(!isShowPassModal)}
        >
          <Text style={styles.changePasswordText}>Змінити пароль</Text>
        </TouchableOpacity>
      </View>
      <ChangePassword
        show={isShowPassModal}
        showFunc={setIsShowPassModal}
        changePassword={changePassword}
      />
      <Navigation active="profile" />
      <StatusBar barStyle="dark-content" />
    </>
  );
};

export default ProfileData;
