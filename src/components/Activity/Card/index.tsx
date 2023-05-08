import React from "react";
import styled from "styled-components";

import type { Activity } from "@/types/activity";
import { calculateElapsedTimeSince } from "@/utils/calculateElapsedTimeSince";

type Props = {
  activity: Activity;
};

const ActivityCard: React.FC<Props> = ({ activity }: Props) => {
  return (
    <Container>
      {
        {
          0: (
            <>
              <Dot />
              <Activity>
                <ActivityName>{activity.name}</ActivityName>
                <ActivityDetails>{activity.details}</ActivityDetails>
                <ActivityTimeElapsed>
                  depuis {calculateElapsedTimeSince(activity.timestamps.start)}
                </ActivityTimeElapsed>
              </Activity>
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
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.span<{ type?: "normal" | "spotify" | "offline" }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme, type }) => {
    if (type === "spotify") return theme.colors.success;
    if (type === "offline") return theme.colors.warning;

    return theme.colors.info;
  }};
`;

const Activity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;
`;

const ActivityName = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.weight.medium};
`;

const ActivityDetails = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.size.normal};
  font-weight: ${({ theme }) => theme.weight.regular};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 25vw;
  }
`;

const ActivityTimeElapsed = styled.div`
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.regular};
`;

export default ActivityCard;
