
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Layout from '../components/layout/Layout';
import { Search, User, Phone, Calendar, MapPin, Briefcase } from 'lucide-react';

const Personnel = () => {
  const [activeTab, setActiveTab] = useState("pending");
  
  // Mock data for personnel
  const personnelList = [
    {
      id: 'XE20250322202348',
      name: '郑心宇',
      gender: '女',
      age: 24,
      phone: '18721349528',
      position: '85度C・兼工种・东部・上海',
      location: '上海',
      status: '商洽',
      statusFull: '等待中・待等待',
      recommendPosition: '85℃・东部・上海（新）',
      interviewDate: '2025-03-22',
      deadline: '2025-03-25 00:00'
    },
    {
      id: 'XE20250322202300',
      name: '刘晓橙',
      gender: '女',
      age: 19,
      phone: '19551827925',
      position: '85度C・兼职外包・上海',
      location: '南京',
      status: '商洽',
      statusFull: '等待中・待等待',
      recommendPosition: '85度C・兼职・南京',
      interviewDate: '2025-03-22',
      deadline: '2025-03-25 00:00'
    },
    {
      id: 'XE20250322200248',
      name: '李贝贝',
      gender: '女',
      age: 22,
      phone: '17327080480',
      position: '85度C・兼职外包・上海',
      location: '南京',
      status: '商洽',
      statusFull: '等待中・待等待',
      recommendPosition: '85度C・兼职・南京',
      interviewDate: '2025-03-22',
      deadline: '2025-03-25 00:00'
    },
    {
      id: 'XE20250322120733',
      name: '徐明凯',
      gender: '男',
      age: 22,
      phone: '18567686150',
      position: '85度C・兼职外包・上海',
      location: '南京',
      status: '商洽',
      statusFull: '等待中・待等待',
      recommendPosition: '85度C・兼职・南京',
      interviewDate: '2025-03-21',
      deadline: '2025-03-25 00:00'
    },
    {
      id: 'XE20250321201488',
      name: '陈婕',
      gender: '女',
      age: 21,
      phone: '18965626830',
      position: '85度C・兼职外包・上海',
      location: '南京',
      status: '商洽',
      statusFull: '等待中・待等待',
      recommendPosition: '85度C・兼职・南京',
      interviewDate: '2025-03-21',
      deadline: '2025-03-25 00:00'
    }
  ];

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-xl font-medium mb-4">人员管理</h1>
        
        <div className="bg-white rounded-lg p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
            <Input placeholder="人员姓名/编号" />
            <Input placeholder="手机号" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="简历流程类型" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部</SelectItem>
                <SelectItem value="pending">等待中</SelectItem>
                <SelectItem value="interview">约面中</SelectItem>
                <SelectItem value="offer">Offer中</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="满意度招聘类型" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部</SelectItem>
                <SelectItem value="high">满意度高</SelectItem>
                <SelectItem value="medium">满意度中</SelectItem>
                <SelectItem value="low">满意度低</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="职位ID/职位名" />
            <Input placeholder="品牌名" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="服务中" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部</SelectItem>
                <SelectItem value="inservice">服务中</SelectItem>
                <SelectItem value="completed">服务完成</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="寻访子状态" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部</SelectItem>
                <SelectItem value="waiting">等待中</SelectItem>
                <SelectItem value="contacting">联系中</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="等访顾问" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部</SelectItem>
                <SelectItem value="consultant1">顾问1</SelectItem>
                <SelectItem value="consultant2">顾问2</SelectItem>
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
          <Tabs defaultValue="pending" onValueChange={setActiveTab}>
            <TabsList className="border-b w-full h-auto p-0 rounded-none">
              <TabsTrigger value="pending" className="px-4 py-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none">
                寻访中（9）
              </TabsTrigger>
              <TabsTrigger value="interviewed" className="px-4 py-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none">
                已约面（15）
              </TabsTrigger>
              <TabsTrigger value="arrived" className="px-4 py-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none">
                到面（0）
              </TabsTrigger>
              <TabsTrigger value="offer" className="px-4 py-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none">
                Offer（63）
              </TabsTrigger>
              <TabsTrigger value="onboarding" className="px-4 py-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none">
                入职办理（5）
              </TabsTrigger>
              <TabsTrigger value="employed" className="px-4 py-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none">
                入职（39）
              </TabsTrigger>
              <TabsTrigger value="rejected" className="px-4 py-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none">
                淘汰（84）
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="pending" className="mt-0 p-0">
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead>人员编号</TableHead>
                    <TableHead>姓名</TableHead>
                    <TableHead>项目名称</TableHead>
                    <TableHead>性别</TableHead>
                    <TableHead>年龄</TableHead>
                    <TableHead>手机号</TableHead>
                    <TableHead>期望城市</TableHead>
                    <TableHead>寻访顾问</TableHead>
                    <TableHead>寻访状况</TableHead>
                    <TableHead>人选状态</TableHead>
                    <TableHead>最近操作时间</TableHead>
                    <TableHead>截止有效时间</TableHead>
                    <TableHead>操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {personnelList.map((person) => (
                    <TableRow key={person.id}>
                      <TableCell>{person.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {person.name}
                          <Badge variant="outline" className="ml-1 bg-blue-50 text-blue-500 border-blue-200">
                            <User size={12} className="mr-1" />
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>{person.position}</TableCell>
                      <TableCell>{person.gender}</TableCell>
                      <TableCell>{person.age}</TableCell>
                      <TableCell>{person.phone}</TableCell>
                      <TableCell>{person.location}</TableCell>
                      <TableCell>{person.status}</TableCell>
                      <TableCell>{person.recommendPosition}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-blue-50 text-blue-500 border-blue-200">
                          {person.statusFull}
                        </Badge>
                      </TableCell>
                      <TableCell>{person.interviewDate}</TableCell>
                      <TableCell>{person.deadline}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="h-8 px-2 text-blue-500">
                            <Phone size={14} />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 px-2 text-blue-500">
                            <Calendar size={14} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="flex justify-between items-center p-4 border-t">
                <div>共9条</div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    上一页
                  </Button>
                  <Button variant="outline" size="sm" className="bg-blue-500 text-white">
                    1
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    下一页
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="interviewed" className="mt-0 p-0">
              <div className="text-center py-10 text-gray-500">
                已约面的人员列表
              </div>
            </TabsContent>
            
            <TabsContent value="arrived" className="mt-0 p-0">
              <div className="text-center py-10 text-gray-500">
                到面的人员列表
              </div>
            </TabsContent>
            
            <TabsContent value="offer" className="mt-0 p-0">
              <div className="text-center py-10 text-gray-500">
                已发Offer的人员列表
              </div>
            </TabsContent>
            
            <TabsContent value="onboarding" className="mt-0 p-0">
              <div className="text-center py-10 text-gray-500">
                入职办理中的人员列表
              </div>
            </TabsContent>
            
            <TabsContent value="employed" className="mt-0 p-0">
              <div className="text-center py-10 text-gray-500">
                已入职的人员列表
              </div>
            </TabsContent>
            
            <TabsContent value="rejected" className="mt-0 p-0">
              <div className="text-center py-10 text-gray-500">
                淘汰的人员列表
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Personnel;
