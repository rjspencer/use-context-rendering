import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { GlobalStateProvider } from "./providers";
import { ComplexStateProvider } from "./providers/complexStateProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

/** 
 * Strict mode double renders to ensure hooks are working correctly
 * Useful while developing, but...
 * Understanding this demo might work better without
 * 
root.render(
  <StrictMode>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </StrictMode>
);
*/

root.render(
  <GlobalStateProvider>
    <ComplexStateProvider>
      <App />
    </ComplexStateProvider>
  </GlobalStateProvider>
);
