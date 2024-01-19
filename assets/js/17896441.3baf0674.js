"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[918],{3341:function(e,t,a){a.r(t),a.d(t,{default:function(){return K}});var n=a(7294),l=a(6010),i=a(3783),r=a(9960),s=a(5999);var o=function(e){var t=e.metadata;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(r.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(r.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},c=a(2263),d=a(907),m=a(2822);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function g(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:l},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,a=e.versionMetadata,i=(0,c.Z)().siteConfig.title,r=(0,d.gA)({failfast:!0}).pluginId,s=(0,m.J)(r).savePreferredVersionName,o=(0,d.Jo)(r),u=o.latestDocSuggestion,h=o.latestVersionSuggestion,p=null!=u?u:(t=h).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:i,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(g,{versionLabel:h.label,to:p.path,onClick:function(){return s(h.name)}})))}var p=function(e){var t=e.versionMetadata;return t.banner?n.createElement(h,{versionMetadata:t}):n.createElement(n.Fragment,null)},E=a(1217);function b(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){var t=e.lastUpdatedBy;return n.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function N(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(b,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var k=a(7462),_=a(3366),L="iconEdit_mS5F",Z=["className"],U=function(e){var t=e.className,a=(0,_.Z)(e,Z);return n.createElement("svg",(0,k.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(L,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function C(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(U,null),n.createElement(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var T="tag_WK-t",y="tagRegular_LXbV",M="tagWithCount_S5Zl";var w=function(e){var t,a=e.permalink,i=e.name,s=e.count;return n.createElement(r.Z,{href:a,className:(0,l.Z)(T,(t={},t[y]=!s,t[M]=s,t))},i,s&&n.createElement("span",null,s))},A="tags_NBRY",H="tag_F03v";function x(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(A,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:H},n.createElement(w,{name:t,permalink:a}))}))))}var S="lastUpdated_mt2f";function B(e){return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(x,e)))}function F(e){var t=e.editUrl,a=e.lastUpdatedAt,i=e.lastUpdatedBy,r=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(C,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",S)},(a||i)&&n.createElement(N,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:i})))}function V(e){var t=e.content.metadata,a=t.editUrl,i=t.lastUpdatedAt,r=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,o=t.tags,c=o.length>0,d=!!(a||i||s);return c||d?n.createElement("footer",{className:(0,l.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(B,{tags:o}),d&&n.createElement(F,{editUrl:a,lastUpdatedAt:i,lastUpdatedBy:s,formattedLastUpdatedAt:r})):n.createElement(n.Fragment,null)}var D=a(1575),O="tocCollapsible_aw-L",I="tocCollapsibleButton_zr6a",R="tocCollapsibleContent_0dom",z="tocCollapsibleExpanded_FSiv",P=a(5002);function W(e){var t,a=e.toc,i=e.className,r=e.minHeadingLevel,o=e.maxHeadingLevel,c=(0,m.uR)({initialState:!0}),d=c.collapsed,u=c.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(O,(t={},t[z]=!d,t),i)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",I),onClick:u},n.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:R,collapsed:d},n.createElement(P.Z,{toc:a,minHeadingLevel:r,maxHeadingLevel:o})))}var q=a(9649),J="docItemContainer_oiyr",Y="docItemCol_zHA2",j="tocMobile_Tx6Y";function K(e){var t,a=e.content,r=e.versionMetadata,s=a.metadata,c=a.frontMatter,d=c.image,u=c.keywords,v=c.hide_title,g=c.hide_table_of_contents,h=c.toc_min_heading_level,b=c.toc_max_heading_level,f=s.description,N=s.title,k=!v&&void 0===a.contentTitle,_=(0,i.Z)(),L=!g&&a.toc&&a.toc.length>0,Z=L&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(E.Z,{title:N,description:f,keywords:u,image:d}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(t={},t[Y]=!g,t))},n.createElement(p,{versionMetadata:r}),n.createElement("div",{className:J},n.createElement("article",null,r.badge&&n.createElement("span",{className:(0,l.Z)(m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",r.label),L&&n.createElement(W,{toc:a.toc,minHeadingLevel:h,maxHeadingLevel:b,className:(0,l.Z)(m.kM.docs.docTocMobile,j)}),n.createElement("div",{className:(0,l.Z)(m.kM.docs.docMarkdown,"markdown")},k&&n.createElement(q.N,null,N),n.createElement(a,null)),n.createElement(V,e)),n.createElement(o,{metadata:s}))),Z&&n.createElement("div",{className:"col col--3"},n.createElement(D.Z,{toc:a.toc,minHeadingLevel:h,maxHeadingLevel:b,className:m.kM.docs.docTocDesktop}))))}},9649:function(e,t,a){a.d(t,{N:function(){return u},Z:function(){return v}});var n=a(3366),l=a(7462),i=a(7294),r=a(6010),s=a(5999),o=a(2822),c="anchorWithStickyNavbar_y2LR",d="anchorWithHideOnScrollNavbar_3ly5",m=["id"],u=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,l.Z)({},t,{id:void 0}),t.children))},v=function(e){return"h1"===e?u:(t=e,function(e){var a,u=e.id,v=(0,n.Z)(e,m),g=(0,o.LU)().navbar.hideOnScroll;return u?i.createElement(t,(0,l.Z)({},v,{className:(0,r.Z)("anchor",(a={},a[d]=g,a[c]=!g,a)),id:u}),v.children,i.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+u,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,v)});var t}},1575:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7462),l=a(3366),i=a(7294),r=a(6010),s=a(5002),o="tableOfContents_vrFS",c=["className"];var d=function(e){var t=e.className,a=(0,l.Z)(e,c);return i.createElement("div",{className:(0,r.Z)(o,"thin-scrollbar",t)},i.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),l=a(3366),i=a(7294),r=a(2822),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?i.createElement("ul",{className:l?void 0:a},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,g=e.minHeadingLevel,h=e.maxHeadingLevel,p=(0,l.Z)(e,s),E=(0,r.LU)(),b=null!=g?g:E.tableOfContents.minHeadingLevel,f=null!=h?h:E.tableOfContents.maxHeadingLevel,N=(0,r.DA)({toc:t,minHeadingLevel:b,maxHeadingLevel:f}),k=(0,i.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:b,maxHeadingLevel:f}}),[m,v,b,f]);return(0,r.Si)(k),i.createElement(o,(0,n.Z)({toc:N,className:c,linkClassName:m},p))}}}]);