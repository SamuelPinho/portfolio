import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Icons extends Component {
  render() {
    return (
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <span class="icon is-medium">
              <FontAwesomeIcon icon={["fab", "js-square"]} size="2x" />
            </span>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Following</p>
            <p class="title">123</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Followers</p>
            <p class="title">456K</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Likes</p>
            <p class="title">789</p>
          </div>
        </div>
      </nav>
    );
  }
}

export default Icons;
