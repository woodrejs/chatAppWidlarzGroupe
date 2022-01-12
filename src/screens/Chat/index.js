import React, { useState, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { useMutation, useSubscription, useQuery } from "@apollo/client";
import { QUERIES } from "../../utils/queries";
import useError from "../../hooks/useError";
import {
  renderInputToolbar,
  renderBubble,
  changeSingleMessageFormat,
  changeMessagesFormat,
} from "./index.utils";

export default Chat = ({ route }) => {
  const { roomId, userId } = route.params;
  const [messages, setMessages] = useState([]);
  const { showErrorModal } = useError();

  const [sendMessage] = useMutation(QUERIES.SEND_MESSAGE);
  const { data: subscriptionData, error: subscriptionError } = useSubscription(
    QUERIES.CHAT_SUBSCRIPTION,
    { variables: { roomId } }
  );
  const { data: queryData, error: queryError } = useQuery(QUERIES.GET_SINGLE_ROOM, {
    variables: { id: roomId },
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
  });

  const handleSend = (messages = []) => {
    sendMessage({ variables: { body: messages[0].text, roomId } });
  };

  useEffect(() => {
    if (queryData) {
      setMessages(changeMessagesFormat(queryData.room.messages));
    }
  }, [queryData]);

  useEffect(() => {
    if (subscriptionData) {
      setMessages(() =>
        GiftedChat.append(
          messages,
          changeSingleMessageFormat(subscriptionData.messageAdded)
        )
      );
    }
  }, [subscriptionData]);

  if (queryError && subscriptionError) {
    showErrorModal("Something went wrong while retrieving data. Try again.");
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => handleSend(messages)}
      user={{ _id: userId }}
      renderBubble={renderBubble}
      renderInputToolbar={renderInputToolbar}
      renderAvatar={() => null}
      renderDay={() => null}
      renderTime={() => null}
      messagesContainerStyle={{ paddingBottom: 32 }}
    />
  );
};
