import Registration from "./pages/registration/Registration"
import Login from "./pages/login/Login";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Registration />}></Route>
    <Route path="/login" element={<Login />}></Route>
    </Route>
  )
)


function App() {

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
