import React from "react";
import { ICONS } from "../../../style/icons";

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
    default:
      return null;
  }
};
