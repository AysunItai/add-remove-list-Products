
function Furniture({updateData,data,errors}) {
 
  
  return (
    <div id="furniture">
      <p className="section-w">Please Add Dimensions!</p>
  <div className="box">
   <label htmlFor="height">Height (CM):</label>
   <div className="inp-err">
   <input type="text" id="height" name="height" value={data.height} onChange={updateData}/>
   {errors.height && <p className="error">{errors.height}</p>}
   </div>
  </div>
  <div className="box">
  <label htmlFor="width">Width (CM):</label>
  <div className="inp-err">
  <input type="text" id="width" name="width" value={data.width} onChange={updateData}/>
   {errors.width && <p className="error">{errors.width}</p>}
  </div>
  </div>
  <div className="box">
  <label htmlFor="length">Length (CM):</label>
  <div className="inp-err">
  <input type="text" id="length" name="lengt" value={data.length} onChange={updateData}/>
  {errors.lengt && <p className="error">{errors.lengt}</p>}
  </div>
  </div>
  
        
      
      
    </div>
  );
}

export default Furniture;