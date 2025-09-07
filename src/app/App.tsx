import "./App.css";
import { RouterProvider } from "react-router";
import router from "@/app/routes/app-router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
