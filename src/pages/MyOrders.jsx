
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Layout from '../components/layout/Layout';
import { Search } from 'lucide-react';

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState("current");
  
  // Mock data for orders
  const myOrders = [
    {
      id: 'ID:21617',
      title: '燕窝分拣员・南昌',
      status: '已更新',
      company: '京东青鲜',
      jobType: '1元/件',
      location: '南昌',
      headcount: '需20人',
      recruiter: 'PM 章子莹',
      paymentRule: '一次性',
      paymentCondition: '非入职即返',
      paymentAmount: '1000元/人',
      interviewCount: 0,
      offerCount: 0,
      entryCount: 2,
      hasBid: true
    },
    {
      id: 'ID:21575',
      title: '隐渡・实习生・上海',
      status: '已更新',
      company: '隐渡',
      jobType: '4000元/月',
      location: '上海',
      headcount: '需30人',
      recruiter: 'PM 蔡嘉玲',
      paymentRule: '月返费',
      paymentCondition: '返6月',
      paymentAmount: '800元/人/月',
      interviewCount: 0,
      offerCount: 0,
      entryCount: 1,
      hasBid: true
    },
    {
      id: 'ID:21555',
      title: '85度c・兼职・南京・南京',
      status: '已更新',
      company: '85度C',
      jobType: '22元/时',
      location: '南京',
      headcount: '需20人',
      recruiter: 'PM 王欣欣',
      paymentRule: '一次性',
      paymentCondition: '非入职即返',
      paymentAmount: '350元/人',
      interviewCount: 4,
      offerCount: 0,
      entryCount: 4,
      hasBid: true
    },
    {
      id: 'ID:21551',
      title: '85度c・全职・南京・南京',
      status: '已更新',
      company: '85度C',
      jobType: '3200元/月',
      location: '南京',
      headcount: '需20人',
      recruiter: 'PM 王欣欣',
      paymentRule: '一次性',
      paymentCondition: '非入职即返',
      paymentAmount: '1200元/人',
      interviewCount: 15,
      offerCount: 0,
      entryCount: 3,
      hasBid: true
    },
    {
      id: 'ID:21505',
      title: '中级专人・南昌',
      status: '已更新',
      company: '海天',
      jobType: '3000元/月',
      location: '南昌',
      headcount: '需5人',
      recruiter: 'PM 黄晓媛',
      paymentRule: '一次性',
      paymentCondition: '非入职即返',
      paymentAmount: '1500元/人',
      interviewCount: 7,
      offerCount: 0,
      entryCount: 5,
      hasBid: true
    }
  ];

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-xl font-medium mb-4">我的接单</h1>
        
        <div className="bg-white rounded-lg p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <Input placeholder="品牌名称" />
            <div className="relative">
              <Input placeholder="职能" />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
            <div className="relative">
              <Input placeholder="返费类型" />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
            <div className="relative">
              <Input placeholder="职位ID/职位名" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button className="bg-blue-500 hover:bg-blue-600">
              <Search className="h-4 w-4 mr-2" />
              搜索
            </Button>
            <Button variant="outline">重置</Button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4">
          <Tabs defaultValue="current" onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="current" className="px-4">我的接单</TabsTrigger>
              <TabsTrigger value="completed" className="px-4">面试结束</TabsTrigger>
              <TabsTrigger value="all" className="px-4">全部职位</TabsTrigger>
            </TabsList>
            
            <TabsContent value="current" className="mt-0">
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead className="w-[300px]">基本信息</TableHead>
                    <TableHead>负责人</TableHead>
                    <TableHead>结算规则</TableHead>
                    <TableHead>约面</TableHead>
                    <TableHead>到面</TableHead>
                    <TableHead>offer</TableHead>
                    <TableHead>入职</TableHead>
                    <TableHead>操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {myOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>
                        <div className="flex items-start space-x-3">
                          <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                            <span className="text-xs text-gray-500">图片</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-1">
                              <Badge variant="outline" className="bg-red-50 text-red-500 border-red-200 text-xs">
                                {order.status}
                              </Badge>
                              <span className="font-medium">{order.title}</span>
                            </div>
                            <div className="text-sm text-gray-500 mt-1">{order.company}</div>
                            <div className="text-sm text-gray-500 flex items-center gap-2">
                              <span>{order.jobType}</span>
                              <span>{order.location}</span>
                              <span>{order.headcount}</span>
                            </div>
                            <div className="text-xs text-gray-400 mt-1">{order.id}</div>
                            <div className="text-xs text-gray-400 mt-1">简历推荐人数：0</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{order.recruiter}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div>{order.paymentRule}</div>
                          <div>{order.paymentCondition}</div>
                          <div>{order.paymentAmount}</div>
                          <Button variant="link" className="text-blue-500 p-0 h-auto text-xs">返费标准</Button>
                        </div>
                      </TableCell>
                      <TableCell>{order.interviewCount}</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>{order.offerCount}</TableCell>
                      <TableCell>{order.entryCount}</TableCell>
                      <TableCell>
                        <div className="space-y-2">
                          <Button variant="outline" size="sm" className="w-full text-blue-500 border-blue-500 hover:bg-blue-50">职位详情</Button>
                          <Button variant="outline" size="sm" className="w-full text-blue-500 border-blue-500 hover:bg-blue-50">查看历史推荐</Button>
                          <Button variant="outline" size="sm" className="w-full text-blue-500 border-blue-500 hover:bg-blue-50">手动转状</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            
            <TabsContent value="completed" className="mt-0">
              <div className="text-center py-10 text-gray-500">
                暂无面试结束的职位
              </div>
            </TabsContent>
            
            <TabsContent value="all" className="mt-0">
              <div className="text-center py-10 text-gray-500">
                查看所有职位
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default MyOrders;
