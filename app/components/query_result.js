import React from 'react';
import LayoutOptionContainer from '../containers/layout_option_container';
import ResultDetailContainer from '../containers/result_detail_container';
import { queryresultless } from '../less/query_result.less';

const QueryResult = () =>(
    <div className="query_result">
      <LayoutOptionContainer/> 
      <ResultDetailContainer/> 
    </div>
);

export default QueryResult;