# eMitra Design System: "Ion Blue" Theme

This document defines the official color palette and design tokens for the eMitra ecosystem to ensure consistency across all product portals (EduMitra, GymMitra, FlatMitra, etc.).

---

## 🎨 Color Palette

### 1. Primary Brand Colors
| Token | Hex | Role |
|-------|-----|------|
| **Ion Blue** | `#0066FF` | **Primary Brand Color.** Used for main CTAs, active states, and brand signatures. |
| **Midnight Navy** | `#1E3A8A` | **Foundation Color.** Used for deep backgrounds, footer headers, and structural elements. |
| **Ocean Teal** | `#0D9488` | **Accent Color.** Used for secondary highlights, success states, and eco-related features. |

### 2. Base Colors
| Token | Hex | Role |
|-------|-----|------|
| **Pure White** | `#FFFFFF` | **Background.** The environment is forced to Light Mode for a clean, premium institutional feel. |
| **Deep Slate** | `#0F172A` | **Primary Text.** Headings and main body copy for maximum contrast and legibility. |
| **Drift Silver** | `#E2E8F0` | **Borders & Dividers.** Subtle separation between sections and cards. |

---

## ✍️ Typography

| Layer | Font Family | Character |
|-------|-------------|-----------|
| **Display (Headings)** | `Outfit` | Modern, geometric, and authoritative. |
| **Sans (Body)** | `Inter` | Highly legible, functional, and professional. |

---

## ✨ Design Signatures

### 1. Glassmorphism (Product Cards)
Standardized surface for modern, high-tech product representation:
- **Background:** `rgba(255, 255, 255, 0.7)`
- **Blur:** `backdrop-filter: blur(20px)`
- **Border:** `1px solid rgba(255, 255, 255, 0.3)`

### 2. High-Tech Accents
- **Circuit Patterns:** Subtle radial gradients (`rgba(30, 58, 138, 0.05)`) at 24px intervals to reinforce the "digital infrastructure" theme.
- **Shadows:** Use `rgba(0, 102, 255, 0.08)` for elevation to maintain the "blue glow" consistency.

---

## 🛠️ Usage in Code (Tailwind v4)
```css
@theme {
  --color-primary: #1E3A8A;
  --color-accent: #0D9488;
  --color-ion-blue: #0066FF;
  --color-drift-silver: #E2E8F0;
  
  --font-display: var(--font-outfit);
  --font-sans: var(--font-inter);
}
```
