import React from "react"


const Item = ({ img, title, subtitle, to }) => {

    return (
        <div className="carousel-item" >
            <img
                className="carousel-item__img"
                src={img}
                alt={title}
            />
            <div className="carousel-item__details">
                <h5 className="carousel-item__details--title">{title}</h5>
                <p className="carousel-item__details--subtitle">{subtitle}</p>
            </div>
        </div>
    )
}

export default Item