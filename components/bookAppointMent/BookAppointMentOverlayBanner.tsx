import { Button } from "@heroui/react";
import { AppButton } from "../ui/AppButton";

const HeaderText = ["Personalized", "Guidance,", "Anytime,", "AnyWhere"];
const Headers = HeaderText.map((item, i) => {
  return <h1 key={i}>{item}</h1>;
});
const TextContent =
  "  At Lunara, we understand the importance of finding the perfect piece of jewelry. Our virtual appointments connect you with our expert gemologists and stylists, offering personalized guidance tailored to your needs.";

export function AppointmentOverLay() {
  return (
    <div className="relative z-10 flex  h-full items-center  justify-start md:justify-start  lg:justify-end ">
      <div className="relative h-[50%] w-full  top-[25%] lg:top-0 md:w-full md:h-[50%] lg:h-full lg:w-[50%] bg-black/30 text-white ">
        <div className="relative top-[30%]  pl-8 ">
          <div className="text-md  md:text-2xl  lg:text-5xl flex w-[40%] md:w-[60%] lg:w-[60%] flex-wrap ">
            {Headers}
          </div>
          <div className="w-[80%]  mt-2 md:mt-3  text-xs md:text-sm lg:text-lg">{TextContent}</div>
          <div className="relative top-3 sm:top-2 md:top-5 lg:top-6 size-3">
            <AppButton className="bg-black/0 border-2  border-[var(--color-white)]text-[var(--color-primary-bg)] px-7 py-2 rounded-full">
              Book Appointment
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
}
