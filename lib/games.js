import useSWR from 'swr';
export const getTodaysGames = async () => {
    const gamesResponse = await fetch('/api/games/today');
    const gamesData = await gamesResponse.json();
    return gamesData;
};
