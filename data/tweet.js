let tweets = [
  {
    id: '1',
    text: '화이팅!',
    createdAt: Date.now().toString(),
    name: 'Bob',
    username: 'bob',
    url:
      'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png'
  },
  {
    id: '2',
    text: '안녕!',
    createdAt: Date.now().toString(),
    name: 'jerry',
    username: 'jerry'
  }
];

export async function getAll() {
  return Promise.all(
    tweets.map(async tweet => {
      const { username, name, url } = await userRepository.findById(
        tweet.userId
      );
      return { ...tweet, username, name, url };
    })
  );
}

export async function getAllByUsername(username) {
  return getAll().then(tweets =>
    tweets.filter(tweet => tweet.username === username)
  );
}

export async function getById(id) {
  const found = tweets.find(tweet => tweet.id === id);
  if (!found) {
    return null;
  }
  const { username, name, url } = await userRepository.findById(found.userId);
  return { ...found, username, name, url };
}

export async function create(text, userId) {
  const tweet = {
    id: new Date().toString(),
    text,
    createdAt: new Date(),
    userId
  };
  tweets = [tweet, ...tweets];
  return getById(tweet.id);
}

export async function update(id, text) {
  const tweet = tweets.find(tweet => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return getById(tweet.id);
}

export async function remove(id) {
  tweets = tweets.filter(tweet => tweet.id !== id);
}
