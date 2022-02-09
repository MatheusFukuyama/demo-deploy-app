const app = require('express')();
const PORT = process.env.PORT || 3030;

app.get('', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Este app está escutando na port ${PORT}`);
});