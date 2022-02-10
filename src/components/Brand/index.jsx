import React from "react";

import { Google, Slack, Atlassian, Dropbox, Shopify } from "./imports";
import { BrandContainer } from "./components";

const Brand = () => {
  return (
    <BrandContainer>
      <div>
        <img src={Google} alt="Google logo" />
      </div>
      <div>
        <img src={Slack} alt="Slack logo" />
      </div>
      <div>
        <img src={Atlassian} alt="Atlassian logo" />
      </div>
      <div>
        <img src={Dropbox} alt="Dropbox logo" />
      </div>
      <div>
        <img src={Shopify} alt="Shopify logo" />
      </div>
    </BrandContainer>
  );
};

export default Brand;
