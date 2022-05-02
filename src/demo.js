class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    root() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.root;
    }

    add(data) {
        this.root = addWithin(this.root, data);

        function addWithin(node, data) {
            if (!node) {
                return new Node(data);
            }

            if (node.data === data) {
                return node;
            }

            if (data < node.data) {
                node.left = addWithin(node.left, data);
            } else {
                node.right = addWithin(node.right, data);
            }

            return node;
        }

        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    has(data) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return searchWithin(this.root, data);

        function searchWithin(node, data) {
            if (!node) {
                return false;
            }
            if (node.data === data) {
                return true;
            }
            return data < node.data ?
                searchWithin(node.left, data) :
                searchWithin(node.right, data);
        }
    }

    find(data) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    remove(data) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    min() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if (!this.root) {
            return;
        }

        let node = this.root;
        while (node.left) {
            node = node.left;
        }

        return node.data;
    }

    max() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if (!this.root) {
            return;
        }

        let node = this.root;
        while (node.right) {
            node = node.right;
        }

        return node.data;
    }
}
const tree = new BinarySearchTree();
// current = queue.head;
// while (current) {
//     console.log(current.data);
//     current = current.next;
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     add(data) {
//         this.root = addWithin(this.root, data);

//         function addWithin(node, data) {
//             if (!node) {
//                 return new Node(data);
//             }

//             if (node.data === data) {
//                 return node;
//             }

//             if (data < node.data) {
//                 node.left = addWithin(node.left, data);
//             } else {
//                 node.right = addWithin(node.right, data);
//             }

//             return node;
//         }
//     }

//     has(data) {
//         return searchWithin(this.root, data);

//         function searchWithin(node, data) {
//             if (!node) {
//                 return false;
//             }

//             if (node.data === data) {
//                 return true;
//             }

//             return data < node.data ?
//                 searchWithin(node.left, data) :
//                 searchWithin(node.right, data);
//         }
//     }

//     remove(data) {
//         this.root = removeNode(this.root, data);

//         function removeNode(node, data) {
//             if (!node) {
//                 return null;
//             }

//             if (data < node.data) {
//                 node.left = removeNode(node.left, data);
//                 return node;
//             } else if (node.data < data) {
//                 node.right = removeNode(node.right, data);
//                 return node;
//             } else {
//                 // equal - should remove this item
//                 if (!node.left && !node.right) {
//                     // put null instead of item
//                     return null;
//                 }

//                 if (!node.left) {
//                     // set right child instead of item
//                     node = node.right;
//                     return node;
//                 }

//                 if (!node.right) {
//                     // set left child instead of item
//                     node = node.left;
//                     return node;
//                 }

//                 // both children exists for this item
//                 let minFromRight = node.right;
//                 while (minFromRight.left) {
//                     minFromRight = minFromRight.left;
//                 }
//                 node.data = minFromRight.data;

//                 node.right = removeNode(node.right, minFromRight.data);

//                 return node;
//             }
//         }
//     }

//     min() {
//         if (!this.root) {
//             return;
//         }

//         let node = this.root;
//         while (node.left) {
//             node = node.left;
//         }

//         return node.data;
//     }

//     max() {
//         if (!this.root) {
//             return;
//         }

//         let node = this.root;
//         while (node.right) {
//             node = node.right;
//         }

//         return node.data;
//     }

//     leftTraverse(cb) {
//         doLeft(this.root, cb);

//         function doLeft(node, cb) {
//             if (node) {
//                 doLeft(node.left, cb);
//                 cb(node.data);
//                 doLeft(node.right, cb);
//             }
//         }
//     }

//     rightTraverse(cb) {
//         doRight(this.root, cb);

//         function doRight(node, cb) {
//             if (node) {
//                 doRight(node.right, cb);
//                 cb(node.data);
//                 doRight(node.left, cb);
//             }
//         }
//     }
// }

// console.log('s01e12 - BST (Binary Search Tree)');

// function addItems() {
//     console.log('\n  Add Items');
//     console.log('add 13, 15, 9, 20, 18, 32, 25');

//     bst.add(13);
//     bst.add(15);
//     bst.add(9);
//     bst.add(20);
//     bst.add(18);
//     bst.add(32);
//     bst.add(25);


//     //  Should get something like this:
//     //    13
//     //   /  \
//     //  9    15
//     //        \
//     //         20
//     //        /  \
//     //       18   32
//     //           /
//     //          25
// }

// function getItems() {
//     console.log('\n  Get Items');

//     console.log('has 10', bst.has(10));
//     console.log('has 15', bst.has(15));
//     console.log('\n', bst);

//     console.log('  Left Traverse:');
//     bst.leftTraverse((val) => console.log(val));

//     console.log('  Right Traverse:');
//     bst.rightTraverse((val) => console.log(val));

//     console.log('min:', bst.min());
//     console.log('max:', bst.max());
// }

// function removeItem() {
//     console.log('  Remove Item');

//     bst.remove(15);
//     console.log('remove 15');
//     console.log(bst);

//     console.log('  Left Traverse:');
//     bst.leftTraverse((val) => console.log(val));
// }


// const bst = new BinarySearchTree();

// addItems();
// getItems();
// removeItem();