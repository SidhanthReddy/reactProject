import React,{createContext,useState,useContext}from "react";
const TypeContext = createContext();

export function TypeProvider({children}){
    const [note,setNote] = useState(false);
    const [timeTable,setTimeTable] = useState(false);
    const [diary,setDiary] = useState(false);
    const [home,setHome] = useState(true);
    const toggleNote = () =>{
        setNote(true);
        setDiary(false);
        setTimeTable(false);
        setHome(false);  
    };
    const toggleTimeTable = () =>{
        setNote(false);
        setDiary(false);
        setTimeTable(true);
        setHome(false);  
    };
    const toggleDiary = () =>{
        setNote(false);
        setDiary(true);
        setTimeTable(false); 
        setHome(false);       
    };
    const toggleHome = () =>{
        setHome(true);
        setNote(false);
        setTimeTable(false);
        setDiary(false);
    }
    return(
        <TypeContext.Provider value={{ note, timeTable, diary, home,toggleNote, toggleTimeTable, toggleDiary ,toggleHome}}>
            {children}
        </TypeContext.Provider>
        );
}
export function useTypeContext(){
    return useContext(TypeContext);
}