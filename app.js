window.onload = function() {
	//write your code here
	
	console.log("Hello Rigo from the console!");
	
	
	let boton = document.querySelector("#boton1");
	boton.innerHTML = `<a id="corazon" class=" fa fa-heart-o" href="#"  style="font-size:25px;color:red"></a>`;
	
	
	function generaBoton() {
	let boton2 = document.querySelector("#corazon");
		if (boton2.style.color== "black") {
   			return `<a id="corazon" class=" fa fa-heart-o" href="#"  style="font-size:25px;color:red"></a>`;
		} else if(boton2.style.color== "red") {  
    			return `<a id="corazon" class=" fa fa-heart-o" href="#"  style="font-size:25px;color:black"></a>`;
 		}
	}

  	document.getElementById("boton1").addEventListener("click", function() {
    		boton.innerHTML = `${generaBoton()}`;
  		});

	let boton2 = document.querySelector("#corazon");
	boton2.style.color= "black";





	
//______________________
	            //poner cuando se tenga que mostrar la info
                function obtenerLocalStorage(){
                    let info= JSON.parse(localStorage.getItem("lista"));
                    console.log(info)
                    let Datos = []
                    return {info};
                }

                //funcion para guardar datos en el storage temporalmente
                const guardarLocalStorage=()=> {
		            let inputValue = document.querySelector("#botonPost1");
                    let datos =inputValue.value;
                    console.log(datos)                   
                    //inicializando el contenedor de comentarios en mi variable info
                    let info= JSON.parse(localStorage.getItem("lista"));
                    if(info==undefined){
                        info=[]
                    }
                    //limite de ingresos de datos al storage
                    if(info.length>=4){
                        return 0;
                    }
                    info.push(datos)                    
                    //guardando los datos en el storage                      
                    localStorage.setItem("lista", JSON.stringify(info));                  

                }
                let botonPost = document.querySelector("#botonPost");
	            botonPost.onsubmit=guardarLocalStorage;

                function llenarBody(){
                    info=obtenerLocalStorage();
                    let divResult = document.querySelector("#demo")
                    if(info.info==null){
                        return 0
                    } 
                  
                    
                    for (var i = 0; i < info.info.length; i++) {
                        console.log(info.info.length)
                        console.log(typeof(info));
                        divResult.innerHTML+= `<p><strong> Comment </strong> ${info.info[i]}</p>`;
                        }
                    console.log(info)       
                }
                llenarBody()
	

	
                            
};




 


