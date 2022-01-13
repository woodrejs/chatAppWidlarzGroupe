import React, { useState, useEffect } from "react";
import CustomIcon from "../../components/CustomIcon";
import { Bubble, InputToolbar, Composer, Send } from "react-native-gifted-chat";
import { COLORS } from "../../style/colors";
import { Keyboard } from "react-native";

export const renderInputToolbar = (props) => (
  <InputToolbar
    {...props}
    renderComposer={() => <RenderComposer {...props} />}
    renderSend={renderSend}
    containerStyle={{
      padding: 12,
      borderTopRightRadius: 12,
      borderTopLeftRadius: 12,
      backgroundColor: COLORS.blue[300],
      borderTopColor: "transparent",
    }}
  />
);
export const RenderComposer = (props) => {
  const [isFocus, setIsFocus] = useState(undefined);

  const _keyboardDidShow = () => setIsFocus(true);
  const _keyboardDidHide = () => setIsFocus(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  return (
    <Composer
      {...props}
      textInputStyle={{
        height: 41,
        backgroundColor: COLORS.white,
        borderColor: isFocus ? COLORS.plum[500] : "transparent",
        borderWidth: 2,
        borderRadius: 12,
        borderBottomRightRadius: 0,
        padding: 12,
        fontSize: 14,
        fontStyle: "normal",
        lineHeight: 16.71,
        margin: 0,
      }}
      placeholder=""
    />
  );
};
export const renderSend = (props) => (
  <Send
    {...props}
    containerStyle={{
      height: 41,
      marginLeft: 17,
      marginRight: 4,
    }}
    alwaysShowSend
  >
    <CustomIcon name="send" />
  </Send>
);
export const renderBubble = (props) => (
  <Bubble
    {...props}
    wrapperStyle={{
      right: {
        backgroundColor: COLORS.plum[300],
        padding: 12,
        marginBottom: 12,
        marginRight: 24,
        borderRadius: 12,
        borderBottomEndRadius: 0,
      },
      left: {
        backgroundColor: COLORS.white,
        padding: 12,
        marginBottom: 12,
        marginLeft: 52,
        borderRadius: 12,
        borderBottomLeftRadius: 0,
      },
    }}
    textProps={{
      style: {
        color: props.position === "left" ? COLORS.black : COLORS.white,
        fontSize: 14,
        fontStyle: "normal",
        lineHeight: 16.71,
      },
    }}
  />
);
export function changeMessagesFormat(arr) {
  if (!arr) return [];
  return arr.map(({ id, body, insertedAt, user }) => ({
    _id: id,
    text: body,
    createdAt: insertedAt,
    user: {
      _id: user.id,
      name: `${user.firstName} ${user.lastName}`,
    },
  }));
}
export function changeSingleMessageFormat(message) {
  if (!message) return null;

  return {
    _id: message.id,
    text: message.body,
    createdAt: message.insertedAt,
    user: {
      _id: message.user.id,
      name: `${message.user.firstName} ${message.user.lastName}`,
    },
  };
}
