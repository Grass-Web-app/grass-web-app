import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/routing/Router";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <>
    <head>
      <title>Fustadesing</title>
      <link rel="icon" href={"/pasto.png"} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link key={0} rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@1,700&family=Raleway:wght@100;400&family=Source+Sans+Pro:wght@200;400&display=swap"
        rel="stylesheet"
      />
    </head>
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Router />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </>
);
