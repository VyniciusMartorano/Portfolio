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
                <div className="controls">
                </div>
                <h5 className="carousel-item__details--title">{title}</h5>
                <h6 className="carousel-item__details--subtitle">{subtitle}</h6>
            </div>
        </div>
    )
}

export default Item