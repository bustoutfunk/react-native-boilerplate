import { Navigator, StatusBar, StyleSheet } from 'react-native';

const NAV_BAR_HEIGHT = 44;
const STATUS_BAR_HEIGHT = 20;
const NAV_HEIGHT = NAV_BAR_HEIGHT + STATUS_BAR_HEIGHT;

const styles = {
  Global: {
    view: {
      flex: 1, 
      marginTop: NAV_HEIGHT,
      padding: 5,
      justifyContent: 'flex-start', 
      alignItems: 'center',
      alignSelf: 'stretch'
    }
  },

  SideMenu: {
    view: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: STATUS_BAR_HEIGHT,
    },
    item: {
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
    }
  },

  WellData: {
    segmentedButton: {
      padding: 5,
      margin: 10,
      justifyContent: 'center',
      alignSelf: 'stretch'
    }
  }
}

export default styles
