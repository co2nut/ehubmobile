import React, { Component } from 'react';
import { View, Text, Easing, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { rightMenuClick } from '../actions';

class RomaneeHauz extends Component {

  render(){
    return (
      <View style={{justifyContent:'center', alignItems:'center', flex :1}}>
        <Text>RomaneeHauz</Text>
      </View>
    );
  }

}

const styles = {

}

const mapStateToProps  = ({ router }) => {
  const { drawerPush  } = router;
  return { drawerPush };
}

export default connect(mapStateToProps, {
rightMenuClick
})(RomaneeHauz);
