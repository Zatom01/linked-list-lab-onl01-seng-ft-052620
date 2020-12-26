//getName should return the name of the node passed through:
function getName(node) {
    return node["name"]
}

//headNode should return head node of the linked list
function headNode(node, collection) {
    return collection[node]
}

//next should return the following node every time it is called
function next(node, collection) {
    return collection[node.next]
}

//nodeAt should return the node at the provided index
function nodeAt(index, node, collection) {
    let head = headNode(node, collection)
    for (let i = 0; i < index; i++) {
        head = next(head, collection)
    }
    return head

}

//addressAt should return the address of the node at the address
function addressAt(index, node, collection) {
    return index == 0 ? node : nodeAt(index - 1, node, collection).next

}

//indexAt should return the index of the provided node
function indexAt(node, collection, linkedList) {
    let i = 0
    let head = headNode(linkedList, collection)
    while (head != node) {
        i++
        head = next(head, collection)
    }
    return i

}


//insertNodeAt should set the next property of the inserted node
// describe('#insertNodeAt', function() {
//     it("should set the next property of the inserted node", function() {
//       let firstNode = {name: 'susie', next: 'rkjasj'}
//       let secondNode = {name: 'sam', next: 'asnan'}
//       let newNode = {name: 'jill', next: ''}
//       let lastNode = {name: 'charlie', next: null}
//       let collection = {rkjasj: secondNode,
//         asnan: lastNode,
//         whana: firstNode,
//         ajhsak: newNode}
//       let linkedList = 'whana'
//       insertNodeAt(1, 'ajhsak', linkedList, collection)
//       expect(newNode.next).toEqual('rkjasj')
//     })
function insertNodeAt(index, newNodeAddress, linkedList, collection) {
    let prevNode = nodeAt(index -1, linkedList, collection)
    let nextNode = nodeAt(index, linkedList, collection)
    let nextNodeAddress= addressAt(nextNode, linkedList, collection)
    prevNode.next = newNodeAddress
    let newNode = collection[newNodeAddress]
    newNode.next = nextNodeAddress




}

//deleteNodeAt should set the next property of the node previous to the deleted node
function deleteNodeAt(index, linkedList , collection){
    let currentNode = headNode(linkedList, collection)
    let previousNode
    for(let i =0 ; i < index; i++){
        previousNode = currentNode
        currentNode= next(currentNode,collection)
    }
    previousNode.next = currentNode.next

}
