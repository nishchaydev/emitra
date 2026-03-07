'use client';

import { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import Image from 'next/image';

interface LogoUploadProps {
    onUploadSuccess: (url: string) => void;
    onUploadError: (error: string) => void;
}

export function LogoUpload({ onUploadSuccess, onUploadError }: LogoUploadProps) {
    const [preview, setPreview] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);

        // Upload to Cloudinary (via server action)
        setIsUploading(true);
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/upload/logo', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                onUploadSuccess(data.url);
            } else {
                onUploadError(data.error || 'Upload failed');
            }
        } catch (err) {
            onUploadError('An unexpected error occurred during upload.');
        } finally {
            setIsUploading(false);
        }
    };

    const removePreview = () => {
        setPreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="w-full">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
                Gym Logo
            </label>

            <div
                className={`relative border-2 border-dashed rounded-2xl p-6 transition-all cursor-pointer flex flex-col items-center justify-center min-h-[160px] ${preview ? 'border-primary/50 bg-primary/5' : 'border-slate-200 hover:border-primary/30 hover:bg-slate-50'
                    }`}
                onClick={() => !isUploading && fileInputRef.current?.click()}
            >
                {isUploading ? (
                    <div className="flex flex-col items-center">
                        <Loader2 className="h-8 w-8 text-primary animate-spin mb-2" />
                        <p className="text-sm text-slate-500 font-medium">Uploading logo...</p>
                    </div>
                ) : preview ? (
                    <div className="relative w-32 h-32 group">
                        <Image
                            src={preview}
                            alt="Logo preview"
                            fill
                            className="object-contain rounded-lg"
                        />
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                removePreview();
                            }}
                            className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="h-12 w-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mb-4">
                            <Upload className="h-6 w-6" />
                        </div>
                        <p className="text-sm text-slate-600 font-medium">
                            Click or drag and drop to upload your logo
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                            PNG, JPG or SVG (max. 2MB)
                        </p>
                    </>
                )}

                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                />
            </div>
        </div>
    );
}
