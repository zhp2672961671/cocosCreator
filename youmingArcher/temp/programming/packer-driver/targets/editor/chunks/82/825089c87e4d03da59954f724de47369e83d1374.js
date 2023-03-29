System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _class2, _crd, ccclass, Lodash;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a40a4pGR6lCqo0coR1W4kAl", "lodash", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass
      } = _decorator);

      _export("Lodash", Lodash = (_dec = ccclass("Lodash"), _dec(_class = (_class2 = class Lodash {
        /* class member could be defined like this */
        // dummy = '';

        /**
         * 遍历 collection（集合）元素，返回 predicate（断言函数）第一个返回真值的第一个元素
         * @param  {any} collection 一个用来迭代的集合
         * @param {Function} predicate 每次迭代调用的函数。
         * @returns 返回匹配元素，否则返回 undefined。
         */
        static find(collection, predicate) {
          var result;

          if (!Array.isArray(collection)) {
            collection = Lodash._toArray(collection);
          }

          result = collection.filter(predicate);

          if (result.length) {
            return result[0];
          }

          return undefined;
        }
        /**
         * 调用 iteratee 遍历 collection(集合) 中的每个元素
         * @param  {any} collection 一个用来迭代的集合
         * @param {Function} iteratee 每次迭代调用的函数。
         */


        static forEach(collection, iteratee) {
          if (!Array.isArray(collection)) {
            var array = Lodash._toArrayKey(collection);

            array.forEach(function (value, index, arr) {
              var key1 = value['key'];
              var value1 = value['value'];
              iteratee(value1, key1, collection);
            });
          } else {
            collection.forEach(iteratee);
          }
        }
        /**
         * 深度拷贝
         * @param {any} sObj 拷贝的对象
         * @returns 
         */


        static cloneDeep(sObj) {
          if (sObj === null || typeof sObj !== "object") {
            return sObj;
          }

          let s = {};

          if (sObj.constructor === Array) {
            s = [];
          }

          for (let i in sObj) {
            if (sObj.hasOwnProperty(i)) {
              s[i] = Lodash.cloneDeep(sObj[i]);
            }
          }

          return s;
        }
        /**
         * 创建一个数组， value（值） 是 iteratee（迭代函数）遍历 collection（集合）中的每个元素后返回的结果。
         * @param {Array|Object} collection  一个用来迭代的集合.
         * @param {Function} predicate  一个迭代函数，用来转换key（键
         * @returns {Array} 返回一个组成集合数组
         */


        static map(collection, iteratee) {
          if (!Array.isArray(collection)) {
            collection = Lodash._toArray(collection);
          }

          let arr = [];
          collection.forEach(function (value, index, array) {
            arr.push(iteratee(value, index, array));
          });
          return arr;
        }
        /**
         * 
         * @param srcObj 
         * @returns 
         */


        static _toArrayKey(srcObj) {
          var resultArr = []; // to array

          for (var key in srcObj) {
            if (!srcObj.hasOwnProperty(key)) {
              continue;
            }

            resultArr.push({
              key: key,
              value: srcObj[key]
            });
          }

          return resultArr;
        }

        static _toArray(srcObj) {
          let resultArr = []; // to array

          for (var key in srcObj) {
            if (!srcObj.hasOwnProperty(key)) {
              continue;
            }

            resultArr.push(srcObj[key]);
          }

          return resultArr;
        }
        /**
         * 遍历 collection（集合）元素，返回 predicate（断言函数）返回真值 的所有元素的数组。
         * @param {Array|Object} collection  一个用来迭代的集合.
         * @param {Function} predicate  一个迭代函数，用来转换key（键
         * @returns 返回一个新的过滤后的数组。
         */


        static filter(collection, iteratees) {
          if (!Array.isArray(collection)) {
            collection = Lodash._toArray(collection);
          }

          return collection.filter(iteratees);
        }
        /**
         * 执行深比较来确定两者的值是否相等。
         * @param {any}x 
         * @param {any}y 
         * @returns {boolean} 如果 两个值完全相同，那么返回 true，否则返回 false。
         */


        static isEqual(x, y) {
          var in1 = x instanceof Object;
          var in2 = y instanceof Object;

          if (!in1 || !in2) {
            return x === y;
          }

          if (Object.keys(x).length !== Object.keys(y).length) {
            return false;
          }

          for (var p in x) {
            var a = x[p] instanceof Object;
            var b = y[p] instanceof Object;

            if (a && b) {
              return Lodash.isEqual(x[p], y[p]);
            } else if (x[p] !== y[p]) {
              return false;
            }
          }

          return true;
        }
        /**
         * 接收一个要移除值的数组。
         * @param {Array} array 修改的数组
         * @param {Array} value 移除值的数组
         * @param  {Function} comparator comparator（比较器）调用每个元素。
         * @returns 
         */


        static pullAllWith(array, value, comparator) {
          value.forEach(function (item) {
            var res = array.filter(function (n) {
              return comparator(n, item);
            });
            res.forEach(function (item) {
              var index = array.indexOf(item);

              if (array.indexOf(item) !== -1) {
                array.splice(index, 1);
              }
            });
          });
          return array;
        }
        /**
         * 返回当前时间戳
         * @returns 
         */


        static now() {
          return Date.now();
        }
        /**
         * 接收一个要移除值的数组。
         * @param {Array} array 修改的数组
         * @param {Array} value 移除值的数组
         * @returns 
         */


        static pullAll(array, value) {
          value.forEach(function (item) {
            var index = array.indexOf(item);

            if (array.indexOf(item) !== -1) {
              array.splice(index, 1);
            }
          });
          return array;
        }
        /**
         * 从右到左遍历集合中每一个元素的。
         * @param {Array|Object} collection  一个用来迭代的集合.
         * @param {Function} predicate  一个迭代函数
         */


        static forEachRight(collection, iteratee) {
          if (!Array.isArray(collection)) {
            collection = Lodash._toArray(collection);
          } //@ts-ignore


          for (var i = collection.length - 1; i >= 0; i--) {
            //@ts-ignore
            var ret = iteratee(collection[i]);
            if (!ret) break;
          }
        }
        /**
         * 检查字符串string是否以 target 开头。
         * @param {string} str 要检索的字符串。
         * @param {string}target  要检查的字符串。
         * @param {number}position 检索的位置。
         * @returns 
         */


        static startsWith(str, target, position) {
          str = str.substr(position);
          return str.startsWith(target);
        }
        /**
         * 检查字符串string是否以 target 结束。
         * @param {string} str 要检索的字符串。
         * @param {string}target  要检查的字符串。
         * @param {number}position 检索的位置。
         * @returns 
         */


        static endsWith(str, target, position) {
          str = str.substr(position);
          return str.endsWith(target);
        }
        /**
         * 移除数组中predicate（断言）返回为真值的所有元素
         * @param {Array} array  一个用来迭代的集合.
         * @param {Function} predicate  一个迭代函数
         * @returns 
         */


        static remove(array, predicate) {
          var result = [];
          var indexes = [];
          array.forEach(function (item, index) {
            if (predicate(item)) {
              result.push(item);
              indexes.push(index);
            }
          });

          Lodash._basePullAt(array, indexes);

          return result;
        }

        static _basePullAt(array, indexes) {
          var length = array ? indexes.length : 0;
          var lastIndex = length - 1;
          var previous;

          while (length--) {
            var index = indexes[length];

            if (length === lastIndex || index !== previous) {
              previous = index;
              Array.prototype.splice.call(array, index, 1);
            }
          }

          return array;
        }
        /**
         * 返回第一个通过 predicate 判断为真值的元素的索引值
         * @param {Array} array  一个用来迭代的集合.
         * @param {Function} predicate  一个迭代函数
         * @param {number} fromIndex 开始查找索引值
         * @returns 
         */


        static findIndex(array, predicate, fromIndex) {
          array = array.slice(fromIndex);
          var i;

          if (typeof predicate === "function") {
            for (i = 0; i < array.length; i++) {
              if (predicate(array[i])) {
                return i;
              }
            }
          } else if (Array.isArray(predicate)) {
            for (i = 0; i < array.length; i++) {
              var key = predicate[0];
              var vaule = true; //@ts-ignore

              if (predicate.length > 1) {
                vaule = predicate[1];
              }

              if (array[i][key] === vaule) {
                return i;
              }
            }
          } else {
            for (i = 0; i < array.length; i++) {
              if (array[i] === predicate) {
                return i;
              }
            }
          }

          return -1;
        }
        /**
         * 创建一个新数组，将array与任何数组 或 值连接在一起。
         * @returns 
         */


        static concat() {
          var length = arguments.length;

          if (!length) {
            return [];
          }

          var array = arguments[0];
          var index = 1;

          while (index < length) {
            array = array.concat(arguments[index]);
            index++;
          }

          return array;
        }
        /**
         * 检查 value 是否是原始Number数值型 或者 对象。
         * @param {any }value 
         * @returns 
         */


        static isNumber(value) {
          return typeof value === 'number';
        }
        /**
         * 返回首次 value 在数组array中被找到的 索引值
         * @param {Array}array 
         * @param {any}value 
         * @param {number} fromIndex 
         * @returns 
         */


        static indexOf(array, value, fromIndex) {
          array = array.slice(fromIndex);
          return array.indexOf(value);
        }
        /**
         * 将 array 中的所有元素转换为由 separator 分隔的字符串。
         * @param {any} array 要转换的数组
         * @param {string} separator 分隔元素。
         * @returns 
         */


        static join(array, separator) {
          if (array === null) return '';
          var result = '';
          array.forEach(function (item) {
            result += item + separator;
          });
          return result.substr(0, result.length - 1);
        }
        /**
         * 根据separator 拆分字符串string。
         * @param {string} str 要转换的数组
         * @param {RegExp|string} separator 分隔元素。
         * @param {number} limit 限制结果的数量。
         * @returns 
         */


        static split(str, separator, limit) {
          return str.split(separator, limit);
        }
        /**
         * 计算 array 中的最大值。 如果 array 是 空的或者假值将会返回 undefined。
         * @param {Array}array 
         * @returns 
         */


        static max(array) {
          if (array && array.length) {
            var result;

            for (var i = 0; i < array.length; i++) {
              if (i === 0) {
                result = array[0];
              } else if (result < array[i]) {
                result = array[i];
              }
            }

            return result;
          }

          return undefined;
        }
        /**
         * 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
         * @param {Array}array : 要查询的数组。
         * @param {number}n 要去除的元素个数。
         * @returns 
         */


        static drop(array, n) {
          var length = array === null ? 0 : array.length;

          if (!length) {
            return [];
          }

          return array.slice(n);
        }
        /**
         * 将array递归为一维数组。
         * @param {Array} arr 
         * @returns 
         */


        static flattenDeep(arr) {
          return arr.reduce(function (prev, cur) {
            return prev.concat(Array.isArray(cur) ? Lodash.flattenDeep(cur) : cur);
          }, []);
        }
        /**
         * 创建一个去重后的array数组副本。使用了SameValueZero 做等值比较。只有第一次出现的元素才会被保留。
         * @param {Array} array 
         * @returns 
         */


        static uniq(array) {
          let result = [];
          array.forEach(function (item) {
            if (result.indexOf(item) === -1) {
              result.push(item);
            }
          });
          return result;
        }
        /**
         * 检查 value 是否是 NaN。
         * @param {any}value 
         * @returns 
         */


        static isNaN(value) {
          // An `NaN` primitive is the only value that is not equal to itself.
          // Perform the `toStringTag` check first to avoid errors with some
          // ActiveX objects in IE.
          return Lodash.isNumber(value) && value !== +value;
        }
        /**
         * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组
         * @param {Array}array 
         * @param {number}size 
         * @returns 
         */


        static chunk(array, size) {
          var length = array === null ? 0 : array.length;

          if (!length || size < 1) {
            return [];
          }

          var result = [];

          while (array.length > size) {
            result.push(array.slice(0, size));
            array = array.slice(size);
          }

          result.push(array);
          return result;
        }
        /**
         * 转换 value 为一个有限数字
         * @param {any} value 
         * @returns 
         */


        static toFinite(value) {
          var INFINITY = 1 / 0;
          var MAX_INTEGER = 1.7976931348623157e+308;

          if (!value) {
            return value === 0 ? value : 0;
          }

          value = Number(value);

          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }

          return value === value ? value : 0;
        }
        /**
         * 判断是否为对象
         * @param {any}value  
         * @returns {boolean}
         */


        static isObject(value) {
          var type = typeof value;
          return value !== null && (type === 'object' || type === 'function');
        }

        /**
         * 
         * @param value 
         * @returns 
         */
        static isLength(value) {
          return typeof value === 'number' && value > -1 && value % 1 === 0 && value <= Lodash.MAX_SAFE_INTEGER;
        }

        static _isArrayLike(value) {
          return value !== null && Lodash.isLength(value.length)
          /*&& !isFunction(value)*/
          ;
        }
        /**
         * 返回数组总符合条件的最大值
         * @param {Array} array  一个用来迭代的集合.
         * @param {Function} predicate  一个迭代函数
         * @returns {Object} 返回最大值
         */


        static maxBy(array, predicate) {
          if (array && array.length) {
            var result;
            var objResult;

            for (var i = 0; i < array.length; i++) {
              if (i === 0) {
                result = predicate(array[0]);
                objResult = array[0];
              } else if (result < array[i]) {
                result = array[i];
                objResult = array[i];
              }
            }

            return objResult;
          }

          return undefined;
        }
        /**
         * 返回数组总符合条件的最小值
         * @param {Array} array  一个用来迭代的集合.
         * @param {Function} predicate  一个迭代函数
         * @returns {Object} 返回最小值
         */


        static minBy(array, predicate) {
          if (array && array.length) {
            let result;
            let objResult;

            for (var i = 0; i < array.length; i++) {
              if (i === 0) {
                result = predicate(array[0]);
                objResult = array[0];
              } else if (result > array[i]) {
                result = predicate(array[i]);
                objResult = array[i];
              }
            }

            return objResult;
          }

          return undefined;
        }
        /**
         * 返回复合迭代函数的总和
         * @param {Array|Object} collection  一个用来迭代的集合.
         * @param {Function} predicate  一个迭代函数
         * @returns {Object} 返回总和
         */


        static sumBy(collection, predicate) {
          let sum = 0;

          for (let key in collection) {
            //@ts-ignore
            sum += predicate(collection[key]);
          }

          return sum;
        }
        /**
         * 返回复合迭代函数的次数
         * @param {Array|Object} collection  一个用来迭代的集合.
         * @param {Function} predicate  一个迭代函数，用来转换key（键
         * @returns {Object} 返回一个组成集合对象
         */


        static countBy(collection, predicate) {
          let objRet = {};

          for (let key in collection) {
            let value = predicate(key);

            if (objRet.hasOwnProperty(value)) {
              objRet[value] += 1;
            } else {
              objRet[value] = 1;
            }
          }

          return objRet;
        }

      }, _class2.MAX_SAFE_INTEGER = 9007199254740991, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=825089c87e4d03da59954f724de47369e83d1374.js.map