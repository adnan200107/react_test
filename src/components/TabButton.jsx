export default function TabButton({children, onSelect}){

    return <li>
         <button onClick={onSelect}>{children}</button>
          </li> ;
}





// export default function TabButton({props.children}){
//     return <li>
//         <button onClick={click}>
//             {props.children}
//         </button>
//     </li>;
// }