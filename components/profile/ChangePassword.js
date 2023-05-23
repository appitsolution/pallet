import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import styles from "../../style/profile/profile-data";
import CheckBoxIcon from "../../assets/Icons/CheckBoxIcon";
import { useState } from "react";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .min(6, "Пароль должен содержать не менее 6 символов")
    .required('Поле "Пароль" обязательно для заполнения'),
  newPassword: yup
    .string()
    .required('Поле "Пароль" обязательно для заполнения'),
});

const ChangePassword = ({ show = false, showFunc, changePassword }) => {
  const [isShowPass, setIsShowPass] = useState(false);

  const [passwordInput, setPasswordInput] = useState({
    currentPassword: "",
    newPassword: "",
    acceptPassword: "",
  });

  const [currentPasswordError, setCurrentPassordError] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState(false);
  const [acceptPasswordError, setAcceptPasswordError] = useState(false);

  const checkPassword = async () => {
    try {
      const result = await validationSchema.validate(
        {
          currentPassword: passwordInput.currentPassword,
          newPassword: passwordInput.newPassword,
        },
        {
          abortEarly: false,
          context: {
            changePassword,
          },
        }
      );

      console.log(result);
    } catch (err) {
      const dataError = await JSON.stringify(err);

      const result = JSON.parse(dataError);
      // Если есть ошибки валидации, обработайте их здесь
      result.inner.forEach((item) => {
        if (item.path === "currentPassword") {
          setCurrentPassordError(true);
        } else if (item.path === "newPassword") {
          setNewPasswordError(true);
        } else if (item.path === "acceptPassword") {
          setAcceptPasswordError(true);
        }
      });
    }

    return;
    setIsShowPass(false);
    showFunc(false);
    Keyboard.dismiss();
    if (
      !passwordInput.acceptPassword ||
      !passwordInput.currentPassword ||
      !passwordInput.newPassword
    ) {
      return;
    }
    if (passwordInput.newPassword !== passwordInput.acceptPassword) return;

    changePassword(passwordInput);
  };

  return (
    <View style={styles.backdrop(show)}>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.modal}>
          <Text style={styles.title}>Змінити пароль</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputPlaceholder}>
              Існуючий або тимчасовий пароль
            </Text>
            <TextInput
              style={styles.input(currentPasswordError)}
              secureTextEntry={!isShowPass}
              onChangeText={(value) =>
                setPasswordInput({ ...passwordInput, currentPassword: value })
              }
              value={passwordInput.currentPassword}
              onFocus={() => setCurrentPassordError(false)}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputPlaceholder}>Придумайте новий пароль</Text>
            <TextInput
              style={styles.input(newPasswordError)}
              secureTextEntry={!isShowPass}
              onChangeText={(value) =>
                setPasswordInput({ ...passwordInput, newPassword: value })
              }
              value={passwordInput.newPassword}
              onFocus={() => setNewPasswordError(false)}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputPlaceholder}>Підтвердіть пароль</Text>
            <TextInput
              style={styles.input(acceptPasswordError)}
              secureTextEntry={!isShowPass}
              onChangeText={(value) =>
                setPasswordInput({ ...passwordInput, acceptPassword: value })
              }
              value={passwordInput.acceptPassword}
              onFocus={() => setAcceptPasswordError(false)}
            />
          </View>

          <TouchableOpacity
            style={styles.showPass}
            onPress={() => setIsShowPass(!isShowPass)}
          >
            {isShowPass ? (
              <CheckBoxIcon />
            ) : (
              <View style={styles.showPassBorder}></View>
            )}
            <Text style={styles.showPassText}>Показати пароль</Text>
          </TouchableOpacity>
          <Text style={styles.warning}>
            Пароль повинен бути не менше 6 символів, містити цифри, латинські
            літери, в тому числі і великі, і не повинен збігатися з ім’ям та
            ел.почтою
          </Text>
          <View style={styles.controls}>
            <TouchableOpacity
              onPress={() => {
                setIsShowPass(false);
                showFunc(false);
                Keyboard.dismiss();
              }}
              style={{ marginRight: 20 }}
            >
              <Text style={styles.controlsButtonText}>Відміна</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                checkPassword();
              }}
            >
              <Text style={styles.controlsButtonText}>Зберегти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChangePassword;
