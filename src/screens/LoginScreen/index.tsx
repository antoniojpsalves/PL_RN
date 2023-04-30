import { Text, Input, Button } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { Icon } from 'react-native-elements/dist/icons/Icon';

import styles from '../../styles/MainStyle';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;

export default function FormLogin(props: LoginScreenProps) {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');


  const entrar = () => {
    props.navigation.reset({
      index: 0,
      routes: [{ name: "Principal", params: { nome: 'aaaa', matricula: 'bbbb'}}]
    });
  }

  return(
    <View style={styles.container}>

      <Text h3> Entre no TemTudaki</Text>

      <Input 
        placeholder='E-mail'
        keyboardType='email-address'
        leftIcon={{ type: 'font-awesome', name: 'envelope'}}
        onChangeText={(value) => {setEmail(value)}}
      />
      <Input
        placeholder='Senha'
        leftIcon={{ type: 'font-awesome', name: 'lock'}}
        onChangeText={(value) => {setPass(value)}}
        secureTextEntry={true}
      />

      <Button
        icon={
          <Icon 
            name="arrow-right"
            size={15}
            color='white'
          />
        }
        title="Entrar"
        onPress={() => entrar()}
      />

    </View>
  );
}