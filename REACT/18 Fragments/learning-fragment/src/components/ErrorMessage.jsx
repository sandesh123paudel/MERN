const ErrorMessage=(props)=>{

  
 
  return <> 
    {props.items.length===0 && <h3>There is no food</h3>}
    </>;
  
};

export default ErrorMessage;