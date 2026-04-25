"use client";

import { useState } from "react";
import { LoginForm } from "@/components/Login/LoginForm";
import { SignUpForm } from "@/components/SignUp/SignUpForm";

export default function LoginPage() {
    const [login, setLogin] = useState(true);
    
    return (
        <div className="flex flex-col gap-6">
            {login ? (
                <LoginForm login={login} setLogin={setLogin} />
            ) : (
                <SignUpForm login={login} setLogin={setLogin} />
            )}
        </div>
    );
}
