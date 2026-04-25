import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { SignUpForm } from "../SignUp/SignUpForm";

export function LoginSignup() {
    const [login, setLogin] = useState(true);
    return (
        <div className="flex flex-col gap-6">
            {login ? <LoginForm login={login} setLogin={setLogin} /> : <SignUpForm login={login} setLogin={setLogin} />}
        </div>
    )
}