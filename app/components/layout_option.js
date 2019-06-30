import React from 'react';
import { layoutoptionless } from '../less/layout_option.less';


const LayoutOption = ({
  options,
  onClick
}) => (
    <div className="layout">
      {
        options.map(
          (option, index)=>{
            let optionName = option.get('name');
            let isSelected = option.get('isSelected');
            return (<div key={index} className={"option " + isSelected} onClick={onClick.bind(this, optionName)}>{optionName}</div>);
            /*
            if the onClick write like : 
                  onClick={onClick}
            then the container should write like : 
                  (dispatch) => ({
                        onClick: (event) =>{
                        let option = event.target.innerHTML;
                        dispatch(CHANGE_LAYOUT_ACTION({
                          'option':option
                        }));
                      }
                  })
              */
          } 
        )
      }
    </div>
  )

export default LayoutOption;
