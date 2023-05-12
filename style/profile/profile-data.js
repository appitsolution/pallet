import { StyleSheet } from "react-native";

const profileDataStyle = StyleSheet.create({
  back: {
    paddingTop: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    fontSize: 22,
    fontWeight: "600",
  },
  data: {
    marginTop: 30,
  },
  dataButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    width: "100%",
    height: 50,
  },
  dataButtonText: {
    fontSize: 13,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  wrapper: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    borderBottomColor: "#E1E1E1",
    borderBottomWidth: 1,
  },
  wrapperBlock: {
    paddingHorizontal: 16,
  },
  wrapperHead: {
    fontSize: 13,
    fontWeight: "400",
    color: "rgba(0, 0, 0, 0.4)",
    marginBottom: 2,
  },
  wrapperSecond: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0, 0, 0, 0.6)",
  },
  address: {
    marginTop: 15,
  },
  changePassword: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  changePasswordText: {
    fontSize: 15,
    fontWeight: "600",
    textTransform: "uppercase",
    color: "rgba(244, 0, 0, 0.74)",
  },
  backdrop: (active) => {
    return {
      position: "absolute",
      display: active ? "flex" : "none",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      width: "100%",
      height: "100%",
      zIndex: 3,
      paddingHorizontal: 16,
      alignItems: "center",
      justifyContent: "center",
    };
  },
  modal: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 20,
  },
  inputWrapper: {
    width: "100%",
    height: 44,
    position: "relative",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: "100%",
    borderColor: "#B3B0AF",
    borderWidth: 1.5,
    borderRadius: 5,
    paddingLeft: 15,
  },
  inputPlaceholder: {
    position: "absolute",
    top: -6,
    left: 10,
    fontWeight: "600",
    fontSize: 12,
    paddingHorizontal: 4,
    color: "rgba(0, 0, 0, 0.6)",
    backgroundColor: "#ffffff",
    zIndex: 1,
  },
  showPass: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13,
  },
  showPassBorder: {
    width: 18,
    height: 18,
    borderColor: "#272727",
    borderWidth: 2,
    borderRadius: 3,
  },
  showPassText: {
    marginLeft: 11,
    fontSize: 12,
    fontWeight: "400",
    color: "#49454F",
  },
  warning: {
    fontSize: 12,
    fontWeight: "400",
    color: "#49454F",
  },
  controls: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 20,
  },
  controlsButtonText: {
    fontSize: 13,
    fontWeight: "500",
    color: "rgba(244, 0, 0, 0.74)",
    textTransform: "uppercase",
  },
});

export default profileDataStyle;
