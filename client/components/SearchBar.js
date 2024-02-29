import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

// component(s)
import TagContainer from '../components/ChatTagBtn'; 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SearchBar = ({ children }) => {

    const [allTags, setAllTags] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const searchData = async (text) => {
        // try {
        //     fetch('https://wellness-server.onrender.com/tag/getTags', {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //
        //         }),
        //     })
        //     .then(res => res.json())
        //     .then(async res => {
        //
        //     })
        //     .catch(err => console.error(err));
        // } catch (error) {
        //     console.error('Error:', error);
        //     Alert.alert('Error', 'An error occurred. Please try again later.');
        // }
        setSearchQuery(text);
        const filteredData = testingData.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
        );
        setSearchResults(filteredData);
    };

    // const clearSearch = () => {
    //     setSearchQuery('');
    //     setSearchResults([]); // Clear search results when clearing the search query
    // };

    // const findNameById = async () => { // AT LEAST THIS NEEDS TO GET DONE ASAP
    //     try {
    //         fetch('https://wellness-server.onrender.com/tag/getTagNameById', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
                    
    //             }),
    //         })
    //         .then(res => res.json())
    //         .then(async res => {
        
    //         })
    //         .catch(err => console.error(err));
    //     } catch (error) {
    //         console.error('Error:', error);
    //         Alert.alert('Error', 'An error occurred. Please try again later.');
    //     }
    // }

    const testingData = [ 
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
    ];

    return (
        <>
            <View style={{
                alignItems: 'center',
                position: 'relative',
                backgroundColor: 'rgba(225,225,225,0)',
            }}>
                <TextInput 
                    placeholder="Search..."
                    value={searchQuery}
                    onChangeText={searchData}
                    style={{
                        height: windowHeight * 0.07,
                        width: windowWidth * 0.9,
                        backgroundColor: 'rgba(225,225,225,1)',
                        borderRadius: 8,
                        paddingHorizontal: windowWidth * 0.05,
                        fontSize: 16,
                    }}
                />
                { searchQuery !== '' && ( // Render the clear button if searchQuery is not empty
                    <FlatList
                        data={searchResults}
                        renderItem={({ item }) => 
                            <TagContainer
                                search={true}
                                tagName={item} // will add [info] to database
                                // tagColor="#64b6ac" // will add [info] to database
                                onPress={() => {
                                    console.log("pressed!");
                                }}
                            />
                        }
                        keyExtractor={(item, index) => index.toString()}
                        initialNumToRender={5}
                        maxToRenderPerBatch={5}
                        // windowSize={5}
                        style={{
                            width: windowWidth * 0.9,
                        }}
                    />
                )}
            </View>
        </>
    );
};

export default SearchBar;
