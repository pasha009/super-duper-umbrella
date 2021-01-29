
import React from 'react';

import {
    FlatList, 
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    LogBox,
    ScrollView,
} from 'react-native';

import {
  ListItem,
} from 'react-native-elements';

const list = [
  {
    id: 1,
    comment: 'Interesting Comment Here',
    time: '2m ago'
  },
  {
    id: 2,
    comment: 'Interesting Comment Here',
    time: '2m ago'
  },
  {
    id: 3,
    comment: 'Interesting Comment Here',
    time: '2m ago'
  },
  {
    id: 4,
    comment: 'Interesting Comment Here',
    time: '2m ago'
  },
  {
    id: 5,
    comment: 'Interesting Comment Here',
    time: '2m ago'
  },
  {
    id: 6,
    comment: 'Interesting Comment Here',
    time: '2m ago'
  },
]

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image source={require('../images/jack.jpg')}  style={{width:50, height:50, borderRadius:30}} />
      <View style={{alignItems:'flex-start',flex:1, justifyContent:"space-evenly"}}>
        <Text >{item.comment}</Text>
        <Text style={{fontSize: 10}}>{item.time}</Text>
      </View>
    </View>
  );
}

const Comments = () => {
  return (
    <ScrollView>

    <FlatList 
        data={list}
        renderItem={({ item }) => <Item item={item}/>}
        keyExtractor={ item => item.id.toString()}
    />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listItem:{
    margin:5,
    padding:10,
    backgroundColor:"#FFF",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  }
});
export default Comments;