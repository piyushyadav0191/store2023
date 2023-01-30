import React from 'react'
import nProgress from 'nprogress';
import Router from "next/router"
import "../components/styles/nprogress.css"
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';
import Page from "../components/Page"

Router.events.on('routeChangeStart', () => nProgress.start())
Router.events.on('routeChangeComplete', () => nProgress.done())
Router.events.on('routeChangeError', () => nProgress.done())

const MyApp = ({ Component, pageProps, apollo}) => {
  
  return (
    <ApolloProvider client={apollo}>
      <Page>
      <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  )
}

MyApp.getInitialProps = async function({Component, ctx}) {
  let pageProps = {};
  if(Component.getInitialProps){
    pageProps = await Component.getInitialProps(ctx)
  }
  pageProps.query = ctx.query;
  return {pageProps}
}
export default withData(MyApp);

