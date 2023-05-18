import React,{useState} from "react";

const Form=({onSubmit,fields})=>{
   const [formValues,setFormValues]=useState({});

   const handleSubmit=(event)=>{
    event.preventDefault();
   // console.log(formValues);
    onSubmit(formValues);

   }

   const handleInputChange=(event)=>{
    const {name,value}=event.target;
    setFormValues((prevValues)=>(
        {...prevValues,[name]:value,}))
   }


    return(
        <form onSubmit={handleSubmit}>
            {
                fields.map((field,index)=>(
                    <input 
                    key={index}
                    type={field.type}
                    name={field.name}
                    value={formValues[field.name]||""} 
                    onChange={handleInputChange}/>
                ))
            }
            <button type="submit">Submit</button>
        </form>


    )
}

export default Form;