interface IQueueConnectionProps {
  queueEmails: string;
  queueNotifications: string;
  hostname: string;
  protocol: string;
  port: number;
  username: string;
  password: string;
}

export default {
  queueNotifications: process.env.QUEUE_NAME_NOTIFICATIONS,
  hostname: process.env.QUEUE_HOSTNAME,
  port: Number(process.env.QUEUE_PORT),
  protocol: process.env.QUEUE_PROTOCOL,
  username: process.env.QUEUE_USERNAME,
  password: process.env.QUEUE_PASSWORD,
} as IQueueConnectionProps;
