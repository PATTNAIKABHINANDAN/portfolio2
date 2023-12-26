import React from 'react';
import Title from '../layouts/Title.js';
import Card from './Card.js';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGit, FaGitAlt, FaKaggle } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiNextdotjs, SiProgress } from 'react-icons/si';

const Features = () => {
  return (
    <section
      id='features'
      className='w-full h-[850px] py-5 border-b-[1px] border-b-black shadow-100g'
    >
      {/* Added shadow-lg class for a shadow effect */}
      <Title title='Features' desc='What I Do!!!' />
      <div className='grid grid-cols-3 gap-20'>
        <Card
          title='Business Strategy'
          desc='Lorem Ipsum ajksadn asd akjsndkjas askjdnas asdjjksad '
          icon={<SiProgress />}
        />
        <Card
          title='Business Strategy'
          desc='Lorem Ipsum ajksadn asd akjsndkjas askjdnas asdjjksad '
          icon={<SiProgress />}
        />
        <Card
          title='Business Strategy'
          desc='Lorem Ipsum ajksadn asd akjsndkjas askjdnas asdjjksad '
          icon={<SiProgress />}
        />
        <Card
          title='Business Strategy'
          desc='Lorem Ipsum ajksadn asd akjsndkjas askjdnas asdjjksad '
          icon={<SiProgress />}
        />
        <Card
          title='Business Strategy'
          desc='Lorem Ipsum ajksadn asd akjsndkjas askjdnas asdjjksad '
          icon={<SiProgress />}
        />
        <Card
          title='Business Strategy'
          desc='Lorem Ipsum ajksadn asd akjsndkjas askjdnas asdjjksad '
          icon={<SiProgress />}
        />
      </div>
    </section>
  );
}

export default Features;
