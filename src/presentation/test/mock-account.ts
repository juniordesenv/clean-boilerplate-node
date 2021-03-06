// eslint-disable-next-line max-classes-per-file
import faker from 'faker';
import { Authentication, AuthenticationParams } from '@/domain/usecases/account/authentication';
import { AddAccount, AddAccountParams } from '@/domain/usecases/account/add-account';
import { AccountModel, AuthenticationModel } from '@/domain/models';
import { mockAccountModel } from '@/domain/test';
import { LoadAccountByToken } from '@/domain/usecases/account/load-account-by-token';
import { SendLinkConfirmAccount, SendLinkConfirmAccountParams } from '@/domain/usecases/account/send-link-confirm-account';
import { ConfirmEmailAccountByConfirmEmailToken } from '@/domain/usecases/account/confirm-email-account-by-confirm-token';

export class AddAccountSpy implements AddAccount {
  accountModel = mockAccountModel();

  addAccountParams: AddAccountParams;

  async add(account: AddAccountParams): Promise<AccountModel> {
    this.addAccountParams = account;
    return this.accountModel;
  }
}

export class AuthenticationSpy implements Authentication {
  authenticationParams: AuthenticationParams;

  authenticationModel: AuthenticationModel = {
    accessToken: faker.random.uuid(),
    name: faker.name.findName(),
    confirmedEmail: true,
  };

  async auth(authenticationParams: AuthenticationParams): Promise<AuthenticationModel> {
    this.authenticationParams = authenticationParams;
    return this.authenticationModel;
  }
}

export class LoadAccountByTokenSpy implements LoadAccountByToken {
  accountModel = mockAccountModel();

  accessToken: string;

  role: string;

  async load(accessToken: string, role?: string): Promise<AccountModel> {
    this.accessToken = accessToken;
    this.role = role;
    return this.accountModel;
  }
}

export class SendLinkConfirmAccountSpy implements SendLinkConfirmAccount {
  sendLinkConfirmAccountParams: SendLinkConfirmAccountParams;

  sendMail(data: SendLinkConfirmAccountParams): Promise<void> {
    this.sendLinkConfirmAccountParams = data;
    return Promise.resolve(undefined);
  }
}

export class ConfirmEmailAccountByConfirmEmailTokenSpy
implements ConfirmEmailAccountByConfirmEmailToken {
  isConfirmed: boolean = true;

  confirmEmailToken: string;

  confirmEmail(confirmEmailToken: string): Promise<boolean> {
    this.confirmEmailToken = confirmEmailToken;
    return Promise.resolve(this.isConfirmed);
  }
}
