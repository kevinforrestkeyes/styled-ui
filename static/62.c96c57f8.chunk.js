webpackJsonp([62],{1904:function(e,t,n){var o=n(0),s=n(90),a=n(426).PageRenderer;a.__esModule&&(a=a.default);var i=s({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(2007)}},componentWillMount:function(){},render:function(){return o.createElement(a,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,e.exports=i},2007:function(e,t){e.exports="Bootstrap components expect an opinionated CSS reset to be present. In order to not break global styles in an existing app, we provide a customized stylesheet that only applies these styles to elements within a special container element.\n\nWhen using a component from this library, it will be automatically wrapped in an outer container element with the CSS reset styles applied to it. If the component contains other Bootstrap components (e.g. a group of form elements), only the outer-most component will be wrapped.\n\nTo import the stylesheet:\n\n```\nimport '@faithlife/styled-ui/dist/main.css';\n```\n\nMake sure webpack is set up to handle stylesheet imports using `css-loader`, or you will get a syntax error during the build.\n"}});
//# sourceMappingURL=62.c96c57f8.chunk.js.map