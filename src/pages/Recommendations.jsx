
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Layout from '../components/layout/Layout';
import { Search, Calendar, History, UserPlus } from 'lucide-react';

const Recommendations = () => {
  const [activeTab, setActiveTab] = useState('my-points');
  
  // Mock data for recommendations
  const recommendationPoints = {
    available: 6,
    validPoints: 0,
    todayPoints: '0/0/0', // Today/Week/Month
    history: [
      { id: 1, date: '2025-03-23 00:00:12', resumeId: 0, actionType: '过期清除', changePoints: 0, validChange: 0, totalPoints: 6, validPoints: 0 },
      { id: 2, date: '2025-03-22 00:00:13', resumeId: 0, actionType: '过期清除', changePoints: 0, validChange: 0, totalPoints: 6, validPoints: 0 },
      { id: 3, date: '2025-03-21 00:00:12', resumeId: 0, actionType: '过期清除', changePoints: 0, validChange: 0, totalPoints: 6, validPoints: 0 },
      { id: 4, date: '2025-03-20 00:00:12', resumeId: 0, actionType: '过期清除', changePoints: 0, validChange: 0, totalPoints: 6, validPoints: 0 },
      { id: 5, date: '2025-03-19 00:00:12', resumeId: 0, actionType: '过期清除', changePoints: 0, validChange: 0, totalPoints: 6, validPoints: 0 },
      { id: 6, date: '2025-03-18 00:00:13', resumeId: 0, actionType: '过期清除', changePoints: 0, validChange: 0, totalPoints: 6, validPoints: 0 },
      { id: 7, date: '2025-03-17 00:00:12', resumeId: 0, actionType: '过期清除', changePoints: 0, validChange: 0, totalPoints: 6, validPoints: 0 },
      { id: 8, date: '2025-03-16 00:00:12', resumeId: 0, actionType: '过期清除', changePoints: 0, validChange: 0, totalPoints: 6, validPoints: 0 },
      { id: 9, date: '2025-03-15 00:00:13', resumeId: 0, actionType: '过期清除', changePoints: 0, validChange: 0, totalPoints: 6, validPoints: 0 },
      { id: 10, date: '2025-03-14 00:00:12', resumeId: 0, actionType: '过期清除', changePoints: 0, validChange: 0, totalPoints: 6, validPoints: 0 }
    ]
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center mb-6">
          <h1 className="text-xl font-medium">推荐管理</h1>
          <div className="ml-2 text-gray-500">/</div>
          <div className="ml-2 text-blue-500">我的简历点</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 mb-6">
          <div className="flex items-center mb-6">
            <div className="font-medium text-lg flex-1">陈文炎</div>
            <div className="flex items-center gap-4 text-sm">
              <div>可用简历点数（永久）：{recommendationPoints.available}</div>
              <div>可用简历点数（有效期）：{recommendationPoints.validPoints}</div>
              <div>即将到期简历点数（明日/本周/本月）：{recommendationPoints.todayPoints}</div>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Input placeholder="简历ID" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="数据类型" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部</SelectItem>
                  <SelectItem value="expire">过期</SelectItem>
                  <SelectItem value="used">已使用</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex space-x-2">
                <Input type="date" placeholder="开始时间" />
                <span className="flex items-center">-</span>
                <Input type="date" placeholder="结束时间" />
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
          
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead>时间</TableHead>
                <TableHead>简历ID</TableHead>
                <TableHead>数据类型</TableHead>
                <TableHead>简历点变更（永久）</TableHead>
                <TableHead>简历点变更（有效期）</TableHead>
                <TableHead>简历点余额（永久）</TableHead>
                <TableHead>简历点余额（有效期）</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recommendationPoints.history.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.resumeId}</TableCell>
                  <TableCell>{record.actionType}</TableCell>
                  <TableCell>{record.changePoints}</TableCell>
                  <TableCell>{record.validChange}</TableCell>
                  <TableCell>{record.totalPoints}</TableCell>
                  <TableCell>{record.validPoints}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <div className="flex justify-end mt-4">
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
        </div>
      </div>
    </Layout>
  );
};

export default Recommendations;
