import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

type CurrencyButtonProp = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyButton = ({name, flag}: CurrencyButtonProp) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{flag}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default CurrencyButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  flag: {
    fontSize: 24,
    color: 'white',
    marginBottom: 4,
  },
  name: {
    fontSize: 10,
    color: '#2d3436',
  },
});
