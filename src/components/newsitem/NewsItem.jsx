import React, { Component } from "react";
import "./newsitem.css";
import def from './assets/default.jpg';
export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsURL, author, date } = this.props;

    const imageStyle = {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    };

    return (
      <div>
        <div className="news-card">
          <div className="news-card-image">
            <img
              style={imageStyle}
              src={
                !imageURL
                  ? def
                  : imageURL
              }
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="news-card-body">
            <h6 className="news-card-title">{title}...</h6>
            <p className="news-card-text">
              {description}...{" "}
              <a href={newsURL} className="read-more" target="_blank" rel="noreferrer">
                Read More.
              </a><br/>
              
            </p>
            <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
