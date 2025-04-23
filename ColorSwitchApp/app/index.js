import { View, Button, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Color:</Text>
      <Button title="Green" color="green" onPress={() => router.push('/color/green')} />
      <Button title="Blue" color="blue" onPress={() => router.push('/color/blue')} />
      <Button title="Red" color="red" onPress={() => router.push('/color/red')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
