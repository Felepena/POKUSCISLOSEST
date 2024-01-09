
import { Cardinfo } from "./Cardinfo.jsx";

let Cards = [

        {
            "name": "Course 1",
            "speaker": "Dr. Smith",
            "location": "Los Angeles",
            "date": "2023-03-21",
            "isNew": true
        },
        {
            "name": "Course 2",
            "speaker": "Prof. Johnson",
            "location": "Los Angeles",
            "date": "2023-08-26",
            "isNew": true
        },
        {
            "name": "Course 3",
            "speaker": "Dr. Brown",
            "location": "Chicago",
            "date": "2023-08-23",
            "isNew": true
        },
        {
            "name": "Course 4",
            "speaker": "Dr. Williams",
            "location": "New York",
            "date": "2023-11-03",
            "isNew": true
        },
        {
            "name": "Course 5",
            "speaker": "Prof. Davis",
            "location": "Houston",
            "date": "2023-11-05",
            "isNew": false
        },
        {
            "name": "Course 6",
            "speaker": "Prof. Davis",
            "location": "New York",
            "date": "2023-11-10",
            "isNew": true
        },
        {
            "name": "Course 7",
            "speaker": "Dr. Williams",
            "location": "New York",
            "date": "2023-09-22",
            "isNew": true
        },

];



export function Card() {
    return (
        <div className={"tvojamatka"}>
            {Cards.map((card, index) => (
                <Cardinfo
                    key={index}
                    num={101 + index}
                    name={card.name}
                    isNew={card.isNew}
                    location={card.location}
                    speaker={card.speaker}
                    date={card.date}

                />
            ))}
        </div>
    );
}
