function counter() {
    var n = 0;
    return { 
    	count: function() { return n++; },
    	reset: function() { n = 0; }
    };
}
var c = counter(),
    d = counter();
console.log(c.count()) ;
console.log(c.count()) ;
console.log(d.count()) ;
console.log(d.reset()) ;
console.log(c.count()) ;
console.log(d.count()) ;
