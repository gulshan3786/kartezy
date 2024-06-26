
insert into permissions (permission_name, api_url, method) values
-- role permission module
('Fetch Role Permission', '/kartezy/rolepermission/getPermissions/:roleName', 'get'),
('Fetch All Permission', '/kartezy/rolepermission/permissions', 'get'),
('Update Permission Form', '/kartezy/rolepermission/modifypermission', 'get'),
('Update Permission', '/kartezy/rolepermission/modifypermission', 'post'),
('Add New Permission Form', '/kartezy/rolepermission/Addpermission', 'get'),
('Add New Permission', '/kartezy/rolepermission/Addpermission', 'post'),
-- pdf genrate module
('Pdf Genrate', '/kartezy/pdf', 'post'),
-- user module
('Current user', '/kartezy/user', 'post'),
('Reset Password Form', '/kartezy/resetPassword', 'get'),
('Reset password', '/kartezy/resetPassword', 'post'),
-- saved product
('Saved Product Fetch', '/kartezy/savedProduct', 'post'),
('Saved Product', '/kartezy/savedProduct/:productId', 'post'),
('Remove Saved Product', '/kartezy/removeSavedProduct/:productId', 'post'),
('Display Saved Product', '/kartezy/savedProduct', 'get'),
-- review product
('Add New Product Review', '/kartezy/reivew', 'post'),
-- order history
('Order History', '/kartezy/orders', 'get'),
('Particular one order', '/kartezy/order', 'get'),
('Fetch Particular order By ID', '/kartezy/orders/:id', 'get'),
('Insert Particular order By ID', '/kartezy/orders/:id', 'post'),
('Update Order Form', '/kartezy/orders/update', 'get'),
('Update Order', '/kartezy/orders/update', 'post'),
('Update Order item form', '/kartezy/orders/update/item', 'get'),
('Update Order item', '/kartezy/orders/update/item', 'post'),
('Fetch All order', '/kartezy/order/adminside', 'get'),
('Ftech order status', '/kartezy/order/orderstatus', 'get'),
('Update order status', '/kartezy/order/orderstatus', 'post'),
('Add order', '/kartezy/order/Insert', 'post'),
('Add order items', '/kartezy/orderItems/Insert', 'post'),
-- cart module
('User cart', '/kartezy/userCartRender', 'get'),
('User cart data fetch', '/kartezy/userCartfetch', 'post'),
('User cart update', '/kartezy/userCartupdate', 'post'),
('User cart create', '/kartezy/userCartinsert', 'post'),
-- product view
('Display single product', '/kartezy/product/:id', 'get'),
('Fetch single product', '/kartezy/fetchproduct/:id', 'get'),
-- admin
('Total Vendor Fetch', '/kartezy/admin/getTotalVendors', 'get'),
('Total Customer Fetch', '/kartezy/admin/getTotalCustomers', 'get'),
('Total Product Fetch', '/kartezy/admin/getTotalProducts', 'get'),
('Order History Admin', '/kartezy/admin/getCustomerOrderHistory', 'get'),
('Display Vendor list', '/kartezy/admin/displayVendorsList', 'get'),
('Delete Vendor', '/kartezy/admin/deleteVendor', 'get'),
('Total Customer Report', '/kartezy/admin/getTotalCustomerReport', 'get'),
('Get Customer Order History Report', '/kartezy/admin/getCustomerOrderHistoryReport', 'get'),
('Get Total Product Report', '/kartezy/admin/getTotalProductReport', 'get'),
('Get Total Vendor Report', '/kartezy/admin/getTotalVendorReport', 'get'),
('Admin Report Panel', '/kartezy/admin/Report', 'get'),
('Admin Dashboard', '/kartezy/admin', 'get'),
('Recent Order Admin Side', '/kartezy/admin/getRecentOrders', 'get'),
('Fetch all categories', '/kartezy/admin/Categories', 'get'),
('Add category', '/kartezy/admin/addCategory', 'get'),
('Get Product Quantity', '/kartezy/admin/getproductQty', 'get'),
-- vendor module
('Add Vendor Form', '/kartezy/vendor/insert', 'get'),
('Insert Vendor', '/kartezy/vendor/insert', 'post'),
('Fetch vendor data', '/kartezy/vendor/getdata', 'get'),
('Display Vendor Form Update', '/kartezy/vendor/update', 'get'),
('Vendor Data Update', '/kartezy/vendor/update/:id', 'post'),
('Vendor Profile Page', '/kartezy/vendor/profile', 'get'),
('Vendor Dashboard', '/kartezy/vendorAdmin/dashboard', 'get'),
('Vendor Dashboard Meta Data', '/kartezy/vendorAdmin/api/dashboardcount', 'post'),
('Display Product Page', '/kartezy/vendorAdmin/products', 'get'),
('Product Data', '/kartezy/vendorAdmin/products', 'post'),
('Update Product Form Display', '/kartezy/vendorAdmin/products/addProduct/:productId', 'get'),
('Add Product', '/kartezy/vendorAdmin/products/addProduct/upload', 'post'),
('Add Product Form Display', '/kartezy/vendorAdmin/products/addProduct', 'get'),
('Delete Product', '/kartezy/vendorAdmin/products/deleteProduct', 'post'),
('Update Product', '/kartezy/vendorAdmin/products/updateProduct', 'post'),
('Fetch Product Details', '/kartezy/vendorAdmin/products/fetchFormData', 'post'),
('Vendor Order Display', '/kartezy/vendorAdmin/orders', 'get'),
('Vendor Order Fetch Data', '/kartezy/vendorAdmin/orders', 'post'),
('Vendor Single Order Details', '/kartezy/vendorAdmin/singleOrderDetail', 'post'),
('Vendor Chart Data', '/kartezy/vendorAdmin/chartData', 'get'),
-- checkout module
('Checkout Display Form', '/kartezy/checkOutFrom', 'get'),
('Address Checkout Form', '/kartezy/renderCheckoutAddform', 'get'),
('Payment Checout Form', '/kartezy/renderCheckoutPaymentform', 'get'),
('Single Product Checkout Form', '/kartezy/renderSingleProductCheckout/:pid', 'get'),
('Display Single Product Checkout Fetch', '/kartezy/fetchSingleProductCheckout/:pid', 'post'),
('User Address Details', '/kartezy/userAddrfetch', 'post'),
('User Payment Details', '/kartezy/userPaymentfetch', 'post'),
('Delete User Checkout', '/kartezy/deleteUserCheckoutDetail', 'post'),
('Submit Checkout Address', '/kartezy/submitCheckoutAddressform', 'post'),
('Submit Checkout Payment Details', '/kartezy/submitCheckoutPaymentform', 'post'),
('Singler Product Order', '/kartezy/singleProductOrder', 'post'),
('Order From Cart', '/kartezy/orderFromCart', 'post'),
-- category modules
('Add category Form', '/kartezy/categoryForm/', 'get'),
('Update Category Form', '/kartezy/categoryForm/edit/:id', 'get'),
('Insert Category', '/kartezy/categoryForm/submit', 'post'),
('Fetch Category name', '/kartezy/SelectCategory', 'get'),
('Display All Cateogry', '/kartezy/categoryList', 'get'),
('Fetch Category Details', '/kartezy/categoryList/data', 'get'),
('Fetch Single Category Details', '/kartezy/categoryList/edit/:id', 'get'),
('Update Category', '/kartezy/categoryList/edit/submit/:id', 'post'),
('Delete Categories', '/kartezy/categoryList/delete/:id', 'post');