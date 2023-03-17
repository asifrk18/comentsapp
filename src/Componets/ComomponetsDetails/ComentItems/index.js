import "./index.css";

const comentItems=(props)=>{
    console.log(props);
   const{ ComentDetails}=props
   const {name, comenttext}=ComentDetails
    return(
        <>
        <div class="comentcontainer">

            <h4 className="title">{name}</h4>
            <p className="details">{comenttext}</p>
        </div>

        </>
    )
}
export default comentItems