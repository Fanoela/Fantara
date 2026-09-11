import { Text, View, StyleSheet, ImageBackground, Pressable, BackHandler, Platform } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('@/assets/images/bg.jpeg')}
      style={styles.container}
      resizeMode="cover"
    >
    <Link href="/setting" asChild>
    <Pressable
      style={styles.settingsIcon}
    >
      <Ionicons name="settings-outline" size={28} color="#FFFFFF" />
    </Pressable>
    </Link>

      <Text style={styles.title}>HAIKINTANA</Text>
      <Text style={styles.subtitle}>Ho an'ny rehetra</Text>

      <Link href="/lesson" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Lesona</Text>
        </Pressable>
      </Link>

      <Pressable style={styles.button} onPress={() => alert('Button pressed!')}>
        <Text style={styles.buttonText}>Fitsapana</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => 
        alert('Button pressed!')
      }>
        <Text style={styles.buttonText}>Hamantatra</Text>
      </Pressable>


      <Pressable style={styles.button} onPress={() => 
        BackHandler.exitApp()
      }>
        <Text style={styles.buttonText}>Hiala</Text>
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 37,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  button: {
    backgroundColor: '#ff9500',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 20,
    marginTop: 20,
    width: 180,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  settingsIcon: {
  position: 'absolute',
  top: 50,
  right: 20,
  zIndex: 10,
},
});