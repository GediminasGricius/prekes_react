import {useState} from "react";


function Ivedimas(props){


    const [skData,setSkData]=useState({
        x:0,
        y:0
    });
    const skaiciuotiHandler=(event)=>{
        event.preventDefault();
        props.onUpdateData(skData);
        setSkData({
            x:0,
            y:0
        })
    }
    const changeXHandler=(event)=>{
        setSkData( {
            ...skData,
            x:event.target.value
        });
    }
    const changeYHandler=(event)=>{
        setSkData( {
            ...skData,
            y:event.target.value
        });
    }
    return (
        <div className="card mt-3">
        <div className="card-header">
            Daugybos skaičiuoklė
        </div>
        <div className="card-body">
            <form onSubmit={ skaiciuotiHandler }>
                <div className="mb-2" >
                    <label className="form-label">Įveskite skaičių x:</label>
                    <input className="form-control" type="text" onChange={ changeXHandler } value={skData.x} />

                </div>
                <div className="mb-2" >
                    <label className="form-label">Įveskite skaičių Y:</label>
                    <input className="form-control" type="text" onChange={ changeYHandler } value={skData.y} />

                </div>
                <button type="submit" className="btn btn-success" >Skaiciuoti</button>
            </form>
        </div>
    </div>);
}


export default Ivedimas;