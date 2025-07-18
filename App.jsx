import React from 'react';
    import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
    import Layout from '@/components/Layout';
    import HomePage from '@/pages/HomePage';
    import LoginPage from '@/pages/LoginPage';
    import ProductCategoryPage from '@/pages/ProductCategoryPage';
    import ProductDetailsPage from '@/pages/ProductDetailsPage';
    import CartPage from '@/pages/CartPage';
    import CheckoutPage from '@/pages/CheckoutPage';
    import WishlistPage from '@/pages/WishlistPage';
    import OrderConfirmationPage from '@/pages/OrderConfirmationPage';
    import OrderTrackingPage from '@/pages/OrderTrackingPage';
    import ContactUsPage from '@/pages/ContactUsPage';
    import AboutUsPage from '@/pages/AboutUsPage';
    import { AppProvider } from '@/contexts/AppContext';
    import { products } from '@/data/products'; 
    import ProductCard from '@/components/ProductCard';
    import GlobalLoader from '@/components/GlobalLoader';
    import UserProfilePage from '@/pages/UserProfilePage';

    // Static pages
    import ShippingReturnsPage from '@/pages/ShippingReturnsPage';
    import FaqPage from '@/pages/FaqPage';
    import SizeGuidePage from '@/pages/SizeGuidePage';
    import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
    import TermsOfServicePage from '@/pages/TermsOfServicePage';
    import SalePage from '@/pages/SalePage';
    import MessageSellerPage from '@/pages/MessageSellerPage';
    import WriteReviewPage from '@/pages/WriteReviewPage';

    // Admin Pages
    import AdminLoginPage from '@/pages/admin/AdminLoginPage';
    import AdminLayout from '@/pages/admin/AdminLayout';
    import AdminDashboardPage from '@/pages/admin/AdminDashboardPage';
    import AdminProductsPage from '@/pages/admin/AdminProductsPage';
    import AdminOrdersPage from '@/pages/admin/AdminOrdersPage';
    import AdminPaidOrdersPage from '@/pages/admin/AdminPaidOrdersPage';
    import AdminAnalyticsPage from '@/pages/admin/AdminAnalyticsPage';
    import AdminMessagesPage from '@/pages/admin/AdminMessagesPage';
    import AdminSettingsPage from '@/pages/admin/AdminSettingsPage';
    import AdminReviewsPage from '@/pages/admin/AdminReviewsPage';
    import AdminManageCategoriesPage from '@/pages/admin/AdminManageCategoriesPage';
    import AdminManageSellersPage from '@/pages/admin/AdminManageSellersPage';
    import AdminSellerPayoutsPage from '@/pages/admin/AdminSellerPayoutsPage';
    import AdminDispatchCenterPage from '@/pages/admin/AdminDispatchCenterPage';
    import AdminStockAlertsPage from '@/pages/admin/AdminStockAlertsPage';


    // Error Pages
    import NotFoundPage from '@/pages/error/NotFoundPage';
    import MaintenancePage from '@/pages/error/MaintenancePage';
    import ServerErrorPage from '@/pages/error/ServerErrorPage';

    // Seller Pages
    import SellerRegistrationPage from '@/pages/seller/SellerRegistrationPage';
    import SellerLoginPage from '@/pages/seller/SellerLoginPage';
    import SellerDashboardPage from '@/pages/seller/SellerDashboardPage';
    import SellerProductsPage from '@/pages/seller/SellerProductsPage';
    import SellerOrdersPage from '@/pages/seller/SellerOrdersPage';
    import SellerProfilePage from '@/pages/seller/SellerProfilePage';
    import SellerLayout from '@/pages/seller/SellerLayout';


    const NewArrivalsPage = () => {
      const newArrivals = products.filter(p => p.labels && p.labels.includes('New Arrival'));
      return (
        <div className="container mx-auto py-8">
          <h1 className="text-4xl font-bold font-serif text-keroluxe-gold mb-8 text-center">New Arrivals</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {(newArrivals.length > 0 ? newArrivals : products.slice(0,8)).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      );
    };
    
    const BestSellersPage = () => {
      const bestSellers = products.filter(p => p.labels && p.labels.includes('Bestseller'));
      return (
        <div className="container mx-auto py-8">
          <h1 className="text-4xl font-bold font-serif text-keroluxe-gold mb-8 text-center">Best Sellers</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {(bestSellers.length > 0 ? bestSellers : products.slice(0,8)).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      );
    };
    

    function App() {
      return (
        <Router>
          <AppProvider>
            <GlobalLoader />
            <Routes>
              {/* Frontend Routes */}
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="category/:categorySlug" element={<ProductCategoryPage />} />
                <Route path="product/:productId" element={<ProductDetailsPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="wishlist" element={<WishlistPage />} />
                <Route path="order-confirmation" element={<OrderConfirmationPage />} />
                <Route path="track-order" element={<OrderTrackingPage />} />
                <Route path="contact" element={<ContactUsPage />} />
                <Route path="about" element={<AboutUsPage />} />
                <Route path="new-arrivals" element={<NewArrivalsPage />} />
                <Route path="best-sellers" element={<BestSellersPage />} />
                
                <Route path="message-seller/:sellerId" element={<MessageSellerPage />} />
                <Route path="write-review/:productId" element={<WriteReviewPage />} />
                
                <Route path="faq" element={<FaqPage />} />
                <Route path="shipping-returns" element={<ShippingReturnsPage />} />
                <Route path="size-guide" element={<SizeGuidePage />} />
                <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="terms-of-service" element={<TermsOfServicePage />} />
                <Route path="sale" element={<SalePage />} />
                
                <Route path="profile/orders" element={<OrderTrackingPage />} /> {/* Can be part of UserProfilePage later */}
                <Route path="profile" element={<UserProfilePage />} />
                
                {/* Error Pages */}
                <Route path="maintenance" element={<MaintenancePage />} />
                <Route path="server-error" element={<ServerErrorPage />} />
              </Route>

              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLoginPage />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<AdminDashboardPage />} />
                <Route path="products" element={<AdminProductsPage />} />
                <Route path="orders" element={<AdminOrdersPage />} />
                <Route path="paid-orders" element={<AdminPaidOrdersPage />} />
                <Route path="analytics" element={<AdminAnalyticsPage />} />
                <Route path="messages" element={<AdminMessagesPage />} />
                <Route path="reviews" element={<AdminReviewsPage />} />
                <Route path="settings" element={<AdminSettingsPage />} />
                <Route path="manage-categories" element={<AdminManageCategoriesPage />} />
                <Route path="manage-sellers" element={<AdminManageSellersPage />} />
                <Route path="seller-payouts" element={<AdminSellerPayoutsPage />} />
                <Route path="dispatch-center" element={<AdminDispatchCenterPage />} />
                <Route path="stock-alerts" element={<AdminStockAlertsPage />} />
                <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
              </Route>

              {/* Seller Routes */}
              <Route path="/sell-with-us" element={<SellerRegistrationPage />} />
              <Route path="/seller/login" element={<SellerLoginPage />} />
              <Route path="/seller" element={<SellerLayout />}>
                  <Route index element={<Navigate to="dashboard" replace />} />
                  <Route path="dashboard" element={<SellerDashboardPage />} />
                  <Route path="products" element={<SellerProductsPage />} />
                  <Route path="orders" element={<SellerOrdersPage />} />
                  <Route path="profile" element={<SellerProfilePage />} />
                  <Route path="*" element={<Navigate to="/seller/dashboard" replace />} />
              </Route>
              
              {/* Catch-all for 404 - must be last route */}
              <Route path="*" element={<NotFoundPage />} /> 
            </Routes>
          </AppProvider>
        </Router>
      );
    }

    export default App;