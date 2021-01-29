/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import AirQualityStats from './components/AirQualityStats';

import Comments from './components/Comments';
import NewsCard from './components/NewsCard';

// // For the Air Quality Index widget uncomment this 
// const App = () => {
//   return (
//     <AirQualityStats/>
//   )
// }

const App = () => {
  return (
    <View style={{
        flex: 1,
        flexDirection: 'column',
    }}>
      <NewsCard />
      <Comments />
    </View>
  );
}

export default App;
