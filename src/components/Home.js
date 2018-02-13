import React, { Component } from 'react';
import { View, Text, Easing, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { rightMenuClick } from '../actions';
import Slideshow from '../components/common/Slideshow';

class Home extends Component {

  constructor(props) {
     super(props);

     this.state = {
       position: 0,
       interval: null,
       dataSource: [
         {
           // title: 'Title 1',
           // caption: 'Caption 1',
           url: require('../assets/images/board1.jpg'),
         }, {
           // title: 'Title 2',
           // caption: 'Caption 2',
           url: require('../assets/images/board2.jpg'),
         }, {
           // title: 'Title 3',
           // caption: 'Caption 3',
           url: require('../assets/images/board3.jpg'),
         }
       ],
     };
   }


   componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === (this.state.dataSource.length-1) ? 0 : this.state.position + 1
        });
        console.log(this.state.position);
      }, 2000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render(){
    return (

      <View style={{justifyContent:'flex-start', alignItems:'center', flex :1}}>
      <Slideshow
         dataSource={this.state.dataSource}
         position={this.state.position}
         onPositionChanged={position => this.setState({ position })}
         arrowLeft={<View></View>}
         arrowRight={<View></View>}
      />

      {/*}<Slideshow
     dataSource={[
       { url: require('../assets/images/board1.jpg') },
       { url: require('../assets/images/board2.jpg') },
       { url: require('../assets/images/board3.jpg') }
   ]}/>*/}
        <Text>Home Content</Text>
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
})(Home);

// export default Home;
