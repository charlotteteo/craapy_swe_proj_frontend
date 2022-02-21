// https://medium.com/timeless/react-native-search-extended-1765c93b58fb
import React, { useState, useMemo } from 'react';
import { Animated, SafeAreaView, StatusBar, View } from 'react-native';
import NameListItem from "./mocklist.js";
import SearchComponent from './mocklist.js';
// import { deviceHeight } from './src/LoaderComponent';
import mockList from './mocklist.js';
import 'react-native-gesture-handler';

// console.disableYellowBox = true;

const ResultsScreen = () => {
  const [scrollYValue, setScrollYValue] = useState(new Animated.Value(0));
  const [searchedTerm, setSearchedTerm] = useState('');
  const clampedScroll = Animated.diffClamp(
    Animated.add(
      scrollYValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: 'clamp',
      }),
      new Animated.Value(0),
    ),
    0,
    50,
  )
  const usersList = useMemo(() => {
    if (searchedTerm.length === 0) {
      return mockList;
    }
    const list = mockList.filter((name) => {
      return name.includes(searchedTerm)
    });
    return list;
  }, [searchedTerm])
  return (
    <Animated.View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <SearchComponent searchedTerm={searchedTerm} setSearchedTerm={setSearchedTerm} clampedScroll={clampedScroll} />
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: 'white',
            paddingTop: StatusBar.currentHeight + 50
          }}
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollYValue } } }],
            { useNativeDriver: true },
            () => { },          // Optional async listener
          )}
          contentInsetAdjustmentBehavior="automatic">
          {usersList.map((name, index) => <NameListItem key={index} name={name} />)}
          <View style={{ height: deviceHeight * 0.4 }}></View>
        </Animated.ScrollView>
      </SafeAreaView>
    </Animated.View>
  );
};

export default ResultsScreen;