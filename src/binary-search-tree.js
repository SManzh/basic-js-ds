const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);
    function addNode(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;
      data < node.data ? node.left = addNode(node.left, data) : node.right = addNode(node.right, data);
      return node;
    }
  }

  has(data) {
    return hasNode(this.rootNode, data);
    function hasNode(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      return data < node.data ? hasNode(node.left, data) : hasNode(node.right, data);
    }
  }

  find(data) {
    return findNode(this.rootNode, data);
    function findNode(node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      return data < node.data ? findNode(node.left, data) : findNode(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);
    function removeNode(node, data) {
      if (!node) return null;
      if (node.data === data) {
        if (!node.right && !node.left) return null;
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) minRight = minRight.left;
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) return null;
    let node = this.rootNode;
    while (node.left) node = node.left;
    return node.data;
  }

  max() {
    if (!this.rootNode) return null;
    let node = this.rootNode;
    while (node.right) node = node.right;
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};