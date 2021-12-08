// import React from 'react';
// import Options from './screens/Options';

// export default () => <Options />;

// import React from 'react';
// import Home from './screens/Home';

// export default () => <Home />;

import React from "react";
import Navigation from "./config/Navigation";
import { api } from "./util/api";

api('/latest?base=USD')
  .then((response) => {
    console.log("response", response);
  })
  .catch((error) => {
    console.log("error", error);
  });
export default () => <Navigation />;
