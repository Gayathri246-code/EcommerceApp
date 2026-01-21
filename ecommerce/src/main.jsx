import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";

{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './redux/store.jsx';

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
    <App />
  </Provider>
)
