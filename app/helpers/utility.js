module.exports = {
  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  getRandomIndex: function(arr) {
    var index = Math.floor(Math.random() * ((arr.length - 1) - 0 + 1)) + 0;
    return arr[index];
  }
};
