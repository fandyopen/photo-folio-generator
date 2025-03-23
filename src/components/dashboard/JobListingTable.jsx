
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const JobListingTable = ({ jobListings }) => {
  return (
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
  );
};

export default JobListingTable;
