
import { useNavigate } from "react-router-dom";


function AddButton() {
  
  const navigate = useNavigate();
  
    const addproductPage = () => {
      
        navigate("/addproduct")
    }
  
  
  return (
    <div className="btn">
        <button  className="add-btn" onClick={addproductPage}>ADD</button>
      
      
      
    </div>
  );
}

export default AddButton;