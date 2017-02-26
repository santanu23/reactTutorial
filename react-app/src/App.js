import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardTitle, Dropdown, Button, Row, Col, Icon } from 'react-materialize';

class App extends Component {
  render() {
    var sampleReturnData = 
[
   {      
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
      <div>
        <Button floating large className='red' waves='light' icon='add' />
        <Employers employerList={sampleReturnData}/>
      </div>
    );
  }
}

class EmployerCard extends Component {
  render() {
    return (
      <div class="card">    
        <Card className='small'
          header={
            <CardTitle image='assets/sample-1.jpg'>
              Card Title
            </CardTitle>
          }
          actions={[
            <a href='#'>
              This is a Link
            </a>
          ]}>
          I am a very simple card.
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
        <EmployerCard></EmployerCard>);
    });
    return ( 
      <div>
        {employerCards}
      </div>
    );
  }
}


export default App;
