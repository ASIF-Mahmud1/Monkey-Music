import React,{Fragment} from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import SingleTask from './SingleTask';

type Task = {
    title: string
    status: string
  }
export type Props = {

    taskList?: [Task];
};

const TaskList: React.FC<Props> = ({

    taskList = []
}) => {

    return (
        <Fragment>
            <Text style={styles.title}>My Tasks</Text>
            <ScrollView style={{ marginVertical:20 }}>
                {
                    taskList.map((item) => {
                        return <SingleTask title={item.title} status={item.status} />
                    })
                }
            </ScrollView>
   
        </Fragment>

    );
};

const styles = StyleSheet.create({
    title: {
      marginTop:30,
      fontSize:20
    },

});

export default TaskList;