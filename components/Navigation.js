import { View, Text, TouchableOpacity } from "react-native";
import MenuIcons from "../assets/Icons/MenuIcons";
import { useNavigation } from "@react-navigation/native";

const Navigation = ({ active = "" }) => {
  const navigation = useNavigation();
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

        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.14,
        shadowRadius: 10,

        elevation: 14,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.12,
        shadowRadius: 14,

        elevation: 5,
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
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
        <TouchableOpacity
          style={{ width: "25%", alignItems: "center" }}
          onPress={() => navigation.navigate("home")}
        >
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
        <TouchableOpacity
          style={{ width: "25%", alignItems: "center" }}
          onPress={() => navigation.navigate("basket")}
        >
          <View style={{ height: 25, position: "relation" }}>
            <MenuIcons id="shop" active={active === "shop" ? true : false} />
            <View
              style={{
                display: active === "shop" ? "" : "none",
                position: "absolute",
                top: -5,
                right: -30,
                borderColor: "#F40000",
                borderWidth: 1,
                borderRadius: 10,
                zIndex: 2,
                backgroundColor: "#ffffff",
                paddingHorizontal: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  lineHeight: 16,
                  fontWeight: "500",
                  color: "#F40000",
                }}
              >
                1050
              </Text>
            </View>
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
