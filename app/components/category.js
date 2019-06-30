import React from 'react';
import { categoryless } from '../less/category.less';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.categories = props.categories;
  }

  componentWillUpdate(nextProps, nextState) {
    this.categories = nextProps.categories;
  }

  render() {
    return (
      <div className="category">
        {
          this.categories.map((category) => (
            <div key={category.get('name')}>
              <div className={"level_1 " + category.get('isSelected')}><div className="name">{category.get('name')}</div><div className="count">{category.get('count')}</div></div>
              <div className="level_1_sub_category">
                {
                  category.get('subCategories').map((subCategory) => (
                    <div key={subCategory.get('name')} className="level_2">
                      <div className="name">{subCategory.get('name')}</div>
                      <div className="count">{subCategory.get('count')}</div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}


export default Category;
