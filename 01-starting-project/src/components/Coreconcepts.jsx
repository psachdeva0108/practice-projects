import Coreconcept from "./Coreconcept.jsx"
import { CORE_CONCEPTS } from "../data.js"
export default function Coreconcepts(){
    return(
         <section id="core-concepts">
                  <h2>Core concepts</h2>
                  <ul>
                   {CORE_CONCEPTS.map((conceptItem) => (
                    <Coreconcept key={conceptItem.title}
                    {...conceptItem}/>))}
                  </ul>
                </section>
    )
}