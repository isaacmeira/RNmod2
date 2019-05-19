import React, { Component } from "react";
import api from "~/services/api";
import AsyncStorage from "@react-native-community/async-storage";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";

import styles from "./styles";

export default class Welcome extends Component {
  state = {
    username: ""
  };

  checkUserExists = async username => {
    const user = await api.get(`/users/${username}`);

    return user;
  };

  saveUser = async username => {
    await AsyncStorage.setItem("@githuber:username", username);
  };

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);

      navigation.navigate("Repositories");
    } catch (err) {
      console.tron.log("usuario inexistente");
    }
  };

  render() {
    const { username } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Bem-Vindo</Text>
        <Text style={styles.text}>
          Para continuar é necessário que você informe o seu usuário no Github.
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite Seu usuário"
            underlineColorAndroid="transparent" // Retira a linha abaixo do texto
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />

          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            <Text style={styles.buttonText}>Prosseguir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
