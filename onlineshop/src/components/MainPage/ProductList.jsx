import Product from './Product';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';
import ProductSlider from './ProductSlider';
import '../components.scss';

function ProductList({apiData,removeData}) {
  
  console.log(apiData)
    
  return (
  <>
  <div className="container">
  <nav className='menu'>
  <h1>Product List</h1>
  <div className="btns">
  <AddButton/>
  <DeleteButton removeData={removeData}/>
  </div>
  </nav>
    <div className={apiData.length>12 ? 'products-slider' : 'products'}>
      {apiData.length>12 ? <ProductSlider apiData={apiData}/> : (apiData.map((obj)=>
        
      {return <Product key={obj.id} {...obj}   ></Product>}
      ))}
       
    </div>
    </div>
    
    
    </>
  );
}

export default ProductList;
