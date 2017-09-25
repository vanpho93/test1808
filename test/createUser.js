const assert = require('assert');
const User = require('../src/User');

describe('Create user', () => {
    it('Can create new user without post', async () => {
        const user = new User({ name: 'Teo' });
        await user.save();
        const user2 = await User.findOne({});
        assert(user2.name === 'Teo');
    });

    it('Can create new user with posts', async () => {
        const user = new User({ 
            name: 'Teo',
            posts: [
                { 
                    title: 'Javascript is awsome',
                    content: 'NodeJS Khoa Pham'
                },
                { 
                    title: 'Javascript',
                    content: 'Khoa Pham'
                }
            ]
        });
        await user.save();
        const user2 = await User.findOne({});
        assert(user2.posts[0].title === 'Javascript is awsome');
    });
});
