import { Text, View, StyleSheet, ImageBackground, Pressable } from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('@/assets/images/bg.jpeg')}
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.title}>HAIKINTANA</Text>
      <Text style={styles.subtitle}>Ho an'ny rehetra</Text>
       <Pressable
        style={styles.button}
        onPress={() => alert('Button pressed!')}
      >
        <Text style={styles.buttonText}>Lesona</Text>
      </Pressable>

             <Pressable
        style={styles.button}
        onPress={() => alert('Button pressed!')}
      >
        <Text style={styles.buttonText}>Fanontaniana</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => alert('Button pressed!')}
      >
        <Text style={styles.buttonText}>Hanova</Text>
      </Pressable>

            <Pressable
        style={styles.button}
        onPress={() => alert('Button pressed!')}
      >
        <Text style={styles.buttonText}>Hivoaka</Text>
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
    width:180,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});