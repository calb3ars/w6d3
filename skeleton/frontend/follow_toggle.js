const APIUtil = require("./api_util.js");

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
