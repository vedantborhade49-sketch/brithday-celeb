import React from 'react';
import SectionIndicator from '../components/layout/SectionIndicator';
import Section01Hero from '../components/sections/Section01Hero';
import Section02FourteenDays from '../components/sections/Section02FourteenDays';
import Section03LittleThings from '../components/sections/Section03LittleThings';
import Section04PhotoMoments from '../components/sections/Section04PhotoMoments';
import Section05Music from '../components/sections/Section05Music';
import Section06Dreams from '../components/sections/Section06Dreams';
import Section07Final from '../components/sections/Section07Final';

export default function HomePage() {
  return (
    <>
      <SectionIndicator sections={7} />
      <main className="sections-wrapper">
        <Section01Hero />
        <Section02FourteenDays />
        <Section03LittleThings />
        <Section04PhotoMoments />
        <Section05Music />
        <Section06Dreams />
        <Section07Final />
      </main>
    </>
  );
}
