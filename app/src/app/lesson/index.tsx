import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { Link } from 'expo-router';
import lessons from '@/content/lesona.json';

export default function LessonsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={lessons}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Link href={`/lesson/${item.id}`} asChild>
            <Pressable style={styles.card}>
              <Text style={styles.cardText}>{item.title}</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B1026', paddingTop: 60 },
  list: { paddingHorizontal: 24, gap: 12 },
  card: {
    backgroundColor: '#1A2352',
    padding: 18,
    borderRadius: 14,
  },
  cardText: { color: '#FFFFFF', fontSize: 18, fontWeight: '600' },
});