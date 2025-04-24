import { Stack, usePathname, useRouter } from 'expo-router';
import { StackNavigator } from './_router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Ionicons } from "@expo/vector-icons"

const queryClient = new QueryClient();

// Punto de entrada
export default () => {
  const pathname = usePathname();
  const router = useRouter();

  const showFab = pathname !== '/create';
  return (
    <QueryClientProvider client={queryClient}>
      <StackNavigator />
      {showFab && (
        <Pressable style={styles.fab} onPress={() => router.push('/create')}>
          <Ionicons name="add" size={24} color="#fff" />
        </Pressable>
      )}
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: Colors.primary,
    borderRadius: 50,
    padding: 16,
    elevation: 8,
  }
})
