
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Layout from '../components/layout/Layout';
import { Search, Download } from 'lucide-react';

const Resumes = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  // Mock data for resumes
  const resumeList = [
    {
      id: 1,
      title: '传菜员.餐饮服务员.品牌服务员',
      name: '周某',
      gender: '女',
      age: '35岁',
      salaryRange: '5.3k-5.3k',
      jobType: '无要求型要求',
      location: '上海',
      workExperience: '1年',
      education: '本科',
      tags: ['高意愿', '维护过', '今日活跃'],
      actionTags: ['3天活跃', '直招优化', '招聘方'],
      updateTime: '2024-07-02',
      hasSeen: true
    },
    {
      id: 2,
      title: '美容及技术支持-其他服务',
      name: '许某',
      gender: '女',
      age: '44岁',
      salaryRange: '6k-6k',
      jobType: '兼职',
      location: '上海',
      workExperience: '3年',
      education: '本科',
      tags: ['高意愿', '维护过', '今日活跃'],
      actionTags: ['3天活跃', '直招优化'],
      updateTime: '2023-11-01',
      hasSeen: true
    },
    {
      id: 3,
      title: '配送/江服/店员/营业员/服务员',
      name: '庄某',
      gender: '女',
      age: '31岁',
      salaryRange: '暂无期望薪资',
      jobType: '兼职',
      location: '上海',
      workExperience: '1年',
      education: '本科',
      tags: ['高意愿', '维护过', '今日活跃'],
      actionTags: ['7天活跃', '直招优化'],
      updateTime: '2024-02-26',
      hasSeen: false,
      interviewInfo: {
        date: '2024-03-03',
        status: '寻访中-未',
        position: '小时工店员-上海茶艺吧',
        result: '无意向',
        reason: '不考虑'
      }
    },
    {
      id: 4,
      title: '免丁',
      name: '陈某',
      gender: '男',
      age: '32岁',
      salaryRange: '暂无期望薪资',
      jobType: '无要求型要求',
      location: '上海',
      workExperience: '2年',
      education: '本科',
      tags: ['高意愿', '维护过', '入职过', '今日活跃'],
      actionTags: ['直招优化'],
      updateTime: '2023-09-21',
      hasSeen: true,
      interviewInfo: {
        date: '2023-07-02',
        status: '离职',
        position: '南桥区-服务员-离职',
        result: ''
      }
    },
    {
      id: 5,
      title: '其他汽车职位',
      name: '曹某',
      gender: '男',
      age: '37岁',
      salaryRange: '暂无期望薪资',
      jobType: '全职',
      location: '武汉',
      workExperience: '0年',
      education: '大专',
      tags: ['到面阶段', '有维护', '高意愿', '维护过'],
      actionTags: [],
      updateTime: '2023-05-14',
      hasSeen: false,
      interviewInfo: {
        date: '2023-04-03',
        status: '未参透',
        position: '无人搬碎',
        result: ''
      },
      interviewResult: {
        date: '2023-03-04',
        status: '到面阶段',
        position: '罗卜快递-全仓[疑似为车辆职位]',
        result: ''
      }
    }
  ];

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-xl font-medium mb-4">简历库</h1>
        
        <div className="bg-white rounded-lg p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
            <Input placeholder="简历关键词" />
            <Input placeholder="姓名（多选）" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="期望职位" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部</SelectItem>
                <SelectItem value="waiter">服务员</SelectItem>
                <SelectItem value="technician">技术员</SelectItem>
              </SelectContent>
            </Select>
            <div className="relative">
              <Input placeholder="期望城市" />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="性别" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部</SelectItem>
                <SelectItem value="male">男</SelectItem>
                <SelectItem value="female">女</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="姓名" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
            <Input placeholder="手机号" />
            <div className="grid grid-cols-2 gap-2">
              <Input placeholder="年龄下限" />
              <Input placeholder="年龄上限" />
            </div>
            <div className="col-span-2 flex space-x-2">
              <Input type="date" placeholder="入职时间(起始)" />
              <span className="flex items-center">-</span>
              <Input type="date" placeholder="入职时间(结束)" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="简历来源" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部</SelectItem>
                <SelectItem value="direct">直招</SelectItem>
                <SelectItem value="recommend">推荐</SelectItem>
              </SelectContent>
            </Select>
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
          <Tabs defaultValue="all" onValueChange={setActiveTab}>
            <TabsList className="mb-6 bg-white p-0 h-auto border-b rounded-none w-full">
              <TabsTrigger 
                value="all" 
                className="px-8 py-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 data-[state=active]:shadow-none"
              >
                全部简历
              </TabsTrigger>
              <TabsTrigger 
                value="team" 
                className="px-8 py-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 data-[state=active]:shadow-none"
              >
                团队获取
              </TabsTrigger>
              <TabsTrigger 
                value="my" 
                className="px-8 py-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 data-[state=active]:shadow-none"
              >
                我的简历
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 gap-6">
                {resumeList.map((resume) => (
                  <div key={resume.id} className="border rounded-md">
                    <div className="grid grid-cols-4 gap-4 p-4 border-b">
                      {/* Left section */}
                      <div className="col-span-3">
                        <div className="flex items-start">
                          <div className="flex-1">
                            <div className="text-lg font-medium text-blue-500">{resume.title}</div>
                            <div className="mt-2 text-gray-600">
                              <span className="inline-block w-24">期望薪资：</span>
                              <span className="text-orange-500">{resume.salaryRange}</span>
                            </div>
                            <div className="mt-1 text-gray-600">
                              <span className="inline-block w-24">求职类型：</span>
                              <span>{resume.jobType}</span>
                            </div>
                            <div className="mt-1 text-gray-600">
                              <span className="inline-block w-24">意向城市：</span>
                              <span>{resume.location}</span>
                            </div>
                          </div>
                          
                          <div className="flex-shrink-0 ml-6">
                            <div className="flex items-center">
                              <span className="text-gray-600 mr-2">全站</span>
                              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 text-sm">
                                {resume.name[0]}
                              </div>
                              <span className="text-gray-900 ml-2">{resume.name}</span>
                            </div>
                            <div className="mt-2 text-gray-600">
                              <span className="inline-block w-16 text-right mr-2">工龄：</span>
                              <span>{resume.workExperience}</span>
                            </div>
                            <div className="mt-1 text-gray-600">
                              <span className="inline-block w-16 text-right mr-2">最高学历：</span>
                              <span>{resume.education}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center mt-3 flex-wrap gap-2">
                          {resume.tags.map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="bg-pink-50 text-pink-500 border-pink-200 rounded-sm">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center mt-3 flex-wrap gap-2">
                          {resume.actionTags.map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="bg-orange-50 text-orange-500 border-orange-200 rounded-sm">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {resume.interviewInfo && (
                          <div className="mt-3 text-sm">
                            <div className="flex items-baseline">
                              <span className="text-gray-500 mr-2">⊙ {resume.interviewInfo.date}</span>
                              <Badge variant="outline" className="bg-blue-50 text-blue-500 border-blue-200 rounded-sm">
                                {resume.interviewInfo.status}
                              </Badge>
                              <span className="ml-2">{resume.interviewInfo.position}</span>
                            </div>
                            {resume.interviewInfo.result && (
                              <div className="ml-5 text-gray-500">
                                {resume.interviewInfo.result} {resume.interviewInfo.reason && `- ${resume.interviewInfo.reason}`}
                              </div>
                            )}
                          </div>
                        )}

                        {resume.interviewResult && (
                          <div className="mt-2 text-sm">
                            <div className="flex items-baseline">
                              <span className="text-gray-500 mr-2">⊙ {resume.interviewResult.date}</span>
                              <Badge variant="outline" className="bg-blue-50 text-blue-500 border-blue-200 rounded-sm">
                                {resume.interviewResult.status}
                              </Badge>
                              <span className="ml-2">{resume.interviewResult.position}</span>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Right section - actions */}
                      <div className="col-span-1 flex flex-col justify-center items-end">
                        <div className="text-right text-gray-400 text-sm">
                          更新于：{resume.updateTime}
                        </div>
                        <div className="mt-4">
                          <Button className="bg-blue-500 hover:bg-blue-600 w-full mb-2">
                            <Download className="h-4 w-4 mr-2" />
                            获取简历
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="team" className="mt-0">
              <div className="text-center py-10 text-gray-500">
                团队获取的简历列表
              </div>
            </TabsContent>
            
            <TabsContent value="my" className="mt-0">
              <div className="text-center py-10 text-gray-500">
                我的简历列表
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Resumes;
