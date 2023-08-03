import React from "react"

export default function Tour(props){
    const [detail,setDetail] = React.useState(false)
    return      (
                    <div className="tour-card">
                        <div className="tour-card-detail">
                            <img src={props.tours.image} alt="tour"/>
                            <h5>{props.tours.price} $</h5>
                            <div className="card-header">
                                <h4>{props.tours.name}</h4>
                            </div>
                            <p>
                                {detail ? props.tours.info : `${props.tours.info.substring(0,200)}...`}<br/>
                                <b><span onClick={()=>setDetail(!detail)}>{detail ? "Read Less" : "Read More"}</span></b>
                            </p>
                        </div>
                        
                    </div>
                )


   
}