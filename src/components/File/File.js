import React, {Component} from "react";
import FileActionsList from "../FileActionsList/FileActionsList";

import "./_file.scss";

class File extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showActions: false,
    };
  }

  handleShowActions = (fileName) => {
    this.setState(prevState => ({
      showActions: !prevState.showActions,
    }))
  };

  render() {
    const {fileName, sharedCount, icon} = this.props;
    const {showActions} = this.state;

    return (
      <div className="file-item small-3" >
        <div className="file-box-wrapper" >
          <div className={`${showActions ? "with-opacity" : ""} icon-wrapper`} >
            <img src={icon} alt="file-icon"/>
          </div>
          <div className={`${showActions ? "with-opacity" : ""} icon-file-info-wrapper`} >
            <p className="file-title" >{fileName}</p>
            <p className="file-shared-count" >Shared with {sharedCount}</p>
          </div>
          <div
            onClick={() => this.handleShowActions(fileName)}
            className="file-actions-wrapper"
          >
            <div className="action-point" />
            <div className="action-point" />
            <div className="action-point" />
          </div>
          {
            showActions &&
              <div className="file-actions-content-wrapper" >
                <FileActionsList />
              </div>
          }
        </div>
      </div>
    )
  }
}

export default File;