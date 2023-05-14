import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import Navigation from "../components/Navigation";
import { StatusBar } from "react-native";
import styles from "../style/bonus";
import { useNavigation } from "@react-navigation/native";
import BackCatalog from "../assets/Icons/BackCatalog";
import BackgroundBonus from "../assets/images/backgroundBonus.png";

const historyData = [
  {
    title: "Сертифікат MD Fashion",
    date: "01.05.2023",
    order: "",
    bonus: "-3500",
    bonusType: "minus",
    type: "default",
  },
  {
    title: "Реферальна програма",
    date: "24.03.2023",
    order: "200",
    bonus: "+100",
    bonusType: "plus",
    type: "referral",
  },
  {
    title: "Поставка",
    date: "24.03.2023",
    order: "200",
    bonus: "+100",
    bonusType: "plus",
    type: "delivery",
  },
  {
    title: "Замовлення",
    date: " 02.03.2023",
    order: "750",
    bonus: "+3500",
    bonusType: "plus",
    type: "order",
  },
  {
    title: "Замовлення",
    date: " 02.03.2023",
    order: "500",
    bonus: "+2000",
    bonusType: "plus",
    type: "order",
  },
  {
    title: "Замовлення",
    date: " 02.03.2023",
    order: "250",
    bonus: "+1000",
    bonusType: "plus",
    type: "order",
  },
  {
    title: "Замовлення",
    date: " 02.03.2023",
    order: "100",
    bonus: "+500",
    bonusType: "plus",
    type: "order",
  },
];

const Bonus = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={{ paddingBottom: 200 }}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate("profile")}
        >
          <View style={{ flexDirection: "row" }}>
            <BackCatalog />

            <Text style={styles.backText}>Бонуси</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.bonusScore}>
          <ImageBackground
            style={styles.bonusScoreBackground}
            source={BackgroundBonus}
          >
            <View style={styles.bonusScoreBackgroundBlock}>
              <Text style={styles.bonusScoreSum}>1000</Text>
              <Text style={styles.bonusScoreSumText}>бонусів на рахунку</Text>
              <Text style={styles.bonusScoreSumWarning}>
                Бонуси, які згорять у найближчі 30 днів - відсутні
              </Text>
            </View>
          </ImageBackground>
        </View>

        <ScrollView>
          <View style={styles.bonusHistory}>
            {historyData.map((item, index) => (
              <View style={styles.bonusHistoryItem(item.type)} key={index}>
                <View style={styles.bonusHistoryItemBlock}>
                  <Text style={styles.bonusHistoryItemTitle(item.type)}>
                    {item.title}
                  </Text>
                  <Text style={styles.bonusHistoryItemDate}>{item.date}</Text>
                </View>
                <View style={styles.bonusHistoryItemBlock}>
                  <Text style={styles.bonusHistoryItemOrder(item.type)}>
                    {item.order}
                  </Text>
                  <Text style={styles.bonusHistoryItemSum(item.bonusType)}>
                    {item.bonus}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <Navigation active="bonus" />
      <StatusBar barStyle="dark-content" />
    </>
  );
};
export default Bonus;
