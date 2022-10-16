import Layout from "./components/Layout";
import Login from "./views/Login";
const user = false;
function App() {
  if (user) {
    return <Layout />;
  } else {
    return <Login />;
  }
}

export default App;
