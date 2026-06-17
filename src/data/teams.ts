export interface TeamSquadMember {
  name: string;
  position: 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';
  number: number;
  club: string;
  role: string;
  achievements?: string[];
  keyPlayer?: boolean;
}

export interface Team {
  id: string;
  name: string;
  code: string;
  flag: string;
  confederation: 'CONMEBOL' | 'UEFA' | 'CONCACAF' | 'CAF' | 'AFC' | 'OFC';
  group: string; // Group A to L
  achievements: string[];
  stats: {
    titles: number;
    appearances: number;
    fifaRanking: number;
  };
  bgGradient: string;
  squad: TeamSquadMember[];
}

export const TEAMS_DATA: Team[] = [
  {
    id: 'argentina',
    name: 'Argentina',
    code: 'ARG',
    flag: '🇦🇷',
    confederation: 'CONMEBOL',
    group: 'Group A',
    achievements: [
      '3x FIFA World Cup Champion (1978, 1986, 2022)',
      '16x Copa América Champion (Latest: 2024)',
      '1x Olympic Gold Medalist (2004, 2008)'
    ],
    stats: { titles: 3, appearances: 18, fifaRanking: 1 },
    bgGradient: 'from-sky-400 to-sky-700',
    squad: [
      { name: 'Lionel Messi', position: 'Forward', number: 10, club: 'Inter Miami CF', role: 'Captain / Inside Playmaker', achievements: ['8x Ballon d\'Or', 'World Cup Champion (2022)', 'Copa América Champion (2024)'], keyPlayer: true },
      { name: 'Lautaro Martínez', position: 'Forward', number: 22, club: 'Inter Milan', role: 'Clinical Striker', achievements: ['Copa América Top Scorer (2024)', 'Serie A MVP (2024)'], keyPlayer: true },
      { name: 'Julián Álvarez', position: 'Forward', number: 9, club: 'Atlético Madrid', role: 'Dynamic Presser', achievements: ['World Cup Champion (2022)', 'Copa América Champion (2024)'] },
      { name: 'Alexis Mac Allister', position: 'Midfielder', number: 20, club: 'Liverpool FC', role: 'Box-to-Box Engine', achievements: ['World Cup Champion (2022)', 'Copa América Champion (2024)'], keyPlayer: true },
      { name: 'Enzo Fernández', position: 'Midfielder', number: 24, club: 'Chelsea FC', role: 'Deep Playmaker', achievements: ['World Cup Best Young Player (2022)', 'Copa América Champion (2024)'] },
      { name: 'Rodrigo De Paul', position: 'Midfielder', number: 7, club: 'Atlético Madrid', role: 'Enforcer / Ball-winner', achievements: ['Copa América Champion (2021, 2024)', 'World Cup Champion (2022)'] },
      { name: 'Emiliano Martínez', position: 'Goalkeeper', number: 23, club: 'Aston Villa FC', role: 'Shot Stopper Extraordinaire', achievements: ['Yachine Trophy Winner', 'Best FIFA Goalkeeper (2022)', 'World Cup Champion (25/25 penalty shootout wins)'], keyPlayer: true },
      { name: 'Cristian Romero', position: 'Defender', number: 13, club: 'Tottenham Hotspur', role: 'Aggressive Centerback', achievements: ['Serie A Defender of Year (2021)', 'World Cup Champion (2022)', 'Copa América Winner (2024)'], keyPlayer: true },
      { name: 'Lisandro Martínez', position: 'Defender', number: 25, club: 'Manchester United', role: 'Ball-playing Centerback', achievements: ['World Cup Champion (2022)', 'Copa América Champion (2024)'] },
      { name: 'Nahuel Molina', position: 'Defender', number: 26, club: 'Atlético Madrid', role: 'Overlapping Fullback', achievements: ['World Cup Champion (2022)'] },
      { name: 'Nicolás Tagliafico', position: 'Defender', number: 3, club: 'Olympique Lyonnais', role: 'Tenacious Leftback', achievements: ['World Cup Champion (2022)'] }
    ]
  },
  {
    id: 'brazil',
    name: 'Brazil',
    code: 'BRA',
    flag: '🇧🇷',
    confederation: 'CONMEBOL',
    group: 'Group B',
    achievements: [
      '5x FIFA World Cup Champion (1958, 1962, 1970, 1994, 2002)',
      '9x Copa América Champion',
      '2x Olympic Gold Medalist (2016, 2020)'
    ],
    stats: { titles: 5, appearances: 22, fifaRanking: 5 },
    bgGradient: 'from-yellow-400 to-emerald-600',
    squad: [
      { name: 'Neymar Jr', position: 'Forward', number: 10, club: 'Al Hilal SFC', role: 'Captain / Creative Catalyst', achievements: ['Brazil All-Time Top Goalscorer', 'Olympic Gold Medalist (2016)'], keyPlayer: true },
      { name: 'Vinícius Júnior', position: 'Forward', number: 7, club: 'Real Madrid CF', role: 'Explosive Winger', achievements: ['2x UEFA Champions League Champion', 'UCL Young Player of Season'], keyPlayer: true },
      { name: 'Raphinha', position: 'Forward', number: 11, club: 'FC Barcelona', role: 'Inside Winger / Space Specialist', achievements: ['La Liga Champion'], keyPlayer: true },
      { name: 'Rodrygo Silva', position: 'Forward', number: 9, club: 'Real Madrid CF', role: 'Tricky Attacker', achievements: ['2x Champions League Champion'] },
      { name: 'Bruno Guimarães', position: 'Midfielder', number: 5, club: 'Newcastle United', role: 'Dictating Playmaker', achievements: ['Olympic Gold Medalist (2020)'], keyPlayer: true },
      { name: 'Lucas Paquetá', position: 'Midfielder', number: 8, club: 'West Ham United', role: 'Creative Creator', achievements: ['Copa América Winner (2019)'] },
      { name: 'Marquinhos', position: 'Defender', number: 4, club: 'Paris Saint-Germain FC', role: 'Veritable Leader', achievements: ['Copa América Winner (2019)', 'Olympic Gold Medalist (2016)'], keyPlayer: true },
      { name: 'Gabriel Magalhães', position: 'Defender', number: 14, club: 'Arsenal FC', role: 'Dominant Centerback', achievements: ['Premier League Golden Glove contributor'] },
      { name: 'Éder Militão', position: 'Defender', number: 3, club: 'Real Madrid CF', role: 'Rapid Centerback', achievements: ['Champions League Winner'] },
      { name: 'Danilo Luiz', position: 'Defender', number: 2, club: 'Juventus FC', role: 'Experienced Fullback', achievements: ['Copa América Runner-up'] },
      { name: 'Alisson Becker', position: 'Goalkeeper', number: 1, club: 'Liverpool FC', role: 'Golden Glove Keeper', achievements: ['Yachine Trophy (2019)', 'Champions League Winner (2019)'], keyPlayer: true }
    ]
  },
  {
    id: 'france',
    name: 'France',
    code: 'FRA',
    flag: '🇫🇷',
    confederation: 'UEFA',
    group: 'Group C',
    achievements: [
      '2x FIFA World Cup Champion (1998, 2018)',
      '2x UEFA European Champion (1984, 2000)',
      '2x FIFA Confederations Cup Champion'
    ],
    stats: { titles: 2, appearances: 16, fifaRanking: 2 },
    bgGradient: 'from-blue-600 to-indigo-900',
    squad: [
      { name: 'Kylian Mbappé', position: 'Forward', number: 10, club: 'Real Madrid CF', role: 'Captain / Inside Forward', achievements: ['FIFA World Cup Champion (2018)', 'World Cup Golden Boot (2022)'], keyPlayer: true },
      { name: 'Ousmane Dembélé', position: 'Forward', number: 11, club: 'Paris Saint-Germain FC', role: 'Ambidextrous Trickster', achievements: ['FIFA World Cup Champion (2018)', 'Bundesliga and La Liga Champion'], keyPlayer: true },
      { name: 'Antoine Griezmann', position: 'Forward', number: 7, club: 'Atlético Madrid', role: 'Tactical Pivot', achievements: ['World Cup Champion (2018)', 'Silver Boot (2018)'], keyPlayer: true },
      { name: 'Aurélien Tchouaméni', position: 'Midfielder', number: 8, club: 'Real Madrid CF', role: 'Master Pivot', achievements: ['UEFA Champions League Winner', 'World Cup Runner-up (2022)'], keyPlayer: true },
      { name: 'Eduardo Camavinga', position: 'Midfielder', number: 6, club: 'Real Madrid CF', role: 'Versatile Midfield Controller', achievements: ['2x Champions League Winner'] },
      { name: 'Warren Zaïre-Emery', position: 'Midfielder', number: 18, club: 'Paris Saint-Germain FC', role: 'Teen Prodigy', achievements: ['Ligue 1 Champion'] },
      { name: 'William Saliba', position: 'Defender', number: 3, club: 'Arsenal FC', role: 'Impenetrable Wall', achievements: ['PFA Team of the Year (2x)'], keyPlayer: true },
      { name: 'Dayot Upamecano', position: 'Defender', number: 4, club: 'Bayern Munich', role: 'Physical Defender', achievements: ['Bundesliga Champion'] },
      { name: 'Theo Hernández', position: 'Defender', number: 22, club: 'AC Milan', role: 'Freight Train Leftback', achievements: ['Serie A Champion (2022)'] },
      { name: 'Benjamin Pavard', position: 'Defender', number: 2, club: 'Inter Milan', role: 'Solid Fullback', achievements: ['FIFA World Cup Champion (2018)'] },
      { name: 'Mike Maignan', position: 'Goalkeeper', number: 1, club: 'AC Milan', role: 'Defending Penalty Hero', achievements: ['Serie A Best Goalkeeper', 'Serie A Champion (2022)'], keyPlayer: true }
    ]
  },
  {
    id: 'spain',
    name: 'Spain',
    code: 'ESP',
    flag: '🇪🇸',
    confederation: 'UEFA',
    group: 'Group D',
    achievements: [
      '1x FIFA World Cup Champion (2010)',
      '4x UEFA European Champion (1964, 2008, 2012, 2024)',
      '1x UEFA Nations League Champion (2023)'
    ],
    stats: { titles: 1, appearances: 16, fifaRanking: 3 },
    bgGradient: 'from-red-650 to-orange-600',
    squad: [
      { name: 'Lamine Yamal', position: 'Forward', number: 19, club: 'FC Barcelona', role: 'Inverted Playmaking Winger', achievements: ['UEFA Euro 2024 Champion', 'Euro 2024 Best Young Player'], keyPlayer: true },
      { name: 'Pedri González', position: 'Midfielder', number: 20, club: 'FC Barcelona', role: 'Central Maestro', achievements: ['Golden Boy (2021)', 'Euro 2024 Champion'], keyPlayer: true },
      { name: 'Gavi Gavira', position: 'Midfielder', number: 9, club: 'FC Barcelona', role: 'Tenacious Warrior', achievements: ['Golden Boy (2022)', 'UEFA Nations League (2023)'], keyPlayer: true },
      { name: 'Ferran Torres', position: 'Forward', number: 11, club: 'FC Barcelona', role: 'Predatory Inside Space Runner', achievements: ['UEFA Euro 2024 Champion'], keyPlayer: true },
      { name: 'Rodri Cascante', position: 'Midfielder', number: 16, club: 'Manchester City', role: 'Captain / Tactical Anchor', achievements: ['Ballon d\'Or Favorite', 'UEFA Euro 2024 Player of Tournament', 'UCL Final MVP (2023)'], keyPlayer: true },
      { name: 'Nico Williams', position: 'Forward', number: 17, club: 'Athletic Bilbao', role: 'Explosive Winger', achievements: ['UEFA Euro 2024 Champion', 'Euro 2024 Final MVP'], keyPlayer: true },
      { name: 'Dani Carvajal', position: 'Defender', number: 2, club: 'Real Madrid CF', role: 'Elite Champion Fullback', achievements: ['6x Champions League Winner', 'Euro 2024 Champion'], keyPlayer: true },
      { name: 'Robin Le Normand', position: 'Defender', number: 3, club: 'Atlético Madrid', role: 'Steady Centerback', achievements: ['Euro 2024 Champion'] },
      { name: 'Aymeric Laporte', position: 'Defender', number: 14, club: 'Al Nassr FC', role: 'Ball-playing Defender', achievements: ['Euro 2024 Champion', 'Premier League Champion (5x)'], keyPlayer: true },
      { name: 'Alejandro Grimaldo', position: 'Defender', number: 24, club: 'Bayer Leverkusen', role: 'Free-kick Maestro', achievements: ['Euro 2024 Champion', 'Bundesliga Invincible Champion'], keyPlayer: true },
      { name: 'Unai Simón', position: 'Goalkeeper', number: 1, club: 'Athletic Bilbao', role: 'Surgical Keeper', achievements: ['Zamora Trophy (2024)', 'Euro 2024 Champion'], keyPlayer: true }
    ]
  },
  {
    id: 'portugal',
    name: 'Portugal',
    code: 'POR',
    flag: '🇵🇹',
    confederation: 'UEFA',
    group: 'Group E',
    achievements: [
      '1x Third Place Finish back in 1966',
      '1x UEFA European Champion (2016)',
      '1x UEFA Nations League Champion (2019)'
    ],
    stats: { titles: 0, appearances: 8, fifaRanking: 6 },
    bgGradient: 'from-emerald-600 to-red-650',
    squad: [
      { name: 'Cristiano Ronaldo', position: 'Forward', number: 7, club: 'Al Nassr FC', role: 'Captain / Legend Poacher', achievements: ['5x Ballon d\'Or', 'Euro 2016 Champion', 'Scores in 5 consecutive World Cups'], keyPlayer: true },
      { name: 'Bruno Fernandes', position: 'Midfielder', number: 8, club: 'Manchester United', role: 'Creator-in-Chief', achievements: ['Portuguese Footballer of Year'], keyPlayer: true },
      { name: 'Bernardo Silva', position: 'Midfielder', number: 10, club: 'Manchester City', role: 'Press-Resistant Conductor', achievements: ['UCL Winner (2023)', 'Premier League Winner (6x)'], keyPlayer: true },
      { name: 'Rafael Leão', position: 'Forward', number: 17, club: 'AC Milan', role: 'Sprinting Powerhouse', achievements: ['Serie A MVP (2022)'], keyPlayer: true },
      { name: 'Vitinha', position: 'Midfielder', number: 23, club: 'Paris Saint-Germain FC', role: 'Creative Maestro', achievements: ['Ligue 1 Champion'] },
      { name: 'João Neves', position: 'Midfielder', number: 15, club: 'Paris Saint-Germain FC', role: 'Young Anchor', achievements: ['Portuguese Golden Boy prospect'] },
      { name: 'Rúben Dias', position: 'Defender', number: 4, club: 'Manchester City', role: 'Defensive Anchor', achievements: ['Premier League Player of Season (2021)', 'UCL Winner (2023)'], keyPlayer: true },
      { name: 'João Cancelo', position: 'Defender', number: 2, club: 'Al Hilal SFC', role: 'Attacking Fullback', achievements: ['Serie A, Premier League, La Liga, Bundesliga winner'] },
      { name: 'Diogo Dalot', position: 'Defender', number: 20, club: 'Manchester United', role: 'Consistent Rightback', achievements: ['Manchester United Player of Year (2024)'] },
      { name: 'Nuno Mendes', position: 'Defender', number: 19, club: 'Paris Saint-Germain FC', role: 'Lightning Leftback', achievements: ['Ligue 1 Team of Year'] },
      { name: 'Diogo Costa', position: 'Goalkeeper', number: 1, club: 'FC Porto', role: 'Shootout wall', achievements: ['First keeper to save 3 consecutive penalties in Euros history (2024)'], keyPlayer: true }
    ]
  },
  {
    id: 'usa',
    name: 'United States',
    code: 'USA',
    flag: '🇺🇸',
    confederation: 'CONCACAF',
    group: 'Group F',
    achievements: [
      '1x Third Place Finish (1930 World Cup)',
      '7x CONCACAF Gold Cup Champion',
      '3x CONCACAF Nations League Champion'
    ],
    stats: { titles: 0, appearances: 11, fifaRanking: 11 },
    bgGradient: 'from-blue-700 via-white/10 to-red-650',
    squad: [
      { name: 'Christian Pulisic', position: 'Forward', number: 11, club: 'AC Milan', role: 'Captain / "Captain America"', achievements: ['UEFA Champions League Winner (2021)', '3x Nations League Winner'], keyPlayer: true },
      { name: 'Weston McKennie', position: 'Midfielder', number: 8, club: 'Juventus FC', role: 'Intense Dynamo', achievements: ['Coppa Italia Champion'], keyPlayer: true },
      { name: 'Tyler Adams', position: 'Midfielder', number: 4, club: 'AFC Bournemouth', role: 'Engine Room Anchor', achievements: ['MLS Cup Champion'], keyPlayer: true },
      { name: 'Gio Reyna', position: 'Midfielder', number: 10, club: 'Borussia Dortmund', role: 'Technical Spark', achievements: ['DFB-Pokal Winner'] },
      { name: 'Folarin Balogun', position: 'Forward', number: 9, club: 'AS Monaco', role: 'Lethal Striker', achievements: ['CONCACAF Nations League Top Scorer'] },
      { name: 'Timothy Weah', position: 'Forward', number: 21, club: 'Juventus FC', role: 'Speedy Winger', achievements: ['Ligue 1 Champion (Lille)'] },
      { name: 'Antonee Robinson', position: 'Defender', number: 3, club: 'Fulham FC', role: 'Jedi Fullback', achievements: ['Fulham Player of the Season nominee'], keyPlayer: true },
      { name: 'Chris Richards', position: 'Defender', number: 15, club: 'Crystal Palace', role: 'Solid Centerback', achievements: ['CONCACAF Nations League Champion'] },
      { name: 'Cameron Carter-Vickers', position: 'Defender', number: 2, club: 'Celtic FC', role: 'Powerful Centerback', achievements: ['Scottish Premiership Champion'] },
      { name: 'Sergiño Dest', position: 'Defender', number: 21, club: 'PSV Eindhoven', role: 'Flamboyant Rightback', achievements: ['Eredivisie Champion'] },
      { name: 'Matt Turner', position: 'Goalkeeper', number: 1, club: 'Crystal Palace', role: 'Agile Guard', achievements: ['CONCACAF Gold Cup Best Keeper'], keyPlayer: true }
    ]
  },
  {
    id: 'germany',
    name: 'Germany',
    code: 'GER',
    flag: '🇩🇪',
    confederation: 'UEFA',
    group: 'Group G',
    achievements: [
      '4x FIFA World Cup Champion (1954, 1974, 1990, 2014)',
      '3x UEFA European Champion',
      '1x FIFA Confederations Cup Champion'
    ],
    stats: { titles: 4, appearances: 20, fifaRanking: 12 },
    bgGradient: 'from-gray-700 via-gray-100 to-black',
    squad: [
      { name: 'Jamal Musiala', position: 'Midfielder', number: 10, club: 'Bayern Munich', role: 'Dribbling Virtuoso', achievements: ['Bundesliga Champion', 'Euro 2024 Golden Boot shared'], keyPlayer: true },
      { name: 'Florian Wirtz', position: 'Midfielder', number: 17, club: 'Bayer Leverkusen', role: 'Playmaking Icon', achievements: ['Bundesliga Player of Season (2024)', 'DFB Pokal Winner'], keyPlayer: true },
      { name: 'Kai Havertz', position: 'Forward', number: 7, club: 'Arsenal FC', role: 'Space-Searching Attacker', achievements: ['UCL Final Goal Scorer (2021)'], keyPlayer: true },
      { name: 'Joshua Kimmich', position: 'Midfielder', number: 6, club: 'Bayern Munich', role: 'Captain / Intelligent Tactician', achievements: ['Champions League Winner', '8x Bundesliga Champion'], keyPlayer: true },
      { name: 'İlkay Gündoğan', position: 'Midfielder', number: 8, club: 'FC Barcelona', role: 'Experienced Catalyst', achievements: ['Treble-winning Captain (Man City, 2023)'] },
      { name: 'Leroy Sané', position: 'Forward', number: 19, club: 'Bayern Munich', role: 'Furious Winger', achievements: ['Premier League & Bundesliga Champion'] },
      { name: 'Antonio Rüdiger', position: 'Defender', number: 2, club: 'Real Madrid CF', role: 'Fierce Wall', achievements: ['2x UEFA Champions League Winner'], keyPlayer: true },
      { name: 'Jonathan Tah', position: 'Defender', number: 4, club: 'Bayer Leverkusen', role: 'Colossal Centurion', achievements: ['Invincible Bundesliga Champion'] },
      { name: 'David Raum', position: 'Defender', number: 22, club: 'RB Leipzig', role: 'Crossing Machine', achievements: ['DFB-Pokal Winner'] },
      { name: 'Nico Schlotterbeck', position: 'Defender', number: 15, club: 'Borussia Dortmund', role: 'Leaping Gladiator', achievements: ['UCL Finalist (2024)'] },
      { name: 'Marc-André ter Stegen', position: 'Goalkeeper', number: 1, club: 'FC Barcelona', role: 'Surgical Sweeper', achievements: ['La Liga MVP (2023)'], keyPlayer: true }
    ]
  },
  {
    id: 'england',
    name: 'England',
    code: 'ENG',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    confederation: 'UEFA',
    group: 'Group H',
    achievements: [
      '1x FIFA World Cup Champion (1966)',
      '2x UEFA European Championship Runner-up (2020, 2024)',
      '1x UEFA Nations League Third Place'
    ],
    stats: { titles: 1, appearances: 16, fifaRanking: 4 },
    bgGradient: 'from-blue-800 to-red-700',
    squad: [
      { name: 'Harry Kane', position: 'Forward', number: 9, club: 'Bayern Munich', role: 'Captain / Elite Goal-machine', achievements: ['World Cup Golden Boot (2018)', 'European Golden Shoe'], keyPlayer: true },
      { name: 'Jude Bellingham', position: 'Midfielder', number: 10, club: 'Real Madrid CF', role: 'All-Action Phenomenon', achievements: ['La Liga Player of Season', 'UCL Champion (2024)'], keyPlayer: true },
      { name: 'Bukayo Saka', position: 'Forward', number: 7, club: 'Arsenal FC', role: 'Starboy Creator', achievements: ['England Men\'s Player of the Year (2x)'], keyPlayer: true },
      { name: 'Phil Foden', position: 'Midfielder', number: 4, club: 'Manchester City', role: 'Stockport Iniesta', achievements: ['PFA Players\' Player of the Year (2024)', 'UCL Winner'], keyPlayer: true },
      { name: 'Declan Rice', position: 'Midfielder', number: 6, club: 'Arsenal FC', role: 'Defensive Anchor', achievements: ['UEFA Conference League Champion'], keyPlayer: true },
      { name: 'Cole Palmer', position: 'Midfielder', number: 20, club: 'Chelsea FC', role: '"Cold" Palmer Creator', achievements: ['PFA Young Player of the Year (2024)'], keyPlayer: true },
      { name: 'John Stones', position: 'Defender', number: 5, club: 'Manchester City', role: 'Libero Maestro', achievements: ['Champions League Winner (2023)'], keyPlayer: true },
      { name: 'Kyle Walker', position: 'Defender', number: 2, club: 'Manchester City', role: 'Sprint king Defender', achievements: ['UCL Winner (2023)'], keyPlayer: true },
      { name: 'Trent Alexander-Arnold', position: 'Defender', number: 18, club: 'Liverpool FC', role: 'Ranged Passer', achievements: ['Champions League, Premier League Winner'] },
      { name: 'Marc Guéhi', position: 'Defender', number: 14, club: 'Crystal Palace', role: 'Composed Wall', achievements: ['Euro 2024 Team of the Tournament'] },
      { name: 'Jordan Pickford', position: 'Goalkeeper', number: 1, club: 'Everton FC', role: 'Vocal Shot stopper', achievements: ['Euro Golden Glove (2020)'], keyPlayer: true }
    ]
  },
  {
    id: 'morocco',
    name: 'Morocco',
    code: 'MAR',
    flag: '🇲🇦',
    confederation: 'CAF',
    group: 'Group I',
    achievements: [
      '1x Historic FIFA World Cup Fourth Place (2022 - Africa Record)',
      '1x Africa Cup of Nations Champion (1976)',
      '1x African Nations Championship Winner'
    ],
    stats: { titles: 0, appearances: 6, fifaRanking: 14 },
    bgGradient: 'from-red-600 to-green-800',
    squad: [
      { name: 'Achraf Hakimi', position: 'Defender', number: 2, club: 'Paris Saint-Germain FC', role: 'Captain / Lightning Fullback', achievements: ['CAF Team of Year', 'Champions League Winner (Real Madrid)'], keyPlayer: true },
      { name: 'Brahim Díaz', position: 'Midfielder', number: 10, club: 'Real Madrid CF', role: 'Trickster Playmaker', achievements: ['Champions League Winner (2024)', 'La Liga Champion'], keyPlayer: true },
      { name: 'Youssef En-Nesyri', position: 'Forward', number: 19, club: 'Fenerbahçe SK', role: 'High-Leaping Target Man', achievements: ['Scored famous headers in 2022 World Cup vs Portugal'], keyPlayer: true },
      { name: 'Sofyan Amrabat', position: 'Midfielder', number: 4, club: 'Fenerbahçe SK', role: 'Gladiator Anchor', achievements: ['FIFA World Cup Semi-Finalist icon'], keyPlayer: true },
      { name: 'Azzedine Ounahi', position: 'Midfielder', number: 8, club: 'Panathinaikos', role: 'Dribbling Engine', achievements: ['Elogiated by Luis Enrique in 2022 WC'] },
      { name: 'Hakim Ziyech', position: 'Forward', number: 7, club: 'Galatasaray', role: 'Wizard Crosser', achievements: ['Champions League Winner (Chelsea)'] },
      { name: 'Amine Adli', position: 'Forward', number: 21, club: 'Bayer Leverkusen', role: 'Furious Speedster', achievements: ['Bundesliga Invincible Winner'] },
      { name: 'Nayef Aguerd', position: 'Defender', number: 5, club: 'Real Sociedad', role: 'Composed Centerback', achievements: ['UEFA Conference League Winner'] },
      { name: 'Romain Saïss', position: 'Defender', number: 6, club: 'Al Shabab', role: 'Veteran Shield', achievements: ['Led Morocco in historical 2022 run'] },
      { name: 'Noussair Mazraoui', position: 'Defender', number: 3, club: 'Manchester United', role: 'Technical Fullback', achievements: ['Bundesliga & Eredivisie Winner'] },
      { name: 'Yassine Bounou', position: 'Goalkeeper', number: 1, club: 'Al Hilal SFC', role: '"Bono" Penalty Stopper', achievements: ['La Liga Zamora Winner', 'UEFA Europa League Champion'], keyPlayer: true }
    ]
  },
  {
    id: 'japan',
    name: 'Japan',
    code: 'JPN',
    flag: '🇯🇵',
    confederation: 'AFC',
    group: 'Group J',
    achievements: [
      '4x AFC Asian Cup Champion (1992, 2000, 2004, 2011)',
      '4x World Cup Round of 16 (2002, 2010, 2018, 2022)',
      '1x Olympic Fourth Place Finish'
    ],
    stats: { titles: 0, appearances: 7, fifaRanking: 16 },
    bgGradient: 'from-blue-750 via-blue-900 to-[#020205]',
    squad: [
      { name: 'Kaoru Mitoma', position: 'Forward', number: 7, club: 'Brighton & Hove Albion', role: 'Dribbling Academic', achievements: ['Thesis on 1v1 dribbling', 'Premier League Elite Winger'], keyPlayer: true },
      { name: 'Takefusa Kubo', position: 'Forward', number: 20, club: 'Real Sociedad', role: 'Samba-Samurai Playmaker', achievements: ['La Liga MVP Winner highlights'], keyPlayer: true },
      { name: 'Wataru Endo', position: 'Midfielder', number: 6, club: 'Liverpool FC', role: 'Captain / Midfield Tank', achievements: ['Bundesliga Duel Monster (6x)', 'EFL Cup Winner'], keyPlayer: true },
      { name: 'Ritsu Doan', position: 'Forward', number: 10, club: 'SC Freiburg', role: 'Clutch Goalscorer', achievements: ['Scored vs Spain and Germany in 2022 WC'] },
      { name: 'Daichi Kamada', position: 'Midfielder', number: 8, club: 'Crystal Palace', role: 'Tactical Space Finder', achievements: ['UEFA Europa League Champion (2022)'] },
      { name: 'Takumi Minamino', position: 'Forward', number: 18, club: 'AS Monaco', role: 'Tenacious Attacker', achievements: ['Premier League Winner (Liverpool)'] },
      { name: 'Hidemasa Morita', position: 'Midfielder', number: 5, club: 'Sporting CP', role: 'Possession Dictator', achievements: ['Primeira Liga Champion'] },
      { name: 'Takehiro Tomiyasu', position: 'Defender', number: 22, club: 'Arsenal FC', role: 'Bulletproof Defender', achievements: ['Arsenal solid defensive wall'], keyPlayer: true },
      { name: 'Ko Itakura', position: 'Defender', number: 4, club: 'Borussia Mönchengladbach', role: 'Air Shield', achievements: ['Eredivisie Winner'] },
      { name: 'Hiroki Ito', position: 'Defender', number: 21, club: 'Bayern Munich', role: 'Left-sided Giant', achievements: ['Stuttgart Runner-up helper'] },
      { name: 'Zion Suzuki', position: 'Goalkeeper', number: 12, club: 'Parma', role: 'Ironclad Young Keeper', achievements: ['Youngest debutant for Urawa Reds'], keyPlayer: true }
    ]
  },
  {
    id: 'mexico',
    name: 'Mexico',
    code: 'MEX',
    flag: '🇲🇽',
    confederation: 'CONCACAF',
    group: 'Group K',
    achievements: [
      '2x FIFA World Cup Quarterfinalist (1970, 1986 - Host)',
      '12x CONCACAF Gold Cup Champion',
      '1x Olympic Gold Medalist (London 2012)'
    ],
    stats: { titles: 0, appearances: 17, fifaRanking: 15 },
    bgGradient: 'from-emerald-700 to-red-700Style',
    squad: [
      { name: 'Edson Álvarez', position: 'Midfielder', number: 4, club: 'West Ham United', role: 'Captain / Defensive Machine', achievements: ['Eredivisie Champion', 'Gold Cup Champion'], keyPlayer: true },
      { name: 'Santiago Giménez', position: 'Forward', number: 11, club: 'Feyenoord Rotterdam', role: '"Bebote" Lead Striker', achievements: ['Eredivisie Champion', 'Gold Cup Final Winning Goal'], keyPlayer: true },
      { name: 'Hirving "Chucky" Lozano', position: 'Forward', number: 22, club: 'San Diego FC', role: 'Explosive Veteran Spark', achievements: ['Serie A Champion (Napoli)', 'Eredivisie Champion'], keyPlayer: true },
      { name: 'Luis Chávez', position: 'Midfielder', number: 24, club: 'Dynamo Moscow', role: 'Free-Kick wizard', achievements: ['Gold Cup Champion', 'Saudi 2022 World Cup Goal of Tournament Nominee'] },
      { name: 'Orbelín Pineda', position: 'Midfielder', number: 17, club: 'AEK Athens', role: 'Dancing playmaking asset', achievements: ['Super League Greece MVP'] },
      { name: 'César Montes', position: 'Defender', number: 3, club: 'Lokomotiv Moscow', role: 'Tower Defender', achievements: ['Gold Cup Champion'] },
      { name: 'Johan Vásquez', position: 'Defender', number: 5, club: 'Genoa CFC', role: 'Sturdy Centerback', achievements: ['Olympic Bronze Medalist'] },
      { name: 'Jorge Sánchez', position: 'Defender', number: 2, club: 'Cruz Azul', role: 'Aggressive Rightback', achievements: ['Eredivisie Champion'] },
      { name: 'Gerardo Arteaga', position: 'Defender', number: 6, club: 'Monterrey', role: 'Engine Leftback', achievements: ['Belgian Cup winner'] },
      { name: 'Santiago Muñoz', position: 'Forward', number: 19, club: 'Santos Laguna', role: 'Technical Striker', achievements: ['U17 World Cup Runner-up'] },
      { name: 'Luis Malagón', position: 'Goalkeeper', number: 1, club: 'Club América', role: 'Lightning Reflexes', achievements: ['Liga MX Champion (Bicampeón)'], keyPlayer: true }
    ]
  },
  {
    id: 'canada',
    name: 'Canada',
    code: 'CAN',
    flag: '🇨🇦',
    confederation: 'CONCACAF',
    group: 'Group L',
    achievements: [
      '2x CONCACAF Gold Cup Champion (1985, 2000)',
      '1x historic Copa América Fourth Place (2024 Debut)',
      '3rd Overall FIFA World Cup Appearance'
    ],
    stats: { titles: 0, appearances: 3, fifaRanking: 38 },
    bgGradient: 'from-red-600 via-zinc-150 to-red-800',
    squad: [
      { name: 'Alphonso Davies', position: 'Defender', number: 19, club: 'Bayern Munich', role: 'Captain / "Phonzie" Speed Daemon', achievements: ['UEFA Champions League Winner (2020)', '6x Bundesliga Champion'], keyPlayer: true },
      { name: 'Jonathan David', position: 'Forward', number: 10, club: 'Lille OSC', role: 'Cold Assassin Striker', achievements: ['Ligue 1 Champion (2021)', 'Copa América Debut Standout'], keyPlayer: true },
      { name: 'Cyle Larin', position: 'Forward', number: 17, club: 'RCD Mallorca', role: 'Power Poacher', achievements: ['Canada All-time top scorer'] },
      { name: 'Stephen Eustáquio', position: 'Midfielder', number: 7, club: 'FC Porto', role: 'Midfield Controller', achievements: ['Taça de Portugal winner'], keyPlayer: true },
      { name: 'Ismaël Koné', position: 'Midfielder', number: 8, club: 'Olympique de Marseille', role: 'Dynamic Box-to-Box', achievements: ['Gold Cup stand-out'] },
      { name: 'Tajon Buchanan', position: 'Forward', number: 11, club: 'Inter Milan', role: 'Tricky Wingback', achievements: ['Serie A Champion (2024)'] },
      { name: 'Alistair Johnston', position: 'Defender', number: 2, club: 'Celtic FC', role: 'Gladiator Rightback', achievements: ['Scottish Treble Winner'], keyPlayer: true },
      { name: 'Kamal Miller', position: 'Defender', number: 3, club: 'Portland Timbers', role: 'Resolute Centerback', achievements: ['MLS Cup contributor'] },
      { name: 'Moïse Bombito', position: 'Defender', number: 15, club: 'OGC Nice', role: 'Tackling Champion', achievements: ['Copa América breakout rookie'] },
      { name: 'Richie Laryea', position: 'Defender', number: 22, club: 'Toronto FC', role: 'Versatile Aggressor', achievements: ['Voyageurs Cup Winner'] },
      { name: 'Maxime Crépeau', position: 'Goalkeeper', number: 16, club: 'Portland Timbers', role: 'Fearless Sweeper', achievements: ['MLS Cup Champion (2022)'], keyPlayer: true }
    ]
  }
];

// Quick map of all teams to display in 48-team grouping
export const ALL_48_TEAMS: { name: string; group: string; flag: string; confederation: string; hasDetailedSquad: boolean; id?: string }[] = [
  // Group A
  { name: 'Mexico', group: 'Group A', flag: '🇲🇽', confederation: 'CONCACAF', hasDetailedSquad: true, id: 'mexico' },
  { name: 'Ecuador', group: 'Group A', flag: '🇪🇨', confederation: 'CONMEBOL', hasDetailedSquad: false },
  { name: 'United Arab Emirates', group: 'Group A', flag: '🇦🇪', confederation: 'AFC', hasDetailedSquad: false },
  { name: 'Cameroon', group: 'Group A', flag: '🇨🇲', confederation: 'CAF', hasDetailedSquad: false },
  // Group B
  { name: 'Canada', group: 'Group B', flag: '🇨🇦', confederation: 'CONCACAF', hasDetailedSquad: true, id: 'canada' },
  { name: 'Uruguay', group: 'Group B', flag: '🇺🇾', confederation: 'CONMEBOL', hasDetailedSquad: false },
  { name: 'South Korea', group: 'Group B', flag: '🇰🇷', confederation: 'AFC', hasDetailedSquad: false },
  { name: 'Angola', group: 'Group B', flag: '🇦🇴', confederation: 'CAF', hasDetailedSquad: false },
  // Group C
  { name: 'United States', group: 'Group C', flag: '🇺🇸', confederation: 'CONCACAF', hasDetailedSquad: true, id: 'usa' },
  { name: 'Colombia', group: 'Group C', flag: '🇨🇴', confederation: 'CONMEBOL', hasDetailedSquad: false },
  { name: 'Senegal', group: 'Group C', flag: '🇸🇳', confederation: 'CAF', hasDetailedSquad: false },
  { name: 'Iraq', group: 'Group C', flag: '🇮🇶', confederation: 'AFC', hasDetailedSquad: false },
  // Group D
  { name: 'Brazil', group: 'Group D', flag: '🇧🇷', confederation: 'CONMEBOL', hasDetailedSquad: true, id: 'brazil' },
  { name: 'Switzerland', group: 'Group D', flag: '🇨🇭', confederation: 'UEFA', hasDetailedSquad: false },
  { name: 'Morocco', group: 'Group D', flag: '🇲🇦', confederation: 'CAF', hasDetailedSquad: true, id: 'morocco' },
  { name: 'Japan', group: 'Group D', flag: '🇯🇵', confederation: 'AFC', hasDetailedSquad: true, id: 'japan' },
  // Group E
  { name: 'Argentina', group: 'Group E', flag: '🇦🇷', confederation: 'CONMEBOL', hasDetailedSquad: true, id: 'argentina' },
  { name: 'Sweden', group: 'Group E', flag: '🇸🇪', confederation: 'UEFA', hasDetailedSquad: false },
  { name: 'Iran', group: 'Group E', flag: '🇮🇷', confederation: 'AFC', hasDetailedSquad: false },
  { name: 'Egypt', group: 'Group E', flag: '🇪🇬', confederation: 'CAF', hasDetailedSquad: false },
  // Group F
  { name: 'France', group: 'Group F', flag: '🇫🇷', confederation: 'UEFA', hasDetailedSquad: true, id: 'france' },
  { name: 'Croatia', group: 'Group F', flag: '🇭🇷', confederation: 'UEFA', hasDetailedSquad: false },
  { name: 'Australia', group: 'Group F', flag: '🇦🇺', confederation: 'AFC', hasDetailedSquad: false },
  { name: 'Nigeria', group: 'Group F', flag: '🇳🇬', confederation: 'CAF', hasDetailedSquad: false },
  // Group G
  { name: 'Portugal', group: 'Group G', flag: '🇵🇹', confederation: 'UEFA', hasDetailedSquad: true, id: 'portugal' },
  { name: 'Netherlands', group: 'Group G', flag: '🇳🇱', confederation: 'UEFA', hasDetailedSquad: false },
  { name: 'Saudi Arabia', group: 'Group G', flag: '🇸🇦', confederation: 'AFC', hasDetailedSquad: false },
  { name: 'Algeria', group: 'Group G', flag: '🇩🇿', confederation: 'CAF', hasDetailedSquad: false },
  // Group H
  { name: 'Spain', group: 'Group H', flag: '🇪🇸', confederation: 'UEFA', hasDetailedSquad: true, id: 'spain' },
  { name: 'Belgium', group: 'Group H', flag: '🇧🇪', confederation: 'UEFA', hasDetailedSquad: false },
  { name: 'Qatar', group: 'Group H', flag: '🇶🇦', confederation: 'AFC', hasDetailedSquad: false },
  { name: 'Tunisia', group: 'Group H', flag: '🇹🇳', confederation: 'CAF', hasDetailedSquad: false },
  // Group I
  { name: 'Germany', group: 'Group I', flag: '🇩🇪', confederation: 'UEFA', hasDetailedSquad: true, id: 'germany' },
  { name: 'Chile', group: 'Group I', flag: '🇨🇱', confederation: 'CONMEBOL', hasDetailedSquad: false },
  { name: 'Oman', group: 'Group I', flag: '🇴🇲', confederation: 'AFC', hasDetailedSquad: false },
  { name: 'Ivory Coast', group: 'Group I', flag: '🇨🇮', confederation: 'CAF', hasDetailedSquad: false },
  // Group J
  { name: 'England', group: 'Group J', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', confederation: 'UEFA', hasDetailedSquad: true, id: 'england' },
  { name: 'Peru', group: 'Group J', flag: '🇵🇪', confederation: 'CONMEBOL', hasDetailedSquad: false },
  { name: 'China', group: 'Group J', flag: '🇨🇳', confederation: 'AFC', hasDetailedSquad: false },
  { name: 'South Africa', group: 'Group J', flag: '🇿🇦', confederation: 'CAF', hasDetailedSquad: false },
  // Group K
  { name: 'Italy', group: 'Group K', flag: '🇮🇹', confederation: 'UEFA', hasDetailedSquad: false },
  { name: 'Denmark', group: 'Group K', flag: '🇩🇰', confederation: 'UEFA', hasDetailedSquad: false },
  { name: 'Uzbekistan', group: 'Group K', flag: '🇺🇿', confederation: 'AFC', hasDetailedSquad: false },
  { name: 'Ghana', group: 'Group K', flag: '🇬🇭', confederation: 'CAF', hasDetailedSquad: false },
  // Group L
  { name: 'Belgium', group: 'Group L', flag: '🇧🇪', confederation: 'UEFA', hasDetailedSquad: false },
  { name: 'New Zealand', group: 'Group L', flag: '🇳🇿', confederation: 'OFC', hasDetailedSquad: false },
  { name: 'Panama', group: 'Group L', flag: '🇵🇦', confederation: 'CONCACAF', hasDetailedSquad: false },
  { name: 'Mali', group: 'Group L', flag: '🇲🇱', confederation: 'CAF', hasDetailedSquad: false }
];
