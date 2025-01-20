"use strict";(self.webpackChunkEVC_UI_Web_Admin=self.webpackChunkEVC_UI_Web_Admin||[]).push([[809],{6809:(x,f,a)=>{a.r(f),a.d(f,{AccountModule:()=>Y});var s=a(9808),d=a(2382),_=a(6198),C=a(5861),t=a(7587),p=a(3678),b=a(7093),h=a(5315),l=a(8655),u=a(3724),c=a(845),m=a(7766);function y(e,i){1&e&&t.GkF(0)}function A(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"p-dialog",2),t.NdJ("visibleChange",function(r){return t.CHM(n),t.oxw().modalVisible=r}),t.YNc(1,y,1,0,"ng-container",3),t.qZA()}if(2&e){const n=t.oxw(),o=t.MAs(2);t.Q6J("modal",!0)("closable",!n.isSubmitting)("visible",n.modalVisible),t.xp6(1),t.Q6J("ngTemplateOutlet",o)}}function T(e,i){if(1&e&&t._UZ(0,"p-message",15),2&e){const n=t.oxw(3);t.Q6J("text",n.resultMessage)("severity",n.resultSeverity)}}function Z(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){return t.CHM(n),t.oxw(3).modalVisible=!1}),t.qZA()}}const P=function(){return{required:!0}},w=function(e){return{required:!0,matchInput:e}};function F(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"app-form",6),t.NdJ("onSubmit",function(r){return t.CHM(n),t.oxw(2).onSubmit(r)}),t.TgZ(1,"app-input",7),t.NdJ("valueChange",function(r){return t.CHM(n),t.oxw(2).request.currentPassword=r}),t.qZA(),t.TgZ(2,"app-input",8,9),t.NdJ("valueChange",function(r){return t.CHM(n),t.oxw(2).request.newPassword=r}),t.qZA(),t._UZ(4,"app-input",10,9),t.YNc(6,T,1,2,"p-message",11),t.TgZ(7,"div",12),t.YNc(8,Z,1,0,"button",13),t._UZ(9,"button",14),t.qZA()()}if(2&e){const n=t.MAs(3),o=t.oxw(2);t.Q6J("disabled",o.isSubmitting),t.xp6(1),t.Q6J("validations",t.DdM(8,P))("value",o.request.currentPassword),t.xp6(1),t.Q6J("validations",t.DdM(9,P))("value",o.request.newPassword),t.xp6(2),t.Q6J("validations",t.VKq(10,w,n)),t.xp6(2),t.Q6J("ngIf",o.resultMessage),t.xp6(2),t.Q6J("ngIf",o.modal)}}function J(e,i){if(1&e&&(t.YNc(0,F,10,12,"app-form",4),t._UZ(1,"app-fullscreen-loader",5)),2&e){const n=t.oxw();t.Q6J("ngIf",n.request),t.xp6(1),t.Q6J("visible",n.isSubmitting)}}let v=(()=>{class e{constructor(n){this._authService=n,this.modalVisibleChange=new t.vpe,this.modal=!1,this._modalVisible=!1,this._isSubmitting=!1,this.request={currentPassword:"",newPassword:""}}clear(){var n;null===(n=this._form)||void 0===n||n.clearInputs(),this._resultMessage=null}onSubmit(n){var o=this;return(0,C.Z)(function*(){if(n.isValid)try{o._isSubmitting=!0,o._resultMessage=null,o._resultMessage=yield o.sendSubmission(o.request),o._resultSeverity="success"}catch(r){o._resultMessage=o.getHttpErrorMessage(r),o._resultSeverity="error"}finally{o._isSubmitting=!1}})()}sendSubmission(n){var o=this;return(0,C.Z)(function*(){let r;try{yield o._authService.resetPassword(n),r=Promise.resolve("Password changed successfully")}catch(g){r=Promise.reject(g)}return r})()}getHttpErrorMessage(n){return"string"==typeof n.error?n.error:n.message}get modalVisible(){return this._modalVisible}set modalVisible(n){this._modalVisible!=n&&(this._modalVisible=n,this.modalVisibleChange.emit(this._modalVisible))}get isSubmitting(){return this._isSubmitting}get resultMessage(){return this._resultMessage}get resultSeverity(){return this._resultSeverity}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(b.e))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-pass-change-form"]],viewQuery:function(n,o){if(1&n&&t.Gf(p.i,5),2&n){let r;t.iGM(r=t.CRH())&&(o._form=r.first)}},inputs:{modal:"modal",modalVisible:"modalVisible"},outputs:{modalVisibleChange:"modalVisibleChange"},decls:3,vars:2,consts:[["header","Change Password","styleClass","lg:w-6 lg:h-auto w-11 h-full",3,"modal","closable","visible","visibleChange",4,"ngIf","ngIfElse"],["formTemplate",""],["header","Change Password","styleClass","lg:w-6 lg:h-auto w-11 h-full",3,"modal","closable","visible","visibleChange"],[4,"ngTemplateOutlet"],[3,"disabled","onSubmit",4,"ngIf"],["text","Submitting...",3,"visible"],[3,"disabled","onSubmit"],["name","current-password","type","password","label","Current Password","labelClass","mb-2 font-semibold",1,"w-full","p-1","mb-2",3,"validations","value","valueChange"],["name","new-password","type","password","label","New Password","labelClass","mb-2 font-semibold",1,"w-full","p-1","mb-2",3,"validations","value","valueChange"],["newPassInput",""],["name","confirm-password","type","password","label","Confirm Password","labelClass","mb-2 font-semibold",1,"w-full","p-1","mb-2",3,"validations"],["styleClass","block mt-4 mb-2",3,"text","severity",4,"ngIf"],["slot","footer",1,"form-actions","text-right"],["pButton","","class","p-button-text","type","button","label","Cancel","icon","pi pi-times",3,"click",4,"ngIf"],["pButton","","type","submit","label","Submit","icon","pi pi-check",1,"p-button-text"],["styleClass","block mt-4 mb-2",3,"text","severity"],["pButton","","type","button","label","Cancel","icon","pi pi-times",1,"p-button-text",3,"click"]],template:function(n,o){if(1&n&&(t.YNc(0,A,2,4,"p-dialog",0),t.YNc(1,J,2,2,"ng-template",null,1,t.W1O)),2&n){const r=t.MAs(2);t.Q6J("ngIf",o.modal)("ngIfElse",r)}},directives:[s.O5,h.V,s.tP,p.i,l.a,u.q,c.Hq,m.l],styles:["[_nghost-%COMP%]   app-form[_ngcontent-%COMP%]{height:100%}"]}),e})();var I=a(4844),M=a(4297),O=a(1208);function S(e,i){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Oqu(n.user.phoneNumber)}}function U(e,i){1&e&&(t.ynx(0),t.TgZ(1,"i"),t._uU(2,"(Not set)"),t.qZA(),t.BQk())}function N(e,i){if(1&e&&(t.TgZ(0,"li",4)(1,"span",6),t._uU(2),t.qZA(),t._UZ(3,"p-checkbox",8),t.qZA()),2&e){const n=i.$implicit;t.xp6(2),t.Oqu(n.role),t.xp6(1),t.Q6J("binary",!0)("ngModel",n.isActive)}}const Q=[{path:"",component:(()=>{class e{constructor(n){this.user=n.user,this.profiles=n.profiles}onChangePassword(){this._passChangeForm.clear(),setTimeout(()=>this._passChangeForm.modalVisible=!0)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(I.r))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-account"]],viewQuery:function(n,o){if(1&n&&t.Gf(v,5),2&n){let r;t.iGM(r=t.CRH())&&(o._passChangeForm=r.first)}},decls:38,vars:9,consts:[[1,"mb-4","text-right"],["pButton","","label","Change Password","icon","pi pi-key",3,"click"],["header","Account Information"],[1,"account-list"],[1,"grid"],[1,"col-6","meta"],[1,"col-6","data"],[4,"ngIf"],[1,"col-6","data","pointer-events-none",3,"binary","ngModel"],["header","Profiles"],[1,"profiles-header","grid"],[1,"col-6"],[1,"profiles-list"],["class","grid",4,"ngFor","ngForOf"],[3,"modal"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return o.onChangePassword()}),t.qZA()(),t.TgZ(2,"p-card",2)(3,"ul",3)(4,"li",4)(5,"span",5),t._uU(6,"Email"),t.qZA(),t.TgZ(7,"span",6),t._uU(8),t.qZA()(),t.TgZ(9,"li",4)(10,"span",5),t._uU(11,"First Name"),t.qZA(),t.TgZ(12,"span",6),t._uU(13),t.qZA()(),t.TgZ(14,"li",4)(15,"span",5),t._uU(16,"Last Name"),t.qZA(),t.TgZ(17,"span",6),t._uU(18),t.qZA()(),t.TgZ(19,"li",4)(20,"span",5),t._uU(21,"Phone Number"),t.qZA(),t.TgZ(22,"span",6),t.YNc(23,S,2,1,"ng-container",7),t.YNc(24,U,3,0,"ng-container",7),t.qZA()(),t.TgZ(25,"li",4)(26,"span",5),t._uU(27,"Email Verified"),t.qZA(),t._UZ(28,"p-checkbox",8),t.qZA()()(),t.TgZ(29,"p-card",9)(30,"div",10)(31,"span",11),t._uU(32,"Role"),t.qZA(),t.TgZ(33,"span",11),t._uU(34,"Active"),t.qZA()(),t.TgZ(35,"ul",12),t.YNc(36,N,4,3,"li",13),t.qZA()(),t._UZ(37,"app-pass-change-form",14)),2&n&&(t.xp6(8),t.Oqu(o.user.email),t.xp6(5),t.Oqu(o.user.firstName),t.xp6(5),t.Oqu(o.user.lastName),t.xp6(5),t.Q6J("ngIf",o.user.phoneNumber),t.xp6(1),t.Q6J("ngIf",!o.user.phoneNumber),t.xp6(4),t.Q6J("binary",!0)("ngModel",o.user.isEmailVerified),t.xp6(8),t.Q6J("ngForOf",o.profiles),t.xp6(1),t.Q6J("modal",!0))},directives:[c.Hq,M.Z,s.O5,O.XZ,d.JJ,d.On,s.sg,v],styles:["[_nghost-%COMP%]{display:block;padding:20px}[_nghost-%COMP%]   p-card[_ngcontent-%COMP%]     .p-card{margin-bottom:1.5rem;background-color:var(--blue-50)}[_nghost-%COMP%]   p-card[_ngcontent-%COMP%]     .p-card ul{display:block;margin:0;padding:.5rem}[_nghost-%COMP%]   p-card[_ngcontent-%COMP%]     .p-card ul li{border-bottom:solid var(--cyan-200) 1px}[_nghost-%COMP%]   p-card[_ngcontent-%COMP%]     .p-card ul li:not(:last-of-type){margin-bottom:1rem}[_nghost-%COMP%]   p-card[_ngcontent-%COMP%]     .p-card ul li .meta{font-weight:600;overflow:auto}[_nghost-%COMP%]   p-card[_ngcontent-%COMP%]     .p-card ul li .data{overflow:auto}@media (max-width: 767px){[_nghost-%COMP%]   p-card[_ngcontent-%COMP%]     .p-card ul.account-list li{flex-flow:column}[_nghost-%COMP%]   p-card[_ngcontent-%COMP%]     .p-card ul.account-list li .meta, [_nghost-%COMP%]   p-card[_ngcontent-%COMP%]     .p-card ul.account-list li .data{width:100%}}[_nghost-%COMP%]   p-card[_ngcontent-%COMP%]     .p-card div.profiles-header{margin:0 .5rem 1rem;font-weight:600;border-bottom:solid var(--cyan-400) 1px}[_nghost-%COMP%]   p-card[_ngcontent-%COMP%]:not(:last-of-type)     .p-card{margin-bottom:1.5rem}"]}),e})()}];let k=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[_.Bz.forChild(Q)],_.Bz]}),e})();var E=a(9783),V=a(2599),B=a(7665),q=a(5389);let L=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[E.ez],imports:[[s.ez,q.I,B.g,c.hJ,u.O,V.R,h.S]]}),e})(),Y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.ez,d.u5,k,M.d,c.hJ,O.nD,L]]}),e})()},7766:(x,f,a)=>{a.d(f,{l:()=>h});var s=a(7587),d=a(9808);function _(l,u){1&l&&s._UZ(0,"div",6)}function C(l,u){if(1&l&&(s.TgZ(0,"span",7),s._uU(1),s.qZA()),2&l){const c=s.oxw(2);s.xp6(1),s.Oqu(c.text)}}function t(l,u){if(1&l&&(s.ynx(0),s.YNc(1,_,1,0,"div",4),s.YNc(2,C,2,1,"span",5),s.BQk()),2&l){const c=s.oxw();s.xp6(1),s.Q6J("ngIf",c.spinner),s.xp6(1),s.Q6J("ngIf",c.text)}}function p(l,u){1&l&&s.Hsn(0,0,["*ngIf","customContent"])}const b=["*"];let h=(()=>{class l{constructor(){this.position="absolute",this.blockText=!1,this.visible=!1,this.spinner=!0,this.customContent=!1}}return l.\u0275fac=function(c){return new(c||l)},l.\u0275cmp=s.Xpm({type:l,selectors:[["app-fullscreen-loader"]],hostVars:6,hostBindings:function(c,m){2&c&&(s.Tol(m.position),s.ekj("block-text",m.blockText)("visible",m.visible))},inputs:{position:"position",blockText:"blockText",visible:"visible",spinner:"spinner",text:"text",customContent:"customContent"},ngContentSelectors:b,decls:5,vars:2,consts:[[1,"backdrop"],[1,"foreground"],[1,"content"],[4,"ngIf"],["class","spinner",4,"ngIf"],["class","loader-text",4,"ngIf"],[1,"spinner"],[1,"loader-text"]],template:function(c,m){1&c&&(s.F$t(),s._UZ(0,"div",0),s.TgZ(1,"div",1)(2,"div",2),s.YNc(3,t,3,2,"ng-container",3),s.YNc(4,p,1,0,"ng-content",3),s.qZA()()),2&c&&(s.xp6(3),s.Q6J("ngIf",!m.customContent),s.xp6(1),s.Q6J("ngIf",m.customContent))},directives:[d.O5],styles:["[_nghost-%COMP%]{--backdrop-color: var(--gray-900);--backdrop-opacity: .6;--content-background: var(--cyan-200);--content-border: none;--content-border-radius: 6px;--content-box-shadow: var(--backdrop-color) 0 0 10px;--text-color: var(--blue-900);--text-font-size: 1rem;--text-font-weight: normal;--spinner-color: var(--blue-900);--spinner-color-accent: var(--gray-50);--spinner-thickness: 4px;display:block;position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden;z-index:99999}[_nghost-%COMP%]   .backdrop[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--backdrop-color);opacity:0;transition:.25s}[_nghost-%COMP%]   .foreground[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;opacity:0;transform:scale(1.25);transition:.25s}[_nghost-%COMP%]   .foreground[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-flow:row;align-items:center;justify-content:center;padding:20px;background-color:var(--content-background);border:var(--content-border);border-radius:var(--content-border-radius);box-shadow:var(--content-box-shadow)}[_nghost-%COMP%]   .foreground[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   div.spinner[_ngcontent-%COMP%]{width:50px;height:50px;border:solid var(--spinner-color) var(--spinner-thickness);border-radius:100%;border-top-color:var(--spinner-color-accent);animation:spinnerAnimation .75s linear infinite}[_nghost-%COMP%]   .foreground[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span.loader-text[_ngcontent-%COMP%]{display:block;margin:0 0 0 12px;color:var(--text-color);font-size:var(--text-font-size);font-weight:var(--text-font-weight)}.absolute[_nghost-%COMP%]{position:absolute}.block-text[_nghost-%COMP%]   .foreground[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{flex-flow:column}.block-text[_nghost-%COMP%]   .foreground[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:10px 0 0}.visible[_nghost-%COMP%]{pointer-events:all}.visible[_nghost-%COMP%]   .backdrop[_ngcontent-%COMP%]{opacity:var(--backdrop-opacity)}.visible[_nghost-%COMP%]   .foreground[_ngcontent-%COMP%]{opacity:1;transform:scale(1)}@keyframes spinnerAnimation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]}),l})()},2599:(x,f,a)=>{a.d(f,{R:()=>t});var s=a(9808),_=(a(7766),a(7587));let t=(()=>{class p{}return p.\u0275fac=function(h){return new(h||p)},p.\u0275mod=_.oAB({type:p}),p.\u0275inj=_.cJS({imports:[[s.ez]]}),p})()}}]);