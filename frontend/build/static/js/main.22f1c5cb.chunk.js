(this.webpackJsonpmesto=this.webpackJsonpmesto||[]).push([[0],{26:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),s=n(28),i=n.n(s),r=(n(26),n(31)),u=n(2),l=n(4),d=o.a.createContext(),p=n(12),m=n(29),b=localStorage.getItem("jwt"),j={baseUrl:"http://api.leon.students.nomoreparties.xyz/",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(b)}},h=new(function(){function e(t){Object(p.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(m.a)(e,[{key:"_sendRequest",value:function(e,t){return fetch("".concat(this._url).concat(e),t).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"getUserInfo",value:function(){return this._sendRequest("users",{headers:this._headers})}},{key:"getInitialCards",value:function(){return this._sendRequest("cards",{headers:this._headers})}},{key:"updateUserInfo",value:function(e){return this._sendRequest("users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"addNewCard",value:function(e){return this._sendRequest("cards",{method:"POST",body:JSON.stringify({name:e.name,link:e.link}),headers:this._headers})}},{key:"changeLikeCardStatus",value:function(e,t){return this._sendRequest("cards/".concat(e,"/likes"),{method:"".concat(t?"PUT":"DELETE"),headers:this._headers})}},{key:"deleteCard",value:function(e){return this._sendRequest("cards/".concat(e),{method:"DELETE",headers:this._headers})}},{key:"updateUserAvatar",value:function(e){return this._sendRequest("users/me/avatar",{method:"PATCH",body:JSON.stringify({avatar:e.url}),headers:this._headers})}}]),e}())(j),O=n(10),_=n.p+"static/media/logo.2e17206c.svg";var f=function(e){var t=e.email,n=e.signOut;return Object(a.jsxs)("div",{className:"header__auth-info",children:[Object(a.jsx)("span",{className:"header__mail",children:t}),Object(a.jsx)("button",{className:"header__button",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]})};var g=function(e){var t=e.isAuthInfoOpened,n=e.onHamburgerClick,c="hamburger\n\t".concat(t?"hamburger_opened":"hamburger_closed");return Object(a.jsx)("button",{className:c,onClick:n,children:Object(a.jsx)("span",{})})};var x=function(e){var t=e.loggedIn,n=e.email,c=e.signOut,o=e.isAuthInfoOpened,s=e.onHamburgerClick,i=Object(l.h)().pathname,r="".concat("/sign-in"===i?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u043e\u0439\u0442\u0438"),u="".concat("/sign-in"===i?"/sign-up":"/sign-in");return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{src:_,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430",className:"logo"}),t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f,{email:n,signOut:c}),Object(a.jsx)(g,{isAuthInfoOpened:o,onHamburgerClick:s})]}):Object(a.jsx)(O.b,{to:u,className:"header__link",children:r})]})};var v=function(e){var t=o.a.useContext(d),n=e.card,c=e.index,s=e.onCardClick,i=e.onCardLike,r=e.onCardDelete,u=n.likes.some((function(e){return e._id===t._id}))?"element__like_active":"",l=n.owner._id===t._id?"element__trash_active":"";return Object(a.jsxs)("article",{className:"element",children:[Object(a.jsx)("img",{src:n.link,alt:n.name,className:"element__img",onClick:function(){s(n)}}),Object(a.jsx)("button",{type:"button","aria-label":"\u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",className:"element__trash ".concat(l),onClick:function(){r(n)}}),Object(a.jsxs)("div",{className:"element__item",children:[Object(a.jsx)("h2",{className:"element__text",children:n.name}),Object(a.jsxs)("div",{className:"element__like-block",children:[Object(a.jsx)("button",{type:"button","aria-label":"\u043b\u0430\u0439\u043a",className:"element__like ".concat(u),onClick:function(){i(n)}}),Object(a.jsx)("span",{className:"element__count",children:n.likes.length})]})]})]},c)};var C=function(e){var t=o.a.useContext(d),n=e.cards,c=e.onEditProfile,s=e.onAddPlace,i=e.onEditAvatar,r=e.onCardClick,u=e.onCardLike,l=e.onCardDelete;return Object(a.jsxs)("main",{children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__avatar",children:[Object(a.jsx)("img",{src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__img"}),Object(a.jsx)("button",{className:"profile__button profile__button_open_editAvatarPopup",onClick:i})]}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("h1",{className:"profile__name",children:t.name}),Object(a.jsx)("button",{type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",className:"profile__button profile__button_open_editProfilePopup",onClick:c}),Object(a.jsx)("p",{className:"profile__working",children:t.about})]}),Object(a.jsx)("button",{type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f",className:"profile__button profile__button_open_addPlacePopup",onClick:s})]}),Object(a.jsx)("section",{className:"elements",children:n.map((function(e){return Object(a.jsx)(v,{card:e,onCardClick:r,onCardLike:u,onCardDelete:l},e._id)}))})]})},N=n(6),S=n(3);var k=function(e){var t=e.elementName,n=e.children,c=e.title,o=e.buttonSubmitText,s=e.buttonSubmitTextIsLoading,i=e.noConfirm,r=e.isOpen,u=e.onClose,l=e.isLoading,d=e.disabled,p=e.onSubmit,m=e.isPopup,b=void 0===m||m,j=e.isForm,h=void 0===j||j,_=e.path,f=e.entranceText,g=e.entranceLinkText;return Object(a.jsxs)("div",{className:b?"popup popup_type_".concat(t," ").concat(r?"popup_is-opened":""):t,children:[b&&Object(a.jsx)("button",{type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f",className:"popup__close popup__close_type_".concat(t),onClick:u}),h?Object(a.jsxs)("form",{className:b?"popup__form popup__form_type_".concat(t):"form",name:t,onSubmit:p,children:[Object(a.jsx)("h2",{className:b?"popup__heading":"form__heading",children:c}),n,b?Object(a.jsx)("button",{type:"submit",className:"popup__button ".concat(d?"popup__button_disabled":""),disabled:d,children:l?s:o}):!i&&Object(a.jsxs)("div",{className:"form__button-overlay",children:[Object(a.jsx)("button",{type:"submit",className:"form__button ".concat("form__button_disabled"),disabled:d,children:o}),Object(a.jsxs)("div",{className:"form__subtext",children:[f," ",Object(a.jsx)(O.b,{to:_,className:"form__link",children:g})]})]})]}):Object(a.jsx)("div",{className:"popup__container popup__container_type_".concat(t),children:n})]})};var y=function(e){var t=o.a.useContext(d),n=e.isOpen,c=e.onClose,s=e.isLoading,i=e.onUpdateUser,r=o.a.useState({}),l=Object(u.a)(r,2),p=l[0],m=l[1],b=o.a.useState({}),j=Object(u.a)(b,2),h=j[0],O=j[1],_=o.a.useState({name:!0,description:!0}),f=Object(u.a)(_,2),g=f[0],x=f[1],v=o.a.useState(!0),C=Object(u.a)(v,2),y=C[0],w=C[1];function L(e){var t,n=e.target,a=n.value,c=n.name;m(Object(S.a)(Object(S.a)({},p),{},Object(N.a)({},c,a))),t=n,x(Object(S.a)(Object(S.a)({},g),{},Object(N.a)({},t.name,t.validity.valid))),O(Object(S.a)(Object(S.a)({},h),{},Object(N.a)({},t.name,t.validationMessage))),g.name&&g.description?w(!1):w(!0)}return o.a.useEffect((function(){w(!0),m({name:t.name,description:t.about}),x({name:!0,description:!0}),O("")}),[n,t]),o.a.useEffect((function(){g.name&&g.description?w(!1):w(!0)}),[g.name,g.description]),Object(a.jsxs)(k,{elementName:"editProfile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",buttonSubmitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",buttonSubmitTextIsLoading:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",isOpen:n,onClose:c,isLoading:s,disabled:y,onSubmit:function(e){e.preventDefault(),i({name:p.name,about:p.description})},children:[Object(a.jsx)("input",{type:"text",name:"name",value:p.name||"",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",className:"popup__input",minLength:"2",maxLength:"40",required:!0,onChange:L}),Object(a.jsx)("span",{className:"popup__error ".concat(g.name?"":"popup__error_visible"),children:h.name}),Object(a.jsx)("input",{type:"text",name:"description",value:p.description||"",placeholder:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0441\u0435\u0431\u0435",className:"popup__input",minLength:"2",maxLength:"200",required:!0,onChange:L}),Object(a.jsx)("span",{className:"popup__error ".concat(g.description?"":"popup__error_visible"),children:h.description})]})};var w=function(e){var t=o.a.useRef(""),n=e.isOpen,c=e.onClose,s=e.isLoading,i=e.onUpdateAvatar,r=o.a.useState(""),l=Object(u.a)(r,2),d=l[0],p=l[1],m=o.a.useState(!0),b=Object(u.a)(m,2),j=b[0],h=b[1],O=o.a.useState(!0),_=Object(u.a)(O,2),f=_[0],g=_[1];return o.a.useEffect((function(){g(!0),t.current.value="",h(!0),p("")}),[n]),o.a.useEffect((function(){g(!j)}),[j]),Object(a.jsxs)(k,{elementName:"editAvatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonSubmitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",buttonSubmitTextIsLoading:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",isOpen:n,onClose:c,isLoading:s,disabled:f,onSubmit:function(e){e.preventDefault(),i(t.current.value)},children:[Object(a.jsx)("input",{ref:t,type:"url",name:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u0443",className:"popup__input",required:!0,onChange:function(){h(t.current.validity.valid),p(t.current.validationMessage),g(!j)}}),Object(a.jsx)("span",{className:"popup__error ".concat(j?"":"popup__error_visible"),children:d})]})};var L=function(e){var t=e.isOpen,n=e.onClose,c=e.isLoading,s=e.onAddPlace,i=o.a.useState({name:"",url:""}),r=Object(u.a)(i,2),l=r[0],d=r[1],p=o.a.useState({}),m=Object(u.a)(p,2),b=m[0],j=m[1],h=o.a.useState({name:!0,url:!0}),O=Object(u.a)(h,2),_=O[0],f=O[1],g=o.a.useState({name:!1,url:!1}),x=Object(u.a)(g,2),v=x[0],C=x[1],y=o.a.useState(!0),w=Object(u.a)(y,2),L=w[0],I=w[1];function T(e){var t,n=e.target,a=n.value,c=n.name;d(Object(S.a)(Object(S.a)({},l),{},Object(N.a)({},c,a))),t=n,f(Object(S.a)(Object(S.a)({},_),{},Object(N.a)({},t.name,t.validity.valid))),j(Object(S.a)(Object(S.a)({},b),{},Object(N.a)({},t.name,t.validationMessage))),C(Object(S.a)(Object(S.a)({},v),{},Object(N.a)({},t.name,t.validity.valid))),v.name&&v.url?I(!1):I(!0)}return o.a.useEffect((function(){I(!0),d({name:"",url:""}),f({name:!0,url:!0}),C({name:!1,url:!1}),j("")}),[t]),o.a.useEffect((function(){v.name&&v.url?I(!1):I(!0)}),[v.name,v.url]),Object(a.jsxs)(k,{elementName:"addPlace",isPopup:!0,title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonSubmitText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",buttonSubmitTextIsLoading:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435...",isOpen:t,onClose:n,isLoading:c,disabled:L,onSubmit:function(e){e.preventDefault(),s({name:l.name,link:l.url})},children:[Object(a.jsx)("input",{type:"text",name:"name",value:l.name,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input",minLength:"2",maxLength:"30",required:!0,onChange:T}),Object(a.jsx)("span",{className:"popup__error ".concat(_.name?"":"popup__error_visible"),children:b.name}),Object(a.jsx)("input",{type:"url",name:"url",value:l.url,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u0443",className:"popup__input",required:!0,onChange:T}),Object(a.jsx)("span",{className:"popup__error ".concat(_.url?"":"popup__error_visible"),children:b.url})]})};var I=function(e){var t=e.isOpen,n=e.onClose,c=e.isLoading,o=e.onConfirmDelete;return Object(a.jsx)(k,{elementName:"deleteCurrentCard",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonSubmitText:"\u0414\u0430",buttonSubmitTextIsLoading:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...",isOpen:t,onClose:n,isLoading:c,onSubmit:function(e){e.preventDefault(),o()}})};var T=function(e){var t=e.link,n=e.name,c=e.isOpen,o=e.onClose;return Object(a.jsx)("div",{className:"popup popup_type_modalImage ".concat(c?"popup_is-opened":""),children:Object(a.jsxs)("figure",{className:"popup__figure",children:[Object(a.jsx)("button",{type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",className:"popup__close popup__close_type_modalImage",onClick:o}),Object(a.jsx)("img",{src:t,alt:n,className:"popup__img popup__img_type_modalImage"}),Object(a.jsx)("figcaption",{className:"popup__text popup__text_type_modalImage",children:n})]})})};var P=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__text",children:"\xa9 2020 Mesto Russia"})})};var E=function(e){var t=e.title,n=e.buttonSubmitText,s=e.path,i=e.entranceText,r=e.entranceLinkText,l=e.onSubmit,d=e.autoCompleteEmail,p=e.autoCompletePassword,m=Object(c.useState)({email:"",password:""}),b=Object(u.a)(m,2),j=b[0],h=b[1],O=Object(c.useState)({}),_=Object(u.a)(O,2),f=_[0],g=_[1],x=Object(c.useState)({email:!0,password:!0}),v=Object(u.a)(x,2),C=v[0],y=v[1],w=Object(c.useState)({email:!1,password:!1}),L=Object(u.a)(w,2),I=L[0],T=L[1],P=Object(c.useState)(!0),E=Object(u.a)(P,2),A=E[0],q=E[1],D=Object(c.useState)("password"),U=Object(u.a)(D,2),R=U[0],J=U[1],H=Object(c.useState)("hidden"),M=Object(u.a)(H,2),F=M[0],z=M[1];function B(e){var t,n=e.target,a=n.value,c=n.name;h(Object(S.a)(Object(S.a)({},j),{},Object(N.a)({},c,a))),t=n,y(Object(S.a)(Object(S.a)({},C),{},Object(N.a)({},t.name,t.validity.valid))),g(Object(S.a)(Object(S.a)({},f),{},Object(N.a)({},t.name,t.validationMessage))),T(Object(S.a)(Object(S.a)({},I),{},Object(N.a)({},t.name,t.validity.valid))),I.email&&I.password?q(!1):q(!0)}return o.a.useEffect((function(){I.email&&I.password?q(!1):q(!0)}),[I.email,I.password]),Object(a.jsxs)(k,{elementName:"entrance",title:t,buttonSubmitText:n,isPopup:!1,path:s,entranceText:i,entranceLinkText:r,onSubmit:function(e){e.preventDefault(),(j.email||j.password)&&(l(j.password,j.email),h({email:"",password:""}))},disabled:A,children:[Object(a.jsxs)("label",{htmlFor:"email",className:"form__field",children:[Object(a.jsx)("input",{type:"email",className:"form__input",id:"email",name:"email",value:j.email||"",placeholder:"Email",minLength:"6",maxLength:"40",autoComplete:d,required:!0,onChange:B}),Object(a.jsx)("span",{className:"form__error ".concat(!C.email&&"form__error_visible"),id:"email-error",children:f.email})]}),Object(a.jsxs)("label",{htmlFor:"password",className:"form__field",children:[Object(a.jsx)("input",{type:R,className:"form__input",id:"password",name:"password",value:j.password||"",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"8",maxLength:"30",autoComplete:p,required:!0,onChange:B}),Object(a.jsx)("button",{type:"button",className:"form__button_type_password-".concat(F),onClick:function(){"password"===R?(J("text"),z("hidden")):(J("password"),z("showed"))},onKeyDown:function(e){return e.preventDefault}}),Object(a.jsx)("span",{className:"form__error ".concat(!C.password&&"form__error_visible"),id:"password-error",children:f.password})]})]})};var A=function(e){var t=e.onLogin;return Object(a.jsx)(E,{title:"\u0412\u0445\u043e\u0434",buttonSubmitText:"\u0412\u043e\u0439\u0442\u0438",path:"/sign-up",onSubmit:function(e,n){t(e,n)},autoCompleteEmail:"email",autoCompletePassword:"current-password"})};var q=function(e){var t=e.onRegister;return Object(a.jsx)(E,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",buttonSubmitText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",path:"/sign-in",entranceText:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",entranceLinkText:"\u0412\u043e\u0439\u0442\u0438",onSubmit:function(e,n){t(e,n)}})},D=n(32),U=function(e){var t=e.component,n=Object(D.a)(e,["component"]);return Object(a.jsx)(l.b,{children:function(){return n.loggedIn?Object(a.jsx)(t,Object(S.a)({},n)):Object(a.jsx)(l.a,{to:"/sign-in"})}})};var R=function(e){var t=e.isOpen,n=e.onClose,c=e.loggedIn,o=e.message;return Object(a.jsxs)(k,{elementName:"infoTooltip",isForm:!1,noConfirm:!0,isOpen:t,onClose:n,loggedIn:c,children:[Object(a.jsx)("img",{src:o.iconPath,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438",className:"popup__icon"}),Object(a.jsx)("h2",{className:"popup__heading popup__heading_type_infoTooltip",children:o.text})]})},J=n(18),H=n(20),M=n(21),F=function(e){Object(J.a)(n,e);var t=Object(H.a)(n);function n(e){var a;Object(p.a)(this,n);for(var c=arguments.length,o=new Array(c>1?c-1:0),s=1;s<c;s++)o[s-1]=arguments[s];return(a=t.call.apply(t,[this].concat(o))).status=400,a.message=e,a}return n}(Object(M.a)(Error)),z=function(e){Object(J.a)(n,e);var t=Object(H.a)(n);function n(e){var a;Object(p.a)(this,n);for(var c=arguments.length,o=new Array(c>1?c-1:0),s=1;s<c;s++)o[s-1]=arguments[s];return(a=t.call.apply(t,[this].concat(o))).status=401,a.message=e,a}return n}(Object(M.a)(Error)),B="http://api.leon.students.nomoreparties.xyz";var W=function(e){var t=e.email,n=e.signOut,c=e.isAuthInfoOpened,o="header__auth-info-mobile\n\t".concat(c?"header__auth-info-mobile_opened":"header__auth-info-mobile_closed");return Object(a.jsxs)("div",{className:o,children:[Object(a.jsx)("span",{className:"header__mail",children:t}),Object(a.jsx)("button",{className:"header__button",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]})},G=n.p+"static/media/resolve.995328b5.svg",K=n.p+"static/media/reject.4190bc4f.svg",$=n.p+"static/media/loader.39e38019.svg";var Q=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),s=t[0],i=t[1],p=Object(c.useState)(""),m=Object(u.a)(p,2),b=m[0],j=m[1],O=Object(c.useState)(!1),_=Object(u.a)(O,2),f=_[0],g=_[1],v=Object(c.useState)(!1),N=Object(u.a)(v,2),S=N[0],k=N[1],E=Object(c.useState)(!1),D=Object(u.a)(E,2),J=D[0],H=D[1],M=Object(c.useState)(!1),Q=Object(u.a)(M,2),V=Q[0],X=Q[1],Y=Object(c.useState)({isImageOpen:!1,link:"",name:""}),Z=Object(u.a)(Y,2),ee=Z[0],te=Z[1],ne=Object(c.useState)([]),ae=Object(u.a)(ne,2),ce=ae[0],oe=ae[1],se=Object(c.useState)({}),ie=Object(u.a)(se,2),re=ie[0],ue=ie[1],le=Object(c.useState)(!1),de=Object(u.a)(le,2),pe=de[0],me=de[1],be=Object(c.useState)({}),je=Object(u.a)(be,2),he=je[0],Oe=je[1],_e=Object(c.useState)(),fe=Object(u.a)(_e,2),ge=fe[0],xe=fe[1],ve=Object(c.useState)(!1),Ce=Object(u.a)(ve,2),Ne=Ce[0],Se=Ce[1],ke=Object(c.useState)({iconPath:$,text:""}),ye=Object(u.a)(ke,2),we=ye[0],Le=ye[1],Ie=Object(l.h)(),Te=Object(l.g)(),Pe=n(43);function Ee(){i(!1),localStorage.removeItem("jwt"),j(""),Te.push("/sign-in")}function Ae(){g(!1),H(!1),k(!1),te({isImageOpen:!1,link:"",name:""}),me(!1),X(!1),Le({iconPath:$,text:""})}return o.a.useEffect((function(){h.getUserInfo().then((function(e){ue(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435: ".concat(e))}))}),[]),o.a.useEffect((function(){var e,t=localStorage.getItem("jwt");t&&(e=t,fetch("".concat(B,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))})).catch((function(e){throw new z(e.message)}))).then((function(e){i(!0),j(e.data.email),Te.push("/")})).catch((function(e){return console.log(e)}))}),[Te]),o.a.useEffect((function(){h.getInitialCards().then((function(e){oe(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a: ".concat(e))}))}),[]),Object(a.jsx)(d.Provider,{value:re,children:Object(a.jsxs)("div",{className:"page",children:[s&&Ne&&Object(a.jsx)(W,{email:b,signOut:Ee,isAuthInfoOpened:Ne}),Object(a.jsx)(x,{loggedIn:s,locaction:Ie,email:b,signOut:Ee,isAuthInfoOpened:Ne,onHamburgerClick:function(){Se(!Ne)}}),Object(a.jsxs)(l.d,{children:[Object(a.jsx)(U,{exact:!0,path:"/",loggedIn:s,component:C,cards:ce,onCardClick:function(e){var t=e.link,n=e.name;te({isImageOpen:!0,link:t,name:n})},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===re._id}));h.changeLikeCardStatus(e._id,!t).then((function(t){var n=ce.map((function(n){return n._id===e._id?t:n}));oe(n)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c/\u0441\u043d\u044f\u0442\u044c \u043b\u0430\u0439\u043a: ".concat(e))}))},onCardDelete:function(e){me(!0),Oe(e)},onEditProfile:function(){g(!0)},onAddPlace:function(){k(!0)},onEditAvatar:function(){H(!0)}}),Object(a.jsx)(l.b,{path:"/sign-in",children:Object(a.jsx)(A,{onLogin:function(e,t){(function(e,t){return fetch("".concat(B,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e.token})).catch((function(e){if(400===e.status)throw new F("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439");if(401===e.status)throw new z("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d");throw Error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))})(Pe(e),t).then((function(e){j(e.email),i(!0),Le({iconPath:G,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u043e\u0448\u043b\u0438 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435!"}),Te.push("/api")})).catch((function(e){return Le({iconPath:K,text:e.message})})),X(!0)}})}),Object(a.jsx)(l.b,{path:"/sign-up",children:Object(a.jsx)(q,{onRegister:function(e,t){(function(e,t){return fetch("".concat(B,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!\n\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."))})).catch((function(e){throw new F(e.message)}))})(Pe(e),t).then((function(){Le({iconPath:G,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}),Te.push("/sing-in")})).catch((function(e){return Le({iconPath:K,text:e.message})})),X(!0)}})}),Object(a.jsx)(l.b,{children:s?Object(a.jsx)(l.a,{to:"/"}):Object(a.jsx)(l.a,{to:"/sign-in"})})]}),Object(a.jsx)(P,{}),Object(a.jsx)(R,{isOpen:V,onClose:Ae,loggedIn:s,message:we}),Object(a.jsx)(y,{isOpen:f,onClose:Ae,onUpdateUser:function(e){xe(!0),h.updateUserInfo(e).then((function(e){ue(e),Ae()})).catch((function(e){return"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435: ".concat(e)})).finally((function(){return xe(!1)}))},isLoading:ge}),Object(a.jsx)(w,{isOpen:J,onClose:Ae,onUpdateAvatar:function(e){xe(!0),h.updateUserAvatar(e).then((function(e){ue(e),Ae()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430: ".concat(e))})).finally((function(){return xe(!1)}))},isLoading:ge}),Object(a.jsx)(L,{isOpen:S,onClose:Ae,onAddPlace:function(e){xe(!0),h.addNewCard(e).then((function(e){oe([e].concat(Object(r.a)(ce))),Ae()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))})).finally((function(){return xe(!1)}))}}),Object(a.jsx)(I,{isOpen:pe,onClose:Ae,onConfirmDelete:function(){h.deleteCard(he._id).then((function(){oe(ce.filter((function(e){return e!==he}))),Ae()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))}))}}),Object(a.jsx)(T,{name:ee.name,link:ee.link,onClose:Ae,isOpen:ee.isImageOpen})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(O.a,{basename:"/",children:Object(a.jsx)(Q,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.22f1c5cb.chunk.js.map