import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';
import Date from '../components/date';
import Game from '../components/games/game';
import styles from '../components/layout.module.css';
import { getTodaysGames } from '../lib/games';
import utilStyles from '../styles/utils.module.css';
export default function Home() {
    const { data: games, error } = useSWR('api/games/today', getTodaysGames);
    return (
        <div className={styles.container}>
            <Head>
                <title>Games</title>
            </Head>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <ol className={utilStyles.list}>
                    {games?.gameData?.results?.map((game) => {
                        return (
                            <li
                                className={utilStyles.listItem}
                                key={game.gamePk}
                            >
                                <Game {...game} />
                            </li>
                        );
                    })}
                </ol>
            </section>
        </div>
    );
}
