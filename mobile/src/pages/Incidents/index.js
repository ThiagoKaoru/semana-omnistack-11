import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import logoImage from '../../assets/logo.png';
import styles from './styles';

export default function Incidents(){
    const navigation = useNavigation();
    function navigateToDetail(){
        navigation.navigate('Detail');
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImage} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>.
                </Text>
            </View>
            <Text style={styles.title}>
                Bem-vindo!
            </Text>
            <Text style={styles.description}>
                Escolha um dos casos abaixo e salve uma vida
            </Text>
        
            <FlatList
                data={[1,2,3]}
                style={styles.incidentList}
                showsVerticalScrollIndicator={false}
                keyExtractor={incident=>String(incident)}
                renderItem={()=>(
                    <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>Colmeia</Text>

                    <Text style={styles.incidentProperty}>Caso:</Text>
                    <Text style={styles.incidentValue}>Cadelianha atropelada</Text>

                    <Text style={styles.incidentProperty}>Valor:</Text>
                    <Text style={styles.incidentValue}>R$ 120,00</Text>
                
                    <TouchableOpacity
                        style={styles.detailsButton}
                        onPress={navigateToDetail}
                    >
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#e02041"/>
                    </TouchableOpacity>
                </View>
                )}
            />
            
        </View>
    );
}