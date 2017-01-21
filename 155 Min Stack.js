/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.value = []
  this.foot = undefined
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.value.push(x)
  if (this.foot === undefined) {
    this.foot = x
  } else {
    this.foot = this.foot > x ? x : this.foot
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.value.pop()
  if (this.value.length === 0) {
    this.foot = undefined
  } else {
    this.foot = this.value[0]
    for (var i = 0; i < this.value.length; i++) {
      var temp = this.value[i]
      this.foot = this.foot > temp ? temp : this.foot
    }
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.value[this.value.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.foot
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */