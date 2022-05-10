import React from "react";
import "./style.css";

const FloatingAction = () => {
  return (
    <React.Fragment>
      <div class="fab-wrapper">
        <input id="fabCheckbox" type="checkbox" class="fab-checkbox" />
        <label class="fab" for="fabCheckbox">
          <span class="fab-dots fab-dots-1"></span>
          <span class="fab-dots fab-dots-2"></span>
          <span class="fab-dots fab-dots-3"></span>
        </label>
        <div class="fab-wheel">
          <a class="fab-action fab-action-1">
            <i class="fas fa-question">I</i>
          </a>
          <a class="fab-action fab-action-2">
            <i class="fas fa-book">B</i>
          </a>
          <a class="fab-action fab-action-3">
            <i class="fas fa-address-book">A</i>
          </a>
          <a class="fab-action fab-action-4">
            <i class="fas fa-info">C</i>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FloatingAction;
