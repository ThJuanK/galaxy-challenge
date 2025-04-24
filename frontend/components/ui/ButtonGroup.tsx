import { View, StyleSheet } from "react-native"
import { Button } from "./Button"
import { GlobalStyles } from "@/constants/GlobalStyles"

interface Props {
    handleCancel: () => void;
    handleSubmit: () => void;
}

export const ButtonGroup = ({ handleCancel, handleSubmit }: Props) => {
    return (
        <View style={styles.buttonsContainer}>
            <Button
                onPress={handleCancel}
                style={[GlobalStyles.flex1, GlobalStyles.dangerBackground]}
            >
                Cancelar
            </Button>
            <Button
                onPress={handleSubmit}
                style={GlobalStyles.flex1}
            >
                Guardar
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: "row",
        gap: 10,
    }
})

export default ButtonGroup;