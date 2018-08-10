import React from 'react';
import {Container} from 'semantic-ui-react';
// Head is a reac component which can be used any other react
// component. If we place anything inside this component, it will
// automatically be moved to head tag
import Head from 'next/head';
import Header from './Header';

export default (props) => {
    // link below will allow our browser to download the css file and use it here.

    return(     
    <Container>
      <Head>  
         <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
       </Head>
      <Header/>
        {props.children}

      
    </Container>
    );
};