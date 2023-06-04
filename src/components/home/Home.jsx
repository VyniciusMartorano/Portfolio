import React from "react"
import './index.css'
import minhaImagem from './../../assets/fotoperfil.jpg'



const Home = () => {

    return (
        <div class="content">
            <div id="content-left">
                <div id="hello-text">
                    <p id="text">
                        Hello i'm
                    </p>
                </div>
                <div id="introduction-div-text">
                    <h1>
                        Vynicius Martorano
                    </h1>
                    <h2>
                        Software Developer
                    </h2>
                </div>
                <div id="infos">
                    <p id="email">
                        <i class="fa-solid fa-envelope mr-2"></i><span>vyniciussalusto@gmail.com</span>
                    </p>
                    <p id="fone">
                        <i class="fa-solid fa-phone mr-2"></i><span>+ 55 084 99404 1304</span>
                    </p>
                    <p id="local">
                        <i class="fa-solid fa-location-dot mr-2"></i><span>Natal, Rio Grande Do Norte, Brazil</span>
                    </p>
                </div>
                
            </div>
            <div id="content-right">
                <div class="content-image">
                    <img 
                        src={minhaImagem} 
                        alt="" 
                        class="imagem"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home