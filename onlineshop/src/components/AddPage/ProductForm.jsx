import "../components.scss";
import Book from './Book';
import Dvd from "./Dvd";
import Furniture from "./Furniture";
import Validation from "./Validation";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

function ProductForm({apiData,setApiData,getSelectedType}) {
  
  const [selectedOption, setSelectedOption] = useState('furniture');
  const [data, setData] = useState({});
  const [errors, setError] = useState("");
  const navigate=useNavigate();
  
    const updateData = e => {
     
        setData((prev)=>{
          return {
            ...prev,
            id: Math.floor((Math.random()*1000000)),
            [e.target.name]: e.target.value,
            typeOption:selectedOption
        }})
    }
    
   const checkSKU=(data)=>{
    const skus=apiData.map(apiobj=>apiobj.label);
    return skus.includes(data.label);
   }
  
    const handleSubmit = e => {
        e.preventDefault()
        const er=Validation(data,selectedOption,checkSKU(data));
        if(Object.values(er).length !==0 || checkSKU(data)){
        setError(er);
        return;
        
        }
      
       else{
        
            const requestOptions = {
        method: 'POST',
        headers: { 'Accept': 'application/json','Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    fetch('http://localhost:5000/all',requestOptions)
        .then(response => response.json())
        .then((data)=>{
          navigate(-1)
          setApiData(data)

        })
      }
     
    }
 
  
  return (
  <div className="product-add">
  <form  id="product_form" onSubmit={handleSubmit} >
          
       
  <div className="box">
   <label htmlFor="sku">SKU:</label>
   <div className="inp-err">
   <input type="text" id="sku" name="label" value={data.label} onChange={updateData}/>
     {errors.label && <p className="error">{errors.label}</p>}

    </div>
  </div>
  
  
    <div className="box">
  <label htmlFor="name">Name:</label>
  <div className="inp-err">
  <input type="text" id="name" name="name" value={data.name} onChange={updateData}/>
  {errors.name && <p className="error">{errors.name}</p>}
  </div>
  </div>
  <div className="box">
  <label htmlFor="price">Price ($):</label>
  <div className="inp-err">
  <input type="text" id="price" name="price" value={data.price} onChange={updateData}/>
  
  {errors.price && <p className="error">{errors.price}</p>}
  </div>
  </div>
  <div className="type-switcher">
<label htmlFor="productType">Type Switcher:</label>
<select name="productType" onChange={e => setSelectedOption(e.target.value)} id="productType" form="productType">
  <option value="furniture">Furniture</option>
  <option value="book">Book</option>
  <option value="dvd">DVD</option>
  
</select>
</div>
<div className="selected">
{
  selectedOption === 'furniture' ? <Furniture data={data} errors={errors} updateData={updateData} /> : (
    selectedOption === 'book' ? <Book data={data} errors={errors} updateData={updateData}/> : <Dvd data={data} errors={errors} updateData={updateData}/>)
}
</div>
<div className="btns f_btns">
 <button >Save</button>
 <button onClick={()=>navigate('/')}>Cancel</button>
 </div>
</form>
     
    </div>
  );
}

export default ProductForm;

