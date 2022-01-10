import React, { useState, useCallback, useEffect } from "react";
import {
  GiftedChat,
  Bubble,
  InputToolbar,
  Composer,
  Send,
} from "react-native-gifted-chat";
import { StyleSheet } from "react-native";
import { COLORS } from "../../../style/colors";
import CustomIcon from "../../components/CustomIcon";

export default Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        //createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      renderInputToolbar={renderInputToolbar}
      renderAvatar={null}
      renderDay={null}
      renderTime={null}
      renderDay={null}
      messagesContainerStyle={{ paddingBottom: 32 }}
    />
  );
};

const styles = StyleSheet.create({});

const renderInputToolbar = (props) => (
  <InputToolbar
    {...props}
    renderComposer={renderComposer}
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
const renderComposer = (props) => (
  <Composer
    {...props}
    textInputStyle={{
      height: 41,
      backgroundColor: COLORS.white,
      borderRadius: 12,
      borderBottomRightRadius: 0,
      padding: 12,
      fontSize: 14,
      fontStyle: "normal",
      lineHeight: 16.71,
      margin: 0,
    }}
  />
);
const renderSend = (props) => (
  <Send
    {...props}
    containerStyle={{
      height: 41,
      marginLeft: 17,
      marginRight: 4,
    }}
  >
    <CustomIcon name="send" />
  </Send>
);
const renderBubble = (props) => (
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
