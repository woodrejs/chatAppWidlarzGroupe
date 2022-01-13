import React, { useState, memo } from "react";
import CustomIcon from "../../CustomIcon";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../../../style/colors";

export default HeaderButton = memo(({ handlerPress = () => null, name }) => {
  const [isActive, setIsActive] = useState(false);

  const iconColor = isActive ? COLORS.white : COLORS.plum[500];
  const cirlceColor = isActive ? COLORS.plum[500] : COLORS.white;

  const handler = () => {
    handlerPress();
    setIsActive(!isActive);
  };

  return (
    <TouchableOpacity onPress={handler}>
      <CustomIcon name={name} iconColor={iconColor} cirlceColor={cirlceColor} />
    </TouchableOpacity>
  );
});
