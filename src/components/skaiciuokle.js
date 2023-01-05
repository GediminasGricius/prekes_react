import { useState } from "react";


function Skaiciuokle(){

 
   
 const [sk, setSk] =useState(0);
 const [x, setX]=useState(0);
 const [y, setY]=useState(0);
 const [rezultatas, setRezultatas]=useState(0);
 const [veiksmas, setVeiksmas]=useState("");

 const skaiciuotiHandler=()=>{
    setRezultatas(x*y);
    setVeiksmas("Sudauginti skaičiai: "+x+" ir "+y);
    setX("");
    setY("");
 }   
 const changeXHandler=(event)=>{
  setX(event.target.value);
 }
 const changeYHandler=(event)=>{
  setY(event.target.value);
 }
   

 return (
    <div className="col-md-12">
        <div className="row">
            <div className="col-md-6">
                <div className="card mt-3">
                    <div className="card-header">
                        Daugybos skaičiuoklė
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-2" >
                                <label className="form-label">Įveskite skaičių x:</label>
                                <input className="form-control" type="text" onChange={ changeXHandler } value={x} /> 

                            </div>
                            <div className="mb-2" >
                                <label className="form-label">Įveskite skaičių Y:</label>
                                <input className="form-control" type="text" onChange={ changeYHandler } value={y} /> 

                            </div> 
                            <button type="button" className="btn btn-success" onClick={ skaiciuotiHandler }>Skaiciuoti</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mt-3">
                    <div className="card">
                        <div className="card-header">
                            Rezultatai
                        </div>
                        <div className="card-body">
                            {veiksmas}<br />
                            Daugyba: { rezultatas }

                        </div>
                    </div>
                </div>
            
        </div>
    
    </div>
 );
}

export default Skaiciuokle;