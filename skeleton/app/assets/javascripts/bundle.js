/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(1);

class FollowToggle {
  constructor(el) {
    let $el = $(el);
    this.$el = $(el);
    this.userId = $el.data("user-id");
    this.followState = $el.data("initial-follow-state");
    this.render();
    $el.on("click", this.handleClick.bind(this));

  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.text("Follow!");
      this.$el.attr("disabled", false);
    } else if (this.followState === "followed") {
      this.$el.text("Unfollow!");
      this.$el.attr("disabled", false);
    } else if (this.followState === "following") {
      this.$el.attr("disabled", true);
      this.$el.text("following!");
    } else {
      this.$el.attr("disabled", true);
      this.$el.text("unfollowing!");
    }
  }

  handleClick(e) {
    // debugger;
    const followToggle = this;
    
    if (this.followState === "followed") {
      this.followState = "unfollowed";
    } else {
      this.followState = "followed";
    }

    this.render();

    if (this.followState === "followed") {
      this.followState = "following";
      this.render();
      APIUtil.followUser(this.userId, "POST").
      then(() => {
        followToggle.followState = "followed";
        followToggle.render();
      });
    } else {
      this.followState = "unfollowing";
      this.render();
      APIUtil.unfollowUser(this.userId, "DELETE").
      then(() => {
        followToggle.followState = "unfollowed";
        followToggle.render();
      });
    }
  }

  //   $.ajax({
  //     url: `/users/${this.userId}/follow`,
  //     method: this.followState === "followed" ? "DELETE" : "POST",
  //     data: {
  //       user_id: this.userId
  //     },
  //     dataType: "JSON",
  //     // success: response => {
  //     //   this.followState = this.followState === "followed" ? "unfollowed" : "followed";
  //     //   this.render();
  //     // }
  //   }).then(rep => {
  //     if (this.followState === "unfollowed") {
  //       APIUtil.followUser(rep);
  //     } else {
  //       APIUtil.unfollowUser(rep);
  //     }
  //   });
  // }
}

module.exports = FollowToggle;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

const APIUtil = {
  followUser: id => APIUtil.changeFollowStatus(id, "POST"),
  unfollowUser: id => APIUtil.changeFollowStatus(id, "DELETE"),

  changeFollowStatus: (id, method) => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: method,
      dataType: "JSON",
      data: {
        user_id: id
      }
    });
  }
};

module.exports = APIUtil;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__ (0);

$(() => {
  $('button.follow-toggle').each(function(idx, el) {
    new FollowToggle(el);
  });
});


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map