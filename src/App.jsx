
import sandpaper from "./components/sandpaper.png";
function App() {
  return (
    <div
      style={{
        backgroundColor:  '#e9d7c0',
        backgroundImage: `url(${sandpaper})`,
        backgroundSize: "auto",
        backgroundRepeat: 'repeat',
        backgroundPosition: "center",
        height: '100vh',
        width: '100vw',
        margin: 0
      }}
    >
      <h1>Welcome to My Portfolio</h1>
    </div>
  );
}

export default App
