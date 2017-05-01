import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component{
  //context pouzivat jen u routeru a vyhybat se mu jinak!
  //da se volat jako postnew.contextTypes - contexttypes je neco jako props - context.router
  static contextTypes = {
    router: PropTypes.object
  };
//router ma pristup ke VSEM komponentam
  //helper funkce
  //tyhle props nejsou globalni, ale patri do kontextu dane scope
  onSubmit(props){
    this.props.createPost(props).then(() =>{
      this.context.router.push('/');
    });
  };

  render(){
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    // const handleSubmit = this.props.handleSubmit;


    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
           {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
           {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea type="text" className="form-control" {...content} />
          <div className="text-help">
           {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}
//{categories.touched ? title.categories : ''} if true vrat title.categories if not ''

function validate(values){
  const errors = {};
     if(!values.title){
       errors.title = "Enter a username";
     }
     if(!values.categories){
       errors.categories = "Enter a categories";
     }
     if(!values.content){
       errors.content = "Enter a content";
     }
  return errors;
}

//podobne propojeni s akci a reducerem jako v connectu velmi
//reduxForm args: 1 form config, 2 mapStateRoprops, 3 mapDispatch
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title','categories','content'],
  validate
}, null, { createPost })(PostsNew);

//react form injektuje helpery dovnitr props PostsNew komponenty

// state==={
//   form:{
//     PostsNewForm:{
//       title: "..",categories..
//     }
//   }
// }
