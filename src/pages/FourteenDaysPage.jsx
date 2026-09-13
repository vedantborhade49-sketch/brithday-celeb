import React from 'react';
import SectionIndicator from '../components/layout/SectionIndicator';
import Section01Opening from '../components/sections/14days/Section01Opening';
import Section02Timeline from '../components/sections/14days/Section02Timeline';
import Section03Learned from '../components/sections/14days/Section03Learned';
import Section04Vocabulary from '../components/sections/14days/Section04Vocabulary';
import Section05Analysis from '../components/sections/14days/Section05Analysis';
import Section06PlotSoFar from '../components/sections/14days/Section06PlotSoFar';
import Section07Day14Final from '../components/sections/14days/Section07Day14Final';

export default function FourteenDaysPage() {
  return (
    <>
      <SectionIndicator sections={7} />
      <main className="sections-wrapper fourteen-days-page">
        <Section01Opening />
        <Section02Timeline />
        <Section03Learned />
        <Section04Vocabulary />
        <Section05Analysis />
        <Section06PlotSoFar />
        <Section07Day14Final />
      </main>
    </>
  );
}
