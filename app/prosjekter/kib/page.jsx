/**
 * Dette tilsvarer en prosjekt .
 * Denne siden skal vise et prosjekt.
 * Eksempel:
 * - Kopier denne filen og lag en ny mappe i app/prosjekter med navnet på prosjektet. Deretter limer du inn denne filen. Da vil du få en ny side på /prosjekter/navn-på-prosjektet
 * - Endre tittelen på prosjektet
 * - Endre ingressen
 * - Endre bildet
 * - Legg til flere komponenter som viser prosjektet ditt. Disse kan være helt nye komponenter, eller du kan kopiere eksisterende komponenter fra components mappen.
 */
import { ProjectHero } from '@/components/ProjectHero';
import performance from '../../../public/performance.jpg';
import { TextBlock } from '@/components/TextBlock';
import { Photostrip } from '@/components/Photostrip';

const images = [
  '/space.jpg',
  '/performance_collage.jpg',
  '/performance.jpg',
  '/shutter_collage1.jpg',
  '/shutter_collage2.jpg',
  '/shuttermonster.jpg',
  '/shutterbug.jpg',
  '/moontiles.jpg',
  '/linoprints.jpg'
];

export default async function Project() {
  return (
    <div className='ml-8 sm:ml-10 flex flex-col gap-16 mb-32'>
      <ProjectHero
        title='Prosjekter ved Kunstskolen i Bergen'
        description='Noen av mine prosjekter utført på Kunstskolen i Bergen.'
        image={performance}
      />
      <Photostrip images={images} />

      <TextBlock
        title='<proj1>'
        description='<desc1>'
      />

    </div>
  );
}
