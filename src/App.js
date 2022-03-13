import logo from './logo.svg';
import './App.css';
import FunComponent from "./components/FunComponent";
import MyClass from "./components/myClass";
import Name from "./components/Name";
import Example from './components/Example';
import Example2 from './components/Example2';
import Form from './components/Form';
import MyFragmant  from './components/MyFragmant';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  function clicked(){
    alert('Clicked')
  }
  return (
    <div className="container">
    

      {/* <h1> Hello React app</h1> */}
    {/*<FunComponent name="tasnuva"/>*/}
    {/* <Name /> */}
      {/*<MyClass email="tasnuva@gmail.com" myClick={clicked}/>*/}
      {/* <Example names={['Python', 'Java', 'JavaScript', 'C#']} />
      <Example2 names={['React', 'React Native', 'JavaScript', 'Django']} /> */}
      {/* <Form /> */}
      <MyFragmant />
    </div>
  );
}

export default App;
