import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import Navigation from "../../../components/Navigation";
import { StatusBar } from "react-native";
import styles from "../../../style/profile/profile-offer";
import { useNavigation } from "@react-navigation/native";
import BackCatalog from "../../../assets/Icons/BackCatalog";
import {} from "react";

const ProfileOfferReferral = () => {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate("profile/offer")}
        >
          <View style={{ flexDirection: "row" }}>
            <BackCatalog />

            <Text style={styles.backText}>Реферальна програма</Text>
          </View>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.containerContent}>
          <View style={styles.wrapper}>
            <View style={styles.wrapperGap}>
              <Text style={styles.title}>Про реферальну програму</Text>
            </View>

            <Text style={styles.desc}>
              Порекомендуй компанію Палетний Двір - отримай подарунок. Компанія
              пропонує подарунки у вигляді Сертифікатів від брендів MD Fashion
              та вражень від Bodo. Перевіряти свої бали можна в телеграм
              чат-боті Палетний Двір.
            </Text>
          </View>
          <View style={styles.wrapper}>
            <View style={styles.wrapperGap}>
              <Text style={styles.title}>
                Щоб прийняти участь в реферальній програмі
              </Text>
            </View>
            <Text style={styles.desc}>
              <Text style={styles.boldText}>Крок 1.</Text> В чат-боті натисни
              «Реферальна програма» - «Отримати код».
            </Text>
            <Text style={styles.desc}>
              <Text style={styles.boldText}>Крок 2.</Text> Надай цей код
              рекомендованому контакту.
            </Text>
            <Text style={styles.desc}>
              <Text style={styles.boldText}>Крок 3.</Text> Особа, що буде
              телефонувати по Вашій рекомендації має назвати цей код.
            </Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.boldText}>Все готово!</Text>
          </View>

          <View style={styles.wrapper}>
            <Text style={styles.desc}>
              Перевіряйте бали в телеграм чат-боті Палетний Двір (вони
              з’являться відразу після успішної угоди). В меню бота є кнопка
              «Подарунки», там Ви знайдете перелік подарунків. Також є кнопка
              «Обміняти бали», там Ви зможете обміняти бали на Сертифікат
              відповідної суми або зібрати бали на Сертифікат більшої суми.
              Термін актуальності балів для використання 12 місяців.
            </Text>
          </View>

          <View style={styles.wrapper}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                Linking.openURL("https://google.com");
              }}
            >
              <Text style={styles.buttonText}>
                Перейти в бот “Палетний двір”{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Navigation active="profile" />
      <StatusBar barStyle="dark-content" />
    </>
  );
};

export default ProfileOfferReferral;
