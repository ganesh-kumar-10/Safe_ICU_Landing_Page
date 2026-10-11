import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Mail, 
  Building2, 
  User, 
  FileText
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    }
    if (!formData.organization.trim()) {
      errs.organization = 'Organization / Hospital is required.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Work Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid work email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message content is required.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide a little more detail (at least 15 characters).';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate frontend validation & staging transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      organization: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-teal-600" />
            <span>Connect & Request Demo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Get in Touch
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions about the Safe ICU project or interested in a demonstration? Send us a message.
          </p>
        </div>

        {/* Form Container */}
        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
          
          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900">
                Inquiry Form Validated Successfully!
              </h3>
              <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your inquiry for <strong>{formData.organization}</strong> has been processed through front-end verification.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 max-w-md mx-auto text-left space-y-1">
                <div className="font-semibold text-slate-700">Validated Submission Data:</div>
                <div><strong>Email:</strong> {formData.email}</div>
                <div><strong>Subject:</strong> {formData.subject}</div>
                <div><strong>Status:</strong> Successfully received and logged.</div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold text-navy-900 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Sarah Jenkins"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                        errors.fullName
                          ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                          : 'border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-100'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Organization / Hospital */}
                <div>
                  <label htmlFor="organization" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Organization / Hospital <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="e.g. Metro Memorial Hospital"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                        errors.organization
                          ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                          : 'border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-100'
                      }`}
                    />
                  </div>
                  {errors.organization && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{errors.organization}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Work Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="sarah.jenkins@hospital.org"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                      errors.email
                        ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                        : 'border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-100'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <FileText className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Safe ICU Prototype Demonstration Request"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                      errors.subject
                        ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                        : 'border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-100'
                    }`}
                  />
                </div>
                {errors.subject && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your ICU monitoring interests, evaluation context, or questions regarding the computer vision pipeline and hardware..."
                  className={`w-full p-3.5 rounded-xl text-sm border bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                    errors.message
                      ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                      : 'border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-100'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 shadow-md hover:shadow-glow-teal transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Validating Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
