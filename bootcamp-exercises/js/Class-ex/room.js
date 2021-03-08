class Room {
	constructor(roomId, level, amount) {
		this.roomId = roomId;
		this.level = level;
		this.amount = amount;
		this.isFree = true;
	}
	isFit(amount) {
		if (this.amount >= amount) {
			this.isFree = false;
			return true;
		}
		return false;
	}
	print() {
		console.log(
			`Room ID ${this.roomId} Level ${this.level} capacity ${this.amount}`
		);
	}
}

class Hotel {
	static Maxfloor;
	constructor(room) {
		this.roomsArr = [];
		this.roomsArr.push(room);
		this.Maxfloor = this.roomsArr[0].level;
	}
	addRoom(room) {
		const exist = this.roomsArr.find((r) => r.roomId == room.roomId);
		if (exist) return false;
		if (room.level > this.Maxfloor) this.Maxfloor = room.level;
		this.roomsArr.push(room);
		return true;
	}
	addNewRoom(roomId, level, amount) {
		const room = new Room(roomId, level, amount);
		if (level > this.Maxfloor) this.Maxfloor = level;
		this.addRoom(room);
	}
	removeRoom(roomId) {
		const room = this.roomsArr.find((r) => r.roomId == roomId);
		if (!room || room.isFree) return false;
		const roomIndex = this.roomsArr.indexOf(room.roomId);
		this.roomsArr.splice(roomIndex, 1);
		return true;
	}
	checkFreeRooms(amount) {
		const fitRooms = this.roomsArr.filter((r) => r.amount >= amount);
		return fitRooms.length;
	}
	checkIn(roomId, amount) {
		const invitedRoom = this.roomsArr.find((r) => (r.roomId = roomId));
		if (!invitedRoom || invitedRoom.amount < amount) return false;
		invitedRoom.isFree = false;
		return true;
	}
	HighRoomFree() {
		const arrFilter = this.roomsArr.filter((el) => el.level == this.Maxfloor);
		arrFilter.sort((a, b) =>
			a.amount > b.amount ? -1 : a.amount < b.amount ? 1 : 0
		);
		return arrFilter;
	}
	getAllRooms(isFree) {
		const filterArr = this.roomsArr.filter((el) => el.isFree == isFree);
		filterArr.sort((a, b) =>
			a.roomId < b.roomId ? -1 : a.roomId > b.roomId ? 1 : 0
		);
		return filterArr;
	}
}

const r1 = new Room(100, 2, 6);
const r2 = new Room(101, 4, 3);
const ht = new Hotel(r1);
ht.addRoom(r2);
console.log(ht);
ht.removeRoom(101);
ht.removeRoom(105);
console.log(ht);
console.log(ht.checkFreeRooms(10));
console.log(ht.checkFreeRooms(2));
ht.addNewRoom(105, 4, 6);
ht.addNewRoom(107, 4, 3);
ht.addNewRoom(111, 4, 12);
ht.addNewRoom(125, 4, 1);
console.log(ht.HighRoomFree());
console.log(ht.getAllRooms(false));
console.log(ht.getAllRooms(true));
