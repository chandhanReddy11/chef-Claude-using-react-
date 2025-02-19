import { useState } from "react";

export default function Main(){
    const [ingredients,setIngredients]=useState([]);
    function handleSubmit(event){
        event.preventDefault();
        const formdata=new FormData(event.currentTarget);
        setIngredients([...ingredients,formdata.get("ingredients")]);
        event.currentTarget.reset();
        
    }
    
    function Add({props}){
        return(
            <> 
        {props.map((item, index) => (
            <li key={index}>{item}</li> // Adding key for React list rendering
        ))}
        </>)
    }
   
    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input type="text" name="ingredients" placeholder="e.g. Biryani" aria-label="e.g. Biryani" />
                <button type="submit">+ Add-Ingredient</button>
               
            </form>
            <ul>
                <Add props={ingredients}/>
                </ul>
        </main>
    )

}