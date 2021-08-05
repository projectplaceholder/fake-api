import React from "react";
import styled from "@emotion/styled";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Content>
        <div>
          <h2>About</h2>
          <p>
            We were in need for some mock data for our project. Like literally,
            a copy-pasta JSON file would have done the job, but you know how it
            is Fast forward a few hours and yes, I <b>really</b> had to make it
            a REST API, give it an interface, allow for both static and dynamic
            data creation, host it... I mean, I had no choice, right?{" "}
            <span role="img" aria-label="upside-down-smile-emoji">
              🙃
            </span>
          </p>
          <p>
            Anyway, luckily it didn't take me too long to do this. And the main
            reason for that is that I was able to use the amazing tools other
            people already created. In case you are interested in replicating
            this or build something similar, you can find the full project with
            all the references on{" "}
            <a href="https://github.com/projectplaceholder/fake-api">GitHub</a>{" "}
            or you can read the little intro down here (it got a bit late, but
            promise I'm gonna write soon{" "}
            <span role="img" aria-label="fingers-crossed-emoji">
              🤞🏽
            </span>
            ).
          </p>
        </div>
      </Content>
    </Layout>
  );
};

export default IndexPage;
