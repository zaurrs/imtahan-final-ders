import React from 'react'
import "./CategoryCard.scss"

const CategoryCard = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-4 women">
               <button>Women's</button>
            </div>
            <div className="col-4 acce">
               <button>Accesories's</button>
            </div>
            <div className="col-4 men">
               <button>Men's</button>
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
