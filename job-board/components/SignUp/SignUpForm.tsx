'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useGoogleLogin } from '@react-oauth/google'
import { useState } from "react"
import axios from "axios"
interface userDataType {
    email: string,
    password: string,
}


export function SignUpForm({
    className,
    login,
    setLogin,
    ...props
}: React.ComponentProps<"div"> & { login: boolean; setLogin: (login: boolean) => void }) {
    const loginWithGoogle = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log('Google Sign Up Success:', tokenResponse);
            // Here you would typically send tokenResponse.access_token to your backend
        },
        onError: (error) => console.log('Google Sign Up Failed:', error)
    });
    const [userData, setUserData] = useState<userDataType>({
        email: "",
        password: "",
    })
    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log(userData);
            const userType = typeof window !== "undefined" ? localStorage.getItem("userType") : null
            if (!userType || !userData.email || !userData.password) {
                toast.error("Please fill all the fields", { position: "bottom-right" });
                return
            }
            const userDetails = await axios.post(`/api/signup`, {
                ...userData,
                userType
            });
            if (userDetails.status === 201) {
                toast.success("User created successfully", { position: "bottom-right" });
                setLogin(true);
            }
            else {
                toast.error(userDetails.data.message || "Signup failed", { position: "bottom-right" });
            }
        } catch (error) {
            toast.error(error instanceof Error ? error.message : String(error), { position: "bottom-right" });
        }
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className={cn("flex flex-col gap-6 w-full max-w-sm", className)} {...props}>
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-xl">Create an account</CardTitle>
                        <CardDescription>
                            Sign up with Google account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <FieldGroup>
                                <Field>

                                    <Button
                                        variant="outline"
                                        type="button"
                                        className="w-full"
                                        onClick={() => loginWithGoogle()}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        Sign up with Google
                                    </Button>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={userData.email}
                                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                        placeholder="m@example.com"
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                    <Input id="password" type="password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                                </Field>
                                <Field>
                                    <Button type="submit" className="w-full" onClick={handleSignUp}>Sign up</Button>
                                    <FieldDescription className="text-center">
                                        Already have an account? <span className="cursor-pointer text-primary" onClick={() => setLogin(true)}>Login</span>
                                    </FieldDescription>
                                </Field>
                            </FieldGroup>
                        </form>
                    </CardContent>
                </Card>
                <FieldDescription className="px-6 text-center">
                    By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                    and <a href="#">Privacy Policy</a>.
                </FieldDescription>
            </div>
        </div>
    )
}