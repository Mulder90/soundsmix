import App from "next/app";
import Router from "next/router";
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";

import * as gtag from "../lib/gtag";

import "../styles/index.scss";

Router.events.on("routeChangeComplete", (url) => gtag.pageView(url));

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      /* Here we call NextSeo and pass our default configuration to it  */
      <>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </>
    );
  }
}
