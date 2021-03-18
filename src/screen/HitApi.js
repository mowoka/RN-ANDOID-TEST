import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Input, Button, ThemeProvider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const HipApi = props => {
  const [data, setData] = useState([]);

  const hanldeButton = e => {
    e.preventDefault();

    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      setData(persons);
    });
  };

  const _renderItem = ({item}) => {
    return (
      <View style={styles.Content}>
        <Text>{item.name}</Text>
        <Text>{item.username}</Text>
      </View>
    );
  };

  return (
    <>
      <SafeAreaProvider>
        <ThemeProvider>
          <View style={styles.Container}>
            <View style={styles.ButtonOne}>
              <Button onPress={e => hanldeButton(e)} title="Hit Me" />
            </View>
            <View style={styles.SecondScreen}>
              {data ? (
                <FlatList
                  data={data}
                  renderItem={_renderItem}
                  keyExtractor={item => item.id.toString()}
                />
              ) : null}
            </View>
          </View>
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
  },
  ButtonOne: {
    width: '50%',
    display: 'flex',
    marginLeft: 90,
    marginTop: 10,
  },
  SecondScreen: {
    width: '80%',
    marginTop: 20,
    marginLeft: 35,
  },
  Content: {
    textAlign: 'center',
    margin: 10,
  },
});

export default HipApi;
