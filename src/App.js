import { Footer, Header } from "./frontend/components";
import { AllRoutes } from "./frontend/routes";

function App() {
  return (
    <div className="App">
      <Header />

      <AllRoutes />

      <Footer />
    </div>
  );
}

export default App;
