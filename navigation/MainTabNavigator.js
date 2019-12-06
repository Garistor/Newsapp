import HomeScreen from "../screens/HomeScreen";
import ArticleScreen from "../screens/ArticleScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

const SearchStackNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'News'
      }
    },
    ArticleDetail: { 
        screen: ArticleScreen
    }
  })

  export default createAppContainer(SearchStackNavigator);