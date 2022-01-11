import moment from "moment";

export function isActive(lastMessageDate) {
  const lastPost = moment(lastMessageDate).unix();
  const today = moment().unix();
  return secondsToTime(today - lastPost);
}
export function secondsToTime(millis) {
  const days = Math.floor(millis / (24 * 60 * 60));
  const hours = Math.floor((millis / (60 * 60)) % 24);
  const minutes = Math.floor((millis / 60) % 60);

  if (days > 1) return `${days} d ago`;
  if (hours > 1) return `${hours} h ago`;
  if (minutes > 2) return `${minutes} m ago`;

  return 0;
}
