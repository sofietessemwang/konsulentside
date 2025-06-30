import React, { Fragment } from "react";

// Define the event type
type EventType = {
  heading: string;
  subHeading: string;
  direction: "top" | "bottom";
};

type TimelineProps = {
  events: EventType[];
};

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="flex flex-col gap-y-3 w-full my-4">
      <Circle />
      {events.map((event, key) => (
        <Fragment key={key}>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
            {event.direction === "top" ? (
              <EventCard
                heading={event.heading}
                subHeading={event.subHeading}
              />
            ) : (
              <div></div>
            )}
            <Pillar />
            {event.direction === "bottom" ? (
              <EventCard
                heading={event.heading}
                subHeading={event.subHeading}
              />
            ) : (
              <div></div>
            )}
          </div>
          {key < events.length - 1 && <Circle />}
        </Fragment>
      ))}
      <Circle />
    </div>
  );
};

const Circle = () => (
  <div className="rounded-full w-4 h-4 bg-customaccent mx-auto"></div>
);

const Pillar = () => (
  <div className="rounded-t-full rounded-b-full w-2 h-full bg-customaccent mx-auto"></div>
);

type EventCardProps = {
  heading: string;
  subHeading: string;
};

const EventCard: React.FC<EventCardProps> = ({ heading, subHeading }) => {
  return (
    <div className="flex flex-col gap-y-2  shadow-md rounded-xl p-4 bg-[#f7f2f0]">
      <div className=" font-bold text-lg border-b">{heading}</div>
      <div className="text-sm text-gray-700">{subHeading}</div>
    </div>
  );
};

export default Timeline;
