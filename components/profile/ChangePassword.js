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

const ChangePassword = ({ show = false, showFunc, changePassword }) => {
  const [isShowPass, setIsShowPass] = useState(false);

  const [passwordInput, setPasswordInput] = useState({
    currentPassword: "",
    newPassword: "",
    acceptPassword: "",
  });

  const checkPassword = () => {
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
              style={styles.input}
              secureTextEntry={!isShowPass}
              onChangeText={(value) =>
                setPasswordInput({ ...passwordInput, currentPassword: value })
              }
              value={passwordInput.currentPassword}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputPlaceholder}>Придумайте новий пароль</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={!isShowPass}
              onChangeText={(value) =>
                setPasswordInput({ ...passwordInput, newPassword: value })
              }
              value={passwordInput.newPassword}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputPlaceholder}>Підтвердіть пароль</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={!isShowPass}
              onChangeText={(value) =>
                setPasswordInput({ ...passwordInput, acceptPassword: value })
              }
              value={passwordInput.acceptPassword}
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
                setIsShowPass(false);
                showFunc(false);
                checkPassword();
                Keyboard.dismiss();
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
