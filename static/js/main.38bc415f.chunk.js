(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var i=a(9),n=a.n(i),s=(a(16),a(11)),r=a(2),c=a(3),l=a(7),o=a(6),d=a(1),m=a.n(d),h=(a(17),a(4)),j=(a(18),a(19),a(0)),u=function(e){var t=e.title,a=e.description,i=e.imgUrl,n=e.imdbUrl;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("figure",{className:"image is-4by3",children:Object(j.jsx)("img",{src:i,alt:"Film logo"})})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsxs)("div",{className:"media",children:[Object(j.jsx)("div",{className:"media-left",children:Object(j.jsx)("figure",{className:"image is-48x48",children:Object(j.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(j.jsx)("div",{className:"media-content",children:Object(j.jsx)("p",{className:"title is-8",children:t})})]}),Object(j.jsxs)("div",{className:"content",children:[a,Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:n,children:"IMDB"})]})]})]})},b=function(e){var t=e.movies;return Object(j.jsx)("div",{className:"movies",children:t.map((function(e){return Object(j.jsx)(u,Object(h.a)({},e),e.imdbId)}))})},p=a(5),f=function(e){var t=e.type,a=e.name,i=e.placeholder,n=e.pattern,s=e.value,r=e.onChange;return Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsx)("input",{type:t,name:a,className:"form-control",placeholder:i,pattern:n,value:s,onChange:r,required:!0})})},g=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},e.clearState=function(){e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})},e.handleChange=function(t){var a=t.target,i=a.name,n=a.value;e.setState((function(){return Object(p.a)({},i,n)}))},e.getNewMovie=function(t){t.preventDefault();var a=Object(h.a)({},e.state);e.props.onAddMovie(a),e.clearState()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,i=e.imgUrl,n=e.imdbUrl,s=e.imdbId;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"App__new-movie",children:"Add a Movie"}),Object(j.jsxs)("form",{className:"needs-validation",onSubmit:this.getNewMovie,children:[Object(j.jsx)(f,{type:"text",name:"title",placeholder:"Please enter a title",pattern:"[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u04510-9!\\s]+$",value:t,onChange:this.handleChange}),Object(j.jsx)(f,{type:"text",name:"description",placeholder:"Please enter a description",pattern:"[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u04510-9!\\s\\)\\(+=._-]+$",value:a,onChange:this.handleChange}),Object(j.jsx)(f,{type:"url",name:"imgUrl",placeholder:"Please enter a imgUrl (https://***.*)",pattern:"^[Hh][Tt][Tt][Pp][Ss]?:\\/\\/(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]+-?)*[a-zA-Z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]+-?)*[a-zA-Z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,}))(?::\\d{2,5})?(?:\\/[^\\s]*)?",value:i,onChange:this.handleChange}),Object(j.jsx)(f,{type:"url",name:"imdbUrl",placeholder:"Please enter a imdbUrl (https://***.*)",pattern:"^[Hh][Tt][Tt][Pp][Ss]?:\\/\\/(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]+-?)*[a-zA-Z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]+-?)*[a-zA-Z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,}))(?::\\d{2,5})?(?:\\/[^\\s]*)?",value:n,onChange:this.handleChange}),Object(j.jsx)(f,{type:"text",name:"imdbId",placeholder:"Please enter an imdbId (tt1234567-9)",pattern:"^[t][t][0-9]{7,9}",value:s,onChange:this.handleChange}),Object(j.jsx)("button",{type:"submit",className:"btn btn-success",children:"Submit"})]})]})}}]),a}(m.a.Component),v=a(10),O=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={movies:v},e.addMovie=function(t){e.setState((function(e){return{movies:[t].concat(Object(s.a)(e.movies))}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.movies;return Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("div",{className:"page-content",children:Object(j.jsx)(b,{movies:e})}),Object(j.jsx)("div",{className:"sidebar",children:Object(j.jsx)(g,{onAddMovie:this.addMovie})})]})}}]),a}(m.a.Component);n.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.38bc415f.chunk.js.map