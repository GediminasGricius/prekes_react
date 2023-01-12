import Card from "../../ui/card";
import {useState} from "react";

const PridetiPreke=(props)=>{

    const initValue={
        pavadinimas:"",
        kiekis:""
    };

    const [preke,setPreke]=useState(initValue);

    const onFormSubmit=(event)=>{
        event.preventDefault();
        props.onPridetiPreke(preke);
        setPreke(initValue);
    }
    const onPavadinimasChange=(event)=>{
        setPreke( {
            ...preke,
            pavadinimas: event.target.value,
        } );

    }
    const onKiekisChange=(event)=>{
        setPreke( {
            ...preke,
            kiekis: event.target.value,
        } );
    }


    return (
        <Card title="Pridėti naują prekę">
            <form onSubmit={onFormSubmit}>
                <div className="mb-3">
                    <label className="form-label">Pavadinimas</label>
                    <input  type="text"  className="form-control" onChange={onPavadinimasChange} value={preke.pavadinimas} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Kiekis</label>
                    <input  type="text"  className="form-control" onChange={onKiekisChange} value={preke.kiekis} />
                </div>
                <button className="btn btn-success" >Pridėti prekę</button>
            </form>
        </Card>
    );
}

export default PridetiPreke;