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

const TimelineHorizontal: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto my-4 px-4 py-10">
      {/* events placed above timeline */}
      <div className="flex flex-row mb-4">
        <div className="w-4"></div>
        {/* space for first circle */}
        {events.map((event, key) => (
          <Fragment key={key}>
            <div className="flex-1 flex justify-center">
              {event.direction == "top" ? (
                <EventCard
                  heading={event.heading}
                  subHeading={event.subHeading} icon={""}                />
              ) : (
                <div className="h-20"></div> /* space for alignment */
              )}
            </div>
            <div className="w-8"></div> {/* space for pillar */}
          </Fragment>
        ))}
        <div className="w-4"></div> {/* space for last circle */}
      </div>

      {/* main horizontal timeline container */}
      <div className="flex flex-row items-center">
        <Circle />
        {events.map((event, key) => (
          <Fragment key={key}>
            <Pillar />
            <Circle />
          </Fragment>
        ))}
      </div>

      {/* Events positioned below the timeline */}
      <div className="flex flex-row mt-4">
        <div className="w-4"></div> {/* space for first circle */}
        {events.map((event, key) => (
          <Fragment key={key}>
            <div className="flex-1 flex justify-center">
              {event.direction === "bottom" ? (
                <EventCard
                  heading={event.heading}
                  subHeading={event.subHeading} icon={""}                />
              ) : (
                <div className="h-20"></div>
              )}
            </div>
            <div className="w-8"></div>
          </Fragment>
        ))}
        <div className="w-4"></div>
      </div>
    </div>
  );
};

const Circle = () => (
  <div className="rounded-full w-4 h-4 bg-customaccent mx-auto"></div>
);

const Pillar = () => (
  <div className=" bg-customaccent h-1 flex-grow min-w-8"></div>
);

type EventCardProps = {
  heading: string;
  subHeading: string;
  icon: string;
};

const EventCard: React.FC<EventCardProps> = ({ heading, subHeading }) => {
  return (
    <div className="flex flex-col gap-y-2  shadow-md rounded-sm p-4 bg-[#f7f2f0] hover:scale-110">
      <div className=" font-bold text-lg border-b">{heading}</div>
      <div className="text-sm text-gray-700 flex justify-between items-center gap-2">
        {subHeading}

        <svg
          className={`w-4 h-4 ml-1 transition-transform cursor-pointer`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default TimelineHorizontal;
