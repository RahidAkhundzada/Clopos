import * as React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

const Header = ({title, isHome, navigation}) => {
  return (
    <View style={{flexDirection: 'row', height: 50}}>
      {isHome /* <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={{flex: 1, justifyContent: 'center'}}>
          <Image
            style={{width: 30, height: 30, marginLeft: 5}}
            source={require('../Image/menu1.png')}
            resizeMode="contain"
          />
        </TouchableOpacity> */ ? null : (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: 25, height: 25, marginLeft: 5}}
            source={require('../Image/previous.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
      <View style={{flex: 1.5, height: 50, justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 22, textAlign: 'center'}}>
          {title}
        </Text>
      </View>
    </View>
  );
};
export default Header;
