import { Fragment } from "react";
import TimelineEvent from "./TimelineEvent/TimelineEvent";
import IssueComment from "../../IssueComment/IssueComment";
import TimelineEventSeparator from "./TimelineEventSeparator/TimelineEventSeparator";

const timelineElements = [
  { id: "timeline-event-6", description: "Timeline event 5", type: "event" },
  {
    id: "timeline-comment-2",
    description: "Issue comment 2",
    author: "John Doe",
    type: "comment",
  },
  { id: "timeline-event-5", description: "Timeline event 5", type: "event" },
  { id: "timeline-event-4", description: "Timeline event 4", type: "event" },
  {
    id: "timeline-comment-1",
    description: "Issue comment 1",
    author: "Jane Doe",
    type: "comment",
  },
  { id: "timeline-event-3", description: "Timeline event 3", type: "event" },
  { id: "timeline-event-2", description: "Timeline event 2", type: "event" },
  { id: "timeline-event-1", description: "Timeline event 1", type: "event" },
];

export default function Timeline() {
  return (
    <div aria-label="Timeline" className="flex flex-col  py-5">
      {timelineElements.map((element, index) => (
        <Fragment key={element.id}>
          {(() => {
            switch (element.type) {
              case "event":
                return (
                  <TimelineEvent
                    id={element.id}
                    description={element.description}
                  />
                );
              case "comment":
                return (
                  <IssueComment
                    id={element.id}
                    description={element.description}
                    author={element.author ?? "Unknown"}
                  />
                );
              default:
                return null;
            }
          })()}
          {index < timelineElements.length - 1 &&
            element.type === "event" &&
            timelineElements[index + 1].type === "event" && (
              <TimelineEventSeparator />
            )}
        </Fragment>
      ))}
    </div>
  );
}
