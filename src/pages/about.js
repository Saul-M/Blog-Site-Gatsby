// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle={"About Me"}>
        <div className="main">
          <h2><b>Saul Martinez Valencia</b></h2>
          <p>
          Adaptable Computer science major (3.72 GPA) currently attending Cal-State Fresno , with 3+ years of work 
          experience. Aiming to leverage a proven knowledge of advanced technology, programming, and network 
          security skills to successfully fill the position role at your company. Frequently praised as efficient by my 
          peers, I can be relied upon to help your company achieve its goals.
          </p>
        </div>
        


        <div className="info">
          <h4><b>TECHNICAL KNOWLEDGE</b></h4>
          <ul>
            <li><b>Languages:</b> C++, Java, Python, Sql, Html, CSS, Haskell, Gatsby, React</li>
            <li><b>Systems:</b> Windows, Linux</li>
            <li><b>Applications:</b>Word, Excel, DB Browser, Visual Studio Code , Pycharm, Replit, Git</li>
          </ul>
          <h4><b>INTERESTS</b></h4>
          <ul>
            <li><b>Language:</b>English (native), Spanish (native)</li>
            <li><b>Fun:</b>Crocheting , Playing Board Games, Cooking</li>
          </ul>
        </div>
      </Layout>
    </main>
  );
};

// Rest of the component...

export const Head = () => <Seo title="About Me" />;
// Step 3: Export your component
export default AboutPage;