import React, { Component } from "react";
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
    Alert,
    KeyboardAvoidingView,
} from "react-native";
import firebase from "firebase";

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "violet", flex: 1 }}>
                <Text style={{ fontSize: 30, alignSelf: "center" }}>
                    {" "}
                    Tela de login{" "}
                </Text>
                <TextInput
                    style={{
                        borderWidth: 2,
                        width: "50%",
                        alignSelf: "center",
                        textAlign: "center",
                        marginTop: 180,
                        borderRadius: 100,
                    }}
                    placeholder={" usuário"}
                    placeholderTextColor={"#000000"}
                />
                <TextInput
                    style={{
                        borderWidth: 2,
                        width: "50%",
                        alignSelf: "center",
                        textAlign: "center",
                        marginTop: 25,
                        borderRadius: 100,
                    }}
                    placeholder={"senha"}
                    placeholderTextColor={"#000000"}
                />
                <TouchableOpacity
                    style={{
                        background: "lightblue",
                        width: 50,
                        borderRadius: 50,
                        alignSelf: "center",
                        marginTop: 20,
                    }}
                >
                    <Text style={{ textAlign: "center" }}>Enviar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
