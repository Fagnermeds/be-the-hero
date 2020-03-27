import { StyleSheet}  from 'react-native'
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
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    incident: {
        marginTop: 64,
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 8,

    },

    incidentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    incidentPropertyHeader: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#41414d'
    },

    incidentValueHeader: {
        fontSize: 14,
        color: '#737380'
    },

    incidentProperty: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 24,
        color: '#41414d'
    },

    incidentValue: {
        fontSize: 14,
        marginTop: 8,
        color: '#737380'
    },

    incidentContact: {
        marginTop: 32,
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 8,

    },

    incidentContactTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#41414d'
    },

    incidentContactText: {
        fontSize: 16,
        color: '#737380',
        marginTop: 8,
        marginBottom: 8

    },

    incidentContactButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12
    },

    contactButtons: {
        width: 48 + '%',
        height: 50,
        backgroundColor: '#E02041',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: "center"
    },
    
    contactButtonsText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }



});

export default styles;