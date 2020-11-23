import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps177749Navigator from '../features/Maps177749/navigator';
import Additem177748Navigator from '../features/Additem177748/navigator';
import Maps177744Navigator from '../features/Maps177744/navigator';
import UserProfile177740Navigator from '../features/UserProfile177740/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps177749: { screen: Maps177749Navigator },
Additem177748: { screen: Additem177748Navigator },
Maps177744: { screen: Maps177744Navigator },
UserProfile177740: { screen: UserProfile177740Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
