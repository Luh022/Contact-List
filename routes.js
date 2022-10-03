import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import addTodo from "./components/addTodo";
import header from "./components/header";
import todoItem from "./components/todoItem"

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="addTodo" component={addTodo} />
        <AppStack.Screen name="header" component={header} />
        <AppStack.Screen name="todoItem" component={todoItem} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}