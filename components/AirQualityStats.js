import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { ListItem, Button, Icon } from 'react-native-elements';

const data = [
    {
        "name": "PM 2.5",
        "yesterday": 3,
        "today": 6,
        "image": require("../images/PM25.png"),
        "steps": [20, 30, 50]
    },
    {
        "name": "PM 10",
        "yesterday": 25,
        "today": 15,
        "image": require("../images/PM10.png"),
        "steps": [20, 30, 50]
    },
    {
        "name": "SO2",
        "yesterday": 97,
        "today": 134,
        "image": require("../images/SO2.png"),
        "steps": [50, 100, 150]
    },
    {
        "name": "NO2",
        "yesterday": 37,
        "today": 55,
        "image": require("../images/NO2.png"),
        "steps": [20, 30, 50]
    },
    {
        "name": "Ozone",
        "yesterday": 11,
        "today": 14,
        "image": require("../images/Ozone.png"),
        "steps": [20, 30, 50]
    },
    {
        "name": "CO",
        "yesterday": 3,
        "today": 2,
        "image": require("../images/CO.png"),
        "steps": [3, 7, 10]
    },
]

const GetColoredText = (props) => {
    const steps = props.steps
    var color;
    if (props.value >= steps[2])
        color = '#6a0203'
    else if (props.value >= steps[1])
        color = '#961f23'
    else if (props.value >= steps[0])
        color = '#f7a815'
    else
        color = '#6cf68a'

    return <ListItem.Subtitle style={{color:color, fontSize: 17}}>{props.value}</ListItem.Subtitle>
}

const AirQualityStats = () => {
    return (
        <View>
            {
                data.map((l, i) => {
                    return (
                        <View>
                        <ListItem key={i} bottomDivider>
                        <Image
                                style={{
                                    width: 35,
                                    height: 35,
                                }}
                                source={l.image} 
                                />
                            <ListItem.Content style={{flexDirection: 'row', flex: 1, justifyContent: 'space-around'}}>
                                <ListItem.Title>{l.name}</ListItem.Title>
                                <GetColoredText steps={l.steps} value={l.yesterday}/>
                                <GetColoredText steps={l.steps} value={l.today}/>
                            </ListItem.Content>
                        </ListItem>
                        </View>
                    );
                })
            }
            {
                <Text style={{
                    fontSize: 90,
                    fontWeight: 'bold',
                    color: '#f7a815',
                    backgroundColor: '#fff',
                    borderColor: '#222',
                    borderWidth: 2,
                    borderRadius: 40,
                    alignSelf: 'center',
                    padding: 60,
                    margin: 90
                }}>
                    90
                </Text>
            }
        </View>
    );
};


export default AirQualityStats;
