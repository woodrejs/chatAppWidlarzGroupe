import { Bubble, InputToolbar, Composer, Send } from "react-native-gifted-chat";
import { COLORS } from "../../../style/colors";
import CustomIcon from "../../components/CustomIcon";

export const renderInputToolbar = (props) => (
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
export const renderComposer = (props) => (
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
export const renderSend = (props) => (
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
