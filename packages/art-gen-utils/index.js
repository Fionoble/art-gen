"use strict";
exports.__esModule = true;
exports.makeRectWithRotation = exports.makeCircle = exports.randomRGBWithinRange = exports.randomRGB = exports.randomHex = void 0;
function randomHex() {
    return "#".concat(Math.floor(Math.random() * 16777215).toString(16));
}
exports.randomHex = randomHex;
function randomRGB(asObj) {
    if (asObj === void 0) { asObj = false; }
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);
    return asObj ? { red: red, green: green, blue: blue } : "rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")");
}
exports.randomRGB = randomRGB;
function randomRGBWithinRange(r, g, b, range, asObj) {
    if (asObj === void 0) { asObj = false; }
    var getWithRange = function (v) { return v - (range / 2) + (Math.random() * range); };
    var obj = {
        red: getWithRange(r),
        green: getWithRange(g),
        blue: getWithRange(b),
        toRGBString: function () { return "rgb(".concat(obj.red, ", ").concat(obj.green, ", ").concat(obj.blue, ")"); }
    };
    return asObj ? obj : "rgb(".concat(obj.red, ", ").concat(obj.green, ", ").concat(obj.blue, ")");
}
exports.randomRGBWithinRange = randomRGBWithinRange;
function makeCircle(context, args) {
    var x = args.x, y = args.y, radius = args.radius, color = args.color, stroke = args.stroke, strokeColor = args.strokeColor;
    var fillColor = color ? color : randomRGB();
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    if (stroke) {
        context.fillStyle = strokeColor ? strokeColor : fillColor;
        context.stroke();
    }
    context.fillStyle = fillColor;
    context.fill();
}
exports.makeCircle = makeCircle;
function makeRectWithRotation(context, args) {
    var x = args.x, y = args.y, width = args.width, height = args.height, rotation = args.rotation, color = args.color;
    // first save the untranslated/unrotated context
    context.save();
    context.beginPath();
    // move the rotation point to the center of the rect
    context.translate(x + width / 2, y + height / 2);
    // rotate the rect
    if (rotation)
        context.rotate(rotation * Math.PI / 180);
    // draw the rect on the transformed context
    // Note: after transforming [0,0] is visually [x,y]
    //       so the rect needs to be offset accordingly when drawn
    context.rect(-width / 2, -height / 2, width, height);
    context.fillStyle = color ? color : randomRGB();
    context.fill();
    // restore the context to its untranslated/unrotated state
    context.restore();
}
exports.makeRectWithRotation = makeRectWithRotation;
