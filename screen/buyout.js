import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  Alert,
} from "react-native";
import Navigation from "../components/Navigation";
import styles from "../style/buyout";
import { useState } from "react";
import CheckBoxIcon from "../assets/Icons/CheckBoxIcon";
import FileIcon from "../assets/Icons/FileIcon";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import useVerify from "../components/hook/useVerify";
import { SERVER_ADMIN } from "@env";
import { useNavigation } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay";

const Buyout = () => {
  const navigation = useNavigation();
  const [isShowFileInput, setIsShowFileInput] = useState(false);
  const [loading, setLoading] = useState(false);

  const [sizeData, setSizeData] = useState([
    {
      title: "800*1200 (європалета з маркуванням EUR, UIC, EPAL)",
      active: true,
    },
    {
      title: "800x1200 (звичайний без маркування)",
      active: false,
    },
    {
      title: "1000x1200",
      active: false,
    },

    {
      title: "1100x1300",
      active: false,
    },
    {
      title: "1200x1200",
      active: false,
    },
    {
      title: "1400х1400",
      active: false,
    },
    {
      title: "1000х1000",
      active: false,
    },
    {
      title: "мікс кількох типів",
      active: false,
    },
  ]);

  const [stateData, setStateData] = useState([
    {
      title: "світлий",
      active: true,
    },
    {
      title: "світлий з потемнінням",
      active: false,
    },
    {
      title: "темний",
      active: false,
    },
  ]);

  const [inputScore, setInputScore] = useState("");

  const [inputAddress, setInputAddress] = useState("");

  const inputScoreFun = (value) => {
    const numbersOnly = value.replace(/\D/g, "");

    setInputScore(numbersOnly);
  };

  const selectSize = (title) => {
    const newSize = sizeData.map((item) => {
      if (item.title === title) {
        return {
          title: item.title,
          active: true,
        };
      } else {
        return {
          title: item.title,
          active: false,
        };
      }
    });
    setSizeData(newSize);
  };

  const selectState = (title) => {
    const newSize = stateData.map((item) => {
      if (item.title === title) {
        return {
          title: item.title,
          active: true,
        };
      } else {
        return {
          title: item.title,
          active: false,
        };
      }
    });
    setStateData(newSize);
  };

  const [selectCurrentImage, setSelectCurrentImage] = useState("");
  const [dataImage, setDataImage] = useState(null);

  const selectFile = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectCurrentImage(result.uri);

      const formData = new FormData();
      formData.append("file", {
        uri: result.uri,
        type: result.type,
        name: "buyout.jpg",
      });

      setDataImage(formData);
    } else {
      Alert.alert("error", "You did not select any image.");
    }
  };

  const submitFetch = async () => {
    const activeSize = sizeData.find((item) => item.active);
    const activeState = stateData.find((item) => item.active);
    if (!activeSize || !activeState || !inputScore) return;
    const size = activeSize.title;
    const state = activeState.title;

    const { dataFetch } = await useVerify();
    const { firstName, lastName, phone } = dataFetch;

    if (isShowFileInput) {
      if (dataImage === null) return;
      setLoading(true);
      fetch(`${SERVER_ADMIN}/api/media`, {
        method: "post",
        body: dataImage,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          axios
            .post(`${SERVER_ADMIN}/api/buyout`, {
              firstName: firstName,
              lastName: lastName,
              phone: phone,
              size: size,
              state: state,
              score: inputScore,
              address: inputAddress,
              image: result.doc.id,
            })
            .then(() => {
              setLoading(false);
              navigation.navigate("buyout-result");
            });
        });
    } else {
      setLoading(true);
      axios
        .post(`${SERVER_ADMIN}/api/buyout`, {
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          size: size,
          state: state,
          score: inputScore,
        })
        .then((res) => {
          setLoading(false);
          navigation.navigate("buyout-result");
        });
    }
  };

  return (
    <>
      <View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Хочу продати піддони</Text>
        </View>
        <ScrollView contentContainerStyle={{ paddingBottom: 220 }}>
          <View style={styles.titleWrapperSecond}>
            <Text style={styles.title}>Розмір піддону</Text>
          </View>
          <View style={styles.size}>
            {sizeData.map((item, index) => (
              <TouchableOpacity
                style={styles.sizeItem(
                  item.active,
                  index === sizeData.length - 1 ? true : false
                )}
                key={item.title}
                onPress={() => {
                  selectSize(item.title);
                }}
              >
                <View style={styles.sizeItemIcon(item.active)}></View>
                <Text style={styles.sizeItemText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.titleSecondWrapper}>
            <Text style={styles.titleSecond}>Стан</Text>
          </View>

          <View style={styles.size}>
            {stateData.map((item, index) => (
              <TouchableOpacity
                style={styles.sizeItem(
                  item.active,
                  index === stateData.length - 1 ? true : false
                )}
                key={item.title}
                onPress={() => {
                  selectState(item.title);
                }}
              >
                <View style={styles.sizeItemIcon(item.active)}></View>
                <Text style={styles.sizeItemText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.titleSecondWrapper}>
            <Text style={styles.titleSecond}>Кількість</Text>
          </View>

          <View style={styles.inputScoreWrapper}>
            <TextInput
              style={styles.inputScore}
              value={inputScore}
              onChangeText={inputScoreFun}
            />
          </View>

          {inputScore === "" ? (
            <></>
          ) : (
            <View style={styles.bannerBonusWrapper}>
              <View style={styles.bannerBonus}>
                <Text style={styles.bannerBonusTitle}>Нарахування бонусів</Text>
                <Text style={styles.bannerBonusText}>
                  Після завершення угоди Вам будуть нараховані бонуси, які Ви
                  зможете обміняти за програмою лояльності{" "}
                </Text>
                <View style={styles.bannerBonusScoreWrapper}>
                  <Text style={styles.bannerBonusScore}>500</Text>
                  <Text style={styles.bannerBonusScoreText}>бонусів</Text>
                </View>
              </View>
            </View>
          )}

          <View style={styles.showFileWrapper}>
            <TouchableOpacity
              style={styles.showFile}
              onPress={() => setIsShowFileInput(!isShowFileInput)}
            >
              {isShowFileInput ? (
                <CheckBoxIcon />
              ) : (
                <View style={styles.showFileBorder}></View>
              )}
              <Text style={styles.showFileText}>Дізнатися точну вартість</Text>
            </TouchableOpacity>
            <Text style={styles.showFileDesc}>
              Для детальної оцінки надішліть фото піддонів та вкажіть адресу.
            </Text>

            {isShowFileInput ? (
              <View style={styles.fileInput}>
                <TouchableOpacity
                  style={styles.fileInputButton}
                  onPress={selectFile}
                >
                  <FileIcon />
                  <Text style={styles.fileInputButtonText}>
                    Прикріпити файл
                  </Text>
                </TouchableOpacity>

                {selectCurrentImage === "" ? (
                  <></>
                ) : (
                  <Image
                    source={{ uri: selectCurrentImage }}
                    style={{ width: 200, height: 200, marginTop: 20 }}
                    resizeMode="contain"
                  />
                )}
                <TextInput
                  placeholder="Вказати адресу"
                  style={styles.fileInputAddress}
                  value={inputAddress}
                  onChangeText={(value) => setInputAddress(value)}
                />
              </View>
            ) : (
              <></>
            )}
          </View>

          <View style={styles.acceptButtonWrapper}>
            <TouchableOpacity style={styles.acceptButton} onPress={submitFetch}>
              <Text style={styles.acceptButtonText}>
                Отримати швидку відповідь
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={{ color: "white" }}
      />
      <Navigation active="shop" />
      <StatusBar barStyle="dark-content" />
    </>
  );
};

export default Buyout;
