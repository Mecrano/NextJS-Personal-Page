import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./layout.module.css";

const Layout = ({ children }: React.PropsWithChildren) => {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
