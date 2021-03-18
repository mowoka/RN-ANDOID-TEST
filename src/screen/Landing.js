import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Button, ThemeProvider} from 'react-native-elements';

const Landing = props => {
  return (
    <>
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ThemeProvider>
            <View style={styles.Container}>
              <Text h3 style={styles.title}>
                Coding Test
              </Text>
              <Text h3 style={styles.title}>
                Giofanny Mowoka
              </Text>
              <Button
                style={styles.button}
                type="clear"
                title="Hit API"
                onPress={() => props.navigation.navigate('Hit_Api')}
              />
              <Button
                style={styles.button}
                type="clear"
                title="Camera"
                onPress={() => props.navigation.navigate('Camera')}
              />
              <Button
                style={styles.button}
                type="clear"
                title="Registrasi"
                onPress={() => props.navigation.navigate('Registrasi')}
              />
            </View>
          </ThemeProvider>
        </SafeAreaView>
      </>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  Container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#393939',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    color: '#fff',
    fontSize: 100,
  },
});

export default Landing;
