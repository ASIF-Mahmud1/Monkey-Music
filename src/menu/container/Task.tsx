import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput,NativeSyntheticEvent, TextInputChangeEventData,TouchableOpacity } from 'react-native';
import { FontAwesome ,Entypo } from '@expo/vector-icons';


const Tasks: React.FC = () => {
 
  const [taskList, setTasks]= useState <string[]>([])
  const [newTask, addNewTask]= useState('')

  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>): (void) => {
    const value = e.nativeEvent.text;
    addNewTask(value);
  }

  const handleAddTask = () =>{
    let allTasks : string[] = [];
     allTasks= [...taskList]
     allTasks.unshift(newTask)
     setTasks(allTasks)
     addNewTask('')

  }
 
  return (
    <View style={styles.container}>
       <TextInput placeholder='Add New Task' value={newTask}  onChange={onChange} />
       <TouchableOpacity onPress={handleAddTask} >
           <FontAwesome name="plus-circle" size={30} color="black"  />
      </TouchableOpacity>
       {
           taskList.map((item)=>{
               return <Text>{item}</Text>
           })
       }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16
  }
});

export default Tasks;

/*

const [goals, setGoals] = React.useState<
    Array<{
        key: string,
        value: string
    }>
>([])

*/