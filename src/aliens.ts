import { AliensType } from './types.js';
import path from 'path';

const serverPath = path.join(__dirname, 'alien_avatars');
console.log('XXXXX', serverPath);

export const aliens: AliensType = [
	{
		id: 1,
		first_name: 'Bacca',
		last_name: 'Booom',
		avatar: `${serverPath}/random-aliens-01.svg`,
		avatar_no_bg: `${serverPath}/random-aliens-no-bg-01.svg`,
		age: 40,
		planet: 'Argon',
		email: 'baccaboom@nav.ar',
		username: 'booomy',
		occupation: 'space cowboy'
	},
	{
		id: 2,
		first_name: 'Aan',
		last_name: 'Haa',
		avatar: `${serverPath}/random-aliens-02.svg`,
		avatar_no_bg: `${serverPath}/random-aliens-no-bg-02.svg`,
		age: 25,
		planet: 'Blondee X4',
		email: 'masterHaa@capt.bl',
		username: 'louree',
		occupation: 'Freight Pilot'
	},
	{
		id: 3,
		first_name: 'Colonel',
		last_name: 'Blarzo',
		avatar: `${serverPath}/random-aliens-03.svg`,
		avatar_no_bg: `${serverPath}/random-aliens-no-bg-03.svg`,
		age: 243,
		planet: 'Ewei',
		email: 'colblarzo@ewei.ew',
		username: 'the Colonel',
		occupation: 'Colonel'
	},
	{
		id: 4,
		first_name: 'Amee',
		last_name: 'Bow',
		avatar: `${serverPath}/random-aliens-04.svg`,
		avatar_no_bg: `${serverPath}/random-aliens-no-bg-04.svg`,
		age: 1,
		planet: 'Euroop',
		email: 'ameebow@mail.eu',
		username: 'Nice Tail',
		occupation: 'Growing'
	},
	{
		id: 5,
		first_name: 'Jel-Y',
		last_name: 'Smail',
		avatar: `${serverPath}/random-aliens-05.svg`,
		avatar_no_bg: `${serverPath}/random-aliens-no-bg-05.svg`,
		age: 4,
		planet: 'Maar',
		email: 'jalee@ccc.ma',
		username: 'Glup',
		occupation: 'Security'
	},
	{
		id: 6,
		first_name: 'Marki',
		last_name: 'Titittt',
		avatar: `${serverPath}/random-aliens-06.svg`,
		avatar_no_bg: `${serverPath}/random-aliens-no-bg-06.svg`,
		age: 67,
		planet: 'Braun XP 3',
		email: 'theboss@braun.xp',
		username: 'The Boss',
		occupation: 'Boss'
	},
	{
		id: 7,
		first_name: 'Grrrrrnthg',
		last_name: 'Eiiiignh',
		avatar: `${serverPath}/random-aliens-07.svg`,
		avatar_no_bg: `${serverPath}/random-aliens-no-bg-07.svg`,
		age: 12,
		planet: 'Bahnah',
		email: 'grrrrrnthg@barkght.bn',
		username: 'Pitosga',
		occupation: 'Student'
	},
	{
		id: 8,
		first_name: 'Rob',
		last_name: 'Otter',
		avatar: `${serverPath}/random-aliens-08.svg`,
		avatar_no_bg: `${serverPath}/random-aliens-no-bg-08.svg`,
		age: 216,
		planet: 'Scrap',
		email: 'rp12345@srp.sc',
		username: 'rp12345',
		occupation: 'Fabric worker'
	},
	{
		id: 9,
		first_name: 'Blargh',
		last_name: 'Blorgh',
		avatar: `${serverPath}/random-aliens-09.svg`,
		avatar_no_bg: `${serverPath}/random-aliens-no-bg-09.svg`,
		age: 32,
		planet: 'Blargh-O-2',
		email: 'blargh@blar.gh',
		username: 'Blarhg Arg Org',
		occupation: 'Explorer'
	},
	{
		id: 10,
		first_name: 'Zippo',
		last_name: 'M2',
		avatar: `${serverPath}/random-aliens-10.svg`,
		avatar_no_bg: `${serverPath}/random-aliens-no-bg-10.svg`,
		age: 124,
		planet: 'M2-34-X',
		email: 'zpp@rcentairu.mm',
		username: 'Ziiiiip',
		occupation: 'Teacher'
	},
	{
		id: 11,
		first_name: 'Espan',
		last_name: 'Tooh',
		avatar: `${serverPath}/random-aliens-11.svg`,
		avatar_no_bg: `${serverPath}/random-aliens-no-bg-11.svg`,
		age: 24,
		planet: 'Laranj',
		email: 'tooh5@lrjna.or',
		username: 'Three Teeth',
		occupation: 'Designer'
	},
	{
		id: 12,
		first_name: 'Fderp',
		last_name: 'Bazerp',
		avatar: `${serverPath}/random-aliens-12.svg`,
		avatar_no_bg: `${serverPath}/random-aliens-no-bg-12.svg`,
		age: 43,
		planet: 'Tatooee',
		email: 'thebazerper@ttooo.en',
		username: 'Nham Nham',
		occupation: 'Taxi Driver'
	}
];
