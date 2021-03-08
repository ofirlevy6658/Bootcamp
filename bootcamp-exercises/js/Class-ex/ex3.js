class SortNumber {
	constructor() {
		this.numList = [];
	}

	getAll() {
		return this.numList;
	}

	addNum(num) {
		if (this.isPrime(num)) {
			if (!this.numList.includes(num)) {
				this.numList.push(num);
				this.numList.sort();
				return true;
			}
		}
		return false;
	}
	removeNum(num) {
		const removeEl = this.numList.indexOf(num);
		if (removeEl === -1) return false;
		this.numList.splice(removeEl, 1);
		return true;
	}
	print() {
		console.log(this.numList);
	}
	share(obj) {
		const common = this.numList.filter((value) => obj.numList.includes(value));
		return common.length;
	}
	union(obj) {
		return [...new Set([...this.numList, ...obj.numList])];
	}
	isPrime(num) {
		for (let i = 2; i < num; i++) {
			if (num % i === 0) return false;
		}
		return num > 1;
	}
}

const primeArr = new SortNumber();
primeArr.addNum(5);
primeArr.addNum(9);
primeArr.addNum(8);
primeArr.addNum(5);
primeArr.addNum(7);
primeArr.addNum(3);
const primeArr2 = new SortNumber();
primeArr2.addNum(15);
primeArr2.addNum(49);
primeArr2.addNum(5);
primeArr2.addNum(9);
primeArr2.addNum(7);
primeArr.print();
primeArr2.print();
console.log(primeArr.union(primeArr2));
