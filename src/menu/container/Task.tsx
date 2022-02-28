import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput,NativeSyntheticEvent, TextInputChangeEventData,TouchableOpacity } from 'react-native';
import { FontAwesome ,Entypo } from '@expo/vector-icons';
import TaskList from '../component/task/TaskList';
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { addTasks} from '../features/taskSlice'
import {storeData, getData} from '../helper/helper'
type Task = {
  title: string
  status: string
  id: number
}
type User={
  email: string
  taskList: [Task]
}
const Tasks: React.FC = () => {
 
  const [newTask, addNewTask]= useState<Task>({title:'',status:'',id:0})

  const taskList =useAppSelector(state => state.tasks).tasks
  console.log("Mah task list ",taskList);
  

  const user= useAppSelector(state => state.user).user as unknown as User
 
  

  const dispatch = useAppDispatch()

  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>): (void) => {
    const value = e.nativeEvent.text;
    let singleTask: Task={title:value,status:"Open",id: 0}
    addNewTask(singleTask);
  }

  const handleAddTask = () =>{
     let addTask : Task
     addTask=newTask

     let newValue= {
      email: user.email,
      taskList:[ {...newTask, id:Date.now()}, ...taskList ]
    } as User

     getData('userTask',(value: [User] )=>{
       if(value!= null)
       {
          let result= value.filter((item)=> item.email!== user.email ) 
          result.push(newValue)
          console.log("Before store IF",result);
          
          storeData('userTask',result,()=>{})
       }
       else 
       {
        console.log("Before store else",[newValue]);
         storeData('userTask',[newValue],()=>{})
       }
      dispatch(addTasks({...newTask, id:Date.now()}))
     })

     addNewTask({title:'',status:'',id: Date.now()})

  }
  
 
  return (
    <View style={styles.container}>
        
        <View style={{flexDirection:'row'}}>         
            <TextInput placeholder='Add New Task' value={newTask.title}  onChange={onChange} style={[styles.input]} placeholderTextColor="white" />
            <TouchableOpacity onPress={handleAddTask} >
                <FontAwesome name="plus-circle" size={30} color="white"  />
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
    backgroundColor:'black'
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
    color:'white'


  },
});

export default Tasks;
