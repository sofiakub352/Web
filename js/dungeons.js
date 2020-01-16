/*exported addDungeon, removeDungeon, lockBtn*/

var dungeon = ["<li><a class='lock' href='https://classic.wowhead.com/the-deadmines' target='_blank'>Deadmines</a> / 15-60 / 15 / 10 / Westfall, Eastern Kingdoms</li>"];

var moreDungeons = [
	"<li><a href='https://classic.wowhead.com/ragefire-chasm' class='lock' target='_blank'>Ragefire Chasm</a> / 15-60 / 15 / 10 / Orgrimmar, Kalimdor</li>",
	"<li><a href='https://classic.wowhead.com/wailing-caverns' class='lock' target='_blank'>Wailing Caverns</a> / 17-60 / 17 / 10 / Northern Barrens, Kalimdor</li>",
	"<li><a href='https://classic.wowhead.com/shadowfang-keep' class='lock' target='_blank'>Shadowfang Keep</a> / 20-60 / 17 / 11 / Silverpine Forest, Eastern Kingdoms</li>",
	"<li><a href='https://classic.wowhead.com/blackfathom-deeps' class='lock' target='_blank'>Blackfathom Deeps</a> / 20-60 / 20 / 15 / Ashenvale, Kalimdor</li>",
	"<li><a href='https://wow.gamepedia.com/Stormwind_Stockade' class='lock' target='_blank'>Stormwind Stockade</a> / 20-60 / 20 / 15 / Stormwind City, Eastern Kingdoms</li>",
	"<li><a href='https://classic.wowhead.com/gnomeregan' class='lock' target='_blank'>Gnomeregan</a> / 24-60 / 24 / 19 / Dun Morogh, Eastern Kingdoms</li>",
	"<li><a href='https://www.wowhead.com/scarlet-halls' class='lock' target='_blank'>Scarlet Halls</a> / 26-60 / 26 / 21 / Tirisfal Glades, Eastern Kingdoms</li>",
	"<li><a href='https://classic.wowhead.com/scarlet-monastery' class='lock' target='_blank'>Scarlet Monastery</a> / 28-60 / 28 / 23 / Tirisfal Glades, Eastern Kingdoms</li>",
	"<li><a href='https://wowwiki.fandom.com/wiki/Wicked_Grotto' class='lock' target='_blank'>Maraudon: The Wicked Grotto</a> / 30-60 / 30 / 25 / Desolace, Kalimdor</li>",
	"<li><a href='https://classic.wowhead.com/razorfen-kraul' class='lock' target='_blank'>Razorfen Kraul</a> / 30-60 / 30 / 25 / Southern Barrens, Kalimdor</li>",
	"<li><a href='https://wowwiki.fandom.com/wiki/Foulspore_Cavern' class='lock' target='_blank'>Maraudon: Foulspore Cavern</a> / 32-60 / 30 / 25 / Desolace, Kalimdor</li>",
	"<li><a href='https://quickdungeon.wordpress.com/maraudon-earth-song-falls/' class='lock' target='_blank'>Maraudon: Earth Song Falls</a> / 34-60 / 30 / 25 / Desolace, Kalimdor</li>",
	"<li><a href='https://classic.wowhead.com/razorfen-downs' class='lock' target='_blank'>Razorfen Downs</a> / 35-60 / 35 / 35 / Thousand Needles, Kalimdor</li>",
	"<li><a href='https://quickdungeon.wordpress.com/dire-maul-warpwood-quarter/' class='lock' target='_blank'>Dire Maul: Warpwood Quarter</a> / 36-60 / 36 / 31 / Feralas, Kalimdor</li>",
	"<li><a href='https://classic.wowhead.com/scholomance' class='lock' target='_blank'>Scholomance</a> / 38-60 / 38 / 33 / Western Plaguelands, Eastern Kingdoms</li>",
	"<li><a href='https://wowwiki.fandom.com/wiki/Capital_Gardens' class='lock' target='_blank'>Dire Maul: Capital Gardens</a> / 39-60 / 36 / 31 / Feralas, Kalimdor</li>",
	"<li><a href='https://classic.wowhead.com/uldaman' class='lock' target='_blank'>Uldaman</a> / 40-60 / 40 / 35 / Badlands, Eastern Kingdoms</li>",
	"<li><a href='https://quickdungeon.wordpress.com/dire-maul-gordok-commons/' class='lock' target='_blank'>Dire Maul: Gordok Commons</a> / 42-60 / 46 / 31 / Feralas, Kalimdor</li>",
	"<li><a href='https://wow.gamepedia.com/Stratholme_Main_Gate' class='lock' target='_blank'>Stratholme: Main Gate</a> / 42-60 / 42 / 37 / Eastern Plaguelands, Eastern Kingdoms</li>",
	"<li><a href='https://classic.wowhead.com/zulfarrak' class='lock' target='_blank'>Zul'Farrak</a> / 44-60 / 44 / 39 / Tanaris, Kalimdor</li>",
	"<li><a href='https://wow.gamepedia.com/Stratholme_Service_Entrance' class='lock' target='_blank'>Stratholme: Service Entrance</a> / 46-60 / 42 / 37 / Eastern Plaguelands, Eastern Kingdoms</li>",
	"<li><a href='https://quickdungeon.wordpress.com/blackrock-depths-detention-block/' class='lock' target='_blank'>Blackrock Depths: Detention Block</a> / 47-60 / 47 / 42 / Blackrock Mountain, Eastern Kingdoms</li>",
	"<li><a href='https://classic.wowhead.com/guides/temple-of-atalhakkar-sunken-temple-classic-dungeon-strategy' class='lock' target='_blank'>Sunken Temple</a> / 50-58 / 50 / 45 / Swamp of Sorrows, Eastern Kingdoms</li>",
	"<li><a href='https://quickdungeon.wordpress.com/blackrock-depths-upper-city/' class='lock' target='_blank'>Blackrock Depths: Upper City</a> / 51-60 / 47 / 42 / Blackrock Mountain, Eastern Kingdoms</li>",
	"<li><a href='https://classic.wowhead.com/guides/lower-blackrock-spire-classic-dungeon-strategy' class='lock' target='_blank'>Lower Blackrock Spire</a> / 55-60 / 55 / 50 / Blackrock Mountain, Eastern Kingdoms</li>"
];

document.getElementById("addRemoveDungeon").innerHTML = dungeon;
var lock = 0;

function addDungeon() { // if moreDungeons not empty, move element from moreDungeons to dungeon and inserts dungeon in addRemoveDungeon div
	if (moreDungeons[0]) {
		dungeon.push(moreDungeons[0]);
		moreDungeons.shift();
		document.getElementById("addRemoveDungeon").innerHTML = dungeon.join("");
	}
	if (lock === 1) { // if lockBtn function has been called before, recall
		var a = document.getElementsByClassName('lock');
		for (var i = 0; i < a.length; ++i) {
			a[i].addEventListener('click', handleAnchor, false);
		}
	}
}

function removeDungeon() { // update addRemoveDungeon by moving elements from dungeon to moreDungeons and showing dungeon
	if (dungeon[1]) {
		moreDungeons.unshift(dungeon.slice(-1)[0]);
		dungeon.pop();
		document.getElementById("addRemoveDungeon").innerHTML = dungeon.join("");
	}
}

function lockBtn() { //makes elements with the 'lock' class unclickable
	var btn = document.getElementById("lockBtn"),
		i;
	btn.className = "red";
	document.querySelector('#lockBtn').innerHTML = 'LINKS ARE LOCKED';
	lock = 1;
	var a = document.getElementsByClassName('lock');
	for (i = 0; i < a.length; ++i) {
		a[i].addEventListener('click', handleAnchor, false);
	}
}

function handleAnchor(e) {
	e.preventDefault();
}