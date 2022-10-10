import {
    Alert,
    FlatList,
    Keyboard,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
  } from 'react-native';
  import React, { useState } from 'react';
 
  import AddTodo from './components/addTodo';
  import Header from './components/header';
  import TodoItem from './components/todoItem';

  
  export default function App() {
    const [todos, setTodos] = useState([
      { id: 1, text: 'Peter Parker' },
      { id: 2, text: '12/05' },
      { id: 3, text: 'peter12@gmail.com' },
      { id: 4, text: 'Lily Colins' },
      { id: 5, text: '20/12' },
      { id: 6, text: 'lily@gmail.com' },
      { id: 7, text: 'Anthony Bridgerton' },
      { id: 8, text: '07/01' },
      { id: 9, text: 'anthony_bridgerton@gmail.com' },
    ]);

    const pressHandler = id => {
      setTodos(prevTodos => {
        return prevTodos.filter(todo => todo.id !== id);
      });
    };
  
    const submitHandler = text => {
      if (text.length > 3) {
        setTodos(prevTodos => {
          return [...prevTodos, { text, id: todos.length + 1 }];
        });
      } else {
        Alert.alert(
          'Deu ruim!',
          'As tarefas precisam ter no mínimo 3 caracteres.',
          [{ text: 'Entendi', onPress: () => console.log('Alerta fechado.') }]
        );
      }
    };
  
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          console.log('Saí teclado!');
        }}
      >
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler} />
            <View style={styles.list}>
              <FlatList
                data={todos}
                keyExtractor={todo => todo.id}
                renderItem={({ item }) => (
                  <TodoItem item={item} onPress={pressHandler} />
                )}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
      flex: 1,
      padding: 40,
    },
    list: { flex: 1, marginTop: 20 },
  });
        