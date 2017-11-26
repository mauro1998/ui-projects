(function () {
    if ('content' in document.createElement('template')) {
        var slide = document.querySelector('.ui-slide');
        var playerItemTemplate = document.getElementById('player-item');
        var playerStatsTemplate = document.getElementById('player-stats');
        var list = document.querySelector('.player-list');
        var stats = document.querySelector('.stats-content');
        var players = [
            {
                name: 'Cristiano Ronaldo',
                age: 32,
                country: 'Portugal',
                team: 'Real Madrid',
                position: 'Delantero',
                short: 'RMD',
                thumbnail: 'https://files.telegram-store.com/files/aa/aa96/aa965c5d989bfd2f3ccbfc72eac6d7ce.jpg',
                stats: {
                    games: 443,
                    goals: 345,
                    assists: 32,
                    shots: 324,
                    yellowCards: 0,
                    redCards: 0
                }
            },
            {
                name: 'Lionel Messi',
                age: 30,
                country: 'Argentina',
                team: 'Barcelona',
                position: 'Delantero',
                short: 'BAR',
                thumbnail: 'http://www.tendenciagq.com/wp-content/uploads/2016/06/Lionel-Messi-corte2Bde2Bcabello-2016.jpg',
                stats: {
                    games: 443,
                    goals: 345,
                    assists: 32,
                    shots: 324,
                    yellowCards: 0,
                    redCards: 0
                }
            },
            {
                name: 'Robert Lewandowski',
                age: 29,
                country: 'Polonia',
                team: 'Bayern Munich',
                position: 'Delantero',
                short: 'MUN',
                thumbnail: 'https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/12424749_543587875818135_810861171_n.jpg?ig_cache_key=MTEyOTA5MzY2NzE3NjM5OTYxNw%3D%3D.2',
                stats: {
                    games: 443,
                    goals: 345,
                    assists: 32,
                    shots: 324,
                    yellowCards: 0,
                    redCards: 0
                }
            },
            {
                name: 'Edinson Cavani',
                age: 30,
                country: 'Uruguay',
                team: 'Paris SG',
                position: 'Delantero',
                short: 'PSG',
                thumbnail: 'https://scontent-sjc2-1.cdninstagram.com/t51.2885-15/e35/c80.0.320.320/16110465_148559938976597_764392591142682624_n.jpg?ig_cache_key=MTQzMjgyNjU3NjM3NDU5ODg5MQ%3D%3D.2.c',
                stats: {
                    games: 443,
                    goals: 345,
                    assists: 32,
                    shots: 324,
                    yellowCards: 0,
                    redCards: 0
                }
            },
            {
                name: 'Kylian Mbappe',
                age: 18,
                country: 'Francia',
                team: 'Paris SG',
                position: 'Delantero',
                short: 'PSG',
                thumbnail: 'https://www.gqbuzz.com/wp-content/uploads/2017/07/kylian-mbappe-cropped_rvyhpeucqg361j0bi2utkuqlv-320x320.jpg',
                stats: {
                    games: 443,
                    goals: 345,
                    assists: 32,
                    shots: 324,
                    yellowCards: 0,
                    redCards: 0
                }
            },
            {
                name: 'Antoine Griezmann',
                age: 26,
                country: 'Francia',
                team: 'Madrid Atlético',
                position: 'Delantero',
                short: 'ATM',
                thumbnail: 'http://www.ent-redefined.org/wp-content/uploads/2017/02/Bayer-Leverkusen-2-%E2%80%93-4-Atletico-Madrid-Champions-League-Highlights.jpg',
                stats: {
                    games: 443,
                    goals: 345,
                    assists: 32,
                    shots: 324,
                    yellowCards: 0,
                    redCards: 0
                }
            },
            {
                name: 'Neymar Jr.',
                age: 25,
                country: 'Brasil',
                team: 'Paris SG',
                position: 'Delantero',
                short: 'PSG',
                thumbnail: 'https://i.pinimg.com/736x/f2/03/dd/f203ddec3ea14d99c2bb4490419bf865--neymar-jr-barcelona.jpg',
                stats: {
                    games: 443,
                    goals: 345,
                    assists: 32,
                    shots: 324,
                    yellowCards: 0,
                    redCards: 0
                }
            }
        ];

        function createPlayerItem(player) {
            var template = document.importNode(playerItemTemplate.content, true);
            var find = function (query) { return template.querySelector(query) };

            find('.name').textContent = player.name;
            find('.summary').textContent = player.position + ' | ' + player.team;
            find('.country').textContent = player.country;
            find('.team').textContent = player.short;
            find('.thumbnail').style.backgroundImage = 'url(' + player.thumbnail + ')';

            return template;
        }

        function createStatsContent(player) {
            var template = document.importNode(playerStatsTemplate.content, true);
            var find = function (query) { return template.querySelector(query) };

            find('.name').textContent = player.name;
            find('.age').textContent = player.age + ' años';
            find('.summary').textContent = player.position + ' | ' + player.team;
            find('.flag').src = 'img/' + player.country.toLowerCase() + '.png';
            find('.flag').alt = player.country;
            find('.thumbnail').style.backgroundImage = 'url(' + player.thumbnail + ')';
            find('.games').textContent = player.stats.games;
            find('.goals').textContent = player.stats.goals;
            find('.assists').textContent = player.stats.assists;
            find('.shots').textContent = player.stats.shots;
            find('.yellow-cards').textContent = player.stats.yellowCards;
            find('.red-cards').textContent = player.stats.redCards;

            return template;
        }

        var animation;
        players.map(createPlayerItem).forEach(function (player, index) {
            list.appendChild(player);
            list.lastElementChild.addEventListener('click', function () {
                var template = createStatsContent(players[index]);
                stats.innerHTML = '';
                stats.appendChild(template);
                animation = slide.animate([
                    { transform: 'translateX(0)' },
                    { transform: 'translateX(-100%)' }
                ], {
                        iterations: 1,
                        duration: 300,
                        easing: 'ease-in-out',
                        fill: 'forwards'
                    });
            }, true);
        });

        var back = document.querySelector('.btn.back');
        back.addEventListener('click', function () {
            if (animation) animation.reverse();
        });
    } else {
        alert('Seems that this browser does not support the HTML5 template tag, please update your browser to see this example');
    }
})();