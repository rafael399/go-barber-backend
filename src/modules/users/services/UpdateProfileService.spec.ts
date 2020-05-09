import AppError from '@shared/errors/AppError';

import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfile: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfile = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to update the user profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'j@d.com.br',
      password: '123123',
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'John Jhonny',
      email: 'jonny@j.com.br',
    });

    expect(updatedUser.name).toBe('John Jhonny');
    expect(updatedUser.email).toBe('jonny@j.com.br');
  });

  it('should not be able to change to another user email', async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'j@d.com.br',
      password: '123123',
    });

    const user = await fakeUsersRepository.create({
      name: 'John Jhonny',
      email: 'jhonny@j.com.br',
      password: '123123',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Doe',
        email: 'j@d.com.br',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update the user password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'j@d.com.br',
      password: '123456',
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'John Jhonny',
      email: 'jonny@j.com.br',
      old_password: '123456',
      password: '123123',
    });

    expect(updatedUser.password).toBe('123123');
    expect(updatedUser.email).toBe('jonny@j.com.br');
  });

  it('should not be able to update the user password without providing the old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'j@d.com.br',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Jhonny',
        email: 'jonny@j.com.br',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the user password with the wrong old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'j@d.com.br',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Jhonny',
        email: 'jonny@j.com.br',
        old_password: '123412',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
