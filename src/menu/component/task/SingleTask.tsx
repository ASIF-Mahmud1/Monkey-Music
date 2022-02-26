import React,{Fragment} from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export type Props = {

    title?: string;
    status?:string
};

const SingleTask: React.FC<Props> = ({
    title = "",
    status=""
}) => {

    return (
      <Fragment>
          <View style={{display:'flex', flexDirection:'row'}}>
          <Text>{title} {status} </Text>
          <TouchableOpacity>
              <Text>Update Status</Text>
          </TouchableOpacity>
          </View>
        
      </Fragment>

    );
};

const styles = StyleSheet.create({
    container: {

    },

});

export default SingleTask;