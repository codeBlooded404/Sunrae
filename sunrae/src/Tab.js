//https://www.npmjs.com/package/react-helmet
//https://www.freecodecamp.org/news/react-helmet-examples/

//to change tab info

import React from "react";
import { Helmet } from "react-helmet";

const Tab = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} - SunRae Designs`}</title>
    </Helmet>
  );
};

export default Tab;
