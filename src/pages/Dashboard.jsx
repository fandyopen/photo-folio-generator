
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import Layout from '../components/layout/Layout';
import { Search, Calendar } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [jobTypeFilter, setJobTypeFilter] = useState("all");
  const [jobSourceFilter, setJobSourceFilter] = useState("all");
  const [jobIndustryFilter, setJobIndustryFilter] = useState("all");
  const [jobPositionFilter, setJobPositionFilter] = useState("all");

  // Mock data for job listings
  const jobListings = [
    {
      id: 'ID:21711',
      title: '选址开发・苏州',
      company: '新先达集团',
      recruitmentRule: '一次性返费',
      applicationDeadline: '2025-03-21',
      returnCondition: '非入职即返',
      urgentLevel1: '寻勤满30天',
      returnAmount1: '2500元/人',
      urgentLevel2: '寻勤满90天',
      returnAmount2: '10000元/人',
      maxReturnAmount: '满足全部返费条件最高返费额15000元/人',
      requiredPeople: 10,
      alreadySubmitted: 0,
      interviewCount: 3,
      interviewPassedCount: 19,
      offerCount: '-',
      entryCount: '-',
      location: '苏州'
    },
    {
      id: 'ID:21709',
      title: '外贸经理・苏州',
      company: '新先达集团',
      recruitmentRule: '一次性返费',
      applicationDeadline: '2025-03-21',
      returnCondition: '非入职即返',
      urgentLevel1: '寻勤满15天',
      returnAmount1: '7000元/人',
      urgentLevel2: '寻勤满90天',
      returnAmount2: '11000元/人',
      maxReturnAmount: '满足全部返费条件最高返费额18000元/人',
      requiredPeople: 3,
      alreadySubmitted: 0,
      interviewCount: 2,
      interviewPassedCount: 2,
      offerCount: '-',
      entryCount: '-',
      location: '苏州'
    },
    {
      id: 'ID:21707',
      title: '招商总监・苏州',
      company: '新先达集团',
      recruitmentRule: '一次性返费',
      applicationDeadline: '2025-03-21',
      returnCondition: '非入职即返',
      urgentLevel1: '寻勤满15天',
      returnAmount1: '9000元/人',
      urgentLevel2: '寻勤满90天',
      returnAmount2: '17000元/人',
      maxReturnAmount: '满足全部返费条件最高返费额26000元/人',
      requiredPeople: 1,
      alreadySubmitted: 0,
      interviewCount: 2,
      interviewPassedCount: '-',
      offerCount: '-',
      entryCount: '-',
      location: '苏州'
    }
  ];

  // Filter tabs data
  const periodTabs = [
    { id: "all", label: "全部" },
    { id: "one-time", label: "一次性返费" },
    { id: "monthly", label: "月返费" },
    { id: "daily", label: "日返费" },
    { id: "hourly", label: "小时返费" }
  ];

  const jobTypeTabs = [
    { id: "all", label: "全部" },
    { id: "new-release", label: "最新发布" },
    { id: "high-return", label: "经典高返" },
    { id: "hc-multiple", label: "HC倍多" },
    { id: "full-return", label: "返点金额高" },
    { id: "high-probability", label: "录取率高" },
    { id: "new-client", label: "新客高返" }
  ];

  const jobSourceTabs = [
    { id: "all", label: "全部" },
    { id: "domestic", label: "全职外包" },
    { id: "rpo", label: "RPO内返" },
    { id: "offshore", label: "海外外包" },
    { id: "manufacturer", label: "实习外包" },
    { id: "factory-worker", label: "实习工" },
    { id: "factory-labor", label: "管理工" },
    { id: "one-time-rpo", label: "一次性RPO" },
    { id: "blue-collar", label: "灵活用工" },
    { id: "special", label: "特招RPO" },
    { id: "bpo", label: "BPO/特色" }
  ];

  const jobIndustryTabs = [
    { id: "all", label: "全部" },
    { id: "finance", label: "金融" },
    { id: "white-collar", label: "白领" },
    { id: "technology", label: "技术/IT" },
    { id: "medical", label: "医药" },
    { id: "other-industry", label: "其他类" }
  ];

  const jobPositionTabs = [
    { id: "all", label: "全部" },
    { id: "sales", label: "销战管理" },
    { id: "new-business", label: "新零售" },
    { id: "internet", label: "互联网" },
    { id: "manufacturing", label: "制造" },
    { id: "finance", label: "金融" },
    { id: "real-estate", label: "地产类" },
    { id: "trade", label: "商贸" },
    { id: "insurance", label: "金融保险" },
    { id: "medical", label: "医药" },
    { id: "other-position", label: "其他类" }
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-medium">抢单看板</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="h-8">
              <Calendar className="w-4 h-4 mr-2" />
              保存预览
            </Button>
            <Button variant="outline" className="h-8">
              专用预览
            </Button>
          </div>
        </div>

        <Card className="mb-6">
          <CardContent className="p-0">
            {/* Period Filter */}
            <div className="p-3 border-b">
              <div className="flex items-center">
                <span className="text-sm font-medium min-w-24">返费类型：</span>
                <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                  <TabsList className="bg-transparent p-0 h-auto gap-4">
                    {periodTabs.map(tab => (
                      <TabsTrigger
                        key={tab.id}
                        value={tab.id}
                        className={`px-2 py-1 h-auto data-[state=active]:bg-transparent data-[state=active]:shadow-none ${
                          activeTab === tab.id ? 'text-blue-500' : 'text-gray-600'
                        }`}
                      >
                        {tab.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </div>

            {/* Job Type Filter */}
            <div className="p-3 border-b">
              <div className="flex items-center">
                <span className="text-sm font-medium min-w-24">职位标签：</span>
                <Tabs defaultValue="all" className="w-full" onValueChange={setJobTypeFilter}>
                  <TabsList className="bg-transparent p-0 h-auto gap-4 flex-wrap">
                    {jobTypeTabs.map(tab => (
                      <TabsTrigger
                        key={tab.id}
                        value={tab.id}
                        className={`px-2 py-1 h-auto data-[state=active]:bg-transparent data-[state=active]:shadow-none ${
                          jobTypeFilter === tab.id ? 'text-blue-500' : 'text-gray-600'
                        }`}
                      >
                        {tab.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </div>

            {/* Job Source Filter */}
            <div className="p-3 border-b">
              <div className="flex items-center">
                <span className="text-sm font-medium min-w-24">职位类型：</span>
                <Tabs defaultValue="all" className="w-full" onValueChange={setJobSourceFilter}>
                  <TabsList className="bg-transparent p-0 h-auto gap-4 flex-wrap">
                    {jobSourceTabs.map(tab => (
                      <TabsTrigger
                        key={tab.id}
                        value={tab.id}
                        className={`px-2 py-1 h-auto data-[state=active]:bg-transparent data-[state=active]:shadow-none ${
                          jobSourceFilter === tab.id ? 'text-blue-500' : 'text-gray-600'
                        }`}
                      >
                        {tab.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </div>

            {/* Job Industry Filter */}
            <div className="p-3 border-b">
              <div className="flex items-center">
                <span className="text-sm font-medium min-w-24">职位领域：</span>
                <Tabs defaultValue="all" className="w-full" onValueChange={setJobIndustryFilter}>
                  <TabsList className="bg-transparent p-0 h-auto gap-4">
                    {jobIndustryTabs.map(tab => (
                      <TabsTrigger
                        key={tab.id}
                        value={tab.id}
                        className={`px-2 py-1 h-auto data-[state=active]:bg-transparent data-[state=active]:shadow-none ${
                          jobIndustryFilter === tab.id ? 'text-blue-500' : 'text-gray-600'
                        }`}
                      >
                        {tab.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </div>

            {/* Job Position Filter */}
            <div className="p-3 border-b">
              <div className="flex items-center">
                <span className="text-sm font-medium min-w-24">职位行业：</span>
                <Tabs defaultValue="all" className="w-full" onValueChange={setJobPositionFilter}>
                  <TabsList className="bg-transparent p-0 h-auto gap-4 flex-wrap">
                    {jobPositionTabs.map(tab => (
                      <TabsTrigger
                        key={tab.id}
                        value={tab.id}
                        className={`px-2 py-1 h-auto data-[state=active]:bg-transparent data-[state=active]:shadow-none ${
                          jobPositionFilter === tab.id ? 'text-blue-500' : 'text-gray-600'
                        }`}
                      >
                        {tab.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </div>

            {/* Search Form */}
            <div className="p-3 flex flex-wrap gap-4">
              <Input 
                className="max-w-xs" 
                placeholder="职位名称/ID" 
              />
              <Input 
                className="max-w-xs" 
                placeholder="品牌名称" 
              />
              
              <div className="relative max-w-xs w-full">
                <Input 
                  className="w-full" 
                  placeholder="行业" 
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
              
              <div className="relative max-w-xs w-full">
                <Input 
                  className="w-full" 
                  placeholder="全部职能" 
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
              
              <div className="relative max-w-xs w-full">
                <Input 
                  className="w-full" 
                  placeholder="全部位位城市" 
                />
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
              </div>
              
              <div className="relative max-w-xs w-full">
                <Input 
                  className="w-full" 
                  placeholder="销售城市" 
                />
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
              </div>
              
              <Button className="bg-blue-500 hover:bg-blue-600">
                <Search className="h-4 w-4 mr-2" />
                搜索
              </Button>
              
              <Button variant="outline">
                重置
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Job Listings */}
        <div className="bg-white rounded-md">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="w-[200px]">公司名称</TableHead>
                <TableHead>结算规则</TableHead>
                <TableHead>需求人数（已付款）</TableHead>
                <TableHead>已投推荐总数量</TableHead>
                <TableHead>已约面人数</TableHead>
                <TableHead>已面试人数</TableHead>
                <TableHead>Offer人数</TableHead>
                <TableHead>已入职人数</TableHead>
                <TableHead>职位招聘城市</TableHead>
                <TableHead>操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobListings.map((job) => (
                <TableRow key={job.id} className="border-b">
                  <TableCell className="py-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                        <span className="text-xs text-gray-500">公司图标</span>
                      </div>
                      <div>
                        <div className="font-semibold">{job.title}</div>
                        <div className="text-sm text-gray-500">{job.company}</div>
                        <div className="text-xs text-gray-400">{job.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>返费规则：{job.recruitmentRule}</div>
                      <div>生效日期：{job.applicationDeadline}</div>
                      <div>返费周期：{job.returnCondition}</div>
                      <div>价格周期：一口价</div>
                      <div>返费条件：{job.urgentLevel1}</div>
                      <div>返费金额：{job.returnAmount1}</div>
                      <div>返费条件：{job.urgentLevel2}</div>
                      <div>返费金额：{job.returnAmount2}</div>
                      <div className="text-red-500">{job.maxReturnAmount}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {job.requiredPeople} ({job.alreadySubmitted})
                  </TableCell>
                  <TableCell>{job.interviewCount}</TableCell>
                  <TableCell>{job.interviewPassedCount}</TableCell>
                  <TableCell>{job.offerCount}</TableCell>
                  <TableCell>{job.entryCount}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-xs">
                      我要抢单
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
