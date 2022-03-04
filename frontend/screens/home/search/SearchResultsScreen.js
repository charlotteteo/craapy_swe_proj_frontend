import React, { useEffect, useState } from 'react';
import { SafeAreaView,ActivityIndicator, FlatList, Text, View } from 'react-native';


export default SearchResultsScreen = () =>{
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('http://localhost:8080/search/chicken');
      const json = await response.json();
      // console.log(json)
      json.map((element) => {
        console.log(element.name)
        console.log("hi")
      });
          
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ name }) => name}
          renderItem={({ item }) => (
            <Text>{item.name}, {item.address},{item.operationhours},{item.FoodCategories},{item.HighlightItems}</Text>
          )}
        />
      )}
    </SafeAreaView>
  );
};