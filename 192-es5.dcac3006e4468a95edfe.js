!function(){function t(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==n)return;var i,o,a=[],r=!0,l=!1;try{for(n=n.call(t);!(r=(i=n.next()).done)&&(a.push(i.value),!e||a.length!==e);r=!0);}catch(s){l=!0,o=s}finally{try{r||null==n.return||n.return()}finally{if(l)throw o}}return a}(t,e)||n(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkcv=self.webpackChunkcv||[]).push([[192],{8192:function(n,i,o){"use strict";o.r(i),o.d(i,{HomeModule:function(){return nt}});var l=o(3959),s=o(1116),c=o(8908),p=o(1224),g=function(t){return t[t.experience=0]="experience",t[t.category=1]="category",t}({}),u=o(5243),f=o(9996),d=o(9783);function _(t,e){if(1&t&&(d.TgZ(0,"h1",4),d._uU(1),d.qZA()),2&t){var n=d.oxw();d.xp6(1),d.Oqu(n.name)}}function m(t,e){if(1&t&&(d.TgZ(0,"h2",5),d._uU(1),d.qZA()),2&t){var n=d.oxw();d.xp6(1),d.Oqu(n.position)}}var x=function(){var t=function t(){r(this,t),this.id="user"};return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-avatar-section"]],inputs:{name:"name",position:"position",url:"url",id:"id"},decls:4,vars:3,consts:[["alt","User",1,"user__img",3,"src"],[1,"user__data"],["class","user__name",4,"ngIf"],["class","user__position",4,"ngIf"],[1,"user__name"],[1,"user__position"]],template:function(t,e){1&t&&(d._UZ(0,"img",0),d.TgZ(1,"div",1),d.YNc(2,_,2,1,"h1",2),d.YNc(3,m,2,1,"h2",3),d.qZA()),2&t&&(d.Q6J("src",e.url,d.LSH),d.xp6(2),d.Q6J("ngIf",e.name),d.xp6(1),d.Q6J("ngIf",e.position))},directives:[s.O5],styles:[".user__img[_ngcontent-%COMP%]{max-width:61.63%;max-height:61.63%;border-radius:50%;filter:saturate(0);left:50%;position:relative;transform:translateX(-50%)}.user__name[_ngcontent-%COMP%]{font-size:2rem;grid-area:name;text-align:center;text-transform:uppercase;margin-bottom:0}.user__position[_ngcontent-%COMP%]{font-size:1.4rem;grid-area:position;font-weight:400;text-align:center}@media print,screen and (min-width:640px){.user__img[_ngcontent-%COMP%]{max-height:125px;max-width:125px}.user__data[_ngcontent-%COMP%]{display:none}}"],changeDetection:0}),t}();function h(t,e){if(1&t&&(d.TgZ(0,"h3",4),d._uU(1),d.qZA()),2&t){var n=d.oxw();d.xp6(1),d.Oqu(n.title)}}function Z(t,e){if(1&t&&d._UZ(0,"i",11),2&t){var n=d.oxw().$implicit;d.Q6J("type",n.icon)}}var v=function(t){return{$implicit:t}};function b(t,e){if(1&t&&(d.TgZ(0,"a",12),d.GkF(1,13),d.qZA()),2&t){var n=d.oxw().$implicit;d.oxw(2);var i=d.MAs(5);d.Q6J("href",n.link,d.LSH),d.xp6(1),d.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",d.VKq(3,v,n))}}function y(t,e){if(1&t&&d.GkF(0,13),2&t){var n=d.oxw().$implicit;d.oxw(2);var i=d.MAs(5);d.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",d.VKq(2,v,n))}}function O(t,e){if(1&t&&(d.TgZ(0,"li",7),d.YNc(1,Z,1,1,"i",8),d.YNc(2,b,2,5,"a",9),d.YNc(3,y,1,4,"ng-container",10),d.qZA()),2&t){var n=e.$implicit;d.xp6(1),d.Q6J("ngIf",null==n?null:n.icon),d.xp6(1),d.Q6J("ngIf",n.link),d.xp6(1),d.Q6J("ngIf",!n.link)}}function k(t,e){if(1&t&&(d.TgZ(0,"ul",5),d.YNc(1,O,4,3,"li",6),d.qZA()),2&t){var n=d.oxw();d.xp6(1),d.Q6J("ngForOf",n.list)}}function A(t,e){if(1&t&&(d._uU(0),d.ALo(1,"transloco"),d.TgZ(2,"span",14),d._uU(3),d.ALo(4,"transloco"),d.qZA()),2&t){var n=e.$implicit;d.hij(" ",d.lcZ(1,2,n.title)," "),d.xp6(3),d.Oqu(d.lcZ(4,4,n.level))}}var T=["*"],C=function(){var t=function t(){r(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-information-section"]],inputs:{title:"title",list:"list"},ngContentSelectors:T,decls:6,vars:2,consts:[["class","text-header section__header",4,"ngIf"],["class","section__list",4,"ngIf"],[1,"section__content"],["contentElement",""],[1,"text-header","section__header"],[1,"section__list"],["class","section__element",4,"ngFor","ngForOf"],[1,"section__element"],["theme","fill","class","section__icon","antIcon","",3,"type",4,"ngIf"],["target","_blank","class","section__link",3,"href",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],["theme","fill","antIcon","",1,"section__icon",3,"type"],["target","_blank",1,"section__link",3,"href"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"section__level"]],template:function(t,e){1&t&&(d.F$t(),d.YNc(0,h,2,1,"h3",0),d.YNc(1,k,2,1,"ul",1),d.TgZ(2,"div",2),d.Hsn(3),d.qZA(),d.YNc(4,A,5,6,"ng-template",null,3,d.W1O)),2&t&&(d.Q6J("ngIf",e.title),d.xp6(1),d.Q6J("ngIf",e.list))},directives:[s.O5,s.sg,p.ar,s.tP],pipes:[c.Ot],styles:[".section__header[_ngcontent-%COMP%]{margin-bottom:12px}.section__element[_ngcontent-%COMP%]{width:100%;text-align:center;border-bottom:1.32px solid #362d2e;padding:3.5% 0;position:relative;color:#362d2e}.section__content[_ngcontent-%COMP%], .section__element[_ngcontent-%COMP%]{font-weight:700}.section__link[_ngcontent-%COMP%]{text-decoration:none}.section__icon[_ngcontent-%COMP%]{font-weight:400;position:absolute;left:7%;top:50%;transform:translateY(-50%)}"],changeDetection:0}),t}();function q(t,e){if(1&t&&(d.TgZ(0,"li",7),d._uU(1),d.qZA()),2&t){var n=e.$implicit;d.xp6(1),d.hij(" ",n," ")}}function M(t,e){if(1&t&&(d.TgZ(0,"ul",5),d.YNc(1,q,2,1,"li",6),d.qZA()),2&t){var n=d.oxw();d.xp6(1),d.Q6J("ngForOf",n.skillLevel)}}function w(t,e){if(1&t&&(d.TgZ(0,"p",10),d._uU(1),d.qZA()),2&t){var n=d.oxw(2);d.xp6(1),d.hij(" ",n.additionalSkills," ")}}function P(t,e){if(1&t&&(d.TgZ(0,"div"),d.TgZ(1,"h3",8),d._uU(2),d.qZA(),d.YNc(3,w,2,1,"p",9),d.qZA()),2&t){var n=d.oxw();d.xp6(2),d.Oqu(n.additionalSkillTitle),d.xp6(1),d.Q6J("ngIf",!!n.additionalSkills)}}function Q(t,e){if(1&t&&(d.TgZ(0,"p",10),d._uU(1),d.qZA()),2&t){var n=d.oxw(2);d.xp6(1),d.hij(" ",n.programs," ")}}function I(t,e){if(1&t&&(d.TgZ(0,"div"),d.TgZ(1,"h3",8),d._uU(2),d.qZA(),d.YNc(3,Q,2,1,"p",9),d.qZA()),2&t){var n=d.oxw();d.xp6(2),d.Oqu(n.programsTitle),d.xp6(1),d.Q6J("ngIf",!!n.programs)}}var J=function(){var t=function t(){r(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-skill-section"]],inputs:{skillTitle:"skillTitle",additionalSkillTitle:"additionalSkillTitle",programsTitle:"programsTitle",skillLevel:"skillLevel",additionalSkills:"additionalSkills",programs:"programs"},decls:7,vars:4,consts:[[1,"skill-box"],[1,"text-header","skill-box__title"],["class","section__list skill-box__list",4,"ngIf"],[1,"skill-box__section"],[4,"ngIf"],[1,"section__list","skill-box__list"],["class","skill-box__list-element",4,"ngFor","ngForOf"],[1,"skill-box__list-element"],[1,"text-header"],["class","skill-box__additional-skills",4,"ngIf"],[1,"skill-box__additional-skills"]],template:function(t,e){1&t&&(d.TgZ(0,"div",0),d.TgZ(1,"h3",1),d._uU(2),d.qZA(),d.YNc(3,M,2,1,"ul",2),d.TgZ(4,"div",3),d.YNc(5,P,4,2,"div",4),d.YNc(6,I,4,2,"div",4),d.qZA(),d.qZA()),2&t&&(d.xp6(2),d.Oqu(e.skillTitle),d.xp6(1),d.Q6J("ngIf",!!e.skillLevel),d.xp6(2),d.Q6J("ngIf",!!e.additionalSkillTitle),d.xp6(1),d.Q6J("ngIf",!!e.programsTitle))},directives:[s.O5,s.sg],styles:[".skill-box[_ngcontent-%COMP%]{border-bottom:5px solid #362d2e;border-left:5px solid #362d2e;border-right:5px solid #362d2e;position:relative;margin-top:calc(.85rem - 2.5px)}.skill-box__title[_ngcontent-%COMP%]{top:calc(-.85rem - 2.5px);margin-left:-5px;margin-right:-5px}.skill-box__list[_ngcontent-%COMP%]{margin-bottom:16px;padding:0 25px}.skill-box__additional-skills[_ngcontent-%COMP%]{margin:0;padding:10px 25px;line-height:18px}.skill-box__list-element[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:1% 0;text-transform:uppercase}.skill-box__section[_ngcontent-%COMP%]{background-color:#362d2e;color:#fff;width:calc(100% + 2px);left:-1px;bottom:-1px;position:relative}.skill-box__section[_ngcontent-%COMP%]   .text-header[_ngcontent-%COMP%]{margin:-5px;padding-top:20px;padding-bottom:15px}.skill-box__section[_ngcontent-%COMP%]   .text-header[_ngcontent-%COMP%]:after, .skill-box__section[_ngcontent-%COMP%]   .text-header[_ngcontent-%COMP%]:before{background-color:#fff}"],changeDetection:0}),t}(),L=["*"],j=function(){var t=function t(){r(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-personal-details"]],inputs:{title:"title"},ngContentSelectors:L,decls:3,vars:1,consts:[[1,"personal-details__header"]],template:function(t,e){1&t&&(d.F$t(),d.TgZ(0,"h3",0),d._uU(1),d.qZA(),d.Hsn(2)),2&t&&(d.xp6(1),d.Oqu(e.title))},styles:[".personal-details__header[_ngcontent-%COMP%]{font-size:1.7rem;background-color:#362d2e;color:#fff;position:relative;width:100%;padding:7px 32px;text-transform:uppercase;margin-bottom:25px;transform:translateX(-32px)}"],changeDetection:0}),t}();function U(t,e){if(1&t&&(d.TgZ(0,"span",6),d._uU(1),d.qZA()),2&t){var n=d.oxw(2);d.xp6(1),d.Oqu(n.date.join(" - "))}}function Y(t,e){if(1&t&&(d.TgZ(0,"span",9),d._uU(1),d.qZA()),2&t){var n=d.oxw(3);d.xp6(1),d.hij("- ",n.position,"")}}function S(t,e){if(1&t&&(d.TgZ(0,"h4",7),d._uU(1),d.YNc(2,Y,2,1,"span",8),d.qZA()),2&t){var n=d.oxw(2);d.xp6(1),d.hij(" ",n.title," "),d.xp6(1),d.Q6J("ngIf",n.position)}}function N(t,e){if(1&t&&(d.TgZ(0,"a",10),d._uU(1),d.qZA()),2&t){var n=d.oxw(2);d.Q6J("href","https://"+n.link,d.LSH),d.xp6(1),d.Oqu(n.link)}}var F=function(t,e){return{"title--category":t,"title--experience":e}};function $(t,e){if(1&t&&(d.TgZ(0,"div",2),d.YNc(1,U,2,1,"span",3),d.YNc(2,S,3,2,"h4",4),d.YNc(3,N,2,2,"a",5),d.qZA()),2&t){var n=d.oxw();d.Q6J("ngClass",d.WLB(4,F,n.type===n.titleType.category,n.type===n.titleType.experience)),d.xp6(1),d.Q6J("ngIf",!!n.date),d.xp6(1),d.Q6J("ngIf",!!n.title),d.xp6(1),d.Q6J("ngIf",n.link)}}function z(t,e){if(1&t&&(d.TgZ(0,"a",11),d._uU(1),d.qZA()),2&t){var n=d.oxw();d.Q6J("href","https://"+n.git,d.LSH),d.xp6(1),d.Oqu(n.git)}}var X=function(){var t=function t(){r(this,t),this.type=g.experience,this.titleType=g};return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-category"]],inputs:{date:"date",title:"title",position:"position",git:"git",link:"link",type:"type"},decls:2,vars:2,consts:[[3,"ngClass",4,"ngIf"],["target","_blank","class","title--project",3,"href",4,"ngIf"],[3,"ngClass"],["class","title--date",4,"ngIf"],["class","title--header",4,"ngIf"],["target","_blank",3,"href",4,"ngIf"],[1,"title--date"],[1,"title--header"],["class","position",4,"ngIf"],[1,"position"],["target","_blank",3,"href"],["target","_blank",1,"title--project",3,"href"]],template:function(t,e){1&t&&(d.YNc(0,$,4,7,"div",0),d.YNc(1,z,2,2,"a",1)),2&t&&(d.Q6J("ngIf",e.title||e.position||e.link),d.xp6(1),d.Q6J("ngIf",e.git))},directives:[s.O5,s.mk],styles:['.title--category[_ngcontent-%COMP%], .title--experience[_ngcontent-%COMP%]{position:relative;margin-bottom:8px}.title--category[_ngcontent-%COMP%]:before, .title--experience[_ngcontent-%COMP%]:before{content:"";height:110%;top:50%;transform:translateY(-50%);width:15px;background-color:#362d2e;position:absolute;left:-32px}.title--header[_ngcontent-%COMP%]{margin:0;text-transform:uppercase}.title--date[_ngcontent-%COMP%]{color:rgba(0,0,0,.5);font-size:1.1rem}.title--category[_ngcontent-%COMP%]{margin-top:0}.title--category[_ngcontent-%COMP%]:before{width:5px;left:-12px}.title--project[_ngcontent-%COMP%]{color:rgba(0,0,0,.5)}'],changeDetection:0}),t}(),D=function(t){return{"no-margin":t}};function H(t,e){if(1&t&&(d.TgZ(0,"div",4),d._UZ(1,"app-category",5),d._UZ(2,"p",6),d.qZA()),2&t){var n=e.$implicit,i=d.oxw();d.Q6J("ngClass",d.VKq(5,D,!i.title)),d.xp6(1),d.Q6J("title",n.title)("date",n.date)("type",i.categoryType),d.xp6(1),d.Q6J("innerHTML",n.description,d.oJD)}}var B=function(){var t=function t(){r(this,t),this.subcategory=[],this.categoryType=g.category};return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-experience"]],inputs:{title:"title",date:"date",position:"position",description:"description",subcategory:"subcategory"},decls:5,vars:5,consts:[[3,"date","title","position"],[1,"text-paragraph","experience__description"],[1,"experience__category-wrapper"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[3,"title","date","type"],[1,"text-paragraph",3,"innerHTML"]],template:function(t,e){1&t&&(d._UZ(0,"app-category",0),d.TgZ(1,"p",1),d._uU(2),d.qZA(),d.TgZ(3,"div",2),d.YNc(4,H,3,7,"div",3),d.qZA()),2&t&&(d.Q6J("date",e.date)("title",e.title)("position",e.position),d.xp6(2),d.hij(" ",e.description,"\n"),d.xp6(2),d.Q6J("ngForOf",e.subcategory))},directives:[X,s.sg,s.mk],styles:[".experience__description[_ngcontent-%COMP%]{margin-bottom:12px}.experience__category-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(1,auto);grid-gap:18px;gap:18px;margin-top:12px}@media print,screen and (min-width:720px){.experience__category-wrapper[_ngcontent-%COMP%]{grid-template-columns:repeat(2,auto)}}"],changeDetection:0}),t}(),V=function(){var t=function(){function t(){r(this,t)}return a(t,[{key:"transform",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=arguments.length>2?arguments[2]:void 0;return""===t?"":("string"==typeof t&&t.split(n),Array.isArray(t)&&(t=t.join(e)),t)}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=d.Yjl({name:"join",type:t,pure:!0}),t}();function E(t,e){if(1&t&&d._UZ(0,"app-experience",25),2&t){var n=e.$implicit;d.Q6J("title",n.title)("date",n.date)("position",n.position)("description",n.description)("subcategory",n.subcategory)}}function G(t,e){if(1&t&&d._UZ(0,"app-category",26),2&t){var n=e.$implicit,i=d.oxw(2);d.Q6J("title",n.title)("link",n.link)("git",n.git)("type",i.categoryType)}}function K(t,e){if(1&t&&(d.ynx(0),d.TgZ(1,"aside"),d.TgZ(2,"section",2),d._UZ(3,"app-avatar-section",3),d.ALo(4,"transloco"),d.ALo(5,"transloco"),d.qZA(),d.TgZ(6,"div",4),d.TgZ(7,"section",5),d._UZ(8,"app-information-section",6),d.ALo(9,"transloco"),d.qZA(),d.TgZ(10,"section",7),d._UZ(11,"app-information-section",8),d.ALo(12,"transloco"),d.qZA(),d.TgZ(13,"section",9),d.TgZ(14,"app-information-section",10),d.ALo(15,"transloco"),d.TgZ(16,"p"),d._uU(17),d.ALo(18,"join"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(19,"section",11),d._UZ(20,"app-skill-section",12),d.ALo(21,"transloco"),d.ALo(22,"transloco"),d.ALo(23,"uppercase"),d.ALo(24,"join"),d.ALo(25,"transloco"),d.ALo(26,"uppercase"),d.ALo(27,"join"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(28,"main"),d.TgZ(29,"section",13),d.TgZ(30,"div",14),d.TgZ(31,"h1",15),d._uU(32),d.ALo(33,"transloco"),d.qZA(),d.TgZ(34,"h2",16),d._uU(35),d.ALo(36,"transloco"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(37,"section",17),d.TgZ(38,"app-personal-details",10),d.ALo(39,"transloco"),d.TgZ(40,"p",18),d._uU(41),d.ALo(42,"transloco"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(43,"section",19),d.TgZ(44,"app-personal-details",10),d.ALo(45,"transloco"),d.YNc(46,E,1,5,"app-experience",20),d.qZA(),d.qZA(),d.TgZ(47,"section",21),d.TgZ(48,"app-personal-details",10),d.ALo(49,"transloco"),d.TgZ(50,"div",22),d.ynx(51),d.YNc(52,G,1,4,"app-category",23),d.BQk(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(53,"i",24),d._uU(54),d.ALo(55,"transloco"),d.qZA(),d.qZA(),d.BQk()),2&t){var n=e.ngIf;d.xp6(3),d.Q6J("name",d.lcZ(4,23,"user.name"))("position",d.lcZ(5,25,"user.position")),d.xp6(5),d.Q6J("title",d.lcZ(9,27,"contact.title"))("list",n.contact),d.xp6(3),d.Q6J("title",d.lcZ(12,29,"languages.title"))("list",n.languages),d.xp6(3),d.Q6J("title",d.lcZ(15,31,"hobbies.title")),d.xp6(3),d.Oqu(d.xi3(18,33,n.hobbies,", ")),d.xp6(3),d.Q6J("skillTitle",d.lcZ(21,36,"skills.title"))("skillLevel",n.skills)("additionalSkillTitle",d.lcZ(22,38,"additionalSkills.title"))("additionalSkills",d.lcZ(23,40,d.xi3(24,42,n.additionalSkills,", ")))("programsTitle",d.lcZ(25,45,"programs.title"))("programs",d.lcZ(26,47,d.xi3(27,49,n.programs,", "))),d.xp6(12),d.Oqu(d.lcZ(33,52,"user.name")),d.xp6(3),d.Oqu(d.lcZ(36,54,"user.position")),d.xp6(3),d.Q6J("title",d.lcZ(39,56,"objective.title")),d.xp6(3),d.hij(" ",d.lcZ(42,58,"objective.description")," "),d.xp6(3),d.Q6J("title",d.lcZ(45,60,"experience.title")),d.xp6(2),d.Q6J("ngForOf",n.experience),d.xp6(2),d.Q6J("title",d.lcZ(49,62,"projects.title")),d.xp6(4),d.Q6J("ngForOf",n.projects),d.xp6(2),d.hij(" ",d.lcZ(55,64,"clause")," ")}}var W,R=function(){var n=function(){function n(t,i,o){r(this,n),this._route=t,this._translate=i,this._iconService=o,this.data$=this._translate.selectTranslate(["contact.data","languages.data","hobbies.data","skills.data","additionalSkills.data","programs.data","experience.data","projects.data"]).pipe((0,f.U)(function(t){var n=e(t,8);return{contact:n[0],languages:n[1],hobbies:n[2],skills:n[3],additionalSkills:n[4],programs:n[5],experience:n[6],projects:n[7]}})),this.categoryType=g.category,this.icons=[u.vbK,u.NIM,u.B09,u.QXR,u.bBn]}return a(n,[{key:"ngOnInit",value:function(){this.addIcons(),this.setTranslation()}},{key:"addIcons",value:function(){var e;(e=this._iconService).addIcon.apply(e,t(this.icons))}},{key:"setTranslation",value:function(){var t=this._route.snapshot.paramMap.get("lang");this._translate.setActiveLang("".concat(t))}}]),n}();return n.\u0275fac=function(t){return new(t||n)(d.Y36(l.gz),d.Y36(c.Vn),d.Y36(p.C6))},n.\u0275cmp=d.Xpm({type:n,selectors:[["app-home"]],decls:3,vars:3,consts:[[1,"page"],[4,"ngIf"],["id","user",1,"user"],["url","./assets/img/user.jpg",3,"name","position"],[1,"information-section"],["id","contact"],[3,"title","list"],["id","languages"],[1,"text-uppercase",3,"title","list"],["id","hobbies"],[3,"title"],["id","skill"],[3,"skillTitle","skillLevel","additionalSkillTitle","additionalSkills","programsTitle","programs"],["id","user-name",1,"user-box"],[1,"user-box__wrapper"],[1,"user-box__name"],[1,"user-box__position"],["id","objective"],[1,"text-paragraph"],["id","experience"],[3,"title","date","position","description","subcategory",4,"ngFor","ngForOf"],["id","projects"],[1,"page--projects"],[3,"title","link","git","type",4,"ngFor","ngForOf"],[1,"clause"],[3,"title","date","position","description","subcategory"],[3,"title","link","git","type"]],template:function(t,e){1&t&&(d.TgZ(0,"div",0),d.YNc(1,K,56,66,"ng-container",1),d.ALo(2,"async"),d.qZA()),2&t&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,e.data$)))},directives:[s.O5,x,C,J,j,s.sg,B,X],pipes:[s.Ov,c.Ot,V,s.gd],styles:['aside[_ngcontent-%COMP%], main[_ngcontent-%COMP%]{padding:32px}.page[_ngcontent-%COMP%]{background-color:#fff}aside[_ngcontent-%COMP%]{grid-area:aside;font-size:1.2rem}.information-section[_ngcontent-%COMP%], aside[_ngcontent-%COMP%]{display:flex;flex-direction:column}.information-section[_ngcontent-%COMP%]{height:100%;justify-content:space-between}main[_ngcontent-%COMP%]{grid-area:main;background-color:#e6e6e8;margin-bottom:32px;font-size:1.2rem;position:relative}.user-box[_ngcontent-%COMP%]{display:none}.page--projects[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(1,1fr);grid-gap:18px;gap:18px;margin-top:12px}@media print,screen and (min-width:640px){.page[_ngcontent-%COMP%]{display:grid;grid-template-areas:"aside main";grid-template-columns:300px auto;margin-top:42px}.user-box[_ngcontent-%COMP%]{display:block;position:relative;text-transform:uppercase;height:100px}.user-box[_ngcontent-%COMP%]:after{content:"";height:35px;width:35px;background-color:#e6e6e8;position:absolute;left:-49.5px;top:50%;transform:translateY(-50%) rotate(45deg)}.user-box__wrapper[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%)}.user-box__name[_ngcontent-%COMP%]{font-size:3rem;margin:0 0 15px}.user-box__position[_ngcontent-%COMP%]{font-weight:400;margin:0}.page--projects[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}app-experience[_ngcontent-%COMP%]:not(:last-of-type){display:block;margin-bottom:18px}@media print,screen and (min-width:720px){.page[_ngcontent-%COMP%]{transition:.4s}}@media print,screen and (min-width:209mm){.page[_ngcontent-%COMP%]{width:210mm;height:297mm;overflow:hidden;margin:92px auto}.clause[_ngcontent-%COMP%]{position:absolute;bottom:12px;padding-right:32px}}@media print{.page[_ngcontent-%COMP%], body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{height:297mm}.page[_ngcontent-%COMP%]{margin:0}}'],changeDetection:0}),n}(),tt=function(){var t=function(){function t(e,n){r(this,t),this.router=e,this.transloco=n,this.defaultLang=this.transloco.getDefaultLang(),this.availableLangs=this.transloco.getAvailableLangs()}return a(t,[{key:"canActivate",value:function(t){var e=t.params.lang;return!!this.availableLangs.includes(e)||this.router.parseUrl(this.defaultLang)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(d.LFG(l.F0),d.LFG(c.Vn))},t.\u0275prov=d.Yz7({token:t,factory:t.\u0275fac}),t}(),et=[{path:"",redirectTo:"/en",pathMatch:"full"},{path:":lang",component:R,canActivate:[tt]}],nt=((W=function t(){r(this,t)}).\u0275fac=function(t){return new(t||W)},W.\u0275mod=d.oAB({type:W}),W.\u0275inj=d.cJS({providers:[tt],imports:[[s.ez,l.Bz.forChild(et),c.y4,p.QX]]}),W)}}])}();