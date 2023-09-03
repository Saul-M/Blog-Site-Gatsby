import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  siteTitle,
  navLinks,
  navLinkItem,
  navLinkText,
  mainSection
} from "./layout.module.css";
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql `
    query{
      site{
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    
    <div className={container}>
      <main className={mainSection}>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <h1 className={heading}>{pageTitle}</h1>
        
      </main>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;