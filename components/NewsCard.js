import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  ListItem,
  Image,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Card, Button, Icon } from 'react-native-elements';


const ActionButton = (props) => {
  return (
    <View style={styles.actionButtonView}>
      <Icon name={props.icon_name} size={20} />
      <Text>{props.text}</Text>
    </View>
  );
}

const NewsCard = () => {
  return (
    <Card>
    <Card.Image source={require('../images/download.jpeg')}/>
    <Text style={styles.websiteTitle}>
    <Image
        style={{
            width: 15,
            height: 15,
            borderRadius: 10,
        }}
        source={require('../images/koimoi.jpeg')} 
        />
    <Text>  koimoi.com</Text>
    </Text>
    <Text style={styles.title}>
        Arnab Goswami's Alleged Leaked Chats Go Viral, A Message Reads,
        "Kangana Ranaut Is S*xually Possessed With Hrithik Roshan"
    </Text>
    <View style={styles.actionButtonContainer}>
        <ActionButton icon_name="visibility" text="1200"/>
        <ActionButton icon_name="thumb-up-alt" text="325"/>
        <ActionButton icon_name="thumb-down-alt" text="10"/>
        <ActionButton icon_name="comment" text="567"/>
    </View>
    <Card.Divider/>
    <View style={styles.moreOptionsView}>
        <Text style={styles.moreOptionsText}>7 Hours Ago</Text>
        <Icon name="more-vert" size={30} />
    </View> 
    </Card>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  actionButtonView: {
    // paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "column",
    alignItems: "center"
  },
  moreOptionsView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  moreOptionsText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#777'
  },
  websiteTitle: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 13,
  },
  title: {
    marginVertical: 5,
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default NewsCard;
