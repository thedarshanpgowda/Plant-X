import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/AuthProvider";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Provider } from "react-redux";
import store from "./store/store";
import ErrorBoundary from "./components/Error/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/*" element={<App />} />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </I18nextProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
