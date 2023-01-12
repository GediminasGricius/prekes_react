

const PrekeItem=(props)=>{


    return (
        <li className="list-group-item">

            <div className="row" >
                <div className="col-md-6">{props.preke.pavadinimas}</div>
                <div className="col-md-3">{props.preke.kiekis}</div>
                <div className="col-md-3">
                    <button className="btn btn-danger">Ištrinti</button>
                </div>
            </div>
        </li>
    )
};


export default PrekeItem;