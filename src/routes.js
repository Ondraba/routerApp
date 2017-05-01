import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

//jen pro test, zde se nedelaji komponenty


export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} /> //default routa
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);
//google.com/ => renders App
//this.props.params.id //params= :
