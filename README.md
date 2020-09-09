# mongoose-transaction256
package for mongoose transaction (based on mongoose transaction)

Use ```npm install mongoose-transaction256``` to install package

then

```
const transaction = require('mongoose-transaction256');
const ModelName1 = require('./models/x'); // ModelName is your model for example : User, Restaurants, Employees , ...
const ModelName2 = require('./models/y');

const one = new ModelName1({x : 1, y : 1});
const two = new ModelName2({x : 2, y : 2});

transaction(async session => {    // session is required parameter for this callback function
    await one.save({session});
    await two.save({session});
})
 .then(console.log('success'))
 .catch(console.log('fail'))
 
 ```
 
