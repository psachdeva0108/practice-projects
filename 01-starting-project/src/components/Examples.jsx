import { useState } from "react";
import TabButtons from './TabButtons.jsx'
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
export default function Examples() {
  const [selectedtopic, setselectedtopic] = useState()

  function handleselect(selectedButton) {
    setselectedtopic(selectedButton);
    // console.log(selectedtopic);
  }
  return (
    <Section title="Examples" id='examples'>
      <Tabs 
      ButtonsContainer = "menu"
      buttons={
        <>
        <div>
          <TabButtons isselected={selectedtopic === 'components'} onselect={() => handleselect('components')}>Componenets</TabButtons>
          <TabButtons isselected={selectedtopic === 'Jsx'} onselect={() => handleselect('jsx')}>Jsx</TabButtons>
          <TabButtons isselected={selectedtopic === 'Props'} onselect={() => handleselect('props')}>Props</TabButtons>
          <TabButtons isselected={selectedtopic === 'State'} onselect={() => handleselect('state')}>State</TabButtons>
        </div>
        </>
      }>
      </Tabs>

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
      ) : null}
    </Section>
  )
}