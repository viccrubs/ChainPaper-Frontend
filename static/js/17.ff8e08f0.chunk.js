(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{582:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a(12),i=a(115),o=(a(500),a(501)),u=(a(260),a(164)),d=a(479),s=a(481),m=a(482),p=a(26),I=Object(d.a)(s.a),f=function(e){return r.a.createElement(m.a,{call:function(){return Promise.all(e.requestIds.map(function(e){return I.getCollabrationRequestInfo(e)}))}},function(t,a,n){var l=[{title:"\u8bf7\u6c42ID",dataIndex:"collabrationRequestId",key:"collabrationRequestId"},{title:"\u65f6\u95f4",dataIndex:"time",key:"time"},{title:"\u8bf7\u6c42\u8005",dataIndex:"requesterId",key:"requesterId"},{title:"\u6587\u7ae0ID",key:"paperId",render:function(e,t){return r.a.createElement(p.a,{key:"paperId",to:"/papers/".concat(t.paperId)},t.paperId)}},{title:"\u64cd\u4f5c",key:"actions",render:function(t,a){return r.a.createElement("a",{key:"accept",onClick:function(){I.acceptCollabrationRequest(a.collabrationRequestId).then(function(){e.refetch()})}},"\u63a5\u53d7")}}];return r.a.createElement(u.a,{dataSource:t||[],loading:a,columns:l})})},E=Object(d.a)(s.a),b=function(e){return r.a.createElement(m.a,{call:function(){return Promise.all(e.invitationIds.map(function(e){return E.getCollabrationInvitationInfo(e)}))}},function(t,a,n){var l=[{title:"\u9080\u8bf7ID",dataIndex:"collabrationInvitationId",key:"collabrationInvitationId"},{title:"\u65f6\u95f4",dataIndex:"time",key:"time"},{title:"\u9080\u8bf7\u8005",dataIndex:"inviterId",key:"inviterId"},{title:"\u6587\u7ae0ID",key:"paperId",render:function(e,t){return r.a.createElement(p.a,{key:"paperId",to:"/papers/".concat(t.paperId)},t.paperId)}},{title:"\u64cd\u4f5c",key:"actions",render:function(t,a){return r.a.createElement("a",{onClick:function(){E.acceptCollabrationInvitation(a.collabrationInvitationId).then(function(){e.refetch()})}},"\u63a5\u53d7")}}];return r.a.createElement(u.a,{dataSource:t||[],loading:a,columns:l})})},g=(a(488),a(489)),h=(a(490),a(492)),k=a(477),v=a(528),y=Object(d.a)(k.a),C=function(e){return r.a.createElement(g.a,{visible:e.show,title:e.title,onCancel:e.close,onOk:e.close},r.a.createElement(m.a,{call:function(){return Promise.all(e.paperIds.map(function(e){return y.getPaper(e)}))}},function(e,t){return r.a.createElement(h.a,{dataSource:e,pagination:{pageSize:5},loading:t,renderItem:function(e){return r.a.createElement(v.a,{item:e.paper})}})}))},w=o.a.Item,x=c.a.h4.withConfig({displayName:"ProfilePage__Title",componentId:"sc-1eysf38-0"})(["margin:20px 0;color:rgba(0,0,0,0.85);font-weight:bold;font-size:16px;line-height:1.5;"]),q=function(e){var t=e.userInfo,a=Object(n.useState)(!1),l=Object(i.a)(a,2),c=l[0],u=l[1],d=Object(n.useState)(!1),s=Object(i.a)(d,2),m=s[0],p=s[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(o.a,{title:"\u7528\u6237\u4fe1\u606f",bordered:!0},r.a.createElement(w,{label:"\u7528\u6237ID"},r.a.createElement("span",null,t.userId)),r.a.createElement(w,{label:"\u7528\u6237\u540d"},r.a.createElement("span",null,t.username)),r.a.createElement(w,{label:"\u89d2\u8272"},r.a.createElement("span",null,t.role)),r.a.createElement(w,{label:"\u4e0a\u4f20\u8bba\u6587\u6570"},r.a.createElement("a",{onClick:function(){return u(!0)}},t.paperIds.length)),r.a.createElement(w,{label:"\u53c2\u4e0e\u8bba\u6587\u6570"},r.a.createElement("a",{onClick:function(){return p(!0)}},t.paperIdsInCollabration.length)),r.a.createElement(w,{label:"\u8bc4\u5206"},r.a.createElement("span",null,t.score))),r.a.createElement(C,{title:"\u6211\u4e0a\u4f20\u7684\u8bba\u6587",paperIds:t.paperIds,show:c,close:function(){return u(!1)}}),r.a.createElement(C,{title:"\u6211\u53c2\u4e0e\u7684\u8bba\u6587",paperIds:t.paperIdsInCollabration,show:m,close:function(){return p(!1)}})),r.a.createElement("div",null,r.a.createElement(x,null,"\u6211\u6536\u5230\u7684\u5408\u4f5c\u8bf7\u6c42"),r.a.createElement(f,{refetch:e.refetch,requestIds:t.collabrationRequestIds})),r.a.createElement("div",null,r.a.createElement(x,null,"\u6211\u6536\u5230\u7684\u5408\u4f5c\u9080\u8bf7"),r.a.createElement(b,{refetch:e.refetch,invitationIds:t.collabrationInvitationIds})))},O=a(44),j=a(480),P=a(119),R=a(157),S=c.a.div.withConfig({displayName:"ProfilePage__Container",componentId:"sc-1auckx7-0"})(["max-width:1000px;margin:0 auto;"]);t.default=function(e){var t,a=Object(l.c)(O.a);return t=a.state.loggedIn?r.a.createElement(m.a,{call:function(){return Object(d.a)(j.a).getUserInfo(a.state.user.username)}},function(e,t,a,n){return t?r.a.createElement(P.a,null):r.a.createElement(q,{refetch:n,userInfo:e})}):"\u8bf7\u767b\u5f55\uff01",r.a.createElement(R.a,null,r.a.createElement(S,null,t))}}}]);
//# sourceMappingURL=17.ff8e08f0.chunk.js.map