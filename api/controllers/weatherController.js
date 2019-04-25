const fetch = require('node-fetch');

module.exports = app => {

    app.get('/weather/:city', (req, res) => {
        let url = 'http://api.openweathermap.org/data/2.5/weather?q='
        let appId = 'appid=be4f67051a4cf2d8153510622140a9ca';
        let city = req.params.city;
        url = url + city + "&" + appId;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                res.send({ data });
             })
            .catch(err => console.log(err));;
    });
    app.get('/', (req, res) => {
        res.send('.');
    })
};