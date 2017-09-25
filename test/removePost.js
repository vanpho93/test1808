const assert = require('assert');
const User = require('../src/User');

describe('Create new post', () => {
    beforeEach('Create user with 1 posts', async () => {
        const user = new User({ 
            name: 'Teo',
            posts: [
                { 
                    title: 'Javascript is awsome',
                    content: 'NodeJS Khoa Pham'
                },
                { 
                    title: 'AAA',
                    content: 'BBB'
                }
            ]
        });
        await user.save();
    });

    it('Before run correctly', async () => {
        const user = await User.findOne({});
        assert(user.name === 'Teo');
        assert(user.posts.length === 2);
    });

    it('Can remove post', async () => {
        const user = await User.findOne({});
        user.posts[0].remove();
        await user.save();
        const user2 = await User.findOne({});
        assert(user2.posts.length === 1);
        assert(user2.posts[0].title === 'AAA');
    });
});
