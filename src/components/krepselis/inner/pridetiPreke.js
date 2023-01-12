import Card from "../../ui/card";

const PridetiPreke=(props)=>{
    const onFormSubmit=(event)=>{
        event.preventDefault();
        props.onPridetiPreke({pavadinimas:"Saldaniai", kiekis:10});
        console.log("Pridedame preke");

    }

    return (
        <Card title="Pridėti naują prekę">
            <form onSubmit={onFormSubmit}>
                <div className="mb-3">
                    <label className="form-label">Pavadinimas</label>
                    <input  type="text"  className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Kiekis</label>
                    <input  type="text"  className="form-control" />
                </div>
                <button className="btn btn-success" >Pridėti prekę</button>
            </form>
        </Card>
    );
}

export default PridetiPreke;