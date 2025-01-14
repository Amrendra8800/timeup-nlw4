import Head from 'next/head';

import { CompletedChalenges } from '../components/CompletedChalenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from '../components/ChallengeBox';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | TimeUp</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChalenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}
