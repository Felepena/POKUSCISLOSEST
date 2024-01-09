export function Mynavbar ({emojik, Courses,Speakers, Location} ){
    return(
        <div className={"nav"}>
            <p className={"logo"}>{emojik}</p>
            <p className={"bold"}>{Courses}</p>
            <p className={""}>{Speakers}</p>
            <p className={""}>{Location}</p>
        </div>
    );
}