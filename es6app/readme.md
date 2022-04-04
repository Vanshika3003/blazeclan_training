# ES 6 Features
- Block Scope definition using 'let' keyword
- Template String aka String Interpolation
    - New Syntax for building an immutable string object
- Easy Callback function using Arrow operator
- rest parameter
- Array and String Method Cahnges
- Object Oriented Programming
- Modules

# ES 6 Project Configurations
- Create Package.json
    - npm init -y
- Install Babel Service
    - Global Install
        - npm install -g @babel/cli @babel/core
    - Local Install        
        - npm install --save @bable/cli @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-methods @babel/preset-env
        
        - @babel/core: Contains set of Services for Transpiling ES6+ to Browser Compatible JavaScript
        - @bable/cli: Command Line Interface to transpile ES6+ file to ES5< aka Browser compatible JavaScript
        - @babel/plugin-proposal-class-properties : SUpport for get/set properties
        - @babel/plugin-proposal-private-methods : Support for Private methods in class
        - @babel/preset-env: Environment Configuration for babel to transopile the code
- Add the /babelrc file in project
    - This is Babel resource  Configuration file that will used during the transpilation pf Class Properties, Private methods
- Transpile the project
    - babel SOURCE-ES6-FILE.js -o TARGET-TRANSPILED-FILE.js        
        - e.g.
            - abel .\source\scope.js -o .\transpiled\scope.build.js

# ES 6 Collection Objects
- Set
    - A Collection that has data stored in Key:Value pair
    - Key is string/number and always unique
        - The Key is implicitly allocated by the Set object base on the Value stored in it  
    - Used to store non-repeated data 
    - value can be string, number or can also be an object
- Map
    - A Key:Value collection
    - Key MUST be defined explicitly
    - Key can be String, Number
    - Value can be String, number, object
    - If the Key is repeated, the the previous Key:Value will be overwritten by the new value
    - This is a best suitable collection for string large amount od data in JS Application

- WeakSet() and WeakMap()
    - used to store only Objects
    - Based on the Concept of JavaScript Object Management(?)
    - These are the weak references for data storage in browser, they are used for effective way of handling data in browser.
# ES 6 Object Oriented Programming
- class
    - default access specifier is public
        - data members
        - members functions
    - private declarations are prefixed using #
    - get/set properties
    - Abstract class using 'new.target'
        - The new.target will check which class is being instantiated
        - We can implement abstract class in ES 6 by preventing new.target from instantiating the class 
    - The inheritance using 'extends' keyword
    - No overloading by default-
        - Use JavaScript Function Invocation Pattern to implementing function Overloading
            - apply()
                - apply a function at runtime to an JS object with arguments
            - call()
                - Invoke a function dynamically
            - bind()
                - Bind an object with remote function / function will exist separately but it can be bound with the JS object remotely  

- Pattern based approach for Working with ES 6 to build a Re-Usable Library or a framework
    - Singleton creation
    - Proxy: A Mechanism for hiding teh direct access of the target object from the client/caller  
        - Proxy object
            - Proxy(targetObject, handler)
                - targetObject: An Object that has original logic with methods, properties, etc.
                - handler: The object, using which the targetObject's methods, properties will be hidden from the client/caller
                    - handler = { get(): Provide an access to properties from targetObject, set(): a way to write values to properties of targetObject, ownKeys(): To read all properties of targetObject and ownValues(): To read values of properties of the target object  }
                    -  CLIENT -- Access to Handler -- Handler Access -- targetObject 

    - Observer
        - Work with the JS Promises
    - Factory
    - Facade 