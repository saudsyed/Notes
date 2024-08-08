import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { addNote, removeNote, updateNote } from "../redux/Action";

const OtherScreen = ({ route, navigation }) => {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const dispatch = useDispatch();

    const { item, type } = route.params || {};
    const isItemValid = item && item.id && item.title;

    //MARK: - handleCreateButton
    const handleCreateButton = (type) => {
        const result = {
            id: Math.random(),
            title: title,
            note: note
        };

        if (type === 'create') {
            // Creating Note
            dispatch(addNote(result))
            navigation.goBack();
        } else {
            // Updating Note
            result.id = item.id
            dispatch(updateNote(result))
            navigation.goBack()
        }
    };

    //MARK: - handleRemoveNote
    const handleRemoveNote = (item) => {
        dispatch(removeNote(item.title))
        navigation.goBack();
    }

    useEffect(() => {
        if (isItemValid) {
            navigation.setOptions({
                headerRight: () => (
                    <TouchableOpacity onPress={() => handleRemoveNote(item)}>
                        <Text style={styles.headerButtonText}>Delete</Text>
                    </TouchableOpacity>
                ),
            });

            setTitle(item.title)
            setNote(item.note)
        }
    }, [setTitle, setNote, isItemValid, navigation]);

    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.titleInput}
                placeholder="Write title here"
                value={title}
                onChangeText={setTitle}
            />

            <TextInput 
                style={styles.descriptionInput}
                placeholder="Write notes here"
                value={note}
                onChangeText={setNote}
                multiline={true}
                scrollEnabled={true}
            />

            <TouchableOpacity style={styles.button} onPress={() => handleCreateButton(type)}>
            {
                type === 'create' ? <Text style={styles.buttonText}>Create</Text> : <Text style={styles.buttonText}>Update</Text>
            }
            </TouchableOpacity>
        </View>
    );
};

export default OtherScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16,
        flexDirection: 'column',
    },

    titleInput: {
        borderRadius: 20,
        height: 50,
        backgroundColor: '#F8F5F5',
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 18,
        fontWeight: '500',
    },

    descriptionInput: {
        borderRadius: 20,
        backgroundColor: '#F8F5F5',
        padding: 15,
        fontSize: 16,
        fontWeight: '300',
        flex: 1,
        marginTop: 15,
        textAlignVertical: 'top',
    },

    button: {
        marginTop: 15,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#E7BB4D',
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        padding: 10,
    },

    headerButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'red'
    }
})