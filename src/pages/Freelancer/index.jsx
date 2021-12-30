import React from 'react';
import Card from '../../components/Card';
import DefaultPicture from '../../assets/profile.png';

const freelancerProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Frontend developer',
    picture: DefaultPicture,
  },
  {
    name: 'Jean Bug',
    jobTitle: 'Fullstack Developer',
    picture: DefaultPicture,
  },
];

function Freelancers() {
  return (
    <div>
      <h1>Freelancers 👩·💻👨·💻👩·💻</h1>
      {freelancerProfiles.map((profile) => (
        <Card
          key={`${profile.name}`}
          label={profile.jobTitle}
          picture={profile.picture}
          title={profile.name}
        />
      ))}
    </div>
  );
}

export default Freelancers;
