import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Container from './components/Container';
import Texte from './components/Texte';

export default function App() {
  return (
    <View style={styles.container}>
      <Texte/>
    </View>
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
