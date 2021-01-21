
// function to create HeapNode
function HeapNode(value, ind) {
	this.val = value;
	this.index = ind;
}

// Define all the Heap Tree Functions here:
removeMin = function() {

	}
add = function(val) {
		// adding an object when empty (first spot in array is a 'sentinel node' 
		// since using the typical array rep of tree)
		if(this.tree.length === 1) {
			this.tree[1] = new HeapNode(val, 1);
			this.last = this.tree[1];
		}
		// For tree that already has nodes:
		else {
			this.tree[this.tree.length] = new HeapNode(val, 1);
			this.last = this.tree[this.tree.length - 1];
		}
	}
find = function(value) {

	}
getLeftChild = function(node) {

	}
getRightChild = function(node) {
		
	}
getParent = function(node) {
		
	}

const Heap = {
	tree: [null],
	last: null,

	// methods:
	removeMin: removeMin,
	add: add,
	find: find,
	getLeftChild: getLeftChild,
	getRightChild: getRightChild, 
	getParent: getParent,
	test: function() {
		for(let i = 1; i<this.tree.length; i++)
		{
			console.log(this.tree[i]);
		}
	},
	logThis: function() {
		console.log("\n\n");
		console.log(this);
	}
}



Heap.add(5);

Heap.test();

Heap.logThis();