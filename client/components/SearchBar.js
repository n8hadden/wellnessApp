import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

// component(s)
import TagContainer from '../components/ChatTagBtn'; 

// user context hook
import { useUser } from '../context/UserContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SearchBar = ({ children }) => {

    const { user } = useUser();

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const searchData = async (text) => {
        setSearchQuery(text); 
        try {
            const response = await fetch('https://wellness-server.onrender.com/tag/getAllTags', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json(); 
            // console.log('Response:', data); 
            // console.log('users tags', user.tags)
            const filteredTags = data.tags.filter(tag => tag.tag_name.includes(text));
            const uniqueTags = filteredTags.filter(tag => !user.tags.includes(tag.tag_id));
            const firstFiveResults = uniqueTags.slice(0, 5).map(tag => tag.tag_name);
            setSearchResults(firstFiveResults); 
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'An error occurred. Please try again later.');
        }
    };

    const handleBlur = () => {
        setSearchResults([]); // Clear search results when TextInput loses focus
    };

    useEffect(() => {
        // console.log('searchQuery: ', searchQuery);
    }, [searchQuery]);

    useEffect(() => {
        // console.log('searchResults: ', searchResults);
    }, [searchResults]);

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
                    onBlur={handleBlur} // Call handleBlur function when TextInput loses focus
                    style={{
                        height: windowHeight * 0.07,
                        width: windowWidth * 0.9,
                        backgroundColor: 'rgba(225,225,225,1)',
                        borderRadius: 8,
                        paddingHorizontal: windowWidth * 0.05,
                        fontSize: 16,
                    }}
                />
                { searchResults.length > 0 && (
                    <FlatList
                        data={searchResults}
                        renderItem={({ item }) => 
                            <TagContainer
                                search={true}
                                tagName={item} // will add [info] to database
                                // tagColor="#64b6ac" // will add [info] to database
                                onPress={() => {
                                    // addTag(tagId);
                                    console.log("item:", item);
                                }}
                            />
                        }
                        keyExtractor={(item, index) => index.toString()}
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
