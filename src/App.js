import { Footer, Header } from "./frontend/components";
import { AllRoutes } from "./frontend/routes";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer
        theme="dark"
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />

      <Header />

      <AllRoutes />

      <Footer />
    </div>
  );
}

export default App;
