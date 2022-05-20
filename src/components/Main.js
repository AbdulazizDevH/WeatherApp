import React, { Component } from "react";
import Load from "./Load";
import Week from "./Week";
import Temp from "./Temp";
import Cards from "./Cards";
import Img from "./Img";
export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      search: "",
      hour: "",
      img: [],
    };

    this.inputSearch = this.inputSearch.bind(this);
  }

  componentDidMount() {
    const optionsImg = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'google-image-search1.p.rapidapi.com',
        'X-RapidAPI-Key': '760cbbd4d3msh943358b670a6fa0p114a6bjsncd6e0c896275'
      }
    };
    fetch('https://google-image-search1.p.rapidapi.com/v2/?q=Moscow&hl=en', optionsImg)
      .then(response => response.json())
      .then(response => {
        this.setState({img: response})
      })
      .catch(err => console.error(err));    
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        "X-RapidAPI-Key": "760cbbd4d3msh943358b670a6fa0p114a6bjsncd6e0c896275",
      },
    };

    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=Toshkent`, options)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        this.setState({ data: response });
      })
      .catch((err) => console.error("err"));
  }

  inputSearch(e) {
    if (e.key == 'Enter') {
      const optionsImg = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'google-image-search1.p.rapidapi.com',
          'X-RapidAPI-Key': '760cbbd4d3msh943358b670a6fa0p114a6bjsncd6e0c896275'
        }
      };
      fetch(`https://google-image-search1.p.rapidapi.com/v2/?q=${e.target.value}&hl=en`, optionsImg)
        .then(response => response.json())
        .then(response => {
          this.setState({img: response})
          console.log(response.response);
        })
        .catch(err => console.error(err));

      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
          "X-RapidAPI-Key": "760cbbd4d3msh943358b670a6fa0p114a6bjsncd6e0c896275",
        },
      };
  
      fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${e.target.value}`, options)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          this.setState({ data: response });
        })
        .catch((err) => console.error("err"));
    }
  }

  render() {
    const { current, location, error } = this.state.data;
    const { img } = this.state;
    // console.log(current, location);
    const days = [
      "Sunday", "Monday", "Tuesday", "Wednesday",
      "Thursday", "Friday", "Saturday",
    ];
    const months = [
      "Jan", "Feb", "Mar", "Apr",
      "May", "Jun", "Jul", "Aug",
      "Sep", "Oct", "Nov", "Dec",
    ];
    return (
      <div className="main d-flex">
        <div className="current-wrapper bg-white">
          <div className="input-group justify-content-between align-items-center">
            <i className="bi bi-search"></i>
            <input
              placeholder="Search for places ..."
              className="search p-1"
              onChange={(e) => this.setState({search: e.target.value})}
              onKeyDown={this.inputSearch}
              value={this.state.search}
            />
          </div>
          <Temp {...this.state.data} days={days} />
          { img.length ? ( <Img img={img.response.images[0].image.url} {...location} /> ) : ( <Img Loading="Loading" /> ) }
        </div>
        <div className="data-wrapper bg-light w-75 p-5">
          <div className="row">
            <h2 className="col-md-12 m-0 mt-1">Week</h2>
          </div>
          <div className="row week-days p-0 ps-2">
            {days.map((item, i) =>
              current ? 
              ( <Week key={i} item={item} {...this.state.data} /> )
                  : 
              ( <Load key={i} id={i} /> )
            )}
          </div>
          <div className="row index-card">
            <h2 className="col-md-12 m-0 mb-2 pt-5">Today's Highlights</h2>
            <Cards {...current} {...location} {...error} />
          </div>
        </div>
        {/* <p className="w-100 pt-4 text-center">Copyright © <a href="" className=" text-decoration-none">Weather API</a></p> */}
      </div>
    );
  }
}
