const math = require('./math');


exports.addNumbers = (a, b) => math.add(a, b); 

exports.mulNumbers = (a, b) => math.mul(a, b);

exports.getTime = () => (new Date()).getTime();