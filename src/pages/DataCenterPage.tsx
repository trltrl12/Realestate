import React, { useState, useCallback } from 'react';
import {
  Upload,
  FileSpreadsheet,
  CheckCircle2,
  Clock,
  AlertCircle,
  Trash2,
  Download,
  Filter,
} from 'lucide-react';
import { UploadedFile } from '../types';

const mockUploads: UploadedFile[] = [
  {
    id: '1',
    fileName: 'january_leads_2026.csv',
    fileSize: '2.4 MB',
    uploadDate: '2026-02-14',
    status: 'Synced to Power BI',
    type: 'Lead Data',
  },
  {
    id: '2',
    fileName: 'q4_ad_spend_report.xlsx',
    fileSize: '1.8 MB',
    uploadDate: '2026-02-12',
    status: 'Synced to Power BI',
    type: 'Ad Spend',
  },
  {
    id: '3',
    fileName: 'property_portfolio_feb.csv',
    fileSize: '3.1 MB',
    uploadDate: '2026-02-10',
    status: 'Processing',
    type: 'Property Details',
  },
  {
    id: '4',
    fileName: 'marketing_channels_q1.xlsx',
    fileSize: '980 KB',
    uploadDate: '2026-02-08',
    status: 'Synced to Power BI',
    type: 'Ad Spend',
  },
  {
    id: '5',
    fileName: 'leads_corrupted_data.csv',
    fileSize: '156 KB',
    uploadDate: '2026-02-05',
    status: 'Failed',
    type: 'Lead Data',
  },
];

const statusConfig = {
  'Synced to Power BI': {
    icon: CheckCircle2,
    className: 'text-emerald-700 bg-emerald-50',
  },
  Processing: {
    icon: Clock,
    className: 'text-amber-700 bg-amber-50',
  },
  Failed: {
    icon: AlertCircle,
    className: 'text-red-700 bg-red-50',
  },
};

export default function DataCenterPage() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploads] = useState<UploadedFile[]>(mockUploads);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    // In production: handle the files from e.dataTransfer.files
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Data Center</h1>
          <p className="text-navy-500 mt-1">
            Upload your CSV and Excel files to sync with Power BI.
          </p>
        </div>
      </div>

      {/* Upload area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-200 cursor-pointer mb-8 ${
          isDragOver
            ? 'border-emerald-400 bg-emerald-50/50'
            : 'border-navy-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/30'
        }`}
      >
        <div className="flex flex-col items-center">
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
              isDragOver ? 'bg-emerald-100' : 'bg-navy-100'
            }`}
          >
            <Upload
              className={`w-8 h-8 ${isDragOver ? 'text-emerald-600' : 'text-navy-400'}`}
            />
          </div>
          <h3 className="text-lg font-semibold text-navy-900 mb-2">
            {isDragOver ? 'Drop your files here' : 'Drag & drop your files here'}
          </h3>
          <p className="text-sm text-navy-500 mb-4">
            Supports CSV and Excel files (.csv, .xlsx, .xls) up to 50 MB
          </p>
          <label className="btn-primary text-sm cursor-pointer">
            <input type="file" className="hidden" accept=".csv,.xlsx,.xls" multiple />
            Browse Files
          </label>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-navy-400">
            <span className="flex items-center gap-1.5">
              <FileSpreadsheet className="w-4 h-4" />
              Lead Data
            </span>
            <span className="flex items-center gap-1.5">
              <FileSpreadsheet className="w-4 h-4" />
              Ad Spend Reports
            </span>
            <span className="flex items-center gap-1.5">
              <FileSpreadsheet className="w-4 h-4" />
              Property Details
            </span>
          </div>
        </div>
      </div>

      {/* Recent uploads table */}
      <div className="card">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 border-b border-navy-100">
          <h2 className="text-lg font-bold text-navy-900">Recent Uploads</h2>
          <div className="flex items-center gap-3">
            <button className="btn-ghost text-sm gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="btn-ghost text-sm gap-2">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-navy-100">
                <th className="text-left px-6 py-3 text-xs font-semibold text-navy-500 uppercase tracking-wider">
                  File Name
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-navy-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-navy-500 uppercase tracking-wider">
                  Size
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-navy-500 uppercase tracking-wider">
                  Upload Date
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-navy-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-navy-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-50">
              {uploads.map((file) => {
                const StatusIcon = statusConfig[file.status].icon;
                return (
                  <tr key={file.id} className="hover:bg-navy-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-navy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileSpreadsheet className="w-4 h-4 text-navy-500" />
                        </div>
                        <span className="text-sm font-medium text-navy-900 truncate max-w-[200px]">
                          {file.fileName}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-navy-600">{file.type}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-navy-500">{file.fileSize}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-navy-500">{file.uploadDate}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${statusConfig[file.status].className}`}
                      >
                        <StatusIcon className="w-3.5 h-3.5" />
                        {file.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-1.5 text-navy-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* Pagination hint */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-navy-100">
          <p className="text-sm text-navy-500">
            Showing <span className="font-medium text-navy-700">1-5</span> of{' '}
            <span className="font-medium text-navy-700">5</span> uploads
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm text-navy-500 bg-navy-50 rounded-lg" disabled>
              Previous
            </button>
            <button className="px-3 py-1.5 text-sm text-navy-500 bg-navy-50 rounded-lg" disabled>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
