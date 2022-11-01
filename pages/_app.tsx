import '../styles/globals.css'

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import NavBarMenu from '../Layout/NavBarMenu';
import SEO from '../next-seo.config';
import classes from "../styles/Home.module.css";
import {motion} from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
    
  )
}

export default MyApp
