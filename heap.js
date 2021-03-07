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
		// need to completely empty the tree (including sentinel)
		let temp = this.tree.pop().val; // only one element, so just pop() to empty tree and then return
		this.tree.last = null;
		this.tree.pop();
		return temp;
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

		// first, save the val to return, then move the "last" node to the root, then do bubbleDown
		let num = this.tree[1].val;
		// console.log(last);
		this.tree[1].val = this.last.val;

		// technically, we are moving last to the root, so the old last needs to be removed and then last must point to the "new" last
		// aka the node to its left (or next row up and all the way right if last was 1st on new row) in the tree abstraction
		this.tree.pop();
		this.last = this.tree[this.tree.length - 1]; // with pop, the new last should be at end of array, so can assign it like we do in the add method

		this.bubbleDown(1); // passing root index, it is recursive
		return num;
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

bubbleDown = function(index) {

	// note: we enter this having already moved the last node to the root, so its purely "bubbling down"
	// this is recursive, so first I'll check base case to end call, then call recursive in following blocks (that we are at end of array or children are both larger)
	if( this.tree[index].getLeftChild() >= this.tree.length || (this.tree[index].val <= this.tree[ this.tree[index].getLeftChild() ].val  &&  this.tree[index].val <= this.tree[ this.tree[index].getRightChild() ].val)  )
	{
		return;
	}
	else if(  this.tree[index].getRightChild() >= this.tree.length  || this.tree[ this.tree[index].getLeftChild() ].val <= this.tree[ this.tree[index].getRightChild() ].val )
	{
		// since the first if didn't trigger, we know at least one of the children is/are less than the parent
		// so we will just compare the children and move the lowest, since that will always give us the correct one
		let temp = this.tree[index].val;
		this.tree[index].val = this.tree[ this.tree[index].getLeftChild() ].val;
		this.tree[ this.tree[index].getLeftChild() ].val = temp;
		this.bubbleDown( this.tree[index].getLeftChild() ); // swapped values, now need to call of child
	}
	else
	{
		// see above `else if` for logic, if we are here than the right is smaller than parent and left
		let temp = this.tree[index].val;
		this.tree[index].val = this.tree[ this.tree[index].getRightChild() ].val;
		this.tree[ this.tree[index].getRightChild() ].val = temp;
		this.bubbleDown( this.tree[index].getRightChild() ); // swapped values, now need to call of child
	}
	

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
Heap.add(3);
Heap.add(4);
Heap.add(0);
Heap.add(8);
Heap.add(9);
// Heap.add(-1);
// console.log(Heap.removeMin());
console.log(Heap.removeMin());
console.log(Heap.removeMin());
console.log(Heap.removeMin());
console.log(Heap.removeMin());
Heap.add(2);
console.log(Heap.removeMin());
console.log(Heap.removeMin());
console.log(Heap.removeMin());
console.log(Heap.removeMin());
Heap.add(1);
Heap.add(2);
console.log(Heap.removeMin());
console.log(Heap.removeMin());
// Heap.removeMin();

// Heap.test();

// Heap.logThis();