import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Container from './components/Container';

export default function App() {
  return (
    <View style={styles.container}>
      <Container/>
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
