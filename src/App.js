import React, {Component} from "react";
import File from "./components/File/File";

import docIcon from "./assets/icons/doc.png";

class App extends Component {
  render() {
    return (
      <>
        <h2>Files</h2>
        <div className="flex-container" >
          <File
            fileName="Filename1.doc"
            sharedCount={3}
            icon={docIcon}
          />
          <File
            fileName="Filename2.doc"
            sharedCount={3}
            icon={docIcon}
          />
        </div>
      </>
    )
  }
}

export default App;
