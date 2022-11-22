import React, { useContext, useReducer ,useEffect} from "react";
import reducer from "./reducer"
let API ="http://localhost:7000/?"
const initialState={
    isLoading :true,
    query:"",
    hits:[],
}
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [state,dispatch]=useReducer(reducer,initialState);
   
    const fetchApiData = async (url) => {
        dispatch({type:"SET_LOADING"})
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        dispatch({type:"GET_STORIES",
    payload:{
        hits:data
        
    }
    })
      } catch (error) {
        console.log(error);
      }
    };
   
    const searchPost=(searchQuery)=>{
        dispatch({type:"SEARCH_QUERY",payload:searchQuery})
    };
   
  
    useEffect(() => {
      fetchApiData(`${API}q=${state.query}`);
    }, [state.query]);
  return <AppContext.Provider value={{...state,searchPost}}>{children}</AppContext.Provider>;
};
const useGlobleContext=()=>
{
    return useContext(AppContext);
}
export { AppContext, AppProvider,useGlobleContext };
