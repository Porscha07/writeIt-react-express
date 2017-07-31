import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import  {bindActionCreators} from 'redux';
// import CharacterAction from '../actions/CharacterAction';
import {connect} from 'react-redux';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';



class tContempForum extends Component{
  constructor(props) {
    super(props);
    this.state = {
      // registerMessage: "",
      // nameError: null,
      // emailError: null,
      // formError: false
    }
    // this.handleUserProfile = this.UserProfile.bind(this);
    
  }


 
	render(){
     
    console.log(this.props)
		return(
			<div>
				<Grid className = "contemp-forum-wrapper">
					<Row>
                        
                            
                        <Col md = {7} className = "latest-topics-left">
                            <h2>RECENT TOPICS</h2> 

                            <Table className="contemp-table" striped bordered responsive>
                                    <thead>
                                      <tr>
                                        <th>Discussion</th>
                                        <th>Author</th>
                                        <th>Replies</th>
                                      </tr>
                                    </thead>

                                    <tbody>

                                      <tr>
                                        <td><img src = "images/pin-icon.png"/>Forum Guidlines</td>
                                        <td>Admin</td>
                                        <td>number of replies</td>
                                      </tr>

                                      <tr>
                                        <td>FORUM TOPIC A</td>
                                        <td><Link to = "/user">UsernameA</Link></td>
                                        <td>number of replies</td>
                                       
                                      </tr>

                                      <tr>
                                        <td>FORUM TOPIC B</td>
                                        <td><Link to = "/user">UsernameB</Link></td>
                                        <td>number of replies</td>
                                      </tr>

                                       <tr>
                                        <td>FORUM TOPIC C</td>
                                        <td><Link to = "/user">UsernameC</Link></td>
                                        <td>number of replies</td>
                                      </tr>


                                       <tr>
                                        <td>FORUM TOPIC X</td>
                                        <td><Link to = "/user">UsernameX</Link></td>
                                        <td>number of replies</td>
                                      </tr>

                                    </tbody>
                                </Table>

                                <div className = "all-topics">
                                    <Link to = "/home">All topics</Link> 
                                    <img src = "images/arrow-right.png"/>
                                   
                                </div>
                        </Col> 
                      

                         

                        <Col  md = {4} className = "forum-cat-right">
                            <h2 className = "forum-cat-header"> CONTEMPORARY FICTION</h2>

                            <Grid className = "forum-cat-view">
                                <div>
                                    <img src = "images/gen-fic-icon.png"/> 
                                </div>
                                <div className = "forum-cat-info" onClick = "">
                                    <div>Join discussions for fiction set in modern times. You can start a discussion or chat with other writers of General Ficiton.</div>
                                </div>

                                <div className = "new-topic">
                                    <Link to= "/home">Start New Topic  </Link> 
                                    <img src = "images/quote-bubble.png" /> 
                                </div>
                            </Grid>  
                        </Col>

                    </Row>


                </Grid>
                
            </div>

		)
	}
}


// function mapStateToProps(state){
//   return{
//     // characterResponse: state.characterReducer,
//     registerResponse: state.registerReducer,
//     mainforumResponse: state.mainforumReducer

//   }
// }

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({
//     mainforumAction: MainForumAction
//   }, dispatch)
// }

export default tContempForum;
// export default connect(mapStateToProps,mapDispatchToProps)(tMainForum);