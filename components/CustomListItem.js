import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, ListItem } from "@rneui/themed";

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          Hello Friend! Hello Friend Hello Friend! Hello Friend Hello Friend!
          Hello Friend Hello Friend! Hello Friend Hello Friend! Hello Friend
          Hello Friend! Hello Friend Hello Friend! Hello Friend Hello Friend!
          Hello Friend Hello Friend! Hello Friend Hello Friend! Hello Friend
          Hello Friend! Hello Friend Hello Friend! Hello Friend Hello Friend!
          Hello Friend Hello Friend! Hello Friend Hello Friend! Hello Friend
          Hello Friend! Hello Friend Hello Friend! Hello Friend Hello Friend!
          Hello Friend Hello Friend! Hello Friend Hello Friend! Hello Friend
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
