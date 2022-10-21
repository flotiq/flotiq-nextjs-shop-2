import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../sections/Contact';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-grotesque', ...additionalClass].join(' ')}>
        <Head />
        <Header />
        {children}
        <Contact
            logoImage="/assets/planty-logo.svg"
            additionalClass={['my-5']}
            formHeaderText="Connect with us"
            nameInputLabel="Name"
            emailInputLabel="Email"
            messageInputLabel="Message"
            buttonLabel="Send"
            phoneNumber="+123 456 789"
            address="Demo Street"
            emailAddress="hello@world.com"
        />
        <Footer />
    </main>
);

export default Layout;
