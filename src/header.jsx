// const string = 'esto es un texto'
// const number = 12345
// const array = ['curso de react', 'Youtube', 4, 1000000]
// const boolean = true
// const funcion = () => 1+1
// const objetos = {nombre: 'pepe', apellido: 'argento'}
// const fecha = new Date()
    

// // export const PrimerComponente = () => {
// //   return (
// //     <p>{ fecha }</p> // no se pueden pasar objeto
// //   )
// // }

// // una manera de pasar objetos seria

// // export const PrimerComponente = () => {
// //   return (
// //     <p>{ JSON.stringify(objetos) }</p>
// //   )
// // }


// import React from 'react'

// export const PrimerComponente = () => {
//   return (
  
//   <>
//     <h4>Vriable de tipo string: </h4><p>{ string }</p>
//     <h4>Vriable de tipo number: </h4><p>{ number }</p>
//     <h4>Vriable de tipo array: </h4><p>{ array }</p>
//     <h4>Vriable de tipo funcion: </h4><p>{ funcion() }</p>
//     <h4>Vriable de tipo boolean: </h4><p>{ boolean }</p>
//     <h4>Vriable de tipo string: </h4><p>{ string }</p>
    
//   </> // creamos un fragmento, que va a ser como el componente padre, con sub componentes
//       //los podemos encontrar como un "div" o con la palabra reservada "fragment"
//   )
// }

function Logo() {
  return (
    <div className="header">
      <div className="logo"><b>Logo</b></div>
      <div className="navbar">
        <a href="/index.html" className="navbar-a"><b>Home</b></a>
        <a href="/about.html" className="navbar-a"><b>About</b></a>
        <a href="/skills.html" className="navbar-a"><b>Skills</b></a>
        <a href="/Portafolio.html" className="navbar-a"><b>Portafolio</b></a>
        <a href="/contact.html" className="navbar-a"><b>Contact</b></a>
      </div>
    </div>
  )
}

export default Logo;



