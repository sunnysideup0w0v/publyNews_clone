import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FaIcons from "react-native-vector-icons/FontAwesome";

import Home from "./pages/Home/Home";
import Curator from "./pages/Curator/Curator";
import MyPage from "./pages/MyPage/MyPage";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "홈") {
              iconName = "home";
            }
            if (route.name === "큐레이터") {
              iconName = "search";
            }
            if (route.name === "마이페이지") {
              iconName = "user-o";
            }
            return <FaIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="홈" component={Home} />
        <Tab.Screen name="큐레이터" component={Curator} />
        <Tab.Screen name="마이페이지" component={MyPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
