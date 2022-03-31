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
    - babel SOURCE-ES6-FILE.js -ouput TARGET-TRANSPILED-FILE.js             
