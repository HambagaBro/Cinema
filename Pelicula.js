//La variable Mongoose llama a dicho módulo, y la variable Schema es utilizada para crear este nuevo esquema//
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//La variable película es un nuevo esquema//
var pelicula = new Schema ({
	//Se utiliza String cuando es un texto, y Number cuando es un numero.//
	NOMBRE: String,
	DURACIONMINUTOS: Number,
	GENERO: String,
	IDIOMAUDIO: String,
	IDIOMASUB: String,
	SINOPSIS: String,
	CLASIFICACION: String,
	PRECIO: Number,
	HORAINICIO: Number,
	//La fecha es un dato aparte, ya que depende de la hora del sistema//
	FECHA: Date,
	MINUTOINICIO: Number,
	ASIENTOS:{
	//Todos los asientos tienen la misma información que A1, y terminan en H4//
		A1:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		A2:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		A3:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		A4:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		A5:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		A6:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		B1:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		B2:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		B3:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		B4:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		B5:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		B6:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		C1:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		C2:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		C3:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		C4:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		C5:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		C6:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		D1:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		D2:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		D3:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		D4:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		D5:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},

		E1:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		E2:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		E3:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		E4:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},

		F1:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		F2:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		F3:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		F4:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},

		G1:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		G2:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		G3:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		G4:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},

		H1:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		H2:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		H3:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		},
		H4:{
			NOMBREDEESTUDIANTE:String,
			SECCION:String,
			CARNET: Number
		}},
//Imagen despliega la imagen de la película//
	IMAGEN: String,
	ESTADO: Number,
});
module.exports = mongoose.model('Pelicula',pelicula);