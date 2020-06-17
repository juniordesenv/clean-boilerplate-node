// eslint-disable-next-line max-classes-per-file
import { AddAccountRepository } from '@/data/protocols/db/account/add-account-repository';
import { AddAccountParams } from '@/domain/usecases/account/add-account';
import { AccountModel } from '@/domain/models';
import { mockAccountModel } from '@/domain/test';
import { LoadAccountByEmailRepository } from '@/data/protocols/db/account/load-account-by-email-repository';
import { LoadAccountByTokenRepository } from '@/data/protocols/db/account/load-account-by-token-repository';
import { UpdateAccessTokenRepository } from '@/data/protocols/db/account/update-access-token-repository';
import { ConfirmEmailAccountByConfirmTokenRepository } from '@/data/protocols/db/account/confirm-email-account-by-confirm-token-repository';
import { ChangePasswordAccountByIdRepository } from '@/data/protocols/db/account/change-password-account-by-id-repository';
import faker from 'faker';
import { ChangePasswordAccountById } from '@/domain/usecases/account/change-password-account-by-id';
import { LoadAccountByIdRepository } from '@/data/protocols/db/account/load-account-by-id-repository';
import { LoadAccountById } from '@/domain/usecases/account/load-account-by-id';

export class AddAccountRepositorySpy implements AddAccountRepository {
  accountModel = mockAccountModel();

  addAccountParams: AddAccountParams;

  async add(data: AddAccountParams): Promise<AccountModel> {
    this.addAccountParams = data;
    return this.accountModel;
  }
}

export class LoadAccountByEmailRepositorySpy implements LoadAccountByEmailRepository {
  accountModel = mockAccountModel();

  email: string;

  async loadByEmail(email: string): Promise<AccountModel> {
    this.email = email;
    return this.accountModel;
  }
}

export class LoadAccountByTokenRepositorySpy implements LoadAccountByTokenRepository {
  accountModel = mockAccountModel();

  token: string;

  role: string;

  async loadByToken(token: string, role?: string): Promise<AccountModel> {
    this.token = token;
    this.role = role;
    return this.accountModel;
  }
}

export class UpdateAccessTokenRepositorySpy implements UpdateAccessTokenRepository {
  id: string;

  token: string;

  async updateAccessToken(id: string, token: string): Promise<void> {
    this.id = id;
    this.token = token;
  }
}

export class ConfirmEmailAccountByConfirmTokenRepositorySpy
implements ConfirmEmailAccountByConfirmTokenRepository {
  confirmed: boolean = true;

  confirmEmailToken: string;

  async confirmEmailByConfirmToken(confirmEmailToken: string): Promise<boolean> {
    this.confirmEmailToken = confirmEmailToken;
    return this.confirmed;
  }
}

export class ChangePasswordAccountByIdRepositorySpy implements ChangePasswordAccountByIdRepository {
  accountId = faker.random.uuid();

  hashedPassword = faker.internet.password();

  changed: boolean = true;

  async changePasswordById(accountId: string, hashedPassword: string): Promise<boolean> {
    this.accountId = accountId;
    this.hashedPassword = hashedPassword;
    return this.changed;
  }
}

export class ChangePasswordAccountByIdSpy implements ChangePasswordAccountById {
  accountId: string;

  password: string;

  changed: boolean = true;

  async change(accountId: string, password: string): Promise<boolean> {
    this.accountId = accountId;
    this.password = password;
    return this.changed;
  }
}


export class LoadAccountByIdRepositorySpy implements LoadAccountByIdRepository {
  accountModel = mockAccountModel();

  id: string;

  async loadById(id: string): Promise<AccountModel> {
    this.id = id;
    return this.accountModel;
  }
}

export class LoadAccountByIdSpy implements LoadAccountById {
  accountModel = mockAccountModel();

  accountId: string;

  async load(accountId: string): Promise<AccountModel> {
    this.accountId = accountId;
    return this.accountModel;
  }
}
