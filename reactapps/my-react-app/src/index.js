import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import components here
import App from './App';
import DepartmentComponent from './components/ass-22-april/departmentcomponent';
import CheckboxComponent from './components/ass-22-april/checkboxcomponent';
import CalculatorComponent from './components/ass-22-april/calculatorcomponent';

import ContexctProviderComponent from './components/contextprovidercomponent/contextprovidercomponent';
import FormValidationComponent from './components/ass 26-april/FormValidationComponent';
import ToggleComponent from './components/lifecyclewitheffect/togglecomponent';
import AjaxCallComponent from './components/useeffectajaxcomponent/ajaxcallcomponent';
import UseCustomHookReducerComponent from './components/ass 29-april/usecustomhookcomponent';
import ContainerComponent from './components/errorchecks/simpleerrorcheckcomponent';
import ContainerComponentWithErrorBoundary from './components/errorchecks/errorcondarycomponent';
import ListDepartmentsComponent from './components/ass 2-may/listdepartmentscomponent';
import EventTestComponent from './componentsfortest/eventtestcomponent';

import HelloTestComponent from './componentsfortest/hellotestcomponent';
// Importing Bootstrap css
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import MainRouterComponent from './components/ass 2-may/mainroutercomponent';
import ApplicationComponent from './components/ass 2-may/applicationcomponent';
import UploadComponent from './components/ass 12-may/uploadcomponent'

// Point to the <div> rag in index.html that is present
// in the public
const root = ReactDOM.createRoot(document.getElementById('root'));
// The App Component will be rendered
// Mount the Out HTML generated from returned DOM
// of the Component in the 'root' element 
const Message = 'WelCome';
root.render(
  <React.StrictMode>
    {/* The 'message' is a props type thata is passed by the Root to DepartmentComponent */}
    {/* <DepartmentComponent /> */}
    {/* <FormValidationComponent /> */}
    {/* <UseCustomHookReducerComponent /> */}
    {/* <EventTestComponent></EventTestComponent> */}
    <UploadComponent />
    {/* <BrowserRouter>
      <ApplicationComponent></ApplicationComponent>
    </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





// import React from "react";
// import ReactDOM from "react-dom/client";

// import { createStore, compose } from "redux";

// import { Provider } from "react-redux";

// import "./index.css";
// import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import MainReduxComponent from "./components/reduxapp/mainreduxcomponent";
// import reportWebVitals from "./reportWebVitals";

// // import reducer
// import reducers from "./components/reduxapp/reducers/reducer";

// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// // create a store

// let store = createStore(reducers, enhancer);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // configure the store with the application
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <MainReduxComponent></MainReduxComponent>
//     </Provider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




//SAGA
// import React from "react";
// import ReactDOM from "react-dom/client";

// import { createStore, compose, applyMiddleware } from "redux";

// // import the createSalaMiddleware so that the current app can use it
// import createSagaMiddleware from 'redux-saga';

// import { Provider } from "react-redux";

// import "./index.css";
// import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import MainReduxSAGAomponent from "./components/ass 5-may/mainsagacomponent";

// import reportWebVitals from "./reportWebVitals";



// // import reducer
// import reducers from "./components/sagaapp/reducers/reducers";
// // import saga
// import rootSaga from "./components/sagaapp/sagas/sagas";
// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// // create a Saga Middleware Object
// // Initialization the Middleware for the current store and hence the application
// const sagaMiddleware = createSagaMiddleware();


// // create a store
// // create a store with saga middleware
// // the store knows that there may be async actions
// let store = createStore(reducers, applyMiddleware(sagaMiddleware));

// // keep the SAGA Middleware running at application level
// sagaMiddleware.run(rootSaga);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("storee", store);
// // configure the store with the application
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <MainReduxSAGAomponent></MainReduxSAGAomponent>
//     </Provider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();