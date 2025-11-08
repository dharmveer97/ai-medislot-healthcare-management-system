import type { InferSelectModel } from "drizzle-orm";
import {
  boolean,
  decimal,
  foreignKey,
  integer,
  json,
  jsonb,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

// Enums
export const userRoleEnum = pgEnum("user_role", [
  "patient",
  "doctor",
  "clinic_admin",
  "admin",
]);

export const genderEnum = pgEnum("gender", ["male", "female", "other"]);

export const appointmentStatusEnum = pgEnum("appointment_status", [
  "pending",
  "confirmed",
  "completed",
  "cancelled",
  "no_show",
]);

export const appointmentTypeEnum = pgEnum("appointment_type", [
  "in_person",
  "video",
  "phone",
]);

export const notificationTypeEnum = pgEnum("notification_type", [
  "appointment_confirmation",
  "appointment_reminder",
  "appointment_cancelled",
  "prescription_ready",
  "message",
  "system",
]);

export const paymentStatusEnum = pgEnum("payment_status", [
  "pending",
  "completed",
  "failed",
  "refunded",
]);

// Users Table (Core)
export const user = pgTable("User", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }),
  phone: varchar("phone", { length: 15 }),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  role: userRoleEnum("role").notNull().default("patient"),
  avatar: text("avatar"),
  isVerified: boolean("is_verified").notNull().default(false),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type User = InferSelectModel<typeof user>;

// Patient Profiles
export const patientProfile = pgTable("PatientProfile", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  dateOfBirth: timestamp("date_of_birth"),
  gender: genderEnum("gender"),
  bloodGroup: varchar("blood_group", { length: 5 }),
  height: decimal("height", { precision: 5, scale: 2 }), // in cm
  weight: decimal("weight", { precision: 5, scale: 2 }), // in kg
  allergies: text("allergies").array(),
  chronicConditions: text("chronic_conditions").array(),
  emergencyContactName: varchar("emergency_contact_name", { length: 255 }),
  emergencyContactPhone: varchar("emergency_contact_phone", { length: 15 }),
  address: text("address"),
  city: varchar("city", { length: 100 }),
  state: varchar("state", { length: 100 }),
  pincode: varchar("pincode", { length: 10 }),
  insuranceProvider: varchar("insurance_provider", { length: 255 }),
  insuranceNumber: varchar("insurance_number", { length: 100 }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type PatientProfile = InferSelectModel<typeof patientProfile>;

// Doctor Profiles
export const doctorProfile = pgTable("DoctorProfile", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  specialization: varchar("specialization", { length: 255 }).notNull(),
  qualification: text("qualification").notNull(),
  experience: integer("experience").notNull(), // years
  registrationNumber: varchar("registration_number", { length: 100 }).notNull(),
  bio: text("bio"),
  languages: text("languages").array().notNull().default(["English"]),
  consultationFee: decimal("consultation_fee", {
    precision: 10,
    scale: 2,
  }).notNull(),
  gender: genderEnum("gender"),
  clinicName: varchar("clinic_name", { length: 255 }),
  clinicAddress: text("clinic_address"),
  clinicCity: varchar("clinic_city", { length: 100 }),
  clinicState: varchar("clinic_state", { length: 100 }),
  clinicPincode: varchar("clinic_pincode", { length: 10 }),
  latitude: decimal("latitude", { precision: 10, scale: 7 }),
  longitude: decimal("longitude", { precision: 10, scale: 7 }),
  photos: text("photos").array(),
  videoIntro: text("video_intro"),
  isVerified: boolean("is_verified").notNull().default(false),
  rating: decimal("rating", { precision: 3, scale: 2 }).default("0"),
  totalReviews: integer("total_reviews").notNull().default(0),
  totalAppointments: integer("total_appointments").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type DoctorProfile = InferSelectModel<typeof doctorProfile>;

// Available Slots (Doctor Availability)
export const availableSlot = pgTable("AvailableSlot", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  doctorId: uuid("doctor_id")
    .notNull()
    .references(() => doctorProfile.id, { onDelete: "cascade" }),
  dayOfWeek: integer("day_of_week").notNull(), // 0-6 (Sunday-Saturday)
  startTime: varchar("start_time", { length: 5 }).notNull(), // HH:MM format
  endTime: varchar("end_time", { length: 5 }).notNull(), // HH:MM format
  slotDuration: integer("slot_duration").notNull().default(30), // minutes
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type AvailableSlot = InferSelectModel<typeof availableSlot>;

// Doctor Blocked Dates (Holidays, Leaves)
export const blockedDate = pgTable("BlockedDate", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  doctorId: uuid("doctor_id")
    .notNull()
    .references(() => doctorProfile.id, { onDelete: "cascade" }),
  date: timestamp("date").notNull(),
  reason: text("reason"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type BlockedDate = InferSelectModel<typeof blockedDate>;

// Appointments
export const appointment = pgTable("Appointment", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  bookingId: varchar("booking_id", { length: 20 }).notNull().unique(),
  patientId: uuid("patient_id")
    .notNull()
    .references(() => user.id),
  doctorId: uuid("doctor_id")
    .notNull()
    .references(() => doctorProfile.id),
  appointmentDate: timestamp("appointment_date").notNull(),
  appointmentTime: varchar("appointment_time", { length: 5 }).notNull(),
  appointmentType: appointmentTypeEnum("appointment_type").notNull(),
  status: appointmentStatusEnum("status").notNull().default("pending"),
  symptoms: text("symptoms"),
  notes: text("notes"),
  patientName: varchar("patient_name", { length: 255 }).notNull(),
  patientAge: integer("patient_age"),
  patientPhone: varchar("patient_phone", { length: 15 }).notNull(),
  consultationFee: decimal("consultation_fee", { precision: 10, scale: 2 }),
  isPaid: boolean("is_paid").notNull().default(false),
  reminderSent: boolean("reminder_sent").notNull().default(false),
  cancelledBy: uuid("cancelled_by").references(() => user.id),
  cancellationReason: text("cancellation_reason"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type Appointment = InferSelectModel<typeof appointment>;

// Medical Records
export const medicalRecord = pgTable("MedicalRecord", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  patientId: uuid("patient_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  category: varchar("category", { length: 100 }).notNull(), // Lab Report, X-Ray, Prescription, etc.
  fileUrl: text("file_url").notNull(),
  fileType: varchar("file_type", { length: 50 }).notNull(), // PDF, JPG, PNG
  uploadedBy: uuid("uploaded_by").references(() => user.id),
  appointmentId: uuid("appointment_id").references(() => appointment.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type MedicalRecord = InferSelectModel<typeof medicalRecord>;

// Prescriptions
export const prescription = pgTable("Prescription", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  appointmentId: uuid("appointment_id")
    .notNull()
    .references(() => appointment.id),
  doctorId: uuid("doctor_id")
    .notNull()
    .references(() => doctorProfile.id),
  patientId: uuid("patient_id")
    .notNull()
    .references(() => user.id),
  diagnosis: text("diagnosis"),
  medicines: jsonb("medicines").notNull(), // Array of {name, dosage, duration, frequency}
  instructions: text("instructions"),
  followUpDate: timestamp("follow_up_date"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type Prescription = InferSelectModel<typeof prescription>;

// Reviews & Ratings
export const review = pgTable("Review", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  appointmentId: uuid("appointment_id")
    .notNull()
    .references(() => appointment.id),
  doctorId: uuid("doctor_id")
    .notNull()
    .references(() => doctorProfile.id),
  patientId: uuid("patient_id")
    .notNull()
    .references(() => user.id),
  rating: integer("rating").notNull(), // 1-5
  comment: text("comment"),
  isVerified: boolean("is_verified").notNull().default(true), // Verified if booked through platform
  doctorResponse: text("doctor_response"),
  respondedAt: timestamp("responded_at"),
  helpfulCount: integer("helpful_count").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type Review = InferSelectModel<typeof review>;

// Payments
export const payment = pgTable("Payment", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  appointmentId: uuid("appointment_id")
    .notNull()
    .references(() => appointment.id),
  userId: uuid("user_id")
    .notNull()
    .references(() => user.id),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  platformFee: decimal("platform_fee", { precision: 10, scale: 2 }),
  paymentMethod: varchar("payment_method", { length: 50 }), // UPI, Card, etc.
  transactionId: varchar("transaction_id", { length: 255 }),
  status: paymentStatusEnum("status").notNull().default("pending"),
  refundAmount: decimal("refund_amount", { precision: 10, scale: 2 }),
  refundedAt: timestamp("refunded_at"),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type Payment = InferSelectModel<typeof payment>;

// Notifications
export const notification = pgTable("Notification", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  type: notificationTypeEnum("type").notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  message: text("message").notNull(),
  link: text("link"),
  isRead: boolean("is_read").notNull().default(false),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type Notification = InferSelectModel<typeof notification>;

// Emergency Contacts Directory
export const emergencyContact = pgTable("EmergencyContact", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  category: varchar("category", { length: 100 }).notNull(), // Ambulance, Hospital, Blood Bank, etc.
  name: varchar("name", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 15 }).notNull(),
  alternatePhone: varchar("alternate_phone", { length: 15 }),
  address: text("address"),
  city: varchar("city", { length: 100 }),
  latitude: decimal("latitude", { precision: 10, scale: 7 }),
  longitude: decimal("longitude", { precision: 10, scale: 7 }),
  isAvailable24x7: boolean("is_available_24x7").notNull().default(false),
  services: text("services").array(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type EmergencyContact = InferSelectModel<typeof emergencyContact>;

// Health AI Chats (Symptom Checker)
export const healthChat = pgTable("HealthChat", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  title: varchar("title", { length: 255 }).notNull(),
  messages: jsonb("messages").notNull(), // Array of {role, content, timestamp}
  suggestedSpecialty: varchar("suggested_specialty", { length: 255 }),
  urgencyLevel: varchar("urgency_level", { length: 50 }), // Emergency, Urgent, Routine
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type HealthChat = InferSelectModel<typeof healthChat>;

// Favorite Doctors
export const favoriteDoctor = pgTable(
  "FavoriteDoctor",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    doctorId: uuid("doctor_id")
      .notNull()
      .references(() => doctorProfile.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.userId, table.doctorId] }),
    };
  }
);

export type FavoriteDoctor = InferSelectModel<typeof favoriteDoctor>;

// Admin Activity Logs
export const adminLog = pgTable("AdminLog", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  adminId: uuid("admin_id")
    .notNull()
    .references(() => user.id),
  action: varchar("action", { length: 255 }).notNull(),
  targetType: varchar("target_type", { length: 100 }), // User, Doctor, Appointment
  targetId: uuid("target_id"),
  description: text("description"),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type AdminLog = InferSelectModel<typeof adminLog>;

// Clinic Profiles (for multi-doctor clinics)
export const clinicProfile = pgTable("ClinicProfile", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  address: text("address").notNull(),
  city: varchar("city", { length: 100 }).notNull(),
  state: varchar("state", { length: 100 }).notNull(),
  pincode: varchar("pincode", { length: 10 }).notNull(),
  phone: varchar("phone", { length: 15 }).notNull(),
  email: varchar("email", { length: 255 }),
  website: text("website"),
  latitude: decimal("latitude", { precision: 10, scale: 7 }),
  longitude: decimal("longitude", { precision: 10, scale: 7 }),
  photos: text("photos").array(),
  facilities: text("facilities").array(),
  isVerified: boolean("is_verified").notNull().default(false),
  ownerId: uuid("owner_id")
    .notNull()
    .references(() => user.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type ClinicProfile = InferSelectModel<typeof clinicProfile>;

// Doctor-Clinic Association (many-to-many)
export const doctorClinic = pgTable(
  "DoctorClinic",
  {
    doctorId: uuid("doctor_id")
      .notNull()
      .references(() => doctorProfile.id, { onDelete: "cascade" }),
    clinicId: uuid("clinic_id")
      .notNull()
      .references(() => clinicProfile.id, { onDelete: "cascade" }),
    isPrimary: boolean("is_primary").notNull().default(false),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.doctorId, table.clinicId] }),
    };
  }
);

export type DoctorClinic = InferSelectModel<typeof doctorClinic>;
