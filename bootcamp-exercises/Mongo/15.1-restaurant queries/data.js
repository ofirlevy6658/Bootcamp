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
