import * as React from "react";
import Svg, { Circle, Path, Mask, G } from "react-native-svg";
import { COLORS } from "../style/colors";

export const ICONS = {
  phone: (
    iconSize = 44,
    circleSize = 22,
    iconColor = COLORS.plum[500],
    cirlceColor = COLORS.white
  ) => (
    <Svg
      width={iconSize}
      height={iconSize}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={circleSize} cy={circleSize} r={circleSize} fill={cirlceColor} />
      <Path
        d="M29.502 24.763c-.795-.785-1.787-.785-2.577 0a149.81 149.81 0 0 0-1.798 1.803c-.162.167-.299.202-.496.091-.39-.213-.806-.385-1.18-.618-1.748-1.099-3.211-2.512-4.508-4.102-.643-.79-1.215-1.636-1.615-2.588-.081-.192-.066-.319.09-.476.604-.582 1.191-1.18 1.784-1.777.825-.831.825-1.803-.006-2.639-.47-.476-.941-.942-1.412-1.418-.487-.486-.968-.977-1.459-1.458-.795-.775-1.788-.775-2.578.005-.607.597-1.19 1.21-1.808 1.797-.572.542-.86 1.206-.921 1.98-.097 1.262.212 2.452.648 3.611.891 2.4 2.248 4.533 3.894 6.488 2.224 2.643 4.877 4.735 7.982 6.244 1.397.679 2.846 1.2 4.42 1.287 1.085.06 2.027-.213 2.781-1.059.517-.577 1.1-1.104 1.646-1.656.81-.82.816-1.813.01-2.623-.962-.968-1.93-1.93-2.897-2.892Z"
        fill={iconColor}
      />
    </Svg>
  ),
  plus: (
    iconSize = 44,
    circleSize = 22,
    iconColor = COLORS.plum[500],
    cirlceColor = COLORS.white
  ) => (
    <Svg
      width={iconSize}
      height={iconSize}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={circleSize} cy={circleSize} r={circleSize} fill={cirlceColor} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 11.5a1.5 1.5 0 0 1 1.5 1.5v7.5H31a1.5 1.5 0 0 1 0 3h-7.5V31a1.5 1.5 0 0 1-3 0v-7.5H13a1.5 1.5 0 0 1 0-3h7.5V13a1.5 1.5 0 0 1 1.5-1.5Z"
        fill={iconColor}
      />
    </Svg>
  ),
  profile: (
    iconSize = 64,
    circleSize = 32,
    iconColor = COLORS.gray[300],
    cirlceColor = COLORS.gray[100]
  ) => (
    <Svg
      width={iconSize}
      height={iconSize}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={circleSize} cy={circleSize} r={circleSize} fill={cirlceColor} />
      <Mask
        id="a"
        maskType="alpha"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={iconSize}
        height={iconSize}
      >
        <Circle cx={circleSize} cy={circleSize} r={circleSize} fill={cirlceColor} />
      </Mask>
      <G mask="url(#a)" fill={iconColor}>
        <Path d="M32 32c6.627 0 12-5.373 12-12S38.627 8 32 8s-12 5.373-12 12 5.373 12 12 12ZM32 32c19.33 0 35 15.67 35 35s-15.67 35-35 35S-3 86.33-3 67s15.67-35 35-35Z" />
      </G>
    </Svg>
  ),
  rooms: (
    iconSize = 44,
    circleSize = 22,
    iconColor = COLORS.plum[500],
    cirlceColor = COLORS.white
  ) => (
    <Svg
      width={iconSize}
      height={iconSize}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={circleSize} cy={circleSize} r={circleSize} fill={cirlceColor} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.526 14.476a4.478 4.478 0 0 1 8.094-2.632c-2.34.923-4.412 3.842-3.527 7.105a.256.256 0 0 0-.042.005c-.014.002-.028.005-.043.005a4.481 4.481 0 0 1-4.482-4.483Zm14.992 3.014a4.482 4.482 0 1 1-8.965 0 4.482 4.482 0 0 1 8.965 0ZM34 30.179c0 5.226-17.92 5.226-17.92 0 0-9.238 17.92-9.144 17.92 0Zm-14.388-9.874c-8.277-1.134-13.598 8.47-5.829 10.11.076-4.413 3.428-7.096 7.529-8.085a6.09 6.09 0 0 1-1.7-2.025Z"
        fill={iconColor}
      />
    </Svg>
  ),
  search: (
    iconSize = 44,
    circleSize = 22,
    iconColor = COLORS.plum[500],
    cirlceColor = COLORS.white
  ) => (
    <Svg
      width={iconSize}
      height={iconSize}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={circleSize} cy={circleSize} r={circleSize} fill={cirlceColor} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m33.4 31.35-5.695-5.724C34.55 14.326 20.763 5.2 12.79 12.783c-7.738 8.714 1.95 21.59 12.815 14.952l5.695 5.569c1.646 1.81 3.75-.3 2.1-1.955ZM19.667 12.98c8.994 0 9.285 13.546 0 13.546-9.042 0-8.784-13.546 0-13.546Z"
        fill={iconColor}
      />
    </Svg>
  ),
  send: (iconSize = 44, iconColor = COLORS.plum[500]) => (
    <Svg
      width={iconSize}
      height={iconSize}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M25.538 38.551a2 2 0 0 0 3.309-.774L39.029 7.644c.53-1.569-.966-3.065-2.535-2.535L6.361 15.29a2 2 0 0 0-.774 3.31l6.436 6.436a2 2 0 0 0 2.502.264l4.388-2.842c1.81-1.172 3.938.956 2.766 2.766l-2.842 4.388a2 2 0 0 0 .264 2.502l6.437 6.436Z"
        fill={iconColor}
      />
    </Svg>
  ),
  videocall: (
    iconSize = 44,
    circleSize = 22,
    iconColor = COLORS.plum[500],
    cirlceColor = COLORS.white
  ) => (
    <Svg
      width={iconSize}
      height={iconSize}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={circleSize} cy={circleSize} r={circleSize} fill={cirlceColor} />
      <Path
        d="M23.643 15H12.357c-.746 0-1.357.738-1.357 1.66v10.68c0 .913.603 1.66 1.357 1.66h11.286c.746 0 1.357-.738 1.357-1.66V16.66c0-.913-.61-1.66-1.357-1.66ZM32.352 15.205a1.307 1.307 0 0 0-1.325-.047l-3.849 2.06a1.197 1.197 0 0 0-.625 1.064v7.444c0 .451.24.855.625 1.065l3.849 2.06c.421.225.919.21 1.325-.047.407-.257.648-.707.648-1.19V16.402c0-.49-.248-.94-.648-1.196Z"
        fill={iconColor}
      />
    </Svg>
  ),
  visionLow: (iconSize = 18, iconColor = COLORS.gray[300]) => (
    <Svg
      width={iconSize}
      height={iconSize}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M10.473 2.26 9.471 3.967C6.026 3.818 2.531 5.48.187 8.936c-.247.363-.25.855-.007 1.228 1.03 1.557 2.288 2.735 3.663 3.561l-.496.896c-.703 1.322 1.157 2.388 1.948 1.129L12.42 3.389c.682-1.128-1.002-2.496-1.948-1.128ZM17.817 8.93c-1.15-1.73-2.573-3-4.123-3.829L12.66 6.894c1.069.608 2.113 1.484 3.097 2.65-2.07 2.416-4.384 3.611-6.708 3.611l-1.132 1.966c3.639.39 7.422-1.277 9.897-4.964.246-.362.246-.862.003-1.227Z"
        fill={iconColor}
      />
      <Path
        d="M9.18 12.916c3.416-.351 3.54-3.66 2.819-4.886l-2.82 4.886Z"
        fill={iconColor}
      />
    </Svg>
  ),
  vision: (iconSize = 18, iconColor = COLORS.gray[300]) => (
    <Svg
      width={iconSize}
      height={iconSize}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6.367 11.106C4.324 8.399 6.76 4.866 9.98 5.78c-2.644 1.585.615 4.918 2.24 2.236 1.019 3.94-3.836 5.734-5.854 3.09Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.814 9.605C13.353 16.239 4.648 16.358.18 9.608c-.243-.369-.24-.861.007-1.223 4.468-6.582 13.123-6.775 17.63-.007.243.365.243.861-.003 1.227ZM2.24 8.993c4.247-4.845 9.362-4.908 13.517 0-4.155 4.841-9.292 4.778-13.517 0Z"
        fill={iconColor}
      />
    </Svg>
  ),
};
