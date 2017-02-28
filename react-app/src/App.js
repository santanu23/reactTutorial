import React, { Component } from 'react';
import Card from './Card.js';
import './App.css';
// <Button floating large className='blue' waves='light' icon='skip_previous' />
// <Button floating large className='blue' waves='light' icon='skip_next' />
class App extends Component {
  render() {
    var sampleReturnData = 
[
   {  
      "id": 1000,  
      "employer":"Tribalscale",
      "start_time":"11:30",
      "end_time":"13:30",
      "description":"TribalScale is a mobile development company, focusing on mobile and connected devices. We create connected experiences for our partners utilizing our mobile & IoT expertise. Our team has a history of working with innovative, premium brands to usher businesses into the connected age.",
      "website":"http://www.tribalscale.com",
      "location": "TC 2218",
      "location_url": "https://uwaterloo.ca/map/TC?basemap=D#map=17/43.4690/-80.5412",
      "audience":["ENG","MATH"],
      "link":"http://www.ceca.uwaterloo.ca/students/hiresessions_details.php?id=4625",
      "image":"http://www.underconsideration.com/brandnew/archives/google_2015_logo_detail.png"
   },
   {
      "id": 1001,
      "employer":"CIBC Capital Markets",
      "start_time":"14:30",
      "end_time":"16:00",
      "description":"",
      "website":"",
      "location": "TC 2218",
      "location_url": "https://uwaterloo.ca/map/TC?basemap=D#map=17/43.4690/-80.5412",
      "audience":["ENG","MATH"],
      "link":"http://www.ceca.uwaterloo.ca/students/hiresessions_details.php?id=4708",
      "image":"http://www.underconsideration.com/brandnew/archives/google_2015_logo_detail.png"
   },
   {
      "id": 1002,
      "employer":"GroupBy",
      "start_time":"17:00",
      "end_time":"19:00",
      "description":"Do you know where you want to take your career next? GroupBy is a small company doing big things! Our product competes in the same space with the likes of Oracle, Salesforce, and SAP, with a fraction of the developers.   Our co-op and full-time opportunities provide you with the advantage of building impactful pieces of the product, while still having the mentorship and learning experiences larger companies offer. Our development team strives for continuous improvement in an agile continuous delivery environment (with foosball!). Come and join our CEO and CTO to find your niche at GroupBy!",
      "website":"groupbyinc.com/careers",
      "location": "TC 2218",
      "location_url": "https://uwaterloo.ca/map/TC?basemap=D#map=17/43.4690/-80.5412",
      "audience":["ENG","MATH"],
      "link":"http://www.ceca.uwaterloo.ca/students/hiresessions_details.php?id=4843",
      "image":"http://www.underconsideration.com/brandnew/archives/google_2015_logo_detail.png"
   }
];
    return (
      <div className="mainContainer">
        
        <Employers employerList={sampleReturnData}/>
        
      </div>
    );
  }
}

class EmployerCard extends Component {
  render() {
    return (
      <div className="employerCard">    
        <Card imageUrl={this.props.employer.image} cardTitle={this.props.employer.employer} actionUrl={this.props.employer.link} actionText="Register">
          <p><strong>{this.props.employer.employer}</strong></p>
          <p>{this.props.employer.start_time} - {this.props.employer.end_time}</p>
          <p><a href={this.props.employer.location_url} target="_blank" ><i className="fa fa-map-marker " aria-hidden="true"></i>{this.props.employer.location}</a></p>
          <p>{this.props.employer.description}</p>
        </Card> 
      </div>
    );
  }
}

class Employers extends Component {
  render() {
    var employerCards = [];
    this.props.employerList.forEach(function(employer) {
      employerCards.push(
        <EmployerCard key={employer.id} employer={employer}></EmployerCard>);
    });
    return ( 
      <div className="cardContainer">
        {employerCards}
      </div>
    );
  }
}

export default App;
