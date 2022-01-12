import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import CustomIcon from "../../CustomIcon";
import { COLORS } from "../../../../style/colors";

export default HeaderButton = ({ handlerPress = () => null, name }) => {
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
};
