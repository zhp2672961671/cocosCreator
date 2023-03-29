System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _class2, _crd, ccclass, property, ClientEvent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e55dbzBNn1NUrh8r5zusvCZ", "clientEvent", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ClientEvent", ClientEvent = (_dec = ccclass("ClientEvent"), _dec(_class = (_class2 = class ClientEvent {
        /**
         * 监听事件
         * @param {string} eventName 事件名称
         * @param {function} handler 监听函数
         * @param {object} target 监听目标
         */
        static on(eventName, handler, target) {
          var objHandler = {
            handler: handler,
            target: target
          };
          var handlerList = ClientEvent._handlers[eventName];

          if (!handlerList) {
            handlerList = [];
            ClientEvent._handlers[eventName] = handlerList;
          }

          for (var i = 0; i < handlerList.length; i++) {
            if (!handlerList[i]) {
              handlerList[i] = objHandler;
              return i;
            }
          }

          handlerList.push(objHandler);
          return handlerList.length;
        }

        /**
         * 取消监听
         * @param {string} eventName 监听事件
         * @param {function} handler 监听函数
         * @param {object} target 监听目标
         */
        static off(eventName, handler, target) {
          var handlerList = ClientEvent._handlers[eventName];

          if (!handlerList) {
            return;
          }

          for (var i = 0; i < handlerList.length; i++) {
            var oldObj = handlerList[i];

            if (oldObj.handler === handler && (!target || target === oldObj.target)) {
              handlerList.splice(i, 1);
              break;
            }
          }
        }

        /**
         * 分发事件
         * @param {string} eventName 分发事件名
         * @param  {...any} params 分发事件参数
         */
        static dispatchEvent(eventName) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var handlerList = ClientEvent._handlers[eventName];
          var args1 = [];
          var i;

          for (i = 1; i < arguments.length; i++) {
            args1.push(arguments[i]);
          }

          if (!handlerList) {
            return;
          }

          for (i = 0; i < handlerList.length; i++) {
            var objHandler = handlerList[i];

            if (objHandler.handler) {
              objHandler.handler.apply(objHandler.target, args1);
            }
          }
        }

      }, _class2._handlers = {}, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9b501caeef102daa40c1539459b91b6641cc1305.js.map