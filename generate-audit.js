const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType, VerticalAlign, PageBreak } = require('docx');
const fs = require('fs');

const doc = new Document({
    sections: [
        {
            properties: {},
            children: [
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 2000, after: 400 },
                    children: [
                        new TextRun({ text: "emitra.dev", bold: true, size: 72, color: "000000" })
                    ]
                }),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 400 },
                    children: [
                        new TextRun({ text: "SEO / GEO / AEO Audit Report", size: 36, color: "2563EB" })
                    ]
                }),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 1000 },
                    children: [
                        new TextRun({ text: "FULL AUDIT", size: 22, color: "000000" })
                    ]
                }),
                new Table({
                    width: { size: 100, type: WidthType.PERCENTAGE },
                    borders: {
                        top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                        bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                        left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                        right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                        insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                        insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                    },
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    shading: { type: ShadingType.CLEAR, fill: "D97706" },
                                    margins: { top: 200, bottom: 200, left: 200, right: 200 },
                                    children: [
                                        new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "SEO", bold: true, color: "FFFFFF", size: 20 })] }),
                                        new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "6/10", bold: true, color: "FFFFFF", size: 72 })] }),
                                        new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Needs Work", italics: true, color: "FFFFFF", size: 18 })] })
                                    ]
                                }),
                                new TableCell({
                                    shading: { type: ShadingType.CLEAR, fill: "DC2626" },
                                    margins: { top: 200, bottom: 200, left: 200, right: 200 },
                                    children: [
                                        new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "GEO", bold: true, color: "FFFFFF", size: 20 })] }),
                                        new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "3/10", bold: true, color: "FFFFFF", size: 72 })] }),
                                        new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Needs Work", italics: true, color: "FFFFFF", size: 18 })] })
                                    ]
                                }),
                                new TableCell({
                                    shading: { type: ShadingType.CLEAR, fill: "DC2626" },
                                    margins: { top: 200, bottom: 200, left: 200, right: 200 },
                                    children: [
                                        new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "AEO", bold: true, color: "FFFFFF", size: 20 })] }),
                                        new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2/10", bold: true, color: "FFFFFF", size: 72 })] }),
                                        new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Missing", italics: true, color: "FFFFFF", size: 18 })] })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 2000 },
                    children: [
                        new TextRun({ text: "Audit Date: June 8, 2026", color: "94A3B8", size: 18 })
                    ]
                }),
                new Paragraph({
                    children: [new PageBreak()]
                }),
                new Paragraph({
                    text: "Executive Summary",
                    heading: HeadingLevel.HEADING_1
                }),
                new Paragraph({
                    text: "eMitra has a strong foundation as a software product studio with actual shipped products (GymMitra, FlatMitra, SchoolMitra), setting it apart from standard development agencies. However, from an SEO, GEO, and AEO perspective, the brand authority is heavily concentrated on its own domain. There is a lack of third-party validation (Clutch, GoodFirms), dedicated landing pages for high-value search terms (e.g., 'AI consultancy in Indore', 'Best web development agency in indore'), and conversational content formatted for AI Overviews and Voice Search. To rank #1 for these competitive terms, eMitra must aggressively expand its entity footprint off-site and restructure its on-site content to target specific intents.",
                    spacing: { after: 400 }
                }),
                new Table({
                    width: { size: 100, type: WidthType.PERCENTAGE },
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "Dimension", bold: true })] }),
                                new TableCell({ children: [new Paragraph({ text: "Score", bold: true })] }),
                                new TableCell({ children: [new Paragraph({ text: "Status", bold: true })] }),
                                new TableCell({ children: [new Paragraph({ text: "Key Takeaway", bold: true })] }),
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "SEO" })] }),
                                new TableCell({ children: [new Paragraph({ text: "6/10" })] }),
                                new TableCell({ shading: { type: ShadingType.CLEAR, fill: "D97706" }, children: [new Paragraph({ text: "Needs Work", color: "FFFFFF" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Good technical foundation, but missing dedicated keyword-targeted landing pages." })] }),
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "GEO" })] }),
                                new TableCell({ children: [new Paragraph({ text: "3/10" })] }),
                                new TableCell({ shading: { type: ShadingType.CLEAR, fill: "DC2626" }, children: [new Paragraph({ text: "Needs Work", color: "FFFFFF" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Lacks third-party validation and off-site entity authority crucial for LLM ranking." })] }),
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "AEO" })] }),
                                new TableCell({ children: [new Paragraph({ text: "2/10" })] }),
                                new TableCell({ shading: { type: ShadingType.CLEAR, fill: "DC2626" }, children: [new Paragraph({ text: "Missing", color: "FFFFFF" })] }),
                                new TableCell({ children: [new Paragraph({ text: "No conversational Q&A formats, featured snippet optimizations, or structured HowTo content." })] }),
                            ]
                        })
                    ]
                }),
                new Paragraph({
                    text: "Priority Recommendations",
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 400 }
                }),
                new Table({
                    width: { size: 100, type: WidthType.PERCENTAGE },
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "Priority", bold: true })] }),
                                new TableCell({ children: [new Paragraph({ text: "Issue / Action", bold: true })] }),
                                new TableCell({ children: [new Paragraph({ text: "Dimension", bold: true })] }),
                                new TableCell({ children: [new Paragraph({ text: "Effort", bold: true })] }),
                                new TableCell({ children: [new Paragraph({ text: "Impact", bold: true })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ shading: { type: ShadingType.CLEAR, fill: "DC2626" }, children: [new Paragraph({ text: "Critical", color: "FFFFFF" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Create dedicated landing pages for 'AI consultancy in Indore', 'Best web development agency in indore', etc." })] }),
                                new TableCell({ children: [new Paragraph({ text: "SEO / GEO" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Medium" })] }),
                                new TableCell({ children: [new Paragraph({ text: "High" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ shading: { type: ShadingType.CLEAR, fill: "EA580C" }, children: [new Paragraph({ text: "High", color: "FFFFFF" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Build external entity authority via Clutch, GoodFirms, Crunchbase, GitHub, and PR." })] }),
                                new TableCell({ children: [new Paragraph({ text: "GEO" })] }),
                                new TableCell({ children: [new Paragraph({ text: "High" })] }),
                                new TableCell({ children: [new Paragraph({ text: "High" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ shading: { type: ShadingType.CLEAR, fill: "D97706" }, children: [new Paragraph({ text: "Medium", color: "FFFFFF" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Add structured FAQ schemas and Answer Engine friendly content blocks to service pages." })] }),
                                new TableCell({ children: [new Paragraph({ text: "AEO" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Low" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Medium" })] })
                            ]
                        })
                    ]
                }),
                new Paragraph({
                    text: "What's Working Well",
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 400 }
                }),
                new Paragraph({
                    text: "1. Core Web Vitals and Mobile Responsiveness: The site performs well technically.\n2. Local Business Schema: The JSON-LD is correctly implemented for 'ITService' in Indore.\n3. Product Portfolio: Tangible products (GymMitra, FlatMitra, SchoolMitra) exist, which provides excellent leverage for case studies.",
                    spacing: { after: 400 }
                })
            ]
        }
    ]
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync('seo-audit-emitra-dev.docx', buffer);
    console.log('DOCX successfully written to seo-audit-emitra-dev.docx');
});
