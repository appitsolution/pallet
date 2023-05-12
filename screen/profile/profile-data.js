import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import Navigation from "../../components/Navigation";
import styles from "../../style/profile/profile-data";
import BackCatalog from "../../assets/Icons/BackCatalog";
import ChangeIcon from "../../assets/Icons/ChangeIcon";
import { useNavigation } from "@react-navigation/native";
import ChangePassword from "../../components/profile/ChangePassword";
import { useState } from "react";

const ProfileData = () => {
  const navigation = useNavigation();
  const [isShowPassModal, setIsShowPassModal] = useState(false);
  return (
    <>
      <View>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate("profile")}
        >
          <BackCatalog />
          <Text style={styles.backText}>Особистий кабінет</Text>
        </TouchableOpacity>

        <View style={styles.data}>
          <TouchableOpacity style={styles.dataButton}>
            <Text style={styles.dataButtonText}>Особисті дані</Text>
            <ChangeIcon />
          </TouchableOpacity>
          <View style={styles.wrapperBlock}>
            <View style={styles.wrapper}>
              <Text style={styles.wrapperHead}>Ім’я </Text>
              <Text style={styles.wrapperSecond}>Іван Іванов</Text>
            </View>
            <View style={styles.wrapper}>
              <Text style={styles.wrapperHead}>Дата народження</Text>
              <Text style={styles.wrapperSecond}>дд-мм-рррр</Text>
            </View>
            <View style={styles.wrapper}>
              <Text style={styles.wrapperHead}>Електронна адреса </Text>
              <Text style={styles.wrapperSecond}>ivanov32@gmail.com</Text>
            </View>
            <View style={styles.wrapper}>
              <Text style={styles.wrapperHead}>Номер телефону </Text>
              <Text style={styles.wrapperSecond}>+380 98 622-22-01</Text>
            </View>
          </View>
        </View>

        <View style={styles.address}>
          <TouchableOpacity style={styles.dataButton}>
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
      <ChangePassword show={isShowPassModal} showFunc={setIsShowPassModal} />
      <Navigation active="profile" />
      <StatusBar barStyle="dark-content" />
    </>
  );
};

export default ProfileData;
