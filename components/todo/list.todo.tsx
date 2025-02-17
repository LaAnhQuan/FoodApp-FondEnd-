import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native"


const styles = StyleSheet.create({
    todo: {
        fontSize: 30,
        backgroundColor: "pink",
        marginBottom: 10,
        padding: 15
    },
})

interface IProps {
    todoList: ITodo[];
    deleteTodo: (v: number) => void;
}
const ListTodo = (props: IProps) => {

    const { todoList, deleteTodo } = props;
    console.log(todoList)

    return (
        <>
            <FlatList
                style={{
                    marginTop: 20,
                    borderColor: "red",
                    borderWidth: 1
                }}
                keyExtractor={item => item.id + ""}
                data={todoList}
                //object destructuring data.item
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => deleteTodo(item.id)}
                        >
                            <Text key={item.id}
                                style={styles.todo}

                            >
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    )

                }}
            />
        </>
    )
}

export default ListTodo