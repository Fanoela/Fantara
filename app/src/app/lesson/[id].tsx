import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import lessons from '@/content/lesona.json';

export default function LessonScreen() {
  const { id } = useLocalSearchParams();
  const lesson = lessons.find((l) => l.id === id);

  if (!lesson) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lesson not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>{lesson.title}</Text>
      <Text style={styles.body}>{lesson.body}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B1026' },
  content: { padding: 24, paddingTop: 60 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 16 },
  body: { fontSize: 16, color: '#C5CBE8', lineHeight: 24 },
});