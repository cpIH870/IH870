"use strict";

function unpack(rows, key) {
	return rows.map(function(row) { return row[key]; });
}


var VORDME= {
	type:'scattermapbox', name: 'VOR/DME', hoverinfo: "text",
	lat: [], lon: [], text: [],
	mode: 'markers', marker: { size: 8, color: 'purple' }
};

var VORTAC= {
	type:'scattermapbox', name: 'VORTAC', hoverinfo: "text",
	lat: [], lon: [], text: [],
	mode: 'markers', marker: { size: 8, color: 'magenta' }
};

var VOR= {
	type:'scattermapbox', name: 'VOR', hoverinfo: "text",
	lat: [], lon: [], text: [],
	mode: 'markers', marker: { size: 8, color: '#996600' }
};

var NDB= {
	type:'scattermapbox', name: 'NDB', hoverinfo: "text",
	lat: [], lon: [], text: [],
	mode: 'markers', marker: { size: 8, color: '#ff6600' }
};

var TACAN= {
	type:'scattermapbox', name: 'TACAN', hoverinfo: "text",
	lat: [], lon: [], text: [],
	mode: 'markers', marker: { size: 8, color: '#009900' }
};

var GRID= {
	type:'scattermapbox', name: '10x10 nm', lat: [], lon: [],
	mode: 'lines', line: { width: 1, color: '#c8c8c8' }
	//mode: 'markers', marker: { size: 4, color: 'red' }
};

var RINVE= { // Rinvenimenti subito dopo la strage (non sono quelli recuperati durante le campagne di recupero)
	type:'scattermapbox', name: 'Rinvenimenti', hoverinfo: "text",
	lat: [], lon: [], text: [],
	mode: 'markers', marker: { size: 5, color: 'blue' }
};

var data;


// Coordinate RADAR
var RADAR= {
	//textfont: { family: 'monospace', size: 18, color: 'red' },	
	type:'scattermapbox', name: 'Antenne', hoverinfo: "text",
	text:['Marconi',  'Selenia', 'Poggio Ballone', 'Marsala', 'Capo Mele', 'Jacotenente', 'Licola' , 'Mortara', 'Poggio Renatico', 'Potenza Picena', 'Otranto', 'Siracusa'],
	lat: [41.798275,  41.806389, 42.829          , 37.82694 , 43.95825   , 41.79161     , 40.894178, 45.231413, 44.791079        , 43.36656        , 40.11656 , 37.08278  ],
	lon: [12.219387,  12.249444, 10.8804         , 12.53778 ,  8.169613  , 16.05103     , 14.040118,  8.803515, 11.493964        , 13.67392        , 18.50018 , 15.2475   ],
	mode: 'markers', marker: { size: 6, color: 'red' }, 
};

// AEROVIE
// Firenze, A14, Bolsena, PUMA, Latina, Ponza, A13, Palermo
var AYW= {
	type:'scattermapbox', name: 'Aerovie',
	lat: [45.3244, 44.5683, 44.0272, 42.618301, 42.029725, 41.5411, 40.9119, 38.0340, null, 44.8217, 44.0272],
	lon: [10.786 , 11.2   , 11.0033, 12.048600, 12.919444, 12.9181, 12.9575, 13.1774, null, 10.2983, 11.0033],
	//    VIL NDB  BOA NDB                                                                    PAR      FRZ
	mode: 'lines', line: { width: 2, color: 'black' }
};

// L'ALFA è l'attuale BEROL (v. TBT "20.56.00 =IH870= E' SULL'ALFA LA 870" e tracciati radar)
// ALFA, BRAVO, CONDOR: "Motivazione sentenza parte 1a" pag. 154
var PUNTI= {
	type:'scattermapbox', name: 'Punti rip.',
	lat: [40.2    ,  39     ,  39+35/60,  42.0333,   42.029725],
	lon: [13.01667,  13+6/60,  13+ 4/60,  11.4   ,   12.919444],
	text:[ 'ALFA' ,  'BRAVO',  'CONDOR',  '(MEDAL)', 'PUMA'],
	hoverinfo: "text",
	mode: 'markers', marker: { size: 8, color: '#9999ff' }
	//mode: 'markers', marker: { symbol: 'dentist' }
};


var layout = {
	margin: { l:0, r:0, t:0, b:0},
	hovermode: 'closest', showlegend: true,
	legend: { },
	mapbox: {
		style: '',
		center: { lat: 41.8, lon: 12.5 },
		zoom: 6, bearing: 0, pitch: 0
	}
};
if(0) {
	//layout.mapbox.style= "basic";
	layout.mapbox.style= "streets"; // Orografia e strade
	//layout.mapbox.style= "outdoors"; // come sopra
	//layout.mapbox.style= "light"; // Orografia BIANCA
	//layout.mapbox.style= "dark"; // Orografia NERA
	//layout.mapbox.style= "satellite";
	//layout.mapbox.style= "satellite-streets";
	Plotly.setPlotConfig({
		mapboxAccessToken: 'pk.eyJ1IjoiY3Jpc3RpYW5vcGkiLCJhIjoiY2pycXl1N3piMXAzODQzbnRtZzd4NzBlbiJ9.QugZVJkXpGrSJpoz_ghJqQ'
	});
} else {
	layout.mapbox.style= "white-bg"; // NON richiede la connessione ad internet (nessuna mappa visualizzata)
	//layout.mapbox.style= "open-street-map";
//	layout.mapbox.style= "carto-positron"; // Mappa BIANCA
	//layout.mapbox.style= "carto-darkmatter"; // Mappa NERA
}
