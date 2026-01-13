"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  useDisclosure,
} from "@heroui/react";
import { AppButton } from "@/components/ui/AppButton";
import { cn } from "@/lib/utils";

type ClaimDiscountModalProps = {
  trigger?: React.ReactNode; // optional custom trigger
  className?: string;
};

export default function ClaimDiscountModal({
  trigger,
  className,
}: ClaimDiscountModalProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const canSubmit = name.trim().length > 1 && email.trim().includes("@");

  const handleSubmit = () => {
    if (!canSubmit) return;

    // TODO: call API / mutation here
    // await claimDiscount({ name, email })

    // close modal
    onOpenChange();
    // reset if you want
    // setName(""); setEmail("");
  };

  return (
    <>
      {trigger ? (
        <button type="button" onClick={onOpen} className="inline-block">
          {trigger}
        </button>
      ) : (
        <AppButton
          type="button"
          variant="outline"
          tone="muted"
          radius="full"
          size="sm"
          className={cn("h-12 text-lg font-normal text-[#AEAEAE]", className)}
          onPress={onOpen}
        >
          Claim discount
        </AppButton>
      )}

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur"
        hideCloseButton
        classNames={{
          base: "rounded-2xl",
          backdrop: "bg-black/40 backdrop-blur-sm",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <div className="relative">
              {/* custom close (top-right X) */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full hover:bg-black/5 active:bg-black/10"
              >
                ✕
              </button>

              <ModalHeader className="flex flex-col items-center gap-3 pt-12">
                <h3 className="xs:text-[32px] text-4xl font-medium text-[#151515]">
                  Claim Discount
                </h3>
                <p className="xs:text-xs text-sm font-normal text-[#AEAEAE]">
                  Up to 30% OFF · Rewards
                </p>
              </ModalHeader>

              <ModalBody className="px-8 pb-8">
                <div className="mt-6 space-y-2">
                  <Input
                    value={name}
                    onValueChange={setName}
                    placeholder="Enter your name"
                    variant="bordered"
                    radius="full"
                    size="lg"
                    classNames={{
                      inputWrapper:
                        "border-neutral-200 bg-white hover:border-neutral-300 focus-within:border-neutral-400",
                      input: "text-[#151515]",
                    }}
                  />

                  <Input
                    value={email}
                    onValueChange={setEmail}
                    type="email"
                    placeholder="Enter your email"
                    variant="bordered"
                    radius="full"
                    size="lg"
                    classNames={{
                      inputWrapper:
                        "border-neutral-200 bg-white hover:border-neutral-300 focus-within:border-neutral-400",
                      input: "text-[#151515]",
                    }}
                  />

                  <AppButton
                    type="button"
                    variant="solid"
                    tone="dark"
                    radius="full"
                    fullWidth
                    className="h-11 mt-7.5"
                    isDisabled={!canSubmit}
                    onPress={handleSubmit}
                  >
                    Claim Now
                  </AppButton>

                  <p className="mt-7.5 text-center xs:text-xs text-sm font-normal text-[#AEAEAE]">
                    By signing up, you agree to receive marketing texts from
                    Johnny Dang &amp; Co at the number provided. Consent is not
                    required for purchase. Reply STOP to unsubscribe anytime.
                  </p>
                </div>
              </ModalBody>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
