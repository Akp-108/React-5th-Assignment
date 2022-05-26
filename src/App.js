

function App() {
  return (
    <div className="App">
        <h1> HIGHER ORDER COMPONENT </h1>
        <ul>
          <li>The Higher-Order component is simply called HOC</li>
          <li>A Higher-Order component is a function that takes a component and return a new component by adding additional functionalities to the component. HOC is wrapped in the original component.</li>
          <li>Higher-Order component isnan advanced technique in React.js for reusing ligic.</li>
          <li>HOCs are not part of React API. But , it is a pattern that emerges from React's compositional nature</li>
        </ul>
        <br /><br />
        <h2>PURE COMPONENT</h2>
        <b>A React component is considered pure if it renders the same output for the same state and props. For this type of classs component,React Provides the PureComponent base class. The class Component that extend the React.PureComponent class are treated as pure component.</b>
    </div>
  );
}

export default App;
