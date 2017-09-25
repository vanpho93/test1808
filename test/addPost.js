const assert = require('assert');
const User = require('../src/User');

describe('Create new post', () => {
    let user;
    beforeEach('Create user with 1 posts', async () => {
        user = new User({ 
            name: 'Teo',
            posts: [
                { 
                    title: 'Javascript is awsome',
                    content: 'NodeJS Khoa Pham'
                }
            ]
        });
        console.log(user);
        await user.save();
    });

    it('Before run correctly', async () => {
        const user = await User.findOne({});
        assert(user.name === 'Teo');
        assert(user.posts.length === 1);
    });

    it('Can add new post for user', async () => {
        const user1 = await User.findById(user._id);
        user1.posts.push({
            title: 'AAA',
            content: 'BBB'
        });
        await user1.save();
        const user2 = await User.findOne({});
        assert(user2.posts.length === 2);
        assert(user2.posts[1].title === 'AAA');
    });
});
