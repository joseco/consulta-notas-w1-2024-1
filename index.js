const express = require('express');
const path = require('path');

const app = express();
const PORT = 80;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Simula una base de datos con un arreglo
const data = {
   '737541':{'p1': 0,'p2': 0,'p3': 0,'p4': 0,'p5': -10,'p6': 0,'notaPrevia': 0,'registro': '737541','nombre': 'Amaya Balcazar Paul Antony'},
'738254':{'p1': 0,'p2': 0,'p3': 0,'p4': 0,'p5': 0,'p6': 0,'notaPrevia': 0,'registro': '738254','nombre': 'BALDELOMAR ALVAREZ HELEN DIYHANA'},
'716722':{'p1': 0,'p2': 0,'p3': 0,'p4': 0,'p5': 0,'p6': 0,'notaPrevia': 0,'registro': '716722','nombre': 'Castedo Ribera Sebastian'},
'738351':{'p1': 0,'p2': 0,'p3': 0,'p4': 0,'p5': 0,'p6': 0,'notaPrevia': 0,'registro': '738351','nombre': 'Cerusoli Gil Bruno'},
'743835':{'p1': 0,'p2': 0,'p3': 0,'p4': 0,'p5': 0,'p6': -30,'notaPrevia': -30,'registro': '743835','nombre': 'Coronado Castro Joe David'},
'74380A':{'p1': 0,'p2': 0,'p3': 0,'p4': 0,'p5': 0,'p6': 0,'notaPrevia': 0,'registro': '74380A','nombre': 'Cuellar Fernandez Erick'},
'792143':{'p1': 0,'p2': 0,'p3': 0,'p4': 0,'p5': 0,'p6': -30,'notaPrevia': -30,'registro': '792143','nombre': 'Davila Barrancos Danny Marcelo'},
'513228':{'p1': -10,'p2': -10,'p3': -10,'p4': -10,'p5': -10,'p6': -30,'notaPrevia': -30,'registro': '513228','nombre': 'Delgado Gabriela Varinia'},
'72368A':{'p1': 0,'p2': 0,'p3': 0,'p4': 0,'p5': 0,'p6': -10,'notaPrevia': -10,'registro': '72368A','nombre': 'Gareca Vaca Angelo'},
'523142':{'p1': -10,'p2': -10,'p3': -10,'p4': -10,'p5': -10,'p6': -30,'notaPrevia': -30,'registro': '523142','nombre': 'Halsey Mendieta Kevin Sebastian'},
'717095':{'p1': -10,'p2': -10,'p3': 0,'p4': 0,'p5': -10,'p6': -30,'notaPrevia': -30,'registro': '717095','nombre': 'Justiniano Velasco Andres'},
'764948':{'p1': 0,'p2': 0,'p3': 0,'p4': 0,'p5': 0,'p6': 0,'notaPrevia': 0,'registro': '764948','nombre': 'Kalaf Gomez Hendy Latife'},
'652511':{'p1': -10,'p2': 0,'p3': 0,'p4': 0,'p5': -10,'p6': -30,'notaPrevia': -30,'registro': '652511','nombre': 'Lima Gutierrez Paulinha Isabo'},
'720061':{'p1': 0,'p2': 0,'p3': -10,'p4': 0,'p5': -10,'p6': -30,'notaPrevia': -30,'registro': '720061','nombre': 'Loayza Vargas Leonardo'},
'74461A':{'p1': 0,'p2': 0,'p3': 0,'p4': 0,'p5': 0,'p6': 0,'notaPrevia': 0,'registro': '74461A','nombre': 'Loza Puma Leonel'},
'714258':{'p1': 0,'p2': 0,'p3': 0,'p4': 0,'p5': 0,'p6': 0,'notaPrevia': 0,'registro': '714258','nombre': 'Mur Rodriguez Oscar David'},
'56171A':{'p1': 0,'p2': 0,'p3': 0,'p4': 0,'p5': -10,'p6': -30,'notaPrevia': -30,'registro': '56171A','nombre': 'Parada Schrupp Cristhian'},
'653801':{'p1': 0,'p2': 0,'p3': 0,'p4': 0,'p5': 0,'p6': -30,'notaPrevia': -30,'registro': '653801','nombre': 'Parra Zegarra Richard'},
'727139':{'p1': 0,'p2': 0,'p3': 0,'p4': 0,'p5': 0,'p6': -30,'notaPrevia': -30,'registro': '727139','nombre': 'Paz Cabrera Mauricio'},
'708541':{'p1': 0,'p2': 0,'p3': 0,'p4': 0,'p5': 0,'p6': 0,'notaPrevia': 0,'registro': '708541','nombre': 'Paz Oliva Ernesto'},
'662720':{'p1': -10,'p2': 0,'p3': 0,'p4': 0,'p5': -10,'p6': -30,'notaPrevia': -30,'registro': '662720','nombre': 'Rodriguez Lazarte Jorge Angelo'},
'74587A':{'p1': 0,'p2': 0,'p3': 0,'p4': 0,'p5': 0,'p6': -30,'notaPrevia': -30,'registro': '74587A','nombre': 'Soliz Ortiz Jairo'},
'734488':{'p1': 0,'p2': 0,'p3': 0,'p4': 0,'p5': 0,'p6': -30,'notaPrevia': -30,'registro': '734488','nombre': 'Soriano Delgado Jonathan Eduardo'},
'739501':{'p1': 0,'p2': 0,'p3': 0,'p4': 0,'p5': -10,'p6': -30,'notaPrevia': -30,'registro': '739501','nombre': 'Soto Arauz Paola Andrea'},
'743673':{'p1': 0,'p2': 0,'p3': 0,'p4': 0,'p5': 0,'p6': -30,'notaPrevia': -30,'registro': '743673','nombre': 'Supayave Barequi Jesus Ignacio'},
'769079':{'p1': 0,'p2': 0,'p3': 0,'p4': -10,'p5': -10,'p6': -10,'notaPrevia': -10,'registro': '769079','nombre': 'Terrazas Leaños Christian Fernando'},
'739293':{'p1': -10,'p2': -10,'p3': -10,'p4': -10,'p5': -10,'p6': -30,'notaPrevia': -30,'registro': '739293','nombre': 'Urey Guzman Marco Daniel'},
'744017':{'p1': 0,'p2': 0,'p3': 0,'p4': -10,'p5': -10,'p6': -30,'notaPrevia': -30,'registro': '744017','nombre': 'Valencia Calcina Jose Eduardo'},
'741042':{'p1': 0,'p2': 0,'p3': 0,'p4': 0,'p5': -10,'p6': 0,'notaPrevia': 0,'registro': '741042','nombre': 'Vargas Pizarro Luis Alfredo'},
'604649':{'p1': 0,'p2': 0,'p3': 0,'p4': 0,'p5': 0,'p6': -30,'notaPrevia': -30,'registro': '604649','nombre': 'Yujra Mita John'},

    }
;

// Endpoint para buscar información por código
app.get('/api/nota/:code', (req, res) => {
  const { code } = req.params;
   console.log(code);
   console.table(data);
  const result = data[code];

  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ error: 'Código no encontrado' });
  }
});

// Endpoint para buscar información por código
app.get('/api/hello', (req, res) => {
  
    res.json('Hello World!');
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
