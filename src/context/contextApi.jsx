import React ,{createContext, useState, useEffect} from "react";
import {fetchData} from "../utils/api"

export const Context = createContext();
export const AppContext = (props) =>{
    const [loading,setLoading] = useState(false);
    const [searchResult,setResult] = useState([]);
    const [Categories,setCategories] = useState("New");
    const [mobileMenu,setMenu] = useState(false);

    useEffect(()=>{
        fetchSelectedData(Categories)
    }, [Categories]);

    const fetchSelectedData = (query) =>{
   setLoading(true);
   fetchData(`search/?q=${query}`)
   .then((res)=>{
    //console.log(res.contents);
    setResult(res.contents);
    setLoading(false);

});
    };

    return (
        <Context.Provider value={{
       loading,setLoading,searchResult,mobileMenu,setMenu,Categories,setCategories
        }}>
        {props.children}       
        </Context.Provider>
    )
}
export default AppContext