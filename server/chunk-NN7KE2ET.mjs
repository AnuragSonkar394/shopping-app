import './polyfills.server.mjs';
import{A as c,B as ue,C as A,D as de,E as p,F as x,G as ce,H as he,I as pe,J as P,L as fe,Q as me,S as ge,T as q,V as k,W as _e,X as ve,Y as ye,Z as Ce,a as te,aa as Ve,b as ie,c as ne,d as S,e as f,ea as De,f as V,g as N,h as u,ha as F,i as m,j as y,k as re,l as oe,m as se,n as L,o as W,p as O,q as ae,r as d,s as l,t as $,u as D,v as b,w as g,x as le,y as o,z as s}from"./chunk-AKRAU6YZ.mjs";import{a as v,b as C}from"./chunk-VVCT4QZE.mjs";var Ke=[],be=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=m({type:t})}static{this.\u0275inj=f({imports:[F.forRoot(Ke),F]})}}return t})();var Me=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-header-components"]],decls:5,vars:0,consts:[[1,"navbar","navbar-light","bg-light"],["href","#",1,"navbar-brand"],["src","assets/images/online-shopping.png","alt",""]],template:function(n,r){n&1&&(o(0,"nav",0)(1,"a",1),c(2,"img",2),o(3,"h1"),p(4,"Shopping-App"),s()()())},styles:["a[_ngcontent-%COMP%]{display:flex}a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px}"]})}}return t})();var Ae=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-footer-component"]],decls:2,vars:0,template:function(n,r){n&1&&(o(0,"h1"),p(1,` Contact us
`),s())}})}}return t})();var T=(()=>{class t{constructor(){this.title="shopping-app"}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-root"]],decls:6,vars:0,consts:[[1,"header"],[1,"cont"],[1,"footer"]],template:function(n,r){n&1&&(o(0,"div",0),c(1,"app-header-components"),s(),o(2,"div",1),c(3,"router-outlet"),s(),o(4,"div",2),c(5,"app-footer-component"),s())},dependencies:[De,Me,Ae],styles:[".cont[_ngcontent-%COMP%]{width:98vw;padding:2px;margin:4px;border:2px solid black;height:40vw;overflow-y:scroll}.header[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{width:98vw;padding:2px;margin:4px;border:2px solid black}"]})}}return t})();var xe=(()=>{class t{constructor(i,n){this._renderer=i,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(i,n){this._renderer.setProperty(this._elementRef.nativeElement,i,n)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}static{this.\u0275fac=function(n){return new(n||t)(l($),l(W))}}static{this.\u0275dir=y({type:t})}}return t})(),Pe=(()=>{class t extends xe{static{this.\u0275fac=(()=>{let i;return function(r){return(i||(i=L(t)))(r||t)}})()}static{this.\u0275dir=y({type:t,features:[D]})}}return t})(),Y=new V("");var tt={provide:Y,useExisting:S(()=>B),multi:!0};function it(){let t=q()?q().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var nt=new V(""),B=(()=>{class t extends xe{constructor(i,n,r){super(i,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!it())}writeValue(i){let n=i??"";this.setProperty("value",n)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}static{this.\u0275fac=function(n){return new(n||t)(l($),l(W),l(nt,8))}}static{this.\u0275dir=y({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&A("input",function(h){return r._handleInput(h.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(h){return r._compositionEnd(h.target.value)})},features:[P([tt]),D]})}}return t})();var rt=new V(""),ot=new V("");function ke(t){return t!=null}function Te(t){return fe(t)?te(t):t}function je(t){let e={};return t.forEach(i=>{e=i!=null?v(v({},e),i):e}),Object.keys(e).length===0?null:e}function Ge(t,e){return e.map(i=>i(t))}function st(t){return!t.validate}function Re(t){return t.map(e=>st(e)?e:i=>e.validate(i))}function at(t){if(!t)return null;let e=t.filter(ke);return e.length==0?null:function(i){return je(Ge(i,e))}}function Be(t){return t!=null?at(Re(t)):null}function lt(t){if(!t)return null;let e=t.filter(ke);return e.length==0?null:function(i){let n=Ge(i,e).map(Te);return ne(n).pipe(ie(je))}}function He(t){return t!=null?lt(Re(t)):null}function Fe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function ut(t){return t._rawValidators}function dt(t){return t._rawAsyncValidators}function z(t){return t?Array.isArray(t)?t:[t]:[]}function G(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ee(t,e){let i=z(e);return z(t).forEach(r=>{G(i,r)||i.push(r)}),i}function we(t,e){return z(e).filter(i=>!G(t,i))}var R=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Be(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=He(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},Z=class extends R{get formDirective(){return null}get path(){return null}},I=class extends R{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},J=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},ct={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ai=C(v({},ct),{"[class.ng-submitted]":"isSubmitted"}),Ue=(()=>{class t extends J{constructor(i){super(i)}static{this.\u0275fac=function(n){return new(n||t)(l(I,2))}}static{this.\u0275dir=y({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&le("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[D]})}}return t})();var E="VALID",j="INVALID",M="PENDING",w="DISABLED";function ht(t){return(H(t)?t.validators:t)||null}function pt(t){return Array.isArray(t)?Be(t):t||null}function ft(t,e){return(H(e)?e.asyncValidators:t)||null}function mt(t){return Array.isArray(t)?He(t):t||null}function H(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var X=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===E}get invalid(){return this.status===j}get pending(){return this.status==M}get disabled(){return this.status===w}get enabled(){return this.status!==w}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ee(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ee(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(we(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(we(e,this._rawAsyncValidators))}hasValidator(e){return G(this._rawValidators,e)}hasAsyncValidator(e){return G(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=M,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=w,this.errors=null,this._forEachChild(n=>{n.disable(C(v({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(C(v({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=E,this._forEachChild(n=>{n.enable(C(v({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(C(v({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===E||this.status===M)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w:E}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=M,this._hasOwnPendingAsyncValidator=!0;let i=Te(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new O,this.statusChanges=new O}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?j:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(M)?M:this._anyControlsHaveStatus(j)?j:E}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){H(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=pt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=mt(this._rawAsyncValidators)}};var Le=new V("CallSetDisabledState",{providedIn:"root",factory:()=>K}),K="always";function gt(t,e){return[...e.path,t]}function _t(t,e,i=K){yt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Ct(t,e),Dt(t,e),Vt(t,e),vt(t,e)}function Ie(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function vt(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function yt(t,e){let i=ut(t);e.validator!==null?t.setValidators(Fe(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=dt(t);e.asyncValidator!==null?t.setAsyncValidators(Fe(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();Ie(e._rawValidators,r),Ie(e._rawAsyncValidators,r)}function Ct(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&We(t,e)})}function Vt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&We(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function We(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Dt(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function bt(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function Mt(t){return Object.getPrototypeOf(t.constructor)===Pe}function At(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(a=>{a.constructor===B?i=a:Mt(a)?n=a:r=a}),r||n||i||null}function Se(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function Ne(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Ft=class extends X{constructor(e=null,i,n){super(ht(i),ft(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),H(i)&&(i.nonNullable||i.initialValueIsDefault)&&(Ne(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Se(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Se(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ne(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Et={provide:I,useExisting:S(()=>Q)},Oe=Promise.resolve(),Q=(()=>{class t extends I{constructor(i,n,r,a,h,Ye){super(),this._changeDetectorRef=h,this.callSetDisabledState=Ye,this.control=new Ft,this._registered=!1,this.name="",this.update=new O,this._parent=i,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=At(this,a)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let n=i.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),bt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){_t(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Oe.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let n=i.isDisabled.currentValue,r=n!==0&&ge(n);Oe.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?gt(i,this._parent):[i]}static{this.\u0275fac=function(n){return new(n||t)(l(Z,9),l(rt,10),l(ot,10),l(Y,10),l(me,8),l(Le,8))}}static{this.\u0275dir=y({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[N.None,"disabled","isDisabled"],model:[N.None,"ngModel","model"],options:[N.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[P([Et]),D,re]})}}return t})();var wt={provide:Y,useExisting:S(()=>ee),multi:!0},ee=(()=>{class t extends Pe{writeValue(i){let n=i??"";this.setProperty("value",n)}registerOnChange(i){this.onChange=n=>{i(n==""?null:parseFloat(n))}}static{this.\u0275fac=(()=>{let i;return function(r){return(i||(i=L(t)))(r||t)}})()}static{this.\u0275dir=y({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,r){n&1&&A("input",function(h){return r.onChange(h.target.value)})("blur",function(){return r.onTouched()})},features:[P([wt]),D]})}}return t})();var It=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=m({type:t})}static{this.\u0275inj=f({})}}return t})();var $e=(()=>{class t{static withConfig(i){return{ngModule:t,providers:[{provide:Le,useValue:i.callSetDisabledState??K}]}}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=m({type:t})}static{this.\u0275inj=f({imports:[It]})}}return t})();function Nt(t,e){if(t&1){let i=ue();o(0,"a",6),A("click",function(){oe(i);let r=de();return se(r.addToCart(r.item))}),p(1,"Add to cart"),s()}}var U=(()=>{class t{constructor(){this.disableAddtoCart=!0,this.itemAdded=0}addToCart(i){let n=JSON.parse(localStorage.getItem("items")||"[]");n.push(i),localStorage.setItem("items",JSON.stringify(n)),console.log("Id",i);let r=parseInt(localStorage.getItem("itemAdded")||"0");r+=1,localStorage.setItem("itemAdded",r.toString()),this.itemAdded=r,console.log(`Item with id: ${i} added to cart. Total items: ${this.itemAdded}`)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-card"]],inputs:{item:"item",disableAddtoCart:"disableAddtoCart"},decls:10,vars:5,consts:[[1,"card",2,"width","18rem"],["alt","...",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["href","#","class","btn btn-primary",3,"click",4,"ngIf"],["href","#",1,"btn","btn-primary",3,"click"]],template:function(n,r){n&1&&(o(0,"div",0),c(1,"img",1),o(2,"div",2)(3,"h5",3),p(4),s(),o(5,"h5",3),p(6),s(),o(7,"p",4),p(8),s(),b(9,Nt,2,0,"a",5),s()()),n&2&&(d(),g("src",r.item.Image,ae),d(3),x(r.item.itemName),d(2),x(r.item.itemPrice),d(2),x(r.item.itemDetail),d(),g("ngIf",r.disableAddtoCart))},dependencies:[_e]})}}return t})();function Ot(t,e){if(t&1&&(o(0,"div",3),c(1,"app-card",4),s()),t&2){let i=e.$implicit;d(),g("item",i)}}var Ze=(()=>{class t{constructor(){this.cartItems=[{itemName:"Wireless Bluetooth Headphones",price:49.99,details:"Noise-cancelling, 20-hour battery life, available in black",Image:"assets/images/headphone.jpg",Id:1},{itemName:"Stainless Steel Water Bottle",price:19.95,details:"32 oz, vacuum insulated, keeps drinks cold for 24 hours",Image:"assets/images/bottle.avif",Id:2},{itemName:"Laptop Stand",price:25,details:"Adjustable height, aluminum alloy material, fits most laptops",Image:"assets/images/laptop_stand.jpg",Id:3},{itemName:"Fitness Tracker Watch",price:39.99,details:"Heart rate monitor, sleep tracking, water-resistant",Image:"assets/images/watch.webp",Id:4},{itemName:"Organic Cotton T-Shirt",price:14.99,details:"Medium size, color: blue, 100% organic cotton",Image:"assets/images/t-shirt.jpeg",Id:5},{itemName:"Organic Cotton T-Shirt",price:14.99,details:"Medium size, color: blue, 100% organic cotton",Image:"assets/images/t-shirt.jpeg",Id:6},{itemName:"Organic Cotton T-Shirt",price:14.99,details:"Medium size, color: blue, 100% organic cotton",Image:"assets/images/t-shirt.jpeg",Id:7},{itemName:"Organic Cotton T-Shirt",price:14.99,details:"Medium size, color: blue, 100% organic cotton",Image:"assets/images/t-shirt.jpeg",Id:8},{itemName:"Organic Cotton T-Shirt",price:14.99,details:"Medium size, color: blue, 100% organic cotton",Image:"assets/images/t-shirt.jpeg",Id:9},{itemName:"Organic Cotton T-Shirt",price:14.99,details:"Medium size, color: blue, 100% organic cotton",Image:"assets/images/t-shirt.jpeg",Id:10}]}ngOnInit(){typeof window<"u"&&window.localStorage?this.itemAdded=Number(localStorage.getItem("itemAdded"))||0:this.itemAdded=0}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-home-component"]],decls:3,vars:2,consts:[["type","number",1,"circular-input",3,"ngModelChange","ngModel"],[1,"cartItem"],["class","itm",4,"ngFor","ngForOf"],[1,"itm"],[3,"item"]],template:function(n,r){n&1&&(o(0,"input",0),pe("ngModelChange",function(h){return he(r.itemAdded,h)||(r.itemAdded=h),h}),s(),o(1,"div",1),b(2,Ot,2,1,"div",2),s()),n&2&&(ce("ngModel",r.itemAdded),d(2),g("ngForOf",r.cartItems))},dependencies:[k,B,ee,Ue,Q,U],styles:[".cartItem[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;gap:20px}.itm[_ngcontent-%COMP%]{flex:1;min-width:250px}.circular-input[_ngcontent-%COMP%]{width:60px;height:60px;background-color:#000;color:#fff;border:none;border-radius:50%;text-align:center;font-size:16px;outline:none}.circular-input[_ngcontent-%COMP%]:focus{box-shadow:0 0 5px #ffffff80}"]})}}return t})();function xt(t,e){if(t&1&&(o(0,"div",2),c(1,"app-card",3),s()),t&2){let i=e.$implicit;d(),g("item",i)("disableAddtoCart",!1)}}var Je=(()=>{class t{constructor(){this.cartList=[]}ngOnInit(){typeof window<"u"&&window.localStorage&&(this.cartList=JSON.parse(localStorage.getItem("items")||"[]"))}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-cart-item"]],decls:4,vars:1,consts:[[1,"cartItem"],["class","itm",4,"ngFor","ngForOf"],[1,"itm"],[3,"item","disableAddtoCart"]],template:function(n,r){n&1&&(o(0,"p"),p(1,"cart-item works!"),s(),o(2,"div",0),b(3,xt,2,2,"div",1),s()),n&2&&(d(3),g("ngForOf",r.cartList))},dependencies:[k,U],styles:[".itm[_ngcontent-%COMP%]{flex:1;min-width:250px}"]})}}return t})();var Pt=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",component:Ze},{path:"cart",component:Je},{path:"**",redirectTo:"/home"}],Xe=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=m({type:t,bootstrap:[T]})}static{this.\u0275inj=f({providers:[Ce()],imports:[ye,be,ve,$e,F.forRoot(Pt)]})}}return t})();var kt=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=m({type:t,bootstrap:[T]})}static{this.\u0275inj=f({imports:[Xe,Ve]})}}return t})();export{kt as a};
