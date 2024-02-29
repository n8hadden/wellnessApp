import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

// component(s)
import TagContainer from '../components/ChatTagBtn'; 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SearchBar = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const searchData = (text) => {
        setSearchQuery(text);
        const filteredData = dummyData.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
        );
        setSearchResults(filteredData);
    };

    const clearSearch = () => {
        setSearchQuery('');
        setSearchResults([]); // Clear search results when clearing the search query
    };

    const dummyData = [
        'Artist',
        'Artist',
        'Artist',
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
                        // marginBottom: windowHeight * 0.01,
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
                                tagColor="#64b6ac" // will add [info] to database
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    height: 10,
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },
  textInput: {
    height: windowHeight * 0.045,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
});

export default SearchBar;
