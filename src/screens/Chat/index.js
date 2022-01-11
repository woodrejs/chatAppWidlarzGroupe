import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { useMutation, useQuery } from "@apollo/client";
import { QUERIES } from "../../utils/queries";
import { renderInputToolbar, renderBubble } from "./index.utils";

export default Chat = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const { roomId } = route.params;
  const [sendMessage] = useMutation(QUERIES.SEND_MESSAGE);
  const { loading, error, data } = useQuery(QUERIES.GET_CHAT_ROOM, {
    variables: { id: roomId },
    pollInterval: 500,
  });

  useEffect(() => {
    if (data) {
      const posts = data.room.messages.map(({ id, body, insertedAt, user }) => ({
        _id: id,
        text: body,
        createdAt: insertedAt,
        user: {
          _id: user.id,
          name: `${user.firstName} ${user.lastName}`,
        },
      }));
      setMessages(posts);
    }
  }, [data]);

  const onSend = useCallback(
    (messages = []) => {
      sendMessage({ variables: { body: messages[0].text, roomId } });
    },
    [messages, roomId]
  );

  if (!data) return null;

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: data.room.user.id,
      }}
      renderBubble={renderBubble}
      renderInputToolbar={renderInputToolbar}
      renderAvatar={() => null}
      renderDay={() => null}
      renderTime={() => null}
      messagesContainerStyle={{ paddingBottom: 32 }}
    />
  );
};
