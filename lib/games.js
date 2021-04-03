export const getTodaysGames = async () => {
    const gamesResponse = await fetch(
        'https://mastapi.mobile.mlbinfra.com/api/epg/v1/search?hydrate=xrefId,linescore(matchup,runners),team(venue(timezone),league),probablePitcher,person,decisions,flags,stats',
    );
    const gamesData = await gamesResponse.json();
    return gamesData;
};
