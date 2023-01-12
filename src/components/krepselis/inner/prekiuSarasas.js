import Card from "../../ui/card";
import PrekeItem from "./prekeItem";

const PrekiuSarasas=(props)=>{

    let prekiuSarasas=[];
    props.prekes.forEach((preke, index)=>{
        prekiuSarasas.push(
            (<PrekeItem key={index} preke={ {...preke, key:index} } onTrintiPreke={props.onTrintiPreke} ></PrekeItem>)
        );
    })
    return (
        <Card title="Prekių sąrašas">
            <ul className="list-group ">
                {prekiuSarasas}
            </ul>
        </Card>
    );
}

export default PrekiuSarasas;