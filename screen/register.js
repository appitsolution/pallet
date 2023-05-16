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
import styles from "../style/register";
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
        <ScrollView>
          <View style={styles.form}>
            <View style={styles.formContainer}>
              <View style={styles.formWrapper}>
                <Text style={styles.placeholder}>Ваше ім’я</Text>
                <TextInput
                  style={styles.input}
                  value={firstName}
                  onChangeText={(value) => setFirstName(value)}
                />
              </View>
              <View style={styles.formWrapper}>
                <Text style={styles.placeholder}>Прізвище</Text>
                <TextInput
                  style={styles.input}
                  value={lastName}
                  onChangeText={(value) => setLastName(value)}
                />
              </View>
              <View style={styles.formWrapper}>
                <Text style={styles.placeholder}>Телефон</Text>
                <TextInput
                  style={styles.input}
                  value={phone}
                  keyboardType="number-pad"
                  onChangeText={(value) => setPhone(value)}
                />
              </View>
              <View style={styles.formWrapper}>
                <Text style={styles.placeholder}>Ел. почта</Text>
                <TextInput
                  style={styles.input}
                  value={email}
                  keyboardType="email-address"
                  onChangeText={(value) => setEmail(value)}
                />
              </View>
              <View style={styles.formWrapper}>
                <Text style={styles.placeholder}>Пароль</Text>
                <TextInput
                  textContentType="password"
                  style={styles.input}
                  value={password}
                  secureTextEntry
                  onChangeText={(value) => setPassword(value)}
                />
              </View>

              <Text style={styles.inputWarning}>
                Пароль повинен бути не менше 6 символів, містити цифри,
                латинські літери, в тому числі і великі, і не повинен збігатися
                з ім’ям та ел.почтою
              </Text>

              <TouchableOpacity style={styles.submit} onPress={registerRequest}>
                <Text style={styles.submitText}>Зареєструватися</Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 30 }}>
              <Text style={styles.text}>Реєструючись ви погоджуєтесь з</Text>
              <Text style={styles.linkText}>
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
