import React from 'react';
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
        <ScrollView>
            {
                taskList.map((item) => {
                    return<SingleTask title={item.title} status={ item.status}/>
                })
            }
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {

    },

});

export default TaskList;