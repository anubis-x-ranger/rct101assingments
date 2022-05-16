import "./App.css";

function App() {
  const os = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const com = [
    { type: "square", name: "Samsung" },
    { type: "square", name: "HTC" },
    { type: "disc", name: "Micromax" },
    { type: "circle", name: "Apple" },
  ];
  return (
    <div>
      <h1>Mobile Operating System</h1>
      {os.map((os) => OperatingSystem(os))}
      <h1>Mobile Manufacturers</h1>
      {com.map((man) => Manufacturers(man))}
    </div>
  );
}

function OperatingSystem(os) {
  return (
    <ul>
      <li>{os}</li>
    </ul>
  );
}
function Manufacturers({ type, name }) {
  return (
    <ul>
      <li className={type}>{name}</li>
    </ul>
  );
}

export default App;