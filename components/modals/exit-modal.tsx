"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useExitModal } from "@/store/use-exit-model";
import { useRouter } from "next/navigation";
import Image from "next/image";


export const ExitModal = () => {

    const router = useRouter();
    const { isOpen, close } = useExitModal();

    return (

        <Dialog
            open={isOpen}
            onOpenChange={close}
        >
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="flex items-center w-full
                    justify-center mb-5">
                        <Image
                            src="/mascotSad.svg"
                            alt="Mascot"
                            height={100}
                            width={100}
                        />
                    </div>
                    <DialogTitle className="text-center font-bold
                    text-2xl">
                        Are you absolutely sure?
                    </DialogTitle>
                    <DialogDescription className="text-center">
                        You are about to leave the lesson. Are you sure?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">

                    <div className="flex flex-col gap-y-4 w-full">

                        <Button
                            variant="primary"
                            className="w-full"
                            size="lg"
                            onClick={close}
                        >
                            Keep Learning
                        </Button>

                        <Button
                            variant="dangerOutline"
                            className="w-full"
                            size="lg"
                            onClick={() => {
                                close();
                                router.push("/learn");
                            }}
                        >
                            End Session
                        </Button>

                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};