import React from 'react'
import First from './First';

export default function demo() {
    const num=[
        {
            name: "first",
            img_link:"https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
            go:"go where"
        }
       
    ]
  return (
   <>
   <div className="container">
    <div className="row">
        <div className="col-4">
        <First title={num[0].name}
          img_link={num[0].img_link}
          
           go={num[0].go}
        />
        </div>
        <div className="col-4">
        <First title="second"
         img_link="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"
         go="kahi jao"
        />
        </div>
        <div className="col-4">
        <First title="third"
         img_link="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
         go="jao be"
        />
        </div>
    </div>
   </div>
   </>
  )
}
