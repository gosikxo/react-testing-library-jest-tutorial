import Login from './components/Login';

function App () {
  const a = 2;
  const b = 3;
  return (
    <div className="App">
      <a href='#'>Learn react</a>
      <ul>
        <li>Orange</li>
        <li>Apple</li>
        <li>Banana</li>
      </ul>
      <h1 data-testid='mytestid'>Hello</h1>
      <span title='sum'>{a + b}</span>
    </div>
  );
}

export default App;