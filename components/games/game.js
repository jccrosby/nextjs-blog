import Link from 'next/link';
import Date from '../date';

const parseDisplayData = (game) => {
    const { gamePk, gameData } = game;
    const { gameDate } = gameData;
    const homeTeam = gameData.teams.home;
    const awayTeam = gameData.teams.away;
    const status = gameData.status;
    return {
        gamePk,
        gameDate,
        homeTeam,
        awayTeam,
        status,
    };
};

const Game = (game) => {
    const { gamePk, gameDate, homeTeam, awayTeam, status } = parseDisplayData(
        game,
    );
    const liveGameStates = ['L', 'F'];
    const { abstractGameCode, detailedState, codedGameState } = status;
    return (
        <>
            <span>{homeTeam.team.abbreviation.toUpperCase()}</span> @{' '}
            <span>{awayTeam.team.abbreviation.toUpperCase()}</span>{' '}
            <Date dateString={gameDate} />{' '}
            {liveGameStates.includes(abstractGameCode) &&
            codedGameState !== 'D' ? (
                <>
                    <Link href={`https://www.mlb.com/tv/g${gamePk}`}>
                        <a target='_blank'>Watch Now</a>
                    </Link>{' '}
                </>
            ) : null}
            <span>({detailedState})</span>
        </>
    );
};
export default Game;
