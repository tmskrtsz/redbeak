import { Suspense } from 'react';
import { Layout } from '../../components/layout';
import { Spacer } from '../../components/spacer';
import { TravelsList } from '../../features/travels-list';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'redbeak • Check-in',
  description:
    'Wherever in the world I currently am',
};


export default function Travels() {
  return (
    <Layout>
      <Spacer my="2xl">
        <h1>Check-In</h1>
        <Suspense fallback={<>Loading...</>}>
          <TravelsList />
        </Suspense>
      </Spacer>
    </Layout>
  );
}
