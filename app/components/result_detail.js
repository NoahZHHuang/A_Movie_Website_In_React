import React from 'react';
import { resultdetailless } from '../less/result_detail.less';

class ResultDetail extends React.Component {
  constructor(props) {
    super(props);
    this.moviesToDisplay = props.moviesToDisplay;
    this.getMovies = props.getMovies;
    this.updateCategories = props.updateCategories;
  }


  componentDidMount() {
    this.getMovies();
  }

  componentWillUpdate(nextProps, nextState) {
    this.moviesToDisplay = nextProps.moviesToDisplay;
    this.updateCategories(this.moviesToDisplay);
  }

  render() {
    return (
      <div className="result_details">
        {
          this.moviesToDisplay.map(
            (movie, movieIndex) => (
              <div key={movieIndex} className={movie.get('displayStyle')}>
                <a href={movie.get('imdbUrl')} target="_blank">
                  <img src={movie.get('posterFileUrl')} width="170px" height="240px" />
                  <div className="title">{movie.get('name')}</div>
                </a>
                <div className="tags">
                  {
                    movie.get('tags').join(" / ")
                  }
                </div>
                <div className="description">
                  <span>{movie.get('description')}</span>
                </div>
              </div>
            )
          )
        }
      </div>
    )
  }

}




export default ResultDetail;
