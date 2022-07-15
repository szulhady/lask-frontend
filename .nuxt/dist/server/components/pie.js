exports.ids = [11];
exports.modules = {

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(265);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("602e4562", content, true, context)
};

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pie_vue_vue_type_style_index_0_id_2f902cbf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(204);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pie_vue_vue_type_style_index_0_id_2f902cbf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pie_vue_vue_type_style_index_0_id_2f902cbf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pie_vue_vue_type_style_index_0_id_2f902cbf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pie_vue_vue_type_style_index_0_id_2f902cbf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.v-card__subtitle[data-v-2f902cbf] {\r\n  font-size: 0.9em;\r\n  padding: 0px 0px 0px 40px;\r\n  color: aliceblue;\n}\ncanvas[data-v-2f902cbf] {\r\n  width: 100%;\n}\r\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pie.vue?vue&type=template&id=2f902cbf&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "level"
  }, [_vm._ssrNode("<div id=\"pie\"" + _vm._ssrAttr("data", _vm.data) + " style=\"width: 25vw; height: 30vh\" data-v-2f902cbf></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Pie.vue?vue&type=template&id=2f902cbf&scoped=true&

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pie.vue?vue&type=script&lang=js&
/* harmony default export */ var Pievue_type_script_lang_js_ = ({
  data() {
    return {
      option: {
        tooltip: {
          trigger: "item"
        },
        legend: {
          top: "15%",
          // left: "center",
          orient: "vertical",
          right: 50,
          textStyle: {
            fontSize: 14,
            color: "#fff"
          },
          itemGap: 40
        },
        series: [{
          name: "Attempts",
          type: "pie",
          radius: ["50%", "80%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2
          },
          label: {
            show: false,
            position: "center"
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "16",
              fontWeight: "bold",
              color: "white"
            }
          },
          labelLine: {
            show: false
          },
          data: [{
            value: 1048,
            name: "Accurate"
          }, {
            value: 735,
            name: "Acceptable"
          }, {
            value: 580,
            name: "Fail"
          }],
          center: ["25%", "50%"]
        }]
      }
    };
  },

  mounted() {
    setTimeout(() => {
      var myChart = this.$echarts.init(document.getElementById("pie"));
      myChart.setOption(this.option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }, 1);
  },

  updated() {
    const option = {
      tooltip: {
        trigger: "item"
      },
      legend: {
        top: "15%",
        // left: "center",
        orient: "vertical",
        right: 50,
        textStyle: {
          fontSize: 14,
          color: "#fff"
        },
        itemGap: 40
      },
      series: [{
        name: "Attempts",
        type: "pie",
        radius: ["50%", "80%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2
        },
        label: {
          show: false,
          position: "center"
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "16",
            fontWeight: "bold",
            color: "white"
          }
        },
        labelLine: {
          show: false
        },
        data: [{
          value: 1048,
          name: "Accurate"
        }, {
          value: 735,
          name: "Acceptable"
        }, {
          value: 580,
          name: "Fail"
        }],
        center: ["25%", "50%"]
      }]
    };
    var myChart = this.$echarts.init(document.getElementById("pie"));
    myChart.setOption(option, true); // console.log(this.data)
  },

  props: ["data", "yAxis", "max", "time"]
});
// CONCATENATED MODULE: ./components/Pie.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Pievue_type_script_lang_js_ = (Pievue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/Pie.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(264)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Pievue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2f902cbf",
  "a6070d2e"
  
)

/* harmony default export */ var Pie = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=pie.js.map