import { StyleSheet } from "react-native";

const registerStyle = StyleSheet.create({
  register: {
    paddingTop: 50,
    width: "100%",
  },
  title: {
    paddingHorizontal: 8,
    paddingBottom: 10,
  },
  titleText: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "500",
  },
  buttons: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",

    paddingHorizontal: 8,
    marginRight: 0,
  },
  button: {
    paddingVertical: 14,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#F1F1F1",
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 5,
  },
  buttonText: {
    fontSize: 15,
    lineHeight: 16,
    fontWeight: "500",
    color: "#272727",
    textTransform: "uppercase",
  },
  buttonTextActive: {
    fontSize: 15,
    lineHeight: 16,
    fontWeight: "500",
    color: "#272727",
    textTransform: "uppercase",
  },
  buttonActive: (loginButtons) => {
    return {
      paddingVertical: 14,
      width: loginButtons / 2 - 13,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F1F1F1",
      borderRadius: 4,
    };
  },
  form: {
    paddingBottom: 150,
  },
  formContainer: {
    marginTop: 30,
    paddingHorizontal: 8,
  },
  formWrapper: {
    position: "relative",
    marginBottom: 25,
  },
  placeholder: {
    paddingHorizontal: 4,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "600",
    color: "rgba(0, 0, 0, 0.6)",
    backgroundColor: "white",
    position: "absolute",
    top: -8,
    left: 9,
    zIndex: 2,
  },
  input: (error = false) => {
    return {
      paddingVertical: 20,
      paddingLeft: 16,
      borderColor: error ? "#B00020" : "#B3B0AF",
      borderWidth: error ? 2 : 1.5,
      borderRadius: 4,
    };
  },
  formErrorMessage: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "400",
    color: "#B00020",
    marginTop: 5,
    marginLeft: 10,
  },
  inputWarning: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "400",
    color: "rgba(0, 0, 0, 0.6)",
    marginLeft: 16,
    marginBottom: 20,
  },
  submit: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#272727",
    paddingVertical: 16,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.14,
    shadowRadius: 5,
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  submitText: {
    fontSize: 11,
    lineHeight: 16,
    fontWeight: "600",
    color: "white",
    textTransform: "uppercase",
  },
  text: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: "400",
    color: "rgba(0, 0, 0, 0.74)",
    textAlign: "center",
    marginBottom: 10,
  },
  linkText: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: "400",
    color: "rgba(244, 0, 0, 0.6)",
    textAlign: "center",
    textDecorationLine: "underline",
    textDecorationColor: "rgba(244, 0, 0, 0.6)",
    margin: 0,
  },
});

export default registerStyle;
