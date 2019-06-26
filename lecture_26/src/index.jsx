import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
      <div className="ui container comments">
          <ApprovalCard >
            <CommentDetail 
              author="Author 1"
              date="Date 1"
              text="lorem 1"
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
          <ApprovalCard >
            <CommentDetail 
              author="Author 2"
              date="Date 2"
              text="lorem 2"
              avatar={faker.image.avatar()}
              />
              <ApprovalCard >
              </ApprovalCard>
            <CommentDetail 
              author="Author 3"
              date="Date 1"
              text="lorem 3"
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
      </div>  
    );
}


ReactDOM.render(
    <App />,
    document.querySelector("#root")
);