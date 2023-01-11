import { useState } from "react";
import Ivedimas from "./skaic/ivedimas";
import Rezultatas from "./skaic/rezultatas";


function Skaiciuokle(){

 const [skData,setSkData]=useState({
     x:0,
     y:0
 });

 const [rezultatas, setRezultatas]=useState(0);
 const [veiksmas, setVeiksmas]=useState("");

 const updateData=(data)=>{
        console.log("Duomenys skaiciuokle");
        setSkData(data);
        setRezultatas(data.x * data.y);
        setVeiksmas("Veiksmas: "+data.x+" * "+data.y);
 }

 return (
    <div className="col-md-12">
        <div className="row">
            <div className="col-md-6">
                <Ivedimas onUpdateData={updateData} />
            </div>
            <div className="col-md-6 mt-3">
                <Rezultatas veiksmas={veiksmas} rezultatas={rezultatas}/>
            </div>
        </div>
    </div>
 );
}

export default Skaiciuokle;