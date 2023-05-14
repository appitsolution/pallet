import { View, Text, TouchableOpacity } from "react-native";
import Navigation from "../../components/Navigation";
import styles from "../../style/profile/profile-notification";
import { useNavigation } from "@react-navigation/native";
import BackCatalog from "../../assets/Icons/BackCatalog";
import { useState } from "react";
import { StatusBar } from "react-native";

const ProfileNotification = () => {
  const navigation = useNavigation();

  const [notificationChat, setNotificationChat] = useState(false);
  const [notificationSocial, setNotificationSocial] = useState(false);
  return (
    <>
      <View>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate("profile")}
        >
          <BackCatalog />
          <Text style={styles.backText}>Сповіщення</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setNotificationChat(!notificationChat)}
          style={styles.wrapper}
        >
          <View style={styles.wrapperText}>
            <Text style={styles.wrapperTextTitle}>
              Повідомлення про замовлення
            </Text>
            <Text style={styles.wrapperTextDesc}>
              Нагадування про замовлення і повідомлення в чаті
            </Text>
          </View>

          <View style={styles.buttonIs(notificationChat)}>
            <View style={styles.buttonIsView(notificationChat)}></View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setNotificationSocial(!notificationSocial)}
          style={styles.wrapper}
        >
          <View style={styles.wrapperText}>
            <Text style={styles.wrapperTextTitle}>
              Повідомлення про замовлення
            </Text>
            <Text style={styles.wrapperTextDesc}>
              Нагадування про замовлення і повідомлення в чаті
            </Text>
          </View>

          <View style={styles.buttonIs(notificationSocial)}>
            <View style={styles.buttonIsView(notificationSocial)}></View>
          </View>
        </TouchableOpacity>
      </View>
      <Navigation active="profile" />
      <StatusBar barStyle="dark-content" />
    </>
  );
};

export default ProfileNotification;
