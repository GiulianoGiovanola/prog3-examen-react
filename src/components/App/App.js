import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PricesPage from "../../pages/PricesPage";
import PricePage from "../../pages/PricePage"
import { Navbar } from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <PricesPage />
            </Route>
            <Route exact path="/price/:id">
              <PricePage />
            </Route>
            <Route path="*">
              <p>Page not found</p>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
