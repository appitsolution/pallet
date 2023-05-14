import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const [loginButtons, setLoginButtons] = useState(0);
  const navigation = useNavigation();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const loginRequest = async () => {
    if (!login || !password) return;
    try {
      const result = await axios.post(`http://192.168.0.103:3000/auth/login`, {
        login,
        password,
      });
      if (result.data.status === "ok") {
        // console.log(result.data);
        await AsyncStorage.setItem("token", result.data.token);
        navigation.navigate("profile");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <View style={{ paddingTop: 50, width: "100%" }}>
        <View style={{ paddingHorizontal: 8 }}>
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
              backgroundColor: "#F1F1F1",
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
              borderColor: "#F1F1F1",
              borderWidth: 1,
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
              Телефон або електронна почта
            </Text>
            <TextInput
              style={{
                paddingVertical: 20,
                paddingLeft: 16,
                borderColor: "#B3B0AF",
                borderWidth: 1.5,
                borderRadius: 4,
              }}
              keyboardType="email-address"
              value={login}
              onChangeText={(value) => setLogin(value)}
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
              style={{
                paddingVertical: 20,
                paddingLeft: 16,
                borderColor: "#B3B0AF",
                borderWidth: 1.5,
                borderRadius: 4,
              }}
              secureTextEntry
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
          </View>

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
            onPress={loginRequest}
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
              Увійти
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;
