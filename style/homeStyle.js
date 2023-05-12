import { StyleSheet } from "react-native";
import normal from "../style/normal";

const homeStyle = StyleSheet.create({
  home: {
    ...normal.containerTop,
    backgroundColor: "#363636",
  },
  scrollViewContainer: {
    paddingBottom: 235,
  },
  banner: {
    position: "relative",
    marginTop: 12,
    height: "100%",
    maxHeight: 142,
    paddingHorizontal: 8,
  },
  bannerPagination: {
    position: "absolute",
    bottom: -20,
  },
  bannerDot: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  bannerActiveDot: {
    width: 13,
    height: 6,
    backgroundColor: "#F40000",
  },
  bannerItem: {
    flex: 1,
    flexDirection: "row",
    columnGap: 4,
    marginHorizontal: 4,
  },

  bannerFirst: {
    width: "100%",
    // backgroundColor: "#D8D8D8",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  bannerFirstBonus: {
    width: "70%",
    // backgroundColor: "#D8D8D8",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  bannerLast: {
    width: "30%",
    // backgroundColor: "#D8D8D8",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  tabs: {
    flexDirection: "row",
    width: "100%",
    marginTop: 20,
    position: "relative",
  },
  tabsItem: (active) => {
    return {
      flex: 1,
      borderBottomWidth: 4,
      paddingVertical: 12,
    };
  },
  tabsText: {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    color: "white",
  },
  tabsBorder: (active) => {
    if (active) {
      return {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "50%",
        height: 4,
        backgroundColor: "#F40000",
        zIndex: 4,
      };
    } else {
      return {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "50%",
        height: 4,
        backgroundColor: "#F40000",
        zIndex: 1,
      };
    }
  },
  sortButton: {
    paddingTop: 30,
    backgroundColor: "#ffffff",
  },
  sortButtonList: {
    width: "100%",
    gap: 7,
  },
  sortButtonItem: (active) => {
    return {
      marginHorizontal: 5,
      borderRadius: 5,
      overflow: "hidden",
      paddingVertical: 6,
      paddingHorizontal: 12,
      backgroundColor: active ? "#F40000" : "#F1F1F1",
    };
  },

  sortButtonItemText: (active) => {
    return {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: 500,
      color: "#272727",
      color: active ? "#ffffff" : "#272727",
    };
  },
  catalogContainer: {
    width: "100%",
    paddingTop: 20,
    gap: 16,
    backgroundColor: "#ffffff",
    paddingHorizontal: 8,
  },
  catalogItem: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.14,
    shadowRadius: 1,
    elevation: 2,
    borderRadius: 4,
    padding: 12,
    paddingRight: 16,
    flexDirection: "row",
    gap: 14,
  },
  catalogImg: {
    width: "40%",
  },
  catalogContent: {
    width: "60%",
  },
  catalogTitle: {
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "700",
    marginBottom: 5,
  },
  catalogDesc: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "400",
  },
  catalogBasket: {
    marginLeft: "auto",
    marginRight: 16,
  },
});

export default homeStyle;
