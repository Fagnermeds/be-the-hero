import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    
        container: { 
            flex: 1,
            paddingHorizontal: 24,
            paddingTop: Constants.statusBarHeight + 20,
            backgroundColor: '#f0f0f5'
        },

        header: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },

        headerText: {
            fontSize: 16,
            color: '#737380'
        },

        headerTextBold: {
            fontWeight: 'bold'
        },

        title: {
            color: '#13131a',
            fontWeight: 'bold',
            fontSize: 28,
            marginTop: 48,
        },

        description: {
            marginTop: 12,
            color: '#737380',
            fontSize: 16
        },

        incidentsList: {
            marginTop: 32,
            
        },
        
        incident: {
            padding: 24,
            backgroundColor: '#fff',
            borderRadius: 8,
            marginBottom: 16,
        },
        
        incidentProperty: {
            fontWeight: 'bold',
            fontSize: 14,
            color: '#41414d',

        },

        incidentValue: {
            marginTop: 8,
            marginBottom: 24,
            fontSize: 14,
            color: '#737380'
        },

        detailsButton: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },

        detailsButtonText: {
            color: '#E02041',
            fontSize: 14,
            fontWeight: "bold"
        },
});

export default styles;