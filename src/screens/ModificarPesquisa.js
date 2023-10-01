import React from 'react';
import {View, StyleSheet} from 'react-native';
import InputText from '../components/InputText';
import {useState} from 'react';
import Botao from '../components/Botao';
import DataModal from '../components/DateModal';
import ImgInput from '../components/ImgInput';
import PopUp from '../components/PopUp';
import ButtonIcon from '../components/ButtonIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ModificarPesquisa = props => {
  const [txtNome, setNome] = useState('');

  const cadastrar = () => {
    props.navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <InputText
          texto="Nome"
          value={txtNome}
          onChangeText={setNome}
          keyboardType="default"
        />
        <DataModal></DataModal>
      </View>

      <View style={styles.container_botoes}>
        <Botao
          texto="SALVAR"
          altura={35}
          largura="100%"
          corFundo="#37BD6D"
          marginB="2%"
          tamanhoTexto={20}
          funcao={cadastrar}
        />
      </View>
      <ImgInput icon="party-popper" color="pink"/>
      <View style={styles.botaoApagar}>
        <PopUp></PopUp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  botaoApagar: {
    position: 'absolute',
    bottom: -10,
    right: 2,
    padding: 5,
    margin: '1%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 75,
    backgroundColor: '#372775',
  },
  container_botoes: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1%',
  },
});

export default ModificarPesquisa;
