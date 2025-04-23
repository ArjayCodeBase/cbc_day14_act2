import { View, Button, StyleSheet, Text, Animated } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';

export default function ColorScreen() {
  const { color } = useLocalSearchParams(); // color = "red", "green", or "blue"
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { backgroundColor: color, opacity: fadeAnim }]}>
      <Text style={styles.text}>You are on the {color.toUpperCase()} screen</Text>

      <Button title="Go to Green" color="green" onPress={() => router.push('/color/green')} />
      <Button title="Go to Blue" color="blue" onPress={() => router.push('/color/blue')} />
      <Button title="Go to Red" color="red" onPress={() => router.push('/color/red')} />

      <Button title="Back to Home" color="#000" onPress={() => router.push('/')} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
