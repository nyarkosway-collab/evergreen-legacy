# Plan for Ellen White Sustainable Foundation Website

## 1. Goal
Build a professional, empathetic, and impactful website for the Ellen White Sustainable Foundation (NGO based in Ghana) to showcase their mission of empowering women, girls, and children and fighting gender-based violence.

## 2. Technical Stack
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS (Utility-first, responsive)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Components**: shadcn/ui (Button, Card, Badge, Input, Form, etc.)
- **Notifications**: Sonner

## 3. Pages & Structure
- **Navigation**: Home, About, Impact, Programs, Contact, Donate (CTA).
- **Home Page**:
  - Hero: "Empowering the Voiceless, Building a Sustainable Future."
  - Impact Stats (Foiled child marriages, child mothers back to school).
  - Mission/Vision cards.
  - Featured Work section.
- **About Page**:
  - Foundation History & Objectives.
  - Founder Profile: Ellen White (Bio, Qualifications, Achievements, Award).
  - Partners/Collaborations (UNFPA, Oxfam, EU, etc.).
- **Impact Page**:
  - Success stories (Child marriage rescue, Education support).
  - Gallery/Visual representation of work.
- **Programs Page**:
  - Livelihood training, Health screenings (Breast Cancer), Advocacy, Mentorship.
- **Contact Page**:
  - Contact details (Techiman, Bono East, Ghana).
  - Inquiry form.
- **Donate Section**: Clear CTA for supporting the cause.

## 4. Visual Design (UI/UX)
- **Style**: Trustworthy, Empowering, and Community-centric.
- **Color Palette**: 
  - Primary: Deep Teal/Emerald (#065F46) - represents growth and health.
  - Accent: Warm Gold/Orange (#D97706) - represents value and hope.
  - Background: Off-white/Cream (#F9FAFB).
- **Typography**: Inter (Modern/Sans) for readability, Serif for headings to give a professional NGO feel.

## 5. Implementation Steps
1. **Assets**: Generate high-quality images using `generate_images_bulk` representing Ghanaian community empowerment.
2. **Components**:
  - `Header`: Responsive navigation with mobile menu.
  - `Footer`: Links, contact info, social icons.
  - `ImpactCard`: Displays achievements with icons.
  - `FounderSection`: Detailed bio with award highlight.
3. **Sections**: Hero, About, Programs, Stats, CTA.
4. **Final Polish**: Framer motion transitions, responsive checks, form validation.
