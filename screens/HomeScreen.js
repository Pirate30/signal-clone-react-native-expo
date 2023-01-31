import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import CustomListItem from "../components/CustomListItem";
import { Avatar } from "@rneui/themed";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import { auth, db } from "../firebase";

const HomeScreen = ({ navigation }) => {
  const [chats, setChats] = useState([]);

  const signOut = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  const enterChat = (id, chatName) => {
    navigation.navigate("Chat", {
      id,
      chatName,
    });
  };

  useEffect(() => {
    const unsub = db.collection("chats").onSnapshot((ss) => {
      // console.log("ss", ss.docs[0].data());
      setChats(
        ss.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return unsub;
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTitleColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <>
            <TouchableOpacity activeOpacity={0.5} onPress={signOut}>
              <Avatar
                rounded
                source={{
                  uri: auth.currentUser.photoURL
                    ? auth.currentUser.photoURL
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png",
                  // uri: auth?.currentUser?.photoURL,
                }}
              />
            </TouchableOpacity>
          </>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <>
            <TouchableOpacity activeOpacity={0.5}>
              <AntDesign name="camerao" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("AddChat")}
              activeOpacity={0.5}
            >
              <FontAwesome name="pencil-square-o" size={24} color="black" />
            </TouchableOpacity>
          </>
        </View>
      ),
    });
  }, [navigation]);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: "Signal",
  //     headerStyle: {
  //       backgroundColor: "#fff",
  //     },
  //     headerTitleStyle: { color: "black" },
  //     headerTintColor: "black",
  //     headerLeft: () => (
  //       <View style={{ marginLeft: 20 }}>
  //         <TouchableOpacity onPress={signOut} activeOpacity={0.4}>
  //           <Avatar
  //             rounded
  //             source={{
  //               uri: auth.currentUser
  //                 ? auth.currentUser
  //                 : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png",
  //             }}
  //           />
  //         </TouchableOpacity>
  //       </View>
  //     ),
  //     headerRight: () => (
  //       <View
  //         style={{
  //           flexDirection: "row",
  //           justifyContent: "space-between",
  //           width: 80,
  //           marginRight: 20,
  //         }}
  //       >
  //         <TouchableOpacity activeOpacity={0.4}>
  //           <AntDesign name="camerao" size={24} color="black" />{" "}
  //         </TouchableOpacity>
  //         <TouchableOpacity
  //           onPress={() => navigation.navigate("AddChat")}
  //           activeOpacity={0.4}
  //         >
  //           <FontAwesome name="pencil-square-o" size={24} color="black" />{" "}
  //         </TouchableOpacity>
  //       </View>
  //     ),
  //   });
  // }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {chats.map(({ id, data: { chatName } }) => (
          <CustomListItem
            key={id}
            id={id}
            chatName={chatName}
            enterChat={enterChat}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100% ",
  },
});
