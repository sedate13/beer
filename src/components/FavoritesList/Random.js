import React, { Component } from "react";

import Favorite from "./Favorite";

export default class Random extends Component {
  render() {
    return (
      <div>
        <div>
          <Favorite />
        </div>
        <nav className="pagination " aria-label="pagination">
          <a
            className="pagination-previous"
            title="This is the first page"
            disabled
          >
            Previous
          </a>
          <a className="pagination-next" href="/random2">
            Next page
          </a>
          <ul className="pagination-list">
            <li>
              <a
                className="pagination-link is-current"
                aria-label="Page 1"
                aria-current="page"
                href="/random"
              >
                1
              </a>
            </li>
            <li>
              <a
                className="pagination-link"
                aria-label="Goto page 2"
                href="/random2"
              >
                2
              </a>
            </li>
            <li>
              <a
                className="pagination-link"
                aria-label="Goto page 3"
                href="/random3"
              >
                3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
