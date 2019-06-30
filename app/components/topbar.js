import React from 'react';
import { topbarless } from '../less/topbar.less';

const Topbar = ({
  keyWord,
  reactLogo,
  onChange
}) => (
    <div className="top_bar">
      <div className="content">
        <div className="logo">
          <div className="description">A Website With React Tech</div>
          <div className="icon"><img src={reactLogo} width="35px" height="35px" /></div>
        </div>
        <div className="search_box">
          <input type="text" value={keyWord} placeholder="search movies" onChange={onChange}></input>
        </div>
      </div>
    </div>
  );

export default Topbar;