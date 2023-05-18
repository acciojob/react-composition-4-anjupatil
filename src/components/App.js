
import React from "react";
import './../styles/App.css';
import Form from "./Form";

const App = () => {
  const handleSubmit=(formValues)=>{
    console.log(formValues);
  }
  const fields = [
    { name: "name", type: "text", label: "Name" },
    { name: "email", type: "email", label: "Email" },
    { name: "password", type: "password", label: "Password" },
  ];
  return (
    <div>
      {/* Do not remove the main div */}
        <Form onSubmit={handleSubmit} fields={fields} />
     

    </div>
  )
}

export default App
