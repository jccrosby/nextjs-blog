export default function handler(req, res) {
    const gameData = await fetch('https://mastapi.mobile.mlbinfra.com/api/epg/v1/search?hydrate=xrefId,linescore(matchup,runners),team(venue(timezone),league),probablePitcher,person,decisions,flags,stats')
    res.status(200).json({
        dateTime: new Date(),
        gameData
    });
}
