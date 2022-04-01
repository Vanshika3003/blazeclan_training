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