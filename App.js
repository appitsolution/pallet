import { useEffect } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { useFonts } from "expo-font";
import Home from "./screen/home";
import CatalogItem from "./screen/catalog-item";
import Basket from "./screen/basket";
import Login from "./screen/login";
import Register from "./screen/register";
import Sign from "./screen/sign";
import Profile from "./screen/profile";
import ProfileData from "./screen/profile/profile-data";
import ProfileNotification from "./screen/profile/profile-notification";
import ProfileOrder from "./screen/profile/profile-order";
import ProfileOrderDetails from "./style/profile/profile-order-details";
import ProfileVisibility from "./screen/profile/profile-visibility";
import Bonus from "./screen/bonus";
import ProfilePartner from "./screen/profile/profile-partner";
import ProfileOffer from "./screen/profile/profile-offer";
import ProfileOfferReferral from "./screen/profile/offer/referral";
import ProfileOfferGift from "./screen/profile/offer/gift";
import ProfileOfferCertificate from "./screen/profile/offer/certificate";
import ProfileInfo from "./screen/profile/profile-info";
import ProfileInfoAbout from "./screen/profile/info/about";
import PrivateRouter from "./components/PrivateRouter";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    // "Comfortaa-Regular": require("./assets/fonts/Comfortaa-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: "#ffffff",
          },
        }}
        initialRouteName="home"
      >
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            animationEnabled: true,
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="catalog-item"
          component={CatalogItem}
          options={{
            animationEnabled: true,
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="basket"
          component={Basket}
          options={{
            animationEnabled: true,
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />

        <Stack.Screen
          name="login"
          component={Login}
          options={{
            animationEnabled: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{
            animationEnabled: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign"
          component={Sign}
          options={{
            animationEnabled: false,
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="bonus"
          component={Bonus}
          options={{
            animationEnabled: true,
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }}
        />

        <Stack.Screen
          name="profile"
          component={Profile}
          options={{
            animationEnabled: true,
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="profile/data"
          component={ProfileData}
          options={{
            animationEnabled: true,
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="profile/order"
          component={ProfileOrder}
          options={{
            animationEnabled: true,
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="profile/order/details"
          component={ProfileOrderDetails}
          options={{
            animationEnabled: true,
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="profile/notification"
          component={ProfileNotification}
          options={{
            animationEnabled: true,
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="profile/partner"
          component={ProfilePartner}
          options={{
            animationEnabled: true,
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="profile/offer"
          component={ProfileOffer}
          options={{
            animationEnabled: true,
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="profile/offer/referral"
          component={ProfileOfferReferral}
          options={{
            animationEnabled: true,
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="profile/offer/gift"
          component={ProfileOfferGift}
          options={{
            animationEnabled: true,
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="profile/offer/certificate"
          component={ProfileOfferCertificate}
          options={{
            animationEnabled: true,
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="profile/visibility"
          component={ProfileVisibility}
          options={{
            animationEnabled: true,
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="profile/info"
          component={ProfileInfo}
          options={{
            animationEnabled: true,
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="profile/info/about"
          component={ProfileInfoAbout}
          options={{
            animationEnabled: true,
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
