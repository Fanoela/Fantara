import { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export default function SettingsScreen() {
  const [soundOn, setSoundOn] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hanova</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Feo</Text>
        <Switch
          value={soundOn}
          onValueChange={setSoundOn}
          trackColor={{ false: '#3a3a3a', true: '#ff9500' }}
          thumbColor="#FFFFFF"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1026',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 32,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1A2352',
    padding: 16,
    borderRadius: 14,
  },
  label: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});