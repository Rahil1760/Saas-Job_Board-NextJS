"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "@/components/ui/sonner";

import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";

import { ReactNode, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function Providers({ children }: { children: ReactNode }) {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

    // ✅ Create QueryClient once (important)
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 1000 * 60,
                        refetchOnWindowFocus: false,
                    },
                },
            })
    );

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <QueryClientProvider client={queryClient}>
                {children}
                <Toaster position="bottom-right" />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </GoogleOAuthProvider>
    );
}