import React, { useState } from "react";
import Header from "./components/Header/Header.jsx";
import {CORE_CONCEPTS} from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {

  const [ selectedTopic, setSelectedTopic ] = useState('please click a button');
    function HandlSelect(adnan) {
      setSelectedTopic(adnan);
        console.log(adnan);
    }
  const [ pindo, setPindo ] = useState('salam adnan ')
    function update (){
      setPindo("adnan")
    }


  return (
    <div>
      <Header/>
      <div>
        <h1>{pindo} </h1>
        <button onClick={update}>ok</button>
      </div>
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          <CoreConcept      
            Title={CORE_CONCEPTS[0].Title}
            Description={CORE_CONCEPTS[0].Description}
            img={CORE_CONCEPTS[0].img}
            />
          <CoreConcept      
            Title={CORE_CONCEPTS[1].Title}
            Description={CORE_CONCEPTS[1].Description}
            img={CORE_CONCEPTS[1].img}
            />
          <CoreConcept      
            Title={CORE_CONCEPTS[2].Title}
            Description={CORE_CONCEPTS[2].Description}
            img={CORE_CONCEPTS[2].img}
            />
          <CoreConcept {...CORE_CONCEPTS[3]}
            />
        </ul>
        </section>
        <section id="examples">
          <h2> Examples </h2>
          <menu>
          <TabButton onSelect={() => HandlSelect('Components')} >Components</TabButton>
          <TabButton onSelect={() => HandlSelect('JSX')}>JSX</TabButton>
          <TabButton onSelect={() => HandlSelect('Props')}>Props</TabButton>
          <TabButton onSelect={() => HandlSelect('State')}>State</TabButton>
          </menu> 
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

//te9dar dir hta had tari9a 
// function Saadia ({Title, Description, img }){
//   return(
//     <li>
//       <img src={img} alt={Title} ></img>
//       <h3>{Title}</h3>
//       <p>{Description}</p>
//     </li>

//   );
// }

export default App;