import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { getTodaysGames } from '../lib/games';

export const getStaticProps = async () => {
    const games = await getTodaysGames();
    return {
        props: {
            games,
        },
    };
};

export default function Home({ games }) {
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
