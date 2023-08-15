import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Modal,
} from "react-native";
import React, { useState } from "react";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [twoModalVisible, setTwoModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Text style={styles.modalText}>Hello 00 World!</Text>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}}
      >
        <View style={{ ...styles.centeredView, backgroundColor: "white" }}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello 11 World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={twoModalVisible}
        onRequestClose={() => {}}
      >
        <View style={{ ...styles.centeredView, backgroundColor: "white" }}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello 2 World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setTwoModalVisible(!twoModalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setTwoModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Two Modal</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default App;
