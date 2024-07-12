import descarga1 from './assets/logos/descarga1.png'
import descarga2 from './assets/logos/descarga2.png'
import descarga3 from './assets/logos/descarga3.png'
import descarga4 from './assets/logos/descarga4.jpg'
import fotoPerfil from './assets/FotoPerfil.jpg'


function Principal() {
    return(
        <div className="main">
            <div className="text-presentacion">
                <div className="i-am"> <b>Hi,I'm</b></div>
                <b className="nombre-completo"><b className="lucas">Lucas </b><b>Azócar</b></b>
                
                
                <p className="text">I'm a professional Web Developer. Our Main Goal to Help<br></br>
                    y Satisficef the Local y Global Clients by web<br></br>
                    development solutions.
                </p>
            
                <div className="apps-webs">
                    <a href="https://x.com/">
                        <img className="paginas" src={descarga1} alt="Twiter"/>
                    </a>
                    <a href="https://www.youtube.com/">
                        <img  className="paginas" src={descarga2} alt="Youtube"/>
                    </a>
                    <a href="https://ar.linkedin.com/">
                        <img className="paginas" src={descarga3} alt="Linkedin"/>
                    </a>
                    <a href="https://www.instagram.com/">
                        <img className="paginas" src={descarga4} alt="Instagram" />
                    </a>
                </div>           
            </div> 
            <div>
                <img src={fotoPerfil} alt="FOTO DE PERFIL" className="mi-foto"/>
            </div>
        </div>
    )
}

export default Principal;
