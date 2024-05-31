import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { todoListType } from "../@types/types";
import { useEffect, useState } from "react";

export default function TodoList({ todoValues, setTodosValue }: todoListType) {

  const [numbers, setNumbers] = useState({
    done: 0,
    created: 0
  })

  useEffect(() => {
    function contNum() {
      const numCreated = todoValues.length
      const numDone = todoValues.filter(item => item.status === true).length

      setNumbers({
        created: numCreated,
        done: numDone,
      })
    }

    contNum()
  }, [todoValues])


  function handleDeleteTodo(todoTrash: string) {
    return setTodosValue(prevTodos => {
      return prevTodos.filter(todo => {
        return todo.id !== todoTrash
      })
    })
  }

  function handleChangeTodoStatus(todoId: string) {
    return setTodosValue(prevTodos => {
      return prevTodos.map(item => {
        if (item.id === todoId) {
          return { ...item, status: !item.status }
        } else {
          return item
        }
      })
    })
  }

  return (
    <View style={styles.boxList}>
      <View style={styles.listCategory}>
        <View style={styles.typeCategory}>
          <Text style={[styles.typeText, { color: "#4EA8DE" }]}>Created</Text>
          <Text style={styles.numberCategory}>{numbers.created}</Text>
        </View>
        <View style={styles.typeCategory}>
          <Text style={[styles.typeText, { color: "#8284FA" }]}>Done</Text>
          <Text style={styles.numberCategory}>{numbers.done}</Text>
        </View>
      </View>
      <View>
        <FlatList
          data={todoValues}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemTodo}>
              <TouchableOpacity style={styles.outterRadio} onPress={() => handleChangeTodoStatus(item.id)}>
                { item.status ? <View style={styles.checked}>
                    <Image source={require('../assets/check.png')} />
                  </View> : <View />
                }
              </TouchableOpacity>
              <Text style={[styles.textItemTodo, item.status ? { textDecorationLine: "line-through", color: "#808080" } : {}]}>
                {item.text}
              </Text>
              <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
                <Image source={require('../assets/icon-trash.png')} />
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={() => (
            <View style={styles.listEmpty}>
              <View>
                <Image source={require('../assets/list-empty.png')} />
              </View>
              <View>
                <Text style={styles.tituloBoldEmpty}>
                  You don't have tasks registered yet
                </Text>
                <Text style={styles.tituloNormalEmpty}>
                  Create tasks and organize your to-do items
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  boxList: {
    marginTop: 32,
    gap: 20,
  },
  listCategory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  typeCategory: {
    flexDirection: 'row',
    gap: 8,
  },
  typeText: {
    fontSize: 14,
    fontWeight: "700",
  },
  numberCategory: {
    borderRadius: 999,
    backgroundColor: "#333",
    color: "#FFF",
    paddingHorizontal: 8,
  },
  listEmpty: {
    borderTopColor: "#333",
    borderTopWidth: 1,
    gap: 16,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 48,
  },
  itemTodo: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#262626',
    marginBottom: 8,
    //box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
  },
  textItemTodo: {
    color: "#F2F2F2",
    fontSize: 14,
    fontWeight: "400",
  },
  outterRadio: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#4ea8de',
  },
  tituloBoldEmpty: {
    color: "#808080",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700",
  },
  tituloNormalEmpty: {
    color: "#808080",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
  },
  checked:{
    backgroundColor: '#585ABD',
    borderRadius: 999,
  }
})