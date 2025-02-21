import type React from "react";

import type { Activity } from "@/types/activity";
import Link from "@/components/ui/link";
import { calculateElapsedTimeSince } from "@/utils/calculate-elapsed-time-since";
import { Container } from "kitchn";

type Props = {
  activity: Activity;
};

const ActivityCard: React.FC<Props> = ({ activity }: Props) => {
  return (
    <Link href={"/presence"}>
      {
        {
          0: (
            <>
              <Dot />
              <Container>
                <ActivityName>{activity.name}</ActivityName>
                <ActivityDetails>{activity.details}</ActivityDetails>
                <ActivityTimeElapsed>
                  depuis {calculateElapsedTimeSince(activity.timestamps.start)}
                </ActivityTimeElapsed>
              </Container>
            </>
          ),
          2: (
            <>
              <Dot type={"spotify"} />
              <Activity>
                <ActivityName>{activity.name}</ActivityName>
                <ActivityDetails>{`${activity.state} - ${activity.details}`}</ActivityDetails>
              </Activity>
            </>
          ),
          default: (
            <>
              <Dot type={"offline"} />
              <Activity>
                <ActivityName>{"Offline :("}</ActivityName>
                <ActivityDetails>
                  {"Probably doing cool things!"}
                </ActivityDetails>
              </Activity>
            </>
          ),
        }[activity.type]
      }
    </Link>
  );
};

export default ActivityCard;
