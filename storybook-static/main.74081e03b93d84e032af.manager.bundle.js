(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{381:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.defaultLayout=exports.defaultFont=exports.defaultBreakpoints=exports.commonPalette=void 0;exports.defaultFont={h1:{fontFamily:'"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:"2em",fontWeight:700,textTransform:"none",lineHeight:1.1,letterSpacing:""},h2:{fontFamily:'"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:"1.5em",fontWeight:700,textTransform:"none",lineHeight:1.1,letterSpacing:""},h3:{fontFamily:'"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:"1.17em",fontWeight:700,textTransform:"none",lineHeight:1.1,letterSpacing:""},h4:{fontFamily:'"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:"1em",fontWeight:700,textTransform:"none",lineHeight:1.1,letterSpacing:""},h5:{fontFamily:'"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:"0.85em",fontWeight:700,textTransform:"none",lineHeight:1.1,letterSpacing:""},h6:{fontFamily:'"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:"0.75em",fontWeight:700,textTransform:"none",lineHeight:1.1,letterSpacing:""},subtitle1:{fontFamily:'"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:"1em",fontWeight:300,textTransform:"none",lineHeight:1.1,letterSpacing:""},subtitle2:{fontFamily:'"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:"1em",fontWeight:300,textTransform:"none",lineHeight:1.1,letterSpacing:""},body1:{fontFamily:'"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:"1em",fontWeight:300,textTransform:"none",lineHeight:1.1,letterSpacing:""},body2:{fontFamily:'"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:"1em",fontWeight:300,textTransform:"none",lineHeight:1.1,letterSpacing:""},caption1:{fontFamily:'"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:"1em",fontWeight:300,textTransform:"none",lineHeight:1.1,letterSpacing:""},caption2:{fontFamily:'"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:"1em",fontWeight:300,textTransform:"none",lineHeight:1.1,letterSpacing:""},code:{fontFamily:'"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:"1em",fontWeight:300,textTransform:"none",lineHeight:1.1,letterSpacing:""},label:{fontFamily:'"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:"0.8em",fontWeight:700,textTransform:"uppercase",lineHeight:1.1,letterSpacing:""}};var defaultBreakpoints={xs:{min:"0",max:"650px"},sm:{min:"650px",max:"960px"},md:{min:"960px",max:"1280px"},lg:{min:"1280px",max:"1400px"},xl:{min:"1400px",max:"1920px"}};exports.defaultBreakpoints=defaultBreakpoints;var defaultLayout={gap:"16pt",gapNegative:"-16pt",gapHalf:"8pt",gapHalfNegative:"-8pt",gapQuarter:"4pt",gapQuarterNegative:"-4pt",pageMargin:"16pt",pageWidth:"750pt",pageWidthWithMargin:"782pt",breakpointMobile:defaultBreakpoints.xs.max,breakpointTablet:defaultBreakpoints.sm.max,radius:"14px",stroke:"2px"};exports.defaultLayout=defaultLayout;exports.commonPalette={white:"#ffffff",black:"#000000",cyanLighter:"#aaffec",cyanLight:"#79ffe1",cyan:"#50e3c2",cyanDark:"#29bc9b",violetLighter:"#e3d7fc",violetLight:"#8a63d2",violet:"#7928ca",violetDark:"#4c2889",purple:"#f81ce5",magenta:"#eb367f"}},475:function(module,exports,__webpack_require__){__webpack_require__(476),__webpack_require__(630),__webpack_require__(860),__webpack_require__(868),__webpack_require__(869),__webpack_require__(861),__webpack_require__(864),__webpack_require__(863),__webpack_require__(865),__webpack_require__(862),__webpack_require__(866),module.exports=__webpack_require__(867)},542:function(module,exports){},630:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(253),_addons=__webpack_require__(62),_light=(_interopRequireDefault(__webpack_require__(646)),_interopRequireDefault(__webpack_require__(655)));_addons.addons.setConfig({theme:_light.default})},646:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(253);exports.__esModule=!0,exports.default=void 0;var _theming=__webpack_require__(1),_dark=_interopRequireDefault(__webpack_require__(654)),_default=(0,_theming.create)({base:"dark",colorPrimary:_dark.default.palette.secondary[500],colorSecondary:_dark.default.palette.primary[500],appBg:_dark.default.palette.background,appContentBg:_dark.default.palette.highlight,appBorderColor:_dark.default.palette.shade,appBorderRadius:4,fontBase:_dark.default.font.body1.fontFamily,fontCode:"monospace",textColor:_dark.default.palette.text,textInverseColor:_dark.default.palette.background,barTextColor:_dark.default.palette.background,barSelectedColor:_dark.default.palette.secondary[500],barBg:_dark.default.palette.primary[500],inputBg:_dark.default.palette.background,inputBorder:_dark.default.palette.shade,inputTextColor:_dark.default.palette.text,inputBorderRadius:4,brandTitle:"Wipsie",brandUrl:"https://wipsie.com",brandImage:"wipsie-logo.svg"});exports.default=_default,module.exports=exports.default},654:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.themes=exports.palette=exports.layout=exports.font=exports.expressiveness=exports.default=exports.breakpoints=void 0,__webpack_require__(14);var _shared=__webpack_require__(381),palette=Object.assign({},_shared.commonPalette,{highlight:"#4F4F4F",background:"#363636",shade:"#292929",subtext:"#C5C5C5",text:"#FFFFFF",basic:{100:"#4F4F4F",300:"#363636",500:"#292929",700:"#000000",900:"#000000",shadow:"#0000003D"},primary:{100:"#EDC8FA",300:"#D781FF",500:"#A52EFF",700:"#6017B7",900:"#2F087A",shadow:"#A52EFF3D"},secondary:{100:"#FFF9D4",300:"#FFE67E",500:"#FFCC29",700:"#B78814",900:"#7A5307",shadow:"#FFCC293D"},success:{100:"#DDF7ED",300:"#6ADFB0",500:"#04CB7B",700:"#027B4A",900:"#004E2F",shadow:"#04CB7B3D"},info:{100:"#D6E4FF",300:"#84A9FF",500:"#3366FF",700:"#1939B7",900:"#091A7A",shadow:"#3366FF3D"},warning:{100:"#FFF7CC",300:"#FFE266",500:"#FFC300",700:"#B78300",900:"#7A5100",shadow:"#FFC3003D"},danger:{100:"#FEE7DA",300:"#FCA491",500:"#F54949",700:"#B0243C",900:"#750E31",shadow:"#F549493D"}});exports.palette=palette;var expressiveness={linkStyle:"none",linkHoverStyle:"none",dropdownBoxShadow:"0 0 0 1px #333",scrollerStart:"rgba(255, 255, 255, 1)",scrollerEnd:"rgba(255, 255, 255, 0)",shadowSmall:"0 10px 20px -10px rgba(255, 255, 255, .15)",shadowMedium:"0 15px 22px -10px rgba(255, 255, 255, 0.15)",shadowLarge:"0 20px 24px -10px rgba(255, 255, 255, 0.15)",portalOpacity:.75};exports.expressiveness=expressiveness;var font=_shared.defaultFont;exports.font=font;var breakpoints=_shared.defaultBreakpoints;exports.breakpoints=breakpoints;var layout=_shared.defaultLayout;exports.layout=layout;var themes={type:"dark",font:font,layout:layout,palette:palette,breakpoints:breakpoints,expressiveness:expressiveness};exports.themes=themes;var _default=themes;exports.default=_default},655:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(253);exports.__esModule=!0,exports.default=void 0;var _theming=__webpack_require__(1),_light=_interopRequireDefault(__webpack_require__(656)),_default=(0,_theming.create)({base:"light",colorPrimary:_light.default.palette.secondary[500],colorSecondary:_light.default.palette.primary[500],appBg:_light.default.palette.background,appContentBg:_light.default.palette.highlight,appBorderColor:_light.default.palette.shade,appBorderRadius:4,fontBase:_light.default.font.body1.fontFamily,fontCode:"monospace",textColor:_light.default.palette.text,textInverseColor:_light.default.palette.background,barTextColor:_light.default.palette.background,barSelectedColor:_light.default.palette.secondary[500],barBg:_light.default.palette.primary[500],inputBg:_light.default.palette.background,inputBorder:_light.default.palette.shade,inputTextColor:_light.default.palette.text,inputBorderRadius:4,brandTitle:"Wipsie",brandUrl:"https://wipsie.com",brandImage:"wipsie-logo.svg"});exports.default=_default,module.exports=exports.default},656:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.themes=exports.palette=exports.layout=exports.font=exports.expressiveness=exports.default=exports.breakpoints=void 0,__webpack_require__(14);var _shared=__webpack_require__(381),palette=Object.assign({},_shared.commonPalette,{highlight:"#F7F9FC",background:"#FFFFFF",shade:"#EEF1F6",subtext:"#818B9F",text:"#000000",basic:{100:"#FFFFFF",300:"#F7F9FC",500:"#EEF1F6",700:"#3A0042",900:"#3A0042",shadow:"#0000003D"},primary:{100:"#FAC8E6",300:"#E15AC5",500:"#9C0097",700:"#600070",900:"#32004A",shadow:"#9C00973D"},secondary:{100:"#FFF9D4",300:"#FFE67E",500:"#FFCC29",700:"#B78814",900:"#7A5307",shadow:"#FFCC293D"},success:{100:"#DDF7ED",300:"#6ADFB0",500:"#04CB7B",700:"#027B4A",900:"#004E2F",shadow:"#04CB7B3D"},info:{100:"#D6E4FF",300:"#84A9FF",500:"#3366FF",700:"#1939B7",900:"#091A7A",shadow:"#3366FF3D"},warning:{100:"#FFF7CC",300:"#FFE266",500:"#FFC300",700:"#B78300",900:"#7A5100",shadow:"#FFC3003D"},danger:{100:"#FEE7DA",300:"#FCA491",500:"#F54949",700:"#B0243C",900:"#750E31",shadow:"#F549493D"}});exports.palette=palette;var expressiveness={linkStyle:"none",linkHoverStyle:"none",dropdownBoxShadow:"0 0 0 1px #333",scrollerStart:"rgba(255, 255, 255, 1)",scrollerEnd:"rgba(255, 255, 255, 0)",shadowSmall:"0 10px 20px -10px rgba(255, 255, 255, .15)",shadowMedium:"0 15px 22px -10px rgba(255, 255, 255, 0.15)",shadowLarge:"0 20px 24px -10px rgba(255, 255, 255, 0.15)",portalOpacity:.75};exports.expressiveness=expressiveness;var font=_shared.defaultFont;exports.font=font;var breakpoints=_shared.defaultBreakpoints;exports.breakpoints=breakpoints;var layout=_shared.defaultLayout;exports.layout=layout;var themes={type:"light",font:font,layout:layout,palette:palette,breakpoints:breakpoints,expressiveness:expressiveness};exports.themes=themes;var _default=themes;exports.default=_default}},[[475,2,3]]]);