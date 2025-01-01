import React,{createContext,useContext,useState} from 'react'
const LoginContext = createContext();

export function LoginProvider({children}){
    const [login,setLogin] = useState(false);
    const [email,setEmail] = useState('');
    const Logger = () =>{
        setLogin(prev =>!prev);
    };
    const Emailer = (email) => {
        setEmail(email);
    };
    return(
        <LoginContext.Provider value = {{login,email,Logger,Emailer}}>
            {children}
        </LoginContext.Provider>
    )
}
export function useLoginContext(){
    return useContext(LoginContext);
}