import { Button } from "@heroui/react";
import { AppButton } from "../ui/AppButton";

const HeaderText = ["Personalized", "Guidance,", "Anytime,", "AnyWhere"];
const Headers = HeaderText.map((item,i) => {
  return <h1 key={i}>{item}</h1>;
});
const TextContent =
  "  At Lunara, we understand the importance of finding the perfect piece of jewelry. Our virtual appointments connect you with our expert gemologists and stylists, offering personalized guidance tailored to your needs.";

export function AppointmentOverLay() {
  return (
    <div className="relative z-10 flex  h-full items-center sm:items-end md:items-end  lg:items-end justify-end sm:justify-start md:justify-start  lg:justify-start xl:justify-end">
      <div className=" h-full  sm:h[70%]  md:h[50%] lg:h-[40%] w-[50%]  sm:w-full md:w-full lg:w-full bg-[var(--color-black)]/30 text-[var(--color-primary-bg)]">
        <div className="relative top-[30%]  sm:top-[10%] md:top-[10%] lg:top-[10%] pl-14 sm:pl-5 gap-5 sm:gap-1">
          <div className="text-5xl sm:text-xl   flex w-[60%] sm:w-[55%] flex-wrap ">
            {Headers}
          </div>
          <div className="w-[80%] sm:w-full sm:text-xs text-wrap mt-8 sm:mt-3">
             {TextContent}
          </div>
          <div className="relative top-10 sm:top-5 ">
            <AppButton className="bg-black/0 border-2  border-[var(--color-white)]text-[var(--color-primary-bg)] px-7 py-2 rounded-full">
              Book Appointment
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
}
