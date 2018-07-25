console.log('ello');
var headerSVG=null;
function headerLoaded(item, svg) {
    headerSVG = item;
    // return;
    // console.log('loaded');
    // console.log(headerSVG.children['masked'].lastChild.lastChild);
    // var maskedContents = headerSVG.children['masked'].lastChild.lastChild;
    // for (i = 1; i < headerSVG.children['masked'].lastChild.lastChild.children.length; i++){
    //     //first item is clip mask
    //     console.log('item');
    //     var item = headerSVG.children['masked'].lastChild.lastChild.children[i];
    //     item.position = item.position + new Point(0, -200);
    // }
    headerSVG.applyMatrix=false;
    updateScale();
    // maskedContents.position = new Point(450, 0);
}
project.viewSize = new Size(1200, 750);
// project.importSVG('./svg/poc_clipped.svg', headerLoaded);
project.importSVG('./svg/s2018_header.svg', headerLoaded);

//event handlers
view.onResize = function (event) {
//     // Whenever the view is resized, move the path to its center:
//     // path.position = view.center;
    // project.viewSize = new Size(window.innerWidth, 554);
    // view.onResize = function (event) {
    // view.innerWidth;    
        console.log('resize:' + view.bounds.width);
    updateScale();
}
function updateScale(){
    console.log('updateScale:');
    var w = view.bounds.width;
    var h = view.bounds.height;
    // var scaleY = height / headerSVG.bounds.height;
    if (headerSVG!=null){
        var scale = w / headerSVG.bounds.width;
        var prevPos = new Point(headerSVG.bounds.x, headerSVG.bounds.y);
        headerSVG.scale(scale);

        var newPos = prevPos + new Point(headerSVG.bounds.width / 2, headerSVG.bounds.height / 2);
        headerSVG.position = newPos;
    }
    
}