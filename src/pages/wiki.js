import React from "react";
import styled from "@emotion/styled";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
`;

const WikiPage = () => {
  return (
    <Layout>
      <SEO title="Wiki" />
      <h2>Setup</h2>
      <Content>
        This section is meant to give you a brief overview on how to get this
        all up an running. In case you'd like some more technical
        details/explanations, please check out the documentation further down.
      </Content>
      <h4>Step 1: GitHub</h4>
      <Content>
        Let's face it: The fact that you're here makes it very unlikely that
        you've never used GitHub, so I'll do us a favor and skip over the{" "}
        <a href="https://github.com/join">how do I create an account</a> and{" "}
        <a href="https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template">
          how do I use a template
        </a>{" "}
        parts. But regardless, this is your moment to hop over to GitHub, copy
        the{" "}
        <a href="https://github.com/MichaBrugger/fake-api-template">template</a>{" "}
        to your own account and download the repo to your local machine.
      </Content>
      <h4>Step 2: Heroku</h4>
      <Content>
        Now it's time to create a{" "}
        <a href="https://dashboard.heroku.com/new">new app</a> on Heroku. You
        can use any name you want, but I recommend to use the same name as your
        GitHub repo. After that, you can connect your{" "}
        <a href="https://dashboard.heroku.com/apps">app</a> to your GitHub repo.
        All of this is completely free, as long as you don't upgrade your
        account. <br/>
        (There are definitely upsides to paying for a hosting-upgrade,
        especially when it comes to choosing your own domain, SSL
        certifications and general server up- and response-time, but for most
        small projects that's arguably not necessary, so let's leave it for
        another day.)
      </Content>
      <h4>Step 3: ???</h4>
      <Content>
        {" "}
        There isn't really one. I literally only wrote this down so I could use
        the <a href="https://knowyourmeme.com/memes/profit">
          ??? profit
        </a> meme{" "}
        <span role="img" aria-label="nerd-face-emoji">
          🤓
        </span>{" "}
        Your API and front-end are now hosted on Heroku and connected to your
        GitHub repo. Hurray!
      </Content>
      <h4>Step 4: Profit</h4>
      <Content>
        Ahhhh, isn't this joke great? Anyway, now all thats left is to configure
        the front-end according to your needs and then start creating your mock
        data. And if you need some inspiration/help for that all you have to do
        is keep reading.
      </Content>

      <h2>Documentation & FAQ</h2>
      <Content>
        First of all: This project is built around the amazing work that went
        into <a href="https://www.npmjs.com/package/json-server">JSON-Server</a>
        , the{" "}
        <a href="https://www.npmjs.com/package/json-server-extension">
          JSON-Server-Extension
        </a>{" "}
        and the{" "}
        <a href="https://www.gatsbyjs.com/starters/niklasmtj/gatsby-starter-julia">
          {" "}
          GatsbyJS-template
        </a>{" "}
        Julia. So, in case you can't find your answers here, you might want to
        check out their respective documentations.
      </Content>
      <h4>File Structure</h4>
      <Content>
        In order for this to work, your JSON file needs to follow a certain
        structure. The reason for this is, that every file will create it's own
        endpoint so the file needs to have something that can be referred to as
        a title. Sounds complicated? Trust me, it's really not. Let's have a
        look at a proper example:
      </Content>
      <h4>What is a static file?</h4>
      <Content>
        With 'static file' I refer to JSON files that you have already fully
        created. All you're doing is making a local file available through your
        endpoint.
      </Content>
      <h4>How can I add a static file?</h4>
      <Content>
        {" "}
        All you have to do is create a JSON file according to the structure
        defined above and, put it in the 'static' folder of your GitHub
        repository. And then wait a little bit for Heroku to rebuild your
        website.
      </Content>
      <h4>How can I add a dynamic file?</h4>

      <h4>How can I adapt the name/logo/etc of the website?</h4>
      <h4>How can I create a new subpage?</h4>
    </Layout>
  );
};

export default WikiPage;
