class Abstract {
    // decide if the class can be instantiated
    constructor() {
        if(new.target === Abstract){
            throw new TypeError("Sorry!!! Abstract class cannot be instantiated");
        }
    } 

    printMessage(msg){
        return `The message ${msg}`
    }
}