"use client"
import { StatsProps } from '~/shared/types';
import { getSuffixNumber } from '~/utils/utils';
import WidgetWrapper from '../common/WidgetWrapper';
import AnimatedCounter from './AnimatedCounter';

const Stats = ({ items, id, hasBackground = false }: StatsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    <div className="row-gap-8 grid grid-cols-2 md:grid-cols-4">
      {items.map(({ title, description }, index) => (
        <div
          key={`item-stat-${index}`}
          className="mb-12 text-center md:mb-0 md:border-r md:last:border-none dark:md:border-slate-500"
        >
          <div className="font-heading text-primary text-[2.6rem] font-bold dark:text-white lg:text-5xl xl:text-6xl">
            {/* { getSuffixNumber(title as number).replace( /^[^.]*\./ ,'')} */}
            <AnimatedCounter targetValue={title as number} duration={2000} /> {/* Compte jusqu'à 500 en 3 secondes */}
          </div>
          <p className="text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base">
            {description}
          </p>
        </div>
      ))}
    </div>
  </WidgetWrapper>
);

export default Stats;
