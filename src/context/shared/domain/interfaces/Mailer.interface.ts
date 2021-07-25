import { UserEmail } from '../../../User/domain/valueObject/UserEmail.valueObject';

export interface Mailer {
  sendMail(
    from: UserEmail,
    to: UserEmail,
    subject: string,
    html: string
  ): Promise<boolean | void>;
}
