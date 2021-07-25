//모카로 변경예정.

const tweetRepository = require('../data/tweet.js');

describe(
  test('tweet 등록', () => {
    const text = '트윗 내용입니다.';
    const name = '이름';
    const username = '유저네임';
    const tweet = tweetRepository.create(text, name, username);
    const result = {
      text,
      name,
      username
    };
    expect(tweet).toContain(result);
  })
);
