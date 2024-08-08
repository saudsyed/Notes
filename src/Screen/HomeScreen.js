import React, { useEffect } from "react";
import { View, StyleSheet, FlatList , TouchableOpacity, Text} from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import ListingItem from "../component/ListingItem";
import { useSelector } from "react-redux";

const HomeScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const notesData = useSelector((state) => state.reducer)

    const renderItem = ({ item }) => (
        <ListingItem 
            data={item}
            onPress={handlePress}
        />
    );

    const handlePress = (item) => {
        navigation.navigate('other', { item, type: 'update' });
      };

    const ItemSeparator = () => <View style={styles.separator} />;

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => {navigation.navigate('other', { type: 'create' })}}>
                    <Text style={styles.headerButtonText}>Create</Text>
                </TouchableOpacity>
            ),
        });
    }, [navigation, route]);

    return(
        <View style={styles.container}>
            <FlatList 
                data={notesData}
                renderItem={renderItem}
                keyExtractor={ item => item.id}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 15,
    },

    separator: {
        height: 10,
        backgroundColor: '#FFFFFF',
        flex: 1,
    },

    headerButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#E7BB4D'
    }
})