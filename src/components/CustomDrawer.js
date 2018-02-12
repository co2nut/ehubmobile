import React, { Component } from 'react';
import { View, Text, Easing, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Drawer from 'react-native-drawer-menu';
import { rightMenuClick } from '../actions';

class CustomDrawer extends Component {

  // componentDidMount(){
  //   if(this.drawerRef && this.props.drawerPush){
  //     // console.log('drawer found');
  //     this.drawerRef.openDrawer();
  //     console.log('open', this.props.drawerPush);
  //   }else{
  //     console.log('close', this.props.drawerPush);
  //     // console.log('drawer not found');
  //   }
  // }
  // //
  // componentWillUnmount(){
  //   console.log('willUnmount', this.props.drawerPush);
  //   return true;
  // }
  // componentWillMount(){
  //   if(this.drawerRef && !this.props.drawerPush){
  //     // console.log('drawer found');
  //     this.drawerRef.closeDrawer();
  //     // console.log('close', this.props.drawerPush);
  //   }
  //   console.log('willMount', this.props.drawerPush, this.drawerRef);
  // }
  //
  // shouldComponentUpdate(){
  //   console.log('shouldUpdate', this.props.drawerPush);
  // }
  // // componentWillUpdate(){
  // //   console.log('willUpdate');
  // // }
  // // componentDidUpdate(){
  // //   // if(this.props.drawerPush){
  // //   //   this.drawerRef.openDrawer();
  // //   // }
  // //   console.log('didUpdate');
  // // }
  // componentWillReceiveProps(nextProps){
  //   console.log('receiveprops');
  // }
  //
  // drawerTrigger(){
  //   // console.log('clicked');
  //   this.props.rightMenuClick();
  // }
  // fromRouter(){
  //   console.log('from router');
  //   // this.props.rightMenuClick();
  // }

  render(){
      // var drawerContent = (<View style={styles.drawerContent}>
      //   <View style={styles.leftTop}/>
      //     <View style={styles.leftBottom}>
      //       <View><Text>Drawer Content</Text></View>
      //       {/*}<TouchableOpacity onPress={()=>this.onCloseDrawer.bind(this)()}>
      //         <Text>Close</Text>
      //       </TouchableOpacity>
      //       */}
      //     </View>
      //   </View>);
      // // customize drawer's style (Optional)
      // var customStyles = {
      //   drawer: {
      //     shadowColor: '#000',
      //     shadowOpacity: 0.4,
      //     shadowRadius: 10
      //   },
      //   mask: {}, // style of mask if it is enabled
      //   main: {} // style of main board
      // };
      return (
          <View>
            <Text>sup dude</Text>
          </View>
    );
  }

}

const styles = {
  drawerContent: {
    paddingTop:50,
    width:300,
    borderWidth:1,
    borderColor:'#000',
    backgroundColor:'#fff',
    height:300,
    marginTop:100
  }

}

const mapStateToProps  = ({ router }) => {
  const { drawerPush  } = router;
  return { drawerPush };
}

export default connect(mapStateToProps, {
rightMenuClick
})(CustomDrawer);

// export default Home;
