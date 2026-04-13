export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  company?: string;
};

export type ContactResponse = {
  ok: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactPayload, string>>;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+()\-\s]{7,24}$/;

export function validateContactPayload(payload: ContactPayload) {
  const errors: ContactResponse["errors"] = {};

  if (!payload.name.trim() || payload.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!emailPattern.test(payload.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (payload.phone && !phonePattern.test(payload.phone.trim())) {
    errors.phone = "Please enter a valid phone number or leave the field blank.";
  }

  if (!payload.message.trim() || payload.message.trim().length < 20) {
    errors.message = "Please provide a little more detail so the team can help properly.";
  }

  if ((payload.company || "").trim().length > 0) {
    errors.company = "Spam protection triggered.";
  }

  return errors;
}
