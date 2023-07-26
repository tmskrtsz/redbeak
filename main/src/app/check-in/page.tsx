import { Suspense } from 'react';
import { Layout } from '../../components/layout';
import { Spacer } from '../../components/spacer';
import { TravelsList } from '../../features/travels-list';

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
