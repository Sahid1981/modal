import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  const [modalOn, setModalOn] = useState(false);
  return (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalOn}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalOn(!modalOn);
        }}>
      <View style={styles.container}>
        <View style={styles.modalBox}>
          <Text>This is modal...</Text>
          <Pressable onPress={() => setModalOn(false)}>
            <Text>Close</Text>
          </Pressable>
        </View>
      </View>

      </Modal>
      <Pressable onPress={() => setModalOn(true)}>
        <Text>Show modal message</Text>
      </Pressable>

    </SafeAreaView>
  </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBox: {
    backgroundColor: '#cc02ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '60%',
    height: '20%',
  },
});
