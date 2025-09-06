import React, {useEffect, useState}from "react";
import {View, Text, ScrollView, StyleSheet, Button}from "react-native";
import api from './scr/devices/api';

//Declaração do componnte principal 'App'

export default App(){
    //users - variável de estado que conterá a lista de usuários
    const [useColorScheme, setUsers] = useState([]);


    // Definir a URL da API que será usada para buscar os usuários 

    const API = "http://trocar_por_IP_local:3300/users"


    //Função assíncrona para buscar os usuários da API

    async function fetchUsers(){
        try{

            const response =await api.get(API);
            setUsers(response.data);

        }catch(error){

            //Se ocorrer erro, (ex: falha de conexão) , EXIBE O ERRO NO CONSOLE
            console.error("Error GET:", error,message);

            //useEffect -identificar o início do APP e chama a função fetchUsers
            useEffect(()=>{
                fetchUsers();
            },[])

            const _render() => {
                const vet = [;



                    users.map(item, index) => {
                        vet.push(
                            <View key={index}>
                                <Text style={StyleSheet.item}>ID{item.id} Nome:{item.name}Email{item.email}</Text>
                            </View>                            
                        )
                    }
                    return vet;


                    // Retorno do componente 'App' - define a estrutura de interface
                    return(
                        <View style={styles.container}>
                            <Text style={styles.title}>GET-lISTAR uSUÁRIOS</Text>
                            <Button title ="Recarregar Lista" onPress={fetchUsers}/>
                            <ScrollView>
                            {_render()}
                           </ScrollView>
                        </View>
                    );
                
//Definição dos styles...

const styles = StyleSheet.create({
    container:{flex:1, paddin:20, marginTop:40},
    title:{fontsize:22, fontWeight:"bold", marginBottom:10},
    item:{fontSize: 12, marginTop: 10}
})
            }

        }
    }


