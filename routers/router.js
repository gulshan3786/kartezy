const express = require("express");
const router = express.Router();

const { registrationGet, registrationPost } = require("../controllers/authentication.contrllers/registration.controller");
const ordersGet = require("../controllers/order.controllers/orderFromKart.controller");
const orderFromCartController = require("../controllers/order.controllers/orderFromKart.controller");
const particularOrderGet = require("../controllers/order.controllers/particularOrder.controller");
const cartController = require('../controllers/cart.contoller/cart.contoller')
const checkoutController = require('../controllers/checkout.controller/checkout.controller')
const { getProductInfo, productView } = require("../controllers/product.controllers/product.controller");
const homeController = require("../controllers/home.contollers/home.contoller");
const vendorController = require("../controllers/vendor.controllers/vendor.controller");
const { gridView, getGridInfo } = require("../controllers/grid.controllers/grid.controller");
const adminController = require("../controllers/admin.controllers/admingetreport.controller");
const clientVariables = require("../controllers/clientVariables.controller");
const { activationPasswordGet, activationPasswordPost } = require("../controllers/authentication.contrllers/activationPassword.controller");
const { loginGet, loginPost } = require("../controllers/authentication.contrllers/login.controller");
const passport = require("../middlewares/authentication.middlewares/passport.middleware");
const isPermission = require("../middlewares/authentication.middlewares/isPermission.middleware");
const { orderUpdateGet, orderUpdatePost, orderitemUpdateGet, orderitemUpdatePost, orderStatusUpdateGet, orderStatusUpdatePost } = require("../controllers/order.controllers/deleteOrder.controller");
const { adminShowOrderGet } = require("../controllers/order.controllers/adminShowOrders.controller");
const vendorAdminDashboard = require("../controllers/vendorAdmin.controllers/dashboard.controller");
const vendorAdminProducts = require("../controllers/vendorAdmin.controllers/products.controller");
const vendorAdminOrders = require("../controllers/vendorAdmin.controllers/orderForVendor.controller");

const { forgetPasswordGet, forgetPasswordPost } = require("../controllers/authentication.contrllers/forgetPassword.controller");
const { resetPasswordGet, resetPasswordPost } = require("../controllers/authentication.contrllers/resetPassword.controller");
const { getRolePermission } = require("../controllers/rolepermission.controller.js/rolepermission.controller");
const { modifyPermissionGet, modifyPermissionPost } = require("../controllers/rolepermission.controller.js/modifyPermission.controller");
const { addRolePermissionGet, addRolePermissionPost } = require("../controllers/rolepermission.controller.js/addRolePermission.controller");
const { isAddPaymentDetailCorrect, isAddressValid, isPaymentValid }=require('../middlewares/checkout.middleware/checkout.middleware')
const { category, getCategoryData, getCategoryName, getCategoryListPage, getCategoryDataEdit, getCategoryInfo, editedDataController, deleteselectedData } = require("../controllers/category.controllers/category.controller");
const singleOrderController=require('../controllers/singleOrder.controllers/singleOrder.controller')
const productCrud = require("../controllers/vendorAdmin.controllers/productCrud.controller");

const multerConf = require("../middlewares/multerConf")
const productUpload = require("../middlewares/productFileUpload/productFile.middleware");

const adminDashboardController=require("../controllers/admin.controllers/admin.dashboard.controller");
const adminCategoriesController=require("../controllers/admin.controllers/admin.categories.controller")
// improved grid components 
const gridController=require("../controllers/newgrid.controllers/newgridcontroller");
const { getPermissions } = require("../controllers/rolepermission.controller.js/getPermissions.controller");
const categories = require("../controllers/category.controllers/categories.controller");
const { createPdf } = require("../controllers/pdf.controllers/createPdf.controller");
const { addReview } = require("../controllers/product.controllers/review.controller");
const cartOrderCheckout=require('../controllers/cartOrder.controller/cartOrder.controller');
const vendorChart=require("../controllers/vendorAdmin.controllers/vendorChartController");
const homeFilter = require("../controllers/home.contollers/filter.contoller");
const amdinChartController=require("../controllers/admin.controllers/admin.chartdata.controller");
const logisticControllerOrders = require("../controllers/logistic.controllers/orders.controller");


const logisticsDarsboard=require('../controllers/logistic.controllers/dashboard.controller')
const logisticsServiceCity=require('../controllers/logistic.controllers/yourServiceCities.controller')

const logout = require("../controllers/authentication.contrllers/logout.controller");
const user = require("../controllers/authentication.contrllers/user.controller");

const { ordersPageRender, OrderHistoryGet, getOneOrder, orderPageRender } = require("../controllers/order.controllers/orderHistory.controller");
const { getSavedProduct, insertSavedProduct, removeSavedProduct, displaySavedProduct } = require("../controllers/product.controllers/savedProduct.controller");
const updateUser = require("../controllers/authentication.contrllers/updateUser.controller");
const { notifications } = require("../controllers/notification.controllers/notifications.controller");
const { commentFileAttchement } = require("../middlewares/comment.middlewares/commentFileAttchement.middleware");
const addQuery = require("../controllers/customerSupport.controllers.js/addQuery");
const { displayQuery, updateAnswerPage, displayQueryCustomer } = require("../controllers/customerSupport.controllers.js/displayQuery");
const updateAnswerQuery = require("../controllers/customerSupport.controllers.js/updateAnswerQuery.controller");
const removeAnswerQuery = require("../controllers/customerSupport.controllers.js/removeQuery.controller");
const assignNewOrder = require("../controllers/admin.controllers/assignedOrder.controller");
/******************************
 * cookie
 ******************************/
router.use((request, response, next)=>{
  response.cookie("token", request.cookies.token)
  next();
})
/* ***************************
authentication module
******************************/
router.get("/kartezy/clientvariable", clientVariables)

router.get("/kartezy/register", registrationGet);
router.post("/kartezy/register", registrationPost);

router.get("/kartezy/password/:activationCode", activationPasswordGet);
router.post("/kartezy/password/:activationCode", activationPasswordPost);

router.get("/kartezy/forgetPassword", forgetPasswordGet);
router.post("/kartezy/forgetPassword", forgetPasswordPost);

router.get("/kartezy/login", loginGet);
router.post("/kartezy/login", loginPost);


router.get("/kartezy/logout",passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}), logout)

/* ***************************
role permission module
******************************/
router.get("/kartezy/rolepermission/getPermissions/:roleName", passport.authenticate('jwt', { session: false, failureRedirect: '/kartezy/login' }),getRolePermission);
router.get("/kartezy/rolepermission/permissions", passport.authenticate('jwt', { session: false, failureRedirect: '/kartezy/login' }),getPermissions);

router.get("/kartezy/rolepermission/modifypermission", passport.authenticate('jwt', { session: false, failureRedirect: '/kartezy/login' }), modifyPermissionGet);
router.post("/kartezy/rolepermission/modifypermission", passport.authenticate('jwt', { session: false, failureRedirect: '/kartezy/login' }), modifyPermissionPost);

router.get("/kartezy/rolepermission/Addpermission", passport.authenticate('jwt', { session: false, failureRedirect: '/kartezy/login' }),addRolePermissionGet);
router.post("/kartezy/rolepermission/addpermission", passport.authenticate('jwt', { session: false, failureRedirect: '/kartezy/login' }),addRolePermissionPost);

/* ***************************
pdf genrate module
******************************/
router.post("/kartezy/pdf",createPdf);

/* ***************************
notification module
******************************/
router.post("/kartezy/notifications", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}), notifications)

/* ***************************
user module
******************************/
router.post("/kartezy/user", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),   user);
router.post("/kartezy/user/update", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}), updateUser);

router.get("/kartezy/resetPassword", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),   resetPasswordGet);
router.post("/kartezy/resetPassword", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),   resetPasswordPost);

/* ***************************
Saved product module
******************************/
router.post("/kartezy/savedProduct", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),   getSavedProduct);
router.post("/kartezy/savedProduct/:productId", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),   insertSavedProduct);
router.post("/kartezy/removeSavedProduct/:productId", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),   removeSavedProduct);
router.get("/kartezy/savedProduct", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  displaySavedProduct);

/* ***************************
customer support module
******************************/
router.post("/kartezy/addquery", commentFileAttchement.array("queryAttchement"),addQuery);
router.get("/kartezy/displayQuery", displayQuery);
router.get("/kartezy/displayQueryCustomer", displayQueryCustomer);
router.get("/kartezy/admin/query", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}), updateAnswerPage);
router.post("/kartezy/admin/addanswer",  passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}), commentFileAttchement.array("queryAttchement"),  updateAnswerQuery);
router.post("/kartezy/admin/removeQuery",  passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}), removeAnswerQuery);

/* ***************************
assignorder in admin side
******************************/
router.get("/kartezy/admin/getAllLogistics", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),adminController.getAllLogistics)
router.get("/kartezy/admin/assignedNewOrder",  passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}), adminDashboardController.assignOrder)
router.post("/kartezy/admin/assignedNewOrder",assignNewOrder)

/* ***************************
Product review module
******************************/
router.post("/kartezy/reivew", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  commentFileAttchement.array("commentAttchement"),addReview);

/* ***************************
order history module
******************************/
router.get("/kartezy/orders",passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}), ordersPageRender);
router.post("/kartezy/orders",passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  OrderHistoryGet);
router.get("/kartezy/orders/:orderId", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  orderPageRender);
router.post("/kartezy/orders/:orderId", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  getOneOrder);



router.get("/kartezy/orders/update", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  orderUpdateGet)
router.post("/kartezy/orders/update", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  orderUpdatePost)
router.get("/kartezy/orders/update/item", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  orderitemUpdateGet)
router.post("/kartezy/orders/update/item", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  orderitemUpdatePost)
router.get("/kartezy/order/adminside", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  adminShowOrderGet)
router.get("/kartezy/order/orderstatus", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  orderStatusUpdateGet)
router.post("/kartezy/order/orderstatus", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  orderStatusUpdatePost)

router.post("/kartezy/order/Insert", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  orderFromCartController.orderInsertPost)
router.post("/kartezt/orderItems/Insert", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  orderFromCartController.orderItemsInsertPost)

//home page modules
router.get('/KartEzy', homeController.homePageRender);
router.post('/KartEzy/home/api/getLetestProduct', homeController.getLetestProduct);
router.post('/KartEzy/home/api/getTopSellingProduct', homeController.getTopSellingProduct);
router.post('/KartEzy/home/api/getAllProduct', homeController.getAllProduct);
router.get('/KartEzy/home/api/filter', homeFilter.filterProduct);
router.get('/KartEzy/home/filterPage', homeFilter.filterProduct);
router.post('/KartEzy/home/api/filterData', homeFilter.filterData);

// cart module
router.get('/kartezy/userCartRender',passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),   cartController.renderCartPage)
router.post('/kartezy/userCartfetch', passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  cartController.fillUserCartData)
router.post('/kartezy/userCartupdate', passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  cartController.updateUserCartData)
router.post('/kartezy/userCartinsert', passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  cartController.insertUserCartData)

//product view module
router.get('/kartezy/product/:id', productView);
router.get('/kartezy/fetchproduct/:id', getProductInfo);

/******************************
vendor module
*******************************/
router.get('/kartezy/vendor/insert', passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  vendorController.getVendorform);
router.post('/kartezy/vendor/insert', passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  vendorController.insertVendor);

/* ***************************
admin module  
******************************/
router.get('/kartezy/admin/getTotalVendors', passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  adminController.getTotalVendors);
router.get('/kartezy/admin/getTotalCustomers', passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  adminController.getTotalCustomer);
router.get('/kartezy/admin/getTotalProducts', passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  adminController.getTotalProducts);
router.get('/kartezy/admin/getCustomerOrderHistory', passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  adminController.getCustomerOrderHistory)
router.get('/kartezy/admin/displayVendorsList',passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),   adminController.displayVendorsList)
router.get('/kartezy/admin/deleteVendor', passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  adminController.deleteVendor);

router.get('/kartezy/admin/getTotalCustomerReport',passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),   adminController.getTotalCustomerReport)
router.get('/kartezy/admin/getCustomerOrderHistoryReport', passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  adminController.getCustomerOrderHistoryReport)
router.get('/kartezy/admin/getTotalProductReport', passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  adminController.getTotalProductReport);
router.get('/kartezy/admin/getTotalVendorReport',passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),   adminController.getTotalVendorReport);
router.get('/kartezy/admin/vendorProducts',adminController.specificVendorProduct);
router.get('/kartezy/admin/vendorProductsView',adminController.specificVendorProductView);
router.post('/kartezy/admin/vendorNote',adminController.adminVendorMessage)

router.get('/kartezy/admin/Report',passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}), isPermission, adminController.getReport)
router.get('/kartezy/admin',passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}), isPermission, adminDashboardController.getAdminDashboard);
router.get('/kartezy/admin/getRecentOrders',passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}), isPermission, adminDashboardController.getRecentOrders);
router.get('/kartezy/admin/Categories',passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}), isPermission, adminCategoriesController.getCategories);
router.get('/kartezy/admin/addCategory',passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}), isPermission, adminCategoriesController.addCategories);
router.get('/kartezy/admin/getproductQty',passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}), isPermission, amdinChartController.productQty);
router.get('/kartezy/admin/assignOrders',adminDashboardController.assignOrder);
router.post('/kartezy/admin/assignOrdersData',adminController.getOrdertobeAssign);
router.get('/kartezy/admin/assignOrdersData',adminController.getOrdertobeAssign);
router.get('/kartezy/admin/removeProducts',adminController.productListing);
router.get('/kartezy/admin/allProducts',adminController.allProducts)


/* **********************************
          Vendor Admin 
********************************** */
router.get('/kartezy/vendorAdmin/dashboard', passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  vendorAdminDashboard.renderDashboard);
router.post('/kartezy/vendorAdmin/api/dashboardcount', passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  vendorAdminDashboard.countProducts);
router.get('/kartezy/vendorAdmin/products', passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  vendorAdminProducts.renderProducts);
router.post('/kartezy/vendorAdmin/products', passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  vendorAdminProducts.displayProducts);
router.get('/kartezy/vendorAdmin/products/addProduct/:productId', passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  vendorAdminProducts.productFormRender);
router.post('/kartezy/vendorAdmin/products/addProduct/upload',passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  productUpload.upload,productCrud.insertProduct);
router.get('/kartezy/vendorAdmin/products/addProduct',passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),   vendorAdminProducts.productFormRender);
router.post('/kartezy/vendorAdmin/products/deleteProduct',passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  productCrud.deleteProduct);
router.post('/kartezy/vendorAdmin/products/updateProduct',passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  productUpload.upload,productCrud.updateProduct);
router.post('/kartezy/vendorAdmin/products/fetchFormData',passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  productCrud.fetchFormData);

router.get('/kartezy/vendorAdmin/orders', passport.authenticate('jwt', { session: false, failureRedirect: '/kartezy/login' }), vendorAdminOrders.renderOrderForVendor);
router.post('/kartezy/vendorAdmin/orders', passport.authenticate('jwt', { session: false, failureRedirect: '/kartezy/login' }), vendorAdminOrders.displayOrders);
router.post('/kartezy/vendorAdmin/singleOrderDetail', passport.authenticate('jwt', { session: false, failureRedirect: '/kartezy/login' }), vendorAdminOrders.displaySingleOrderDetail);

router.get('/kartezy/vendorAdmin/chartData',passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  vendorChart.vendorChartController)

//******************************* */
// Checkout Module
//*************************** */
router.get("/kartezy/checkOutFrom", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  checkoutController.renderCheckoutPage);
router.get("/kartezy/renderCheckoutAddform", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  checkoutController.renderAddressFrom);
router.get("/kartezy/renderCheckoutPaymentform", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  checkoutController.renderPaymentFrom);
router.get("/kartezy/renderSingleProductCheckout/:pid",passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),   checkoutController.renderSingleProductCheckoutPage);
router.post("/kartezy/fetchSingleProductCheckout/:pid",passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),   checkoutController.getSingleProductCheckoutDetail);
router.post("/kartezy/userAddrfetch", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  checkoutController.getUserAddress);
router.post("/kartezy/userPaymentfetch", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  checkoutController.getUserPaymentsDetail);
router.post("/kartezy/deleteUserCheckoutDetail", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  checkoutController.deleteUserCheckout);
router.post("/kartezy/submitCheckoutAddressform", passport.authenticate('jwt', { session: false, failureRedirect: '/kartezy/login' }),  isAddressValid,  checkoutController.submitAddFrom);
router.post("/kartezy/submitCheckoutPaymentform", passport.authenticate('jwt', { session: false, failureRedirect: '/kartezy/login' }),  isPaymentValid, checkoutController.submitPaymentFrom);
//single order 
router.post("/kartezy/singleProductOrder", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}), isAddPaymentDetailCorrect, singleOrderController.submitOrder);
//Cart Order 
router.post("/kartezy/orderFromCart",passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  isAddPaymentDetailCorrect,cartOrderCheckout.cartOrderFromCheckout)

// grid component TESTING PURPOSE
router.get('/kartezy/newgrid', gridController.gridView);

// category module Dharm
router.get("/kartezy/categoryForm/", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  category);
router.get("/kartezy/categoryForm/edit/:id",passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),   category);
router.post("/kartezy/categoryForm/submit",passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),   getCategoryInfo);
router.get("/kartezy/SelectCategory", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  getCategoryName); // select category from dropdown
router.get("/kartezy/categoryList", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  getCategoryListPage); // render list page
router.get("/kartezy/categoryList/data", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  getCategoryData); // for fetch json data
router.get("/kartezy/categoryList/edit/:id",passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),   getCategoryDataEdit); // fetch data of clicked button id for edit page
router.post("/kartezy/categoryList/edit/submit/:id", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  editedDataController);
router.post("/kartezy/categoryList/delete/:id", passport.authenticate('jwt', {session: false, failureRedirect: '/kartezy/login'}),  deleteselectedData);
router.get("/kartezy/categories" ,categories)

// Logistic Module 
router.get("/kartezy/logistic/dashboard", passport.authenticate('jwt', { session: false, failureRedirect: '/kartezy/login' }), logisticsDarsboard.logisticsDashRender);
router.post("/kartezy/logistic/dashboardDetailFetch", passport.authenticate('jwt', { session: false, failureRedirect: '/kartezy/login' }), logisticsDarsboard.logisticsDashCardfetch);
router.post("/kartezy/logistic/dashboardCityOrderFetch", passport.authenticate('jwt', { session: false, failureRedirect: '/kartezy/login' }), logisticsDarsboard.dashOrderfetch);

router.get("/kartezy/logistic/serviceCities", passport.authenticate('jwt', { session: false, failureRedirect: '/kartezy/login' }), logisticsServiceCity.renderServiceCities );
router.post("/kartezy/logistic/serviceCitiesfetch", passport.authenticate('jwt', { session: false, failureRedirect: '/kartezy/login' }),logisticsServiceCity.fetchServiceCities );
router.post("/kartezy/logistic/serviceCitiesinsert", passport.authenticate('jwt', { session: false, failureRedirect: '/kartezy/login' }), logisticsServiceCity.submitServiceCities );
router.post("/kartezy/logistic/selectedServiceCitiesfetch", passport.authenticate('jwt', { session: false, failureRedirect: '/kartezy/login' }), logisticsServiceCity.getServiceCities );
router.post("/kartezy/logistic/deleteServiceCities", passport.authenticate('jwt', { session: false, failureRedirect: '/kartezy/login' }), logisticsServiceCity.deleteServiceCities );












router.get('/kartezy/logistic/orders',logisticControllerOrders.logisticOrderRender);
router.post('/kartezy/logistic/orderslists',logisticControllerOrders.ordersLists);
router.post('/kartezy/logistic/updateOrder',logisticControllerOrders.updateOrder);















module.exports = router;
