
let x = require('lodash')

    window.min = function min(array){
           let n = _.min(array);
            return n;
        }
 
    window.max = function max(array){
           let m  = _.max(array);
            return m;
        }
        
        window.sum = function sum(){
            let add = x.reduce([12,3,2,7], function(sum, n) {
                return sum + n;
              });
              console.log(add);
        }

        