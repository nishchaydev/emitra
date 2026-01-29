import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'eMitra Technologies | Smart Systems for Complex Institutions';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    // We're using a system font fallback since loading custom fonts in Edge can be flaky without local assets
    // If you have the font file locally, you can load it here.

    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // fontFamily: 'Inter', // Removed to avoid missing font warning
                    position: 'relative',
                }}
            >
                {/* Abstract Mesh Background */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)',
                        backgroundSize: '100px 100px',
                    }}
                />

                {/* Glowing Orb */}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '600px',
                        background: 'rgba(56, 189, 248, 0.1)',
                        filter: 'blur(100px)',
                        borderRadius: '50%',
                    }}
                />

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px', zIndex: 10 }}>
                    {/* Mock Logo Icon */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '80px',
                        height: '80px',
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                        marginRight: '20px',
                        boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
                    }}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                    </div>

                    <h1 style={{ fontSize: '64px', fontWeight: 'bold', color: 'white', letterSpacing: '-0.02em', margin: 0 }}>
                        eMitra Technologies
                    </h1>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    zIndex: 10,
                    padding: '40px 60px',
                    background: 'rgba(255,255,255,0.05)', // Increased opacity slightly
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '24px',
                    // backdropFilter: 'blur(10px)', // NOT SUPPORTED in Satori
                }}>
                    <p style={{ fontSize: '32px', color: '#e2e8f0', textAlign: 'center', margin: '0 0 10px 0', fontWeight: 500 }}>
                        Smart Systems for Complex Institutions
                    </p>
                    <p style={{ fontSize: '24px', color: '#94a3b8', textAlign: 'center', margin: 0 }}>
                        Unified Software Ecosystem for Education & Government
                    </p>
                </div>

                <div style={{ position: 'absolute', bottom: '40px', display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.6 }}>
                    <p style={{ color: '#bae6fd', fontSize: '20px', fontWeight: 600 }}>emitra.tech</p>
                </div>

            </div>
        ),
        {
            ...size,
        }
    );
}
