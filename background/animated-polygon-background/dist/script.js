$(document).ready(function(){
$('.background').Geometryangle({

// handle transparent colors
mesh:{

  width: 1.2,
  height: 1.2,

  // How far should the mesh vary into z-space.
  depth: 13,

  // Number of columns for the mesh.
  columns: 20,

  columns_auto: false,

  // Number of rows for the mesh.
  rows: 7,

  rows_auto: true,
  zoom: 1,
  xRange: 0.8,
  yRange: 0.1,
  zRange: 3.0,
  ambient: 'rgb(20, 130, 173)',   // green-dominant
  diffuse: 'rgb(255, 33, 33)',   // slightly darker green for shading
  background: 'rgb(122, 112, 179)',
  speed: 0.0002,
  fluctuationSpeed: .2,
  fluctuationIntensity: 0,
  onRender: function () {
  },
  floorPosition: false,
  draw: true

}, 


lights: {

  // How many light sources belong to this light.
  count: 1,

  xyScalar: 1,

  // Position of light source.
  zOffset: 100,

   ambient: 'rgb(200, 255, 200)',  // soft green light
    diffuse: 'rgb(150, 220, 150)',
  speed: 0.001,
  gravity: 100,

  // Dampening of light's movements.
  dampening: 0.95,

  minLimit: 10,
  maxLimit: null,
  minDistance: 20,
  maxDistance: 400,
  autopilot: true,
  draw: false, //show circle
  bounds: FSS.Vector3.create(),
  step: FSS.Vector3.create(
    Math.randomInRange(0.2, 1.0),
    Math.randomInRange(0.2, 1.0),
    Math.randomInRange(0.2, 1.0)
  )

},

// specify the thickness, color, stroke, etc. 
line: {

  fill: "rgba(0, 0, 0, 0)",
  thickness: 1,
  fluctuationIntensity: 0,
  fluctuationSpeed: 0.5,
  draw: false

}, 

// Set the point attributes for the vertex. 
vertex: {

  // Radius of vertice circle.
  radius: 0,

  fill: "rgba(0, 0, 0, 0)",

  // Fluctuates opacity of vertex.
  fluctuationSpeed: 0.5,

  fluctuationIntensity: 0,
  strokeWidth: 0,
  strokeColor: "rgba(0, 0, 0, 0)",

  // Instead of setting alpha channel to zero
  // Set draw to false to avoid computing.
  draw: false

}

});
});