import React from 'react'

const CategoryItem = ({name,img,num}) => {
  return (
    <div class="category-item">

                        <div class="category-img-box">
                            <img src={img} alt="img" width="30"/>
                        </div>

                        <div class="category-content-box">

                            <div class="category-content-flex">
                                <h3 class="category-item-title">{name}</h3>

                                <p class="category-item-amount">{num}</p>
                            </div>
                        </div>

                    </div>
  )
}

export default CategoryItem
