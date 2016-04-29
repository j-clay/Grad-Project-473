





var TimeBar = React.createClass ({
    getInitialState: function() {
        return {min:30,
                max:120,
                step:30,
                value:30
        }
    },
    handleChange: function(event) {
       this.setState({value: event.target.value}) 
    },
    render: function() {
        return (
            
              <div class="row text-center ">
                  
                  <span > Time </span>
                <input class="mdl-slider mdl-js-slider" type="range"
                  min={this.state.min} 
                  max={this.state.max}
                  step={this.state.step} 
                  value={this.state.value}
                  onChange={this.handleChange}></input>
                <span>{this.state.value}</span>
                <a href="#" class="btn btn-primary">Calculate</a> 
                </div>
        );
    }
    
});


var List = React.createClass({
    getInitialState: function() {
        return {legs: false, 
                arms: false, 
                shoulders: false, 
                chest: false,
                back: false,
                armText: ''}
        
    },
    handleLegChange () {
        this.setState({legs: !this.state.legs})
    },
    handleArmsChange () {
        if (!this.state.arms) {
            this.setState({armText: 'Checked'});
        } else {
            this.setState({armText: ' '});
        }
        this.setState({arms: !this.state.arms})
    },
    handleShouldersChange () {
        this.setState({shoulders: !this.state.shoulders})
    },
    handleChestChange () {
        this.setState({chest:!this.state.chest})
    },
    handleBackChange () {
        this.setState({back: !this.state.back})
    },
   
    render: function() {
        return (
        <div class="row text-center">
              
                <div class="row vertical-center-row">
                  <div class="text-center col-md-4 col-md-offset-4">
                <div class="thumbnail">
              
            
                  <h3>Get Your Workout!</h3>
                  
                <ul class="demo-list-control mdl-list">
                  <li class="mdl-list__item">
                    
                  <span class="mdl-list__item-primary-content">
                    <i class="material-icons  mdl-list__item-avatar">person</i>
                    Arms
                  </span>
                  <span class="mdl-list__item-secondary-action">
                    <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
                      <input type="checkbox" id="list-checkbox-1" class="mdl-checkbox__input"
                      checked={this.state.arms} 
                      onChange={this.handleArmsChange}  />
                    </label>
                    <label >{this.state.armText}</label>
                  </span>
                </li>
                <li class="mdl-list__item">
                    
                  <span class="mdl-list__item-primary-content">
                    <i class="material-icons  mdl-list__item-avatar">person</i>
                    Chest
                  </span>
                  <span class="mdl-list__item-secondary-action">
                    <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-2">
                      <input type="checkbox" id="list-checkbox-2" class="mdl-checkbox__input"
                       checked={this.state.chest}  
                       onChange={this.handleChestChange}  />
                    </label>
                  </span>
                </li>
                <li class="mdl-list__item">
                    
                  <span class="mdl-list__item-primary-content">
                    <i class="material-icons  mdl-list__item-avatar">person</i>
                    Legs
                  </span>
                  <span class="mdl-list__item-secondary-action">
                    <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-3">
                      <input type="checkbox" id="list-checkbox-3" class="mdl-checkbox__input"
                       checked={this.state.legs}
                       onChange={this.handleLegChange}   />
                    </label>
                  </span>
                </li>
                <li class="mdl-list__item">
                    
                  <span class="mdl-list__item-primary-content">
                    <i class="material-icons  mdl-list__item-avatar">person</i>
                    Back
                  </span>
                  <span class="mdl-list__item-secondary-action">
                    <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-4">
                      <input type="checkbox" id="list-checkbox-4"  class="mdl-checkbox__input"
                      checked={this.state.back} 
                      onChange={this.handleBackChange}  />
                    </label>
                  </span>
                </li>
                <li class="mdl-list__item">
                    
                  <span class="mdl-list__item-primary-content">
                    <i class="material-icons  mdl-list__item-avatar">person</i>
                    Shoulders
                  </span>
                  <span class="mdl-list__item-secondary-action">
                    <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-5">
                      <input type="checkbox" id="list-checkbox-5" class="mdl-checkbox__input"
                      checked={this.state.shoulders} 
                      onChange={this.handleShouldersChange}  />
                    </label>
                  </span>
                </li>
                </ul>
               
                </div>
            </div>
 
    </div>
        <TimeBar />
        </div>
        
    );
    }
});




ReactDOM.render(
    <List />,
    document.getElementById('content')
);