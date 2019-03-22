var Item = require('./pelicula');
module.exports = class _Pelicula {
  //El constructor está vacío ya que no toma ningún dado, ahora lo que hacemos es ir al método guardar//
   constructor( ) {

   }
Guardar(req,res) {
  //Esto crea toda la información necesaria para el usuario//
	Item.create(
			{
        //Ahora se pide de todo, el nombre, la duracion de la pelicula, el idioma, etc.//
  NOMBRE: req.body.NOMBRE,
    DURACIONMINUTOS: req.body.DURACIONMINUTOS,
    GENERO: req.body.GENERO,
    IDIOMAAUDIO: req.body.IDIOMAAUDIO,
    IDIOMASUB: req.body.IDIOMASUB,
    SINOPSIS: req.body.SINOPSIS,
    CLASIFICACION: req.body.CLASIFICACION,
    PRECIO: req.body.PRECIO,
    HORAINICIO: req.body.HORAINICIO,
    FECHA: req.body.FECHA,
    MINUTOINICIO: req.body.MINUTOINICIO,
    ASIENTOS: req.body.ASIENTOS,
    IMAGEN: req.body.IMAGEN,
    ESTADO: req.body.ESTADO
            }, 
            //En caso de error, el método responde aquí//
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});//Aquí cierra la funcion del error//
    
    
    
}//Aquí cierra guardar//
    
 Modificar(req,res) {
      console.log(req.body);
        Item.update({_id : req.body._id},{$set:{
            //busca la id del item a modificar y cambia las caracteristicas
            NOMBRE: req.body.NOMBRE,
            DURACIONMINUTOS: req.body.DURACIONMINUTOS,
            GENERO: req.body.GENERO,
            IDIOMAAUDIO: req.body.IDIOMAAUDIO,
            IDIOMASUB: req.body.IDIOMASUB,
            SINOPSIS: req.body.SINOPSIS,
            CLASIFICACION: req.body.CLASIFICACION,
            PRECIO: req.body.PRECIO,
            HORAINICIO: req.body.HORAINICIO,
            FECHA: req.body.FECHA,
            MINUTOINICIO: req.body.MINUTOINICIO,
            ASIENTOS: req.body.ASIENTOS,
            IMAGEN: req.body.IMAGEN,
            ESTADO: req.body.ESTADO
        }},(err, item) => {
            //busca errores internos y externos
            if (err){res.send(err);}
            // Obtine y devuelve todas las personas tras crear una de ellas
              else{
                Item.find((err, item) => {
                    if(err)res.send(err);
                    res.json(item);
                });
              }
        });
    }

    
 Eliminar(req,res) {
  //Esta parte utiliza remove ya que no estamos creando ni modificando, estamos eliminando datos//
	Item.remove({_id : req.body.id}, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtiene y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}
Seleccionartodos(req,res) {
  //Utilizamos find cuando necesitamos encontrar un dato, en este caso no se especifica el que, ya que//
  //estamos seleccionando a todas las personas//
		Item.find(
		function(err, item) {
			if (err)
                
                {
				res.send(err)
                }else{
                
                
					res.json(item); // devuelve todas las Personas en JSON	
                    	 
                }
				}
			);
    
    
    
}
    
    Seleccionarporfecha(req,res) {
      //Aquí también se utiliza find, pero en este caso, pide la fecha, así que eso es lo que devolverá//
	Item.find({FECHA:req.body.FECHA}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
    
}
    
    Seleccionarporid(req,res) {
      //De la misma manera, en este caso selecciona de acuerdo a la id//
	Item.find({_id:req.body._id}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
}
    
    Seleccionarpornombre(req,res) {
      //Y de igual forma, acá selecciona por nombre//
	Item.find({NOMBRE:req.body.NOMBRE}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
    
}
}