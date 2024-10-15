import { BarcodeScanningResult, CameraView, useCameraPermissions } from 'expo-camera';
import { useAuth } from '../../hook/auth';
import { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles'
import { ComponentButtonInterface, ComponentLoading } from '../../Components';

export function QrCode() {
    const { user } = useAuth()
    const [scanned, setScanned] = useState(false);
    const [permission, requestPermission] = useCameraPermissions();
    if (!permission) {
        return <ComponentLoading />
    }
    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Você precisa dar permisão para acesso à Câmera</Text>
                <TouchableOpacity onPress={requestPermission}>Solicitar Permissão</TouchableOpacity>
            </View>
        );
    }
    function handleBarcodeScanner({ data }: BarcodeScanningResult) {
        Alert.alert(`Olá ${data}`)
        setScanned(true)
    }
    return (
        <>
            {user && user.name && (
                <Image source={{ uri: `http://image-charts.com/charts?chs=500x500&cht=${user.user.name}&choe=UTF-8` }} style={styles.qrcode} />
            )}
            {!scanned ? (
                <CameraView
                    style={styles.qrcode}
                    barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
                    onBarcodeScanned={handleBarcodeScanner}
                />
            ) : (
                <ComponentButtonInterface onPressI={() => setScanned(false)} title='Scanner Novamente' type='primary' />
            )}
        </>
    )
} 
export interface IError{
    errors: {
      rule: string
      field: string
      message: string
    
    }[] 
}
