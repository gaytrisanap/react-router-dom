import ReactDOM from 'react-dom/client';
import "./index.css";

import About from "./views/about/About"
import Contact from "./views/contact/Contact";
import Home from  "./views/home/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));

const currentPath =window.location.pathname;

if (currentPath=="/"){
    root.render(<Home/>)
}
else if (currentPath=="/About"){
    root.render(<About/>)
}
else if (currentPath=="/Contact"){
    root.render(<Contact/>)
}
else
{
    root.render(<h1>404 Not Found</h1>)
}