// eslint-disable-next-line max-classes-per-file
import { mockResetPasswordResult } from '@/domain/test';
import {
  AddResetPassword,
  AddResetPasswordParams,
  AddResetPasswordResult,
} from '@/domain/usecases/reset-password/add-reset-password';
import {
  SendLinkResetPassword,
  SendLinkResetPasswordParams,
} from '@/domain/usecases/reset-password/send-link-reset-password';
import { ApplyResetPassword, ApplyResetPasswordParams } from '@/domain/usecases/reset-password/apply-reset-password';

export class AddResetPasswordSpy implements AddResetPassword {
  resetPasswordResult = mockResetPasswordResult();

  addResetPasswordParams: AddResetPasswordParams;

  async add(resetPassword: AddResetPasswordParams): Promise<AddResetPasswordResult> {
    this.addResetPasswordParams = resetPassword;
    return this.resetPasswordResult;
  }
}


export class SendLinkResetPasswordSpy implements SendLinkResetPassword {
  sendLinkResetPasswordParams: SendLinkResetPasswordParams;

  sendMail(data: SendLinkResetPasswordParams): Promise<void> {
    this.sendLinkResetPasswordParams = data;
    return Promise.resolve(undefined);
  }
}


export class ApplyResetPasswordSpy implements ApplyResetPassword {
  applyResetPasswordParams: ApplyResetPasswordParams;

  changed: boolean = true;

  async apply(applyResetPassword: ApplyResetPasswordParams): Promise<boolean> {
    this.applyResetPasswordParams = applyResetPassword;
    return this.changed;
  }
}
