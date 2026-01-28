import Link from 'next/link';
import Image from 'next/image';
import { Globe, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 py-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-6">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative h-32 w-96">
                            <Image
                                src="https://res.cloudinary.com/dkits80xk/image/upload/v1769612105/0ed66ac0-9d39-4eb0-a4f9-b82da198b557.png"
                                alt="eMitra Technologies"
                                fill
                                className="object-contain object-left"
                                unoptimized
                            />
                        </div>
                    </Link>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        Where technology meets trust. Providing enterprise-grade solutions for institutions worldwide.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                            <Globe className="h-5 w-5" />
                        </a>
                        <a href="#" className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                {/* Solutions */}
                <div>
                    <h4 className="font-bold mb-6">Solutions</h4>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li><a href="#" className="hover:text-primary transition-colors">Enterprise ERP</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Education Suite</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Data Analytics</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Custom Workflow</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="font-bold mb-6">Company</h4>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Partner Program</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Press Kit</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="font-bold mb-6">Support</h4>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">System Status</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Contact Sales</a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                <p>© 2024 eMitra Technologies. All rights reserved.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-slate-600">Privacy Policy</a>
                    <a href="#" className="hover:text-slate-600">Terms of Service</a>
                    <a href="#" className="hover:text-slate-600">Security</a>
                </div>
            </div>
        </footer>
    );
}
