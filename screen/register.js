import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SERVER } from "@env";

const Register = () => {
  const [loginButtons, setLoginButtons] = useState(0);
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerRequest = async () => {
    if (!firstName || !lastName || !phone || !email || !password) return;
    const result = await axios.post(`${SERVER}/auth/register`, {
      firstName,
      lastName,
      phone,
      email,
      password,
    });
    if (result.data.status !== "ok") {
      return Alert.alert("Error", result.data.status);
    }
    const token = await axios.post(`${SERVER}/auth/login`, {
      login: email,
      password: password,
    });

    AsyncStorage.setItem("token", token.data.token);
    navigation.navigate("profile");
  };

  return (
    <>
      <View style={{ paddingTop: 50, width: "100%" }}>
        <View style={{ paddingHorizontal: 8, paddingBottom: 10 }}>
          <Text style={{ fontSize: 20, lineHeight: 24, fontWeight: "500" }}>
            Авторизація
          </Text>
        </View>

        <View
          onLayout={(target) => {
            setLoginButtons(target.nativeEvent.layout.width);
          }}
          style={{
            width: "100%",
            marginTop: 20,
            flexDirection: "row",
            columnGap: 5,
            paddingHorizontal: 8,
            marginRight: 0,
          }}
        >
          <TouchableOpacity
            style={{
              paddingVertical: 14,
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "#F1F1F1",
              borderWidth: 1,
              borderRadius: 4,
            }}
            onPress={() => navigation.navigate("login")}
          >
            <Text
              style={{
                fontSize: 15,
                lineHeight: 16,
                fontWeight: "500",
                color: "#272727",
                textTransform: "uppercase",
              }}
            >
              Вхід
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 14,
              width: loginButtons / 2 - 13,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F1F1F1",
              borderRadius: 4,
            }}
            onPress={() => navigation.navigate("register")}
          >
            <Text
              style={{
                fontSize: 15,
                lineHeight: 16,
                fontWeight: "500",
                color: "#272727",
                textTransform: "uppercase",
              }}
            >
              Реєстрація
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={{ paddingBottom: 150 }}>
            <View style={{ marginTop: 30, paddingHorizontal: 8, gap: 25 }}>
              <View style={{ position: "relative" }}>
                <Text
                  style={{
                    paddingHorizontal: 4,
                    fontSize: 12,
                    lineHeight: 16,
                    fontWeight: "600",
                    color: "rgba(0, 0, 0, 0.6)",
                    backgroundColor: "white",
                    position: "absolute",
                    top: -8,
                    left: 9,
                    zIndex: 2,
                  }}
                >
                  Ваше ім’я
                </Text>
                <TextInput
                  style={{
                    paddingVertical: 20,
                    paddingLeft: 16,
                    borderColor: "#B3B0AF",
                    borderWidth: 1.5,
                    borderRadius: 4,
                  }}
                  value={firstName}
                  onChangeText={(value) => setFirstName(value)}
                />
              </View>
              <View style={{ position: "relative" }}>
                <Text
                  style={{
                    paddingHorizontal: 4,
                    fontSize: 12,
                    lineHeight: 16,
                    fontWeight: "600",
                    color: "rgba(0, 0, 0, 0.6)",
                    backgroundColor: "white",
                    position: "absolute",
                    top: -8,
                    left: 9,
                    zIndex: 2,
                  }}
                >
                  Прізвище
                </Text>
                <TextInput
                  style={{
                    paddingVertical: 20,
                    paddingLeft: 16,
                    borderColor: "#B3B0AF",
                    borderWidth: 1.5,
                    borderRadius: 4,
                  }}
                  value={lastName}
                  onChangeText={(value) => setLastName(value)}
                />
              </View>
              <View style={{ position: "relative" }}>
                <Text
                  style={{
                    paddingHorizontal: 4,
                    fontSize: 12,
                    lineHeight: 16,
                    fontWeight: "600",
                    color: "rgba(0, 0, 0, 0.6)",
                    backgroundColor: "white",
                    position: "absolute",
                    top: -8,
                    left: 9,
                    zIndex: 2,
                  }}
                >
                  Телефон
                </Text>
                <TextInput
                  style={{
                    paddingVertical: 20,
                    paddingLeft: 16,
                    borderColor: "#B3B0AF",
                    borderWidth: 1.5,
                    borderRadius: 4,
                  }}
                  value={phone}
                  keyboardType="number-pad"
                  onChangeText={(value) => setPhone(value)}
                />
              </View>
              <View style={{ position: "relative" }}>
                <Text
                  style={{
                    paddingHorizontal: 4,
                    fontSize: 12,
                    lineHeight: 16,
                    fontWeight: "600",
                    color: "rgba(0, 0, 0, 0.6)",
                    backgroundColor: "white",
                    position: "absolute",
                    top: -8,
                    left: 9,
                    zIndex: 2,
                  }}
                >
                  Ел. почта
                </Text>
                <TextInput
                  style={{
                    paddingVertical: 20,
                    paddingLeft: 16,
                    borderColor: "#B3B0AF",
                    borderWidth: 1.5,
                    borderRadius: 4,
                  }}
                  value={email}
                  keyboardType="email-address"
                  onChangeText={(value) => setEmail(value)}
                />
              </View>
              <View style={{ position: "relative" }}>
                <Text
                  style={{
                    paddingHorizontal: 4,
                    fontSize: 12,
                    lineHeight: 16,
                    fontWeight: "600",
                    color: "rgba(0, 0, 0, 0.6)",
                    backgroundColor: "white",
                    position: "absolute",
                    top: -8,
                    left: 9,
                    zIndex: 2,
                  }}
                >
                  Пароль
                </Text>
                <TextInput
                  textContentType="password"
                  style={{
                    paddingVertical: 20,
                    paddingLeft: 16,
                    borderColor: "#B3B0AF",
                    borderWidth: 1.5,
                    borderRadius: 4,
                  }}
                  value={password}
                  secureTextEntry
                  onChangeText={(value) => setPassword(value)}
                />
              </View>

              <Text
                style={{
                  fontSize: 12,
                  lineHeight: 14,
                  fontWeight: "400",
                  color: "rgba(0, 0, 0, 0.6)",
                  marginLeft: 16,
                }}
              >
                Пароль повинен бути не менше 6 символів, містити цифри,
                латинські літери, в тому числі і великі, і не повинен збігатися
                з ім’ям та ел.почтою
              </Text>

              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 4,
                  backgroundColor: "#272727",
                  paddingVertical: 16,
                  elevation: 5,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.14,
                  shadowRadius: 5,
                  elevation: 1,
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.12,
                  shadowRadius: 10,
                  elevation: 2,
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                }}
                onPress={registerRequest}
              >
                <Text
                  style={{
                    fontSize: 11,
                    lineHeight: 16,
                    fontWeight: "600",
                    color: "white",
                    textTransform: "uppercase",
                  }}
                >
                  Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 30 }}>
              <Text
                style={{
                  fontSize: 12,
                  lineHeight: 15,
                  fontWeight: "400",
                  color: "rgba(0, 0, 0, 0.74)",
                  textAlign: "center",
                  marginBottom: 10,
                }}
              >
                Реєструючись ви погоджуєтесь з
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  lineHeight: 15,
                  fontWeight: "400",
                  color: "rgba(244, 0, 0, 0.6)",
                  textAlign: "center",
                  textDecorationLine: "underline",
                  textDecorationColor: "rgba(244, 0, 0, 0.6)",
                  margin: 0,
                }}
              >
                положенням про обробку і захист персональних даних та угодою
                користувача
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Register;
