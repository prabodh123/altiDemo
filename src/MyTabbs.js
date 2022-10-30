import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Feeds from './Feeds';
import Rewards from './Rewards';
import DataProvider from './DataProvider';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <DataProvider>
        <Tab.Navigator>
          <Tab.Screen
            name="Feeds"
            options={{tabBarLabel: 'Feeds'}}
            component={Feeds}
          />
          <Tab.Screen
            name="Rewards"
            options={{tabBarLabel: 'My Rewards'}}
            component={Rewards}
          />
        </Tab.Navigator>
      </DataProvider>
    </NavigationContainer>
  );
}

export default MyTabs;
