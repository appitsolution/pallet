import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";

const useVerify = async () => {
  const token = await AsyncStorage.getItem("token");
  if (!token) {
    return {
      verify: false,
      dataFetch: {},
    };
  }

  const result = await axios.post("http://192.168.0.103:3000/auth/verify", {
    token: token,
  });

  if (result.data.code === 401) {
    return {
      verify: false,
      dataFetch: {},
    };
  }

  return {
    verify: true,
    dataFetch: result.data.body,
  };
};

export default useVerify;
