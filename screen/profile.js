import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import styles from "../style/profile";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import profileIcon from "../assets/profileTest.png";
import ProfileIcons from "../assets/Icons/ProfileIcons.js";
import { useNavigation } from "@react-navigation/native";

const menuData = [
  {
    title: "Мої замовлення",
    image: "order",
    path: "profile/data",
    important: false,
  },
  {
    title: "Сповіщення",
    image: "notification",
    path: "",
    important: false,
  },
  {
    title: "Партнерська програма",
    image: "partner",
    path: "",
    important: false,
  },
  {
    title: "Пропозиції від компанії",
    image: "offer",
    path: "",
    important: false,
  },
  {
    title: "Бонусний рахунок",
    image: "bonus",
    path: "",
    important: false,
  },
  {
    title: "Інформація",
    image: "info",
    path: "",
    important: false,
  },
  {
    title: "Переглянуті",
    image: "visibility",
    path: "",
    important: false,
  },
  {
    title: "Викуп віддонів",
    image: "deposit",
    path: "",
    important: false,
  },

  {
    title: "БОТ ПАЛЕТНИЙ ДВІР",
    image: "bot",
    path: "",
    important: true,
  },
  {
    title: "Вийти із акаунта",
    image: "logout",
    path: "",
    important: false,
  },
];

const Profile = () => {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <View style={styles.logo}>
          <Logo />
        </View>
        <TouchableOpacity
          style={styles.info}
          onPress={() => navigation.navigate("profile/data")}
        >
          <Image style={styles.infoImg} source={profileIcon} />
          <Text style={styles.infoTitle}>Іванов Іван</Text>
        </TouchableOpacity>
        <View style={styles.menu}>
          {menuData.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.menuItem}
              key={index}
            >
              <View style={styles.menuItemImg}>
                <ProfileIcons name={item.image} />
              </View>
              <Text
                style={
                  item.important
                    ? styles.menuItemTextImportant
                    : styles.menuItemText
                }
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Navigation active="profile" />
      <StatusBar barStyle="dark-content" />
    </>
  );
};

export default Profile;
