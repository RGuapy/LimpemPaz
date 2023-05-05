import './style/App.css';
import TaskCreator from "./TaskCreator"
import TaskShower from "./TaskShower"
import CustomHeader from "./CustomHeader"
import CustomAside from "./CustomAside"
import { useState } from "react"

function Home() {

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

export default Home;
