import { toast } from "sonner"
export const loginAPI = async (payload: { email: string, password: string, userType: string }) => {
    try {

        if (!payload.userType || payload.userType === "") {
            toast.error("Please select user type")
            return
        }
        const res = await fetch(`/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.message || "Login failed");
        }
        console.log(res)
        return { res }
    } catch (error) {
        toast.error(error instanceof Error ? error.message : String(error))
    }
}

export const signUpApi = async (payload: { email: string, password: string, userType: string }) => {
    try {
        if (!payload.userType || payload.userType === "") {
            toast.error("Please select user type")
            return
        }
        const res = await fetch(`/api/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.message || "Login failed");
        }
        console.log(res)
        return { res }
    } catch (error) {
        toast.error(error instanceof Error ? error.message : String(error))
    }
}