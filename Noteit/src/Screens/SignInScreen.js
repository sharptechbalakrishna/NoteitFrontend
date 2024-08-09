import React, { useContext, useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
// import SharpTechLogo from '../assets/SharpTechLogo.png';
// import Logo_2 from '../assets/Logo_2.png';
import Logo_2 from "../assets/images/Logo_2.png";
// import Logo from '../../../Noteit/assests/images/Logo.png';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import CustomFlashMessage from '../Components/CustomFlashMessage';


const SignInScreen = () => {

    const { login } = useContext(AuthContext);

    const navigation = useNavigation();

    const { control, handleSubmit, formState: { errors } } = useForm();

    // console.warn(errors);

    const [successMessage, setSuccessMessage] = useState('');

    const { height } = useWindowDimensions();

    const onSignInPressed = async (data) => {
        // console.warn("Signed In Successfully");

        console.log(data);
        try {
            await login(data);
            CustomFlashMessage('success', 'Success', 'Logged In Sucessfully !');
        } catch (error) {
            console.log("Sign In :", error);
            CustomFlashMessage('error', 'Login Faild', 'Provide valid phone and password !');
        }

    };
    const onForgotPasswordPressed = () => {
        console.warn("onForgotPasswordPressed");
        navigation.navigate('ForgetPasswordScreen');

    }

    const singnUpPressed = () => {
        console.warn("Singn Up Pressed");
        navigation.navigate('SignUpScreen');
    }
    return (

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={Logo_2} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
                <Text style={styles.title}>
                    SignIn to your account
                </Text>
                {/* <Text style={{color: 'black'}}>{test}</Text> */}

                <CustomInput
                    control={control}
                    name='phoneNumber'
                    placeholder='PhoneNumber'
                    keyboardType='numeric'
                    secureTextEntry={false}
                    maxLength={10}
                    rules={{
                        required: 'Phone Number Required',
                        minLength: { value: 10, message: 'Phone Number Exactly 10 Digits' },
                    }}

                />

                <CustomInput
                    control={control}
                    name='password'
                    rules={{
                        required: 'Password Required',
                        minLength: { value: 3, message: 'Password Should be at least 3 charecter' }
                    }}
                    placeholder='Passwowrd'
                    secureTextEntry={true}
                />

                <CustomButton
                    text="Sign In"
                    onPress={handleSubmit(onSignInPressed)}
                    type="PRIMARY"
                />
                {successMessage ? (
                    <Text style={{ marginTop: 20, color: 'green', fontSize: 16, textAlign: 'center' }}>{successMessage}</Text>
                ) : null}

                <CustomButton
                    text="Forgot Passowrd?"
                    onPress={onForgotPasswordPressed} type="TERTIARY"
                />

                <CustomButton
                    text="Don't have an a account? SignUp "
                    onPress={singnUpPressed}
                    type="TERTIARY"
                />



            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,

    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,

    }
})

export default SignInScreen