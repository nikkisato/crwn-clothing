(this["webpackJsonpcrwn-clothing"] = this["webpackJsonpcrwn-clothing"] || []).push([[4],{

/***/ "./src/components/directory/directory.component.jsx":
/*!**********************************************************!*\
  !*** ./src/components/directory/directory.component.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu-item/menu-item.component */ "./src/components/menu-item/menu-item.component.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_directory_directory_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/directory /directory.selectors */ "./src/redux/directory /directory.selectors.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _directory_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directory.styles */ "./src/components/directory/directory.styles.jsx");
var _jsxFileName = "/Users/Nikki/alchemy/udemy/zero-mastery/crwn-clothing/src/components/directory/directory.component.jsx";







const Directory = ({
  sections
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_directory_styles__WEBPACK_IMPORTED_MODULE_5__["DirectoryMenuContainer"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, sections.map(({
  id,
  ...otherSectionProps
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({
  key: id
}, otherSectionProps, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}))));

const mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_4__["createStructuredSelector"])({
  sections: _redux_directory_directory_selectors__WEBPACK_IMPORTED_MODULE_3__["selectDirectorySelections"]
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Directory));

/***/ }),

/***/ "./src/components/directory/directory.styles.jsx":
/*!*******************************************************!*\
  !*** ./src/components/directory/directory.styles.jsx ***!
  \*******************************************************/
/*! exports provided: DirectoryMenuContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectoryMenuContainer", function() { return DirectoryMenuContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const DirectoryMenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

/***/ }),

/***/ "./src/components/menu-item/menu-item.component.jsx":
/*!**********************************************************!*\
  !*** ./src/components/menu-item/menu-item.component.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menu_item_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-item.styles */ "./src/components/menu-item/menu-item.styles.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/Nikki/alchemy/udemy/zero-mastery/crwn-clothing/src/components/menu-item/menu-item.component.jsx";




const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu_item_styles__WEBPACK_IMPORTED_MODULE_1__["MenuItemContainer"], {
  size: size,
  onClick: () => history.push(`${match.url}${linkUrl}`),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu_item_styles__WEBPACK_IMPORTED_MODULE_1__["BackgroundImageContainer"], {
  className: "background-image",
  imageUrl: imageUrl,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu_item_styles__WEBPACK_IMPORTED_MODULE_1__["ContentContainer"], {
  className: "content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu_item_styles__WEBPACK_IMPORTED_MODULE_1__["ContentTitle"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 7
  }
}, title.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu_item_styles__WEBPACK_IMPORTED_MODULE_1__["ContentSubtitle"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 7
  }
}, "SHOP NOW")));

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(MenuItem));

/***/ }),

/***/ "./src/components/menu-item/menu-item.styles.jsx":
/*!*******************************************************!*\
  !*** ./src/components/menu-item/menu-item.styles.jsx ***!
  \*******************************************************/
/*! exports provided: MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemContainer", function() { return MenuItemContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundImageContainer", function() { return BackgroundImageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentContainer", function() { return ContentContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTitle", function() { return ContentTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSubtitle", function() { return ContentSubtitle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const MenuItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  height: ${({
  size
}) => size ? '380px' : '240px'};
  min-width: 30%;
  overflow: hidden;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;
const BackgroundImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({
  imageUrl
}) => `url(${imageUrl})`};
`;
const ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;
const ContentTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;
const ContentSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span`
  font-weight: lighter;
  font-size: 16px;
`;

/***/ }),

/***/ "./src/pages/homepage/homepage.component.jsx":
/*!***************************************************!*\
  !*** ./src/pages/homepage/homepage.component.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_directory_directory_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/directory/directory.component */ "./src/components/directory/directory.component.jsx");
/* harmony import */ var _homepage_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage.styles */ "./src/pages/homepage/homepage.styles.jsx");
var _jsxFileName = "/Users/Nikki/alchemy/udemy/zero-mastery/crwn-clothing/src/pages/homepage/homepage.component.jsx";




const HomePage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_homepage_styles__WEBPACK_IMPORTED_MODULE_2__["HomePageContainer"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_directory_directory_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./src/pages/homepage/homepage.styles.jsx":
/*!************************************************!*\
  !*** ./src/pages/homepage/homepage.styles.jsx ***!
  \************************************************/
/*! exports provided: HomePageContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageContainer", function() { return HomePageContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const HomePageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/***/ }),

/***/ "./src/redux/directory /directory.selectors.js":
/*!*****************************************************!*\
  !*** ./src/redux/directory /directory.selectors.js ***!
  \*****************************************************/
/*! exports provided: selectDirectorySelections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDirectorySelections", function() { return selectDirectorySelections; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");


const selectDirectory = state => state.directory;

const selectDirectorySelections = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([selectDirectory], directory => directory.sections);

/***/ })

}]);
//# sourceMappingURL=4.chunk.js.map