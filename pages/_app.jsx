import * as React from "react";
import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme, StyledFonts, StyledReset } from "../.styled-components";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps,
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <StyledFonts />
          <StyledReset />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default MyApp;
