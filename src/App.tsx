import 'react-native-gesture-handler';
import { Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { StacNavigator } from './presentation/routes/StackNavigator';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StacNavigator/> */}
      <SideMenuNavigator/>
    </NavigationContainer>
  )
}
