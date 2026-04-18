/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight,
  Award,
  Calendar,
  Layers,
  Star,
  Quote
} from 'lucide-react';
import { COURSES, TEACHER_INFO, CONTACT_INFO, TESTIMONIALS } from './constants';
import { Course } from './types';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <div className="min-h-screen bg-white selection:bg-secondary selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <span className="font-playfair font-bold text-xl tracking-tight text-primary uppercase">Gulhayo Academy</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#courses" className="text-sm font-medium hover:text-secondary transition-colors uppercase tracking-wider">Kurslar</a>
              <a href="#about" className="text-sm font-medium hover:text-secondary transition-colors uppercase tracking-wider">O'qituvchi</a>
              <a href="#testimonials" className="text-sm font-medium hover:text-secondary transition-colors uppercase tracking-wider">Fikrlar</a>
              <a href="#contact" className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 uppercase tracking-widest">
                Bog'lanish
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl"
            >
              <div className="p-4 space-y-4">
                <a href="#courses" onClick={() => setIsMenuOpen(false)} className="block py-2 text-lg font-medium">Kurslar</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 text-lg font-medium">O'qituvchi</a>
                <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="block py-2 text-lg font-medium">Fikrlar</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-3 bg-primary text-white text-center rounded-xl font-bold uppercase tracking-widest">Enroll Now</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider mb-6">
                < Award className="w-3.5 h-3.5" />
                CEFR C1 Level English Teacher
              </div>
              <h1 className="font-playfair text-5xl lg:text-7xl font-bold leading-[1.1] text-primary mb-6">
                Ingliz tilini <span className="text-secondary italic">ishonch</span> bilan o'rganing
              </h1>
              <p className="text-gray-600 text-lg mb-8 max-w-lg leading-relaxed">
                Gulhayo Sodiqjonova bilan General English va IELTS kurslarida o'z bilimingizni eng yuqori darajaga olib chiqing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#courses" className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-all shadow-xl shadow-primary/20">
                  Kurslarni ko'rish <ArrowRight className="w-5 h-5" />
                </a>
                <a href={`https://t.me/${CONTACT_INFO.telegram}`} target="_blank" className="px-8 py-4 bg-white border-2 border-primary/10 text-primary rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
                  Bepul maslahat olish
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-auto">
                <img 
                  src="https://picsum.photos/seed/edu/800/1000" 
                  alt="Teacher Gulhayo Sodiqjonova" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-2xl font-playfair font-bold">Gulhayo Sodiqjonova</p>
                  <p className="opacity-90 text-sm">Webster University | CEFR C1 | TEFL Certified</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary rounded-full blur-2xl opacity-20" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary rounded-full blur-3xl opacity-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">Bizning Kurslarimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              O'z maqsadlaringizga mos keladigan yo'lni tanlang. Har bir kurs 8 hafta davom etadi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {COURSES.map((course, idx) => (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                    {course.id === 'general-english' ? <BookOpen /> : <Layers />}
                  </div>
                  <span className="text-sm font-bold text-secondary bg-secondary/5 px-4 py-1.5 rounded-full uppercase tracking-wider">
                    {course.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-playfair font-black text-primary mb-2">{course.title}</h3>
                <p className="text-secondary font-medium mb-4">{course.subtitle}</p>
                <p className="text-gray-600 mb-8">{course.description}</p>
                
                <div className="space-y-3 mb-8">
                  {course.features.map(feature => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setSelectedCourse(course)}
                  className="w-full py-4 bg-primary text-white rounded-2xl font-bold hover:bg-secondary transition-colors uppercase tracking-widest text-xs"
                >
                  O'quv rejasini ko'rish
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h2 className="font-playfair text-4xl font-bold text-primary mb-8">O'qituvchi Haqida</h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {TEACHER_INFO.bio}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {TEACHER_INFO.credentials.map((cred, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary">
                        <Award className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-primary">{cred}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 grid grid-cols-2 gap-4 border-t border-gray-100">
                  {TEACHER_INFO.achievements.map((ach, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <CheckCircle2 className="w-4 h-4 text-secondary" />
                       <span className="text-sm font-medium text-gray-600">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
               <div className="aspect-square rounded-[3rem] bg-secondary/10 overflow-hidden relative border-8 border-white shadow-xl">
                  <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/30 blur-3xl rounded-full" />
                  <img 
                    src="https://picsum.photos/seed/teacher-profile/800/800"
                    alt="Gulhayo Profile" 
                    className="w-full h-full object-cover relative z-10"
                    referrerPolicy="no-referrer"
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold mb-4">O'quvchilar Fikrlari</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Bizning kurslarimiz orqali maqsadiga erishgan o'quvchilar natijalari bilan tanishing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl relative"
              >
                <Quote className="absolute top-4 right-8 w-12 h-12 text-white/10" />
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-secondary"
                  />
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-secondary font-medium uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-secondary text-secondary" />)}
                </div>
                <p className="text-white/80 text-sm leading-relaxed italic">"{t.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <div>
                  <h3 className="text-3xl font-playfair font-black text-primary">{selectedCourse.title}</h3>
                  <p className="text-secondary font-bold">8 haftalik intensiv reja</p>
                </div>
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="p-3 bg-white border border-gray-100 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8 overflow-y-auto custom-scrollbar flex-1">
                <div className="space-y-6">
                  {selectedCourse.modules.map((module, i) => (
                    <div key={module.id} className="flex gap-6 group">
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <div className="w-12 h-12 bg-primary text-white font-bold rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 z-10 transition-transform group-hover:scale-110">
                          {module.id}
                        </div>
                        {i !== selectedCourse.modules.length - 1 && (
                          <div className="w-0.5 grow bg-gray-100 my-1" />
                        )}
                      </div>
                      <div className="pb-8">
                        <h4 className="text-xl font-bold text-primary mb-2">{module.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{module.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="text-center sm:text-left">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Davomiyligi</p>
                  <p className="text-xl font-black text-primary">8 Hafta</p>
                </div>
                <a 
                  href={`https://t.me/${CONTACT_INFO.telegram}`}
                  target="_blank"
                  className="w-full sm:w-auto px-10 py-4 bg-primary text-white rounded-2xl font-bold hover:translate-y-[-2px] transition-all uppercase tracking-widest text-xs"
                >
                  Telegram'da Bog'lanish
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white overflow-hidden relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-primary mb-8">Kurslarga Yoziling</h2>
          <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
            Bilim olishga sarmoya kiriting va o'z kelajagingizni biz bilan quring. 
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href={`tel:${CONTACT_INFO.phone}`} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-primary hover:text-white transition-all group">
              <Phone className="w-8 h-8 mx-auto mb-4 text-secondary group-hover:text-white transition-colors" />
              <p className="text-sm font-bold opacity-60 mb-1">Telefon</p>
              <p className="text-xl font-bold">{CONTACT_INFO.phone}</p>
            </a>
            <a href={`https://t.me/${CONTACT_INFO.telegram}`} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-primary hover:text-white transition-all group">
              <MessageCircle className="w-8 h-8 mx-auto mb-4 text-primary group-hover:text-white transition-colors" />
              <p className="text-sm font-bold opacity-60 mb-1">Telegram Handle</p>
              <p className="text-xl font-bold">@{CONTACT_INFO.telegram}</p>
            </a>
            <div className="hidden lg:block p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <Calendar className="w-8 h-8 mx-auto mb-4 text-blue-500" />
              <p className="text-sm font-bold opacity-60 mb-1">Ish Vaqti</p>
              <p className="text-xl font-bold">Dush - Shan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="text-white w-5 h-5" />
            </div>
            <span className="font-playfair font-bold text-lg text-primary uppercase">Gulhayo Academy</span>
          </div>
          <p className="text-gray-400 text-sm italic">
            &copy; 2026 Gulhayo Sodiqjonova English Academy.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs font-bold text-primary hover:text-secondary uppercase tracking-widest">Instagram</a>
            <a href="#" className="text-xs font-bold text-primary hover:text-secondary uppercase tracking-widest">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
