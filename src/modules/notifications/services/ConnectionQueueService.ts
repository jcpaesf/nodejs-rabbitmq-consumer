import rabbitMq from "amqplib";
import queueConnection from "../../../config/queueConnection";
import * as Sentry from "@sentry/node";
import CreateNotificationServices, {
  INotificationProps,
} from "./CreateNotificationServices";

class ConnectionQueueServices {
  public async consumeQueue(data: any): Promise<void> {
    if (data) {
      const parsedData = JSON.parse(
        data.content.toString()
      ) as INotificationProps;

      const createNotificationServices = new CreateNotificationServices();

      await createNotificationServices.execute(parsedData);
    }
  }

  public static async buildConnection(): Promise<void> {
    try {
      const queue = queueConnection.queueNotifications;

      const connection = await rabbitMq.connect({
        protocol: queueConnection.protocol,
        hostname: queueConnection.hostname,
        port: queueConnection.port,
        username: queueConnection.username,
        password: queueConnection.password,
      });

      const channel = await connection.createChannel();

      await channel.assertQueue(queue, {
        durable: false,
      });

      const connectionQueueInstance = new ConnectionQueueServices();

      channel.consume(queue, connectionQueueInstance.consumeQueue, {
        noAck: true,
      });
    } catch (e: any) {
      Sentry.captureException(`RabbitMq connection error: ${e.message}`);

      setTimeout(() => {
        this.buildConnection();
      }, 10000);
    }
  }
}

export default ConnectionQueueServices;
