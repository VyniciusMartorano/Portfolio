import React from "react"
import './style.css'
import spotify from './../../../assets/projects/spotifyLogin.jpeg'
import some from './../../../assets/projects/some.jpeg'
import mistermassas from './../../../assets/projects/mistermassas.jpeg'
import ecommerce from './../../../assets/projects/ecommerce.jpeg'
import woguess from './../../../assets/projects/woguess.jpeg'
import Item from "../Item"



const Carousel = (props) => {
    return (
        <section className="carousel">
            <div className="carousel__container">
                <Item title={'Spotify'} subtitle={'Aplicação full stack do spotify'} to={'/home'} key={1} img={spotify} />
                <Item title={'SOME'} subtitle={'Sistema de gerenciamento de miniempresas da JA'} to={'/home'} key={2} img={some} />
                <Item title={'Mister Massas'} subtitle={'Sistema de Pizzaria Desktop'} to={'/home'} key={3} img={mistermassas} />
                <Item title={'E-Commerce'} subtitle={'Ecommerce django'} to={'/home'} key={4} img={ecommerce} />
                <Item title={'Woguess'} subtitle={'Jogo de advinhação de palavras'} to={'/home'} key={5} img={woguess} />
            </div>
        </section>
    )
}

export default Carousel