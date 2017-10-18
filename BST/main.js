class BST{
    constructor(arr){
        if (arr.length > 0)
            this.addNode = this.addToHead;
        else
            this.addNode = this.addNewHead;

        this.head = this.createNodeWithArr(arr);
    }

    createNodeWithArr(arr){
        // debugger;
        let medianValue = arr[Math.floor(arr.length/2)];
        let lowArray = arr.slice(0, Math.floor(arr.length /2));
        let highArray =  arr.slice(Math.floor(arr.length/2)+1);

        return new Node(
            medianValue,
            lowArray.length > 0 ? this.createNodeWithArr(lowArray): null,
            highArray.length > 0 ? this.createNodeWithArr(highArray): null
            )
    }

    //dan's version, which lets the nodes themselves do the work
    addArrayValues(theArray){
        theArray.sort();

    }

    addNewHead(val){
        let newNode = new Node(val, null, null);
        this.head = newNode;
        this.addNode = this.addToHead;
    }

    addToHead(val){
        let newNode = new Node(val, null, null);
        this.head.addChild(newNode);
    }

}

class Node{
    constructor(value, /*Node pointer*/left, /*Node pointer*/right){
        this.value = value;
        this.left = left;
        this.right = right;
    }

    addChild(childNode){
        if(childNode.constructor !== this.constructor){
            console.error('can only work with Node elements');
            return false;
        }
        let side = null;

        //if there's nothing already at the left
        if(childNode.value <this.value){
            side = 'left';
        } else {
            side = 'right';
        }
        if (side === null){
            this[side] = childNode;
        } else {
            this[side].addChild(childNode);
        }
    }

}

const bst = new BST([2,3,5,7,8,9,12]);
bst.addNode(1);