

class Target {
   productId='67899';
   productName='Mobile';
   categoryName='Electr';
   description='White Iphone';
   manufacturer='Apple';
   price=200;


  }
  // define a handler
  // lets trap incoming requests
  const handler = {
    // target is the object being proxied
    // prop is the Property  from the target object to be proxied
    get(Target, prop) {
      if (prop.startsWith("_")) {
        throw new Error("Access is denied");
      } else {
        // Provide access
        let val = Target[prop];
        return val;
      }
    },
    // Trap for Write
    // target is the object being proxied
    // prop is the Property  from the target object to be proxied
    // val is value to be written into the Property
    set(Target, prop, val) {
      if (prop === "price") {
          throw new Error("Access is denied, this property cannot be written");
      } else {
          // allow property write
          Target[prop] = val;
          return true;
      }
    },
    // Trap the request for reading all property names from the target object
    ownKeys(Target) {
        // print only properties those are not started from '_'
        let keys = Object.keys(Target);
        let props = keys.filter((p,i)=>{
            return p[0]!== '_';
        }); 
        return props;
    },
    ownValues(Target,prop){
        let val = Target[prop];
        return val;
    }
  };
  //console.log("handler",handler.ownKeys());
 
  
  
  // lets define an instance of target object
const tgt = new Target();
// define a Proxy
const proxyObject = new Proxy(tgt, handler);
const client2 = new Proxy(tgt, handler);

// Consumer that wants to read property values
function consumerRead() {
  // lets use the proxyObject to access properties

  console.log(`PID  = ${proxyObject.productId}`);
  console.log(`PNAME  = ${proxyObject.productName}`);
  console.log(`CNAME  = ${proxyObject.categoryName}`);
  console.log(`DES  = ${proxyObject.description}`);
  console.log(`MF  = ${proxyObject.manufacturer}`);
  console.log(`PRICE  = ${proxyObject.price}`);
  // Deny the Read doe SecretCode
}

 consumerRead();

// Consumer that wants to write the property value
function consumerWrite() {
    // - ProductId, Must start from CLT1--[JS Random-Number]
    // - CategoryName will always be Either Electrical or Electronics
  if(proxyObject.categoryName!='Electrical' ||proxyObject.categoryName!='Electronics')
  {
      alert("CategoryName must be Electronics or Electrical")
  }
  if(!proxyObject.productId.startsWith('CLT1--')){
     console.log("heyy");
     proxyObject.productId= 'CLT1--'+proxyObject.productId;
  console.log("pid",  proxyObject.productId);

 }
 
}

 consumerWrite();

function readProps(){
    let keys = Object.keys(proxyObject);
    console.log(keys);
    var vals = Object.values(proxyObject);
    console.log(vals);

}

readProps();