import React, {useState} from 'react';
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class App extends React.Component{

  constructor(){
    super();
    this.state={
      date : new Date(),
      mode : 'date',
      show : false
    }
  }


  onChange = (selectedDate) => {
   // console.log(selectedDate.nativeEvent.timestamp);
    const currentDate = selectedDate.nativeEvent.timestamp || this.state.date;
    console.log("hi " + currentDate)
    this.setState({
      show : Platform.OS === 'ios',
      date : currentDate
    })
  };

  showMode = (currentMode) => {
    this.setState({
      show : true,
      mode : currentMode
    })
  };

  showDatepicker = () => {
    this.showMode('date');
  };

 showTimepicker = () => {
    this.showMode('time');
  };

render(){
  console.log(this.state.date)
  return (
    <View style={{flex:1,justifyContent : 'center'}}>
      <View>
        <Button onPress={()=>{this.showDatepicker();}} title="Show date picker!" />
      </View>
      <View style={{marginVertical : 10}}>
        <Button onPress={()=>{this.showTimepicker();}} title="Show time picker!" />
      </View>
      {this.state.show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={this.state.date}
          mode={this.state.mode}
          is24Hour={true}
          display="default"
          onChange={(date)=>{
            this.onChange(date)
            }}
        />
      )}
    </View>
  )
}
}