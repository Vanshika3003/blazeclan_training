# React.js

- Library by Facebook
- React Project Creation
    - Using React CLI, a Project Ready Approach for working with React
    - Using Configuration with React's Object Model and WebPack
        -  WebPack, a Module Bundler that performs following
            - Using JS Object Model
            - Using CSS Files, SASS File with the help of Loaders
                - Loader: The Engine to Load Files in Node.js Runtime for WebPack
            - DevServer
                - Provide Inbuilt Node.js server to Host the React Application and Load Dependencies
        - https://www.webnethelper.com/2021/10/reactjs17x-creating-application-with.html

- React CLI
    - The 'create-react-app' CLI Project
        - npm install -g create-react-app
    - Create React Project
        - create-react-app [PROJECT-NAME]
    - React Object Model Packages
        - react
            - Base Object Model
        - react-dom
            - Manage Rendering
            - Virtual DOM
            - JSX
    - React CLI Scipts (Only for CLI Project)
        - react-scripts build
        - react-scripts text
        - react-scripts eject                              

# React Object Model

- The 'react' package
    - The 'Component' Concept
        - An Autonomous object that contains following
            - User Interface (UI) using HTML (JSX) elements
            - the Data Members aka State Properties
                - Used to pass and accept to and from UI
                - Define rendering of HTML UI aka DOM
            - methods
                - Logic
                - These can be bound with Events of HTML Elements to Update Data members and hence DOM Rendering
    - Component Types
        - Class Components, the class derived from Component&lt;P,S&gt; Base class (NOTE: This was available upto React 15 as a Main Concept, the class component is ES 6 class,but from React 16.0+ onwards, it so not preferred to use class components )   
          - React Team is not retiring or deprecating Class Components, but new development is happening with functional components   
        - Functional Components
            - Popular from React 16.0+
            - Recommended by React Community
            - Uses a Standard Function concept of JavaScript
                - No need to learn any new syntax
            - 3 Types or Syntaxes of Functional Components
                - JavaScript Function that returns HTML
                    - e.g.
                        - function MyComponent()
                          {
                            return (`HTML UI`);
                          }         
                - The Function Expression that returns HTML 
                    - e.g.
```` javascript                    
                        - const MyComponent=()=>{  return (`HTML UI`);}
````                        
                - The Constant Function Expression That contains HTML UI
                    - e.g.
```` javascript                    
                        - const MyComponent=({`HTML UI`});        
````                        
        - The Component Name is used as a Custom HTML Tag
            - e.g. If Component Name is MyComponent then it will be used for rendering as 
```` html
<MyComponent/>
````
        - The Component MUST be exported as ES 6 Module
```` javascript        
            - function MyComponent()
              {
                return (`HTML UI`);
              }  
              export default MyComponent;
````              

        - Programmable types of Components
            - Stateless Components
                - Component that does not have any data members and does not render HTML based on data, instead its has a static HTML for rendering
            - Stateful Component
                - Used for Line-of-Business (LOB) Apps
                - It has Data Members for managing HTML rendering
                - It has Methods with logic and also methods those will be executed for UI Element's events e.g. click, change, etc.      
        - What is 'State'?
            - It is data that is used and manipulated by component to define HTML rendering
            - It is used to show data to UI to 
            - It is data accepted from UI
            - The 'state' is local to component, the state property will be live only in declaring component 
            - State is handled using following 2 Objects
                - useState()
                    - a Hook, a function, that will define data property and also contains a method that is used to update the data property and hence the UI that is bound with the data property   
```` javascript
 const MyComponent =()=>{
 let [x,setX] = useState(0);
  return (
      <input type="text" value={x} onchange={(evt)=>{setX(parseInt(evt.target.value))}}/>
  );
 }

````
   
    - The 'x' is a Data Member that will be bound with the UI element
    - The 'setX' is a callback function that will be used to update the value of 'x'
    - The '0' is initial value of 'x'
    - The 'x' is bound with 'input' element and when the input element is changed using 'onchange' event the value entered into the 'input' element will be updated in 'x' 

    - What is the 'useState()' uses the 'complex JSON object'
    - e.g.

```` javascript
 const MyComponent =()=>{
 let [person,setPerson] = useState({PersonId:0,PersonName:''}});
  return (
      Person Id: 
        <input type="text" value={person.PersonId} onchange={(evt)=>{setX({...person, PersonId:parseInt(evt.target.value)})}}/>
   Person Name: 
        <input type="text" value={person.PersonName} onchange={(evt)=>{setX({...person, PersonName:evt.target.value})}}/>
  );
 }
````

    - The State update will 'MUTATE' the same object with individual proeprties
        - {...person} 

    - The 'props'   
        - The object which an 'immutable' object that is used to transfer data across components in case of Parent-Child Component relationships
        - The Object is Readonly
        - The object is live throughout the life of the React Application 

```` javascript
const MyChildComponent=(props)=>{
    render(
        <input type="text" value={props.val}/>
    )
} 
````

    - The 'val' is a property that is dynamically created for the 'MyChildComponent' by its parent
    - e.g.

```` javascript
 const MyComponent =()=>{
 let [x,setX] = useState(0);
  return (
      <input type="text" value={x} onchange={(evt)=>{setX(parseInt(evt.target.value))}}/>
      <br/>
      {/* The 'val' is a dynamic JSX attribute created by React Object Model for 'props' object
       to pass data from Parent component to child component*/}
      <MyChildComponent val={x}/>
  );
 }
````

    - the 'val = {x}' is the data passed from MyChomponet to MyChildComponent 
    - The 'props' can also be used to emit data from child component to parent component 
        - This is Parent-Child communication

    - The 'React.Context'
        - A better way to pass data across component
        - The 'props' contains the state of data throughout the component tree
        - The 'Context' is from Parent to Specif Child Component       
- Layout Components
```` html
    - <Fragment/>
    - <></>
````            
    - Provide default layout for Component's UI, instae of using div tag

- React DOM Rendering
    - The ReactDom create a virtual DOM for rendering
    - Each element in Virtual DOM contains 'key', this key will be used for monitoring changes into that element
    - Note: If you are creating DOM element dynamically based on array, then make sure that the dynamically generated DOM element is assigned with a 'key' property

- Practices to be followed while designing the React UI Components
    - If a Complex UI e.g. select,table is repeated for different data sources then consider creating reusable component.
        Either use 'props' or 'context' to pass data to reusable component
        - In the Child Component make sure that the data received from parent is validated against null, undefined, NaN, etc.   
    - If using HTML table for showing data in tabular form, then make sure that the hard-coding for Table-Header and Table Rows is avoided

- Understanding Hooks
    - They are functions which are used for providing predefined behavior to React Functional Components
        - Predefined Behavior
            - State Property Declaration, this is a data (data state) hold by the component
                - useState()
            - Maintaining State Across Components (other than props)
                - Pass data from Parent to Specific Child
                - useContext()
                    - A Function that contains a Subscription for the data (and method) passed from Parent Component component    
                    - This will read data from the Global Context object which has data provided by the parent component 
            - A Mechanism to provide an execution to some logic when component is loaded and also execute some logic when the Component is unloaded
                - useEffect()
                    - Used for AJAX Calls
                    - Subscribing and De-subscribing to explicit DOM Events aka Cleanup of resources when the component is unloaded    
            - Application State Management across the Component 
                -  useReducer()
                    - A mechanism that is used to act as an better alternative to useState() when the state is updated in multiple Stages
                            - Init, Success, Fail
    - All Standard Hooks are invoked directly at Component level, we cannot call them inside the function
        - The Standard Hook can be called inside the Custom Hook                         

- To Implement Validations for the Component, write the custom Logic with State Properties and make sure that, use HTML Form

- Using 'useEffect'
    - This is a Hook that is used for Following
        - Invoked at Functional Component level to provide and initialization code execution which we need when the component is rendered.
            - Global Event registration
            - AJAX Calls
            - Any other computations those we want to handle after the component completes its rendering
        - This is an async hook with Following syntax
            - useEffect(()=>{ INITIALIZATION LOGIC; return()=>{CLEANUP LOGIC;}  }, [DEPENDENCY-PARAMETER]);     
            - The useEffect() will be used to update the state and hence re-render the DOM Tree based on state updates. The DEPENDENCY-PARAMETER, is used to signal the useEffect() that the state is changed and component is re-rendered ao that the useEffect() can be unloaded.
                - IMP NOTE****: If the DEPENDENCY-PARAMETER is not passed, then the uesEffect() won't be unloaded and will continue its execution which will overhead the component   
    - useEffetc(): A Combination of 'componentDidMount()' and 'componentWillUnMount()'            
- AJAX Call from React App
    - Use 'axios' a promise based library for External HTTP calls
        - npm install --save axios
        - axios.get(),post(), put(),delete()
            - All methods are Async and uses promise Objects

- useReducer()
    - Alternative to useState()
    - useState(state, action)
        - action: DispatchAction
            - Execute a Callback with state update from initial to final in tow step execution
            - If (cond1) state= one
            - If (cond2) stet=two
        - The DispatchAction will immediately update the state, so if there exisits the complex Logic for State Update, then the useState() will be having challenges in updates. This is where we need useReducer() 
        - Thew useReducer() will be used to monitor state updates based on logic
    - useReducer(reducer object, initialState)  
        - initialState: The initial value to be updated in state when app is loaded. This will be updated using 'reducer' object
        -  reducer object
            - a function as follows
                - function(state, action){........ COMPLEX LOGIC ........ return updatedState;}
                - state, the initialState by default 
                    - The 'initialState', can be a value or a complex JSON object
                - action, the logic that will be a reason for updating the 'initialState' to 'updatesState'     
- creating a custom-Hook
    - a need when we want to write a wrapper for standard Hook                    

- React.js Error Boundaries
    - Use Try..catch block for handling errors in functional component and in catch block return the fallback UI
    - If the error Handling is not used or places in component, the React UI will crash in browser
    - Use Error Boundary
        -  Create a Class Component, this will act as a parent to all child components in it
        - This component will implement the 'componentDidCatch(error, log)' function to listen to any error thrown by any child component
            - error: The error thrown by child component
            - log is stackTract in the browser
        - The error will be stored in this class component using the 'getDerivedStateFromError()' property
            - This is a read-only property that will listen to the error and will pass that error to 'componentDidCatch()'    
    - Note: If using the React CLI, then make sure that the index.css will be disabling the 'iframe'  style because the React CLI (create-react-app) using 'iFrame' to show the browser error messages

- React.js Simple Page Application
    -  React-Router-DOM    
        - npm install --save react-router-dom
        - Dynamic Way of navigating across components using Resource Based Routes
        - Works on the top of React.js
        - RICH Object Model and Features for routing
            - BrowserRouter
                - Component that contains objet Model for Routing 
                - Routes, as a Child of BrowserRouter that executes the Routing Object model into the browser  
            - Outlet

                - An container when the Component in Route will be mounted and executed    
            - Switch
                - The Query Table aka Route Table that defines Route expressions e.g. path and element
            - Route
                - Provides Properties like 'path', for URL and 'element' that accepts the component  
            - Link          
                - Represents the navigation link
                - It has 'to' property to navigate to the path
            - useRouteMatch
                - For finding the out the URL match so that parameters from it can be read using the 'useParams' hook    
            - useNavigate
                - This will be used to read the Route URL so that the Route Parameters can be read
                - Use this hook to navigate  explicitly to the component     