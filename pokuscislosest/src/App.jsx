import {Mynavbar} from "./komponenty/Mynavbar.jsx";
import {Card} from "./komponenty/Mycards.jsx";
import {Cardinfo} from "./komponenty/Cardinfo.jsx";

function App() {
  return (
      <>
          <div className={"cara"}>
              <Mynavbar emojik={"🐧"} Courses={"Courses"} Speakers={"Speakers"} Location={"Location"}/>

          </div>
          <Card newe = {"New"} />
      </>

  )
}

export default App
