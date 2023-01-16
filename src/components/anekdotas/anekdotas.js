import {useEffect, useState} from "react";



const Anekdotas=()=>{
/*
    async function loadAcync(){
        setLoading(true);
        let result=await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
        let data=await result.json();
        setJoke(data.joke);
        setLoading(false);
    }
*/
    const [joke, setJoke]=useState("");
    const [isLoading,setLoading]=useState(false);
    const [category,setCategory]=useState("Dark");

    const load=()=>{
        setLoading(true);
        fetch("https://v2.jokeapi.dev/joke/"+category+"?type=single")
            .then((result)=>{
                return result.json();
            })
            .then((data)=> {
                setJoke(data.joke);
                setLoading(false);
            });
    }

    useEffect(()=>{
        load();
    }, []);

    let changeCategory=(event)=>{
        setCategory(event.target.value);
    }

    return (
        <div className="mt-5">
            { (isLoading)? <div className="spinner-border text-primary"></div> : <div className="alert alert-info"> { joke } </div>  }
            <hr />
            <div className="mb-3">
                <label className="form-label">Kategorija:</label>
                <select onChange={ changeCategory } className="form-control">
                    <option value="Programming">Programavimas</option>
                    <option value="Dark">Juodas humoras</option>
                    <option value="Miscellaneous">Kita</option>
                </select>
            </div>

            <button className="btn btn-success" onClick={ load }>Užkrauti</button>
        </div>
    )
}



export default Anekdotas;