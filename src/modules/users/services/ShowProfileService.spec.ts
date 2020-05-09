import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowProfileService from './ShowProfileService';

let fakeUsersRepository: FakeUsersRepository;
let showProfile: ShowProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    showProfile = new ShowProfileService(fakeUsersRepository);
  });

  it('should be able to show the user profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'j@d.com.br',
      password: '123123',
    });

    const userProfile = await showProfile.execute({
      user_id: user.id,
    });

    expect(userProfile.name).toBe('John Doe');
    expect(userProfile.email).toBe('j@d.com.br');
  });

  it('should not be able to show the profile of a non-existent user', async () => {
    await expect(
      showProfile.execute({
        user_id: 'non-existent-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
