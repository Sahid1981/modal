import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  const [modalOn, setModalOn] = useState(false);
  return (
  <SafeAreaProvider>
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalOn}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalOn(!modalOn);
        }}>
      <View style={styles.container}>
        <Pressable onPress={() => setModalOn(false)}>
          <Text>Show modal message</Text>
        </Pressable>
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
});
