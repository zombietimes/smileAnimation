var ZTIMES = ZTIMES || {};

ZTIMES.VIEW = {
  init: function(){
    this.createObj();
    this.start();
  },
  test: function(){
  },
  createObj: function(){
    const layerShape = {
      gridX:'#Center',
      w:400,h:600,
      r:0,
    };
    this.layerFloor = ZTIMES.SCREEN.AddObj({
      name:'layerFloor',
      merge_Link:ZTIMES.SCREEN.Layer,
      shape:layerShape,
      colors:ZTIMES.BUILTIN.COLORS.TRANSPARENT,
      children:{
        'face':{
          merge_Link:ZTIMES.SCREEN.Element,
          shape:{
            gridX:0,gridY:4,
            radius:30,
          },
          colors:{font:'White',stroke:'Green'},
          events:{
            '#Setup':function(self){
              const shape = self.params.shape;
            },
          },
        },
      },
    });
    this.layerUpdate = ZTIMES.SCREEN.AddObj({
      name:'layerUpdate',
      merge_Link:ZTIMES.SCREEN.Layer,
      shape:layerShape,
      colors:ZTIMES.BUILTIN.COLORS.TRANSPARENT,
      children:{
        'eyeLeft':{
          merge_Link:ZTIMES.SCREEN.Element,
          shape:{
            radius:6,
          },
          colors:{font:'White',stroke:'Green'},
          events:{
            '#Setup':function(self){
              const face = ZTIMES.SCREEN.GetStructObj('layerFloor face');
              const faceShape = face.params.shape;
              const faceCenterX = faceShape.x+faceShape.w/2;
              const faceCenterY = faceShape.y+faceShape.h/2;
              const shape = self.params.shape;
              const centerOffset = shape.radius;
              const offsetX = -10;
              const offsetY = -10;
              shape.x = faceCenterX-centerOffset+offsetX;
              shape.y = faceCenterY-centerOffset+offsetY;
            },
          },
        },
        'eyeRight':{
          merge_Link:ZTIMES.SCREEN.Element,
          shape:{
            radius:6,
          },
          colors:{font:'White',stroke:'Green'},
          events:{
            '#Setup':function(self){
              const face = ZTIMES.SCREEN.GetStructObj('layerFloor face');
              const faceShape = face.params.shape;
              const faceCenterX = faceShape.x+faceShape.w/2;
              const faceCenterY = faceShape.y+faceShape.h/2;
              const shape = self.params.shape;
              const centerOffset = shape.radius;
              const offsetX = 10;
              const offsetY = -10;
              shape.x = faceCenterX-centerOffset+offsetX;
              shape.y = faceCenterY-centerOffset+offsetY;
            },
          },
        },
        'nose':{
          merge_Link:ZTIMES.SCREEN.Element,
          visible:'#Hide',
          shape:{
            radius:1,
          },
          colors:{font:'White',stroke:'Green'},
          events:{
            '#Setup':function(self){
              const face = ZTIMES.SCREEN.GetStructObj('layerFloor face');
              const faceShape = face.params.shape;
              const faceCenterX = faceShape.x+faceShape.w/2;
              const faceCenterY = faceShape.y+faceShape.h/2;
              const shape = self.params.shape;
              const centerOffset = shape.radius;
              const offsetX = 0;
              const offsetY = 0;
              shape.x = faceCenterX-centerOffset+offsetX;
              shape.y = faceCenterY-centerOffset+offsetY;
            },
          },
        },
        'mouse':{
          merge_Link:ZTIMES.SCREEN.Element,
          shape:{
            w:30,h:10,r:5,
            moves:{
              velocity:{x:0,y:0},
              seqList:[
                {name:'smile1',shapeList:[
                  {shapeKind:'#Curve',start:{x:8,y:6},end:{x:24,y:6},cp1:{x:14,y:10},cp2:{x:18,y:10}},
                  {shapeKind:'#Curve',start:{x:8,y:6},end:{x:8,y:16},cp1:{x:2,y:6},cp2:{x:2,y:10}},
                  {shapeKind:'#Curve',start:{x:8,y:16},end:{x:24,y:16},cp1:{x:14,y:20},cp2:{x:18,y:20}},
                  {shapeKind:'#Curve',start:{x:24,y:16},end:{x:24,y:6},cp1:{x:30,y:10},cp2:{x:30,y:6}},
                ]},
                {name:'smile3',shapeList:[
                  {shapeKind:'#Curve',start:{x:8,y:6},end:{x:24,y:6},cp1:{x:14,y:2},cp2:{x:18,y:2}},
                  {shapeKind:'#Curve',start:{x:8,y:6},end:{x:8,y:16},cp1:{x:2,y:10},cp2:{x:2,y:16}},
                  {shapeKind:'#Curve',start:{x:8,y:16},end:{x:24,y:16},cp1:{x:14,y:12},cp2:{x:18,y:12}},
                  {shapeKind:'#Curve',start:{x:24,y:16},end:{x:24,y:6},cp1:{x:30,y:16},cp2:{x:30,y:10}},
                ]},
              ],
              // action: function(self){
              // },
            },
            clears:{
              offsetX:1,offsetY:1,
              w:40,h:20,
            },
          },
          colors:{font:'White',stroke:'Green'},
          events:{
            '#Setup':function(self){
              const face = ZTIMES.SCREEN.GetStructObj('layerFloor face');
              const faceShape = face.params.shape;
              const faceCenterX = faceShape.x+faceShape.w/2;
              const faceCenterY = faceShape.y+faceShape.h/2;
              const shape = self.params.shape;
              const centerOffsetX = shape.w/2;
              const centerOffsetY = shape.h/2;
              const offsetX = 0;
              const offsetY = 10;
              shape.x = faceCenterX-centerOffsetX+offsetX;
              shape.y = faceCenterY-centerOffsetY+offsetY;
            },
          },
        },
      },
    });
    this.layerUI = ZTIMES.SCREEN.AddObj({
      name:'layerUI',
      merge_Link:ZTIMES.SCREEN.Layer,
      shape:layerShape,
      colors:ZTIMES.BUILTIN.COLORS.TRANSPARENT,
    });
  },
  start: function(){
    const mouse = ZTIMES.SCREEN.GetStructObj('layerUpdate mouse');
    ZTIMES.SCREEN.MOVE.AddMove(mouse);
  },
  stop: function(){
    ZTIMES.SCREEN.MOVE.StopAnimate();
  },
};

ZTIMES.RUN = {
  debug: function(){
    ZTIMES.SCREEN.DebugSetStructObj([
      // 'layerFloor face',
      // 'layerUpdate eyeLeft',
      // 'layerUpdate mouse',
    ],function(name){
      console.log('[Debug] '+name);      //BreakPoint here!
    });
  },
  init: function(){
    ZTIMES.CRYPTOGRAPH.init();
    ZTIMES.SECRETDB.init();
    ZTIMES.GRID.init();
    ZTIMES.SCREEN.init();
    ZTIMES.BUILTIN.init();
    ZTIMES.VIEW.init();
  },
  test: function(){
    ZTIMES.SCREEN.test();
    ZTIMES.VIEW.test();
  },
};
ZTIMES.RUN.debug();
ZTIMES.RUN.init();
ZTIMES.RUN.test();
