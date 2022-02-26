import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';

export type Props = {

    taskList?: [string];
};

const TaskList: React.FC<Props> = ({

    taskList = []
}) => {

    return (
        <ScrollView>
            {
                taskList.map((item) => {
                    return <Text key={item}>{item}</Text>
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