// Required to make BigInt work on Android with RN < 0.70

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Launch from "./Launch";

const App = () => {
  return <Launch />;
};

export default App;
