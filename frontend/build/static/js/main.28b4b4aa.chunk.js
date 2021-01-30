(this.webpackJsonpmesto=this.webpackJsonpmesto||[]).push([[0],{26:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),s=n(28),i=n.n(s),r=(n(26),n(31)),u=n(2),l=n(4),d=o.a.createContext(),p=n(12),b=n(29),m=new(function(){function e(t){Object(p.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(b.a)(e,[{key:"_sendRequest",value:function(e,t){return fetch("".concat(this._url).concat(e),t).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"getUserInfo",value:function(){return this._sendRequest("users",{headers:this._headers})}},{key:"getInitialCards",value:function(){return this._sendRequest("cards",{headers:this._headers})}},{key:"updateUserInfo",value:function(e){return this._sendRequest("users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"addNewCard",value:function(e){return this._sendRequest("cards",{method:"POST",body:JSON.stringify({name:e.name,link:e.link}),headers:this._headers})}},{key:"changeLikeCardStatus",value:function(e,t){return this._sendRequest("cards/".concat(e,"/likes"),{method:"".concat(t?"PUT":"DELETE"),headers:this._headers})}},{key:"deleteCard",value:function(e){return this._sendRequest("cards/".concat(e),{method:"DELETE",headers:this._headers})}},{key:"updateUserAvatar",value:function(e){return this._sendRequest("users/me/avatar",{method:"PATCH",body:JSON.stringify({avatar:e.url}),headers:this._headers})}}]),e}())({baseUrl:"http://api.leon.students.nomoreparties.xyz",headers:{authorization:"d57d642f-96c7-4e83-b2db-eafa38e723fc","Content-Type":"application/json"}}),j=n(10),h=n.p+"static/media/logo.2e17206c.svg";var O=function(e){var t=e.email,n=e.signOut;return Object(a.jsxs)("div",{className:"header__auth-info",children:[Object(a.jsx)("span",{className:"header__mail",children:t}),Object(a.jsx)("button",{className:"header__button",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]})};var f=function(e){var t=e.isAuthInfoOpened,n=e.onHamburgerClick,c="hamburger\n\t".concat(t?"hamburger_opened":"hamburger_closed");return Object(a.jsx)("button",{className:c,onClick:n,children:Object(a.jsx)("span",{})})};var _=function(e){var t=e.loggedIn,n=e.email,c=e.signOut,o=e.isAuthInfoOpened,s=e.onHamburgerClick,i=Object(l.h)().pathname,r="".concat("/sign-in"===i?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u043e\u0439\u0442\u0438"),u="".concat("/sign-in"===i?"/sign-up":"/sign-in");return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{src:h,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430",className:"logo"}),t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O,{email:n,signOut:c}),Object(a.jsx)(f,{isAuthInfoOpened:o,onHamburgerClick:s})]}):Object(a.jsx)(j.b,{to:u,className:"header__link",children:r})]})};var g=function(e){var t=o.a.useContext(d),n=e.card,c=e.index,s=e.onCardClick,i=e.onCardLike,r=e.onCardDelete,u=n.likes.some((function(e){return e._id===t._id}))?"element__like_active":"",l=n.owner._id===t._id?"element__trash_active":"";return Object(a.jsxs)("article",{className:"element",children:[Object(a.jsx)("img",{src:n.link,alt:n.name,className:"element__img",onClick:function(){s(n)}}),Object(a.jsx)("button",{type:"button","aria-label":"\u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",className:"element__trash ".concat(l),onClick:function(){r(n)}}),Object(a.jsxs)("div",{className:"element__item",children:[Object(a.jsx)("h2",{className:"element__text",children:n.name}),Object(a.jsxs)("div",{className:"element__like-block",children:[Object(a.jsx)("button",{type:"button","aria-label":"\u043b\u0430\u0439\u043a",className:"element__like ".concat(u),onClick:function(){i(n)}}),Object(a.jsx)("span",{className:"element__count",children:n.likes.length})]})]})]},c)};var x=function(e){var t=o.a.useContext(d),n=e.cards,c=e.onEditProfile,s=e.onAddPlace,i=e.onEditAvatar,r=e.onCardClick,u=e.onCardLike,l=e.onCardDelete;return Object(a.jsxs)("main",{children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__avatar",children:[Object(a.jsx)("img",{src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__img"}),Object(a.jsx)("button",{className:"profile__button profile__button_open_editAvatarPopup",onClick:i})]}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("h1",{className:"profile__name",children:t.name}),Object(a.jsx)("button",{type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",className:"profile__button profile__button_open_editProfilePopup",onClick:c}),Object(a.jsx)("p",{className:"profile__working",children:t.about})]}),Object(a.jsx)("button",{type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f",className:"profile__button profile__button_open_addPlacePopup",onClick:s})]}),Object(a.jsx)("section",{className:"elements",children:n.map((function(e){return Object(a.jsx)(g,{card:e,onCardClick:r,onCardLike:u,onCardDelete:l},e._id)}))})]})},v=n(6),C=n(3);var N=function(e){var t=e.elementName,n=e.children,c=e.title,o=e.buttonSubmitText,s=e.buttonSubmitTextIsLoading,i=e.noConfirm,r=e.isOpen,u=e.onClose,l=e.isLoading,d=e.disabled,p=e.onSubmit,b=e.isPopup,m=void 0===b||b,h=e.isForm,O=void 0===h||h,f=e.path,_=e.entranceText,g=e.entranceLinkText;return Object(a.jsxs)("div",{className:m?"popup popup_type_".concat(t," ").concat(r?"popup_is-opened":""):t,children:[m&&Object(a.jsx)("button",{type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f",className:"popup__close popup__close_type_".concat(t),onClick:u}),O?Object(a.jsxs)("form",{className:m?"popup__form popup__form_type_".concat(t):"form",name:t,onSubmit:p,children:[Object(a.jsx)("h2",{className:m?"popup__heading":"form__heading",children:c}),n,m?Object(a.jsx)("button",{type:"submit",className:"popup__button ".concat(d?"popup__button_disabled":""),disabled:d,children:l?s:o}):!i&&Object(a.jsxs)("div",{className:"form__button-overlay",children:[Object(a.jsx)("button",{type:"submit",className:"form__button ".concat("form__button_disabled"),disabled:d,children:o}),Object(a.jsxs)("div",{className:"form__subtext",children:[_," ",Object(a.jsx)(j.b,{to:f,className:"form__link",children:g})]})]})]}):Object(a.jsx)("div",{className:"popup__container popup__container_type_".concat(t),children:n})]})};var k=function(e){var t=o.a.useContext(d),n=e.isOpen,c=e.onClose,s=e.isLoading,i=e.onUpdateUser,r=o.a.useState({}),l=Object(u.a)(r,2),p=l[0],b=l[1],m=o.a.useState({}),j=Object(u.a)(m,2),h=j[0],O=j[1],f=o.a.useState({name:!0,description:!0}),_=Object(u.a)(f,2),g=_[0],x=_[1],k=o.a.useState(!0),S=Object(u.a)(k,2),y=S[0],w=S[1];function L(e){var t,n=e.target,a=n.value,c=n.name;b(Object(C.a)(Object(C.a)({},p),{},Object(v.a)({},c,a))),t=n,x(Object(C.a)(Object(C.a)({},g),{},Object(v.a)({},t.name,t.validity.valid))),O(Object(C.a)(Object(C.a)({},h),{},Object(v.a)({},t.name,t.validationMessage))),g.name&&g.description?w(!1):w(!0)}return o.a.useEffect((function(){w(!0),b({name:t.name,description:t.about}),x({name:!0,description:!0}),O("")}),[n,t]),o.a.useEffect((function(){g.name&&g.description?w(!1):w(!0)}),[g.name,g.description]),Object(a.jsxs)(N,{elementName:"editProfile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",buttonSubmitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",buttonSubmitTextIsLoading:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",isOpen:n,onClose:c,isLoading:s,disabled:y,onSubmit:function(e){e.preventDefault(),i({name:p.name,about:p.description})},children:[Object(a.jsx)("input",{type:"text",name:"name",value:p.name||"",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",className:"popup__input",minLength:"2",maxLength:"40",required:!0,onChange:L}),Object(a.jsx)("span",{className:"popup__error ".concat(g.name?"":"popup__error_visible"),children:h.name}),Object(a.jsx)("input",{type:"text",name:"description",value:p.description||"",placeholder:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0441\u0435\u0431\u0435",className:"popup__input",minLength:"2",maxLength:"200",required:!0,onChange:L}),Object(a.jsx)("span",{className:"popup__error ".concat(g.description?"":"popup__error_visible"),children:h.description})]})};var S=function(e){var t=o.a.useRef(""),n=e.isOpen,c=e.onClose,s=e.isLoading,i=e.onUpdateAvatar,r=o.a.useState(""),l=Object(u.a)(r,2),d=l[0],p=l[1],b=o.a.useState(!0),m=Object(u.a)(b,2),j=m[0],h=m[1],O=o.a.useState(!0),f=Object(u.a)(O,2),_=f[0],g=f[1];return o.a.useEffect((function(){g(!0),t.current.value="",h(!0),p("")}),[n]),o.a.useEffect((function(){g(!j)}),[j]),Object(a.jsxs)(N,{elementName:"editAvatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonSubmitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",buttonSubmitTextIsLoading:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",isOpen:n,onClose:c,isLoading:s,disabled:_,onSubmit:function(e){e.preventDefault(),i(t.current.value)},children:[Object(a.jsx)("input",{ref:t,type:"url",name:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u0443",className:"popup__input",required:!0,onChange:function(){h(t.current.validity.valid),p(t.current.validationMessage),g(!j)}}),Object(a.jsx)("span",{className:"popup__error ".concat(j?"":"popup__error_visible"),children:d})]})};var y=function(e){var t=e.isOpen,n=e.onClose,c=e.isLoading,s=e.onAddPlace,i=o.a.useState({name:"",url:""}),r=Object(u.a)(i,2),l=r[0],d=r[1],p=o.a.useState({}),b=Object(u.a)(p,2),m=b[0],j=b[1],h=o.a.useState({name:!0,url:!0}),O=Object(u.a)(h,2),f=O[0],_=O[1],g=o.a.useState({name:!1,url:!1}),x=Object(u.a)(g,2),k=x[0],S=x[1],y=o.a.useState(!0),w=Object(u.a)(y,2),L=w[0],T=w[1];function I(e){var t,n=e.target,a=n.value,c=n.name;d(Object(C.a)(Object(C.a)({},l),{},Object(v.a)({},c,a))),t=n,_(Object(C.a)(Object(C.a)({},f),{},Object(v.a)({},t.name,t.validity.valid))),j(Object(C.a)(Object(C.a)({},m),{},Object(v.a)({},t.name,t.validationMessage))),S(Object(C.a)(Object(C.a)({},k),{},Object(v.a)({},t.name,t.validity.valid))),k.name&&k.url?T(!1):T(!0)}return o.a.useEffect((function(){T(!0),d({name:"",url:""}),_({name:!0,url:!0}),S({name:!1,url:!1}),j("")}),[t]),o.a.useEffect((function(){k.name&&k.url?T(!1):T(!0)}),[k.name,k.url]),Object(a.jsxs)(N,{elementName:"addPlace",isPopup:!0,title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonSubmitText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",buttonSubmitTextIsLoading:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435...",isOpen:t,onClose:n,isLoading:c,disabled:L,onSubmit:function(e){e.preventDefault(),s({name:l.name,link:l.url})},children:[Object(a.jsx)("input",{type:"text",name:"name",value:l.name,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input",minLength:"2",maxLength:"30",required:!0,onChange:I}),Object(a.jsx)("span",{className:"popup__error ".concat(f.name?"":"popup__error_visible"),children:m.name}),Object(a.jsx)("input",{type:"url",name:"url",value:l.url,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u0443",className:"popup__input",required:!0,onChange:I}),Object(a.jsx)("span",{className:"popup__error ".concat(f.url?"":"popup__error_visible"),children:m.url})]})};var w=function(e){var t=e.isOpen,n=e.onClose,c=e.isLoading,o=e.onConfirmDelete;return Object(a.jsx)(N,{elementName:"deleteCurrentCard",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonSubmitText:"\u0414\u0430",buttonSubmitTextIsLoading:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...",isOpen:t,onClose:n,isLoading:c,onSubmit:function(e){e.preventDefault(),o()}})};var L=function(e){var t=e.link,n=e.name,c=e.isOpen,o=e.onClose;return Object(a.jsx)("div",{className:"popup popup_type_modalImage ".concat(c?"popup_is-opened":""),children:Object(a.jsxs)("figure",{className:"popup__figure",children:[Object(a.jsx)("button",{type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",className:"popup__close popup__close_type_modalImage",onClick:o}),Object(a.jsx)("img",{src:t,alt:n,className:"popup__img popup__img_type_modalImage"}),Object(a.jsx)("figcaption",{className:"popup__text popup__text_type_modalImage",children:n})]})})};var T=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__text",children:"\xa9 2020 Mesto Russia"})})};var I=function(e){var t=e.title,n=e.buttonSubmitText,s=e.path,i=e.entranceText,r=e.entranceLinkText,l=e.onSubmit,d=e.autoCompleteEmail,p=e.autoCompletePassword,b=Object(c.useState)({email:"",password:""}),m=Object(u.a)(b,2),j=m[0],h=m[1],O=Object(c.useState)({}),f=Object(u.a)(O,2),_=f[0],g=f[1],x=Object(c.useState)({email:!0,password:!0}),k=Object(u.a)(x,2),S=k[0],y=k[1],w=Object(c.useState)({email:!1,password:!1}),L=Object(u.a)(w,2),T=L[0],I=L[1],P=Object(c.useState)(!0),E=Object(u.a)(P,2),A=E[0],q=E[1],D=Object(c.useState)("password"),U=Object(u.a)(D,2),R=U[0],J=U[1],H=Object(c.useState)("hidden"),M=Object(u.a)(H,2),F=M[0],z=M[1];function B(e){var t,n=e.target,a=n.value,c=n.name;h(Object(C.a)(Object(C.a)({},j),{},Object(v.a)({},c,a))),t=n,y(Object(C.a)(Object(C.a)({},S),{},Object(v.a)({},t.name,t.validity.valid))),g(Object(C.a)(Object(C.a)({},_),{},Object(v.a)({},t.name,t.validationMessage))),I(Object(C.a)(Object(C.a)({},T),{},Object(v.a)({},t.name,t.validity.valid))),T.email&&T.password?q(!1):q(!0)}return o.a.useEffect((function(){T.email&&T.password?q(!1):q(!0)}),[T.email,T.password]),Object(a.jsxs)(N,{elementName:"entrance",title:t,buttonSubmitText:n,isPopup:!1,path:s,entranceText:i,entranceLinkText:r,onSubmit:function(e){e.preventDefault(),(j.email||j.password)&&(l(j.password,j.email),h({email:"",password:""}))},disabled:A,children:[Object(a.jsxs)("label",{htmlFor:"email",className:"form__field",children:[Object(a.jsx)("input",{type:"email",className:"form__input",id:"email",name:"email",value:j.email||"",placeholder:"Email",minLength:"6",maxLength:"40",autoComplete:d,required:!0,onChange:B}),Object(a.jsx)("span",{className:"form__error ".concat(!S.email&&"form__error_visible"),id:"email-error",children:_.email})]}),Object(a.jsxs)("label",{htmlFor:"password",className:"form__field",children:[Object(a.jsx)("input",{type:R,className:"form__input",id:"password",name:"password",value:j.password||"",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"8",maxLength:"30",autoComplete:p,required:!0,onChange:B}),Object(a.jsx)("button",{type:"button",className:"form__button_type_password-".concat(F),onClick:function(){"password"===R?(J("text"),z("hidden")):(J("password"),z("showed"))},onKeyDown:function(e){return e.preventDefault}}),Object(a.jsx)("span",{className:"form__error ".concat(!S.password&&"form__error_visible"),id:"password-error",children:_.password})]})]})};var P=function(e){var t=e.onLogin;return Object(a.jsx)(I,{title:"\u0412\u0445\u043e\u0434",buttonSubmitText:"\u0412\u043e\u0439\u0442\u0438",path:"/sign-up",onSubmit:function(e,n){t(e,n)},autoCompleteEmail:"email",autoCompletePassword:"current-password"})};var E=function(e){var t=e.onRegister;return Object(a.jsx)(I,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",buttonSubmitText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",path:"/sign-in",entranceText:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",entranceLinkText:"\u0412\u043e\u0439\u0442\u0438",onSubmit:function(e,n){t(e,n)}})},A=n(32),q=function(e){var t=e.component,n=Object(A.a)(e,["component"]);return Object(a.jsx)(l.b,{children:function(){return n.loggedIn?Object(a.jsx)(t,Object(C.a)({},n)):Object(a.jsx)(l.a,{to:"/sign-in"})}})};var D=function(e){var t=e.isOpen,n=e.onClose,c=e.loggedIn,o=e.message;return Object(a.jsxs)(N,{elementName:"infoTooltip",isForm:!1,noConfirm:!0,isOpen:t,onClose:n,loggedIn:c,children:[Object(a.jsx)("img",{src:o.iconPath,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438",className:"popup__icon"}),Object(a.jsx)("h2",{className:"popup__heading popup__heading_type_infoTooltip",children:o.text})]})},U=n(18),R=n(20),J=n(21),H=function(e){Object(U.a)(n,e);var t=Object(R.a)(n);function n(e){var a;Object(p.a)(this,n);for(var c=arguments.length,o=new Array(c>1?c-1:0),s=1;s<c;s++)o[s-1]=arguments[s];return(a=t.call.apply(t,[this].concat(o))).status=400,a.message=e,a}return n}(Object(J.a)(Error)),M=function(e){Object(U.a)(n,e);var t=Object(R.a)(n);function n(e){var a;Object(p.a)(this,n);for(var c=arguments.length,o=new Array(c>1?c-1:0),s=1;s<c;s++)o[s-1]=arguments[s];return(a=t.call.apply(t,[this].concat(o))).status=401,a.message=e,a}return n}(Object(J.a)(Error)),F="http://api.leon.students.nomoreparties.xyz",z=function(e){return fetch("".concat(F,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))})).catch((function(e){throw new M(e.message)}))};var B=function(e){var t=e.email,n=e.signOut,c=e.isAuthInfoOpened,o="header__auth-info-mobile\n\t".concat(c?"header__auth-info-mobile_opened":"header__auth-info-mobile_closed");return Object(a.jsxs)("div",{className:o,children:[Object(a.jsx)("span",{className:"header__mail",children:t}),Object(a.jsx)("button",{className:"header__button",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]})},W=n.p+"static/media/resolve.995328b5.svg",G=n.p+"static/media/reject.4190bc4f.svg",K=n.p+"static/media/loader.39e38019.svg";var $=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),s=t[0],i=t[1],p=Object(c.useState)(""),b=Object(u.a)(p,2),j=b[0],h=b[1],O=Object(c.useState)(!1),f=Object(u.a)(O,2),g=f[0],v=f[1],C=Object(c.useState)(!1),N=Object(u.a)(C,2),I=N[0],A=N[1],U=Object(c.useState)(!1),R=Object(u.a)(U,2),J=R[0],$=R[1],Q=Object(c.useState)(!1),V=Object(u.a)(Q,2),X=V[0],Y=V[1],Z=Object(c.useState)({isImageOpen:!1,link:"",name:""}),ee=Object(u.a)(Z,2),te=ee[0],ne=ee[1],ae=Object(c.useState)([]),ce=Object(u.a)(ae,2),oe=ce[0],se=ce[1],ie=Object(c.useState)({}),re=Object(u.a)(ie,2),ue=re[0],le=re[1],de=Object(c.useState)(!1),pe=Object(u.a)(de,2),be=pe[0],me=pe[1],je=Object(c.useState)({}),he=Object(u.a)(je,2),Oe=he[0],fe=he[1],_e=Object(c.useState)(),ge=Object(u.a)(_e,2),xe=ge[0],ve=ge[1],Ce=Object(c.useState)(!1),Ne=Object(u.a)(Ce,2),ke=Ne[0],Se=Ne[1],ye=Object(c.useState)({iconPath:K,text:""}),we=Object(u.a)(ye,2),Le=we[0],Te=we[1],Ie=Object(l.h)(),Pe=Object(l.g)(),Ee=n(43);function Ae(){i(!1),localStorage.removeItem("jwt"),h(""),Pe.push("/sign-in")}function qe(){v(!1),$(!1),A(!1),ne({isImageOpen:!1,link:"",name:""}),me(!1),Y(!1),Te({iconPath:K,text:""})}return o.a.useEffect((function(){m.getUserInfo().then((function(e){le(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435: ".concat(e))}))}),[]),o.a.useEffect((function(){var e=localStorage.getItem("jwt");e&&z(e).then((function(e){i(!0),h(e.data.email),Pe.push("/")})).catch((function(e){return console.log(e)}))}),[Pe]),o.a.useEffect((function(){m.getInitialCards().then((function(e){se(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a: ".concat(e))}))}),[]),Object(a.jsx)(d.Provider,{value:ue,children:Object(a.jsxs)("div",{className:"page",children:[s&&ke&&Object(a.jsx)(B,{email:j,signOut:Ae,isAuthInfoOpened:ke}),Object(a.jsx)(_,{loggedIn:s,locaction:Ie,email:j,signOut:Ae,isAuthInfoOpened:ke,onHamburgerClick:function(){Se(!ke)}}),Object(a.jsxs)(l.d,{children:[Object(a.jsx)(q,{exact:!0,path:"/",loggedIn:s,component:x,cards:oe,onCardClick:function(e){var t=e.link,n=e.name;ne({isImageOpen:!0,link:t,name:n})},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===ue._id}));m.changeLikeCardStatus(e._id,!t).then((function(t){var n=oe.map((function(n){return n._id===e._id?t:n}));se(n)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c/\u0441\u043d\u044f\u0442\u044c \u043b\u0430\u0439\u043a: ".concat(e))}))},onCardDelete:function(e){me(!0),fe(e)},onEditProfile:function(){v(!0)},onAddPlace:function(){A(!0)},onEditAvatar:function(){$(!0)}}),Object(a.jsx)(l.b,{path:"/sign-in",children:Object(a.jsx)(P,{onLogin:function(e,t){(function(e,t){return fetch("".concat(F,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e.token})).catch((function(e){if(400===e.status)throw new H("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439");if(401===e.status)throw new M("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d");throw Error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))})(Ee(e),t).then((function(e){z(e).then((function(e){h(e.data.email)})).catch((function(e){return console.log(e)})),i(!0),Te({iconPath:W,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u043e\u0448\u043b\u0438 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435!"}),Pe.push("/api")})).catch((function(e){return Te({iconPath:G,text:e.message})})),Y(!0)}})}),Object(a.jsx)(l.b,{path:"/sign-up",children:Object(a.jsx)(E,{onRegister:function(e,t){(function(e,t){return fetch("".concat(F,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!\n\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."))})).catch((function(e){throw new H(e.message)}))})(Ee(e),t).then((function(){Te({iconPath:W,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}),Pe.push("/sing-in")})).catch((function(e){return Te({iconPath:G,text:e.message})})),Y(!0)}})}),Object(a.jsx)(l.b,{children:s?Object(a.jsx)(l.a,{to:"/"}):Object(a.jsx)(l.a,{to:"/sign-in"})})]}),Object(a.jsx)(T,{}),Object(a.jsx)(D,{isOpen:X,onClose:qe,loggedIn:s,message:Le}),Object(a.jsx)(k,{isOpen:g,onClose:qe,onUpdateUser:function(e){ve(!0),m.updateUserInfo(e).then((function(e){le(e),qe()})).catch((function(e){return"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435: ".concat(e)})).finally((function(){return ve(!1)}))},isLoading:xe}),Object(a.jsx)(S,{isOpen:J,onClose:qe,onUpdateAvatar:function(e){ve(!0),m.updateUserAvatar(e).then((function(e){le(e),qe()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430: ".concat(e))})).finally((function(){return ve(!1)}))},isLoading:xe}),Object(a.jsx)(y,{isOpen:I,onClose:qe,onAddPlace:function(e){ve(!0),m.addNewCard(e).then((function(e){se([e].concat(Object(r.a)(oe))),qe()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))})).finally((function(){return ve(!1)}))}}),Object(a.jsx)(w,{isOpen:be,onClose:qe,onConfirmDelete:function(){m.deleteCard(Oe._id).then((function(){se(oe.filter((function(e){return e!==Oe}))),qe()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))}))}}),Object(a.jsx)(L,{name:te.name,link:te.link,onClose:qe,isOpen:te.isImageOpen})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(j.a,{basename:"/",children:Object(a.jsx)($,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.28b4b4aa.chunk.js.map