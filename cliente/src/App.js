import './style/App.css';
import TaskCreator from "./TaskCreator"
import TaskShower from "./TaskShower"
import CustomHeader from "./CustomHeader"
import CustomAside from "./CustomAside"
import { useState } from "react"

function App() {
    const [display, setDisplay] = useState()
    return (
        <div id="principal">
          <CustomHeader />
          
          <main>
            <CustomAside />
            <TaskCreator />
            <TaskShower modificado={[display, setDisplay]} />
              
          </main>
        </div>
    );
}

export default App;


/*<card-fight
  key={101}
                titulo="teste"
                tipo="teste"
                vida={20}
                poder={20}
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXbDhlqmv-kTA9tBJUDpqyJlxgkyQuknQEIknmjgQkP6tqaSshHkbZJqE-J-kKxxtCCSw&usqp=CAU"

              ></card-fight>*/