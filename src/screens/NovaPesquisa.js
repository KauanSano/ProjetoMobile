import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Botao from '../components/Botao';
import DataModal from '../components/DateModal';
import InputText from '../components/InputText';
import ImgInput from '../components/ImgInput';

const NovaPesquisa = props => {
  const [txtNome, setNome] = useState('');

  const cadastrar = () => {
    props.navigation.navigate('Modificar Pesquisa');
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
        <DataModal>
        </DataModal>
      </View>
      <View>
        <ImgInput texto="Câmera/Galeria de imagens"/>
      </View> 
      <View style={styles.container_botoes}>
        <Botao
          texto="CADASTRAR"
          altura={30}
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
  cardInput: {
    width: 50,
    aspectRatio: 1
  },
  container_botoes: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
});

export default NovaPesquisa;
