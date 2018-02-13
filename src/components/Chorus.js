import React, { Component } from 'react';
import { View, Text, Easing, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { rightMenuClick } from '../actions';
import Slideshow from '../components/common/Slideshow';

class Chorus extends Component {

  render(){
    return (
      <View style={{justifyContent:'center', alignItems:'center', flex :1}}>
        <Text>Chorus</Text>
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
})(Chorus);
