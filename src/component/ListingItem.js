import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ListingItem = ({ data, onPress }) => {
    return(
        <TouchableOpacity style={styles.container} onPress={() => onPress(data)}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.note}>{data.note}</Text>
        </TouchableOpacity>
    );
};

export default ListingItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F5F5',
        padding: 15,
        flexDirection: 'column',
        borderRadius: 20,
    },

    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#E7BB4D',
    },

    note: {
        fontSize: 14,
        fontWeight: '400',
        color: 'black',
    },
})