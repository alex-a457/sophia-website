"use client";

import React from "react";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/react";
import { AppButton } from "@/components/ui/AppButton";
import { cn } from "@/lib/utils";

type PurchaseSuccessModalProps = {
  trigger?: React.ReactNode;
  className?: string;

  /** Optional callbacks */
  onContinueShopping?: () => void;

  /** Optional: if you want to open it programmatically from parent */
  defaultOpen?: boolean;
};

export default function PurchaseSuccessModal({
  trigger,
  className,
  onContinueShopping,
  defaultOpen = false,
}: PurchaseSuccessModalProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure({
    defaultOpen,
  });

  const handleContinue = () => {
    onContinueShopping?.();
    onOpenChange();
  };

  return (
    <>
      {trigger ? (
        <button type="button" onClick={onOpen} className="inline-block">
          {trigger}
        </button>
      ) : null}

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur"
        hideCloseButton
        classNames={{
          base: cn(
            "rounded-2xl",
            "w-[92vw] max-w-[605px]",
            "bg-white text-[#151515]",
            className
          ),
          backdrop: "bg-black/40 backdrop-blur-sm",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <div className="relative">
              {/* close button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className={cn(
                  "absolute right-4 top-4 z-10",
                  "grid h-8 w-8 place-items-center rounded-full",
                  "text-[#151515]/70",
                  "hover:bg-black/5 active:bg-black/10"
                )}
              >
                ✕
              </button>

              <ModalBody className="px-6 pb-7 pt-10 sm:px-10 sm:pb-9 sm:pt-12">
                {/* Title */}
                <h3
                  className={cn(
                    "text-center",
                    "text-4xl xs:text-[32px]",
                    "font-medium",
                  )}
                >
                  Thank You for Your Purchase!
                </h3>

               {/* Description */}
                <p 
                  className={cn(
                    "mx-auto mt-3 max-w-[460px] text-center",
                    "text-[#AEAEAE]",
                    "text-sm xs:text-xs"
                  )}
                >
                  Your payment was successful, and your Lumina piece is now on its
                  way to you. We are thrilled to be a part of your jewelry and
                  can’t wait for you to experience the timeless elegance of our
                  jewelry.
                </p>

                {/* CTA */}
                <div className="mt-8 flex justify-center sm:mt-7">
                  <AppButton
                    type="button"
                    variant="solid"
                    tone="dark"
                    radius="full"
                    onPress={handleContinue}
                    className={cn(
                      "w-[401px] xs:w-full",
                      "h-11 sm:h-12",
                      "px-8",
                      "text-sm "
                    )}
                  >
                    Continue Shopping
                  </AppButton>
                </div>
              </ModalBody>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
