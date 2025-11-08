# MediSlot - Healthcare Appointment Booking System

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?logo=next.js" alt="Next.js 15"/>
  <img src="https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/PostgreSQL-15-blue?logo=postgresql" alt="PostgreSQL"/>
  <img src="https://img.shields.io/badge/TailwindCSS-4-38bdf8?logo=tailwindcss" alt="Tailwind"/>
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License"/>
</p>

A comprehensive, production-ready healthcare appointment booking platform built for Jalandhar and beyond. MediSlot bridges the gap between traditional phone-based bookings and modern digital healthcare management with AI-powered features, real-time scheduling, and seamless user experience.

## ✨ Features

### 👨‍⚕️ For Patients
- **Smart Doctor Discovery** - Find doctors by specialty, location, availability, and ratings
- **AI Health Assistant** - Symptom checker with intelligent doctor recommendations
- **Easy Appointment Booking** - Real-time slot availability with instant confirmation
- **Digital Medical Records** - Securely store and manage all your health documents
- **Prescription Management** - Access digital prescriptions anytime, anywhere
- **Appointment Reminders** - Get notified via email, SMS, and in-app notifications
- **Reviews & Ratings** - Share your experience and help others make informed decisions
- **Emergency Directory** - Quick access to ambulances, hospitals, and emergency services

### 🩺 For Doctors
- **Schedule Management** - Set your availability, manage slots, and block dates easily
- **Patient Dashboard** - View patient history, medical records, and appointment details
- **Digital Prescription Pad** - Create and send prescriptions instantly
- **Appointment Analytics** - Track patient count, revenue, and peak hours
- **Profile Management** - Showcase qualifications, experience, and clinic photos
- **Clinic Management** - Manage multiple locations and staff members

### 🛡️ For Admins
- **Comprehensive Admin Panel** - Powered by AdminJS for easy management
- **Doctor Verification** - Review and approve doctor registrations
- **Platform Analytics** - Monitor users, appointments, revenue, and growth
- **Content Management** - Manage specializations, emergency contacts, and content
- **Payment Tracking** - View transactions, commissions, and refunds

## 🚀 Tech Stack

**Frontend:** Next.js 15, TypeScript, TailwindCSS 4, Framer Motion, Radix UI
**Backend:** Next.js API Routes, Drizzle ORM, PostgreSQL
**AI:** Vercel AI SDK (OpenAI/Anthropic)
**Payments:** Razorpay / Stripe
**Admin:** AdminJS

## 📋 Prerequisites

- Node.js 18+ or 20+
- pnpm 9+
- PostgreSQL 14+

## 🔧 Installation & Setup

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd doctor-app
pnpm install
```

### 2. Database Setup

#### macOS (Homebrew)
```bash
brew install postgresql@15
brew services start postgresql@15
createdb medislot
```

#### Docker
```bash
docker run --name medislot-postgres \
  -e POSTGRES_USER=medislot \
  -e POSTGRES_PASSWORD=medislot \
  -e POSTGRES_DB=medislot \
  -p 5432:5432 -d postgres:15
```

### 3. Configure Environment

```bash
cp .env.local .env
```

Edit `.env` with your configuration:

```env
# Required
POSTGRES_URL="postgresql://username:password@localhost:5432/medislot"
AUTH_SECRET="generate-a-random-secret"
OPENAI_API_KEY="your-openai-key"

# Optional
RAZORPAY_KEY_ID="your-razorpay-id"
RESEND_API_KEY="your-resend-key"
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your-maps-key"
```

### 4. Run Migrations

```bash
pnpm db:generate
pnpm db:migrate
```

### 5. Start Development Server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run linter
pnpm format       # Format code
pnpm db:migrate   # Run database migrations
pnpm db:studio    # Open Drizzle Studio
pnpm test         # Run tests
```

## 📁 Project Structure

```
medislot/
├── app/              # Next.js App Router
│   ├── (auth)/      # Auth pages
│   ├── (patient)/   # Patient pages
│   ├── (doctor)/    # Doctor pages
│   ├── (admin)/     # Admin pages
│   └── api/         # API routes
├── components/      # React components
├── lib/             # Utilities & integrations
│   ├── db/         # Database schema
│   └── auth/       # Authentication
├── hooks/           # Custom hooks
└── public/          # Static assets
```

## 🗄️ Database Schema

17 tables including:
- User, PatientProfile, DoctorProfile
- Appointment, AvailableSlot, BlockedDate
- MedicalRecord, Prescription, Review
- Payment, Notification, EmergencyContact
- HealthChat, FavoriteDoctor, AdminLog
- ClinicProfile, DoctorClinic

See `lib/db/schema.ts` for details.

## 🔐 Security

- Passwords hashed with bcrypt
- NextAuth.js for authentication
- Protected API routes
- SQL injection prevention via Drizzle ORM
- Environment variables secured

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Docker

```bash
docker build -t medislot .
docker run -p 3000:3000 --env-file .env medislot
```

## 📚 Documentation

- **Features:** See [FEATURES.md](FEATURES.md) for detailed specifications
- **API:** See `/api` folder for endpoint documentation
- **Contributing:** Follow Ultracite coding standards

## 🗺️ Roadmap

### MVP (Completed)
- ✅ Authentication & Authorization
- ✅ Doctor listing & search
- ✅ Appointment booking
- ✅ AI health assistant
- ✅ Reviews & ratings

### Phase 2 (In Progress)
- 🚧 Telemedicine (video calls)
- 🚧 Payment integration
- 🚧 SMS/WhatsApp notifications
- 🚧 Multi-language support

### Phase 3 (Planned)
- 📅 Insurance integration
- 📅 Lab test booking
- 📅 Medicine delivery
- 📅 Mobile app (React Native)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Follow Ultracite standards
4. Commit changes (`git commit -m 'Add feature'`)
5. Push to branch (`git push origin feature/amazing-feature`)
6. Open Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE)

## 💬 Support

Email: support@medislot.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [EasyAppointments](https://github.com/alextselegidis/easyappointments)
- [AdminJS](https://github.com/SoftwareBrothers/adminjs)

---

Made with ❤️ for better healthcare access in Jalandhar and beyond.
