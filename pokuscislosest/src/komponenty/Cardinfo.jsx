import {Card} from "./Mycards.jsx";


export function Cardinfo({name, speaker, location, date, isnew,num}){
    function isnew(){
        if (isnew) {
           return <span className={"new"}>New</span>
        }
    }


    return (
        <>



                <div className={"div"}>
                    <div className={"card"}>
                        <div className={"start"}>
                            <span className={"new"}>{name}</span>
                            {isnew()}

                        </div>

                        <span className={""}></span>
                        <p className={"boldie"}>law{num}</p>
                        <p className={"location"}>location: {location}</p>
                        <p className={"location"}>Date: {date}</p>
                        <button className={"enrol"}>Enroll</button>
                        <p className={"spek"}>🧌 Speaker: {speaker}</p>

                    </div>


                </div>

        </>
    );
}