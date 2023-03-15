
import '../components.scss';
import { useState} from 'react';


function Product(props) {
  
    const [isChecked, setIsChecked] = useState(false);
 
 
 const handleCheckBox=(e)=>{
     setIsChecked(!isChecked)
  
 }
 function formatMoney(number) {
  return `${number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} $`;
}
 
  return (
     
    <div className="single-product">
       
         <input type="checkbox" className="delete-checkbox" name={`${props?.id}`} value={props?.id}  checked={isChecked} onChange={handleCheckBox}/>
         <div className="product-info">
            <p>{props?.label}</p>
            <p>{props?.name}</p>
            <p>{formatMoney(+props?.price)} </p>
            <p>{props?.typeOption ==='furniture' ? `Dimension:${props?.height}*${props?.width}*${props?.lengt}` : (
              props?.typeOption ==='dvd' ? `Size:${props?.size} MB` : `Weight:${props?.weight}KG`

            )}</p>
             
        </div>
      
    
   </div>
  )
}

export default Product;



