
function DeleteButton({removeData}) {
  
  const handleClick=e=>{
   const deleteIds= [...e.target.parentElement.parentElement
    .parentElement.nextElementSibling.children].filter(elem=>elem.children[0].checked).map(singleProduct=> +singleProduct.children[0].value);
    removeData( deleteIds);
  }
  
  return (
    <div className="btn">
        <button className="mass-delete-btn" onClick={handleClick}>MASS DELETE</button>
      
      
    </div>
  );
}

export default DeleteButton;