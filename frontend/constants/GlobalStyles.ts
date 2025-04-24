import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const GlobalStyles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.text,
        textAlign: "center",
        marginVertical: 20,
    },
    description: {
        fontSize: 16,
        color: Colors.text,
        textAlign: "center",
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.primary,
        marginVertical: 10,
    },
    screenView: {
        flex: 1,
        padding: 10,
    },
    centerItems: {
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
    flex1: {
        flex: 1,
    },
    dangerBackground: {
        backgroundColor: Colors.danger,
    },
    flexRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
})