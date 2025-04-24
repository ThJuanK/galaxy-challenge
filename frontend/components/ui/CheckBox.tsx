import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from '@/constants/GlobalStyles';
import { Colors } from '@/constants/Colors';

interface Props {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckBox = ({ label, checked, onChange }: Props) => {
  return (
    <Pressable style={styles.container} onPress={() => onChange(!checked)}>
      <Ionicons
        name={checked ? 'checkbox' : 'square-outline'}
        size={24}
        color={checked ? Colors.primary : '#aaa'}
      />
      <Text style={GlobalStyles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    maxWidth: '50%'
  },
});

export default CheckBox;
