/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

const CheckboxRow: () => React$Node = ({
  title = 'Default Title',
  value = false,
  selected = false,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity disabled={selected} onPress={onPress}>
      <View style={styles.checkboxRowContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.checkbox}>
          {selected && <View style={styles.checkboxValue} />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const checkboxValues = [
  {
    id: '1',
    title: 'Eins',
  },
  {
    id: '2',
    title: 'Zwei',
  },
  {
    id: '3',
    title: 'Drei',
  },
  {
    id: '4',
    title: 'Vier',
  },
  {
    id: '5',
    title: 'Funf',
  },
];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Formik
                initialValues={{selected: ''}}
                onSubmit={(values) => console.log(values)}>
                {({values, setFieldValue}) => (
                  <View>
                    {checkboxValues.map((v) => {
                      return (
                        <CheckboxRow
                          title={v.title}
                          value={v.id}
                          selected={values.selected === v.id}
                          onPress={() => {
                            setFieldValue('selected', v.id);
                          }}
                        />
                      );
                    })}
                  </View>
                )}
              </Formik>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    marginEnd: 8,
  },
  checkboxRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginHorizontal: 4,
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  checkbox: {
    height: 24,
    width: 24,
    borderWidth: 1,
    padding: 2,
  },
  checkboxValue: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});

export default App;
