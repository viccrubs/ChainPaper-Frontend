(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{477:function(e,t,r){"use strict";r.d(t,"a",function(){return l});var n=r(475),a=r.n(n),c=r(476),u=r(28),o=r(43),s=r(30),i=r(29),p=r(31),f=r(478),l=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"uploadPaper",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/papers",method:f.a.POST,body:{paperDraft:t}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"modifyPaper",value:function(){var e=Object(c.a)(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/papers/".concat(t),method:f.a.PUT,body:{paperDraft:r}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"getPapers",value:function(){var e=Object(c.a)(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/papers",method:f.a.GET});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getPaper",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/papers/".concat(t),method:f.a.GET});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getPaperScore",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/papers/".concat(t,"/score"),method:f.a.GET});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getPaperComments",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/papers/".concat(t,"/comment"),method:f.a.GET});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"scorePaper",value:function(){var e=Object(c.a)(a.a.mark(function e(t,r){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/papers/".concat(t,"/score"),body:{score:r},method:f.a.POST});case 2:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"getPaperStar",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.fetch({path:"/papers/".concat(t,"/star"),method:f.a.GET}),e.abrupt("return",r);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"starPaper",value:function(){var e=Object(c.a)(a.a.mark(function e(t,r){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/papers/".concat(t,"/star"),body:{star:"star"==r},method:f.a.POST});case 2:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"commentPaper",value:function(){var e=Object(c.a)(a.a.mark(function e(t,r){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/papers/".concat(t,"/comment"),body:{comment:r},method:f.a.POST});case 2:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"getPaperRefGraph",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.fetch({path:"/papers/".concat(t,"/refs"),method:f.a.GET}),e.abrupt("return",r);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(f.b)},478:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return l});var n,a=r(475),c=r.n(a),u=r(476),o=r(28),s=r(43),i=r(491),p=r.n(i);!function(e){e.GET="GET",e.POST="POST",e.DELETE="DELETE",e.PATCH="PATCH",e.PUT="PUT"}(n||(n={}));var f=p.a.create({baseURL:"http://36.103.228.127:5000",headers:{"Content-Type":"application/json "}}),l=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"fetch",value:function(){var e=Object(u.a)(c.a.mark(function e(t){var r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f({method:t.method,url:t.path,params:t.params,data:t.body});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=13;break}throw e.t0;case 13:if(!e.t0.request){e.next=17;break}throw{status:-1,data:null};case 17:throw{status:-2,data:null};case 18:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()},{key:"axios",get:function(){return f}}]),e}()},479:function(e,t,r){"use strict";var n=r(480),a=r(475),c=r.n(a),u=r(476),o=r(28),s=r(43),i=r(30),p=r(29),f=r(31),l=r(477),h=r(90),d=[{userId:"2",time:"1232132132131",content:"\u597d\uff01",stars:10},{userId:"3",time:"1232142141",content:"\u597d\uff01\uff01\uff01",stars:4}],v=[{paperId:"1",authors:["123","1"],paper:{title:"Bug Localization with Semantic and Structural Features using Convolutional Neural Network and Cascade Forest",refs:[{type:"published",doi:"10.1145/3210459.3210469",content:"123"},{type:"chainpaper",paperId:"2",title:"123",content:"Poor H V. An introduction to signal detection and estimation[M]. Springer Science & Business Media, 2013."}],keywords:"case study",abstractContent:"Background: Correctly localizing buggy \ufb01les for bug reports together with their semantic and structural information is a crucial task, which would essentially improve the accuracy of bug localization techniques. Aims: To empirically evaluate and demonstrate the e\ufb00ects of both semantic and structural information in bug reports and source \ufb01les on improving the performance of bug localization, we propose CNN Forest involving convolutional neural network and ensemble of random forests that have excellent performance in the tasks of semantic parsing and structural information extraction. Method: We \ufb01rst employ convolutional neural network with multiple \ufb01lters and an ensemble of random forests with multi-grained scanning to extract semantic and structural features from the word vectors derived from bug reports and source \ufb01les. And a subsequent cascade forest (a cascade of ensembles of random forests) is used to further extract deeper features and observe the correlated relationships between bug reports and source \ufb01les. CNN Forest is then empirically evaluated over 10,754 bug reports extracted from AspectJ, Eclipse UI, JDT, SWT, and Tomcat projects. Results: The experiments empirically demonstrate the signi\ufb01cance of including semantic and structural information in bug localization, and further show that the proposed CNN Forest achieves higher Mean Average Precision and Mean Reciprocal Rank measures than the best results of the four current state-of-the-art approaches (NPCNN, LR+WE, DNNLOC, and BugLocator). Conclusion: CNN Forest is capable of de\ufb01ning the correlated relationships between bug reports and source \ufb01les, and we empirically show that semantic and structural information in bug reports and source \ufb01les are crucial in improving bug localization.",introduction:"123",content:"string",conclusion:"1321",acknowledgement:"1232132121"},uploadTime:"1231232131",score:10,stars:10,comments:d,state:"open"}],b=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"uploadPaper",value:function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{paperId:"123"});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"modifyPaper",value:function(){var e=Object(u.a)(c.a.mark(function e(t,r){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{paperId:"123"});case 1:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"getPapers",value:function(){var e=Object(u.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{papers:v});case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"getPaper",value:function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{paper:v[0]});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"scorePaper",value:function(){var e=Object(u.a)(c.a.mark(function e(t,r){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"getPaperStar",value:function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{stars:9,stared:Math.random()<.5});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"getPaperScore",value:function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{score:8,myScore:Math.random()<.5?4:-1});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"getPaperComments",value:function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.d)(1e3);case 2:return e.abrupt("return",{comments:d});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"starPaper",value:function(){var e=Object(u.a)(c.a.mark(function e(t,r){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"commentPaper",value:function(){var e=Object(u.a)(c.a.mark(function e(t,r){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"getPaperRefGraph",value:function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{refs:{type:"published",doi:"10.1145/3210459.3210469",content:"123",refs:[{type:"chainpaper",title:"Environment paper",content:"content 1",paperId:"123",refs:[{type:"chainpaper",title:"Environment paper",content:"content 1",paperId:"456",refs:[{type:"chainpaper",title:"Environment paper",content:"content 1",paperId:"4929",refs:[]}]}]}]}});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(l.a),m=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"login",value:function(){var e=Object(u.a)(c.a.mark(function e(t,r){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==r){e.next=4;break}return e.abrupt("return",{userId:t,token:"0001"});case 4:return e.abrupt("return",{error:"incorrect"});case 5:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"register",value:function(){var e=Object(u.a)(c.a.mark(function e(t,r,n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("1"===t){e.next=4;break}return e.abrupt("return",{userId:t,token:"0001"});case 4:return e.abrupt("return",{error:"incorrect"});case 5:case"end":return e.stop()}},e)}));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{userId:t,username:"".concat(t,"'s name"),role:"student",paperIds:v.map(function(e){return e.paperId}),paperIdsInCollabration:v.map(function(e){return e.paperId}),score:4.6,collabrationInvitationIds:["123","1234"],collabrationRequestIds:["123","1234"]});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(n.a),y=r(481),w=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"requestCollabration",value:function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{collabrationRequestId:"123"});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"acceptCollabrationRequest",value:function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"inviteCollabration",value:function(){var e=Object(u.a)(c.a.mark(function e(t,r){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{collabrationInvitationId:"123"});case 1:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"acceptCollabrationInvitation",value:function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"getCollabrationInvitationInfo",value:function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{collabrationInvitationId:t,time:"1231231212",inviteeId:"123",inviterId:"123",paperId:"123"});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"getCollabrationRequestInfo",value:function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{collabrationRequestId:t,time:"1231231212",requesteeId:"123",requesterId:"123",paperId:"123"});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(y.a);r.d(t,"a",function(){return g});var k=[[n.a,m],[l.a,b],[y.a,w]],O=new Map;function g(e){return O.get(e)}k.forEach(function(e){O.set(e[0],new e[1])})},480:function(e,t,r){"use strict";r.d(t,"a",function(){return h});var n=r(475),a=r.n(n),c=r(476),u=r(28),o=r(43),s=r(30),i=r(29),p=r(31),f=r(478),l=r(44),h=function(e){function t(){var e;Object(u.a)(this,t),e=Object(s.a)(this,Object(i.a)(t).call(this));var r=Object(l.b)();return r&&e.setToken(r.token),e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"login",value:function(){var e=Object(c.a)(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.fetch({method:f.a.GET,params:{username:t,password:r},path:"/login"});case 3:return(n=e.sent).token&&this.setToken(n.token),e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.data);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t,r){return e.apply(this,arguments)}}()},{key:"register",value:function(){var e=Object(c.a)(a.a.mark(function e(t,r,n){var c,u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.fetch({method:f.a.POST,body:{username:t,password:r,role:n},path:"/register"});case 3:return c=e.sent,e.abrupt("return",c);case 7:return e.prev=7,e.t0=e.catch(0),u=e.t0,e.abrupt("return",u.data);case 11:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var r,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.fetch({method:f.a.GET,path:"/user/".concat(t)});case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),n=e.t0,e.abrupt("return",n.data);case 11:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()},{key:"setToken",value:function(e){e?this.axios.defaults.headers.common.Authorization="Bearer ".concat(e):delete this.axios.defaults.headers.common.Authorization}}]),t}(f.b)},481:function(e,t,r){"use strict";r.d(t,"a",function(){return l});var n=r(475),a=r.n(n),c=r(476),u=r(28),o=r(43),s=r(30),i=r(29),p=r(31),f=r(478),l=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"requestCollabration",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/collabration/request",body:{paperId:t},method:f.a.POST});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"acceptCollabrationRequest",value:function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"collabration/request/".concat(t),method:f.a.POST});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"inviteCollabration",value:function(){var e=Object(c.a)(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/collabration/invitation",body:{paperId:t,inviteeId:r},method:f.a.POST});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"acceptCollabrationInvitation",value:function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/collabration/invitation/".concat(t),method:f.a.POST});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getCollabrationInvitationInfo",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/collabration/invitation/".concat(t),method:f.a.GET});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getCollabrationRequestInfo",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.fetch({path:"/collabration/request/".concat(t),method:f.a.GET}),e.abrupt("return",r);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(f.b)},580:function(e,t,r){"use strict";r.r(t);r(488);var n=r(489),a=(r(484),r(487)),c=(r(89),r(11)),u=(r(114),r(45)),o=r(475),s=r.n(o),i=(r(485),r(486)),p=r(476),f=r(115),l=(r(499),r(502)),h=(r(256),r(81)),d=r(0),v=r.n(d),b=r(24),m=r(69),y=r(479),w=r(480),k=r(44),O=h.a.Option,g=l.a.create({name:"normal_register"})(function(e){var t=e.form,r=t.getFieldDecorator,o=t.validateFields,g=Object(b.c)(m.a),j=Object(b.c)(k.a,[]),x=Object(d.useState)(!1),I=Object(f.a)(x,2),E=I[0],P=I[1],T=Object(d.useCallback)(Object(p.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:P(!0),o(function(){var e=Object(p.a)(s.a.mark(function e(t,r){var n,a,c,u,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=7;break}return n=r.username,a=r.password,c=r.role,u=Object(y.a)(w.a),e.next=5,u.register(n,a,c);case 5:(o=e.sent).token?(g.toggleRegisterModalShown(),j.login(o.userId,n,o.token)):i.a.error("\u767b\u5f55\u9519\u8bef\uff0c\u539f\u56e0\uff1a".concat(o.error));case 7:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()),P(!1);case 3:case"end":return e.stop()}},e)})),[]);return v.a.createElement(n.a,{visible:g.state.registerModalShown,title:"\u6ce8\u518c",onCancel:g.toggleRegisterModalShown,onOk:T,footer:[v.a.createElement(u.a,{key:"register",onClick:function(){g.toggleRegisterModalShown(),g.toggleLoginModalShown()},style:{float:"left"}},v.a.createElement("span",null,"\u56de\u5230\u767b\u5f55")),v.a.createElement(u.a,{key:"back",onClick:g.toggleRegisterModalShown},v.a.createElement("span",null,"\u53d6\u6d88")),v.a.createElement(u.a,{key:"submit",type:"primary",loading:E,onClick:T},v.a.createElement("span",null,"\u6ce8\u518c"))]},v.a.createElement(l.a,null,v.a.createElement(l.a.Item,{label:"\u7528\u6237\u540d"},r("username",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}]})(v.a.createElement(a.a,{prefix:v.a.createElement(c.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),v.a.createElement(l.a.Item,{label:"\u5bc6\u7801"},r("password",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}]})(v.a.createElement(a.a,{prefix:v.a.createElement(c.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),v.a.createElement(l.a.Item,{label:"\u89d2\u8272"},r("role",{initialValue:"student"})(v.a.createElement(h.a,null,v.a.createElement(O,{value:"student"},"\u5b66\u751f"),v.a.createElement(O,{value:"teacher"},"\u8001\u5e08"))))))});t.default=g}}]);
//# sourceMappingURL=15.219e2950.chunk.js.map