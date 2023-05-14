import { View, Text, TouchableOpacity, Image } from "react-native";
import Navigation from "../../components/Navigation";
import { StatusBar } from "react-native";
import styles from "../../style/profile/profile-order";
import { useNavigation } from "@react-navigation/native";
import BackCatalog from "../../assets/Icons/BackCatalog";
import testOrder from "../../assets/images/profile/testOrder.jpg";

const ProfileOrder = () => {
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

            <Text style={styles.backText}>Мої замовлення</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.orders(16)}>
          <View style={styles.ordersWrapper}>
            <View style={styles.ordersWrapperInfo}>
              <View style={styles.ordersWrapperInfoBlock}>
                <Text style={styles.ordersWrapperInfoNumber}>
                  № 766 545 625
                </Text>
                <Text style={styles.ordersWrapperInfoDate}>від 04.09.2023</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("profile/order/details")}
                style={styles.ordersWrapperInfoButton}
              >
                <BackCatalog />
              </TouchableOpacity>
            </View>
            <Text style={styles.ordersWrapperStatus}>В процесі оброблення</Text>
            <View style={styles.orderWrapperItemGap}>
              <View style={styles.orderWrapperItem}>
                <Image
                  style={styles.orderWrapperItemImage}
                  source={testOrder}
                />
                <View style={styles.orderWrapperItemInfo}>
                  <Text style={styles.orderWrapperItemInfoTitle}>
                    Європіддон б/в 1-й сорт, дерев’яний, світлий.
                  </Text>
                  <View style={styles.orderWrapperItemInfoBlock}>
                    <Text style={styles.orderWrapperItemInfoBlockText}>
                      Кількість:
                    </Text>
                    <Text style={styles.orderWrapperItemInfoBlockScore()}>
                      500 од.
                    </Text>
                  </View>
                  <View style={styles.orderWrapperItemInfoBlock}>
                    <Text style={styles.orderWrapperItemInfoBlockText}>
                      Статус оплати:
                    </Text>
                    <Text style={styles.orderWrapperItemInfoBlockScore(true)}>
                      Оплачене
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.orderWrapperItem}>
                <Image
                  style={styles.orderWrapperItemImage}
                  source={testOrder}
                />
                <View style={styles.orderWrapperItemInfo}>
                  <Text style={styles.orderWrapperItemInfoTitle}>
                    Європіддон б/в 1-й сорт, дерев’яний, світлий.
                  </Text>
                  <View style={styles.orderWrapperItemInfoBlock}>
                    <Text style={styles.orderWrapperItemInfoBlockText}>
                      Кількість:
                    </Text>
                    <Text style={styles.orderWrapperItemInfoBlockScore()}>
                      500 од.
                    </Text>
                  </View>
                  <View style={styles.orderWrapperItemInfoBlock}>
                    <Text style={styles.orderWrapperItemInfoBlockText}>
                      Статус оплати:
                    </Text>
                    <Text style={styles.orderWrapperItemInfoBlockScore(true)}>
                      Оплачене
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Navigation active="profile" />
      <StatusBar barStyle="dark-content" />
    </>
  );
};

export default ProfileOrder;
