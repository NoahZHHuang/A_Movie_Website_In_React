import React from 'react';
import CategoryContainter from '../containers/category_container';
import QueryResult from '../components/query_result';
import { contentless } from '../less/content.less';

const Content = () =>(
    <div className="content">
      <CategoryContainter/> 
      <QueryResult/>
    </div>
);

export default Content;
