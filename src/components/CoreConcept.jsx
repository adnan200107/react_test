import "./CoreConcept.css";

// export default function CoreConcept (props) {
//     return (
//       <li>
//         <img src={props.img} alt={props.Title} ></img>
//         <h3>{props.Title}</h3>
//         <p>{props.Description}</p>
//       </li>
//     );
//   }

  export default function CoreConcept ({Title, Description, img}) {
    return (
      <li>
        <img src={img} alt={Title} ></img>
        <h1>{Title}</h1>
        <p>{Description}</p>
      </li>
    );
  }
  