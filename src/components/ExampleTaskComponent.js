import React from "react";
import { withTaskContext } from '@twilio/flex-ui';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class ExampleTaskComponent extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      customerName: this.props.task.attributes?.name || ""
    }
  }

  updateTask = () => {
    const { task } = this.props;
    let attributes = task.attributes;
    attributes.name = this.state.customerName;
    task.setAttributes(attributes);
  }

    handleNameChange = (event) => {
    this.setState({customerName: event.target.value});
  };

  divStyle = {
    marginTop: '30px',
    marginBottom: '30px'
  }
  
  render() {
    return (
      <div>
        <div style={this.divStyle}>
            <h1> Ahoy {this.state.customerName}</h1>
        </div>
        <div style={this.divStyle}>
            <TextField
                  onChange={this.handleNameChange}
                  name='customerNameField'
                  id='customerNameField'
                  value={this.state.customerName}
                  label='type customer name'
                  
              />
        </div>
        <div style={this.divStyle}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => this.updateTask()}
              size="small"
            >
            Update Name
            </Button>            
        </div>
        <hr/>
      </div>
    )
  }
}


export default withTaskContext(ExampleTaskComponent);
