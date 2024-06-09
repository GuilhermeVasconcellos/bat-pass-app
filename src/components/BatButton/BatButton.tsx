import React, { useState } from 'react';
import { Button, View, TextInput, Text, Pressable } from 'react-native';

import * as Clipboard from 'expo-clipboard';

import { styles } from '../BatButton/BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';

export function BatButton() {
    const [pass, setPass] = useState('')
    const [passLen, setPassLen] = useState('12')
    const [warning, setWarning] = useState('')
    const [style, setStyle] = useState(styles.warning_off)
            
    function handleGenerateButton() {
        let generateToken = generatePass(passLen)
        if(generateToken == 'W') {
            setWarning('Password length: 6 to 18')
            setStyle(styles.warning_off)
            setPass('')
        }else {
            setWarning('')
            setStyle(styles.warning_on)
            setPass(generateToken)            
        }        
    }

    function handleCopyButton() {
        Clipboard.setStringAsync(pass)
        setPass('')
    }

  return (
    <>
        {/* <Button
            onPress={()=>{console.log("olá")}}
            title='Clique aqui'
            accessibilityLabel='clique em mim'
        /> */}
        <BatTextInput pass={pass}/>
        <Pressable
            // onPress={()=>{console.log("fui pressionado...")}}
            onPress={handleGenerateButton}
            style={styles.button}
        >
            <Text style={styles.text}>⚡ GENERATE</Text>
        </Pressable>
        <Pressable
            onPress={handleCopyButton}
            style={styles.button}
        >
            <Text style={styles.text}>⚡ COPY</Text>
        </Pressable>     
        <View
            style={styles.container}>
            <Text
                style={styles.label}>
                Password length:
            </Text>
            <TextInput
                onChangeText={(val) => setPassLen(val)}
                style={styles.input}
                keyboardType='numeric'
                >
            </TextInput>
        </View>
        <View
            style={style}
            >
            <Text
            style={styles.label}>
            {warning}
            </Text>
        </View> 
    </>
  );
}