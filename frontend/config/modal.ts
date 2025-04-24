import React from 'react';
import { Alert, View } from 'react-native';

interface ModalProps {
    title: string
    text: string;
    handleAccept?: () => void;
    handleError?: () => void;
}

export const createBasicPopup = async({ title, text, handleAccept = () => {}, handleError }: ModalProps) => {

    await Alert.alert(title, text, [
        {
            text: "Cancelar",
            style: 'cancel'
        },
        {
            text: "Continuar",
            onPress: () => {
                try {
                    handleAccept()
                }
                catch(e: any){
                    console.log(e)
                    if(handleError) handleError()
                }
            }
        },
    ])

}