import { Button } from "./components/ui/button.jsx";

function App() {
  return (
    <>
      <div className="h-screen flex justify-center items-center gap-6">
        <Button variant="reverse" size="lg">
          Hello
        </Button>
        <Button variant="reverse" size="lg">
          Click
        </Button>
      </div>
    </>
  );
}

export default App;
