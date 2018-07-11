console.log('ello');
var headerSVG;
function headerLoaded(item, svg) {
    headerSVG = item;
    return;
    console.log('loaded');
    console.log(headerSVG.children['masked'].lastChild.lastChild);
    var maskedContents = headerSVG.children['masked'].lastChild.lastChild;
    for (i = 1; i < headerSVG.children['masked'].lastChild.lastChild.children.length; i++){
        //first item is clip mask
        console.log('item');
        var item = headerSVG.children['masked'].lastChild.lastChild.children[i];
        item.position = item.position + new Point(0, -200);
    }
    // maskedContents.position = new Point(450, 0);
}
project.viewSize = new Size(1200, 750);
// project.importSVG('./svg/poc_clipped.svg', headerLoaded);
project.importSVG('./svg/s2018_header.svg', headerLoaded);

//event handlers
view.onResize = function (event) {
//     // Whenever the view is resized, move the path to its center:
//     // path.position = view.center;
//     // project.viewSize = new Size(window.innerWidth, 554);
    console.log('resize');
}