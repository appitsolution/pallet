import { View, Text, TouchableOpacity, Image } from "react-native";
import Navigation from "../../components/Navigation";
import { StatusBar } from "react-native";
import styles from "../../style/profile/profile-order";
import { useNavigation } from "@react-navigation/native";
import BackCatalog from "../../assets/Icons/BackCatalog";
import testOrder from "../../assets/images/profile/testOrder.jpg";
import CopyIcon from "../../assets/Icons/CopyIcon";

const ProfileOrderDetails = () => {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <View style={styles.back}>
          <TouchableOpacity
            onPress={() => navigation.navigate("profile/order")}
            style={{ flexDirection: "row" }}
          >
            <BackCatalog />
            <Text style={styles.backText}>№ 766 545 625</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <CopyIcon />
          </TouchableOpacity>
        </View>

        <View style={styles.orderDetailsButtonWrapper}>
          <TouchableOpacity style={styles.orderDetailsButton}>
            <Text style={styles.orderDetailsButtonText}>
              Повторити замовлення
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.orderDetailsButtonSecond}>
          <Text style={styles.orderDetailsButtonText}>Залишити відгук</Text>
        </TouchableOpacity>

        <View style={styles.orders()}>
          <View style={styles.ordersWrapper}>
            <View style={styles.ordersWrapperInfo}>
              <View style={styles.ordersWrapperInfoBlock}>
                <Text style={styles.ordersWrapperInfoNumber}>
                  № 766 545 625
                </Text>
                <Text style={styles.ordersWrapperInfoDate}>від 04.09.2023</Text>
              </View>
              <TouchableOpacity style={styles.ordersWrapperInfoButton}>
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

        <View style={styles.details}>
          <View style={styles.detailsItem}>
            <Text style={styles.detailsItemTitle}>Вартість товару</Text>
            <Text style={styles.detailsItemScore}>24 500₴</Text>
          </View>
          <View style={styles.detailsItem}>
            <Text style={styles.detailsItemTitle}>Доставка</Text>
            <Text style={styles.detailsItemScore}>Безкоштовна</Text>
          </View>
          <View style={styles.detailsItem}>
            <Text style={styles.detailsItemTitle}>Загальна вартість</Text>
            <Text style={styles.detailsItemScore}>24 500₴</Text>
          </View>
          <View style={styles.detailsItemSecond}>
            <Text style={styles.detailsItemTitle}>Деталі замовлення:</Text>
            <Text style={styles.detailsItemScore}>
              Самовивіз зі складу м. Бровари
            </Text>
          </View>
        </View>
      </View>
      <Navigation active="profile" />
      <StatusBar barStyle="dark-content" />
    </>
  );
};

export default ProfileOrderDetails;
