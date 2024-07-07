import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [isVie, setIsVie] = useState(false);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          fontSize: 32,
          fontFamily: isVie ? 'Roboto-Bold' : 'Poppins-Bold',
        }}>
        Lập trình
      </Text>
      <Button onPress={() => setIsVie(!isVie)} title="Change" />
    </View>
  );
};

export default App;
