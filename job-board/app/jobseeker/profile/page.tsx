"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
    return (
        <div className="p-6 flex justify-center">
            <Card className="w-full max-w-2xl shadow-lg">
                <CardContent className="p-6 space-y-6">

                    <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                            <AvatarImage src="/favicon.svg" />
                            <AvatarFallback>RL</AvatarFallback>
                        </Avatar>

                        <div>
                            <h2 className="text-xl font-semibold">Rahil Latif</h2>
                            <p className="text-sm text-muted-foreground">
                                MERN Stack Developer
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium mb-2">About</h3>
                        <p className="text-sm text-muted-foreground">
                            Passionate MERN stack developer transitioning into AI-powered applications.
                        </p>
                    </div>

                    <Button>Edit Profile</Button>

                </CardContent>
            </Card>
        </div>
    )
}