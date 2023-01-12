import Progress from "./progress";

function Rezultatas(props){



    return (
        <div className="card">
            <div className="card-header">
                Rezultatai
            </div>
            <div className="card-body">
                {props.veiksmas}<br />
                Daugyba: { props.rezultatas }
                <Progress rezultatas={props.rezultatas} />


            </div>
        </div>
    );
}





export default Rezultatas;