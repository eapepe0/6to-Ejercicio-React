const page= (
<div>
    <a href="http://react.org"><img src="./react-logo.png" width="40px" alt="Logo react"></img></a>
    <h1>Fun facts about React</h1>

    <ul>
        <li>Fue lanzado en 2013</li>
        <li>Fue originalmente creado por Jordan Walke</li>
        <li>Tiene mas de 100k de estrellas en Github</li>
        <li>Es mantenido por Facebook</li>
        <li>Enpodera cientos de apps de empresas, incluyendo aplicaciones mobiles</li>
    </ul>
</div>
)
// CREANDO NUESTROS COMPONENTES
// UNA FUNCION ES CREAR CODIGO UNA VEZ Y LLAMARLO CADA VEZ QUE LO NECESITAMOS
// EN REACT TIENE UNA FUNCION QUE SE PUEDE CREAR INTERFASES

function TemporaryName(){ // el nombre tiene que estar en mayuscula cada palabra
    return(
        <div>
        <a href="http://react.org"><img src="./react-logo.png" width="40px" alt="Logo react"></img></a>
        <h1>Fun facts about React</h1>
    
        <ul>
            <li>Fue lanzado en 2013</li>
            <li>Fue originalmente creado por Jordan Walke</li>
            <li>Tiene mas de 100k de estrellas en Github</li>
            <li>Es mantenido por Facebook</li>
            <li>Enpodera cientos de apps de empresas, incluyendo aplicaciones mobiles</li>
        </ul>
    </div>  
    )
}
//ReactDOM.render(page , document.getElementById("root"))


// cuando se usar en render no utilizar () como llamando una funcion sino usar < />

// INCORRECTO
//  ReactDOM.render(temporaryName() , document.getElementById("root"))   

ReactDOM.render( <TemporaryName/> , document.getElementById("root"))

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

function ExcitedReact (){
    return(
        <div>
        <h1>why you're
        excited to be learning React</h1>  

        <ul>
            <li>New</li>
            <li>Curiosidad</li>
            <li>Paginas dinamicas</li>
        </ul>
        </div>
    )

}

ReactDOM.render(<ExcitedReact/>, document.getElementById("root2"))

