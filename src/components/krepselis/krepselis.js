import PrekiuSarasas from "./inner/prekiuSarasas";
import PridetiPreke from "./inner/pridetiPreke";
import Card from "../ui/card";
import {useState} from "react";

const Krepselis=()=>{
    const initPrekes=[
        {pavadinimas:"Pienas", kiekis:1},
        {pavadinimas:"Duona", kiekis:2}
    ]
    const [prekes, setPrekes]=useState(initPrekes);


    const pridetiPreke=(preke)=>{
        prekes.push(preke);
        setPrekes(Array.from(prekes));
        console.log("Preke gauta ir prideta");
        console.log(prekes);
    };

    return (


        <div  className="row mt-5">
            <div className="col-md-6">
                <PridetiPreke onPridetiPreke={pridetiPreke}></PridetiPreke>
            </div>
            <div className="col-md-6">
                <PrekiuSarasas prekes={prekes}></PrekiuSarasas>

            </div>
        </div>
    )
}

export default Krepselis;