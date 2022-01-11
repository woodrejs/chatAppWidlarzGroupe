import React from "react";
import { ICONS } from "../../../style/icons";
import { COLORS } from "../../../style/colors";
import { MaterialIcons } from "@expo/vector-icons";

export default CustomIcon = ({ name }) => {
  switch (name) {
    case "phone":
      return ICONS.phone();
    case "plus":
      return ICONS.plus();
    case "profile":
      return ICONS.profile();
    case "rooms":
      return ICONS.rooms();
    case "search":
      return ICONS.search();
    case "send":
      return ICONS.send();
    case "videocall":
      return ICONS.videocall();
    case "visionLow":
      return ICONS.visionLow();
    case "vision":
      return ICONS.vision();
    case "leftArrow":
      return <MaterialIcons name="arrow-back-ios" size={24} color={COLORS.plum[500]} />;
    default:
      return null;
  }
};
