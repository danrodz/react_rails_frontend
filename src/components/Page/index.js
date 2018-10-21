import React, { Fragment, Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import TabBar from './TabBar';
import Stories from './sections/Stories/Stories';
import About from './sections/About/About';

class Page extends Component {
  state = {
    sectionKey: 1,
    storyTitle: '',
    storyBody: '',
    tribute: '',
    tributeType: 'candle'
  };

  handleSectionClick = sectionKey => {
    this.setState({ sectionKey });
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleTributeTypeChange = tributeType => {
    this.setState({ tributeType });
  };

  handleStorySubmit = e => {
    e.preventDefault();
    let { storyTitle, storyBody } = this.state;
    console.log(storyTitle, storyBody);
    [storyTitle, storyBody] = ['', ''];
    this.setState({ storyTitle, storyBody });
  };

  render() {
    const {
      sectionKey,
      storyTitle,
      storyBody,
      tribute,
      tributeType
    } = this.state;
    return (
      <Fragment>
        <Jumbotron>
          <h1>Name</h1>
          <p>Year</p>
          <TabBar
            sectionKey={sectionKey}
            handleSectionClick={this.handleSectionClick}
          />
        </Jumbotron>
        <div className="container">
          {this.state.sectionKey === 4 ? (
            <Stories
              storyTitle={storyTitle}
              storyBody={storyBody}
              handleInputChange={this.handleInputChange}
              handleStorySubmit={this.handleStorySubmit}
            />
          ) : null}
          {this.state.sectionKey === 1 ? (
            <About
              tribute={tribute}
              tributeType={tributeType}
              handleInputChange={this.handleInputChange}
              handleTributeTypeChange={this.handleTributeTypeChange}
            />
          ) : null}
        </div>
      </Fragment>
    );
  }
}

export default Page;

// rails g model BuffaloSweater buffalo_name sweater_design
// rails db:migrate
// rails g controller BuffaloSweaters

// rails g serializers BuffaloSweater

// rails active_storage:install
// rails db:migrate

// model
// has_one_attached :image

// allow params
// buffalo_sweater = BuffaloSweater.create(buffalo_sweater_params)
// url = url_for(buffalo_sweater.image)
// render json: buffalo_sweater, image_url: url

// serializer
// attributes :id, :buffalo_name, :sweater_design, :image_url
// def image_url
//  instance_options[:image_url]
// end

// Application Controller
// def get_image_url
// -> (image) do
// begin
//  url_for(image)
// rescue Module::DelegationError
//  ""
// end
// end

// onInput={this.readFile}
//             onClick={event => {
//               event.target.value = null;
//             }}
