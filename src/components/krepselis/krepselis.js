import PrekiuSarasas from "./inner/prekiuSarasas";
import PridetiPreke from "./inner/pridetiPreke";
import Card from "../ui/card";



import {useState, useEffect} from "react";

const Krepselis=()=>{
    let initPrekes=[
        {pavadinimas:"Pienas", kiekis:1},
        {pavadinimas:"Duona", kiekis:2}
    ];

    useEffect(()=>{
        const data=localStorage.getItem("prekes");
        if (data!=null){
            initPrekes=JSON.parse(data);
            console.log("Užkraunu prekes");
        }
    }, []);


    const [prekes, setPrekes]=useState(initPrekes);

    const issaugotiPrekes=()=>{
        localStorage.setItem("prekes", JSON.stringify(prekes) );
    }

    const pridetiPreke=(preke)=>{
        prekes.push(preke);
        issaugotiPrekes();
        setPrekes(Array.from(prekes));
    };

    const trintiPreke=(index)=>{
        prekes.splice(index,1);
        issaugotiPrekes();
        setPrekes(Array.from(prekes));
    }

    return (
        <div  className="row mt-5">
            <div className="col-md-6">
                <PridetiPreke onPridetiPreke={pridetiPreke}></PridetiPreke>
            </div>
            <div className="col-md-6">
                <PrekiuSarasas prekes={prekes} onTrintiPreke={trintiPreke}></PrekiuSarasas>

            </div>
        </div>
    )
}

export default Krepselis;