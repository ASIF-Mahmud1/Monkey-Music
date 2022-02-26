import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput,NativeSyntheticEvent, TextInputChangeEventData,TouchableOpacity } from 'react-native';
import { FontAwesome ,Entypo } from '@expo/vector-icons';
import TaskList from '../component/task/TaskList';

type Task = {
  title: string
  status: string
}
const Tasks: React.FC = () => {
 
  const [taskList, setTasks]= useState <Task[]>([])
  const [newTask, addNewTask]= useState<Task>({title:'',status:''})

  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>): (void) => {
    const value = e.nativeEvent.text;
    let singleTask: Task={title:value,status:"Open"}
    addNewTask(singleTask);
  }

  const handleAddTask = () =>{
    let allTasks : Task[] = [];
     allTasks= [...taskList]
     let addTask : Task
     addTask=newTask
     allTasks.unshift(newTask)
     setTasks(allTasks)
     addNewTask({title:'',status:''})

  }
 
  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row'}}>  
            <TextInput placeholder='Add New Task' value={newTask.title}  onChange={onChange} style={[styles.input]} />
            <TouchableOpacity onPress={handleAddTask} >
                <FontAwesome name="plus-circle" size={30} color="black"  />
            </TouchableOpacity>
      </View>
  
        <TaskList taskList={taskList as [Task]} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop:60,
    paddingHorizontal:40,
    backgroundColor:'white'
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16
  },
  input:{
    borderColor:'#ffa600',
    borderWidth:2,
    borderRadius:20,
    paddingHorizontal:15,
    fontSize:20,
    flexGrow:1,
    marginRight:10,


  },
});

export default Tasks;
