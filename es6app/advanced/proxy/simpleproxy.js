// Actual Target Object
class Target {
  message = "A Message from teh target object";
  data = 1000;
  firstName = "Mahesh";
  lastName = "Sabnis";
  Email = "mahesh.sabnis@blazeclan.com";
  Designation = "Consultant";
  _SecretCode = "***********";
}
// define a handler
// lets trap incoming requests
const handler = {
  // target is the object being proxied
  // prop is the Property  from the target object to be proxied
  get(target, prop) {
    if (prop.startsWith("_")) {
      throw new Error("Access is denied");
    } else {
      // Provide access
      let val = target[prop];
      return val;
    }
  },
  // Trap for Write
  // target is the object being proxied
  // prop is the Property  from the target object to be proxied
  // val is value to be written into the Property
  set(target, prop, val) {
    if (prop === "Email") {
        throw new Error("Access is denied, this property cannot be written");
    } else {
        // allow property write
        target[prop] = val;
        return true;
    }
  },
  // Trap the request for reading all property names from the target object
  ownKeys(target) {
      // print only properties those are not started from '_'
      let keys = Object.keys(target);
      let props = keys.filter((p,i)=>{
          return p[0]!== '_';
      }); 
      return props;
  },
  ownValues(target,prop){
      let val = target[prop];
      return val;
  }
};

// lets define an instance of target object
const tgt = new Target();
// define a Proxy
const proxyObject = new Proxy(tgt, handler);

// Consumer that wants to read property values
function consumerRead() {
  // lets use the proxyObject to access properties

  console.log(`Data  = ${proxyObject.data}`);
  console.log(`Message  = ${proxyObject.message}`);
  console.log(`First Name  = ${proxyObject.firstName}`);
  console.log(`Last Name  = ${proxyObject.lastName}`);
  console.log(`Email  = ${proxyObject.Email}`);
  console.log(`Occupation  = ${proxyObject.Designation}`);
  // Deny the Read doe SecretCode
  console.log(`Secret Code = ${proxyObject._SecretCode}`);
}

 consumerRead();

// Consumer that wants to write the property value
function consumerWrite() {
  proxyObject.firstName += "Mr.";
  console.log(proxyObject.firstName);
  // Following Operation MUST be denied
  proxyObject.Email = "m.s@ms.com";
}

 consumerWrite();

function readProps(){
    let keys = Object.keys(proxyObject);
    console.log('====================================');
    console.log(keys);
    console.log('====================================');
    var vals = Object.values(proxyObject);
    console.log('====================================');
    console.log(vals);
    console.log('====================================');

}

readProps();