import { Provider } from "react-redux";
import { AppRouter } from "./components/routers/AppRouter";
import { store } from "./store/store";
import './styles/App.css'


function App() {
  return (
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    
  );
}

export default App;
