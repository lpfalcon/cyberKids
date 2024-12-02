import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import {
    ClerkLoaded,
    ClerkLoading,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from "@clerk/nextjs";
import { Loader } from "lucide-react";

export const Header = () => {

    return (
        <header className="h-20 w-full border-b-2
         border-slate-200 px-4">
            <div className="lg:max-w-screen-lg mx-auto
            flex items-center justify-between h-full">
                <Logo height={60} width={60} />
                <ClerkLoading>

                    <Loader className="h-5 w-5 text-muted-foreground
                    animate-spin" />

                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button size="lg" variant="transparent">
                                LOGIN
                            </Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </header>

    );
};