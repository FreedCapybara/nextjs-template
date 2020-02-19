import { gravatarUrl } from '@lib/gravatar';
import md5 from 'js-md5';

describe('Gravatar utilities', () => {

  it('should get gravatar urls', () => {
    const email = 'test@test.net';
    const result = gravatarUrl(email);
    expect(result).toContain(md5('test@test.net'));
  });

  it('should get gravatar urls without an email', () => {
    const email = null;
    const result = gravatarUrl(email);
    expect(result).toContain('00000000000000000000000000000000');
  });

  it('should get gravatar urls in a given size', () => {
    const email = 'test@test.net';
    const result = gravatarUrl(email, 250);
    expect(result).toContain('s=250');
  });
});

