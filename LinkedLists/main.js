function LinkedList() {

    //make our head, set it to null
    this.head = null;

    //make our tail, set it to null
    this.tail = null;

    //for help walking the list
    this.current = null;

    this.addItemToEndOfList = function (value){
        //if the linked list is completely empty
        if (!this.head){
            this.head = new LinkedListNode(value);
            return 'happy, Chris?';
        }
        //if the linked list already has something
        this.current = this.head;
        //this while loops goes until this.current is the last node in the list
        while (this.current.next){
            this.current = this.current.next;
        }
        //this.current should now be the last node in the list
        this.current.next = new LinkedListNode(value);
        //just housekeeping
        this.current = null;
    };

    this.getData = function(index){
        this.current = this.head;
        //loop through until you get to the node you were asked for
        for(let i = 0; i < index; i++){
            this.current = this.current.next;
        }
        let foundVal= this.current.data;
        this.current = null;
        return foundVal;
    };

    this.search = function(value){
        this.current = this.head;
        let counter = 0;
        //loop through until you get to the node you were asked for
        while(this.current.data !== value && this.current.data !== null){
            this.current = this.current.next;
            counter++;
        }
        //this error checker doesn't quite work right
        if(this.current.data === value)
            return counter;
        return -1;
        //I forgot to return this.current to baseline
    };

    this.delete = function(){

    };

    //this stuff doesn't really work yet. I got tired of copying Dan's code word for word. I can fix it up later if I want
    this.add = function (value, targetNode) { //make our add method for the linkedlist
        //make a new linkedlist node
        var node = new LinkedListNode(value);

        var index = tail;
        if (targetNode !== undefined) {
            index = targetNode;
        } else if (targetNode === null) {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
            return;
        }
        else {
            index = this.tail;
        }

        //if the head is null
        if (this.head === null) {
            //set the head to the node
            this.head = node;
            //set the tail to the node
            this.tail = node;
            //set the node's prev to the node
//                    node.prev = node;

            //otherwise...
        } else {
            //the node's prev points at the tail
            node.prev = index;
            //the tail's next points at the node
            index.next = node;
            if (index === this.tail) {
                this.tail = node;
            }
            //the tail points at the node
//                    this.tail = node;
            //the NEW tail's next points at the head
//                    this.tail.next = this.head;
            //the head's previous points at the NEW tail
//                    this.head.prev = this.tail;
        }
    };

    // //this one should work
    // this.delete = function(index) {
    //     index.next.prev = index.prev;
    //     index.prev.next = index.next;
    //     index.next = index.prev = null;
    // };

    this.walkList = function () {
        var item = this.current;
        this.current = this.current.next;
    };

    function LinkedListNode(value) {
        this.data = value;
        this.next = null;
        // this.prev = null;
    }
}

var list = new LinkedList();

list.addItemToEndOfList('Matt')
list.addItemToEndOfList('Nico')
list.addItemToEndOfList('James')
list.addItemToEndOfList('Chris')