(this.webpackJsonpcominovel=this.webpackJsonpcominovel||[]).push([[0],{21:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;var t=h();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}}n.default=e,t&&t.set(e,n);return n}(n(1)),r=p(n(2)),o=p(n(263)),l=p(n(199)),c=p(n(17)),i=n(86),s=(n(167),p(n(99))),u=p(n(363)),m=n(213),d=p(n(214));function p(e){return e&&e.__esModule?e:{default:e}}function h(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function E(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=E(this,O(t).call(this,e))).renderForm=function(e){var t,o=e.getPrefixCls,l=n.props,i=l.prefixCls,s=l.hideRequiredMark,u=l.className,m=void 0===u?"":u,d=l.layout,p=o("form",i),h=(0,r.default)(p,(y(t={},"".concat(p,"-horizontal"),"horizontal"===d),y(t,"".concat(p,"-vertical"),"vertical"===d),y(t,"".concat(p,"-inline"),"inline"===d),y(t,"".concat(p,"-hide-required-mark"),s),t),m),f=(0,c.default)(n.props,["prefixCls","className","layout","form","hideRequiredMark","wrapperCol","labelAlign","labelCol","colon"]);return a.createElement("div",v({},f,{className:h}))},(0,s.default)(!e.form,"Form","It is unnecessary to pass `form` to `Form` after antd@1.7.0."),n}var n,o,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.wrapperCol,n=e.labelAlign,r=e.labelCol,o=e.layout,l=e.colon;return a.createElement(d.default.Provider,{value:{wrapperCol:t,labelAlign:n,labelCol:r,vertical:"vertical"===o,colon:l}},a.createElement(i.ConfigConsumer,null,this.renderForm))}}])&&b(n.prototype,o),l&&b(n,l),t}(a.Component);t.default=j,j.defaultProps={colon:!0,layout:"horizontal",hideRequiredMark:!1,onSubmit:function(e){e.preventDefault()}},j.Item=u.default,j.createFormField=l.default,j.create=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.default)(v(v({fieldNameProp:"id"},e),{fieldMetaProp:m.FIELD_META_PROP,fieldDataProp:m.FIELD_DATA_PROP}))}},252:function(e,t,n){e.exports=n(483)},262:function(e,t,n){},483:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(10),l=n.n(o),c=n(36),i=n(490),s=n(22),u=n(23),m=n(25),d=n(24),p=n(26),h=n(491),f=n(243),v=n(30),y="FETCH_COMINOVEL",b="FETCH_COMINOVEL_FULLFILLED",E="FETCH_SEASONS",O="FETCH_SEASONS_FULLFILLED",g="FETCH_TAXONOMY_TERMS",j="FETCH_TAXONOMY_TERMS_FULLFILLED",C="UPDATE_SEASONS";function _(e){return{payload:e,type:y}}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"genre";return{keyword:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,taxonomy:e,treeView:arguments.length>2&&void 0!==arguments[2]&&arguments[2],type:g}}function S(e){return{payload:e,type:E}}function k(e){return{payload:e,type:O}}function A(e,t){return{payload:{postId:t,seasons:e},type:C}}n(261),n(262);var I=function(){function e(){Object(s.a)(this,e)}return Object(u.a)(e,null,[{key:"bootstrap",value:function(){window.Cominovel=window.Cominovel||{},window.Cominovel.currentID=window.Cominovel.currentID||14395}}]),e}(),T=n(493),F=n(91),N=n(495),P=n(496),x=n(21),D=n.n(x),L=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cominovel-tab-content"},r.a.createElement(T.a,{title:"Advanced",subTitle:"C\xe1c th\xf4ng tin n\xe2ng cao"}),r.a.createElement(D.a,Object.assign({},{labelCol:{span:6},wrapperCol:{span:14}},{labelAlign:"left"}),r.a.createElement(D.a.Item,{label:"Adult content"},r.a.createElement(F.a.Group,{style:{width:"100%"},name:"rating_system"},r.a.createElement(N.a,null,r.a.createElement(P.a,{span:8},r.a.createElement(F.a,{value:"X"},"Include")))),",")))}}]),t}(a.Component),M=n(64),G=n(492),B=n(106),R=function(e){var t=[];return e.forEach((function(e){t.push(e.id)})),t},U=D.a.Item,V=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={selectedArtists:n.props.selectedArtists},n.handleChange=function(e){n.setState({selectedArtists:[e]})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchTaxonomyTerms("cmn_artist")}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.selectedArtists!==this.props.selectedArtists&&this.setState({selectedArtists:e.selectedArtists})}},{key:"renderItemKey",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"artist";return"".concat(t).concat(e)}},{key:"renderCominovelArtists",value:function(){var e=this;return"object"===typeof this.props.artists?this.props.artists.map((function(t,n){return r.a.createElement(B.a.Option,{key:e.renderItemKey(n,"artist_option"),value:t.id},t.name)})):null}},{key:"renderSelectedArtist",value:function(){var e=this;return this.state.selectedArtists.map((function(t,n){return r.a.createElement(G.a,{key:e.renderItemKey(n,"artist_option"),type:"hidden",name:"tax_input[cmn_artist][]",value:t})}))}},{key:"render",value:function(){return r.a.createElement(U,{label:"Artists"},r.a.createElement(B.a,{showSearch:!0,optionFilterProp:"children",placeholder:"Ti\u1ec3u T\xf4n Tuy\u1ebft \u0110\u0103ng",style:{width:"100%"},onChange:this.handleChange,value:this.state.selectedArtists[0]||void 0},this.renderCominovelArtists()),this.renderSelectedArtist())}}]),t}(a.Component),K=Object(c.b)((function(e){return{artists:e.terms.cmn_artist||[],selectedArtists:R(e.cominovel.info.cmn_artist_terms||[])}}),(function(e){return Object(v.b)({fetchTaxonomyTerms:w},e)}))(V),W=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={selectedAuthors:n.props.selectedAuthors},n.handlerChange=function(e){n.setState({selectedAuthors:[e]})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchTaxonomyTerms("cmn_author")}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.selectedAuthors!==this.props.selectedAuthors&&this.setState({selectedAuthors:e.selectedAuthors})}},{key:"renderItemKey",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"author";return"".concat(t).concat(e)}},{key:"renderCominovelAuthors",value:function(){var e=this;return"object"===typeof this.props.authors?this.props.authors.map((function(t,n){return r.a.createElement(B.a.Option,{key:e.renderItemKey(n),value:t.id},t.name)})):null}},{key:"renderSelectedAuthors",value:function(){var e=this;return this.state.selectedAuthors.map((function(t,n){return r.a.createElement(G.a,{type:"hidden",key:e.renderItemKey(n,"author_option"),name:"tax_input[cmn_author][]",value:t})}))}},{key:"render",value:function(){return r.a.createElement(D.a.Item,{label:"Authors"},r.a.createElement(B.a,{placeholder:"Choose or add author",style:{width:"100%"},value:this.state.selectedAuthors[0],onChange:this.handlerChange},this.renderCominovelAuthors()),this.renderSelectedAuthors())}}]),t}(a.Component),J=Object(c.b)((function(e){return{authors:e.terms.cmn_author||[],selectedAuthors:R(e.cominovel.info.cmn_author_terms||[])}}),(function(e){return Object(v.b)({fetchTaxonomyTerms:w},e)}))(W),q=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={selectedCountries:n.props.selectedCountries},n.handleChange=function(e){n.setState({selectedCountries:[e]})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchTaxonomyTerms("cmn_country")}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.selectedCountries!==this.props.selectedCountries&&this.setState({selectedCountries:e.selectedCountries})}},{key:"renderItemKey",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"country";return"".concat(t).concat(e)}},{key:"renderCominovelCountries",value:function(){var e=this;return"object"===typeof this.props.countries?this.props.countries.map((function(t,n){return r.a.createElement(B.a.Option,{key:e.renderItemKey(n),value:t.id},t.name)})):null}},{key:"renderSelectedCountries",value:function(){var e=this;return this.state.selectedCountries.map((function(t,n){return r.a.createElement(G.a,{type:"hidden",key:e.renderItemKey(n,"country_value"),name:"tax_input[cmn_country][]",value:t})}))}},{key:"render",value:function(){return r.a.createElement(D.a.Item,{label:"Comic Type"},r.a.createElement(B.a,{placeholder:"Country or comic types",style:{width:200},value:this.state.selectedCountries[0]||void 0,onChange:this.handleChange},this.renderCominovelCountries()),this.renderSelectedCountries())}}]),t}(a.Component),H=Object(c.b)((function(e){return{countries:e.terms.cmn_country||[],selectedCountries:R(e.cominovel.info.cmn_country_terms||[])}}),(function(e){return Object(v.b)({fetchTaxonomyTerms:w},e)}))(q),z=D.a.Item,X=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={selectedGenres:n.props.selectedGenres},n.handleChange=function(e){n.setState({selectedGenres:[e]})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchTaxonomyTerms("genre",null,!0)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.selectedGenres!==this.props.selectedGenres&&this.setState({selectedGenres:e.selectedGenres})}},{key:"renderItemKey",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"genre";return"".concat(t).concat(e)}},{key:"renderSelectedGenres",value:function(){var e=this;return this.state.selectedGenres.map((function(t,n){return r.a.createElement(G.a,{type:"hidden",key:e.renderItemKey(n,"genre_option"),name:"tax_input[genre][]",value:t})}))}},{key:"renderCominovelGenres",value:function(){var e=this;return"object"===typeof this.props.genres?this.props.genres.map((function(t,n){return r.a.createElement(B.a.Option,{key:e.renderItemKey(n),value:t.id},t.name)})):null}},{key:"render",value:function(){return r.a.createElement(z,{label:"Genres"},r.a.createElement(B.a,{showSearch:!0,optionFilterProp:"children",placeholder:"The genre of comic",style:{width:200},onChange:this.handleChange,value:this.state.selectedGenres[0]||void 0},this.renderCominovelGenres()),this.renderSelectedGenres())}}]),t}(a.Component),Y=Object(c.b)((function(e){return{genres:e.terms.genre||[],selectedGenres:R(e.cominovel.info.genre_terms)||[]}}),(function(e){return Object(v.b)({fetchTaxonomyTerms:w},e)}))(X),Z=n(487),$=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"renderFooter",value:function(){}},{key:"render",value:function(){return r.a.createElement(D.a.Item,{label:"Publish Date"},r.a.createElement(Z.a,{placeholder:"Select publish date",mode:"year",style:{width:200}}))}}]),t}(a.Component),Q=Object(c.b)((function(e){return{release:e.cominovel.info.cmn_release_terms}}))($),ee=D.a.Item,te=G.a.TextArea,ne={labelCol:{sm:{span:5},xs:{span:24}},wrapperCol:{sm:{span:12},xs:{span:24}}},ae=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state=e.info,n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.props.info!==e.info&&this.setState(e.info)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"cominovel-tab-content"},r.a.createElement(T.a,{title:"Basic Info",subTitle:"\u0110\xe2y l\xe0 c\xe1c th\xf4ng tin c\u01a1 b\u1ea3n c\u1ee7a truy\u1ec7n"}),r.a.createElement(D.a,Object.assign({},ne,{labelAlign:"left"}),r.a.createElement(G.a,{name:"cominovel_loaded",hidden:!0,value:"true"}),r.a.createElement(ee,{label:"Alternatve Name"},r.a.createElement(G.a,{name:"alternative_name",onChange:function(t){return e.setState({alternative_name:t.target.value})},value:this.state.alternative_name})),r.a.createElement(H,null),r.a.createElement(Q,null),r.a.createElement(J,null),r.a.createElement(K,null),r.a.createElement(Y,null),r.a.createElement(ee,{label:"Short Description"},r.a.createElement(te,{name:"post_excerpt",onChange:function(t){return e.setState({post_excerpt:t.target.value})},rows:4,value:this.state.post_excerpt}))))}}]),t}(a.Component),re=Object(c.b)((function(e){return Object(M.a)({},e.terms,{info:e.cominovel.info})}),(function(e){return Object(v.b)({fetchTaxonomyTerms:w},e)}))(ae),oe=n(94),le=n(8),ce=n(486),ie=n(489),se=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cominovel-tab-content"},r.a.createElement(T.a,{title:"Chapters",subTitle:"Danh s\xe1ch c\xe1c chapter hi\u1ec7n t\u1ea1i \u0111ang c\xf3",extra:[r.a.createElement(oe.a,null,r.a.createElement(le.a,{type:"plus"}),"New Chapter")]}),r.a.createElement(ce.a,{columns:ue,dataSource:me}))}}]),t}(a.Component),ue=[{dataIndex:"no",editable:!0,render:function(e){return r.a.createElement("span",null,e)},title:"No."},{dataIndex:"thumbnail",render:function(e){var t=r.a.createElement("div",null,r.a.createElement(le.a,{type:"plus"}),r.a.createElement("div",{className:"ant-upload-text"},"Upload"));return r.a.createElement(ie.a,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"},t)},title:"Thumbnail"},{dataIndex:"name",editable:!0,title:"Name"},{dataIndex:"season",render:function(){return r.a.createElement("span",null,"Vol 1")},title:"Season"},{dataIndex:"createdAt",title:"Upload Date"},{render:function(e,t){return r.a.createElement("div",null,r.a.createElement("a",{href:"/wp-admin/post.php?post=14290&action=edit"},r.a.createElement(oe.a,{icon:"edit",style:{marginRight:10}})),r.a.createElement(oe.a,{type:"danger",icon:"delete"}))},title:"Action"}],me=[{author:"Puleeno Nguyen",createdAt:"2019-09-09 10:00",name:"John Brown",no:1,season:"Season 1",thumbnail:""},{author:"Puleeno Nguyen",createdAt:"2019-09-09 10:00",name:"Jim Green",no:2,season:"Season 2",thumbnail:""},{author:"Puleeno Nguyen",createdAt:"2019-09-09 10:00",name:"Joe Black",no:3,season:"Season 3",thumbnail:""}],de=n(142),pe=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),n.props.form.validateFields((function(e,t){e||console.log("Received values of form: ",t)}))},n.normFile=function(e){return console.log("Upload event:",e),Array.isArray(e)?e:e&&e.fileList},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement("div",{className:"cominovel-tab-content"},r.a.createElement(T.a,{title:"Composer",subTitle:"Tr\xecnh bi\xean so\u1ea1n chapter cho truy\u1ec7n"}),r.a.createElement(D.a,Object.assign({},{labelCol:{span:6},wrapperCol:{span:14}},{labelAlign:"left"}),r.a.createElement(D.a.Item,{label:"Cloud Storage"},e("checkbox-group",{initialValue:["A","B"]})(r.a.createElement(F.a.Group,{style:{width:"100%"}},r.a.createElement(N.a,null,r.a.createElement(P.a,{span:8},r.a.createElement(F.a,{value:"A"},"A")),r.a.createElement(P.a,{span:8},r.a.createElement(F.a,{disabled:!0,value:"B"},"B")),r.a.createElement(P.a,{span:8},r.a.createElement(F.a,{value:"C"},"C")),r.a.createElement(P.a,{span:8},r.a.createElement(F.a,{value:"D"},"D")),r.a.createElement(P.a,{span:8},r.a.createElement(F.a,{value:"E"},"E")))))),r.a.createElement(D.a.Item,{label:"Season"},r.a.createElement(B.a,{showSearch:!0,style:{width:200},placeholder:"Select comic type",optionFilterProp:"children",filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},r.a.createElement(B.a.Option,{value:"manga"},"Manga"),r.a.createElement(B.a.Option,{value:"manhua"},"Manhua"),r.a.createElement(B.a.Option,{value:"manhwa"},"Manhwa"))),r.a.createElement(D.a.Item,{label:"ZIP Mode"},e("radio-button")(r.a.createElement(de.a.Group,null,r.a.createElement(de.a.Button,{value:"a"},"Auto"),r.a.createElement(de.a.Button,{value:"c"},"Single Chapter"),r.a.createElement(de.a.Button,{value:"b"},"Multi Chapter")))),r.a.createElement(D.a.Item,{label:"Upload"},e("dragger",{valuePropName:"fileList",getValueFromEvent:this.normFile})(r.a.createElement(ie.a.Dragger,{name:"files",action:"/upload.do"},r.a.createElement("p",{className:"ant-upload-drag-icon"},r.a.createElement(le.a,{type:"inbox"})),r.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),r.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload.")))),r.a.createElement(D.a.Item,{wrapperCol:{span:12,offset:6}},r.a.createElement(oe.a,{type:"primary",htmlType:"submit"},"Compose"))))}}]),t}(a.Component),he=D.a.create({name:"validate_other"})(pe),fe=n(247),ve=n.n(fe),ye=0,be={labelCol:{sm:{span:5},xs:{span:24}},wrapperCol:{sm:{span:12},xs:{span:24}}},Ee=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).remove=function(e,t){var a=n.props.form,r=a.getFieldValue("keys");1!==r.length&&a.setFieldsValue({keys:r.filter((function(e,n){return n!==t}))})},n.add=function(){var e=n.props.form,t=e.getFieldValue("keys").concat(ye++);e.setFieldsValue({keys:t})},n.saveSeason=function(e){var t=document.getElementById("cominovel-seasons");t.elements=t.querySelectorAll("input");var a=ve()(t,{hash:!0});n.props.updateSeasons(a.cominovel_seasons,window.Cominovel.currentID)},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchSeasons(window.Cominovel.currentID)}},{key:"renderFieldName",value:function(e,t){return"cominovel_seasons[".concat(t,"][").concat(e,"]")}},{key:"renderSeasons",value:function(){var e=this,t=this.props.form,n=t.getFieldDecorator,a=t.getFieldValue;n("keys",{initialValue:this.props.seasons});var o=a("keys");return o.map((function(t,a){var l="meta_".concat(a,"_").concat(t.meta_id);return r.a.createElement(D.a.Item,Object.assign({},be,{label:"Seasons ".concat(a+1),required:!1,key:l}),n(e.renderFieldName("meta_id",a),{initialValue:t.meta_id||"",rules:[{message:"Please input season name or delete this field.",whitespace:!1}]})(r.a.createElement(G.a,{type:"hidden",name:e.renderFieldName("meta_id",a)})),n(e.renderFieldName("meta_value",a),{initialValue:t.meta_value,rules:[{message:"Please input season name or delete this field.",required:!0,whitespace:!0}],validateTrigger:["onChange","onBlur"]})(r.a.createElement(G.a,{placeholder:"Season name",name:e.renderFieldName("meta_value",a),style:{width:"60%",marginRight:8}})),o.length>1?r.a.createElement(le.a,{className:"dynamic-delete-button",type:"minus-circle-o",onClick:function(){return e.remove(t,a)}}):null)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"cominovel-tab-content"},r.a.createElement(T.a,{title:"Seasons",subTitle:"Bi\xean so\u1ea1n season cho truy\u1ec7n"}),r.a.createElement(D.a,Object.assign({},be,{labelAlign:"left",id:"cominovel-seasons"}),this.renderSeasons(),r.a.createElement(D.a.Item,null,r.a.createElement(oe.a,{type:"dashed",onClick:this.add,style:{width:"60%"}},r.a.createElement(le.a,{type:"plus"})," Add New Season")),r.a.createElement(D.a.Item,null,r.a.createElement(oe.a,{size:"large",type:"primary",htmlType:"submit",onClick:this.saveSeason},"Save"))))}}]),t}(a.Component),Oe=D.a.create({name:"dynamic_form_item"})(Ee),ge=Object(c.b)((function(e){return{seasons:e.seasons}}),(function(e){return Object(v.b)({fetchSeasons:S,updateSeasons:A},e)}))(Oe),je=h.a.TabPane,Ce={chapterLoaded:!1,seasonLoaded:!1},_e=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state=Ce,n.handleModeChange=function(e){"season"===e&&n.setState({seasonLoaded:!0}),"chapter"===e&&n.setState({chapterLoaded:!0})},n.renderBasicInfos=function(){return r.a.createElement(je,{tab:"Basic Info",key:"basic"},r.a.createElement(re,null))},n.renderChapters=function(){return r.a.createElement(je,{tab:"Chapters",key:"chapter"},n.state.chapterLoaded?r.a.createElement(se,null):null)},n.renderSeasons=function(){return r.a.createElement(je,{tab:"Seasons",key:"season"},n.state.seasonLoaded?r.a.createElement(ge,null):null)},n.renderAdvanced=function(){return r.a.createElement(je,{tab:"Advanced",key:"advanced"},r.a.createElement(L,null))},n.renderComposer=function(){return r.a.createElement(je,{tab:"Composer",key:"composer"},r.a.createElement(he,null))},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){I.bootstrap()}},{key:"componentDidMount",value:function(){void 0!==typeof window.Cominovel.currentID&&this.props.fetchCominovel(window.Cominovel.currentID)}},{key:"render",value:function(){return null===this.props.isLoaded?r.a.createElement("div",{className:"cominovel-loading"},r.a.createElement(f.a,{size:"large"})):r.a.createElement(h.a,{defaultActiveKey:"1",tabPosition:"left",type:"card",onChange:this.handleModeChange},this.renderBasicInfos(),this.renderChapters(),this.renderSeasons(),this.renderAdvanced(),this.renderComposer())}}]),t}(a.Component),we=Object(c.b)((function(e){return{isLoaded:e.app.isLoaded,seasons:e.seasons}}),(function(e){return Object(v.b)({fetchCominovel:_},e)}))(_e),Se=function(){return r.a.createElement(i.a,{locale:"en"},r.a.createElement(we,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=n(488),Ae=n(494),Ie=n(250),Te=n(248),Fe=n(497),Ne=n(249),Pe=n(138),xe=function(e){return e.pipe(Object(Ie.a)(y),Object(Ne.a)((function(e){return Object(Te.a)(Fe.a.getJSON(window.Cominovel.endpoints.fetchComic.replace("<post_id>",e.payload))).pipe(Object(Pe.a)((function(e){return Ke.dispatch({payload:!0,type:"IS_LOADED"}),{payload:e,type:b}})))})))},De=Object(Ae.a)(xe,(function(e){return e.pipe(Object(Ie.a)(g),Object(Ne.a)((function(e){var t=e.taxonomy||"genre";return Object(Te.a)(Fe.a.getJSON(window.Cominovel.endpoints.wpv2+t)).pipe(Object(Pe.a)((function(n){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"genre";return{keyword:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",payload:e,taxonomy:t,type:j}}(n,t,e.keyword)})))})))}),(function(e){return e.pipe(Object(Ie.a)(E),Object(Ne.a)((function(e){return Object(Te.a)(Fe.a.getJSON("".concat(window.Cominovel.endpoints.seasons,"?post_id=").concat(e.payload))).pipe(Object(Pe.a)((function(e){return k(e)})))})))}),(function(e){return e.pipe(Object(Ie.a)(C),Object(Ne.a)((function(e){return Object(Te.a)(Object(Fe.a)({body:{post_id:e.payload.postId,seasons:e.payload.seasons},headers:{"Content-Type":"application/json"},method:"PUT",url:window.Cominovel.endpoints.seasons})).pipe(Object(Pe.a)((function(e){return k(e.response)})))})))})),Le={isLoaded:null},Me={info:{ID:0,adult:"",alternative_name:"",author:"",badge:"",chapters:[],cmn_artist_terms:[],cmn_author_terms:[],cmn_country_terms:[],cmn_release_terms:[],cmn_status_terms:[],genre_terms:[],parent:0,post_content:"",post_excerpt:"",post_modified:"",post_name:"",post_parent:0,post_status:"",post_title:"",post_type:"",rating_system:"",season:"",short_description:""}};var Ge=n(89),Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===j?Object(M.a)({},e,Object(Ge.a)({},t.taxonomy,t.payload)):e};var Re=Object(v.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_LOADED":return Object(M.a)({},e,{isLoaded:t.payload});default:return e}},cominovel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(M.a)({},e,{info:t.payload});default:return e}},seasons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===O?t.payload:e},terms:Be}),Ue=Object(ke.a)(),Ve=Object(v.d)(Re,{},Object(v.a)(Ue));Ue.run(De);var Ke=Ve;l.a.render(r.a.createElement(c.a,{store:Ke},r.a.createElement(Se,null)),document.getElementById("cominovel")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[252,1,2]]]);
//# sourceMappingURL=main.88ece0b1.chunk.js.map