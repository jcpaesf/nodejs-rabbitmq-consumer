export interface INotificationProps {
  message: string;
}

export default class CreateNotificationServices {
  public async execute(data: INotificationProps): Promise<void> {
    console.log(data);
  }
}
