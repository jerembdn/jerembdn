import moment from "moment";

export const calculateElapsedTimeSince = (since: number | Date): string => {
  const now = moment();
  const then = moment(since);
  const duration = moment.duration(now.diff(then));

  const hours = duration.asHours();
  const minutes = duration.asMinutes();
  const secondes = duration.asSeconds();

  return `${
    hours > 1
      ? `${Math.floor(hours)}hr`
      : minutes > 1
      ? `${Math.floor(minutes)}min`
      : `${Math.floor(secondes)}sec`
  }`;
};
