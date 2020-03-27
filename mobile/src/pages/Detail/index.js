import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'

import logoImg from '../../assets/logo.png'
import styles from './styles'

export default function Detail() {

    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params;

    const message = `Olá ${incident.name}, estou entrando em contato 
        pois gostaria de ajudar no caso "${incident.title}" 
        com o valor de R$ ${incident.value},00`;

    function navigateBack(){

        navigation.goBack();

    }

    function sendMail(){

        MailComposer.composeAsync({

            subject: `Héroi do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,

        });

    }

    function sendWhatsapp(){

        Linking.openURL(`whatsapp://send?phone=5583987157119&text=${message}`);

    }

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity 
                    onPress={navigateBack}
                    style={styles.headerBackButton}>
                    
                    <Feather 
                        name="arrow-left" 
                        size={24} 
                        color="#E02041"/>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                
                <View style={styles.incidentHeader}>
                    <Text style={styles.incidentPropertyHeader}>CASO:</Text>
                    <Text style={styles.incidentValueHeader}>{incident.title}</Text>
                    
                    <Text style={styles.incidentPropertyHeader}>ONG:</Text>
                    <Text style={styles.incidentValueHeader}>{incident.name}</Text>
                </View>

                <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
                <Text style={styles.incidentValue}>
                    {incident.description}
                </Text>
                
                <Text style={styles.incidentProperty}>VALOR</Text>
                <Text style={styles.incidentValue}>
                    {Intl.NumberFormat('pt-BR', { 
                        style: 'currency',
                        currency: 'BRL'
                    }).format(incident.value)}
                </Text>

            </View>

            <View style={styles.incidentContact}>
                <Text style={styles.incidentContactTitle}>Salve o dia!</Text>
                <Text style={styles.incidentContactTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.incidentContactText}>Entre em contato</Text>

                <View style={styles.incidentContactButtons}>
                    <TouchableOpacity onPress={sendWhatsapp} style={styles.contactButtons}>
                        <Text style={styles.contactButtonsText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={sendMail} style={styles.contactButtons}>
                        <Text style={styles.contactButtonsText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>            
        
        </View>
    );

}
