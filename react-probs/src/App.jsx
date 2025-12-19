import React from 'react';
import Card from './components/card.jsx';

// Parent data as an array
const usersData = [
  {
    user: 'M.Ayan Hashmi',
    profession: 'React Dev learner',
    url: 'https://media.licdn.com/dms/image/v2/D4E35AQFn0HX3DbB3hQ/profile-framedphoto-shrink_100_100/B4EZqTE2dFKsAk-/0/1763404114166?e=1766739600&v=beta&t=cUkOTHRW3xYaPZdGQMgzT5HINQFv1EOJoqg9-u9qQv4'
  },
  {
    user: 'Agha jee',
    profession: 'Hacker ha bhai hacker',
    url: 'https://media.licdn.com/dms/image/v2/D4D03AQH032_gtd1KBg/profile-displayphoto-shrink_100_100/B4DZWD3h4uHYAU-/0/1741674128067?e=1767830400&v=beta&t=V6R-wKaK5q6Q3HIhPJmlbGXiC9u9bA-AnwdTxXjq15U'
  },
  {
    user: 'Abdul Ahad',
    profession: '.Net Developer',
    url: 'https://avatars.githubusercontent.com/u/186848000?s=130&v=4'
  },
  {
    user: 'Asad',
    profession: 'Next Js'
    // no URL
  }
];

const App = () => {
  return (
    <div>
      <div className='card'>
        <h1>Probs in React</h1>
      </div>

      <div className="cardRow">
        {usersData.map(({ user, profession, url }, index) => (
          <Card
            key={index} // using index as key for array
            user={user}
            profession={profession}
            url={url}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
