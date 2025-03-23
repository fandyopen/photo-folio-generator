
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import ImageUpload from "./pages/ImageUpload";
import MyOrders from "./pages/MyOrders";
import MyPosition from "./pages/MyPosition";
import Personnel from "./pages/Personnel";
import Resumes from "./pages/Resumes";
import ResumeDetail from "./pages/ResumeDetail";
import Recommendations from "./pages/Recommendations";
import DataManagement from "./pages/DataManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/image-upload" element={<ImageUpload />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/my-position" element={<MyPosition />} />
          <Route path="/personnel" element={<Personnel />} />
          <Route path="/resumes" element={<Resumes />} />
          <Route path="/resumes/:id" element={<ResumeDetail />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/data" element={<DataManagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
