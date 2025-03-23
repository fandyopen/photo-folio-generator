
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Layout from '../components/layout/Layout';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import FilterPanel from '../components/dashboard/FilterPanel';
import JobListingTable from '../components/dashboard/JobListingTable';
import { jobListingsData } from '../data/jobListingsData';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [jobTypeFilter, setJobTypeFilter] = useState("all");
  const [jobSourceFilter, setJobSourceFilter] = useState("all");
  const [jobIndustryFilter, setJobIndustryFilter] = useState("all");
  const [jobPositionFilter, setJobPositionFilter] = useState("all");

  return (
    <Layout>
      <div className="p-6">
        <DashboardHeader />

        <Card className="mb-6">
          <CardContent className="p-0">
            <FilterPanel 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              jobTypeFilter={jobTypeFilter}
              setJobTypeFilter={setJobTypeFilter}
              jobSourceFilter={jobSourceFilter}
              setJobSourceFilter={setJobSourceFilter}
              jobIndustryFilter={jobIndustryFilter}
              setJobIndustryFilter={setJobIndustryFilter}
              jobPositionFilter={jobPositionFilter}
              setJobPositionFilter={setJobPositionFilter}
            />
          </CardContent>
        </Card>

        {/* Job Listings */}
        <div className="bg-white rounded-md">
          <JobListingTable jobListings={jobListingsData} />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
