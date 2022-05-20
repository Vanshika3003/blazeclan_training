class MyClass {
    // lets define private data members
    // prefixed with hash
    #value = 0;
    #message = "";


   constructor(v){
       // all public declarations are made using the constructor
       // using 'this' prefix
       this.x = 10;
       this.y = 20;

       // initialize the private member
       this.#value =  v;
       this.#message = "";
   }

   // Private method
   #validate(){
       if(this.#value <=0) 
        return false;
   }

   // lets define get/set properties

   // setter
   set Message(v){
       this.#message = v;
   }

   // getter
   get Message(){
       return this.#message.toUpperCase();
   }

   // public methods
   power(){
       if(!this.#validate(this.#value)) return 0;
       return Math.pow(this.x,5) + this.#value;
   }
   add(){
    if(!this.#validate(this.#value)) return 0;
       return (this.x * this.x) + 2*this.x*this.y + (this.y * this.y) +  this.#value;
   }
}