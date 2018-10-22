import React, { Fragment, Component } from 'react';
import { Jumbotron, Row, Col } from 'react-bootstrap';
import TabBar from './TabBar';
import About from './sections/About/About';
import Life from './sections/Life/Life';
import Stories from './sections/Stories/Stories';
import Gallery from './sections/Gallery/Gallery';
import ImageModal from '../../shared/components/ImageModal/ImageModal';

class Page extends Component {
  state = {
    sectionKey: 1,
    storyTitle: '',
    storyBody: '',
    tribute: '',
    tributeType: 'candle',
    showImageModal: false,
    imageModalSrc: ''
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

  toggleImageModal = () => {
    const showImageModal = !this.state.showImageModal;
    this.setState({ showImageModal });
  };

  onImageThumbnailClick = imageModalSrc => {
    const showImageModal = !this.state.showImageModal;
    this.setState({ showImageModal, imageModalSrc });
  };

  render() {
    const {
      sectionKey,
      storyTitle,
      storyBody,
      tribute,
      tributeType,
      showImageModal,
      imageModalSrc
    } = this.state;

    return (
      <Fragment>
        <Jumbotron
          style={{
            backgroundImage:
              'url(https://2.bp.blogspot.com/-qme1vmcjGxw/UEhXYuTIrCI/AAAAAAAAA28/I0BMipYvcHI/s1600/donau-sunrise-full-HD-nature-background-wallpaper-for-laptop-widescreen.jpg)',
            backgroundPosition: 'center center',
            color: 'white'
          }}>
          <div className="container">
            <Row>
              <Col smOffset={1} sm={10}>
                <h1>Selena Quintanilla</h1>
              </Col>
              <Col
                smOffset={4}
                sm={4}
                style={{
                  backgroundImage:
                    'url(https://upload.wikimedia.org/wikipedia/en/4/40/Selena_Quintanilla-P%C3%A9rez.jpg)',
                  height: '280px',
                  width: '200px',
                  boxShadow: '-5px 10px 20px white',
                  borderRadius: '5px'
                }}
              />
            </Row>
            <Row>
              <Col smOffset={4} sm={4}>
                <h2>1971- 1995</h2>
              </Col>
            </Row>
            <Row>
              <Col smOffset={3} sm={6}>
                <TabBar
                  sectionKey={sectionKey}
                  handleSectionClick={this.handleSectionClick}
                />
              </Col>
            </Row>
          </div>
        </Jumbotron>
        <div className="container">
          {this.state.sectionKey === 1 ? (
            <About
              tribute={tribute}
              tributeType={tributeType}
              handleInputChange={this.handleInputChange}
              handleTributeTypeChange={this.handleTributeTypeChange}
            />
          ) : null}
          {this.state.sectionKey === 2 ? <Life /> : null}
          {this.state.sectionKey === 3 ? (
            <Gallery onImageThumbnailClick={this.onImageThumbnailClick} />
          ) : null}
          {this.state.sectionKey === 4 ? (
            <Stories
              storyTitle={storyTitle}
              storyBody={storyBody}
              handleInputChange={this.handleInputChange}
              handleStorySubmit={this.handleStorySubmit}
            />
          ) : null}
        </div>
        <ImageModal
          show={showImageModal}
          onHide={this.toggleImageModal}
          src={imageModalSrc}
        />
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
