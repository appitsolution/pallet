import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Navigation from "../../components/Navigation";
import styles from "../../style/profile/profile-partner";
import { useNavigation, useRoute } from "@react-navigation/native";
import BackCatalog from "../../assets/Icons/BackCatalog";
import { StatusBar } from "react-native";

const partnerData = [
  {
    title: "Що значить бути партнером?",
    desc: "Компанія надає ціну на викуп піддонів з ринку по конкурентно вигідним умовам, допомагає оптимізувати процеси, консультує по питанням «як збільшувати обсяги» та роз’яснює щодо стандартів піддонів та трендів індустрії.",
  },
  {
    title: "Чому вигідно бути партнером?",
    desc: "Нам важлива ваша думка що до співпраці. З вас відгук - з нас запашна кава",
  },
  {
    title: "Яка процедура партнерства? ",
    desc: "Ви надаєте інформацію де знаходиться Ваша локація, її характеристики та деталі щодо її використання. Вам надається інформація щодо стандартів піддонів, ціни, контакти координатора та додаткова інформація.",
  },
  {
    title: "Чи не ускладнює це життя?",
    desc: "Ні. Тому що Вас не інтегрують в систему. Ви незалежні в своїх рішеннях і діях. Це додана цінність з території яка Вам не приносить в даний момент кошти і мінімальна кількість часу для реалізації дій.",
  },
];

const ProfilePartner = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const prevScreenReturn = () => {
    let prevScreenPath = "";
    if (route.params !== undefined) {
      if (
        route.params.prevScreen !== undefined &&
        route.params.prevScreen !== ""
      ) {
        prevScreenPath = route.params.prevScreen;
        return true;
      }
    }
    return false;
  };

  return (
    <>
      <View>
        <TouchableOpacity
          style={styles.back}
          onPress={() =>
            navigation.navigate(
              prevScreenReturn() ? route.params.prevScreen : "profile"
            )
          }
        >
          <BackCatalog />
          <Text style={styles.backText}>Партнерська програма</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.content}>
          {partnerData.map((item, index) => (
            <View style={styles.wrapper} key={index}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <Navigation active="profile" />
      <StatusBar barStyle="dark-content" />
    </>
  );
};

export default ProfilePartner;
