"use client";
import {
  defaultTheme, // Default theme
  darkTheme, // Dark theme
} from "@ant-design/compatible";
import { ConfigProvider, Switch } from "antd";
import { useState } from "react";
const MyTheme = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const onclick = () => {
    if (theme == defaultTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(defaultTheme);
    }
  };
  return (
    <ConfigProvider theme={theme}>
      <Switch
        checkedChildren="Dark"
        unCheckedChildren="Light"
        onClick={onclick}
      />
      {children}
    </ConfigProvider>
  );
};
export default MyTheme;
