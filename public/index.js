
    var Legs,
      Arms,
      Back,
      Chest,
      Shoulders;

  $(document).ready(function() {
      "use strict";
      $.ajax({
          type: "GET",
          dataType: "json",
          url: "http://localhost:3000/list",
          success: function(data) {
              Legs = data.Legs;
              Arms = data.Arms;
              Chest = data.Chest;
              Shoulders = data.Shoulders;
              Back = data.Back;
          }
      });

  });


  var Calculate = function(props) {
      "use strict";
      var count = 0,
          time = 0,
          tmp_time = 0;
      var str = '';

      for (var i = 0; i < 5; ++i) {
          if (props[i] === true)
              count++;
      }
      time = (props[5] / count);
      tmp_time = time;

      if (props[0]) { // arms
          var id = 0;
          str = str + '<h3> Arm workout </h3>';

          while ((tmp_time >= 5) && (id < Arms.length)) {

              if (Arms[id].id == id) {

                  if (tmp_time >= Arms[id].time) {
                      tmp_time = tmp_time - Arms[id].time;
                      str = str + '<b>Exercise: ' + Arms[id].exercise +
                          '</b><br>Sets: ' + Arms[id].sets +
                          '<br>Reps: ' + Arms[id].reps +
                          '<br>Duration: ' + Arms[id].time + ' minutes';
                  }
              }

              str = str + '<br>';
              id++;
          }
      }

      tmp_time = time;
      if (props[1]) { // back
          str = str + '<h3> Back workout </h3>';
          var id = 0;
          while ((tmp_time >= 5) && (id < Back.length)) {

              if (Back[id].id == id) {

                  if (tmp_time >= Back[id].time) {
                      tmp_time = tmp_time - Back[id].time;
                      str = str + '<b>Exercise: ' + Back[id].exercise +
                          '</b><br>Sets: ' + Back[id].sets +
                          '<br>Reps: ' + Back[id].reps +
                          '<br>Duration: ' + Back[id].time + ' minutes';
                  }
              }

              str = str + '<br>';
              id++;
          }

      }
      tmp_time = time;
      if (props[2]) { // shoulders
          var id = 0;
          str = str + '<h3> Shoulder workout </h3>';
          while ((tmp_time >= 5) && (id < Shoulders.length)) {

              if (Shoulders[id].id == id) {

                  if (tmp_time >= Shoulders[id].time) {
                      tmp_time = tmp_time - Shoulders[id].time;
                      str = str + '<b>Exercise: ' + Shoulders[id].exercise +
                          '</b><br>Sets: ' + Shoulders[id].sets +
                          '<br>Reps: ' + Shoulders[id].reps +
                          '<br>Duration: ' + Shoulders[id].time + ' minutes';
                  }
              }

              str = str + '<br>';
              id++;
          }

      }
      tmp_time = time;
      if (props[3]) { // chest 
          str = str + '<h3> Chest workout </h3>';
          var id = 0;
          while ((tmp_time >= 5) && (id < Chest.length)) {

              if (Chest[id].id == id) {

                  if (tmp_time >= Chest[id].time) {
                      tmp_time = tmp_time - Chest[id].time;
                      str = str + '<b>Exercise: ' + Chest[id].exercise +
                          '</b><br>Sets: ' + Chest[id].sets +
                          '<br>Reps: ' + Chest[id].reps +
                          '<br>Duration: ' + Chest[id].time + ' minutes';
                  }
              }

              str = str + '<br>';
              id++;
          }

      }
      tmp_time = time;
      if (props[4]) { // legs
          str = str + '<h3> Leg workout </h3>';
          var id = 0;
          while ((tmp_time >= 5) && (id < Legs.length)) {

              if (Legs[id].id == id) {

                  if (tmp_time >= Legs[id].time) {
                      tmp_time = tmp_time - Legs[id].time;
                      str = str + '<b>Exercise: ' + Legs[id].exercise +
                          '</b><br>Sets: ' + Legs[id].sets +
                          '<br>Reps: ' + Legs[id].reps +
                          '<br>Duration: ' + Legs[id].time + ' minutes';
                  }
              }

              str = str + '<br>';
              id++;
          }

      }
      console.log(str);
      return str;
  };



  var List = React.createClass({

              getInitialState: function() {

                  return {
                      legs: false,
                      arms: false,
                      shoulders: false,
                      chest: false,
                      back: false,
                      min: 30,
                      max: 120,
                      step: 30,
                      value: 30,
                      text: ''
                  }


              },
              handleLegChange() {

                  this.setState({
                      legs: !this.state.legs
                  })
                  var workout = [this.state.arms, this.state.back, this.state.shoulders,
                      this.state.chest, !this.state.legs, this.state.value
                  ];
                  this.setState({
                      text: Calculate(workout)
                  });
              },
              handleArmsChange() {


                  this.setState({
                      arms: !this.state.arms
                  })
                  var workout = [!this.state.arms, this.state.back, this.state.shoulders,
                      this.state.chest, this.state.legs, this.state.value
                  ];

                  this.setState({
                      text: Calculate(workout)
                  });
              },
              handleShouldersChange() {

                  this.setState({
                      shoulders: !this.state.shoulders
                  })
                  var workout = [this.state.arms, this.state.back, !this.state.shoulders,
                      this.state.chest, this.state.legs, this.state.value
                  ]
                  this.setState({
                      text: Calculate(workout)
                  });
              },
              handleChestChange() {

                  this.setState({
                      chest: !this.state.chest
                  })
                  var workout = [this.state.arms, this.state.back, this.state.shoulders, !this.state.chest, this.state.legs, this.state.value]
                  this.setState({
                      text: Calculate(workout)
                  });

              },
              handleBackChange() {

                  this.setState({
                      back: !this.state.back
                  })
                  var workout = [this.state.arms, !this.state.back, this.state.shoulders,
                      this.state.chest, this.state.legs, this.state.value
                  ]
                  this.setState({
                      text: Calculate(workout)
                  });
              },
              handleSlideChange: function(event) {

                  this.setState({
                      value: event.target.value
                  })
                  var workout = [this.state.arms, this.state.back, this.state.shoulders,
                      this.state.chest, this.state.legs, event.target.value
                  ]
                  this.setState({
                      text: Calculate(workout)
                  });
              },
    
    render: function() {
      var ListGroup = ReactBootstrap.ListGroup;
      var ListGroupItem = ReactBootstrap.ListGroupItem;
      var Grid = ReactBootstrap.Grid;
      var Col = ReactBootstrap.Col;
      var Row = ReactBootstrap.Row;
      var Panel = ReactBootstrap.Panel;
        return (
         
          
          <Grid> 
          <div style={{height: '100px'}} >
          </div>
          <Row bottom="xs">
           <Col xs={3} xsOffset={3} >
            <div >  
                <div >
                  <Panel bsStyle="primary" header={<h3> Choose Body Part(s)!</h3>}>
                  
                <ListGroup >
                  <ListGroupItem active={this.state.arms}
                    onClick={this.handleArmsChange} >
                    
                    Arms
                </ListGroupItem>
                <ListGroupItem active={this.state.chest}
                    onClick={this.handleChestChange}  >
                    
                    Chest
                </ListGroupItem>
                <ListGroupItem active={this.state.legs}
                    onClick={this.handleLegChange} >
                    
                    Legs
                </ListGroupItem>
                <ListGroupItem active={this.state.back}
                    onClick={this.handleBackChange} >
                    
                    Back
                </ListGroupItem>
                <ListGroupItem 
                    active={this.state.shoulders}
                    onClick={this.handleShouldersChange}>
                    
                    Shoulders
                  
                </ListGroupItem>
                </ListGroup>
                <div >
                  
                <input type="range"
                  min={this.state.min} 
                  max={this.state.max}
                  step={this.state.step} 
                  value={this.state.value}  
                  onChange={this.handleSlideChange}></input>
                <span>{this.state.value} Minutes</span>
                </div>
               </Panel> 
               
               
    </div>
    </div>
    </Col>
    
    <Col xs={4} >
         <Panel  style={{height: '500px', overflow: 'auto'}}  bsStyle="primary" header={<h3> Your Workout</h3>}>
        <div >
         <div dangerouslySetInnerHTML={{__html: this.state.text}}>
                
                </div>
                </div>
        </Panel>
        </Col>
        </Row>
        </Grid>
        
    );
    },
    
});


ReactDOM.render(
    <List />,
    document.getElementById('content')
);
