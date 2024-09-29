import React, {useEffect, useState} from "react";
import '../styles/styles.css'

import { collection, onSnapshot, addDoc } from "firebase/firestore";

import firebaseInnitData from "../firebaseInnit";

function Stats() {

    const [stats, setStats] = useState(false);

    const { db } = firebaseInnitData;

    // const colletionRef23_24 = collection(db, "stats");
    const colletionRef24_25 = collection(db, "stats2425");

    async function AddDoc(){
        try {
            const docRef = await addDoc(colletionRef24_25, {
                    teamName: "WARRIORS",
                    playedGames: 0,
                    wonGames: 0,
                    drewGames: 0,
                    lostGames: 0,
                    goals: 0,
                    points: 0

            });
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

            items.sort((a, b) => {
                return b.points - a.points || b.goals - a.goals;
            });

            setStats(items)
            console.log(items)
        });
    }

    useEffect(() => {
        GetDocs()
    }, [])


    return(
        <section className="stats">
            {/*<button onClick={() => {AddDoc()}}><h1>ADD DOC</h1></button>*/}

            <header>
                <h2>Stats</h2>
            </header>
            <ul>
                <li>
                    <div className="team">
                        <h3>Team</h3>
                    </div>
                    <div>
                        <h3>PG</h3>
                    </div>
                    <div>
                        <h3>W</h3>
                    </div>
                    <div>
                        <h3>D</h3>
                    </div>
                    <div>
                        <h3>L</h3>
                    </div>
                    <div>
                        <h3>G</h3>
                    </div>
                    <div className="points">
                        <h3>P</h3>
                    </div>
                </li>
                {
                    stats ?
                    stats.map((element, index) => (
                        <li key={index}>
                            <div className="team">
                                <h3>{index+1} {element.teamName}</h3>
                            </div>
                            <div>
                                <h3>{element.playedGames}</h3>
                            </div>
                            <div>
                                <h3>{element.wonGames}</h3>
                            </div>
                            <div>
                                <h3>{element.drewGames}</h3>
                            </div>
                            <div>
                                <h3>{element.lostGames}</h3>
                            </div>
                            <div>
                                <h3>{element.goals}</h3>
                            </div>
                            <div className="points">
                                <h3>{element.points}</h3>
                            </div>
                        </li>
                    )) :
                    <h2>loading...</h2>
                }

            </ul>
        </section>
    )
}

export default Stats;