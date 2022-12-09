import React from 'react';
import "../css/productslider.css"

const ProductSlider = () => {

    return (
        <div class="slider">
        <span id="slide-1"></span>
        <span id="slide-2"></span>
        <span id="slide-3"></span>
        
        <div class="image-container">
          <img src= "data:image/jpeg;base64,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" class="slide" width="1000" height="300" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFObQyqRyDwl-RvmQfHXEjSmYFPc7V4ZftLg&usqp=CAU" class="slide" width="1000" height="300" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZZ1pIMFr2rN_iKRHyzcyIbr5egGWLGN72vf4CmGsOguYVPO8779cJsIDS41Ht1LZAgs&usqp=CAU" class="slide" width="1000" height="300" />
          
         </div>
        <div class="buttons">
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          <a href="#slide-3"></a>
          
        </div>
      </div>
    )
}

export default ProductSlider