export default function TabButtons({children, onselect, iselected}) {
    return (

        <li>
            <button className= {iselected? 'active' : undefined} onClick={onselect}>{children}</button>
        </li>
    );

}