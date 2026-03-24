import { useState } from "react";
import TabButtons from './TabButtons.jsx'
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
export default function Examples(){
    const [selectedtopic, setselectedtopic] = useState()
    
    function handleselect(selectedButton){
        setselectedtopic(selectedButton);
        // console.log(selectedtopic);
    }
    return(
                <Section title="Examples" id='examples'>
                  <menu>
                    <TabButtons iselected={selectedtopic === 'components'} onselect = {() => handleselect('components')}>Componenets</TabButtons>
                    <TabButtons iselected={selectedtopic === 'Jsx'} onselect = {() => handleselect('jsx')}>Jsx</TabButtons>
                    <TabButtons iselected={selectedtopic === 'Props'} onselect = {() => handleselect('props')}>Props</TabButtons>
                    <TabButtons iselected={selectedtopic === 'State'} onselect = {() => handleselect('state')}>State</TabButtons>
                  </menu>
                  {!selectedtopic ? <p>please select a topic. </p> : null}
                  {selectedtopic ? (
                        <div>
                    <h3>{EXAMPLES[selectedtopic].title}</h3>
                    <p>{EXAMPLES[selectedtopic].description}</p>
                    <pre>
                      <code>
                        {EXAMPLES[selectedtopic].code}
                      </code>
                    </pre>
                  </div>
                  ) :null}
                </Section>
    )
}