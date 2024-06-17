const os = require('os'),
    moment = require('moment-timezone'),
    fs = require('fs'),
    Config = require('../config');
let {
    fancytext,
    tlang,
    tiny,
    runtime,
    formatp,
    botpic,
    prefix,
    sck1
} = require('../lib');

const long = String.fromCharCode(0x200e),
    readmore = long.repeat(4001),
    Secktor = require('secktor');

Secktor.setDefault({
    'pattern': 'menu',
    'alias': ['m'],
    'desc': 'Help list',
    'category': 'general',
    'react': '🗂️',
    'filename': __filename
}, async (_0x41fa70, _0x22e548, _0x44e062) => {
    const {
        commands: _0x547bb5
    } = require('../lib');

    if (_0x44e062.split(' ')[0]) {
        let _0x29797f = [];
        const _0x1297b6 = _0x547bb5.find(_0x4f444d => _0x4f444d.pattern === _0x44e062.split(' ')[0].toLowerCase());

        if (!_0x1297b6) return await _0x22e548.reply('❌ Please read the commands.');
        else _0x29797f.push('*🧩Type:* ' + _0x1297b6.pattern);
        if (_0x1297b6.alias) _0x29797f.push('*🧩Alias:* ' + _0x1297b6.alias);
        if (_0x1297b6.category) _0x29797f.push('*🧩Category:* ' + _0x1297b6.category);
        if (_0x1297b6.desc) _0x29797f.push('*🧩Description:* ' + _0x1297b6.desc);
        if (_0x1297b6.use) _0x29797f.push('*〽️Usage:*\n ```' + prefix + _0x1297b6.pattern + ' ' + _0x1297b6.use + '```');

        return await _0x22e548.reply(_0x29797f.join('\n'));
    } else {
        const _0x185d93 = {};
        _0x547bb5.map(async (_0x1563c7, _0x1cde65) => {
            if (_0x1563c7.dontAddCommandList === false && _0x1563c7.pattern !== undefined) {
                if (!_0x185d93[_0x1563c7.category]) _0x185d93[_0x1563c7.category] = [];
                _0x185d93[_0x1563c7.category].push(_0x1563c7.pattern);
            }
        });

        const _0x462728 = moment(moment()).format('HH:mm:ss');
        moment.tz('Asia/Kolkata').locale('id');
        const _0x5dd623 = moment.tz('Asia/Kolkata').format('DD/MM/YYYY');

        let _0x16b1ac = await sck1.getUserCount(),
            _0x2ce686 = '╭━━〘 ' + fancytext(Config.ownername.split(' ')[0], 58) + ' 〙━━──⊷';

        _0x2ce686 += '```│╭──────────────◆\n││💫 Hi user:- ' + _0x22e548.pushName + '\n││💫 My prefix:- [ ' + prefix + ' ]\n││💫 Owner:- ' + Config.ownername + '\n││💫 Uptime:- ' + runtime(process.uptime()) + '\n││💫 Memory:- ' + formatp(os.totalmem() - os.freemem()) + '/' + formatp(os.totalmem()) + '```';

        for (const _0x32ef0c in _0x185d93) {
            _0x2ce686 += '╭────✳️ ' + tiny(_0x32ef0c) + ' ✳️─────⊷\n';
            if (_0x44e062.toLowerCase() == _0x32ef0c.toLowerCase()) {
                _0x2ce686 = '╭────✳️ ' + tiny(_0x32ef0c) + ' ✳️─────⊷\n';
                for (const _0x3ce7be of _0x185d93[_0x32ef0c]) {
                    _0x2ce686 += '│ ' + fancytext(_0x3ce7be, 1) + '\n';
                }
                _0x2ce686 += '╰───────────\n';
                break;
            } else {
                for (const _0x14efca of _0x185d93[_0x32ef0c]) {
                    _0x2ce686 += '│ ' + fancytext(_0x14efca, 1) + '\n';
                }
                _0x2ce686 += '╰───────────\n';
            }
        }

        _0x2ce686 += '╰━━━━━━━━━━━──⊷';

        let _0x41763e = {
            'image': {
                'url': await botpic()
            },
            'caption': _0x2ce686
        };

        return await _0x41fa70.sendMessage(_0x22e548.chat, _0x41763e);
    }
});

Secktor.setDefault({
    'pattern': 'menu',
    'desc': 'Menu list',
    'category': 'general'
}, async (_0x17db5e, _0x2cb42d) => {
    const {
        commands: _0xb570e
    } = require('../lib');

    let _0x51fde2 = '╭━━〘 ' + fancytext(Config.ownername.split(' ')[0], 58) + ' 〙━━──⊷';
    _0x51fde2 += '```┃☬│ User: ' + _0x2cb42d.pushName + '\n┃☬│ Your Prefix: ' + tlang().toLowerCase() + '\n┃☬│ Prefix: ' + prefix + '\n┃☬│ Owner: ' + Config.ownername + '\n┃☬│ Commands: ' + _0xb570e.length + '\n┃☬│ Uptime: ' + runtime(process.uptime()) + '\n┃☬│ Mem: ' + formatp(os.totalmem() - os.freemem()) + '/' + formatp(os.totalmem()) + '```';

    for (let _0x32fc98 = 0; _0x32fc98 < _0xb570e.length; _0x32fc98++) {
        if (_0xb570e[_0x32fc98].pattern == undefined) continue;
        _0x51fde2 += '╭ ' + (_0x32fc98 + 1) + ' *' + fancytext(_0xb570e[_0x32fc98].pattern, 1) + '*\n';
        if (_0xb570e[_0x32fc98].desc = undefined) _0xb570e[_0x32fc98].desc = '';
        _0x51fde2 += '│ ' + fancytext(_0xb570e[_0x32fc98].desc, 1) + '\n';
    }

    return await _0x17db5e.sendMessage(_0x2cb42d.chat, {
        'image': {
            'url': THUMB_IMAGE
        },
        'caption': _0x51fde2
    });
});

Secktor.setDefault({
    'pattern': 'owner',
    'desc': 'To find owner number',
    'category': 'general',
    'react': '❤️',
    'filename': __filename
}, async (_0x2d6a3a, _0x5ad307) => {
    const _0x5dd43a = require('../config'),
        _0x42bbad = 'BEGIN:VCARD\nVERSION:3.0\nFN:' + _0x5dd43a.ownername + '\nORG:;\nTEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\nEND:VCARD\n';

    let _0x51aa36 = {
        'contacts': {
            'displayName': _0x5dd43a.ownername,
            'contacts': [{
                'vcard': _0x42bbad
            }]
        },
        'contextInfo': {
            'externalAdReply': {
                'title': _0x5dd43a.ownername,
                'body': 'Touch here.',
                'renderLargerThumbnail': true,
                'thumbnailUrl': '',
                'thumbnail': log0,
                'mediaType': 2,
                'mediaUrl': '',
                'sourceUrl': 'https://wa.me/+' + owner[0]
}
}
};

return await _0x2d6a3a.sendMessage(_0x5ad307.chat, _0x51aa36);
});

Secktor.setDefault({
‘pattern’: ‘bots’,
‘desc’: ‘To find bots number’,
‘category’: ‘general’,
‘react’: ‘🤖’,
‘filename’: __filename
}, async (_0x10b8f8, _0x29b3e0) => {
const _0x5cfc70 = require(’../config’),
_0x2543d5 = ‘BEGIN:VCARD\nVERSION:3.0\nFN:’ + _0x5cfc70.botname + ‘\nORG:;\nTEL;type=CELL;type=VOICE;waid=’ + botnumber[0] + ‘:+’ + botnumber[0] + ‘\nEND:VCARD\n’;


let _0x173172 = {
    'contacts': {
        'displayName': _0x5cfc70.botname,
        'contacts': [{
            'vcard': _0x2543d5
        }]
    },
    'contextInfo': {
        'externalAdReply': {
            'title': _0x5cfc70.botname,
            'body': 'Touch here.',
            'renderLargerThumbnail': true,
            'thumbnailUrl': '',
            'thumbnail': log0,
            'mediaType': 2,
            'mediaUrl': '',
            'sourceUrl': 'https://wa.me/+' + botnumber[0]
        }
    }
};

return await _0x10b8f8.sendMessage(_0x29b3e0.chat, _0x173172);

});

Secktor.setDefault({
‘pattern’: ‘allcmd’,
‘alias’: [‘commandlist’, ‘command’],
‘desc’: ‘To list all commands’,
‘category’: ‘general’,
‘react’: ‘✨’,
‘filename’: __filename
}, async (_0x59d8e0, _0x53f8d5) => {
const {
commands: _0x1193e6
} = require(’../lib’);

let _0x499b5f = '╭━━〘 ' + fancytext(Config.ownername.split(' ')[0], 58) + ' 〙━━──⊷';
_0x499b5f += '```┃☬│ User: ' + _0x53f8d5.pushName + '\n┃☬│ Your Prefix: ' + tlang().toLowerCase() + '\n┃☬│ Prefix: ' + prefix + '\n┃☬│ Owner: ' + Config.ownername + '\n┃☬│ Commands: ' + _0x1193e6.length + '\n┃☬│ Uptime: ' + runtime(process.uptime()) + '\n┃☬│ Mem: ' + formatp(os.totalmem() - os.freemem()) + '/' + formatp(os.totalmem()) + '```';

for (let _0x2d94ec = 0; _0x2d94ec < _0x1193e6.length; _0x2d94ec++) {
    if (_0x1193e6[_0x2d94ec].pattern == undefined) continue;
    _0x499b5f += '╭ ' + (_0x2d94ec + 1) + ' *' + fancytext(_0x1193e6[_0x2d94ec].pattern, 1) + '*\n';
    if (_0x1193e6[_0x2d94ec].desc = undefined) _0x1193e6[_0x2d94ec].desc = '';
    _0x499b5f += '│ ' + fancytext(_0x1193e6[_0x2d94ec].desc, 1) + '\n';
}

return await _0x59d8e0.sendMessage(_0x53f8d5.chat, {
    'image': {
        'url': THUMB_IMAGE
    },
    'caption': _0x499b5f
});

});
