import React from "react";
import TitleText from "./TextTypesComponents/TitleText";
import ContentText from "./TextTypesComponents/ContentText";

const Card=({productInfo})=>{

    //Başka bir componenten gelen propsu kabul ediyoruz
    return(
        <div className="card">
        <div className="card-img">
          <img src={productInfo.productImg} alt="" />
        </div>

        <div className="card-info">
     <TitleText title={productInfo.productName}/>
     <ContentText content={productInfo.productPrice}/>
          <p>{productInfo.productStock} adet stokta</p>
        </div>
      </div>
    )
}

export default Card