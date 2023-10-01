import React from 'react';
import {View, StyleSheet} from 'react-native';
import InputText from '../components/InputText';
import {useState} from 'react';
import Botao from '../components/Botao';

import MensagemErro from '../components/MensagemErro';

const Login = props => {
  const [txtEmail, setEmail] = useState('');
  const [txtSenha, setSenha] = useState('');
  const [txtSenhaRepetida, setSenhaRepetida] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroSenhasDiferentes, setErroSenhasDiferentes] = useState('');

  const verificarEmail = () => {
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regEmail.test(txtEmail)) {
      setErroEmail("E-mail inválido. ");
      return false;
    } else {
      setErroEmail(null);
    }; 
    return regEmail.test(txtEmail);
  }

  const verificarSenha = () => {
    if(txtSenha.length < 1) {
      setErroSenha("Senha inválida. "); 
      return false;
    } else {
      setErroSenha(null);
      return true;
    }
  }

  const verificarSenhasDiferentes = () => {
    if(txtSenha !== txtSenhaRepetida) {
      setErroSenhasDiferentes("O campo repetir senha difere da senha. ");
      return false;
    } else {
      setErroSenhasDiferentes(null);
      return true;
    }
  }
  
  const cadastrar = () => {
    if(verificarEmail() && verificarSenha() && verificarSenhasDiferentes()) {
      props.navigation.navigate("Login");
    } else {
      return;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <InputText
          texto="E-mail"
          value={txtEmail}
          onChangeText={setEmail}
          keyboardType="default"
        />
        <MensagemErro erroMsg={erroEmail} visible={erroEmail != null} />
        <InputText
          texto="Senha"
          value={txtSenha}
          onChangeText={setSenha}
          keyboardType="default"
          campoSenha={true}
        />
        <MensagemErro erroMsg={erroSenha} visible={erroSenha != null} />
        <InputText
          texto="Repetir Senha"
          value={txtSenhaRepetida}
          onChangeText={setSenhaRepetida}
          keyboardType="default"
          campoSenha={true}
        />
        <MensagemErro erroMsg={erroSenhasDiferentes} visible={erroSenhasDiferentes != null} />
      </View>

      <View style={styles.container_botoes}>
        <Botao
          texto="CADASTRAR"
          altura={35}
          largura="100%"
          corFundo="#37BD6D"
          tamanhoTexto={20}
          funcao={cadastrar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 100,
    backgroundColor: '#372775',
  },
  container_botoes: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
});

export default Login;
