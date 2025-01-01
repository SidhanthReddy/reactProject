import React from 'react';
import {useTypeContext} from '../context/TypeContext'
import NoteShow from './subComponents/NoteShow';
import DiaryShow from './subComponents/DiaryShow';
import TimeTableShow from './subComponents/TimeTableShow';
import HomeShow from './subComponents/HomeShow';
function MainContent() {
  const {note,timeTable,diary,home} = useTypeContext();
  var style;
  if(note){
    style = 'overflow-y-none';
  }
  else{
    style='2000px';
  }
  return (
    <div className= {`h-${style}`}>
      {note && <NoteShow />}
      {timeTable && <TimeTableShow />}  
      {diary && <DiaryShow />}  
      {home && <HomeShow />}
    </div>
  );
}

export default MainContent;
