import moment from "moment";

export function isActive(lastMessageDate) {
  const time = moment(`${lastMessageDate}+0000`).unix();
  const now = moment().unix();
  const difference = now - time;

  if (difference > 3600) return "few hours ago";
  if (difference > 60) return `${Math.floor(difference / 60)} m ago`;
  return 0;
}
