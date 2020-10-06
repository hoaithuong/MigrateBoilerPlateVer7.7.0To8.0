import React from "react";

import PageLogin from "../components/PageLogin";
import LoginForm from "../components/Auth/LoginForm";
import { useAuth } from "../context/auth";

import styles from "../components/PageLogin.module.scss";

function Login() {
    const { login, loginError } = useAuth();

    return (
        <PageLogin className={styles.Inverse} mainClassName={styles.VerticalCenter}>
            <LoginForm login={login} loginError={loginError} />
        </PageLogin>
    );
}

export default Login;
