// note: Making sure to do good commenting practices

// Constructor for HeapNode, holds its value and its "location" (aka index)
// getParent and getChild methods return children/prent according to the heap tree (it is impl as array so they return indexes here)
function HeapNode(value, ind) {

	this.val = value; 
	this.index = ind; 
	this.getParent = function() {
		return Math.floor(this.index / 2);
	}
	this.getLeftChild = function() {
		return this.index * 2;
	}
	this.getRightChild = function() {
		return this.index * 2 + 1;
	}

}

// Define all the Heap Tree Functions here:
removeMin = function() {

	// first we must make sure heap has a value to return (actually has a size)
	if(this.tree.length <= 1)
	{
		// nothing in tree to return
		return undefined;
	}
	else if(this.tree.length === 2)
	{
		return this.tree.pop().val; // only one element, so just pop() to empty tree and then return
	}
	else if(this.tree.length === 3)// root will only have left child if size is 2, so by default left will be root and no restruct needed
	{
		// left is new root, since no other option (leftChild is tree[2], just to remind that tree[0] is a sentinel node)
		let num = this.tree[1].val; // save value to return
		this.tree[1].val = this.tree[2].val;
		this.tree.pop(); // removes left child, since tree will have only root after this method
		return num; 
	}
	else
	{

		// all else, heap will need a restruture to maintain properties, and so we must removeMin and call bubbleDown
	}

}

add = function(val) {
		// adding an object when empty (first spot in array is a 'sentinel node' 
		// since using the typical array rep of tree)
		if(this.tree.length <= 1) {
			this.tree[0] = null; // sentinel
			this.tree[1] = new HeapNode(val, 1); // first node
			this.last = this.tree[1];
		}
		// For tree that already has nodes:
		else {
			this.tree[this.tree.length] = new HeapNode(val, this.tree.length);
			this.last = this.tree[this.tree.length - 1];
			this.bubbleUp() // need to use bubbleUp to maintain structure, not so above with only 1 element, obviously
		}
	}

find = function(value) {

}

bubbleUp = function() {
		// bubble up the min node until if is at a place that its parent is min or it is at the root
		while(this.last.index !== 1 && this.last.val < this.tree[this.last.getParent()].val) {
			// first swap the values
			let temp = this.last.val;
			this.tree[this.last.index].val = this.tree[this.last.getParent()].val;
			this.tree[this.last.getParent()].val = temp;

			// then you must change last so the while loop follows that node (really its following the value) up the tree
			this.last = this.tree[this.last.getParent()];
		}
		// now must set last to the actual last value
		this.last = this.tree[this.tree.length - 1];
}

bubbleDown = function() {

	

} 


logThis = function() {

	console.log(this);

}


// HEAP STRUCTURE
const Heap = {
	tree: [], // tree as an array, to simplify the code
	last: null, // reference to last element, this is used to maintain heap structure (data struct property, not a js thing)

	// methods:
	removeMin: removeMin, 
	add: add,
	find: find,
	bubbleUp: bubbleUp,
	bubbleDown: bubbleDown,

	// debug methods:
	test: function() { 
		for(let i = 1; i<this.tree.length; i++)
		{
			console.log(this.tree[i]);
		}
	},

	logThis: logThis,

}


// Methods to sort of "unit test" the heap data structure


Heap.add(1);
Heap.add(2);
// Heap.add(3);
// Heap.add(4);
// Heap.add(-2);
// Heap.add(-1);
// console.log(Heap.removeMin());
console.log(Heap.removeMin());

Heap.test();

// Heap.logThis();