exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('reviews').del()
        .then(function () {
            // Inserts seed entries
            return knex('reviews').insert([{
                    title: "These snacks are as nicer then Bob Ross",
                    text: "Just beat the devil out of it. Let's put a touch more of the magic here. Everybody needs a friend. I guess that would be considered a UFO. A big cotton ball in the sky. With practice comes confidence. There we go. That is when you can experience true joy, when you have no fear. You can't have light without dark. You can't know happiness unless you've known sorrow. Let's put some highlights on these little trees. The sun wouldn't forget them. And I will hypnotize that just a little bit.",
                    rating: 5,
                    snack_id: 5,
                    user_id: 2
                },
                {
                    title: "I would rather paint hungry",
                    text: "You don't have to spend all your time thinking about what you're doing, you just let it happen. That's a crooked tree. We'll send him to Washington. When things happen - enjoy them. They're little gifts. You can do it. Don't kill all your dark areas - you need them to show the light.",
                    rating: 2,
                    snack_id: 1,
                    user_id: 1
                },
                {
                    title: "Not the best, but maybe a happy little mistake.",
                    text: "Use what happens naturally, don't fight it. I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. We must be quiet, soft and gentle. There we are. We'll put all the little clouds in and let them dance around and have fun. The only thing worse than yellow snow is green snow.",
                    rating: 3,
                    snack_id: 6,
                    user_id: 4
                },
                {
                    title: "The only thing this snack is missing is a friend",
                    text: "And I will hypnotize that just a little bit. Isn't that fantastic? Even trees need a friend. We all need friends. Every day I learn. We're not trying to teach you a thing to copy. We're just here to teach you a technique, then let you loose into the world. Everyone needs a friend. Friends are the most valuable things in the world.",
                    rating: 5,
                    snack_id: 3,
                    user_id: 2
                },
                {
                    title: "It is delicious.  Isnt that fantastic?",
                    text: "Didn't you know you had that much power? You can move mountains. You can do anything. If what you're doing doesn't make you happy - you're doing the wrong thing. We'll lay all these little funky little things in there. Let that brush dance around there and play. Decide where your cloud lives. Maybe he lives right in here. Be careful. You can always add more - but you can't take it away. Just a little indication.",
                    rating: 4,
                    snack_id: 2,
                    user_id: 6
                },


            ]);
        });
};