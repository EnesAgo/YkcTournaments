import React from "react";
import '../styles/styles.css'
function Stats() {
    return(
        <section className="stats">
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
                    <div className="points">
                        <h3>P</h3>
                    </div>
                </li>
                <li>
                    <div className="team">
                        <h3>1 Voska Sport</h3>
                    </div>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>0</h3>
                    </div>
                    <div>
                        <h3>0</h3>
                    </div>
                    <div className="points">
                        <h3>3</h3>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Stats;