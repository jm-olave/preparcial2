import React from 'react'

export const Card = ({movies = []}) => {
    return (
        <div className = "row">
            {
                movies.map((item, index) =>(
                   
                    <div key ={index} className="col">
                    {item.poster}
                        <div  class="card" >
                            <img class="card-img-top" src = {item.poster} alt="Card image cap" />
                            <div class="card-body">
                                <h3 class="card-title">{item.name}</h3>
                                <p class="card-text"> {item.description}</p>
                                <h5 class="card-title">{item.cast}</h5>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
            
        
    )
}