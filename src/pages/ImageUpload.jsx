
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusCircle, Upload, X } from 'lucide-react';

const ImageUpload = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    // Create preview URLs for the images
    const newPreviewUrls = files.map(file => URL.createObjectURL(file));
    
    setUploadedImages(prev => [...prev, ...files]);
    setPreviewUrls(prev => [...prev, ...newPreviewUrls]);
  };

  const removeImage = (index) => {
    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(previewUrls[index]);
    
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically upload the images to a server
    console.log('Images to upload:', uploadedImages);
    alert(`${uploadedImages.length} 图片上传成功!`);
    
    // Clear the uploaded images after submission
    previewUrls.forEach(url => URL.revokeObjectURL(url));
    setUploadedImages([]);
    setPreviewUrls([]);
  };

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">图片上传</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <label htmlFor="image-upload" className="block text-sm font-medium">
                选择图片
              </label>
              
              <div className="mt-1 flex items-center">
                <label 
                  htmlFor="image-upload" 
                  className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  添加图片
                </label>
                <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                />
                
                <span className="ml-3 text-sm text-gray-500">
                  {uploadedImages.length > 0 ? `已选择 ${uploadedImages.length} 个文件` : '未选择文件'}
                </span>
              </div>
            </div>
            
            {previewUrls.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-medium mb-2">预览图片:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {previewUrls.map((url, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={url} 
                        alt={`preview ${index}`} 
                        className="h-32 w-full object-cover rounded-lg border border-gray-300" 
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="flex justify-end">
            <Button 
              type="submit" 
              className="inline-flex items-center px-4 py-2"
              disabled={uploadedImages.length === 0}
            >
              <Upload className="mr-2 h-4 w-4" />
              上传图片
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ImageUpload;
