import React from 'react';
import { Home, Search, TrendingUp, Wallet, Package, Star } from 'lucide-react';
import Sidebar from '../shared/Sidebar';
import Navbar from '../shared/Navbar';


import CropBidding from './CropBidding';

const TraderDashboard = () => {
  const sidebarItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: Search, label: 'Browse Crops', active: false },
    { icon: TrendingUp, label: 'My Bids', active: false },
    { icon: Wallet, label: 'Escrow', active: false },
    { icon: Package, label: 'Delivery Confirm', active: false },
    { icon: Star, label: 'Ratings', active: false },
  ];





  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role="trader" items={sidebarItems} />
      
      <div className="ml-64">
        <Navbar />
        
        <main className="p-8">
          <div className="mb-6">
            <CropBidding />
          </div>
        </main>
      </div>
    </div>
  );
};

export default TraderDashboard;