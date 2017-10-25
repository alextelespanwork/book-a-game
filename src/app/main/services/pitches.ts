import { Pitch } from '../shared/models/pitch';

export const PITCHES: Pitch[] = [
    { id: 1, name: 'Finsbury Leisure Centre', address: '1 Norman St, London EC1V 3PU',types:[1,2,3,4,5] },
    { id: 2, name: 'Ultimate5ASIDE', address: '86-90 Paul St, London EC2A 4NE',types:[1,2,5] },
    { id: 3, name: 'Dream Leagues', address: '35 Kingsland Rd, London E2 8AA',types:[3,4,5] },
    { id: 4, name: 'Blue Hut Youth Centre 5-a-side', address: 'Britannia Walk, London N1', types:[1,2,3] },
    { id: 5, name: 'Mulberry Sports & Leisure Centre', address: 'Richard St, London E1 2JP',types:[1,2,5] },

    { id: 6, name: 'Top Corner Battersea 6-a-side League', address: '149 Battersea Park Rd, London SW8 4BX', types:[1,3,4] },
    { id: 7, name: 'Clapham Sports Leagues - 5/7 a side football and netball leagues', 
                    address: 'Stewart\'s, Stewart\'s Rd, London SW8 4JB',types:[1,2,3,4,5] },
    { id: 8, name: 'Ferndale Community Sports Centre', address: 'Nursery Road, Brixton, London SW9 8BP',types:[1] },
    { id: 9, name: '5aside.org - 5-a-side football leagues', 
                    address: 'Eurolink Business Centre, 49 Effra Rd, Brixton, London SW2 1BZ',types:[1,2] },
    { id: 10, name: 'Top Corner Brixton 7-A-Side Leagues', 
                    address: '255 Shakespeare Rd, Brixton, London SE24 0QN',types:[1,2,4,5] },
    { id: 11, name: 'Powerleague Docklands', 
                    address: 'City Harbour NCP, Selsdon Way, Isle of Dogs, London E14 9GL',types:[1,4,5] },
    { id: 12, name: 'Ballerz League 5-a-side football', 
                    address: 'Timber pond road, Greater London SE16 6AT, London',types:[1,2,3] },
];
