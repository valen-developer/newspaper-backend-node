import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { UserEmail } from '../../User/domain/valueObject/UserEmail.valueObject';
import { Mailer } from '../domain/interfaces/Mailer.interface';

export class NodeMailer implements Mailer {
  private transporter: Mail;

  constructor(transporter: TransporterMailer) {
    this.transporter = nodemailer.createTransport(transporter);
  }

  public async sendMail(
    from: UserEmail,
    to: UserEmail,
    subject: string,
    html: string
  ): Promise<boolean | void> {
    try {
      const resp = await this.transporter.sendMail({
        from: from.value,
        to: to.value,
        subject,
        html,
      });
    } catch (error) {
      console.log(error);
      throw new Error('server error');
    }
  }
}

export interface TransporterMailer {
  host?: string;
  port?: number;
  secure?: boolean;
  service?: string;
  auth: {
    user: string;
    pass: string;
  };
}
