import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Navigation from "../../components/Navigation";
import { StatusBar } from "react-native";
import styles from "../../style/profile/profile-info";
import { useNavigation } from "@react-navigation/native";
import BackCatalog from "../../assets/Icons/BackCatalog";

const infoMenuData = [
  {
    title: "Про компанію",
    path: "profile/info/about",
  },
  {
    title: "Наші офіси ",
    path: "",
  },
  {
    title: "Поставка палет",
    path: "",
  },
  {
    title: "Викуп піддонів",
    path: "",
  },
  {
    title: "Доставка та оплата",
    path: "",
  },
  {
    title: "Партнерська програма ",
    path: "",
  },
  {
    title: "Тренди індустрії тари і упаковки ",
    path: "",
  },
  {
    title: "Подарунки для вашого колективу",
    path: "",
  },
];

const ProfileInfo = () => {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate("profile")}
        >
          <View style={{ flexDirection: "row" }}>
            <BackCatalog />

            <Text style={styles.backText}>Інформація </Text>
          </View>
        </TouchableOpacity>

        <ScrollView>
          <View style={styles.menu}>
            {infoMenuData.map((item, index) => (
              <TouchableOpacity
                style={styles.menuItem}
                key={index}
                onPress={() => navigation.navigate(item.path)}
              >
                <Text style={styles.menuItemTitle}>{item.title}</Text>
                <View style={styles.menuItemIcon}>
                  <BackCatalog />
                </View>
              </TouchableOpacity>
            ))}
            <View style={styles.menuItem}>
              <Text style={styles.menuItemTitle}>Версія застосунку</Text>
              <Text style={styles.menuItemTitle}>1.0.0</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <Navigation active="profile" />
      <StatusBar barStyle="dark-content" />
    </>
  );
};

export default ProfileInfo;
