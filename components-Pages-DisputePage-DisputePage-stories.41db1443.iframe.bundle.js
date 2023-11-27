"use strict";(self.webpackChunkdispute_resolution=self.webpackChunkdispute_resolution||[]).push([[43],{"./src/components/Pages/DisputePage/DisputePage.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaltDisputePage:function(){return DefaltDisputePage},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return DisputePage_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),regeneratorRuntime=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router-dom/node_modules/react-router/dist/index.js"),Preloader=__webpack_require__("./src/components/Preloader/Preloader.jsx"),DisputeCard=__webpack_require__("./src/components/DisputeCard/DisputeCard.jsx"),ListMessageComments=__webpack_require__("./src/components/ListMessageComments/ListMessageComments.jsx"),CommentForm=__webpack_require__("./src/components/ui-kit/CommentForm/CommentForm.jsx"),Button=__webpack_require__("./src/components/ui-kit/Button/Button.jsx"),InfoToolTip=__webpack_require__("./src/components/ui-kit/InfoToolTip/InfoToolTip.jsx"),massage={DEFAULT:{isOpen:!1,isSuccess:!1,doneText:"",errorText:""},GENERAL_ERROR:{isOpen:!0,isSuccess:!1,doneText:"",errorText:""},GENERAL_SUCCESS:{isOpen:!0,isSuccess:!1,doneText:"",errorText:""},CLOSE_SUCCESS:{isOpen:!0,isSuccess:!0,doneText:"Обращение закрыто",errorText:""},NOT_STARTED:{isOpen:!0,isSuccess:!1,doneText:"",errorText:"Диспут еще не начат"},ALREADY_CLOSED:{isOpen:!0,isSuccess:!1,doneText:"",errorText:"Диспут уже закрыт"},ADD_OPPONENT:{isOpen:!0,isSuccess:!0,doneText:"Оппонент добавлен в диспут",errorText:""}},useAuth=__webpack_require__("./src/hook/useAuth.js"),handleFormDataRequest=function(){var _ref=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(url,method,data){var headers,token,config,res;return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return headers={},null!=(token=localStorage.getItem("token"))&&(headers.authorization="Token ".concat(token)),config={method:method,headers:headers},void 0!==data&&(config.body=data),_context.next=7,fetch("".concat("https://ccdia.acceleratorpracticum.ru").concat(url),config).then((function(resp){return resp.json()}));case 7:return res=_context.sent,_context.abrupt("return",res);case 9:case"end":return _context.stop()}}),_callee)})));return function handleFormDataRequest(_x,_x2,_x3){return _ref.apply(this,arguments)}}(),requestPattern_api=__webpack_require__("./src/utils/api/requestPattern.api.js"),getDisputeId=function getDisputeId(id){return(0,requestPattern_api.$)("/api/disputes/".concat(id,"/"),"GET",void 0)},changeStatusDisputeId=function changeStatusDisputeId(_ref2){var id=_ref2.id,status=_ref2.status;return(0,requestPattern_api.$)("/api/disputes/".concat(id,"/"),"PATCH",{status:status})},addOpponentDisputeId=function addOpponentDisputeId(_ref4){var id=_ref4.id,add_opponent=_ref4.add_opponent;return(0,requestPattern_api.$)("/api/disputes/".concat(id,"/"),"PATCH",{add_opponent:add_opponent})},getComments=function getComments(dispute_id){return(0,requestPattern_api.$)("/api/disputes/".concat(dispute_id,"/comments/"),"GET",void 0)},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),DisputePage_DisputePage=function DisputePage(){var navigate=(0,dist.s0)(),_useState=(0,react.useState)(),_useState2=(0,slicedToArray.Z)(_useState,2),dispute=_useState2[0],setDispute=_useState2[1],_useState3=(0,react.useState)(),_useState4=(0,slicedToArray.Z)(_useState3,2),comments=_useState4[0],setComments=_useState4[1],_useAuth=(0,useAuth.a)(),isLoading=_useAuth.isLoading,setIsLoading=_useAuth.setIsLoading,currentUser=_useAuth.currentUser,state=(0,dist.TH)().state,id=(0,dist.UO)().id,_useState5=(0,react.useState)(massage.DEFAULT),_useState6=(0,slicedToArray.Z)(_useState5,2),info=_useState6[0],setInfo=_useState6[1],handleSendComment=function(){var _ref=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(data){var newComment,res;return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if("started"===dispute.status){_context.next=4;break}return"closed"===dispute.status&&setInfo(massage.ALREADY_CLOSED),"not_started"===dispute.status&&setInfo(massage.NOT_STARTED),_context.abrupt("return");case 4:return(newComment=new FormData).append("content",data.content),data.file.forEach((function(item){newComment.append("uploaded_files",item)})),_context.prev=7,_context.next=10,handleFormDataRequest("/api/disputes/".concat(id,"/comments/"),"POST",newComment);case 10:if((res=_context.sent).content===data.content){_context.next=13;break}throw new Error(res.content);case 13:window.location.reload(),_context.next=20;break;case 16:_context.prev=16,_context.t0=_context.catch(7),console.error("res Error ",_context.t0),setInfo((0,objectSpread2.Z)((0,objectSpread2.Z)({},massage.GENERAL_ERROR),{},{errorText:_context.t0||_context.t0.status}));case 20:case"end":return _context.stop()}}),_callee,null,[[7,16]])})));return function handleSendComment(_x){return _ref.apply(this,arguments)}}(),handleChangeStatus=function(){var _ref2=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee2(status){return(0,regeneratorRuntime.Z)().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.prev=0,_context2.next=3,changeStatusDisputeId({id:id,status:status});case 3:setDispute((function(prev){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},prev),{},{status:status})})),_context2.next=10;break;case 6:_context2.prev=6,_context2.t0=_context2.catch(0),console.error("res Error ",_context2.t0),setInfo((0,objectSpread2.Z)((0,objectSpread2.Z)({},massage.GENERAL_ERROR),{},{errorText:_context2.t0.data.detail||_context2.t0.status}));case 10:case"end":return _context2.stop()}}),_callee2,null,[[0,6]])})));return function handleChangeStatus(_x2){return _ref2.apply(this,arguments)}}(),handleAddOpponent=function(){var _ref3=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee3(id){var res;return(0,regeneratorRuntime.Z)().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.prev=0,_context3.next=3,addOpponentDisputeId({id:id,add_opponent:!0});case 3:res=_context3.sent,setDispute((function(prev){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},prev),{},{res:res})})),setInfo(massage.ADD_OPPONENT),_context3.next=12;break;case 8:_context3.prev=8,_context3.t0=_context3.catch(0),console.error("res Error ",_context3.t0),setInfo((0,objectSpread2.Z)((0,objectSpread2.Z)({},massage.GENERAL_ERROR),{},{errorText:_context3.t0.status}));case 12:case"end":return _context3.stop()}}),_callee3,null,[[0,8]])})));return function handleAddOpponent(_x3){return _ref3.apply(this,arguments)}}(),handleCloseDispute=function(){var _ref4=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee4(status){return(0,regeneratorRuntime.Z)().wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:return _context4.prev=0,_context4.next=3,changeStatusDisputeId({id:id,status:status});case 3:setDispute((function(prev){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},prev),{},{status:status})})),setInfo(massage.CLOSE_SUCCESS),_context4.next=11;break;case 7:_context4.prev=7,_context4.t0=_context4.catch(0),console.error("res Error ",_context4.t0),setInfo((0,objectSpread2.Z)((0,objectSpread2.Z)({},massage.GENERAL_ERROR),{},{errorText:_context4.t0.status}));case 11:case"end":return _context4.stop()}}),_callee4,null,[[0,7]])})));return function handleCloseDispute(_x4){return _ref4.apply(this,arguments)}}(),checkAccess=function checkAccess(disputeData){return!!(currentUser.id===disputeData.creator.id||disputeData.opponent.some((function(opponent){return currentUser.id===opponent.id}))&&!0===disputeData.add_opponent||"mediator"===currentUser.role)};return(0,react.useEffect)((function(){(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee5(){var disputeData,commentsData;return(0,regeneratorRuntime.Z)().wrap((function _callee5$(_context5){for(;;)switch(_context5.prev=_context5.next){case 0:return setIsLoading(!0),_context5.prev=1,_context5.next=4,getDisputeId(id);case 4:return disputeData=_context5.sent,_context5.next=7,getComments(id);case 7:if(commentsData=_context5.sent,setDispute(disputeData),setComments(commentsData),checkAccess(disputeData)){_context5.next=12;break}throw new Error("Access denied");case 12:_context5.next=18;break;case 14:_context5.prev=14,_context5.t0=_context5.catch(1),console.error("error:",_context5.t0),navigate("/disputes");case 18:return _context5.prev=18,setIsLoading(!1),_context5.finish(18);case 21:case"end":return _context5.stop()}}),_callee5,null,[[1,14,18,21]])})))()}),[id,navigate]),isLoading||!dispute?(0,jsx_runtime.jsx)(Preloader.Z,{}):(0,jsx_runtime.jsxs)("div",{className:"dispute-page",children:[(0,jsx_runtime.jsxs)("section",{className:"dispute-page__card-section",children:[(0,jsx_runtime.jsx)(DisputeCard.Z,(0,objectSpread2.Z)((0,objectSpread2.Z)({},dispute),{},{files:dispute.file,isDisputePage:!0,onClick:function onClick(){}})),(null==state?void 0:state.createMessage)&&"new"===state.createMessage&&(0,jsx_runtime.jsx)("h2",{className:"createdDispute",children:"Обращение создано"}),(null==state?void 0:state.createMessage)&&"edit"===state.createMessage&&(0,jsx_runtime.jsx)("h2",{className:"createdDispute",children:"Изменения сохранены"})]}),(0,jsx_runtime.jsx)(ListMessageComments.Z,{comments:comments,isDisputePage:!0}),(0,jsx_runtime.jsx)(CommentForm.Z,{user:currentUser,onSend:handleSendComment}),"mediator"===currentUser.role&&(0,jsx_runtime.jsxs)("div",{className:"dispute-page__panel",children:[(0,jsx_runtime.jsx)(Button.Z,{label:"Взять в рассмотрение",color:"blueLagoon-inverted",size:"large",onClick:function onClick(){return handleChangeStatus("started")},type:"button",disabled:"started"===dispute.status}),(0,jsx_runtime.jsx)(Button.Z,{label:"Добавить оппонента",color:"blueLagoon-inverted",size:"large",onClick:function onClick(){return handleAddOpponent(id)},type:"button",disabled:"started"!==dispute.status||dispute.add_opponent}),(0,jsx_runtime.jsx)(Button.Z,{label:"Закрыть обращение",size:"large",type:"button",onClick:function onClick(){return handleCloseDispute("closed")},disabled:"started"!==dispute.status||0===comments.length})]}),(0,jsx_runtime.jsx)(InfoToolTip.C,(0,objectSpread2.Z)((0,objectSpread2.Z)({},info),{},{onClose:function onCloseInfo(){setInfo((function(prev){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},prev),massage.DEFAULT)}))}}))]})};DisputePage_DisputePage.__docgenInfo={description:"",methods:[],displayName:"DisputePage"};var _DefaltDisputePage$pa,_DefaltDisputePage$pa2,_DefaltDisputePage$pa3,DisputePage_stories={title:"Dispute_Resolution/Pages/DisputePage",component:DisputePage_DisputePage},DefaltDisputePage={args:{card:{id:0,creator:"Конфликт с Ивановым И.",created_at:"6 октября",description:"Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов Л.П. оскорбил меня и непотребно себя повел: я попрос Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов Л.П. оскорбил меня и непотребно себя повел: я попросил предоставить мне копии платежных документов для направления контрагентам , на что Смирнов Л.Пил предоставить мне копии платежных документов для направления контрагентам , на что Смирнов Л.П...Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов м , на что Смирнов Л.П...Довожу до вашего сведения, что 5 октября главный... ",status:"started",closed_at:"1 июля 11:37",files:["https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg","https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.pdf","https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg","https://upload.wikimedia.org/wikipedia/commons/1/13/Saturn_during_Equinox_%28rot45%29.pdf"]},comments:[{name:"Измайлов В.",date:"8 окт в 18:13",text:"Здесь отображается какой-нибудь последний комментарий, совсем чуть-чуточку, ограничение, наверно, буквально в какие-нибудь пару строчичек, возможно, написано...Здесь отображается какой-нибудь последний комментарий, совсем чуть-чуточку, ограничение, какое-нибудь завершение обращения",files:[{linkFile:"/",nameFile:"Название документа.pdf"},{linkFile:"/",nameFile:"Название документа.jpg"}]},{name:"Измайлов В.",date:"8 окт в 18:13",text:"Здесь отображается какой-нибудь последний комментарий, совсем чуть-чуточку, ограничение, наверно, буквально в какие-нибудь пару строчичек, возможно, написано...Здесь отображается какой-нибудь последний комментарий, совсем чуть-чуточку, ограничение, какое-нибудь завершение обращения",files:[{linkFile:"/",nameFile:"Название документа.pdf"},{linkFile:"/",nameFile:"Название документа.jpg"}]}],user:{firstName:"Иван",lastName:"Иванов"}}};DefaltDisputePage.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},DefaltDisputePage.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_DefaltDisputePage$pa=DefaltDisputePage.parameters)||void 0===_DefaltDisputePage$pa?void 0:_DefaltDisputePage$pa.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    card: {\n      id: 0,\n      creator: 'Конфликт с Ивановым И.',\n      created_at: '6 октября',\n      description: 'Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов Л.П. оскорбил меня и непотребно себя повел: я попрос Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов Л.П. оскорбил меня и непотребно себя повел: я попросил предоставить мне копии платежных документов для направления контрагентам , на что Смирнов Л.Пил предоставить мне копии платежных документов для направления контрагентам , на что Смирнов Л.П...Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов м , на что Смирнов Л.П...Довожу до вашего сведения, что 5 октября главный... ',\n      status: 'started',\n      closed_at: '1 июля 11:37',\n      files: ['https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.pdf', 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/13/Saturn_during_Equinox_%28rot45%29.pdf']\n    },\n    comments: [{\n      name: 'Измайлов В.',\n      date: '8 окт в 18:13',\n      text: 'Здесь отображается какой-нибудь последний комментарий, совсем чуть-чуточку, ограничение, наверно, буквально в какие-нибудь пару строчичек, возможно, написано...Здесь отображается какой-нибудь последний комментарий, совсем чуть-чуточку, ограничение, какое-нибудь завершение обращения',\n      files: [{\n        linkFile: '/',\n        nameFile: 'Название документа.pdf'\n      }, {\n        linkFile: '/',\n        nameFile: 'Название документа.jpg'\n      }]\n    }, {\n      name: 'Измайлов В.',\n      date: '8 окт в 18:13',\n      text: 'Здесь отображается какой-нибудь последний комментарий, совсем чуть-чуточку, ограничение, наверно, буквально в какие-нибудь пару строчичек, возможно, написано...Здесь отображается какой-нибудь последний комментарий, совсем чуть-чуточку, ограничение, какое-нибудь завершение обращения',\n      files: [{\n        linkFile: '/',\n        nameFile: 'Название документа.pdf'\n      }, {\n        linkFile: '/',\n        nameFile: 'Название документа.jpg'\n      }]\n    }],\n    user: {\n      firstName: 'Иван',\n      lastName: 'Иванов'\n    }\n  }\n}"},null===(_DefaltDisputePage$pa2=DefaltDisputePage.parameters)||void 0===_DefaltDisputePage$pa2||null===(_DefaltDisputePage$pa3=_DefaltDisputePage$pa2.docs)||void 0===_DefaltDisputePage$pa3?void 0:_DefaltDisputePage$pa3.source)})});var __namedExportsOrder=["DefaltDisputePage"]},"./src/components/ListMessageComments/ListMessageComments.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return components_ListMessageComments_ListMessageComments}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),MessageComments=__webpack_require__("./src/components/MessageComments/MessageComments.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["comments"];function ListMessageComments_ListMessageComments(_ref){var comments=_ref.comments,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsx)("section",{className:"comments",children:(0,toConsumableArray.Z)(comments).reverse().map((function(comment){return(0,react.createElement)(MessageComments.Z,(0,objectSpread2.Z)((0,objectSpread2.Z)((0,objectSpread2.Z)({},comment),props),{},{key:comment.id,last_name:comment.sender.last_name,first_name:comment.sender.first_name,role:comment.sender.role,date:comment.created_at,text:comment.content,files:comment.file}))}))})}ListMessageComments_ListMessageComments.defaultProps={comments:[]},ListMessageComments_ListMessageComments.__docgenInfo={description:"",methods:[],displayName:"ListMessageComments",props:{comments:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"instanceOf",value:"Array"},required:!1}}};var components_ListMessageComments_ListMessageComments=ListMessageComments_ListMessageComments},"./src/components/Preloader/Preloader.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return components_Preloader_Preloader}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Preloader_Preloader(){return(0,jsx_runtime.jsx)("div",{className:"preloader",children:(0,jsx_runtime.jsx)("div",{className:"preloader__container",children:(0,jsx_runtime.jsx)("span",{className:"preloader__round"})})})}Preloader_Preloader.__docgenInfo={description:"",methods:[],displayName:"Preloader"};var components_Preloader_Preloader=Preloader_Preloader},"./src/components/ui-kit/InfoToolTip/InfoToolTip.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{C:function(){return InfoToolTip_InfoToolTip}});__webpack_require__("./node_modules/react/index.js");var PopupWrapper=__webpack_require__("./src/components/ui-kit/PopupWrapper/PopupWrapper.jsx");var Done=__webpack_require__.p+"static/media/Done.93fc5daab86d8d6c20894442dbbc3dce.svg";var Error=__webpack_require__.p+"static/media/Error.d6a19deca19275a687f45c6b1b464e9d.svg",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InfoToolTip_InfoToolTip=function InfoToolTip(_ref){var isOpen=_ref.isOpen,onClose=_ref.onClose,isSuccess=_ref.isSuccess,doneText=_ref.doneText,errorText=_ref.errorText;return(0,jsx_runtime.jsx)(PopupWrapper.S,{isOpen:isOpen,onClose:onClose,type:"info",children:(0,jsx_runtime.jsxs)("div",{className:"info-tool-tip__container",children:[(0,jsx_runtime.jsx)("img",{className:"info-tool-tip__image",src:"".concat(isSuccess?Done:Error),alt:"Знак успешности выполнения"}),(0,jsx_runtime.jsx)("h2",{className:"info-tool-tip__title",children:"".concat(isSuccess?doneText:errorText)})]})})};InfoToolTip_InfoToolTip.__docgenInfo={description:"",methods:[],displayName:"InfoToolTip",props:{isOpen:{description:"",type:{name:"bool"},required:!0},onClose:{description:"",type:{name:"func"},required:!0},isSuccess:{description:"",type:{name:"bool"},required:!0},doneText:{description:"",type:{name:"string"},required:!0},errorText:{description:"",type:{name:"string"},required:!0}}}},"./src/components/ui-kit/PopupWrapper/PopupWrapper.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{S:function(){return PopupWrapper_PopupWrapper}});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),PopupWrapper_PopupWrapper=function PopupWrapper(_ref){var isOpen=_ref.isOpen,onClose=_ref.onClose,type=_ref.type,children=_ref.children;return(0,react.useEffect)((function(){if(isOpen){var handleESC=function handleESC(evt){"Escape"===evt.key&&onClose()};return document.addEventListener("keydown",handleESC),function(){return document.removeEventListener("keydown",handleESC)}}}),[isOpen,onClose]),(0,jsx_runtime.jsx)("div",{className:"popup ".concat(isOpen?"popup_opened":""),role:"button",tabIndex:0,onMouseDown:function onMouseDown(evt){return evt.target===evt.currentTarget&&onClose()},children:(0,jsx_runtime.jsxs)("div",{className:"popup__container",children:[(0,jsx_runtime.jsx)("button",{className:"popup__close-btn ".concat("form"===type?"popup__close-btn_visible":""),type:"button","aria-label":"Кнопка закрытия модального окна",onClick:onClose}),children]})})};PopupWrapper_PopupWrapper.defaultProps={isOpen:!1,onClose:void 0,type:"form"},PopupWrapper_PopupWrapper.__docgenInfo={description:"",methods:[],displayName:"PopupWrapper",props:{isOpen:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onClose:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},type:{defaultValue:{value:"'form'",computed:!1},description:"",type:{name:"enum",value:[{value:"'info'",computed:!1},{value:"'form'",computed:!1}]},required:!1},children:{description:"",type:{name:"element"},required:!0}}}}}]);