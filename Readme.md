
##Install
```
npm install git+ssh://git@github.com:FireEmbers/gisclient.git
```

##Usage

```
var postgisClient = require('postgisClient');

//N,S,E,W are the coordinates in Easting/norting coordinates of the clc2006 maps
//rows and cols are the rows and columns of the terrain grid or raster
var boundaries = { 
  north: N,
  south: S,
  east: E,
  west: W,
  r: rows,
  c: cols };


//Choose which database you wan't to access 
var type = 'grass' || 'postgis';

postgisClient(boundaries, type, function(data){console.log(data)});

```


