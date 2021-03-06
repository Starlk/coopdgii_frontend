import { View, Text, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function Custom_input({
  placeholder,
  value,
  iconName,
  secure,
  onChange,
  name,
  icon = null,
  color = "black",
  styled = {},
  ...prop
}) {
  return (
    <View style={[styles.input_container, styled]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(text) => onChange(name, text)}
        value={value}
        secureTextEntry={secure}
        {...prop}
      />
      {icon ? (
        { icon }
      ) : (
        <Ionicons name={iconName} size={24} color={color} style={styles.icon} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input_container: {
    position: "relative",
    marginTop: 10,
    backgroundColor: "#fff",
    width: "100%",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  input: {
    paddingLeft: 20,
    marginLeft: 5,
  },
  icon: {
    position: "absolute",
    top: 6,
    left: 1,
  },
});
