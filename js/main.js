console.log('ello');
var headerSVG;
function headerLoaded(item, svg) {
    headerSVG = item;
    console.log('loaded');
    console.log(headerSVG.children['masked'].lastChild.lastChild);
    var maskedContents = headerSVG.children['masked'].lastChild.lastChild;
    for (i = 1; i < headerSVG.children['masked'].lastChild.lastChild.children.length; i++){
        console.log('item');
        var item = headerSVG.children['masked'].lastChild.lastChild.children[i];
        item.position = item.position + new Point(0, -200);
    }
    // maskedContents.position = new Point(450, 0);
}
project.viewSize = new Size(900, 554);
project.importSVG('./svg/poc_clipped.svg', headerLoaded);


// window.onload = function () {
//     // Get a reference to the canvas object
//     var canvas = document.getElementById('headerCanvas');
//     // Create an empty project and a view for the canvas:
//     paper.setup(canvas);

//     paper.importSVG('./svg/poc_clipped.svg');

//     // Create a Paper.js Path to draw a line into it:
//     var path = new paper.Path();
//     // Give the stroke a color
//     path.strokeColor = 'black';
//     var start = new paper.Point(100, 100);
//     // Move to start and draw a line from there
//     path.moveTo(start);
//     // Note that the plus operator on Point objects does not work
//     // in JavaScript. Instead, we need to call the add() function:
//     path.lineTo(start.add([200, -50]));
//     // Draw the view now:
//     paper.view.draw();
// }