import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { loginAPI } from "@/components/Login/API/login"
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
import { useRouter } from "next/navigation"
export function LoginForm({
    className,
    login,
    setLogin,
    ...props
}: React.ComponentProps<"div"> & { login: boolean; setLogin: (login: boolean) => void }) {
    const loginWithGoogle = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log('Google Login Success:', tokenResponse);
            // Here you would typically send tokenResponse.access_token to your backend
        },
        onError: (error) => console.log('Google Login Failed:', error)
    });

    const [formDetails, setFormDetails] = useState({
        email: "",
        password: "",
        userType: (typeof window !== "undefined" ? localStorage.getItem("userType") || "jobseeker" : "jobseeker")
    })
    const router = useRouter();
    const handleLogin = async (e: any) => {
        alert("WOrking")
        e.preventDefault()
        try {
            const res: any = await loginAPI(formDetails)
            if (res?.res?.status === 200) {
                setTimeout(() => {
                    router.push("/recruiter")
                }, 1000);
            } else {
                toast.error(res?.error?.message || "Login failed")
            }
        } catch (error) {
            toast.error(error instanceof Error ? error.message : String(error))
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className={cn("flex flex-col gap-6 w-full max-w-sm", className)} {...props}>
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-xl">Welcome back</CardTitle>
                        <CardDescription>
                            Login with your Apple or Google account
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
                                        Login with Google
                                    </Button>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                        value={formDetails.email}
                                        onChange={(e) => setFormDetails({ ...formDetails, email: e.target.value })}
                                    />
                                </Field>
                                <Field>
                                    <div className="flex items-center">
                                        <FieldLabel htmlFor="password">Password</FieldLabel>
                                        <a
                                            href="#"
                                            className="ml-auto text-sm underline-offset-4 hover:underline"
                                        >
                                            Forgot your password?
                                        </a>
                                    </div>
                                    <Input id="password" type="password" required value={formDetails.password} onChange={(e) => setFormDetails({ ...formDetails, password: e.target.value })} />
                                </Field>
                                <Field>
                                    <Button type="submit" className="w-full" onClick={(e: React.FormEvent<HTMLButtonElement>) => handleLogin(e)}>Login</Button>
                                    <FieldDescription className="text-center">
                                        Don&apos;t have an account? <span className="cursor-pointer text-primary" onClick={() => setLogin(false)}>Sign up</span>
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
