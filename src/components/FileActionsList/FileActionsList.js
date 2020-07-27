import React, {Component} from "react";
import "./_file-actions-list.scss";

class FileActionsList extends Component {
  render() {
    return (
      <div className="file-actions-list-wrapper" >
        <div className="file-action-item" >
          <p>Download</p>
        </div>
        <div className="file-action-item" >
          <p>Rename</p>
        </div>
        <div className="file-action-item" >
          <p>View details</p>
        </div>
      </div>
    );
  }
}

export default FileActionsList;