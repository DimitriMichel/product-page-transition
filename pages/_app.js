import '../styles.css'
import React from "react";
import { AnimatePresence } from "framer-motion";
import App from "next/app";

//Next.js uses the App component to initialize pages. You can override it and control the page initialization.

class MyApp extends App {
    render() {
        const { Component, pageProps, router } = this.props;
        // <Component/> returns the component it self
        // pageProps returns the props you use to in that component. It can be any data
        // router.route returns the route your component lives on. So in our case it will be '/' or '/products/[id]'
        // exitBeforeEnter: AnimatePresence will only render one component at a time. The exiting component will finished its exit animation before the entering component is rendered
        return (
            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.route} />
            </AnimatePresence>
        );
    }
}

