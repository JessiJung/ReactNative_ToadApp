import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screen
import MainPage from "../pages/MainPage";
import CategoryPage from "../pages/CategoryPage";
import SellPage from "../pages/SellPage";
import ChatPage from "../pages/ChatPage";
import SplashPage from "../pages/SplashPage";

// SVGs
import HomeImage from "../assets/Icons/Icon_Home.svg";
import CategoryImage from "../assets/Icons/Icon_Category.svg";
import ChatImage from "../assets/Icons/Icon_Chat.svg";
import AccountImage from "../assets/Icons/Icon_Account.svg";

// To render Svg Icon Files
const RenderHomeSVG = (props) => {
  return <HomeImage style={{ stroke: props.color, marginTop: 6.5 }} />;
};

const RenderCategorySVG = (props) => {
  return <CategoryImage style={{ stroke: props.color, marginTop: 6.5 }} />;
};

const RenderChatSVG = (props) => {
  return <ChatImage style={{ stroke: props.color, marginTop: 6.5 }} />;
};

const RenderAccountSVG = (props) => {
  return <AccountImage style={{ stroke: props.color, marginTop: 6.5 }} />;
};

// const RenderHomeSVG = (props) => {
//   return <HomeImage style={{ stroke: props.color, marginTop: 6.5 }} />;
// };
// const RenderHomeSVG = (props) => {
//   return <HomeImage style={{ stroke: props.color, marginTop: 6.5 }} />;
// };

const Tab = createBottomTabNavigator();

// const TabBarComponent = (props) => (<BottomTabBar {...props} />);

//Customize Sell button
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      ...styles.Shadow,
    }}
    //to sellpage
    onPress={onPress}
  >
    <View
      style={{
        width: 25,
        height: 25,
        borderRadius: 35,
        // backgroundColor: 'black'
      }}
    >
      {children}
      <Text
        style={{
          color: "#000000",
          fontSize: 12,
          top: 48,
        }}
      >
        {" "}
        Sell{" "}
      </Text>
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      //initialRouteName='ExerciseScreensStack'
      //initialRouteName='HomeScreen'
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#D9D9D9",
          borderRadius: 8,
          height: 78,

          //Shadow effect
          // ,
          // ...styles.Shadow
        },

        // TabBarComponent: props => {
        //     return (
        //         <View style={{
        //             position: 'absolute',
        //             left: 0,
        //             right: 0,
        //             bottom: 0,
        //         }}>
        //             <TabBarComponent {...props} />
        //         </View>
        //     )

        // },

        // tabBarBackground: () => {
        //     <View>
        //         <Image source={require('../assets/Icons/Icon_TabBackground.png')} />
        //     </View>
        // },

        // tabBarBackground: {
        //     ImageBackground: require('../assets/Icons/Icon_TabBackground.png')
        // },
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <ImageBackground
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  top: -7,
                }}
              >
                <RenderHomeSVG color={focused ? "#613EEA" : "#000000"} />
              </ImageBackground>
              <Text
                style={{ color: focused ? "#613EEA" : "#000000", fontSize: 12 }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Category"
        component={CategoryPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
                left: -15,
              }}
            >
              <ImageBackground
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  top: -10,
                }}
              >
                <RenderCategorySVG color={focused ? "#613EEA" : "#000000"} />
              </ImageBackground>
              <Text
                style={{ color: focused ? "#613EEA" : "#000000", fontSize: 12 }}
              >
                Category
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Sell"
        component={SellPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/Icons/Icon_Sell.png")}
                resizeMode="contain"
                style={{
                  width: 60,
                  height: 60,
                }}
              />
              {/* <Text style={{color: focused ? '#613EEA' : '#000000', fontSize: 12}}> 123 </Text> */}
            </View>
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,

          // custom sellButton
          //     <Image
          //         source={require('../assets/Icons/Icon_Sell.png')}
          //         resizeMode="contain"
          //         style={{
          //             width: 60,
          //             height: 60,
          //             // tintColor: focused ? '#B3261E' : '#000000'   //red and black
          //         }}
          //     />
          // )
          // ,
          // tabBarButton: (props) => (
          //     <CustomTabBarButton {...props} />
          // )

          // basic sellButton
          // tabBarIcon: ({focused}) => (
          //     <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
          //         <Image
          //             source={require('../assets/Icons/Icon_Sell.png')}
          //             resizeMode = 'contain'
          //             style={{
          //                 width: 25,
          //                 height: 25,
          //                 tintColor: focused ? '#613EEA' : '#000000'
          //             }}
          //             />
          //             <Text style={{color: focused ? '#613EEA' : '#000000', fontSize: 12}}>
          //                 Sell
          //             </Text>
          //     </View>
          // ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={ChatPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
                right: -15,
              }}
            >
              <ImageBackground
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  top: -10,
                }}
              >
                <RenderChatSVG color={focused ? "#613EEA" : "#000000"} />
              </ImageBackground>
              <Text
                style={{ color: focused ? "#613EEA" : "#000000", fontSize: 12 }}
              >
                Chat
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Splash"
        component={SplashPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <ImageBackground
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  top: -10,
                }}
              >
                <RenderAccountSVG color={focused ? "#613EEA" : "#000000"} />
              </ImageBackground>

              <Text
                style={{ color: focused ? "#613EEA" : "#000000", fontSize: 12 }}
              >
                Account
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  Shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  IconButton: {},
});

export default Tabs;
