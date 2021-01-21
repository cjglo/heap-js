// practing good commenting practices

// Constructor for HeapNode, holds its value and its "location" (aka index)
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
			this.tree[0] = null; // sentinel
			this.tree[1] = new HeapNode(val, 1); // first node
			this.last = this.tree[1];
		}
		// For tree that already has nodes:
		else {
			this.tree[this.tree.length] = new HeapNode(val, 1);
			this.last = this.tree[this.tree.length - 1];
			this.bubbleUp() // need to use bubbleUp to maintain structure, not so above with only 1 element, obviously
		}
	}

find = function(value) {

}

bubbleUp = function {
		if (this.tree.last.val < this.getParent() ) // should getParent() be a heapnode method or a tree method?
}

bubbleDown = function {

} 

getLeftChild = function(node) {

}

getRightChild = function(node) {
		
}

getParent = function(node) {
		
}

// HEAP STRUCTURE
const Heap = {
	tree: [], // tree as an array, to simplify the code
	last: null, // reference to last element, this is used to maintain heap structure (data struct property, not a js thing)

	// methods:
	removeMin: removeMin, 
	add: add,
	find: find,
	getLeftChild: getLeftChild,
	getRightChild: getRightChild, 
	getParent: getParent,
	bubbleUp: bubbleUp,
	bubbleDown: bubbleDown,

	// debug methods:
	test: function() { 
		for(let i = 1; i<this.tree.length; i++)
		{
			console.log(this.tree[i]);
		}
	},

	logThis: function() {
		console.log("\n\n");
		console.log(this); // just checking to make sure I didn't accidentally misassign heapnode properties to heap lol
	},

}


// Methods to sort of "unit test" the heap data structure


Heap.add(5);

Heap.test();

Heap.logThis();