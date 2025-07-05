import { Fragment } from "react";
import TimelineEvent from "./TimelineEvent/TimelineEvent";
import IssueComment from "../../IssueComment/IssueComment";
import TimelineEventSeparator from "./TimelineEventSeparator/TimelineEventSeparator";

const timelineElements = [
  {
    id: "timeline-event-1",
    description: "John Doe created the issue",
    type: "event",
  },
  {
    id: "timeline-comment-1",
    description: "Issue comment 1",
    author: "John Doe",
    type: "comment",
  },
  {
    id: "timeline-event-2",
    description: "John Doe linked <icon + website name 1>",
    type: "event",
  },
  {
    id: "timeline-event-3",
    description: "John Doe moved from Backlog to In Progress",
    type: "event",
  },
  {
    id: "timeline-comment-2",
    description: "Issue comment 2",
    author: "Jane Doe",
    type: "comment",
  },
  {
    id: "timeline-event-4",
    description: "John Doe added label <color marker + label name 3>",
    type: "event",
  },
  {
    id: "timeline-event-5",
    description: "John Doe removed label <color marker + label name 1>",
    type: "event",
  },
  {
    id: "timeline-comment-3",
    description: "Issue comment 3",
    author: "John Doe",
    type: "comment",
  },
  {
    id: "timeline-event-6",
    description: "John Doe changed the due date from <date> to <date>",
    type: "event",
  },
  {
    id: "timeline-event-7",
    description: "John Doe added related issue <issue ID + issue name>",
    type: "event",
  },

  {
    id: "timeline-event-8",
    description:
      "John Doe self-assigned the issue and added labels <color marker + label name 2>",
    type: "event",
  },
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
