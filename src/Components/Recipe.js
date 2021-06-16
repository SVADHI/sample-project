import React ,{useState}from "react";
import "./Recipe.css";


const Recipe = ({ calories, label, image, ingredients,data }) => {

  console.log("data is",data);
const [addLabel,setAddLabel] = useState("add to cart");

  
const onAddToCart =(index)=>{
  console.log("idex is",index);
  setAddLabel("Go toCart")
}
return(

  <>
    {/* <div className="recipe">
      <h1>{label}</h1>
      <ol>
        {ingredients.map((ingrident, index) => {
          return <li key={index}>{ingrident.text}</li>;
        })}
      </ol>
      <p> {calories}</p>
      <img src={image} alt="empty" />
    </div> */}
   
          <div className="row">
                {data.map((data,index) =>  
                <div className="col-sm-3">
                    <div class="card" style={{"width": "20rem",marginTop:"15px"}}>
                    <img class="card-img-top" src={data.recipe.image} alt="Card image cap" />
                    <div class="card-body">
                    <center style ={{backgroundColor:"pink",padding:"5px"}}>
                        <h5 className="card-title">{data.recipe.label}</h5>
                        <p className="card-text">Total Amount Of Calories : {Math.round(data.recipe.calories)}</p>
                        <button class="btn btn-primary">Buy</button>
                        <button onClick ={()=>onAddToCart(index)} className="btn btn-danger" style={{marginLeft:"15px"}}>{addLabel}</button>
                        </center>
                    </div>
                    </div>
                </div>
                )}
            </div>

  </>
);
  }

export default Recipe;
