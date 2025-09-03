const car=(props)=>{
    return(
        <div className="car-details">
     <ul>
        <li><strong>make:</strong>{props.make}</li>
         <li><strong>model:</strong>{props.model}</li>
          <li><strong>year:</strong>{props.year}</li>
           <li><strong>color:</strong>{props.color}</li>
     </ul>
        </div>
    );

};
export default car;
