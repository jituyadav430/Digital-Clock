import React from 'react'

export default function First(props) {
    function karo(a){
        alert(a);
    }
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col">
            <div className="card" >
  <img src={props.img_link} className="card-img-top"   alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <button className="btn btn-primary" onMouseOver={()=>karo("kya kar rha be,bhag yha se")}>{props.go}</button>
  </div>
</div>
            </div>
        </div>
      </div>
    </>
  )
}
