// data/mockData.ts
import { Movie, TVShow, Genre } from 'types/media';

// Common genres
const genres: Genre[] = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Adventure' },
    { id: 3, name: 'Comedy' },
    { id: 4, name: 'Drama' },
    { id: 5, name: 'Sci-Fi' },
    { id: 6, name: 'Thriller' },
    { id: 7, name: 'Horror' },
    { id: 8, name: 'Romance' },
    { id: 9, name: 'Fantasy' },
    { id: 10, name: 'Crime' },
    { id: 11, name: 'Mystery' },
    { id: 12, name: 'Animation' }
];

export const mockMovies: Movie[] = [
    {
        id: 1,
        title: 'The Quantum Paradox',
        overview:
            'A brilliant physicist discovers a way to manipulate time, but soon realizes that every change creates devastating consequences across multiple timelines. Racing against time itself, she must undo her greatest achievement to save humanity.',
        poster_url: '/dummy_poster.jpg',
        backdrop_url: '/dummy_backdrop.jpg',
        release_date: '2024-03-15',
        vote_average: 8.2,
        vote_count: 15420,
        genres: [genres[4].name, genres[5].name, genres[3].name],
        runtime: 142,
        tagline: 'Time is not on her side',
        directors: ['Sarah Chen'],
        budget: '85000000',
        revenue: '342000000',
        actors: [
            { name: 'Emma Watson', character: 'Dr. Sarah Mitchell' },
            { name: 'Oscar Isaac', character: 'Professor James Reed' },
            { name: 'Tilda Swinton', character: 'The Observer' }
        ]
    },
    {
        id: 2,
        title: 'Neon Nights',
        overview:
            'In a cyberpunk metropolis, a former hacker is pulled back into the underground world when her daughter is kidnapped by a powerful tech corporation. She must navigate the dangerous digital landscape to bring her home.',
        poster_url: '/dummy_poster.jpg',
        backdrop_url: '/dummy_backdrop.jpg',
        release_date: '2024-06-22',
        vote_average: 7.8,
        vote_count: 12350,
        genres: [genres[0].name, genres[4].name, genres[5].name],
        runtime: 128,
        tagline: 'The future is now',
        directors: ['Kenji Tanaka'],
        budget: '65000000',
        revenue: '198000000',
        actors: [
            { name: 'Scarlett Johansson', character: 'Maya Chen' },
            { name: 'Idris Elba', character: 'Marcus Kane' },
            { name: 'Rinko Kikuchi', character: 'Akira Sato' }
        ]
    },
    {
        id: 3,
        title: 'The Last Lighthouse',
        overview:
            'A reclusive lighthouse keeper discovers a mysterious signal from the depths of the ocean. As strange events unfold, he realizes he may be the only one standing between humanity and an ancient underwater threat.',
        poster_url: '/dummy_poster.jpg',
        backdrop_url: '/dummy_backdrop.jpg',
        release_date: '2024-01-19',
        vote_average: 7.5,
        vote_count: 9870,
        genres: [genres[6].name, genres[11].name, genres[3].name],
        runtime: 115,
        tagline: 'Some lights should never be followed',
        directors: ['Guillermo del Toro'],
        budget: '45000000',
        revenue: '156000000',
        actors: [
            { name: 'Willem Dafoe', character: 'Thomas Wake' },
            { name: 'Robert Pattinson', character: 'Ephraim Winslow' },
            { name: 'Anya Taylor-Joy', character: 'The Siren' }
        ]
    },
    {
        id: 4,
        title: 'Stellar Hearts',
        overview:
            'Two astronauts from rival space agencies find themselves stranded together on a distant planet. As they work to survive and find a way home, they discover that their connection transcends the boundaries of Earth.',
        poster_url: '/dummy_poster.jpg',
        backdrop_url: '/dummy_backdrop.jpg',
        release_date: '2024-02-14',
        vote_average: 7.2,
        vote_count: 8540,
        genres: [genres[8].name, genres[4].name, genres[1].name],
        runtime: 122,
        tagline: 'Love knows no distance',
        directors: ['Denis Villeneuve'],
        budget: '72000000',
        revenue: '215000000',
        actors: [
            { name: 'Ryan Gosling', character: 'Commander Alex Turner' },
            { name: 'Zendaya', character: 'Dr. Mira Volkov' },
            { name: 'Mahershala Ali', character: 'Mission Control Director' }
        ]
    },
    {
        id: 5,
        title: 'The Heist Protocol',
        overview:
            'A team of elite thieves plans the impossible: stealing a priceless artifact from a high-security museum that uses cutting-edge AI security. But when their inside man goes dark, they must adapt on the fly or face capture.',
        poster_url: '/dummy_poster.jpg',
        backdrop_url: '/dummy_backdrop.jpg',
        release_date: '2024-05-10',
        vote_average: 7.9,
        vote_count: 11230,
        genres: [genres[0].name, genres[5].name, genres[9].name],
        runtime: 135,
        tagline: 'Trust no one. Steal everything.',
        directors: ['Christopher Nolan'],
        budget: '95000000',
        revenue: '387000000',
        actors: [
            { name: 'Tom Hardy', character: 'Jack Morrison' },
            { name: 'Lupita Nyongo', character: 'Zara Williams' },
            { name: 'Benedict Cumberbatch', character: 'Victor Cross' }
        ]
    },
    {
        id: 6,
        title: 'Echoes of Tomorrow',
        overview:
            'In a world where memories can be bought and sold, a memory detective investigates a series of impossible murders. Each victim shares the same final memory—one that hasn\'t happened yet.',
        poster_url: '/dummy_poster.jpg',
        backdrop_url: '/dummy_backdrop.jpg',
        release_date: '2024-04-05',
        vote_average: 8.0,
        vote_count: 13670,
        genres: [genres[4].name, genres[11].name, genres[5].name],
        runtime: 138,
        tagline: 'The past is just the beginning',
        directors: ['Alex Garland'],
        budget: '58000000',
        revenue: '245000000',
        actors: [
            { name: 'Florence Pugh', character: 'Detective Aria Kane' },
            { name: 'Adam Driver', character: 'Dr. Elias Vance' },
            { name: 'Cate Blanchett', character: 'The Collector' }
        ]
    },
    {
        id: 7,
        title: 'Wild Horizons',
        overview:
            'A documentary filmmaker travels to the Amazon rainforest to capture the last days of an uncontacted tribe. What she discovers challenges everything she knows about civilization and forces her to question her own purpose.',
        poster_url: '/dummy_poster.jpg',
        backdrop_url: '/dummy_backdrop.jpg',
        release_date: '2024-07-18',
        vote_average: 7.6,
        vote_count: 7890,
        genres: [genres[1].name, genres[3].name],
        runtime: 118,
        tagline: 'Some stories choose you',
        directors: ['Chloé Zhao'],
        budget: '35000000',
        revenue: '98000000',
        actors: [
            { name: 'Saoirse Ronan', character: 'Kate Morrison' },
            { name: 'Wagner Moura', character: 'Carlos Silva' },
            { name: 'Q\'orianka Kilcher', character: 'Yana' }
        ]
    },
    {
        id: 8,
        title: 'Code Red',
        overview:
            'When a deadly virus outbreak threatens to wipe out humanity, a team of scientists races against time to develop a cure. But they soon discover the virus was engineered, and someone wants to ensure it spreads.',
        poster_url: '/dummy_poster.jpg',
        backdrop_url: '/dummy_backdrop.jpg',
        release_date: '2024-08-30',
        vote_average: 7.4,
        vote_count: 10450,
        genres: [genres[5].name, genres[3].name, genres[0].name],
        runtime: 126,
        tagline: 'Time is the real enemy',
        directors: ['Kathryn Bigelow'],
        budget: '68000000',
        revenue: '276000000',
        actors: [
            { name: 'Michael B. Jordan', character: 'Dr. Marcus Webb' },
            { name: 'Jessica Chastain', character: 'Dr. Sarah Chen' },
            { name: 'Javier Bardem', character: 'General Ramirez' }
        ]
    },
    {
        id: 9,
        title: 'The Forgotten Kingdom',
        overview:
            'An archaeologist discovers an ancient map leading to a lost civilization. As she ventures deeper into uncharted territory, she uncovers secrets that could rewrite human history—if she survives to tell the tale.',
        poster_url: '/dummy_poster.jpg',
        backdrop_url: '/dummy_backdrop.jpg',
        release_date: '2024-09-13',
        vote_average: 7.7,
        vote_count: 9340,
        genres: [genres[1].name, genres[9].name, genres[11].name],
        runtime: 132,
        tagline: 'History has teeth',
        directors: ['James Cameron'],
        budget: '125000000',
        revenue: '456000000',
        actors: [
            { name: 'Alicia Vikander', character: 'Dr. Elena Cross' },
            { name: 'Dev Patel', character: 'Raj Malhotra' },
            { name: 'Michelle Yeoh', character: 'Professor Lin' }
        ]
    },
    {
        id: 10,
        title: 'Midnight Runner',
        overview:
            'A former Olympic sprinter turned underground courier must deliver a mysterious package across the city in under two hours. With assassins, corrupt cops, and rival gangs on her trail, every second counts.',
        poster_url: '/dummy_poster.jpg',
        backdrop_url: '/dummy_backdrop.jpg',
        release_date: '2024-10-25',
        vote_average: 7.3,
        vote_count: 8760,
        genres: [genres[0].name, genres[5].name, genres[9].name],
        runtime: 108,
        tagline: 'Run or die',
        directors: ['Chad Stahelski'],
        budget: '42000000',
        revenue: '167000000',
        actors: [
            { name: 'Letitia Wright', character: 'Maya Johnson' },
            { name: 'John Boyega', character: 'Detective Marcus Cole' },
            { name: 'Hiroyuki Sanada', character: 'Mr. Tanaka' }
        ]
    },
    {
        id: 11,
        title: 'The Painted Veil',
        overview:
            'In 1920s Paris, a struggling artist discovers she can bring her paintings to life. But when a dark masterpiece escapes her control, she must confront the demons of her past before they consume her future.',
        poster_url: '/dummy_poster.jpg',
        backdrop_url: '/dummy_backdrop.jpg',
        release_date: '2024-11-08',
        vote_average: 7.8,
        vote_count: 6890,
        genres: [genres[9].name, genres[3].name, genres[6].name],
        runtime: 119,
        tagline: 'Art imitates death',
        directors: ['Greta Gerwig'],
        budget: '38000000',
        revenue: '124000000',
        actors: [
            { name: 'Thomasin McKenzie', character: 'Claire Beaumont' },
            { name: 'Timothée Chalamet', character: 'Henri Dubois' },
            { name: 'Léa Seydoux', character: 'Madame Rousseau' }
        ]
    },
    {
        id: 12,
        title: 'Velocity',
        overview:
            'In a future where speed is currency, a street racer discovers a conspiracy that threatens to enslave humanity. With only her skills behind the wheel and a ragtag crew, she must outrun the system itself.',
        poster_url: '/dummy_poster.jpg',
        backdrop_url: '/dummy_backdrop.jpg',
        release_date: '2024-12-20',
        vote_average: 7.1,
        vote_count: 7230,
        genres: [genres[0].name, genres[4].name, genres[5].name],
        runtime: 124,
        tagline: 'Fast. Furious. Free.',
        directors: ['Justin Lin'],
        budget: '78000000',
        revenue: '298000000',
        actors: [
            { name: 'Ana de Armas', character: 'Nova Cruz' },
            { name: 'Steven Yeun', character: 'Jin Park' },
            { name: 'Charlize Theron', character: 'The Architect' }
        ]
    }
];

export const mockTVShows: TVShow[] = [
    {
        id: 1,
        name: 'Quantum Divide',
        overview:
            'In a world split between two parallel realities, a team of scientists must navigate both dimensions to prevent a catastrophic collision that would destroy both universes. Each episode reveals new layers of conspiracy and danger.',
        posterPath: 'https://picsum.photos/seed/tv1/400/600',
        backdropPath: 'https://picsum.photos/seed/tv1-back/1280/720',
        firstAirDate: '2024-01-12',
        voteAverage: 8.5,
        voteCount: 18920,
        genres: [genres[4], genres[3], genres[11]],
        numberOfSeasons: 3,
        numberOfEpisodes: 36,
        episodeRunTime: [45, 50],
        tagline: 'Two worlds. One truth.',
        creators: ['Lisa Joy', 'Jonathan Nolan'],
        status: 'Returning Series',
        networks: ['HBO', 'Max'],
        cast: [
            { id: 37, name: 'Pedro Pascal', character: 'Dr. Marcus Reeves' },
            { id: 38, name: 'Sonoya Mizuno', character: 'Dr. Yuki Tanaka' },
            { id: 39, name: 'Brian Cox', character: 'Director Walsh' }
        ]
    },
    {
        id: 2,
        name: 'The Crown Jewel',
        overview:
            'A historical drama following the rise of a powerful merchant family in Renaissance Venice. Intrigue, betrayal, and ambition collide as they navigate the dangerous waters of politics and trade.',
        posterPath: 'https://picsum.photos/seed/tv2/400/600',
        backdropPath: 'https://picsum.photos/seed/tv2-back/1280/720',
        firstAirDate: '2024-02-20',
        voteAverage: 8.2,
        voteCount: 15430,
        genres: [genres[3], genres[6]],
        numberOfSeasons: 2,
        numberOfEpisodes: 20,
        episodeRunTime: [55, 60],
        tagline: 'Power is the ultimate currency',
        creators: ['Peter Morgan'],
        status: 'Returning Series',
        networks: ['Netflix'],
        cast: [
            { id: 40, name: 'Tom Hiddleston', character: 'Lorenzo Medici' },
            { id: 41, name: 'Olivia Colman', character: 'Caterina Sforza' },
            { id: 42, name: 'Mark Rylance', character: 'Cardinal Borgia' }
        ]
    },
    {
        id: 3,
        name: 'Neon Pulse',
        overview:
            'In a cyberpunk Tokyo, a group of hackers fights against corporate tyranny while uncovering a conspiracy that threatens to digitize human consciousness. High-octane action meets philosophical depth.',
        posterPath: 'https://picsum.photos/seed/tv3/400/600',
        backdropPath: 'https://picsum.photos/seed/tv3-back/1280/720',
        firstAirDate: '2024-03-15',
        voteAverage: 8.7,
        voteCount: 22150,
        genres: [genres[4], genres[0], genres[12]],
        numberOfSeasons: 2,
        numberOfEpisodes: 24,
        episodeRunTime: [25, 30],
        tagline: 'Hack the system. Free your mind.',
        creators: ['Shinichirō Watanabe'],
        status: 'Returning Series',
        networks: ['Netflix', 'Crunchyroll'],
        cast: [
            { id: 43, name: 'Takehito Koyasu', character: 'Ryu (voice)' },
            { id: 44, name: 'Maaya Sakamoto', character: 'Akira (voice)' },
            { id: 45, name: 'Kōichi Yamadera', character: 'Ghost (voice)' }
        ]
    },
    {
        id: 4,
        name: 'Wilderness Protocol',
        overview:
            'Ten strangers wake up in a remote wilderness with no memory of how they got there. As they struggle to survive and find answers, they discover they\'re part of a twisted social experiment.',
        posterPath: 'https://picsum.photos/seed/tv4/400/600',
        backdropPath: 'https://picsum.photos/seed/tv4-back/1280/720',
        firstAirDate: '2024-04-10',
        voteAverage: 7.9,
        voteCount: 12340,
        genres: [genres[3], genres[11], genres[5]],
        numberOfSeasons: 1,
        numberOfEpisodes: 10,
        episodeRunTime: [42, 48],
        tagline: 'Survive. Remember. Escape.',
        creators: ['Damon Lindelof'],
        status: 'Ended',
        networks: ['Apple TV+'],
        cast: [
            { id: 46, name: 'Elisabeth Moss', character: 'Sarah Chen' },
            { id: 47, name: 'Sterling K. Brown', character: 'Marcus Williams' },
            { id: 48, name: 'Hong Chau', character: 'Dr. Lin' }
        ]
    },
    {
        id: 5,
        name: 'The Alchemist\'s Guild',
        overview:
            'In an alternate Victorian era where alchemy is real, a young apprentice uncovers a plot to use forbidden transmutations to reshape the world. Magic, mystery, and steampunk aesthetics collide.',
        posterPath: 'https://picsum.photos/seed/tv5/400/600',
        backdropPath: 'https://picsum.photos/seed/tv5-back/1280/720',
        firstAirDate: '2024-05-22',
        voteAverage: 8.1,
        voteCount: 14670,
        genres: [genres[9], genres[11], genres[1]],
        numberOfSeasons: 2,
        numberOfEpisodes: 18,
        episodeRunTime: [50, 55],
        tagline: 'Transform or be transformed',
        creators: ['Neil Gaiman', 'Terry Pratchett'],
        status: 'Returning Series',
        networks: ['Amazon Prime'],
        cast: [
            { id: 49, name: 'Millie Bobby Brown', character: 'Eliza Thornwood' },
            { id: 50, name: 'David Tennant', character: 'Master Cornelius' },
            { id: 51, name: 'Helena Bonham Carter', character: 'Lady Blackwood' }
        ]
    },
    {
        id: 6,
        name: 'Starbound',
        overview:
            'Humanity\'s first interstellar colony ship encounters an alien signal that changes everything. As factions form and tensions rise, the crew must decide whether to continue their mission or investigate the unknown.',
        posterPath: 'https://picsum.photos/seed/tv6/400/600',
        backdropPath: 'https://picsum.photos/seed/tv6-back/1280/720',
        firstAirDate: '2024-06-07',
        voteAverage: 8.3,
        voteCount: 16890,
        genres: [genres[4], genres[3], genres[11]],
        numberOfSeasons: 3,
        numberOfEpisodes: 30,
        episodeRunTime: [45, 50],
        tagline: 'The stars are calling',
        creators: ['Ronald D. Moore'],
        status: 'Returning Series',
        networks: ['Apple TV+'],
        cast: [
            { id: 52, name: 'Oscar Isaac', character: 'Captain James Holden' },
            { id: 53, name: 'Gugu Mbatha-Raw', character: 'Dr. Naomi Nagata' },
            { id: 54, name: 'Jared Harris', character: 'Admiral Anderson' }
        ]
    },
    {
        id: 7,
        name: 'The Last Detective',
        overview:
            'In a near-future where AI has solved most crimes, one old-school detective refuses to retire. When a series of impossible murders occurs, he must prove that human intuition still has value.',
        posterPath: 'https://picsum.photos/seed/tv7/400/600',
        backdropPath: 'https://picsum.photos/seed/tv7-back/1280/720',
        firstAirDate: '2024-07-19',
        voteAverage: 7.8,
        voteCount: 11230,
        genres: [genres[9], genres[11], genres[3]],
        numberOfSeasons: 2,
        numberOfEpisodes: 16,
        episodeRunTime: [48, 52],
        tagline: 'Some cases need a human touch',
        creators: ['Nic Pizzolatto'],
        status: 'Returning Series',
        networks: ['HBO'],
        cast: [
            { id: 55, name: 'Jeff Bridges', character: 'Detective Frank Morgan' },
            { id: 56, name: 'Tessa Thompson', character: 'AI Partner ARIA' },
            { id: 57, name: 'Giancarlo Esposito', character: 'Chief Rivera' }
        ]
    },
    {
        id: 8,
        name: 'Culinary Wars',
        overview:
            'Top chefs from around the world compete in extreme cooking challenges set in exotic locations. But this season, sabotage and secrets threaten to turn friendly competition into something far more dangerous.',
        posterPath: 'https://picsum.photos/seed/tv8/400/600',
        backdropPath: 'https://picsum.photos/seed/tv8-back/1280/720',
        firstAirDate: '2024-08-14',
        voteAverage: 7.5,
        voteCount: 9870,
        genres: [genres[3], genres[5]],
        numberOfSeasons: 1,
        numberOfEpisodes: 12,
        episodeRunTime: [40, 45],
        tagline: 'Cook to survive',
        creators: ['David Chang', 'Anthony Bourdain'],
        status: 'Ended',
        networks: ['Netflix'],
        cast: [
            { id: 58, name: 'Simu Liu', character: 'Chef David Chen' },
            { id: 59, name: 'Aubrey Plaza', character: 'Chef Maria Santos' },
            { id: 60, name: 'Stanley Tucci', character: 'Host Vincent Grey' }
        ]
    },
    {
        id: 9,
        name: 'Echoes in the Dark',
        overview:
            'A podcast host investigating cold cases stumbles upon a pattern connecting unsolved disappearances across decades. As she digs deeper, she realizes the truth is far more terrifying than she imagined.',
        posterPath: 'https://picsum.photos/seed/tv9/400/600',
        backdropPath: 'https://picsum.photos/seed/tv9-back/1280/720',
        firstAirDate: '2024-09-26',
        voteAverage: 8.0,
        voteCount: 13450,
        genres: [genres[6], genres[11], genres[3]],
        numberOfSeasons: 1,
        numberOfEpisodes: 8,
        episodeRunTime: [52, 58],
        tagline: 'The truth echoes forever',
        creators: ['Mike Flanagan'],
        status: 'Ended',
        networks: ['Netflix'],
        cast: [
            { id: 61, name: 'Kaitlyn Dever', character: 'Alex Morrison' },
            { id: 62, name: 'Bill Hader', character: 'Detective Sam Cooper' },
            { id: 63, name: 'Vera Farmiga', character: 'Dr. Helen Cross' }
        ]
    },
    {
        id: 10,
        name: 'The Architects',
        overview:
            'In a world where reality can be designed and built, elite architects compete to create entire worlds. But when one architect goes rogue, the line between creation and destruction blurs.',
        posterPath: 'https://picsum.photos/seed/tv10/400/600',
        backdropPath: 'https://picsum.photos/seed/tv10-back/1280/720',
        firstAirDate: '2024-10-11',
        voteAverage: 8.4,
        voteCount: 17560,
        genres: [genres[4], genres[9], genres[3]],
        numberOfSeasons: 2,
        numberOfEpisodes: 20,
        episodeRunTime: [45, 50],
        tagline: 'Build your reality',
        creators: ['Christopher Nolan', 'Emma Thomas'],
        status: 'Returning Series',
        networks: ['HBO Max'],
        cast: [
            { id: 64, name: 'Cillian Murphy', character: 'Architect Prime' },
            { id: 65, name: 'Emily Blunt', character: 'Maya Construct' },
            { id: 66, name: 'Michael Caine', character: 'The Elder' }
        ]
    },
    {
        id: 11,
        name: 'Blood & Honor',
        overview:
            'A gritty medieval drama following a bastard son\'s rise to power in a kingdom torn by civil war. Loyalty, betrayal, and brutal combat define this epic tale of survival and ambition.',
        posterPath: 'https://picsum.photos/seed/tv11/400/600',
        backdropPath: 'https://picsum.photos/seed/tv11-back/1280/720',
        firstAirDate: '2024-11-03',
        voteAverage: 8.6,
        voteCount: 21340,
        genres: [genres[3], genres[0], genres[9]],
        numberOfSeasons: 4,
        numberOfEpisodes: 40,
        episodeRunTime: [55, 60],
        tagline: 'Honor is earned in blood',
        creators: ['George R.R. Martin', 'Ryan Condal'],
        status: 'Returning Series',
        networks: ['HBO'],
        cast: [
            { id: 67, name: 'Kit Harington', character: 'Aldric the Bastard' },
            { id: 68, name: 'Emilia Clarke', character: 'Queen Isolde' },
            { id: 69, name: 'Charles Dance', character: 'Lord Commander Vane' }
        ]
    },
    {
        id: 12,
        name: 'Frequency Shift',
        overview:
            'A radio DJ discovers she can communicate with people from different time periods through her broadcasts. As she tries to prevent tragedies, she learns that changing the past has unexpected consequences.',
        posterPath: 'https://picsum.photos/seed/tv12/400/600',
        backdropPath: 'https://picsum.photos/seed/tv12-back/1280/720',
        firstAirDate: '2024-12-15',
        voteAverage: 7.7,
        voteCount: 10890,
        genres: [genres[4], genres[3], genres[11]],
        numberOfSeasons: 1,
        numberOfEpisodes: 13,
        episodeRunTime: [42, 46],
        tagline: 'Tune in to the past',
        creators: ['Shonda Rhimes'],
        status: 'Returning Series',
        networks: ['Netflix'],
        cast: [
            { id: 70, name: 'Zendaya', character: 'Riley Harper' },
            { id: 71, name: 'Rami Malek', character: 'Voice from 1985' },
            { id: 72, name: 'Sandra Oh', character: 'Station Manager Kim' }
        ]
    }
];

export const getMovieById = (id: number): Movie | undefined => {
    return mockMovies.find((movie) => movie.id === id);
};

export const getTVShowById = (id: number): TVShow | undefined => {
    return mockTVShows.find((show) => show.id === id);
};
