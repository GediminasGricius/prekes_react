import {useContext} from "react";
import ProductsContext from "../../context/productsContext";


const PrekeItem=(props)=>{


    const productsCtx=useContext(ProductsContext);

    const onIstrintiClick=()=>{
        productsCtx.trintiPreke(props.preke.key);
        //props.onTrintiPreke(props.preke.key);
    };

    return (
        <li className="list-group-item">

            <div className="row" >
                <div className="col-md-6">{props.preke.pavadinimas}</div>
                <div className="col-md-3">{props.preke.kiekis} / {productsCtx.products.length}</div>
                <div className="col-md-3">
                    <button className="btn btn-danger" onClick={onIstrintiClick}>Ištrinti</button>
                </div>
            </div>
        </li>
    )
};


export default PrekeItem;