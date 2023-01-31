import { View } from "react-native";
import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import { Input, Button, Text } from "@rneui/themed";
import { useState } from "react";
import { useLayoutEffect } from "react";
import { auth } from "../firebase";

const RegisterScree = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL: imageUrl,
        });
      })
      .catch((err) => alert(err.message));

    // .createUserWithEmailAndPassword(email, password)
    // .then((authUser) => {
    //   authUser.user.update({
    //     displayName: name,
    //     photoURL: imageUrl,
    //   });
    // })
    // .catch((err) => {
    //   alert(err.message);
    // });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "back",
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView behaviour="padding" style={styles.container}>
      <StatusBar styles="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create A New Account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="text"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="text"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Image URL"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>

      <Button
        raised
        title="Register"
        onPress={register}
        containerStyle={styles.button}
      />
      <View style={{ height: 50 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
