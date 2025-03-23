
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Layout from '../components/layout/Layout';
import { ChevronLeft, Download, Calendar, Clock, MapPin, Briefcase, X } from 'lucide-react';

const ResumeDetail = () => {
  const { id } = useParams();
  
  // Mock resume data
  const resumeData = {
    id: id,
    title: '选址开发・苏州',
    company: '新先达集团',
    basicInfo: {
      position: '选址开发',
      company: '新先达集团',
      requiredPeople: 10,
      jobCategory: '其他类',
      workLocation: '苏州 - 新天地',
      workAddress: '苏州市姑苏区苏站路1599号3号楼7楼703',
      ageRange: '24-35',
      gender: '不限',
      education: '大专',
      experience: '1-3年',
      interviewLocation: '苏州 - 新天地',
      interviewAddress: '苏州市姑苏区苏站路1599号3号楼7楼703',
      interviewDate: '2025.03.17',
      deadline: '2025/03/30',
      workHours: '-',
      contactPerson: '蔡嘉玲',
      salesPerson: '周海建(空约销售),周海建(执行销售),蔡嘉玲(服务PM)'
    },
    jobDescription: [
      '1、根据公司发展战略，制定门店选址标准和策略，确保选址工作高效推进',
      '2、开发并维护与物业，加盟商等合作伙伴的关系，推动招商合作常地',
      '3、协调内部资源，推动新店从选址到开业的全流程开发工作'
    ],
    recruiterComments: '',
    paymentTerms: {
      type: '一次性返费',
      condition: '非入职即返',
      firstTerm: '寻勤满30天',
      firstAmount: '2500元/人',
      secondTerm: '寻勤满90天',
      secondAmount: '10000元/人',
      maxAmount: '满足全部返费条件最高返费额15000元/人'
    }
  };

  const [activeTab, setActiveTab] = useState('basic');

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="sm" className="mr-2">
            <ChevronLeft size={16} />
          </Button>
          <h1 className="text-xl font-medium">职位基本信息</h1>
          <Button variant="outline" size="sm" className="ml-auto">
            更新日志
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="grid grid-cols-4 gap-y-4">
                <div className="col-span-1 text-gray-500">职位名称：</div>
                <div className="col-span-3">{resumeData.basicInfo.position}</div>
                
                <div className="col-span-1 text-gray-500">品牌：</div>
                <div className="col-span-3">{resumeData.basicInfo.company}</div>
                
                <div className="col-span-1 text-gray-500">需求人数：</div>
                <div className="col-span-3">{resumeData.basicInfo.requiredPeople}人</div>
                
                <div className="col-span-1 text-gray-500">职能：</div>
                <div className="col-span-3">{resumeData.basicInfo.jobCategory}</div>
                
                <div className="col-span-1 text-gray-500">工作地点：</div>
                <div className="col-span-3">{resumeData.basicInfo.workLocation}</div>
                <div className="col-span-1"></div>
                <div className="col-span-3 text-gray-600 text-sm">{resumeData.basicInfo.workAddress}</div>
                
                <div className="col-span-1 text-gray-500">年龄：</div>
                <div className="col-span-3">{resumeData.basicInfo.ageRange}</div>
                
                <div className="col-span-1 text-gray-500">性别：</div>
                <div className="col-span-3">{resumeData.basicInfo.gender}</div>
                
                <div className="col-span-1 text-gray-500">学历：</div>
                <div className="col-span-3">{resumeData.basicInfo.education}</div>
                
                <div className="col-span-1 text-gray-500">工作经验：</div>
                <div className="col-span-3">{resumeData.basicInfo.experience}</div>
                
                <div className="col-span-1 text-gray-500">面试地点：</div>
                <div className="col-span-3">{resumeData.basicInfo.interviewLocation}</div>
                <div className="col-span-1"></div>
                <div className="col-span-3 text-gray-600 text-sm">{resumeData.basicInfo.interviewAddress}</div>
                
                <div className="col-span-1 text-gray-500">面试时间：</div>
                <div className="col-span-3">
                  <div className="flex items-center">
                    {resumeData.basicInfo.interviewDate}
                    <Button variant="ghost" size="sm" className="ml-2 text-gray-500 h-6 p-0">
                      <Calendar size={14} />
                    </Button>
                  </div>
                </div>
                
                <div className="col-span-1 text-gray-500">结束时间：</div>
                <div className="col-span-3">{resumeData.basicInfo.deadline}</div>
                
                <div className="col-span-1 text-gray-500">工作时间：</div>
                <div className="col-span-3">{resumeData.basicInfo.workHours}</div>
                
                <div className="col-span-1 text-gray-500">职位负责人：</div>
                <div className="col-span-3">{resumeData.basicInfo.contactPerson}</div>
                
                <div className="col-span-1 text-gray-500">职位参与人：</div>
                <div className="col-span-3">{resumeData.basicInfo.salesPerson}</div>
                
                <div className="col-span-1 text-gray-500">职位亮点：</div>
                <div className="col-span-3"></div>
                
                <div className="col-span-1 text-gray-500">职位描述：</div>
                <div className="col-span-3">
                  <ul className="list-decimal pl-5 space-y-2">
                    {resumeData.jobDescription.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">结算规则</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">返费类型：</span>
                    <span>{resumeData.paymentTerms.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">生效日期：</span>
                    <span>2025-03-21</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">返费规则：</span>
                    <span>{resumeData.paymentTerms.condition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">价格规则：</span>
                    <span>一口价</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">返费条件：</span>
                    <span>{resumeData.paymentTerms.firstTerm}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">返费金额：</span>
                    <span>{resumeData.paymentTerms.firstAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">返费条件：</span>
                    <span>{resumeData.paymentTerms.secondTerm}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">返费金额：</span>
                    <span>{resumeData.paymentTerms.secondAmount}</span>
                  </div>
                  <div className="text-red-500 text-sm">
                    {resumeData.paymentTerms.maxAmount}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">职位期限</h3>
                <div className="border rounded-md p-4">
                  <div className="flex justify-between mb-4">
                    <div className="text-sm">推荐周期：</div>
                    <div className="text-sm">2025-03-17~2025-03-23</div>
                    <Button variant="ghost" size="sm" className="p-0 h-6 text-gray-500">
                      <Calendar size={14} />
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <div>预计约面率：</div>
                      <div>80.0%</div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>预计offer率：</div>
                      <div>50.0%</div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>预计入职率：</div>
                      <div>50.0%</div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr>
                          <th className="font-normal text-left">到期时期:</th>
                          <th className="font-normal text-center">日期</th>
                          <th className="font-normal text-center">周一</th>
                          <th className="font-normal text-center">周二</th>
                          <th className="font-normal text-center">周三</th>
                          <th className="font-normal text-center">周四</th>
                          <th className="font-normal text-center">周五</th>
                          <th className="font-normal text-center">周六</th>
                          <th className="font-normal text-center">周日</th>
                          <th className="font-normal text-center">合计</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>PM推荐</td>
                          <td className="text-center">10</td>
                          <td className="text-center">0</td>
                          <td className="text-center">0</td>
                          <td className="text-center">10</td>
                          <td className="text-center">0</td>
                          <td className="text-center">0</td>
                          <td className="text-center">0</td>
                          <td className="text-center">20</td>
                        </tr>
                        <tr>
                          <td>其他公司已推荐</td>
                          <td className="text-center">0</td>
                          <td className="text-center">1</td>
                          <td className="text-center">0</td>
                          <td className="text-center">0</td>
                          <td className="text-center">0</td>
                          <td className="text-center">0</td>
                          <td className="text-center">0</td>
                          <td className="text-center">1</td>
                        </tr>
                        <tr>
                          <td>猎头原有推荐已推荐</td>
                          <td className="text-center">0</td>
                          <td className="text-center">0</td>
                          <td className="text-center">0</td>
                          <td className="text-center">0</td>
                          <td className="text-center">0</td>
                          <td className="text-center">0</td>
                          <td className="text-center">0</td>
                          <td className="text-center">0</td>
                        </tr>
                      </tbody>
                    </table>
                    
                    <div className="flex mt-4 space-x-2">
                      <div className="text-sm">相对顾问:</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="flex items-center gap-1 bg-gray-100">
                          刘德荣
                          <X size={12} className="cursor-pointer" />
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1 bg-gray-100">
                          周瑜
                          <X size={12} className="cursor-pointer" />
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-sm text-gray-600">
                      <p>根据职位预转化化(统计)看,完成您的推荐目标预计需要面试0</p>
                      <p>预计完成offer0</p>
                      <p>预计完成入职0</p>
                      <p className="text-xs mt-2">最高预估收益0(预估收益基本按照入职率和通常全部服务期预测计算,最终收益以实际为准)</p>
                    </div>
                    
                    <div className="mt-4 flex justify-end gap-2">
                      <Button variant="outline">取消</Button>
                      <Button className="bg-blue-500 hover:bg-blue-600">确定推荐</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResumeDetail;
