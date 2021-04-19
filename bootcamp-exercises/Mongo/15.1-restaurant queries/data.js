// [
// 	{
// 		name: "bombay",
// 		address: {
// 			city: "Holon",
// 			street: "Herzel 15",
// 			coordinates: [-77.46574, 40.6774],
// 		},
// 		cuisine: "indian",
// 		kosher: true,
// 		reviews: [
// 			{
// 				date: new Date("2016-01-01"),
// 				score: 7,
// 			},
// 			{
// 				date: new Date("2019-01-01"),
// 				score: 3,
// 			},
// 			{
// 				date: new Date("2018-01-01"),
// 				score: 8,
// 			},
// 		],
// 	},
// 	{
// 		name: "falafel 5 shekels",
// 		address: {
// 			city: "Bat-Yam",
// 			street: "Histradrut 85",
// 			coordinates: [-70.46574, 10.6774],
// 		},
// 		cuisine: "street food",
// 		kosher: false,
// 		reviews: [
// 			{
// 				date: new Date("2019-01-01"),
// 				score: 3,
// 			},
// 			{
// 				date: new Date("2016-01-01"),
// 				score: 8,
// 			},
// 			{
// 				date: new Date("2020-01-01"),
// 				score: 4,
// 			},
// 		],
// 	},
// 	{
// 		name: "asian delight",
// 		address: {
// 			city: "Tel Aviv",
// 			street: "Balfur 15",
// 			coordinates: [-10.46574, 30.6774],
// 		},
// 		cuisine: "asian",
// 		kosher: true,
// 		reviews: [
// 			{
// 				date: new Date("2020-01-01"),
// 				score: 3,
// 			},
// 			{
// 				date: new Date("2018-01-01"),
// 				score: 8,
// 			},
// 			{
// 				date: new Date("2016-01-01"),
// 				score: 9,
// 			},
// 		],
// 	},
// 	{
// 		name: "coconut jam",
// 		address: {
// 			city: "Tel Aviv",
// 			street: "Stam Adress 15",
// 			coordinates: [20.46574, -40.6774],
// 		},
// 		cuisine: "african",
// 		kosher: true,
// 		reviews: [
// 			{
// 				date: new Date("2017-01-01"),
// 				score: 10,
// 			},
// 			{
// 				date: new Date("2016-01-01"),
// 				score: 8,
// 			},
// 			{
// 				date: new Date("2019-01-01"),
// 				score: 6,
// 			},
// 		],
// 	},
// 	{
// 		name: "rice and noodles",
// 		address: {
// 			city: "Holon",
// 			street: "Bla Bla 15",
// 			coordinates: [20.46574, 10.6774],
// 		},
// 		cuisine: "asian",
// 		kosher: false,
// 		reviews: [
// 			{
// 				date: new Date("2016-01-01"),
// 				score: 1,
// 			},
// 			{
// 				date: new Date("2019-01-01"),
// 				score: 6,
// 			},
// 			{
// 				date: new Date("2019-01-01"),
// 				score: 2,
// 			},
// 		],
// 	},
// 	{
// 		name: "thailand paradise",
// 		address: {
// 			city: "Holon",
// 			street: "Bla 13",
// 			coordinates: [-77.46574, 40.6774],
// 		},
// 		cuisine: "asian",
// 		kosher: false,
// 		reviews: [
// 			{
// 				date: new Date("2020-01-01"),
// 				score: 7,
// 			},
// 			{
// 				date: new Date("2019-01-01"),
// 				score: 6,
// 			},
// 			{
// 				date: new Date("2020-01-01"),
// 				score: 2,
// 			},
// 		],
// 	},
// ]

// 1.1 -> db.resturants.find().pretty()
// 1.2 -> db.resturants.find({cuisine: "asian"}).pretty()
// 1.3 -> db.resturants.find({kosher: true}).pretty()
// 1.4 -> db.resturants.find({"address.city":"Tel Aviv"}).pretty()
// 1.5 -> by what criterion??
// 1.6 -> db.resturants.find({"address.coordinates":[-77.46574, 40.6774]})
// 1.7 -> db.resturants.find().sort({name:1}).pretty()
// 1.8 -> db.resturants.find().sort({"address.city":1}).pretty()
// 1.9 -> db.resturants.updateOne({_id:ObjectId("607d3d557c25bb3706876bad")},{$set:{name:"coco jambo"}})
// 1.10 -> db.resturants.updateOne({_id:ObjectId("607d3d557c25bb3706876bad")},{$set:{review:8.5}}) x
// 1.11 => db.resturants.updateMany({kosher:false},{$set:{kosher:true}})
// 1.12 => db.resturants.deleteOne({_id:ObjectId("607d3d557c25bb3706876bad")})
// 1.13 => db.resturants.deleteMany({})
// 1.14	db.resturants.updateOne({_id:ObjectId("607d3ca57c25bb3706876ba4")},{$inc:{"reviews.$":2}})
// 1.15 db.resturants.updateOne({_id:ObjectId("607d3ca57c25bb3706876ba4")},{$dec:{"reviews.$":2}})

//2.1  => db.restaurants.find().forEach( function(myDoc) { print( "restaurant name : " + myDoc.name ); } )
//2.2  => db.restaurants.find().forEach( function(myDoc) { print( "city: " + myDoc.address.city ); } )
//2.3  => db.restaurants.find().forEach( function(myDoc) { print( "coordinates: " + myDoc.address.coordinates ); } )

//3.1 => db.restaurants.find( {name: /^b/ } )
//3.2 =>  db.restaurants.count()
//3.3 =>  db.restaurants.find( {"reviews.date":ISODate("2019-01-01T00:00:00Z")} ).pretty()
