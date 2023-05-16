import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import axios from "axios";
import styles from "../style/register";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SERVER } from "@env";

const Login = () => {
  const [loginButtons, setLoginButtons] = useState(0);
  const navigation = useNavigation();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const loginRequest = async () => {
    if (!login || !password) return;
    try {
      const result = await axios.post(`${SERVER}/auth/login`, {
        login,
        password,
      });
      console.log(result.data);
      if (result.data.status === "ok") {
        console.log(result.data);
        await AsyncStorage.setItem("token", result.data.token);
        navigation.navigate("profile");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <View style={styles.register}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Авторизація</Text>
        </View>

        <View
          onLayout={(target) => {
            setLoginButtons(target.nativeEvent.layout.width);
          }}
          style={styles.buttons}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={styles.buttonText}>Вхід</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonActive(loginButtons)}
            onPress={() => navigation.navigate("register")}
          >
            <Text style={styles.buttonTextActive}>Реєстрація</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.formWrapper}>
            <Text style={styles.placeholder}>Телефон або електронна почта</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              value={login}
              onChangeText={(value) => setLogin(value)}
            />
          </View>
          <View style={styles.formWrapper}>
            <Text style={styles.placeholder}>Пароль</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
          </View>

          <TouchableOpacity style={styles.submit} onPress={loginRequest}>
            <Text style={styles.submitText}>Увійти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;
