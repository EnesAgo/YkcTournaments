import React, {useEffect, useState} from "react";
import '../styles/styles.css'

import { collection, onSnapshot, addDoc, setDoc, doc } from "firebase/firestore";

import firebaseInnitData from "../firebaseInnit";

function Matches() {

    const [matches, setMatches] = useState(false);

    const { db } = firebaseInnitData;

    // const colletionRef23_24 = collection(db, "matches");
    const colletionRef24_25 = collection(db, "matches2425");

    async function AddDoc(){
        try {

            const docID = "DEMIR HISAR vs ILLYRINS";

            const docRef = await setDoc(doc(colletionRef24_25, docID), {
                teamOneName: "DEMIR HISAR",
                teamTwoName: "ILLYRINS",
                teamOneScore: 0,
                teamTwoScore: 0,
                teamOneWon: false,
                teamTwoWon: false,
                date: "08.10.2024",
                orderNum: 6,
                played: false,
                day: "Tuesday"

            });

            // const docRef = await addDoc(colletionRef24_25, {
            //     teamOneName: "FC VOSKA",
            //     teamTwoName: "PROFAT",
            //     teamOneScore: 0,
            //     teamTwoScore: 0,
            //     teamOneWon: false,
            //     teamTwoWon: false,
            //     date: "24.10.2023",
            //     orderNum: 11,
            //     played: false,
            //     day: "Tuesday"
            //
            // });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    async function GetDocs(){

        const unsub = onSnapshot(colletionRef24_25, (querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push({docId: doc.id, ...doc.data()});
            });

            // items.sort((a, b) => {
            //     return parseInt(b.date.split(".")[0]) - parseInt(a.date.split(".")[0]);
            // });

            items.sort((a, b) => {
                return parseInt(b.orderNum) - parseInt(a.orderNum);
            });

            setMatches(items.reverse())
            console.log(items)
        });
    }

    useEffect(() => {
        GetDocs()
    }, [])


    return(
        <section className="matches">
            {/*<button onClick={() => {AddDoc()}}><h1>ADD DOC</h1></button>*/}

            <header>
                <h2>Matches</h2>
            </header>
            <ul>
                {
                    matches ?
                        matches.map((element, index) => (
                            <li key={index}>
                                <section className="teams">
                                    <div className={`team ${element.teamOneWon && "bold"}`}>
                                        <h4>{element.teamOneName}</h4> <h4>{element.played && element.teamOneScore}</h4>
                                    </div>
                                    <div className={`team ${element.teamTwoWon && "bold"}`}>
                                        <h4>{element.teamTwoName}</h4> <h4>{element.played && element.teamTwoScore}</h4>
                                    </div>
                                </section>
                                <section className="date">
                                    <h4>{element.date}</h4>
                                    <h4>({element.day && element.day})</h4>
                                </section>
                            </li>
                        )) :
                        <h2>loading...</h2>
                }

            </ul>
        </section>
    )
}

export default Matches;