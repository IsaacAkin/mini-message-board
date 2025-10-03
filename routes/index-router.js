import express from 'express';

const router = express.Router();

const links = [
    { href: '/', text: 'Home'},
    { href: '/new', text: 'New Message'},
]

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date()
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date()
    },
    {
        text: `Have you heard of the critically acclaimed 
        MMORPG Final Fantasy 14? With an expanded free trial 
        which you can play through the entirety of a Realm Reborn 
        and the award winning Heavensward, and thrilling Stormblood 
        expansions up to level 70 for free with no restrictions on play time?`,
        user: 'Warrior of Light',
        added: new Date()
    },
]

router.get('/', (req, res) => res.render('index', { links , messages }));
router.get('/new', (req, res) => res.render('form', { links }));
router.post('/new', (req, res) => {
    const { messageText, authorName } = req.body;

    messages.push({
        text: messageText,
        user: authorName,
        added: new Date()
    });

    res.redirect('/');
});

export default router;