import "./product.css";
function Product(props){
   const title=props.product.title;
   const description=props.product.description; 
   const price=props.product.price;
   const cssClass="card  mt-3 "+props.product.class;
   const descriptionColor=props.descriptionColor;

    return (
        <div class={cssClass}>
            <div class="card-header">{ title }</div>
            <div class="card-body">
              <div class={descriptionColor}>
                { description }
              </div>
              <hr />
              Kaina be PVM: { price } EUR <br />
              Kaina su PVM: { price*1.21 } EUR
              <hr />
              <button class='btn btn-success btn-border'>Plačiau</button>
            </div>
          </div>
    );

}

export default Product;