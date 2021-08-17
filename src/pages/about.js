import React from "react";
import styled from "@emotion/styled";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Content>
        <div>
          <h2>Credits</h2>
          <Content>
            As mentioned in multiple places, this project is an adaption of the great work that went into JSON Server and it's extension. That library is definitely doing the heavy lifting here. What I did was to take their existing solutions and embed them in GatsbyJS and, through this, make them more accessible for other people. 
            JSON Server allows you 
          </Content>
          <h2>What is Fake API good for?</h2>
          <Content>
          It's a GitHub template that allows you to create and host a simple JSON REST API and both statically and dynamically generate mock data for it's endpoints, and all of that within a few minutes. It's been super helpful for our projects, since unlike other (free) solutions, we are completely flexible about the format and extent of the data we handle with it. I'm aware that there are definitely less blown-up solutions for the underlying problem, but if someone out there finds it useful as we did: feel free to use it and drop me a message in case something's not working 😉
          </Content>
        </div>
      </Content>
    </Layout>
  );
};

export default IndexPage;
