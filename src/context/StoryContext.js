// import React from "react";
// import { createContext, useContext, useEffect, useState } from "react";
// import { auth, db } from "../firebase";
// import { setDoc, doc, collection, getDocs } from "firebase/firestore";
// import { createUserWithEmailAndPassword } from "firebase/auth";

// const StoryContext = createContext();

// export function StoryContextProvider({ children }) {
//     const[article, setArticle] = useState([]);
//     const articleCollectionRef = collection(db, "articles");

//     // useEffect(()=>{
//     //     const getArticles = async () =>{
//     //         const data = await getDocs(articleCollectionRef)
//     //         console.log(data);
//     //         setArticle(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
//     //     } 
//     //     getArticles();
//     // },[]) 

//     function setStory (){
//         setDoc(doc(articleCollectionRef ))
//     }
//   return <StoryContext.Provider value={{}}>{children}</StoryContext.Provider>;
// }

// export default StoryContext;
