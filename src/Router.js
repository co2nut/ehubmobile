import React, { Component } from 'react';
import { View, Text, Easing, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements';
import { rightMenuClick } from './actions';
import { Actions, Scene, Router, Stack, renderRightButton } from 'react-native-router-flux';
import Drawer from 'react-native-drawer-menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './components/Home';
import RomaneeHauz from './components/RomaneeHauz';
import TheBoard from './components/TheBoard';
import Chorus from './components/Chorus';
import ContactUs from './components/ContactUs';

class RouterComponent extends Component {

  componentDidUpdate(){
    if(this.props.drawerPush){
      this.drawerRef.openDrawer();
    }
  }

  drawerTrigger(){
    this.props.rightMenuClick();
  }

  renderPerson(person) {
    return (< ListItem
      style={{color:'#E8C88F', justifyContent:'center'}}
      key={person._id}
      title={person.name}
      onPress={() => this.menuPress(person.name)}
    />)
  }

  renderPersonView(person) {
    return (<TouchableOpacity key={person._id} onPress={() => this.menuPress(person.key)}>
      <View
      key={person._id}
      style={{paddingHorizontal:20,paddingVertical:20,justifyContent:'center', borderBottomWidth:1, borderColor:'#fff'}}
      ><Text style={{color:'#000',fontSize:20,alignSelf:'center'}}>{person.name}</Text>
      </View></TouchableOpacity>)
  }


  renderPeople = () => {
    people =  [{"_id": 1, "name": "Home", 'key':'home'},
               {"_id":2, "name": "Ramnee Hauz", 'key':'romaneeHauz'},
               {"_id":3, "name": "The Board", 'key':'theBoard'},
               {"_id":4, "name": "The Chorus", 'key':'chorus'},
               {"_id":5, "name": "Contact Us", 'key':'contactUs'}]
    return people.map((p) => (
      this.renderPersonView(p)
    ))
  }

  menuPress(comp){
    // return(

      switch(comp){
        case 'home':
        Actions.home()
        this.drawerRef.closeDrawer()
        return;
        case 'chorus':
        Actions.chorus()
        this.drawerRef.closeDrawer()
        return;
        case 'romaneeHauz':
        Actions.romaneeHauz()
        this.drawerRef.closeDrawer()
        return;
        case 'theBoard':
        Actions.theBoard()
        this.drawerRef.closeDrawer()
        return;
        case 'contactUs':
        Actions.contactUs()
        this.drawerRef.closeDrawer()
        return;
        default:
        Actions.home()
        return;
      }
    // )
    // .then(()=>{
    //   console.log('hi');
    // })
  }

  render(){
    var drawerContent = (<List containerStyle={styles.drawerContent}>{this.renderPeople()}</List>);
      var customStyles = {
        drawer: {
          shadowColor: '#000',
          shadowOpacity: 0.7,
          shadowRadius: 10
        },
        mask: {}, // style of mask if it is enabled
        main: {} // style of main board
      };
      return (
        <Drawer
          ref={(ref) => { this.drawerRef = ref; }}
          style={styles.container}
          drawerWidth={300}
          drawerContent={drawerContent}
          type={Drawer.types.Overlay}
          customStyles={{drawer: styles.drawer}}
          drawerPosition={Drawer.positions.Left}
          // onDrawerOpen={() => {console.log('Drawer is opened');}}
          onDrawerClose={this.drawerTrigger.bind(this)}
          easingFunc={Easing.ease}
          >
          <Router sceneStyle={styles.scenes}>
            <Scene key="root"
              renderRightButton={()=>
                <Icon
                  name="share-alt"
                  size={25}
                  color="#fff"
                  style={{paddingRight:10, marginBottom:15}}
                  onPress={()=>{ console.log('clicked'); }}
                />
              }
              renderLeftButton={()=>
                <Icon
                  name="bars"
                  size={25}
                  color="#fff"
                  style={{paddingLeft:10, marginBottom:15}}
                  onPress={()=>{ this.drawerTrigger() }}
                />
              }
            >
              <Scene navigationBarStyle={{'backgroundColor':'#040004'}} key="home" component={Home} title="Home" rightTitle="right" backTitle="" />
              <Scene navigationBarStyle={{'backgroundColor':'#000'}}  key="romaneeHauz" component={RomaneeHauz} title="Romanee Hauz" backTitle="" />
              <Scene navigationBarStyle={{'backgroundColor':'#000'}}  key="theBoard" component={TheBoard} title="The Board" backTitle="" />
              <Scene navigationBarStyle={{'backgroundColor':'#000'}}  key="chorus" component={Chorus} title="Chorus" backTitle="" />
              <Scene navigationBarStyle={{'backgroundColor':'#000'}}  key="contactUs" component={ContactUs} title="Contact Us" backTitle="" />
            </Scene>
          </Router>
        </Drawer>

      );
  }
}

const styles = {
  scenes: {
    flex:1,
    backgroundColor: '#fff',
  },
  drawerContent: {
    backgroundColor: '#FFF1A8',
    // paddingTop:50,
    width:300,
    borderWidth:1,
    borderColor:'#000',
    height:1000,
    // marginTop:20

  },
  drawer: {

  },
  content: {

  },
  leftTop: {

  },
  leftBottom: {

  },

}

const mapStateToProps  = ({ router }) => {
  const { drawerPush  } = router;
  return { drawerPush };
}

export default connect(mapStateToProps, {
  rightMenuClick
})(RouterComponent);
