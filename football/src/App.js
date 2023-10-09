import React, { useEffect } from "react";
import './styles/styles.css'
import Stats from "./Components/Stats";

import { collection, doc, getDocs } from "firebase/firestore";
import firebaseInnitData from "./firebaseInnit";
function App() {

    const { add, db } = firebaseInnitData;


    const citiesRef = collection(db, "test");

    async function getDDocs(){
        const querySnapshot = await getDocs(citiesRef);
        console.log(querySnapshot)

    }

    useEffect(() => {
        async function run(){
            await getDDocs();
        }
        run()
    }, [])


    return (
    <>
      <div className="title section">
        <h1>YKC FOOTBALL TOURNAMENT 2023/24</h1>
      </div>
      <div className="line"></div>
        <Stats />
    </>
  );
}

export default App;
