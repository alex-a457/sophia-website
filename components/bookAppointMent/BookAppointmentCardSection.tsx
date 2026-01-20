import BookAppointmentCard from "./AppointmentCard";

export function BookAppointmentCardSection() {
  const card = [
    {
      id: 1,
      imageUrl: "/assets/bookAppointment/appointMentCard-1.svg",
      header: "Schedule Your Appointment",
      innerText:
        "Choose a time that fits your schedule effortlessly. Simply select your preferred date and time, and our team will ensure your session is reserved.",
    },

    {
      id: 2,
      imageUrl: "/assets/bookAppointment/appointMentCard-2.svg",
      header: "Meet Your Jewelry Expert",
      innerText:
        "Connect with one of our experienced gemologists or stylists via a private video call. Our experts are passionate about helping you explore our collections",
    },
    {
      id: 3,
      imageUrl: "/assets/bookAppointment/appointMentCard-3.svg",
      header: "Explore Custom Options",
      innerText:
        "During your session, you’ll have the chance to browse our curated collections or discuss bespoke designs.",
    },
    {
      id: 4,
      imageUrl: "/assets/bookAppointment/appointMentCard-4.svg",
      header: "Shop with Confidence",
      innerText:
        "Complete your purchase during the session or take time to reflect before making your decision no pressure, just support.",
    },
  ];

  return (
    <div className="pb-12 pt-4">
      <div className="flex justify-center text-4xl  p-4">
        <h1>How its Works</h1>
      </div>
      <div className=" flex   flex-wrap gap-10 items-center justify-center">
        {card.map((c) => {
          return (
            <BookAppointmentCard
              key={c.id}
              url={c.imageUrl}
              headerContent={c.header}
              textContent={c.innerText}
            />
          );
        })}
      </div>
    </div>
  );
}
