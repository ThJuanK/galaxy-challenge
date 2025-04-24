import { Colors } from "@/constants/Colors";
import { GlobalStyles } from "@/constants/GlobalStyles";
import { View, Text, TextInput, StyleSheet } from "react-native"

interface Props {
    value: string;
    label: string;
    error?: string;
    name: string;
    handleChange: (name: any, value: string) => void;
}

export const Input = ({value, label, error, name, handleChange}: Props) => {
    return (
        <View>
            <Text style={GlobalStyles.label}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={text => handleChange(name, text)}
                style={styles.input}
            />
            <Text style={styles.errorText}>
                {error && error}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    errorText: {
        color: Colors.danger,
    },
    input: {
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 5,
        backgroundColor: Colors.background,
    }
})