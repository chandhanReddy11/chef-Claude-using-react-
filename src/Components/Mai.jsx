import { useState } from "react";

export default function Main(){
    const [ingredients,setIngredients]=useState([]);
    function handleSubmit(formData){
        setIngredients((ingredients)=>{return [...ingredients,formData.get("ingredients")]});
    }
    
    function Add(props){
        return(
            <> 
                {props.props.map((item, index) => (
                    <li key={index}>{item}</li> // Adding key for React list rendering
            ))}
            </>)
    }
   
    return (
        <main>
            <form action={handleSubmit} className="add-ingredient-form">
                <input type="text" name="ingredients" placeholder="e.g. Biryani" aria-label="e.g. Biryani" />
                <button type="submit">+ Add-Ingredient</button> 
            </form>
            <ul>
                    <Add props={ingredients}/>
                </ul>  
            
        </main>
    )

}