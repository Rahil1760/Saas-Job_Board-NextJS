"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchUsers } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { CardTitle, Card, CardHeader, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

// export default function UsersPage() {
//     // ✅ FIXED: Use short syntax
//     const { data: users, isLoading, error, refetch } = useQuery({
//         queryKey: ["users"],
//         queryFn: fetchUsers,
//     });

//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>Error: {(error as Error).message}</div>;

//     return (
//         <div>
//             <h1>Users</h1>

//             <Button onClick={() => refetch()}>Refresh</Button>

//             <ul>
//                 {users?.map((user: any) => (
//                     <li key={user.id}>{user.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }


export default function UserPage() {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers
    })
    // mutation function here for optimistic data updates
    const { mutate, isPending } = useMutation({
        mutationFn: async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: "John Doe",
                    email: "[EMAIL_ADDRESS]",
                }),
            });
            return res.json();
        },
        onSuccess: () => {
            refetch();
        },
    });
    return (
        <div>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>Error : {(error as Error).message}</h1>
            ) : (
                <>
                    <h1>Users</h1>
                    <ul>
                        {data?.map((user: any) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </>
            )}
            <Button onClick={() => refetch()}>Refresh</Button>
            {/* use mutate */}
            <Button onClick={() => { useMutation }}>Add User</Button>
        </div>

    )
}
