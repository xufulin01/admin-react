import React, { Fragment, useState } from "react";
import { Button, Form, Input } from "antd";
import { LoginForm } from "./LoginForm";
import { RetisterFrom } from "./RetisterForm";
export const Login = () => {

    const [loginState, setLoginState] = useState(true);
    const handelState = () => {
        setLoginState(!loginState)
    }
    return (
        <div>
            {
                loginState ? <LoginForm handelState={handelState} /> : <RetisterFrom handelState={handelState} />
            }
        </div>
    );
};
