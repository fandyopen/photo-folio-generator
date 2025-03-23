
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Layout from '../components/layout/Layout';
import { Search } from 'lucide-react';

const MyPosition = () => {
  // Mock data for job positions
  const jobPositions = [
    {
      id: 'ID:21617',
      title: '燕窝分拣员',
      location: '南昌',
      status: '已更新',
      badge: '已更新',
      company: '京东青鲜',
      jobType: '1元/件',
      headcount: '需20人',
      recruiter: 'PM 章子莹',
      paymentRule: '一次性',
      paymentCondition: '非入职即返',
      paymentAmount: '1000元/人',
      interviewCount: 0,
      offerCount: 0,
      entryCount: 2
    },
    {
      id: 'ID:21555',
      title: '85度c兼职',
      location: '南京',
      status: '已更新',
      badge: '新批核',
      company: '85度C',
      jobType: '22元/时',
      headcount: '需20人',
      recruiter: 'PM 王欣欣',
      paymentRule: '一次性',
      paymentCondition: '非入职即返',
      paymentAmount: '350元/人',
      interviewCount: 4,
      offerCount: 0,
      entryCount: 4
    },
    {
      id: 'ID:21551',
      title: '85度c全职',
      location: '南京',
      status: '已更新',
      badge: '新批核',
      company: '85度C',
      jobType: '3200元/月',
      headcount: '需20人',
      recruiter: 'PM 王欣欣',
      paymentRule: '一次性',
      paymentCondition: '非入职即返',
      paymentAmount: '1200元/人',
      interviewCount: 15,
      offerCount: 0,
      entryCount: 3
    },
    {
      id: 'ID:21263',
      title: '85度c全职',
      location: '北京',
      status: '已更新',
      badge: '新批核',
      company: '85度C',
      jobType: '4500元/月',
      headcount: '需5人',
      recruiter: 'PM 王欣欣',
      paymentRule: '一次性',
      paymentCondition: '非入职即返',
      paymentAmount: '1200元/人',
      interviewCount: 0,
      offerCount: 0,
      entryCount: 0
    },
    {
      id: 'ID:20869',
      title: '85北方区域兼职',
      location: '济南',
      status: '已更新',
      badge: '面试核校',
      company: '85度C',
      jobType: '18元/时',
      headcount: '需10人',
      recruiter: 'PM 王欣欣',
      paymentRule: '一次性',
      paymentCondition: '非入职即返',
      paymentAmount: '350元/人',
      interviewCount: 1,
      offerCount: 0,
      entryCount: 3
    }
  ];

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-xl font-medium mb-4">我的位置</h1>
        
        <div className="bg-white rounded-lg p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
            <Input placeholder="品牌名称" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="职能" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部</SelectItem>
                <SelectItem value="sales">销售</SelectItem>
                <SelectItem value="operation">运营</SelectItem>
                <SelectItem value="hr">人事</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="返费类型" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部</SelectItem>
                <SelectItem value="one-time">一次性返费</SelectItem>
                <SelectItem value="monthly">月返费</SelectItem>
                <SelectItem value="daily">日返费</SelectItem>
              </SelectContent>
            </Select>
            <div className="relative">
              <Input placeholder="面试或者工作城市" />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
            </div>
            <div className="relative">
              <Input placeholder="销售城市" />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
            </div>
            <Input placeholder="职位ID/职位名" />
          </div>
          <div className="flex items-center gap-2">
            <Button className="bg-blue-500 hover:bg-blue-600">
              <Search className="h-4 w-4 mr-2" />
              搜索
            </Button>
            <Button variant="outline">重置</Button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg">
          <div className="px-4 py-3 border-b">
            <div className="flex items-center gap-2">
              <Button variant="outline" className="h-8 bg-blue-50 text-blue-500 border-blue-200 hover:bg-blue-100">我的接单</Button>
              <Button variant="outline" className="h-8">面试结束</Button>
              <Button variant="outline" className="h-8">全部职位</Button>
            </div>
          </div>
          
          <div className="p-4">
            <div className="bg-blue-50 text-blue-700 p-3 mb-4 rounded-md flex items-center">
              <span className="text-blue-500 mr-2">•</span>
              <p>职位推荐你于今个周期一共大订单量是 (连节假日和双休每一工作日)，力争明早准提交订单工作报表！请于周初另外12品牌促销终分享对配套更多！</p>
            </div>
            
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
                {jobPositions.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell>
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                          <span className="text-xs text-gray-500">图片</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <Badge variant="outline" className="bg-red-50 text-red-500 border-red-200 text-xs">
                              {job.status}
                            </Badge>
                            <span className="font-medium">{job.title}・{job.location}</span>
                          </div>
                          <div className="text-sm text-gray-500 mt-1">{job.company}</div>
                          <div className="text-sm text-gray-500 flex items-center gap-2">
                            <span>{job.jobType}</span>
                            <span>{job.location}</span>
                            <span>{job.headcount}</span>
                          </div>
                          <div className="text-xs text-gray-400 mt-1">{job.id}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{job.recruiter}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div>{job.paymentRule}</div>
                        <div>{job.paymentCondition}</div>
                        <div>{job.paymentAmount}</div>
                        <Button variant="link" className="text-blue-500 p-0 h-auto text-xs">返费标准</Button>
                      </div>
                    </TableCell>
                    <TableCell>{job.interviewCount}</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>{job.offerCount}</TableCell>
                    <TableCell>{job.entryCount}</TableCell>
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyPosition;
