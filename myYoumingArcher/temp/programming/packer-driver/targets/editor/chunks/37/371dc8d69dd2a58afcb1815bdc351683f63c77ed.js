System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _crd, ccclass, property, Util;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "51238kLGAFBiLoz3gxcwxtH", "util", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Util", Util = (_dec = ccclass("Util"), _dec(_class = class Util {
        /**
         * !#zh 拷贝object。
         */

        /**
         * 深度拷贝
         * @param {any} sObj 拷贝的对象
         * @returns
         */
        static clone(sObj) {
          // 判断是否是对象，如果不是不做处理
          if (sObj === null || typeof sObj !== "object") {
            return sObj;
          } // 判断是否数组


          let s = {};

          if (sObj.constructor === Array) {
            s = [];
          }

          for (let i in sObj) {
            if (sObj.hasOwnProperty(i)) {
              s[i] = this.clone(sObj[i]);
            }
          }

          return s;
        }
        /**
         * 将object转化为数组
         * @param { any} srcObj
         * @returns
         */


        static objectToArray(srcObj) {
          let resultArr = []; // to array

          for (let key in srcObj) {
            if (!srcObj.hasOwnProperty(key)) {
              continue;
            }

            resultArr.push(srcObj[key]);
          }

          return resultArr;
        }
        /**
         * !#zh 将数组转化为object。
         */

        /**
         * 将数组转化为object。
         * @param { any} srcObj
         * @param { string} objectKey
         * @returns
         */


        static arrayToObject(srcObj, objectKey) {
          let resultObj = {}; // to object

          for (var key in srcObj) {
            if (!srcObj.hasOwnProperty(key) || !srcObj[key][objectKey]) {
              continue;
            }

            resultObj[srcObj[key][objectKey]] = srcObj[key];
          }

          return resultObj;
        }
        /**
         * 根据权重,计算随机内容
         * @param {arrany} weightArr
         * @param {number} totalWeight 权重
         * @returns
         */


        static getWeightRandIndex(weightArr, totalWeight) {
          let randWeight = Math.floor(Math.random() * totalWeight);
          let sum = 0;

          for (var weightIndex = 0; weightIndex < weightArr.length; weightIndex++) {
            sum += weightArr[weightIndex];

            if (randWeight < sum) {
              break;
            }
          }

          return weightIndex;
        }
        /**
         * 从n个数中获取m个随机数
         * @param {Number} n   总数
         * @param {Number} m    获取数
         * @returns {Array} array   获取数列
         */


        static getRandomNFromM(n, m) {
          let array = [];
          let intRd = 0;
          let count = 0;

          while (count < m) {
            if (count >= n) {
              break;
            } // 获取随机数整数


            intRd = this.getRandomInt(0, n);
            var flag = 0; // 循环判断是否含有元素，没有则加入

            for (var i = 0; i < count; i++) {
              if (array[i] === intRd) {
                flag = 1;
                break;
              }
            }

            if (flag === 0) {
              array[count] = intRd;
              count++;
            }
          }

          return array;
        }
        /**
         * 获取随机整数
         * @param {Number} min 最小值
         * @param {Number} max 最大值
         * @returns
         */


        static getRandomInt(min, max) {
          let r = Math.random();
          let rr = r * (max - min + 1) + min;
          return Math.floor(rr);
        }
        /**
         * 获取随机数
         * @param {Number} min 最小值
         * @param {Number} max 最大值
         * @returns
         */


        static getRandom(min, max) {
          return Math.random() * (max - min) + min;
        }
        /**
         * 获取字符串长度
         * @param {string} render
         * @returns
         */


        static getStringLength(render) {
          let strArr = render;
          let len = 0;

          for (let i = 0, n = strArr.length; i < n; i++) {
            // 返回指定位置的字符的 Unicode 编码
            let val = strArr.charCodeAt(i); // 当unicode>255，可以判断该字符字节长度为2

            if (val <= 255) {
              len = len + 1;
            } else {
              len = len + 2;
            }
          }

          return Math.ceil(len / 2);
        }
        /**
         * 判断传入的参数是否为空的Object。数组或undefined会返回false
         * @param obj
         */


        static isEmptyObject(obj) {
          let result = true;

          if (obj && obj.constructor === Object) {
            for (var key in obj) {
              if (obj.hasOwnProperty(key)) {
                result = false;
                break;
              }
            }
          } else {
            result = false;
          }

          return result;
        }
        /**
         * 判断是否是新的一天
         * @param {Object|Number} dateValue 时间对象 todo MessageCenter 与 pve 相关的时间存储建议改为 Date 类型
         * @returns {boolean}
         */


        static isNewDay(dateValue) {
          // todo：是否需要判断时区？
          var oldDate = new Date(dateValue);
          var curDate = new Date(); //@ts-ignore

          var oldYear = oldDate.getYear();
          var oldMonth = oldDate.getMonth();
          var oldDay = oldDate.getDate(); //@ts-ignore

          var curYear = curDate.getYear();
          var curMonth = curDate.getMonth();
          var curDay = curDate.getDate();

          if (curYear > oldYear) {
            return true;
          } else {
            if (curMonth > oldMonth) {
              return true;
            } else {
              if (curDay > oldDay) {
                return true;
              }
            }
          }

          return false;
        }
        /**
         * 获取对象属性数量
         * @param {object}o 对象
         * @returns
         */


        static getPropertyCount(o) {
          var n,
              count = 0;

          for (n in o) {
            if (o.hasOwnProperty(n)) {
              count++;
            }
          }

          return count;
        }
        /**
         * 返回一个差异化数组（将array中diff里的值去掉）
         * @param array
         * @param diff
         */


        static difference(array, diff) {
          let result = [];

          if (array.constructor !== Array || diff.constructor !== Array) {
            return result;
          }

          let length = array.length;

          for (let i = 0; i < length; i++) {
            if (diff.indexOf(array[i]) === -1) {
              result.push(array[i]);
            }
          }

          return result;
        }

        static _stringToArray(string) {
          // 用于判断emoji的正则们
          var rsAstralRange = '\\ud800-\\udfff';
          var rsZWJ = '\\u200d';
          var rsVarRange = '\\ufe0e\\ufe0f';
          var rsComboMarksRange = '\\u0300-\\u036f';
          var reComboHalfMarksRange = '\\ufe20-\\ufe2f';
          var rsComboSymbolsRange = '\\u20d0-\\u20ff';
          var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
          var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
          var rsFitz = '\\ud83c[\\udffb-\\udfff]';
          var rsOptVar = '[' + rsVarRange + ']?';
          var rsCombo = '[' + rsComboRange + ']';
          var rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
          var reOptMod = rsModifier + '?';
          var rsAstral = '[' + rsAstralRange + ']';
          var rsNonAstral = '[^' + rsAstralRange + ']';
          var rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
          var rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
          var rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
          var rsSeq = rsOptVar + reOptMod + rsOptJoin;
          var rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
          var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

          var hasUnicode = function (val) {
            return reHasUnicode.test(val);
          };

          var unicodeToArray = function (val) {
            //match 把符合X的语句单独提出来
            return val.match(reUnicode) || [];
          };

          var asciiToArray = function (val) {
            return val.split('');
          };

          return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
        } // 模拟传msg的uuid


        static simulationUUID() {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
          }

          return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }

        static trim(str) {
          // 去除字符串首尾的空格的

          /*
          ^ 表示以什么开头
           \s 代表匹配一些空白符     包括：空格、Tab、换行、回车,等价于 [\t\r\n ]
           *表示有一个或者多个
           | 表示或者
           $ 代表以什么结尾 */
          return str.replace(/(^\s*)|(\s*$)/g, "");
        }
        /**
         * 判断当前时间是否在有效时间内
         * @param {String|Number} start 起始时间。带有时区信息
         * @param {String|Number} end 结束时间。带有时区信息
         */


        static isNowValid(start, end) {
          var startTime = new Date(start);
          var endTime = new Date(end);
          var result = false;

          if (startTime.getDate() + '' !== 'NaN' && endTime.getDate() + '' !== 'NaN') {
            var curDate = new Date();
            result = curDate < endTime && curDate > startTime;
          }

          return result;
        }
        /**
         * 返回相隔天数
         * @param start
         * @param end
         * @returns
         */


        static getDeltaDays(start, end) {
          start = new Date(start);
          end = new Date(end);
          let startYear = start.getFullYear();
          let startMonth = start.getMonth() + 1;
          let startDate = start.getDate();
          let endYear = end.getFullYear();
          let endMonth = end.getMonth() + 1;
          let endDate = end.getDate();
          start = new Date(startYear + '/' + startMonth + '/' + startDate + ' GMT+0800').getTime();
          end = new Date(endYear + '/' + endMonth + '/' + endDate + ' GMT+0800').getTime();
          let deltaTime = end - start;
          return Math.floor(deltaTime / (24 * 60 * 60 * 1000));
        }
        /**
         * 获取数组最小值
         * @param array 数组
         * @returns
         */


        static getMin(array) {
          let result = null;

          if (array.constructor === Array) {
            let length = array.length;

            for (let i = 0; i < length; i++) {
              if (i === 0) {
                result = Number(array[0]);
              } else {
                result = result > Number(array[i]) ? Number(array[i]) : result;
              }
            }
          }

          return result;
        }
        /**
         * 格式化两位小数点
         * @param time
         * @returns
         */


        static formatTwoDigits(time) {
          //@ts-ignore
          //     //数组长度为n， .join(0)分割用0拼接  .slice(-n)是从后面数第n个到最后一个
          // join将数组各个元素是通过指定的分隔符进行连接成为一个字符串
          return (Array(2).join(0) + time).slice(-2);
        }
        /**
         * 根据格式返回时间
         * @param date  时间
         * @param fmt 格式
         * @returns
         */


        static formatDate(date, fmt) {
          // if(!fmt)fmt="yyyy-MM-dd"
          let o = {
            "M+": date.getMonth() + 1,
            //月份
            "d+": date.getDate(),
            //日
            "h+": date.getHours(),
            //小时
            "m+": date.getMinutes(),
            //分
            "s+": date.getSeconds(),
            //秒
            "q+": Math.floor((date.getMonth() + 3) / 3),
            //季度
            "S": date.getMilliseconds() //毫秒

          };
          if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));

          for (let k in o) //@ts-ignore
          if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));

          return fmt;
        }
        /**
         * 获取格式化后的日期（不含小时分秒）
         */


        static getDay() {
          let date = new Date();
          return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        }
        /**
         * 格式化名字，XXX...
         * @param {string} name 需要格式化的字符串
         * @param {number}limit
         * @returns {string} 返回格式化后的字符串XXX...
         */


        static formatName(name, limit) {
          limit = limit || 6;

          var nameArray = this._stringToArray(name);

          var str = '';
          var length = nameArray.length;

          if (length > limit) {
            for (var i = 0; i < limit; i++) {
              str += nameArray[i];
            }

            str += '...';
          } else {
            str = name;
          }

          return str;
        }
        /**
         * 格式化钱数，超过10000 转换位 10K   10000K 转换为 10M
         * @param {number}money 需要被格式化的数值
         * @returns {string}返回 被格式化的数值
         */


        static formatMoney(money) {
          let arrUnit = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y', 'B', 'N', 'D'];
          let strValue = '';

          for (let idx = 0; idx < arrUnit.length; idx++) {
            if (money >= 10000) {
              money /= 1000;
            } else {
              strValue = Math.floor(money) + arrUnit[idx];
              break;
            }
          }

          if (strValue === '') {
            strValue = Math.floor(money) + 'U'; //超过最大值就加个U
          }

          return strValue;
        }
        /**
         * 格式化数值
         * @param {number}value 需要被格式化的数值
         * @returns {string}返回 被格式化的数值
         */


        static formatValue(value) {
          let arrUnit = [];
          let strValue = '';

          for (let i = 0; i < 26; i++) {
            // fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串
            arrUnit.push(String.fromCharCode(97 + i));
          }

          for (let idx = 0; idx < arrUnit.length; idx++) {
            if (value >= 10000) {
              value /= 1000;
            } else {
              strValue = Math.floor(value) + arrUnit[idx];
              break;
            }
          }

          return strValue;
        }
        /**
         * 根据剩余秒数格式化剩余时间 返回 HH:MM:SS
         * @param {Number} leftSec
         */


        static formatTimeForSecond(leftSec, withoutSeconds = false) {
          let timeStr = '';
          let sec = leftSec % 60;
          let leftMin = Math.floor(leftSec / 60);
          leftMin = leftMin < 0 ? 0 : leftMin;
          let hour = Math.floor(leftMin / 60);
          let min = leftMin % 60;

          if (hour > 0) {
            timeStr += hour > 9 ? hour.toString() : '0' + hour;
            timeStr += ':';
          } else {
            timeStr += '00:';
          }

          timeStr += min > 9 ? min.toString() : '0' + min;

          if (!withoutSeconds) {
            timeStr += ':';
            timeStr += sec > 9 ? sec.toString() : '0' + sec;
          }

          return timeStr;
        }
        /**
         *  根据剩余毫秒数格式化剩余时间 返回 HH:MM:SS
         *
         * @param {Number} ms
         */


        static formatTimeForMillisecond(ms) {
          let second = Math.floor(ms / 1000 % 60);
          let minute = Math.floor(ms / 1000 / 60 % 60);
          let hour = Math.floor(ms / 1000 / 60 / 60);
          return {
            'hour': hour,
            'minute': minute,
            'second': second
          };
        }
        /**
         * 将数组内容进行随机排列
         * @param {Array}arr 需要被随机的数组
         * @returns
         */


        static rand(arr) {
          let arrClone = this.clone(arr); // 首先从最大的数开始遍历，之后递减

          for (let i = arrClone.length - 1; i >= 0; i--) {
            // 随机索引值randomIndex是从0-arrClone.length中随机抽取的
            const randomIndex = Math.floor(Math.random() * (i + 1)); // 下面三句相当于把从数组中随机抽取到的值与当前遍历的值互换位置

            const itemIndex = arrClone[randomIndex];
            arrClone[randomIndex] = arrClone[i];
            arrClone[i] = itemIndex;
          } // 每一次的遍历都相当于把从数组中随机抽取（不重复）的一个元素放到数组的最后面（索引顺序为：len-1,len-2,len-3......0）


          return arrClone;
        }
        /**
         * 获得开始和结束两者之间相隔分钟数
         *
         * @static
         * @param {number} start
         * @param {number} end
         * @memberof Util
         */


        static getOffsetMimutes(start, end) {
          let offSetTime = end - start;
          let minute = Math.floor(offSetTime % (1000 * 60 * 60) / (1000 * 60));
          return minute;
        }
        /**
         * 返回指定小数位的数值
         * @param {number} num
         * @param {number} idx
         */


        static formatNumToFixed(num, idx = 0) {
          return Number(num.toFixed(idx));
        }
        /**
         * 用于数值到达另外一个目标数值之间进行平滑过渡运动效果
         * @param {number} targetValue 目标数值
         * @param {number} curValue 当前数值
         * @param {number} ratio    过渡比率
         * @returns
         */


        static lerp(targetValue, curValue, ratio = 0.25) {
          let v = curValue;

          if (targetValue > curValue) {
            v = curValue + (targetValue - curValue) * ratio;
          } else if (targetValue < curValue) {
            v = curValue - (curValue - targetValue) * ratio;
          }

          return v;
        }
        /**
         * 数据解密
         * @param {String} str
         */


        static decrypt(b64Data) {
          let n = 6;

          if (b64Data.length % 2 === 0) {
            n = 7;
          }

          let decodeData = '';

          for (var idx = 0; idx < b64Data.length - n; idx += 2) {
            decodeData += b64Data[idx + 1];
            decodeData += b64Data[idx];
          }

          decodeData += b64Data.slice(b64Data.length - n + 1);
          decodeData = this._base64Decode(decodeData);
          return decodeData;
        }
        /**
        * 数据加密
        * @param {String} str
        */


        static encrypt(str) {
          let b64Data = this._base64encode(str);

          let n = 6;

          if (b64Data.length % 2 === 0) {
            n = 7;
          }

          let encodeData = '';

          for (let idx = 0; idx < (b64Data.length - n + 1) / 2; idx++) {
            encodeData += b64Data[2 * idx + 1];
            encodeData += b64Data[2 * idx];
          }

          encodeData += b64Data.slice(b64Data.length - n + 1);
          return encodeData;
        } //public method for encoding

        /**
         * base64加密
         * @param {string}input
         * @returns
         * 1. 经过Base64加密后的密文长度一定是4的倍数
           2. 经过Base64加密后密文长度一定比原文长
         */


        static _base64encode(input) {
          let keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let output = "",
              chr1,
              chr2,
              chr3,
              enc1,
              enc2,
              enc3,
              enc4,
              i = 0;
          input = this._utf8Encode(input);

          while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = (chr1 & 3) << 4 | chr2 >> 4;
            enc3 = (chr2 & 15) << 2 | chr3 >> 6;
            enc4 = chr3 & 63; // 原文长度必须是3的倍数。如果原文不是3的倍数就填充其他符号来凑足成3的倍数。

            if (isNaN(chr2)) {
              enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
              enc4 = 64;
            }

            output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
          }

          return output;
        }
        /**
         * utf-8 加密
         * @param string
         * @returns
         */


        static _utf8Encode(string) {
          // 替换换行符
          string = string.replace(/\r\n/g, "\n");
          let utftext = "";

          for (let n = 0; n < string.length; n++) {
            let c = string.charCodeAt(n);

            if (c < 128) {
              utftext += String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
              utftext += String.fromCharCode(c >> 6 | 192);
              utftext += String.fromCharCode(c & 63 | 128);
            } else {
              utftext += String.fromCharCode(c >> 12 | 224);
              utftext += String.fromCharCode(c >> 6 & 63 | 128);
              utftext += String.fromCharCode(c & 63 | 128);
            }
          }

          return utftext;
        }
        /**
         * utf-8解密
         * @param utftext
         * @returns
         */


        static _utf8Decode(utftext) {
          let string = "";
          let i = 0;
          let c = 0;
          let c1 = 0;
          let c2 = 0;
          let c3 = 0;

          while (i < utftext.length) {
            c = utftext.charCodeAt(i);

            if (c < 128) {
              string += String.fromCharCode(c);
              i++;
            } else if (c > 191 && c < 224) {
              c2 = utftext.charCodeAt(i + 1);
              string += String.fromCharCode((c & 31) << 6 | c2 & 63);
              i += 2;
            } else {
              c2 = utftext.charCodeAt(i + 1);
              c3 = utftext.charCodeAt(i + 2);
              string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
              i += 3;
            }
          }

          return string;
        }
        /**
         * base64解密
         * @param {string}input 解密字符串
         * @returns
         */


        static _base64Decode(input) {
          let keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let output = "";
          let chr1;
          let chr2;
          let chr3;
          let enc1;
          let enc2;
          let enc3;
          let enc4;
          let i = 0;
          input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

          while (i < input.length) {
            enc1 = keyStr.indexOf(input.charAt(i++));
            enc2 = keyStr.indexOf(input.charAt(i++));
            enc3 = keyStr.indexOf(input.charAt(i++));
            enc4 = keyStr.indexOf(input.charAt(i++));
            chr1 = enc1 << 2 | enc2 >> 4;
            chr2 = (enc2 & 15) << 4 | enc3 >> 2;
            chr3 = (enc3 & 3) << 6 | enc4;
            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
              output = output + String.fromCharCode(chr2);
            }

            if (enc4 != 64) {
              output = output + String.fromCharCode(chr3);
            }
          }

          output = this._utf8Decode(output);
          return output;
        }
        /**
         * 洗牌函数
         *
         * @static
         * @param {*} arr
         * @returns
         * @memberof util
         */


        static shuffle(arr) {
          if (Array.isArray(arr)) {
            let newArr = arr.concat();
            newArr.sort(() => {
              return 0.5 - Math.random();
            });
            return newArr;
          }
        }
        /**
         * 两个数值数组取相同的值，返回一个新数组
         *
         * @static
         * @param {number[]} arr1
         * @param {number[]} arr2
         * @returns
         * @memberof util
         */


        static filterDifferentValue(arr1, arr2) {
          let arr = []; // filter创建一个新数组，新数组中元素是通过检查指定数组中符合条件的所有元素

          arr = arr1.filter(item => {
            return arr2.indexOf(item) !== -1;
          });
          return arr;
        }
        /**
         * 获取性能等级
         * -Android
         * 设备性能等级，取值为：
         * -2 或 0（该设备无法运行小游戏）
         * -1（性能未知）
         * >=1（设备性能值，该值越高，设备性能越好，目前最高不到50)
         * -IOS
         * 微信不支持IO性能等级
         * iPhone 5s 及以下
         * 设定为超低端机 benchmarkLevel = 5
         * iPhone 6 ～ iPhone SE
         * 设定为超低端机 benchmarkLevel = 15
         * iPhone 7 ~ iPhone X
         * 设定为中端机 benchmarkLevel = 25
         * iPhone XS 及以上
         * 设定为高端机 benchmarkLevel = 40
         * -H5或其他
         * -1（性能未知）
         */

        /**
        * 获取当前机型性能是否为低端机
        */


        static checkIsLowPhone() {
          // @ts-ignore
          if (window.wx) {
            // 微信性能数值参考:https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-benchmarkLevel.html
            let nowBenchmarkLevel = -1; // nowBenchmarkLevel = -1性能未知
            // @ts-ignore

            const sys = window.wx.getSystemInfoSync();
            const isIOS = sys.system.indexOf('iOS') >= 0;

            if (isIOS) {
              // 微信不支持IO性能等级
              const model = sys.model;
              console.log("###model", model); // iPhone 5s 及以下 设定为超低端机

              const ultraLowPhoneType = ['iPhone1,1', 'iPhone1,2', 'iPhone2,1', 'iPhone3,1', 'iPhone3,3', 'iPhone4,1', 'iPhone5,1', 'iPhone5,2', 'iPhone5,3', 'iPhone5,4', 'iPhone6,1', 'iPhone6,2']; // iPhone 6 ~ iPhone SE 设定为超低端机

              const lowPhoneType = ['iPhone6,2', 'iPhone7,1', 'iPhone7,2', 'iPhone8,1', 'iPhone8,2', 'iPhone8,4']; // iPhone 7 ~ iPhone X 设定为中端机

              const middlePhoneType = ['iPhone9,1', 'iPhone9,2', 'iPhone9,3', 'iPhone9,4', 'iPhone10,1', 'iPhone10,2', 'iPhone10,3', 'iPhone10,4', 'iPhone10,5', 'iPhone10,6', "iPhone XS"]; // iPhone XS 及以上 设定为高端机

              const highPhoneType = ['iPhone11,2', 'iPhone11,4', 'iPhone11,6', 'iPhone11,8', 'iPhone12,1', 'iPhone12,3', 'iPhone12,5', 'iPhone12,8', "iPhone 13", "iPhone 14"];

              for (let i = 0; i < ultraLowPhoneType.length; i++) {
                if (model.indexOf(ultraLowPhoneType[i]) >= 0) {
                  nowBenchmarkLevel = 5;
                }
              }

              for (let i = 0; i < lowPhoneType.length; i++) {
                if (model.indexOf(lowPhoneType[i]) >= 0) {
                  nowBenchmarkLevel = 10;
                }
              }

              for (let i = 0; i < middlePhoneType.length; i++) {
                if (model.indexOf(middlePhoneType[i]) >= 0) {
                  nowBenchmarkLevel = 20;
                }
              }

              for (let i = 0; i < highPhoneType.length; i++) {
                if (model.indexOf(highPhoneType[i]) >= 0) {
                  nowBenchmarkLevel = 30;
                }
              }
            } else {
              nowBenchmarkLevel = sys.benchmarkLevel;
            }

            if (nowBenchmarkLevel < 20) {
              // 22的具体参数可参考微信官方
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
        /**
         * 获取数组中随机一个元素
         * @param arr
         * @returns
         */


        static getRandomItemFromArray(arr) {
          return arr[Math.floor(Math.random() * arr.length)];
        }
        /**
         * 解析数据表带有#或者,连接的数据
         *
         * @static
         * @param {string} str
         * @param {string} [symbol="#"]
         * @return {*}
         * @memberof util
         */


        static parseStringData(str, symbol = "#") {
          let arr = str.split(symbol); // map 循环遍历数组 还回执行结果，不改变原数组

          return arr.map(item => {
            return Number(item);
          });
        }
        /**
         * 返回精确到若干位数的数值
         *
         * @static
         * @param {number} v
         * @param {number} digit
         * @memberof util
         */


        static toFixed(v, digit = 2) {
          return Number(v.toFixed(digit));
        }
        /**
         * 获取两个节点的xz坐标的弧度
         *
         * @static
         * @param {Node} ndA
         * @param {Node} ndB
         * @param {boolean} [isLocal=false] 是否为本地坐标，反之为世界坐标
         * @return {*}
         * @memberof util
         */


        static getTwoNodeXZRadius(ndA, ndB, isLocal = false) {
          const aX = isLocal ? ndA.position.x : ndA.worldPosition.x;
          const aZ = isLocal ? ndA.position.z : ndA.worldPosition.z;
          const bX = isLocal ? ndB.position.x : ndB.worldPosition.x;
          const bZ = isLocal ? ndB.position.z : ndB.worldPosition.z;
          let radius = this.getTwoPosXZRadius(aX, bX, aZ, bZ);
          return radius;
        }
        /**
         * 获取两个坐标zx分量的弧度
         *
         * @static
         * @param {number} aX
         * @param {number} aZ
         * @param {number} bX
         * @param {number} bZ
         * @returns
         * @memberof util
         */


        static getTwoPosXZRadius(aX, aZ, bX, bZ) {
          return Math.atan2(aX - bX, aZ - bZ);
        }
        /**
         * 获取两个节点坐标在xz轴的距离
         *
         * @static
         * @param {Node} ndA
         * @param {Node} ndB
         * @param {boolean} [isLocal=false] 是否为本地坐标，反之为世界坐标
         * @return {*}
         * @memberof util
         */


        static getTwoNodeXZLength(ndA, ndB, isLocal = false) {
          const aX = isLocal ? ndA.position.x : ndA.worldPosition.x;
          const aZ = isLocal ? ndA.position.z : ndA.worldPosition.z;
          const bX = isLocal ? ndB.position.x : ndB.worldPosition.x;
          const bZ = isLocal ? ndB.position.z : ndB.worldPosition.z;
          return this.getTwoPosXZLength(aX, aZ, bX, bZ);
        }
        /**
         * 获取两个坐标在xz轴的距离
         *
         * @static
         * @param {number} aX
         * @param {number} aZ
         * @param {number} bX
         * @param {number} bZ
         * @return {*}
         * @memberof util
         */


        static getTwoPosXZLength(aX, aZ, bX, bZ) {
          const x = aX - bX;
          const z = aZ - bZ;
          return Math.sqrt(x * x + z * z);
        }
        /***
         * 返回随机方向
         */


        static getRandomDirector() {
          let v = Math.random();
          return v > 0.5 ? 1 : -1;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=371dc8d69dd2a58afcb1815bdc351683f63c77ed.js.map