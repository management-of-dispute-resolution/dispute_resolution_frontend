(self.webpackChunkdispute_resolution=self.webpackChunkdispute_resolution||[]).push([[270],{"./src/components/DisputeCard/DisputeCard.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return components_DisputeCard_DisputeCard}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router-dom/node_modules/react-router/dist/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),FileList=(__webpack_require__("./src/components/DisputeCard/DisputeCard.css"),__webpack_require__("./src/components/ui-kit/FileList/FileList.jsx")),Menu=__webpack_require__("./src/components/ui-kit/Menu/Menu.jsx"),Button=__webpack_require__("./src/components/ui-kit/Button/Button.jsx"),useOutsideClick=__webpack_require__("./src/hook/useOutsideClick.js"),useAuth=__webpack_require__("./src/hook/useAuth.js"),MessageComments=__webpack_require__("./src/components/MessageComments/MessageComments.jsx"),formatDate=__webpack_require__("./src/utils/formatDate.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),OpponentListTooltip_OpponentListTooltip=function OpponentListTooltip(_ref){var opponents=_ref.opponents,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isHovered=_useState2[0],setIsHovered=_useState2[1];return(0,jsx_runtime.jsxs)("div",{className:"opponents-container",onMouseEnter:function handleMouseEnter(){setIsHovered(!0)},onMouseLeave:function handleMouseLeave(){setIsHovered(!1)},children:["группой ",isHovered&&opponents.length>0&&(0,jsx_runtime.jsx)("div",{className:"opponents-tooltip",children:(0,jsx_runtime.jsx)("ul",{className:"opponents__list\r list-stile-scroll",children:opponents.map((function(opponent){return(0,jsx_runtime.jsx)("li",{className:"opponents__item",children:" ".concat(opponent.last_name," ").concat(opponent.first_name[0],".")},opponent.id)}))})})]})};OpponentListTooltip_OpponentListTooltip.__docgenInfo={description:"",methods:[],displayName:"OpponentListTooltip"};var ui_kit_OpponentListTooltip_OpponentListTooltip=OpponentListTooltip_OpponentListTooltip;function DisputeCard_DisputeCard(_ref){var handleDeleteDispute=_ref.handleDeleteDispute,handleChangeDispute=_ref.handleChangeDispute,creator=_ref.creator,description=_ref.description,status=_ref.status,closedAt=_ref.closed_at,createdAt=_ref.created_at,files=_ref.files,id=_ref.id,onClick=_ref.onClick,isDisputePage=_ref.isDisputePage,opponent=_ref.opponent,last_comment=_ref.last_comment,currentUser=(0,useAuth.a)().currentUser,isDisabled="not_started"!==status;function isCreator(){return currentUser&&currentUser.id===creator.id}function isMediator(){return"mediator"===currentUser.role}function getOpponentText(){return opponent&&opponent.length>1?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["с ",(0,jsx_runtime.jsx)(ui_kit_OpponentListTooltip_OpponentListTooltip,{opponents:opponent})]}):"с ".concat(opponent[0].last_name," ").concat(opponent[0].first_name[0],". ")}var _useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isMenuOpen=_useState2[0],setIsMenuOpen=_useState2[1],navigate=(0,dist.s0)(),toggleMenu=function toggleMenu(){setIsMenuOpen(!isMenuOpen)},menuRef=(0,useOutsideClick.Z)(isMenuOpen,toggleMenu),disputeCardClasses=(0,clsx_m.Z)("dispute-card",{"dispute-card_type_disputePage":isDisputePage}),disputeContainerClasses=(0,clsx_m.Z)("dispute-card__container",{"dispute-card__container_type_disputePage":isDisputePage}),disputeHeaderClasses=(0,clsx_m.Z)("dispute-card__header",{"dispute-card__header_type_disputePage":isDisputePage}),disputeStatusClasses=(0,clsx_m.Z)("dispute-card__status dispute-card__status_type_".concat(status),{"dispute-card__status_type_disputePage":isDisputePage}),disputeContentClasses=(0,clsx_m.Z)("dispute-card__content",{"dispute-card__content_type_disputePage":isDisputePage}),disputeTitleClasses=(0,clsx_m.Z)("dispute-card__title",{"dispute-card__title_type_disputePage":isDisputePage}),closedTimeClasses=(0,clsx_m.Z)("dispute-card__closed-time",{"dispute-card__closed-time_type_disputePage":isDisputePage}),disputeTextClasses=(0,clsx_m.Z)("dispute-card__text",{"dispute-card__text_type_disputePage":isDisputePage,"dispute-card__text_type_disputesPage":!isDisputePage&&isMediator()}),excludedClasses=[disputeCardClasses,disputeContainerClasses,disputeHeaderClasses,disputeStatusClasses,disputeContentClasses,disputeTitleClasses,closedTimeClasses,disputeTextClasses,"message","message__container","message__icon","message__heading","message__text"];function handleClick(evt){isDisputePage?navigate("/disputes"):function isElementExcluded(evt,classNames){return classNames.some((function(className){return className.split(" ").some((function(singleClass){return evt.target.classList.contains(singleClass)}))}))}(evt,excludedClasses)&&onClick(id)}return(0,jsx_runtime.jsx)("div",{className:disputeCardClasses,children:(0,jsx_runtime.jsxs)("div",(0,objectSpread2.Z)((0,objectSpread2.Z)({className:disputeContainerClasses},isDisputePage?{}:{onClick:handleClick,onKeyDown:function handleKeyDown(evt){"Enter"===evt.key&&handleClick(evt)},role:"link",tabIndex:0}),{},{children:[(0,jsx_runtime.jsx)("div",{className:disputeStatusClasses,children:{closed:"Решено",not_started:"Не рассмотрено",started:"В рассмотрении"}[status]}),(0,jsx_runtime.jsxs)("div",{className:disputeContentClasses,children:[(0,jsx_runtime.jsxs)("div",{className:disputeHeaderClasses,children:[(0,jsx_runtime.jsxs)("h2",{className:disputeTitleClasses,children:[function disputeTitle(){var creatorName="".concat(null==creator?void 0:creator.last_name," ").concat(null==creator?void 0:creator.first_name[0],".");return isCreator()?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Конфликт ",getOpponentText()]}):isMediator()?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["".concat(creatorName,": конфликт "),getOpponentText()]}):"Конфликт с ".concat(creatorName)}()," ".concat((0,formatDate.Z)(createdAt))]}),"closed"===status?(0,jsx_runtime.jsx)("p",{className:closedTimeClasses,children:"Решено: ".concat((0,formatDate.Z)(closedAt))}):""]}),(0,jsx_runtime.jsx)("p",{className:disputeTextClasses,children:description}),(0,jsx_runtime.jsx)(FileList.Z,{files:files}),!isDisputePage&&last_comment&&(0,jsx_runtime.jsx)("div",{className:"dispute-card__last-message",children:(0,jsx_runtime.jsx)(MessageComments.Z,{isDisputePage:!0,first_name:null==last_comment?void 0:last_comment.sender.first_name,last_name:null==last_comment?void 0:last_comment.sender.last_name,role:null==last_comment?void 0:last_comment.sender.role,date:null==last_comment?void 0:last_comment.created_at,text:null==last_comment?void 0:last_comment.content,files:[]})})]}),isDisputePage?(0,jsx_runtime.jsx)("button",{onClick:handleClick,className:"dispute-card__close"}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[isCreator()&&"closed"!==status&&(0,jsx_runtime.jsx)("button",{onClick:toggleMenu,className:"dispute-card__option"}),(0,jsx_runtime.jsx)("div",{ref:menuRef,className:"dispute-card__option-container",children:(0,jsx_runtime.jsx)(Menu.Z,{isOpen:isMenuOpen,firstButton:(0,jsx_runtime.jsx)(Button.Z,{size:"small",label:"Редактировать",color:"transperent",type:"button",before:"edit",onClick:function onClick(){return handleChangeDispute(id)},disabled:isDisabled}),secondButton:(0,jsx_runtime.jsx)(Button.Z,{size:"small",label:"Отменить обращение",color:"transperent",type:"button",before:"cancel",onClick:function onClick(){return handleDeleteDispute(id)}})})})]})]}))})}DisputeCard_DisputeCard.defaultProps={closed_at:"",isDisputePage:!1,files:[],handleDeleteDispute:void 0,handleChangeDispute:void 0,last_comment:null},DisputeCard_DisputeCard.__docgenInfo={description:"",methods:[],displayName:"DisputeCard",props:{closed_at:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},isDisputePage:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},files:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"number",required:!0},filename:{name:"string",required:!0},file:{name:"string",required:!0}}}},required:!1},handleDeleteDispute:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},handleChangeDispute:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},last_comment:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"shape",value:{id:{name:"number",required:!0},sender:{name:"shape",value:{first_name:{name:"string",required:!0},last_name:{name:"string",required:!0},role:{name:"string",required:!0}},required:!1},created_at:{name:"string",required:!0},content:{name:"string",required:!0}}},required:!1},id:{description:"",type:{name:"number"},required:!0},status:{description:"",type:{name:"enum",value:[{value:"'closed'",computed:!1},{value:"'started'",computed:!1},{value:"'not_started'",computed:!1}]},required:!0},creator:{description:"",type:{name:"shape",value:{email:{name:"string",required:!1},id:{name:"number",required:!1},first_name:{name:"string",required:!1},last_name:{name:"string",required:!1},phone_number:{name:"string",required:!1},role:{name:"string",required:!1}}},required:!0},opponent:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{email:{name:"string",required:!0},id:{name:"number",required:!0},first_name:{name:"string",required:!0},last_name:{name:"string",required:!0},phone_number:{name:"string",required:!0},role:{name:"string",required:!0}}}},required:!0},description:{description:"",type:{name:"string"},required:!0},created_at:{description:"",type:{name:"string"},required:!0},onClick:{description:"",type:{name:"func"},required:!0}}};var components_DisputeCard_DisputeCard=DisputeCard_DisputeCard},"./src/components/MessageComments/MessageComments.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return components_MessageComments_MessageComments}});__webpack_require__("./node_modules/react/index.js");var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),FileList=__webpack_require__("./src/components/ui-kit/FileList/FileList.jsx"),formatDate=__webpack_require__("./src/utils/formatDate.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function MessageComments_MessageComments(_ref){var first_name=_ref.first_name,last_name=_ref.last_name,role=_ref.role,date=_ref.date,text=_ref.text,files=_ref.files,isDisputePage=_ref.isDisputePage,messageClasses=(0,clsx_m.Z)("message__text",{"message__text_one-line":!isDisputePage&&"mediator"===role,"message__text_two-lines":!isDisputePage&&"mediator"!==role}),userTitle="mediator"===role?"Медиатор ".concat(first_name):"".concat(last_name," ").concat(first_name[0],"."),formatedDate=(0,formatDate.Z)(date,!0),fileListType=isDisputePage?"dispute":"message";return(0,jsx_runtime.jsxs)("div",{className:"message",children:[(0,jsx_runtime.jsx)("div",{className:"message__icon ".concat("mediator"===role&&"message__icon_mediator"),children:(0,jsx_runtime.jsx)("p",{className:"message__icon message__icon_letter",children:first_name[0]})}),(0,jsx_runtime.jsxs)("div",{className:"message__container",children:[(0,jsx_runtime.jsxs)("div",{className:"message__heading",children:[(0,jsx_runtime.jsx)("h2",{className:"message__heading message__heading_name",children:userTitle}),(0,jsx_runtime.jsx)("p",{className:"message__heading message__heading_date",children:formatedDate})]}),(0,jsx_runtime.jsx)("p",{className:messageClasses,children:text}),(0,jsx_runtime.jsx)("div",{className:"message__list-documents",children:(0,jsx_runtime.jsx)(FileList.Z,{files:files,type:fileListType})})]})]})}MessageComments_MessageComments.defaultProps={first_name:"",last_name:"",role:"",date:"",text:"",files:[],isDisputePage:!1},MessageComments_MessageComments.__docgenInfo={description:"",methods:[],displayName:"MessageComments",props:{first_name:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},last_name:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},role:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},date:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},text:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},files:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"number",required:!0},filename:{name:"string",required:!0},file:{name:"string",required:!0}}}},required:!1},isDisputePage:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1}}};var components_MessageComments_MessageComments=MessageComments_MessageComments},"./src/components/ui-kit/Button/Button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return ui_kit_Button_Button}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function Button_Button(_ref){var label=_ref.label,type=_ref.type,onClick=_ref.onClick,size=_ref.size,disabled=_ref.disabled,color=_ref.color,before=_ref.before,backgroundColor=_ref.backgroundColor,props={disabled:disabled,onClick:onClick};return(0,jsx_runtime.jsx)("button",(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{type:type,className:["\n\t\t\t\t button_color_".concat(color,"\n\t\t\t\t button button_size_").concat(size,"\n\t\t\t\t  ").concat(before&&"transperent"===color?"button_before_type_".concat(before," button_content_start"):"","\n\t\t\t\t\t\n\t\t\t\t\t").concat(disabled?"button_disabled_true":"","\n\t\t\t\t")],style:backgroundColor&&{backgroundColor:backgroundColor},children:label}))}Button_Button.defaultProps={type:"button",size:"large",color:"blueLagoon",before:"",onClick:void 0,disabled:!1,backgroundColor:null},Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{defaultValue:{value:"'button'",computed:!1},description:"",type:{name:"enum",value:[{value:"'button'",computed:!1},{value:"'reset'",computed:!1},{value:"'submit'",computed:!1}]},required:!1},size:{defaultValue:{value:"'large'",computed:!1},description:"",type:{name:"enum",value:[{value:"'micro'",computed:!1},{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1},{value:"'mlarge'",computed:!1}]},required:!1},color:{defaultValue:{value:"'blueLagoon'",computed:!1},description:"",type:{name:"enum",value:[{value:"'downy'",computed:!1},{value:"'blueLagoon'",computed:!1},{value:"'blueLagoon-inverted'",computed:!1},{value:"'transperent'",computed:!1}]},required:!1},before:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"union",value:[{name:"enum",value:[{value:"'edit'",computed:!1},{value:"'exit'",computed:!1},{value:"'cancel'",computed:!1},{value:"'changePassword'",computed:!1},{value:"'send'",computed:!1}]},{name:"enum",value:[{value:"''",computed:!1}]}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},label:{description:"",type:{name:"string"},required:!0}}};var ui_kit_Button_Button=Button_Button},"./src/components/ui-kit/Menu/Menu.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return ui_kit_Menu_Menu}});__webpack_require__("./node_modules/react/index.js");var Button=__webpack_require__("./src/components/ui-kit/Button/Button.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Menu_Menu=function Menu(_ref){var isOpen=_ref.isOpen,firstButton=_ref.firstButton,secondButton=_ref.secondButton;return isOpen&&(0,jsx_runtime.jsx)("nav",{className:"menu",children:(0,jsx_runtime.jsxs)("ul",{className:"menu__links",children:[(0,jsx_runtime.jsx)("div",{className:"triangle"}),(0,jsx_runtime.jsx)("li",{className:"menu__link-item",children:firstButton}),(0,jsx_runtime.jsx)("li",{className:"menu__link-item",children:secondButton})]})})};Menu_Menu.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{isOpen:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},firstButton:{defaultValue:{value:'<Button\r\n\tsize="small"\r\n\tlabel="Сменить пароль"\r\n\tcolor="transperent"\r\n\ttype="button"\r\n\tbefore="changePassword"\r\n/>',computed:!1},description:"",type:{name:"element"},required:!1},secondButton:{defaultValue:{value:'<Button\r\n\tsize="small"\r\n\tlabel="Выйти"\r\n\tcolor="transperent"\r\n\ttype="button"\r\n\tbefore="exit"\r\n/>',computed:!1},description:"",type:{name:"element"},required:!1}}};var ui_kit_Menu_Menu=Menu_Menu;Menu_Menu.defaultProps={isOpen:!1,firstButton:(0,jsx_runtime.jsx)(Button.Z,{size:"small",label:"Сменить пароль",color:"transperent",type:"button",before:"changePassword"}),secondButton:(0,jsx_runtime.jsx)(Button.Z,{size:"small",label:"Выйти",color:"transperent",type:"button",before:"exit"})}},"./src/config/constants/errors.js":function(module){module.exports={UNAUTHORIZED_ERROR_CODE:400,UNAUTHORIZED_ERROR_MESSAGE:"Пользователь с таким e-mail или паролем не зарегистрирован",SERVER_ERROR_MESSAGE:"При выполнении запроса произошла ошибка. Попробуйте еще раз или обратитесь к администратору",SUCCESS_MESSAGE:"Изменения сохранены"}},"./src/hok/AuthProvider.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{H:function(){return AuthProvider},V:function(){return AuthContext}});var D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-router-dom/node_modules/react-router/dist/index.js"),_utils_api_user_api__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/utils/api/user.api.js"),_config_constants_errors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/config/constants/errors.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),AuthContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(),AuthProvider=function AuthProvider(_ref){var children=_ref.children,navigate=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.s0)(),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),_useState2=(0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_useState,2),currentUser=_useState2[0],setUser=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),_useState4=(0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_useState3,2),isLoggedIn=_useState4[0],setIsLoggedIn=_useState4[1],_useState5=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),_useState6=(0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_useState5,2),isLoading=_useState6[0],setIsLoading=_useState6[1],_useState7=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),_useState8=(0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_useState7,2),isError=_useState8[0],setIsError=_useState8[1],_useState9=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),_useState10=(0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_useState9,2),isBooted=_useState10[0],setIsBooted=_useState10[1],_useState11=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),_useState12=(0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_useState11,2),isPasswordServerError=_useState12[0],setIsPasswordServerError=_useState12[1],_useState13=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),_useState14=(0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_useState13,2),loginStatus=_useState14[0],setLoginStatus=_useState14[1],_useState15=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),_useState16=(0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_useState15,2),loginServerError=_useState16[0],setloginServerError=_useState16[1],_useState17=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),_useState18=(0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_useState17,2),changePasswordStatus=_useState18[0],setChangePasswordStatus=_useState18[1],_useState19=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),_useState20=(0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_useState19,2),newCardDispute=_useState20[0],setNewCardDispute=_useState20[1],checkAuth=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__.Z)().mark((function _callee(){var userData;return(0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!localStorage.getItem("token")){_context.next=13;break}return _context.prev=1,_context.next=4,(0,_utils_api_user_api__WEBPACK_IMPORTED_MODULE_7__.bG)();case 4:(userData=_context.sent)&&(setUser(userData),setIsLoggedIn(!0),setIsBooted(!0)),_context.next=11;break;case 8:_context.prev=8,_context.t0=_context.catch(1),401===_context.t0.res.status&&(console.log("Ошибка при получении данных пользователя"),localStorage.removeItem("token"),setIsLoggedIn(!1),setIsLoading(!1),setIsBooted(!0));case 11:_context.next=14;break;case 13:setIsBooted(!0);case 14:setIsLoading(!1);case 15:case"end":return _context.stop()}}),_callee,null,[[1,8]])}))),[]),signin=function(){var _ref3=(0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__.Z)().mark((function _callee2(newUser){var reqData,userData;return(0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__.Z)().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return setLoginStatus(""),setIsLoading(!0),_context2.prev=2,_context2.next=5,(0,_utils_api_user_api__WEBPACK_IMPORTED_MODULE_7__.x4)({email:newUser.email,password:newUser.password});case 5:if(!(reqData=_context2.sent)){_context2.next=14;break}return localStorage.setItem("token",reqData.auth_token),_context2.next=10,(0,_utils_api_user_api__WEBPACK_IMPORTED_MODULE_7__.bG)();case 10:userData=_context2.sent,setIsLoggedIn(!0),setUser(userData),navigate("disputes");case 14:_context2.next=19;break;case 16:_context2.prev=16,_context2.t0=_context2.catch(2),401===_context2.t0.res.status||_context2.t0.data.non_field_errors[0].includes("Unable to log in with provided credentials.")?setLoginStatus(_config_constants_errors__WEBPACK_IMPORTED_MODULE_1__.UNAUTHORIZED_ERROR_MESSAGE):setloginServerError(_config_constants_errors__WEBPACK_IMPORTED_MODULE_1__.SERVER_ERROR_MESSAGE);case 19:setIsLoading(!1);case 20:case"end":return _context2.stop()}}),_callee2,null,[[2,16]])})));return function signin(_x){return _ref3.apply(this,arguments)}}(),signout=function(){var _ref4=(0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__.Z)().mark((function _callee3(){return(0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__.Z)().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return setIsLoading(!0),_context3.prev=1,_context3.next=4,(0,_utils_api_user_api__WEBPACK_IMPORTED_MODULE_7__.kS)();case 4:_context3.sent&&(setUser({}),setIsLoggedIn(!1),localStorage.removeItem("token")),_context3.next=11;break;case 8:_context3.prev=8,_context3.t0=_context3.catch(1),console.error("res Error",_context3.t0);case 11:setIsLoading(!1);case 12:case"end":return _context3.stop()}}),_callee3,null,[[1,8]])})));return function signout(){return _ref4.apply(this,arguments)}}(),handleChangePassword=function(){var _ref5=(0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__.Z)().mark((function _callee4(passwordData){var respChangePass;return(0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__.Z)().wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:return setChangePasswordStatus(""),setIsLoading(!0),_context4.prev=2,_context4.next=5,(0,_utils_api_user_api__WEBPACK_IMPORTED_MODULE_7__.Cp)({new_password:passwordData.newPassword,current_password:passwordData.password});case 5:respChangePass=_context4.sent,console.log(respChangePass),setChangePasswordStatus(_config_constants_errors__WEBPACK_IMPORTED_MODULE_1__.SUCCESS_MESSAGE),_context4.next=13;break;case 10:_context4.prev=10,_context4.t0=_context4.catch(2),_context4.t0.data.current_password[0].includes("Invalid password")?(console.log("Неверный текущий пароль"),setIsPasswordServerError("Неправильный пароль"),setChangePasswordStatus("")):setChangePasswordStatus(_config_constants_errors__WEBPACK_IMPORTED_MODULE_1__.SERVER_ERROR_MESSAGE);case 13:setIsLoading(!1);case 14:case"end":return _context4.stop()}}),_callee4,null,[[2,10]])})));return function handleChangePassword(_x2){return _ref5.apply(this,arguments)}}(),value={currentUser:currentUser,isLoggedIn:isLoggedIn,checkAuth:checkAuth,signin:signin,signout:signout,handleChangePassword:handleChangePassword,isLoading:isLoading,setIsLoading:setIsLoading,isError:isError,setIsError:setIsError,isBooted:isBooted,loginStatus:loginStatus,setLoginStatus:setLoginStatus,changePasswordStatus:changePasswordStatus,setChangePasswordStatus:setChangePasswordStatus,setIsPasswordServerError:setIsPasswordServerError,isPasswordServerError:isPasswordServerError,loginServerError:loginServerError,setloginServerError:setloginServerError,newCardDispute:newCardDispute,setNewCardDispute:setNewCardDispute};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AuthContext.Provider,{value:value,children:children})};AuthProvider.__docgenInfo={description:"",methods:[],displayName:"AuthProvider",props:{children:{description:"",type:{name:"element"},required:!0}}}},"./src/hook/useAuth.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{a:function(){return useAuth}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_hok_AuthProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hok/AuthProvider.jsx");function useAuth(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hok_AuthProvider__WEBPACK_IMPORTED_MODULE_1__.V)}},"./src/hook/useOutsideClick.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_exports__.Z=function useOutsideClick(isMenuOpen,closeMenu){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(!isMenuOpen)return function(){};var handleClick=function handleClick(event){ref.current&&!ref.current.contains(event.target)&&(closeMenu(),event.stopPropagation())};return document.addEventListener("click",handleClick,!0),function(){document.removeEventListener("click",handleClick,!0)}})),ref}},"./src/utils/api/requestPattern.api.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{$:function(){return makeRequest}});var D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),responceProcessing=function responceProcessing(res){return res.ok?204===res.status?Promise.resolve(res.status):res.json():res.json().then((function(data){return Promise.reject({res:res,data:data})}))},makeRequest=function(){var _ref=(0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__.Z)((0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__.Z)().mark((function _callee(url,method,body,param){var headers,fetchURL,token,queryParam,value,config,res;return(0,D_practicum_dispute_resolution_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return headers={"Content-Type":"application/json"},fetchURL="https://ccdia.acceleratorpracticum.ru"+url,null!=(token=localStorage.getItem("token"))&&(headers.authorization="Token ".concat(token)),void 0!==param&&(queryParam=param.queryParam,value=param.value,"search"===queryParam?fetchURL+="?search=".concat(value):"pagination"===queryParam&&(fetchURL+="?page=".concat(value.page,"&page_size=").concat(value.size))),config={method:method,headers:headers},void 0!==body&&(config.body=JSON.stringify(body)),_context.next=9,fetch(fetchURL,config);case 9:return res=_context.sent,_context.abrupt("return",responceProcessing(res));case 11:case"end":return _context.stop()}}),_callee)})));return function makeRequest(_x,_x2,_x3,_x4){return _ref.apply(this,arguments)}}()},"./src/utils/api/user.api.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Cp:function(){return changePassword},Rf:function(){return getUsers},bG:function(){return getUserInfo},kS:function(){return logout},x4:function(){return login}});var _requestPattern_api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/api/requestPattern.api.js"),getUsers=function getUsers(param){return(0,_requestPattern_api__WEBPACK_IMPORTED_MODULE_0__.$)("/api/users/","GET",void 0,param)},getUserInfo=function getUserInfo(){return(0,_requestPattern_api__WEBPACK_IMPORTED_MODULE_0__.$)("/api/users/me/","GET",void 0,void 0)},login=function login(_ref2){var email=_ref2.email,password=_ref2.password;return(0,_requestPattern_api__WEBPACK_IMPORTED_MODULE_0__.$)("/api/auth/token/login/","POST",{email:email,password:password},void 0)},logout=function logout(){return(0,_requestPattern_api__WEBPACK_IMPORTED_MODULE_0__.$)("/api/auth/token/logout/","POST",void 0,void 0)},changePassword=function changePassword(_ref3){var new_password=_ref3.new_password,current_password=_ref3.current_password;return(0,_requestPattern_api__WEBPACK_IMPORTED_MODULE_0__.$)("/api/users/set_password/","POST",{new_password:new_password,current_password:current_password},void 0)}},"./src/utils/formatDate.js":function(__unused_webpack_module,__webpack_exports__){"use strict";__webpack_exports__.Z=function formatDate(inputDate,short){var currentDate=new Date,inputDateTime=new Date(inputDate);if(short){return inputDateTime.toLocaleDateString("ru-RU",{day:"numeric",month:"short",hour:"numeric",minute:"numeric"})}var options={day:"numeric",month:"long",year:"numeric"};return currentDate.getFullYear()===inputDateTime.getFullYear()&&(options.year=void 0),inputDateTime.toLocaleDateString("ru-RU",options)}},"./src/components/DisputeCard/DisputeCard.css":function(){}}]);