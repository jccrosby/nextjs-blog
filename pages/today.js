import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';
import Date from '../components/date';
import Layout from '../components/layout';
import { getTodaysGames } from '../lib/games';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
    const { data: games, error } = useSWR('api/games/today', getTodaysGames);
    return (
        <Layout home>
            <Head>
                <title>Games</title>
            </Head>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <ol className={utilStyles.list}>
                    {games?.gameData?.results?.map(({ gamePk, gameData }) => (
                        <li className={utilStyles.listItem} key={gamePk}>
                            <Link href={`https://www.mlb.com/tv/g${gamePk}`}>
                                <a>{gamePk}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={gameData.gameDate} />
                            </small>
                        </li>
                    ))}
                </ol>
            </section>
        </Layout>
    );
}
