export const getTodaysGames = async () => {
    const gamesResponse = await fetch('http://localhost:3000/api/games/today');
    const gamesData = await gamesResponse.json();
    return gamesData;
};
