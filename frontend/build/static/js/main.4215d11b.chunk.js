(this.webpackJsonpmesto=this.webpackJsonpmesto||[]).push([[0],{28:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),s=n(30),i=n.n(s),r=(n(28),n(17)),u=n.n(r),l=n(33),b=n(25),p=n(3),d=n(4),j=o.a.createContext(),m=n(2),h=n(12),O=n(31),f={baseUrl:"http://localhost:3001/",headers:{"Content-Type":"application/json"}},_=new(function(){function e(t){Object(h.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(O.a)(e,[{key:"_sendRequest",value:function(e,t){return fetch("".concat(this._url).concat(e),t).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"getUserInfo",value:function(){var e=localStorage.getItem("jwt");return this._sendRequest("users/me",{headers:Object(m.a)(Object(m.a)({},this._headers),{},{authorization:"Bearer ".concat(e)})})}},{key:"getInitialCards",value:function(){var e=localStorage.getItem("jwt");return this._sendRequest("cards",{headers:Object(m.a)(Object(m.a)({},this._headers),{},{authorization:"Bearer ".concat(e)})})}},{key:"updateUserInfo",value:function(e){var t=localStorage.getItem("jwt");return this._sendRequest("users/me",{method:"PATCH",headers:Object(m.a)(Object(m.a)({},this._headers),{},{authorization:"Bearer ".concat(t)}),body:JSON.stringify({name:e.name,about:e.about})})}},{key:"addNewCard",value:function(e){var t=localStorage.getItem("jwt");return this._sendRequest("cards",{method:"POST",headers:Object(m.a)(Object(m.a)({},this._headers),{},{authorization:"Bearer ".concat(t)}),body:JSON.stringify({name:e.name,link:e.link})})}},{key:"changeLikeCardStatus",value:function(e,t){var n=localStorage.getItem("jwt");return this._sendRequest("cards/".concat(e,"/likes"),{method:"".concat(t?"PUT":"DELETE"),headers:Object(m.a)(Object(m.a)({},this._headers),{},{authorization:"Bearer ".concat(n)})})}},{key:"deleteCard",value:function(e){var t=localStorage.getItem("jwt");return this._sendRequest("cards/".concat(e),{method:"DELETE",headers:Object(m.a)(Object(m.a)({},this._headers),{},{authorization:"Bearer ".concat(t)})})}},{key:"updateUserAvatar",value:function(e){var t=localStorage.getItem("jwt");return this._sendRequest("users/me/avatar",{method:"PATCH",headers:Object(m.a)(Object(m.a)({},this._headers),{},{authorization:"Bearer ".concat(t)}),body:JSON.stringify({avatar:e})})}}]),e}())(f),g=n(10),x=n.p+"static/media/logo.2e17206c.svg";var v=function(e){var t=e.email,n=e.signOut;return Object(a.jsxs)("div",{className:"header__auth-info",children:[Object(a.jsx)("span",{className:"header__mail",children:t}),Object(a.jsx)("button",{className:"header__button",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]})};var C=function(e){var t=e.isAuthInfoOpened,n=e.onHamburgerClick,c="hamburger\n\t".concat(t?"hamburger_opened":"hamburger_closed");return Object(a.jsx)("button",{className:c,onClick:n,children:Object(a.jsx)("span",{})})};var N=function(e){var t=e.loggedIn,n=e.email,c=e.signOut,o=e.isAuthInfoOpened,s=e.onHamburgerClick,i=Object(d.h)().pathname,r="".concat("/sign-in"===i?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u043e\u0439\u0442\u0438"),u="".concat("/sign-in"===i?"/sign-up":"/sign-in");return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{src:x,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430",className:"logo"}),t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v,{email:n,signOut:c}),Object(a.jsx)(C,{isAuthInfoOpened:o,onHamburgerClick:s})]}):Object(a.jsx)(g.b,{to:u,className:"header__link",children:r})]})};var S=function(e){var t=o.a.useContext(j),n=e.card,c=e.index,s=e.onCardClick,i=e.onCardLike,r=e.onCardDelete,u=n.likes.some((function(e){return e===t._id}))?"element__like_active":"",l=n.owner===t._id?"element__trash_active":"";return Object(a.jsxs)("article",{className:"element",children:[Object(a.jsx)("img",{src:n.link,alt:n.name,className:"element__img",onClick:function(){s(n)}}),Object(a.jsx)("button",{type:"button","aria-label":"\u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",className:"element__trash ".concat(l),onClick:function(){r(n)}}),Object(a.jsxs)("div",{className:"element__item",children:[Object(a.jsx)("h2",{className:"element__text",children:n.name}),Object(a.jsxs)("div",{className:"element__like-block",children:[Object(a.jsx)("button",{type:"button","aria-label":"\u043b\u0430\u0439\u043a",className:"element__like ".concat(u),onClick:function(){i(n)}}),Object(a.jsx)("span",{className:"element__count",children:n.likes.length})]})]})]},c)};var k=function(e){var t=o.a.useContext(j),n=e.cards,c=e.onEditProfile,s=e.onAddPlace,i=e.onEditAvatar,r=e.onCardClick,u=e.onCardLike,l=e.onCardDelete;return Object(a.jsxs)("main",{children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__avatar",children:[Object(a.jsx)("img",{src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__img"}),Object(a.jsx)("button",{className:"profile__button profile__button_open_editAvatarPopup",onClick:i})]}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("h1",{className:"profile__name",children:t.name}),Object(a.jsx)("button",{type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",className:"profile__button profile__button_open_editProfilePopup",onClick:c}),Object(a.jsx)("p",{className:"profile__working",children:t.about})]}),Object(a.jsx)("button",{type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f",className:"profile__button profile__button_open_addPlacePopup",onClick:s})]}),Object(a.jsx)("section",{className:"elements",children:n.length?n.map((function(e){return Object(a.jsx)(S,{card:e,onCardClick:r,onCardLike:u,onCardDelete:l},e._id)})):null})]})},y=n(6);var w=function(e){var t=e.elementName,n=e.children,c=e.title,o=e.buttonSubmitText,s=e.buttonSubmitTextIsLoading,i=e.noConfirm,r=e.isOpen,u=e.onClose,l=e.isLoading,b=e.disabled,p=e.onSubmit,d=e.isPopup,j=void 0===d||d,m=e.isForm,h=void 0===m||m,O=e.path,f=e.entranceText,_=e.entranceLinkText;return Object(a.jsxs)("div",{className:j?"popup popup_type_".concat(t," ").concat(r?"popup_is-opened":""):t,children:[j&&Object(a.jsx)("button",{type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f",className:"popup__close popup__close_type_".concat(t),onClick:u}),h?Object(a.jsxs)("form",{className:j?"popup__form popup__form_type_".concat(t):"form",name:t,onSubmit:p,children:[Object(a.jsx)("h2",{className:j?"popup__heading":"form__heading",children:c}),n,j?Object(a.jsx)("button",{type:"submit",className:"popup__button ".concat(b?"popup__button_disabled":""),disabled:b,children:l?s:o}):!i&&Object(a.jsxs)("div",{className:"form__button-overlay",children:[Object(a.jsx)("button",{type:"submit",className:"form__button ".concat("form__button_disabled"),disabled:b,children:o}),Object(a.jsxs)("div",{className:"form__subtext",children:[f," ",Object(a.jsx)(g.b,{to:O,className:"form__link",children:_})]})]})]}):Object(a.jsx)("div",{className:"popup__container popup__container_type_".concat(t),children:n})]})};var I=function(e){var t=o.a.useContext(j),n=e.isOpen,c=e.onClose,s=e.isLoading,i=e.onUpdateUser,r=o.a.useState({}),u=Object(p.a)(r,2),l=u[0],b=u[1],d=o.a.useState({}),h=Object(p.a)(d,2),O=h[0],f=h[1],_=o.a.useState({name:!0,description:!0}),g=Object(p.a)(_,2),x=g[0],v=g[1],C=o.a.useState(!0),N=Object(p.a)(C,2),S=N[0],k=N[1];function I(e){var t,n=e.target,a=n.value,c=n.name;b(Object(m.a)(Object(m.a)({},l),{},Object(y.a)({},c,a))),t=n,v(Object(m.a)(Object(m.a)({},x),{},Object(y.a)({},t.name,t.validity.valid))),f(Object(m.a)(Object(m.a)({},O),{},Object(y.a)({},t.name,t.validationMessage))),x.name&&x.description?k(!1):k(!0)}return o.a.useEffect((function(){k(!0),b({name:t.name,description:t.about}),v({name:!0,description:!0}),f("")}),[n,t]),o.a.useEffect((function(){x.name&&x.description?k(!1):k(!0)}),[x.name,x.description]),Object(a.jsxs)(w,{elementName:"editProfile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",buttonSubmitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",buttonSubmitTextIsLoading:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",isOpen:n,onClose:c,isLoading:s,disabled:S,onSubmit:function(e){e.preventDefault(),i({name:l.name,about:l.description})},children:[Object(a.jsx)("input",{type:"text",name:"name",value:l.name||"",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",className:"popup__input",minLength:"2",maxLength:"40",required:!0,onChange:I}),Object(a.jsx)("span",{className:"popup__error ".concat(x.name?"":"popup__error_visible"),children:O.name}),Object(a.jsx)("input",{type:"text",name:"description",value:l.description||"",placeholder:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0441\u0435\u0431\u0435",className:"popup__input",minLength:"2",maxLength:"200",required:!0,onChange:I}),Object(a.jsx)("span",{className:"popup__error ".concat(x.description?"":"popup__error_visible"),children:O.description})]})};var L=function(e){var t=o.a.useRef(""),n=e.isOpen,c=e.onClose,s=e.isLoading,i=e.onUpdateAvatar,r=o.a.useState(""),u=Object(p.a)(r,2),l=u[0],b=u[1],d=o.a.useState(!0),j=Object(p.a)(d,2),m=j[0],h=j[1],O=o.a.useState(!0),f=Object(p.a)(O,2),_=f[0],g=f[1];return o.a.useEffect((function(){g(!0),t.current.value="",h(!0),b("")}),[n]),o.a.useEffect((function(){g(!m)}),[m]),Object(a.jsxs)(w,{elementName:"editAvatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonSubmitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",buttonSubmitTextIsLoading:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",isOpen:n,onClose:c,isLoading:s,disabled:_,onSubmit:function(e){e.preventDefault(),i(t.current.value)},children:[Object(a.jsx)("input",{ref:t,type:"url",name:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u0443",className:"popup__input",required:!0,onChange:function(){h(t.current.validity.valid),b(t.current.validationMessage),g(!m)}}),Object(a.jsx)("span",{className:"popup__error ".concat(m?"":"popup__error_visible"),children:l})]})};var T=function(e){var t=e.isOpen,n=e.onClose,c=e.isLoading,s=e.onAddPlace,i=o.a.useState({name:"",url:""}),r=Object(p.a)(i,2),u=r[0],l=r[1],b=o.a.useState({}),d=Object(p.a)(b,2),j=d[0],h=d[1],O=o.a.useState({name:!0,url:!0}),f=Object(p.a)(O,2),_=f[0],g=f[1],x=o.a.useState({name:!1,url:!1}),v=Object(p.a)(x,2),C=v[0],N=v[1],S=o.a.useState(!0),k=Object(p.a)(S,2),I=k[0],L=k[1];function T(e){var t,n=e.target,a=n.value,c=n.name;l(Object(m.a)(Object(m.a)({},u),{},Object(y.a)({},c,a))),t=n,g(Object(m.a)(Object(m.a)({},_),{},Object(y.a)({},t.name,t.validity.valid))),h(Object(m.a)(Object(m.a)({},j),{},Object(y.a)({},t.name,t.validationMessage))),N(Object(m.a)(Object(m.a)({},C),{},Object(y.a)({},t.name,t.validity.valid))),C.name&&C.url?L(!1):L(!0)}return o.a.useEffect((function(){L(!0),l({name:"",url:""}),g({name:!0,url:!0}),N({name:!1,url:!1}),h("")}),[t]),o.a.useEffect((function(){C.name&&C.url?L(!1):L(!0)}),[C.name,C.url]),Object(a.jsxs)(w,{elementName:"addPlace",isPopup:!0,title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonSubmitText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",buttonSubmitTextIsLoading:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435...",isOpen:t,onClose:n,isLoading:c,disabled:I,onSubmit:function(e){e.preventDefault(),s({name:u.name,link:u.url})},children:[Object(a.jsx)("input",{type:"text",name:"name",value:u.name,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input",minLength:"2",maxLength:"30",required:!0,onChange:T}),Object(a.jsx)("span",{className:"popup__error ".concat(_.name?"":"popup__error_visible"),children:j.name}),Object(a.jsx)("input",{type:"url",name:"url",value:u.url,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u0443",className:"popup__input",required:!0,onChange:T}),Object(a.jsx)("span",{className:"popup__error ".concat(_.url?"":"popup__error_visible"),children:j.url})]})};var P=function(e){var t=e.isOpen,n=e.onClose,c=e.isLoading,o=e.onConfirmDelete;return Object(a.jsx)(w,{elementName:"deleteCurrentCard",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonSubmitText:"\u0414\u0430",buttonSubmitTextIsLoading:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...",isOpen:t,onClose:n,isLoading:c,onSubmit:function(e){e.preventDefault(),o()}})};var E=function(e){var t=e.link,n=e.name,c=e.isOpen,o=e.onClose;return Object(a.jsx)("div",{className:"popup popup_type_modalImage ".concat(c?"popup_is-opened":""),children:Object(a.jsxs)("figure",{className:"popup__figure",children:[Object(a.jsx)("button",{type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",className:"popup__close popup__close_type_modalImage",onClick:o}),Object(a.jsx)("img",{src:t,alt:n,className:"popup__img popup__img_type_modalImage"}),Object(a.jsx)("figcaption",{className:"popup__text popup__text_type_modalImage",children:n})]})})};var A=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__text",children:"\xa9 2021 Mesto Russia"})})};var U=function(e){var t=e.title,n=e.buttonSubmitText,s=e.path,i=e.entranceText,r=e.entranceLinkText,u=e.onSubmit,l=e.autoCompleteEmail,b=e.autoCompletePassword,d=Object(c.useState)({email:"",password:""}),j=Object(p.a)(d,2),h=j[0],O=j[1],f=Object(c.useState)({}),_=Object(p.a)(f,2),g=_[0],x=_[1],v=Object(c.useState)({email:!0,password:!0}),C=Object(p.a)(v,2),N=C[0],S=C[1],k=Object(c.useState)({email:!1,password:!1}),I=Object(p.a)(k,2),L=I[0],T=I[1],P=Object(c.useState)(!0),E=Object(p.a)(P,2),A=E[0],U=E[1],q=Object(c.useState)("password"),D=Object(p.a)(q,2),R=D[0],B=D[1],z=Object(c.useState)("hidden"),J=Object(p.a)(z,2),H=J[0],M=J[1];function F(e){var t,n=e.target,a=n.value,c=n.name;O(Object(m.a)(Object(m.a)({},h),{},Object(y.a)({},c,a))),t=n,S(Object(m.a)(Object(m.a)({},N),{},Object(y.a)({},t.name,t.validity.valid))),x(Object(m.a)(Object(m.a)({},g),{},Object(y.a)({},t.name,t.validationMessage))),T(Object(m.a)(Object(m.a)({},L),{},Object(y.a)({},t.name,t.validity.valid))),L.email&&L.password?U(!1):U(!0)}return o.a.useEffect((function(){L.email&&L.password?U(!1):U(!0)}),[L.email,L.password]),Object(a.jsxs)(w,{elementName:"entrance",title:t,buttonSubmitText:n,isPopup:!1,path:s,entranceText:i,entranceLinkText:r,onSubmit:function(e){e.preventDefault(),(h.email||h.password)&&(u(h.password,h.email),O({email:"",password:""}))},disabled:A,children:[Object(a.jsxs)("label",{htmlFor:"email",className:"form__field",children:[Object(a.jsx)("input",{type:"email",className:"form__input",id:"email",name:"email",value:h.email||"",placeholder:"Email",minLength:"6",maxLength:"40",autoComplete:l,required:!0,onChange:F}),Object(a.jsx)("span",{className:"form__error ".concat(!N.email&&"form__error_visible"),id:"email-error",children:g.email})]}),Object(a.jsxs)("label",{htmlFor:"password",className:"form__field",children:[Object(a.jsx)("input",{type:R,className:"form__input",id:"password",name:"password",value:h.password||"",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"8",maxLength:"30",autoComplete:b,required:!0,onChange:F}),Object(a.jsx)("button",{type:"button",className:"form__button_type_password-".concat(H),onClick:function(){"password"===R?(B("text"),M("hidden")):(B("password"),M("showed"))},onKeyDown:function(e){return e.preventDefault}}),Object(a.jsx)("span",{className:"form__error ".concat(!N.password&&"form__error_visible"),id:"password-error",children:g.password})]})]})};var q=function(e){var t=e.onLogin;return Object(a.jsx)(U,{title:"\u0412\u0445\u043e\u0434",buttonSubmitText:"\u0412\u043e\u0439\u0442\u0438",path:"/sign-up",onSubmit:function(e,n){t(e,n)},autoCompleteEmail:"email",autoCompletePassword:"current-password"})};var D=function(e){var t=e.onRegister;return Object(a.jsx)(U,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",buttonSubmitText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",path:"/sign-in",entranceText:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",entranceLinkText:"\u0412\u043e\u0439\u0442\u0438",onSubmit:function(e,n){t(e,n)}})},R=n(34),B=function(e){var t=e.component,n=Object(R.a)(e,["component"]);return Object(a.jsx)(d.b,{children:function(){return n.loggedIn?Object(a.jsx)(t,Object(m.a)({},n)):Object(a.jsx)(d.a,{to:"/sign-in"})}})};var z=function(e){var t=e.isOpen,n=e.onClose,c=e.loggedIn,o=e.message;return Object(a.jsxs)(w,{elementName:"infoTooltip",isForm:!1,noConfirm:!0,isOpen:t,onClose:n,loggedIn:c,children:[Object(a.jsx)("img",{src:o.iconPath,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438",className:"popup__icon"}),Object(a.jsx)("h2",{className:"popup__heading popup__heading_type_infoTooltip",children:o.text})]})},J=n(19),H=n(21),M=n(22),F=function(e){Object(J.a)(n,e);var t=Object(H.a)(n);function n(e){var a;Object(h.a)(this,n);for(var c=arguments.length,o=new Array(c>1?c-1:0),s=1;s<c;s++)o[s-1]=arguments[s];return(a=t.call.apply(t,[this].concat(o))).status=400,a.message=e,a}return n}(Object(M.a)(Error)),W=function(e){Object(J.a)(n,e);var t=Object(H.a)(n);function n(e){var a;Object(h.a)(this,n);for(var c=arguments.length,o=new Array(c>1?c-1:0),s=1;s<c;s++)o[s-1]=arguments[s];return(a=t.call.apply(t,[this].concat(o))).status=401,a.message=e,a}return n}(Object(M.a)(Error)),G=function(e,t){return fetch("".concat(f.baseUrl,"signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e})).catch((function(e){if(400===e.status)throw new F("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439");if(401===e.status)throw new W("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d");throw Error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))};var K=function(e){var t=e.email,n=e.signOut,c=e.isAuthInfoOpened,o="header__auth-info-mobile\n\t".concat(c?"header__auth-info-mobile_opened":"header__auth-info-mobile_closed");return Object(a.jsxs)("div",{className:o,children:[Object(a.jsx)("span",{className:"header__mail",children:t}),Object(a.jsx)("button",{className:"header__button",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]})},$=n.p+"static/media/resolve.995328b5.svg",Q=n.p+"static/media/reject.4190bc4f.svg",V=n.p+"static/media/loader.39e38019.svg";var X=function(){var e=Object(c.useState)(!1),t=Object(p.a)(e,2),s=t[0],i=t[1],r=Object(c.useState)(""),m=Object(p.a)(r,2),h=m[0],O=m[1],g=Object(c.useState)(!1),x=Object(p.a)(g,2),v=x[0],C=x[1],S=Object(c.useState)(!1),y=Object(p.a)(S,2),w=y[0],U=y[1],R=Object(c.useState)(!1),J=Object(p.a)(R,2),H=J[0],M=J[1],X=Object(c.useState)(!1),Y=Object(p.a)(X,2),Z=Y[0],ee=Y[1],te=Object(c.useState)({isImageOpen:!1,link:"",name:""}),ne=Object(p.a)(te,2),ae=ne[0],ce=ne[1],oe=Object(c.useState)([]),se=Object(p.a)(oe,2),ie=se[0],re=se[1],ue=Object(c.useState)({}),le=Object(p.a)(ue,2),be=le[0],pe=le[1],de=Object(c.useState)(!1),je=Object(p.a)(de,2),me=je[0],he=je[1],Oe=Object(c.useState)({}),fe=Object(p.a)(Oe,2),_e=fe[0],ge=fe[1],xe=Object(c.useState)(),ve=Object(p.a)(xe,2),Ce=ve[0],Ne=ve[1],Se=Object(c.useState)(!1),ke=Object(p.a)(Se,2),ye=ke[0],we=ke[1],Ie=Object(c.useState)({iconPath:V,text:""}),Le=Object(p.a)(Ie,2),Te=Le[0],Pe=Le[1],Ee=Object(d.h)(),Ae=Object(d.g)(),Ue=n(46);function qe(){return(qe=Object(b.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(Ue(t),n).then((function(){i(!0),Ae.push("/"),Pe({iconPath:$,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043b\u0438\u0441\u044c"})})).catch((function(e){return Pe({iconPath:Q,text:e.message})}));case 2:ee(!0);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function De(){return Re.apply(this,arguments)}function Re(){return(Re=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("jwt"),i(!1),O(""),Ae.push("/sign-in");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Be(){C(!1),M(!1),U(!1),ce({isImageOpen:!1,link:"",name:""}),he(!1),ee(!1),Pe({iconPath:V,text:""})}return o.a.useEffect((function(){s&&_.getUserInfo().then((function(e){pe(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435: ".concat(e))}))}),[s]),o.a.useEffect((function(){s&&_.getInitialCards().then((function(e){re(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a: ".concat(e))}))}),[s]),o.a.useEffect((function(){var e=localStorage.getItem("jwt");if(e)try{(function(e){return fetch("".concat(f.baseUrl,"users/me"),{method:"GET",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))})).catch((function(e){throw new W(e.message)}))})(e).then((function(e){O(e.email),i(!0),Ae.push("/")}))}catch(t){console.log(t)}}),[Ae]),Object(a.jsx)(j.Provider,{value:be,children:Object(a.jsxs)("div",{className:"page",children:[s&&ye&&Object(a.jsx)(K,{email:h,signOut:De,isAuthInfoOpened:ye}),Object(a.jsx)(N,{loggedIn:s,locaction:Ee,email:h,signOut:De,isAuthInfoOpened:ye,onHamburgerClick:function(){we(!ye)}}),Object(a.jsxs)(d.d,{children:[Object(a.jsx)(B,{exact:!0,path:"/",loggedIn:s,component:k,cards:ie,onCardClick:function(e){var t=e.link,n=e.name;ce({isImageOpen:!0,link:t,name:n})},onCardLike:function(e){var t=e.likes.some((function(e){return e===be._id}));_.changeLikeCardStatus(e._id,!t).then((function(t){var n=ie.map((function(n){return n._id===e._id?t:n}));re(n)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c/\u0441\u043d\u044f\u0442\u044c \u043b\u0430\u0439\u043a: ".concat(e))}))},onCardDelete:function(e){he(!0),ge(e)},onEditProfile:function(){C(!0)},onAddPlace:function(){U(!0)},onEditAvatar:function(){M(!0)}}),Object(a.jsx)(d.b,{path:"/sign-in",children:Object(a.jsx)(q,{onLogin:function(e,t){return qe.apply(this,arguments)}})}),Object(a.jsx)(d.b,{path:"/sign-up",children:Object(a.jsx)(D,{onRegister:function(e,t){(function(e,t){return fetch("".concat(f.baseUrl,"signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!\n\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."))})).catch((function(e){throw new F(e.message)}))})(Ue(e),t).then((function(){Pe({iconPath:$,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}),Ae.push("/sing-in")})).catch((function(e){return Pe({iconPath:Q,text:e.message})})),ee(!0)}})}),Object(a.jsx)(d.b,{children:s?Object(a.jsx)(d.a,{to:"/"}):Object(a.jsx)(d.a,{to:"/sign-in"})})]}),Object(a.jsx)(A,{}),Object(a.jsx)(z,{isOpen:Z,onClose:Be,loggedIn:s,message:Te}),Object(a.jsx)(I,{isOpen:v,onClose:Be,onUpdateUser:function(e){Ne(!0),_.updateUserInfo(e).then((function(e){pe(e),Be()})).catch((function(e){return"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435: ".concat(e)})).finally((function(){return Ne(!1)}))},isLoading:Ce}),Object(a.jsx)(L,{isOpen:H,onClose:Be,onUpdateAvatar:function(e){Ne(!0),_.updateUserAvatar(e).then((function(e){pe(e),Be()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430: ".concat(e))})).finally((function(){return Ne(!1)}))},isLoading:Ce}),Object(a.jsx)(T,{isOpen:w,onClose:Be,onAddPlace:function(e){Ne(!0),_.addNewCard(e).then((function(e){re([e].concat(Object(l.a)(ie))),Be()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))})).finally((function(){return Ne(!1)}))}}),Object(a.jsx)(P,{isOpen:me,onClose:Be,onConfirmDelete:function(){_.deleteCard(_e._id).then((function(){re(ie.filter((function(e){return e!==_e}))),Be()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))}))}}),Object(a.jsx)(E,{name:ae.name,link:ae.link,onClose:Be,isOpen:ae.isImageOpen})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(g.a,{basename:"/",children:Object(a.jsx)(X,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.4215d11b.chunk.js.map