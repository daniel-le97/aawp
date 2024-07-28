
import { createRoot } from 'react-dom/client';
import App from './App';
// import { createRoot } from 'react-dom';

const app = document.querySelector("#root");
const root = app && createRoot(app);

root?.render(<App />);
