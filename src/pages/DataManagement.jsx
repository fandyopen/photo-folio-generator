
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Layout from '../components/layout/Layout';
import { Search, Download, Upload, BarChart, PieChart, TrendingUp } from 'lucide-react';

const DataManagement = () => {
  const [activeTab, setActiveTab] = useState('upload');
  
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-xl font-medium mb-6">数据管理</h1>
        
        <div className="bg-white rounded-lg overflow-hidden">
          <Tabs defaultValue="upload" onValueChange={setActiveTab}>
            <TabsList className="w-full bg-white border-b rounded-none p-0">
              <TabsTrigger
                value="upload"
                className="flex-1 py-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none"
              >
                数据上传
              </TabsTrigger>
              <TabsTrigger
                value="statistics"
                className="flex-1 py-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none"
              >
                数据统计
              </TabsTrigger>
              <TabsTrigger
                value="reports"
                className="flex-1 py-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none"
              >
                报表分析
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="upload" className="p-6">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-xl font-medium mb-2">数据上传中心</h2>
                  <p className="text-gray-500">上传您的数据文件进行分析和管理</p>
                </div>
                
                <div className="border border-dashed border-gray-300 rounded-lg p-8 text-center mb-8">
                  <div className="flex flex-col items-center">
                    <Upload className="h-12 w-12 text-blue-500 mb-4" />
                    <h3 className="text-lg font-medium mb-2">拖拽文件到这里或点击上传</h3>
                    <p className="text-gray-500 mb-4">支持 Excel, CSV 文件格式</p>
                    <Button className="bg-blue-500 hover:bg-blue-600">
                      选择文件
                    </Button>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium mb-4">上传历史</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>文件名</TableHead>
                        <TableHead>上传时间</TableHead>
                        <TableHead>数据类型</TableHead>
                        <TableHead>状态</TableHead>
                        <TableHead>操作</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>简历数据_20250315.xlsx</TableCell>
                        <TableCell>2025-03-15 14:30</TableCell>
                        <TableCell>简历数据</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-600 border-green-200">
                            处理完成
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" className="text-blue-500">
                            <Download size={14} className="mr-1" />
                            下载
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>职位数据_20250310.xlsx</TableCell>
                        <TableCell>2025-03-10 09:15</TableCell>
                        <TableCell>职位数据</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-600 border-green-200">
                            处理完成
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" className="text-blue-500">
                            <Download size={14} className="mr-1" />
                            下载
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="statistics" className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">总推荐人数</h3>
                    <BarChart className="text-blue-500" />
                  </div>
                  <div className="text-3xl font-bold mb-2">2,547</div>
                  <div className="text-sm text-gray-500">较上月增长 8.5%</div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">面试通过率</h3>
                    <PieChart className="text-purple-500" />
                  </div>
                  <div className="text-3xl font-bold mb-2">68.3%</div>
                  <div className="text-sm text-gray-500">较上月增长 2.1%</div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">平均返费金额</h3>
                    <TrendingUp className="text-orange-500" />
                  </div>
                  <div className="text-3xl font-bold mb-2">¥5,280</div>
                  <div className="text-sm text-gray-500">较上月增长 12.4%</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-6 mb-8">
                <h3 className="text-lg font-medium mb-4">数据筛选</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <Input type="date" placeholder="开始日期" />
                  <Input type="date" placeholder="结束日期" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="职位类型" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">全部</SelectItem>
                      <SelectItem value="fulltime">全职</SelectItem>
                      <SelectItem value="parttime">兼职</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="城市" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">全部</SelectItem>
                      <SelectItem value="shanghai">上海</SelectItem>
                      <SelectItem value="beijing">北京</SelectItem>
                      <SelectItem value="guangzhou">广州</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600">
                  <Search className="h-4 w-4 mr-2" />
                  查询
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg border p-6">
                  <h3 className="text-lg font-medium mb-4">推荐转化率数据</h3>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">此处显示推荐转化率图表</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg border p-6">
                  <h3 className="text-lg font-medium mb-4">职位分布数据</h3>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">此处显示职位分布图表</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reports" className="p-6">
              <div className="mb-6">
                <h2 className="text-xl font-medium mb-4">报表分析</h2>
                <p className="text-gray-500">选择并生成您需要的分析报表</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg border p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-3">
                      <BarChart size={20} />
                    </div>
                    <h3 className="text-lg font-medium">推荐人员分析</h3>
                  </div>
                  <p className="text-gray-500 mb-4 text-sm">分析推荐人员的转化率、面试通过率等关键指标</p>
                  <Button variant="outline" className="w-full">生成报表</Button>
                </div>
                
                <div className="bg-white rounded-lg border p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 mr-3">
                      <PieChart size={20} />
                    </div>
                    <h3 className="text-lg font-medium">职位分布分析</h3>
                  </div>
                  <p className="text-gray-500 mb-4 text-sm">分析职位的地区分布、行业分布等维度数据</p>
                  <Button variant="outline" className="w-full">生成报表</Button>
                </div>
                
                <div className="bg-white rounded-lg border p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-3">
                      <TrendingUp size={20} />
                    </div>
                    <h3 className="text-lg font-medium">收益分析报表</h3>
                  </div>
                  <p className="text-gray-500 mb-4 text-sm">分析各职位的返费收益、预期收入等财务数据</p>
                  <Button variant="outline" className="w-full">生成报表</Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border">
                <div className="p-4 border-b">
                  <h3 className="font-medium">最近生成的报表</h3>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>报表名称</TableHead>
                      <TableHead>生成时间</TableHead>
                      <TableHead>报表类型</TableHead>
                      <TableHead>状态</TableHead>
                      <TableHead>操作</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Q1季度推荐分析报表</TableCell>
                      <TableCell>2025-03-20 16:45</TableCell>
                      <TableCell>推荐人员分析</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-600 border-green-200">
                          已完成
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="text-blue-500">
                          <Download size={14} className="mr-1" />
                          下载
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>职位返费收益分析</TableCell>
                      <TableCell>2025-03-15 10:30</TableCell>
                      <TableCell>收益分析报表</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-600 border-green-200">
                          已完成
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="text-blue-500">
                          <Download size={14} className="mr-1" />
                          下载
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>区域职位分布统计</TableCell>
                      <TableCell>2025-03-10 09:15</TableCell>
                      <TableCell>职位分布分析</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-600 border-green-200">
                          已完成
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="text-blue-500">
                          <Download size={14} className="mr-1" />
                          下载
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default DataManagement;
