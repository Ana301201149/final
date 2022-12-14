const { Router } = require('express');
const router = Router();

const User = require('../models/User');

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => res.send('Hello World'));

router.post('/signup', async (req, res) => {
    const { email, password } = (req.body);
    const newUser = new User({ email: email, password: password });
    await newUser.save();

    const token = jwt.sign({ _id: newUser._id }, 'secretkey')
    res.status(200).json({ token })


})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user) return res.status(401).send("The email doesn't exists");
    if (user.password !== password) return res.status(401).send('Wrong Password');

    const token = jwt.sign({ _id: user._id }, 'secretkey');
    return res.status(200).json({ token });

});

router.get('/incidents', (req, res) => {
    res.json([
        {
            _id: 1,
            name: "Incident_01",
            desciption: "lost package in address",
            office: "Mississauga"

        },

        {
            _id: 2,
            name: "Incident_02",
            desciption: "Damage package in warehouse",
            office: "Montreal"

        },
        {
            _id: 3,
            name: "Incident_03",
            desciption: "delayed package",
            office: "Toronto"
        }

    ])
})

router.get('/private-incidents', verifyToken, (req, res) => {
    res.json([
        {
            _id: 1,
            name: "Incident_01",
            desciption: "lost package in address",
            office: "Mississauga"

        },

        {
            _id: 2,
            name: "Incident_02",
            desciption: "Damage package in warehouse",
            office: "Montreal"

        },
        {
            _id: 3,
            name: "Incident_03",
            desciption: "delayed package",
            office: "Toronto"
        }
    ])
}
)



async function verifyToken(req, res, next) {
    try{
    if (!req.headers.authorization) {
        return res.status(401).send('Unthorize Request');

    }
    

    let token = req.headers.authorization.split(' ')[1];
    if (token === 'null') {
        return res.status(401).send('Unathorize Request');
    }

    const payload = jwt.verify(token, 'secretkey')
    if (!payload) {
        return res.status(401).send ('Unauthorization Request');
    }
    req.userId = payload._id;
    next();

    }catch (e) {
        return res.status(401).send('Unauthorization Request');
    }

}


module.exports = router;