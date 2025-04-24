import { Colors } from '@/constants/Colors';
import React, { PropsWithChildren } from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

interface Props {
    onPress: (event: GestureResponderEvent) => void;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
}

export const Button = ({ onPress, disabled = false, children, style }: Props & PropsWithChildren) => {
    return (
        <TouchableOpacity
            style={[styles.button, disabled && styles.disabledButton, style]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: '#A9A9A9',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Button;