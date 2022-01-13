import React, { memo } from "react";
import { ICONS } from "../../utils/icons";
import { COLORS } from "../../style/colors";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

export default CustomIcon = memo(
  ({ name, iconSize, circleSize, iconColor, cirlceColor }) => {
    switch (name) {
      case "phone":
        return ICONS.phone(iconSize, circleSize, iconColor, cirlceColor);
      case "plus":
        return ICONS.plus(iconSize, circleSize, iconColor, cirlceColor);
      case "profile":
        return ICONS.profile(iconSize, circleSize, iconColor, cirlceColor);
      case "rooms":
        return ICONS.rooms(iconSize, circleSize, iconColor, cirlceColor);
      case "search":
        return ICONS.search(iconSize, circleSize, iconColor, cirlceColor);
      case "send":
        return ICONS.send(iconSize, circleSize, iconColor, cirlceColor);
      case "videocall":
        return ICONS.videocall(iconSize, circleSize, iconColor, cirlceColor);
      case "visionLow":
        return ICONS.visionLow(iconSize, circleSize, iconColor, cirlceColor);
      case "vision":
        return ICONS.vision(iconSize, circleSize, iconColor, cirlceColor);
      case "leftArrow":
        return <MaterialIcons name="arrow-back-ios" size={24} color={COLORS.plum[500]} />;
      case "close":
        return <AntDesign name="closecircle" size={21} color={COLORS.gray[300]} />;
      default:
        return null;
    }
  }
);
