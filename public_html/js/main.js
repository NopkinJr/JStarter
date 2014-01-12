// A root class is defined by calling Class.extend() 
var Main = Class.extend({
    out: null,
    message: "Hello World!", 
    
    // This method is called when an object of class Main 
    // is created. It is used to initialize its properties.
    init: function() {
        this.out = document.getElementById("output"); 
    }, 
    
    run: function() {
        this.out.innerHTML = this.message; 
    }
});


