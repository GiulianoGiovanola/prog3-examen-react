import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Hero from "../Hero/Hero"
import PricesGrid from "../PricesGrid/PricesGrid";
// import Plan from "../Plan/Plan";

function PricingContent() {

  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
      <CssBaseline />
      <Hero />
      <PricesGrid/>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
