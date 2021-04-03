export default function handler(req, res) {
    res.status(200).json({
        text: 'HelloW World!',
        time: new Date(),
    });
}
