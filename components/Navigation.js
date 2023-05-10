import { View, Text, TouchableOpacity } from "react-native";
import MenuIcons from "../assets/Icons/MenuIcons";

const Navigation = ({ active = "" }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 96,
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "#ffffff",
        zIndex: 2,
        paddingBottom: 40,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 8,
          justifyContent: "center",
          borderBottomColor: "E0E0E0",
          borderBottomWidth: 0.2,
        }}
      >
        <TouchableOpacity style={{ width: "25%", alignItems: "center" }}>
          <View style={{ height: 25 }}>
            <MenuIcons id="home" active={active === "home" ? true : false} />
          </View>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 16,
              fontWeight: "400",
              color: active === "home" ? "rgba(244, 0, 0, 0.6)" : "#272727",
            }}
          >
            Головна
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: "25%", alignItems: "center" }}>
          <View style={{ height: 25 }}>
            <MenuIcons id="bonus" active={active === "bonus" ? true : false} />
          </View>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 16,
              fontWeight: "400",
              color: active === "bonus" ? "rgba(244, 0, 0, 0.6)" : "#272727",
            }}
          >
            Бонуси
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: "25%", alignItems: "center" }}>
          <View style={{ height: 25 }}>
            <MenuIcons id="shop" active={active === "shop" ? true : false} />
          </View>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 16,
              fontWeight: "400",
              color: active === "shop" ? "rgba(244, 0, 0, 0.6)" : "#272727",
            }}
          >
            Кошик
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: "25%", alignItems: "center" }}>
          <View style={{ height: 25 }}>
            <MenuIcons
              id="profile"
              active={active === "profile" ? true : false}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 16,
              fontWeight: "400",
              color: active === "profile" ? "rgba(244, 0, 0, 0.6)" : "#272727",
            }}
          >
            Профіль
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navigation;
