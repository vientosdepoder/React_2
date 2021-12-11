const suma = (a,b)=>parseInt(a)-parseInt(b)
const resta = (a,b)=>parseInt(a)-parseInt(b)
const divide = (a,b)=>parseInt(a)/parseInt(b)
const multiplica = (a,b)=>parseInt(a)*parseInt(b)
const operar = (operador,a,b) => {
  
    
    if (operador=="+")
        { 
            
            return parseInt(a)+parseInt(b)

            //document.getElementById("resultado").innerHTML = a+b
        }
    if (operador=="-")
        {
            return (parseInt(a)-parseInt(b))
            
        }
    if (operador=="/")
        {
            return (parseInt(a)/parseInt(b))
            
        }
    if (operador=="*")
        {
            return (parseInt(a)*parseInt(b))
            
        }

}
const sumar = ()=>{
    const op1 = document.getElementById("op1_id").value
    const op2 = document.getElementById("op2_id").value
 
    document.getElementById("resultado").innerHTML = operar('+',op1,op2)
}
const restar = ()=>{
    const op1 = document.getElementById("op1_id").value
    const op2 = document.getElementById("op2_id").value
 
    document.getElementById("resultado").innerHTML = operar('-',op1,op2)
}
const dividir = ()=>{
    const op1 = document.getElementById("op1_id").value
    const op2 = document.getElementById("op2_id").value
 
    document.getElementById("resultado").innerHTML = operar('/',op1,op2)
}
const multiplicar = ()=>{
    const op1 = document.getElementById("op1_id").value
    const op2 = document.getElementById("op2_id").value
 
    document.getElementById("resultado").innerHTML = operar('*',op1,op2)
}
const getCursos = ()=>["php","js","react"]
const getAlumno = ()=>{return {
    nombreAlumno:"leandro",
    apellidoAlumno:"gil",
    documentoAlumno:"3123123"
}}
const getAlumnoPromise = ()=>{
    return new Promise((resolve,reject)=>{
        if(1){
            resolve({
                nombreAlumno:"leandro",
                apellidoAlumno:"gil",
                documentoAlumno:"3123123"
            })
        }else{
            reject("Hubo un error")
        }
    })
    
    
    
    
}
const registrarse = async ()=>{
    let nombre //Declaracion
    nombre = document.form_registro.nombre.value /* Inicializacion */
    if(true){
        
        
    }
    
    const apellido = document.form_registro.apellido.value //Declarado e inicializado
    const email = document.getElementById("email_id").value
    const password = document.getElementById("password_id").value
    console.log(nombre,apellido,email,password)
    if(nombre==""){
        document.getElementById("nombre_error").innerHTML = "El campo es obligatorio"
    }else{
        document.getElementById("nombre_error").innerHTML = ""
    }
    
    //document.getElementById("mensaje").innerHTML = "Gracias "+nombre+" "+apellido+" por registrarse"
    document.getElementById("mensaje").innerHTML = `Gracias ${nombre} ${apellido} por registrarse`

    const cursos = getCursos()
    /*const curso1 = cursos[0]
    const curso2 = cursos[1]
    const curso3 = cursos[2]*/
    const [curso1,curso2,curso3] = getCursos()
    const {apellidoAlumno,nombreAlumno,documentoAlumno} = getAlumno()
    console.log(curso1,curso2,curso3)
    console.log(apellidoAlumno,nombreAlumno,documentoAlumno)
    getAlumnoPromise()
    .then(data=>{
        console.log("data",data)
    })
    try{
        const data = await getAlumnoPromise()
        console.log("data",data)
    }catch(e){

    }
    
    
    

    
}

/*var registrarse = function(a){
    return a+10
}*/
/*
var registrarse = ()=>{

}
var registrarse = a=>{

}
var registrarse = (a)=>a+10*/
function elegir(){
    var elegida = document.getElementById("operar_id").value
    const op1 = document.getElementById("op1_id").value
    const op2 = document.getElementById("op2_id").value
 
   
    
    switch(elegida){
        case "1":
            var rescal=operar('+',op1,op2)
            

            break;
        case "2":
            var rescal=operar('-',op1,op2)
            break;
        case "3":
            var rescal=operar('/',op1,op2)
            break;
        case "4":
            var rescal=operar('*',op1,op2)
            break;
    }
    document.getElementById("resultado").innerHTML=rescal
}
//tipoSeguro()