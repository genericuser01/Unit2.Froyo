class Flavors {
    constructor(data) {
      
      if (typeof data === "string") {
        this.data = data.split(",");
      } else {
        this.data = data;
      }
    }

    printFlavors() {
      
        const flavors = new Map();
        for (let index = 0; index < this.data.length; index++) {
            let flav = this.data[index];
            if (flavors.has(flav)) {
                let flavnum = flavors.get(flav);
                flavnum += 1;
                flavors.set(flav, flavnum);
            } else {
                flavors.set(flav, 1);
        
            }
        
        }
        flavors.forEach (function(value, key) {
            console.log(("You Ordered," + value + " " + key + " Froyo"));
        });
    }

  }
  
  const str = prompt("Order your flavors separated by commas", "AnyFlavor you Desire");

  
  
  const n1 = new Flavors(str);
  
  n1.printFlavors(); 