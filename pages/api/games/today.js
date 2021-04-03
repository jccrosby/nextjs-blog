export default async function handler(req, res) {
    const gameDataResponse = await fetch(
        'https://mastapi.mobile.mlbinfra.com/api/epg/v1/search?hydrate=xrefId,linescore(matchup,runners),team(venue(timezone),league),probablePitcher,person,decisions,flags,stats',
    );
    const gameData = await gameDataResponse.json();
    res.status(200).json({
        dateTime: new Date(),
        gameData,
    });
}
