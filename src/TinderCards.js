import React, { useState } from "react";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_UY1200_CR94,0,630,1200_AL_.jpg",
        },
    ]);

    return (
        <div className="tinderCards">
            {people.map((person) => (
                <h1>{person.name}</h1>
            ))}
        </div>
    );
}

export default TinderCards;