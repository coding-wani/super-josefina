import { Fragment } from "react";
import TimelineEvent from "./TimelineEvent/TimelineEvent";
import TimelineEventSeparator from "./TimelineEventSeparator/TimelineEventSeparator";

const timelineEvents = [
  { id: "timeline-event-1", description: "Timeline event 4" },
  { id: "timeline-event-2", description: "Timeline event 3" },
  { id: "timeline-event-3", description: "Timeline event 2" },
  { id: "timeline-event-4", description: "Timeline event 1" },
];

export default function Timeline() {
  return (
    <div aria-label="Timeline" className="flex flex-col px-2.5 py-5">
      {timelineEvents.map((event, index) => (
        <Fragment key={event.id}>
          <TimelineEvent id={event.id} description={event.description} />
          {index < timelineEvents.length - 1 && <TimelineEventSeparator />}
        </Fragment>
      ))}
    </div>
  );
}
