
function Progress(props){
    const progresCss={
        width: props.rezultatas+"%",
        backgroundColor:'red'
    };
    let cssClass="progress-bar";
    if (props.rezultatas<80){
        cssClass+="  bg-success";
    }
    if (props.rezultatas>=80 && props.rezultatas<100){
        cssClass+="  bg-warning";
    }
    if (props.rezultatas>=100 ){
        cssClass+="  bg-danger";
    }
    return  (<div>
        <div className="progress">
            <div className={cssClass} role="progressbar" style={ progresCss } ></div>
        </div>

    </div>);
}




export default Progress;