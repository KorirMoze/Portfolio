<template>
  <section class="section">
    <h2 class="fade-in">Contact</h2>
    <div class="contact-content">
      <p class="contact-intro fade-in-up">Let's connect! Feel free to reach out through any of these channels:</p>
      
      <div class="contact-links">
        <a href="tel:+254724324545" class="contact-link fade-in-up" style="animation-delay: 0.2s;">
          <i class="fas fa-phone"></i>
          <div class="contact-info">
            <span class="label">Phone</span>
            <span class="value">+254 724 324 545</span>
          </div>
        </a>

        <a href="mailto:korirkipsmoze@gmail.com" class="contact-link fade-in-up" style="animation-delay: 0.3s;">
          <i class="fas fa-envelope"></i>
          <div class="contact-info">
            <span class="label">Email</span>
            <span class="value">korirkipsmoze@gmail.com</span>
          </div>
        </a>

        <a href="https://linkedin.com/in/moses-k-528947ba" target="_blank" class="contact-link fade-in-up" style="animation-delay: 0.4s;">
          <i class="fab fa-linkedin"></i>
          <div class="contact-info">
            <span class="label">LinkedIn</span>
            <span class="value">moses-k-528947ba</span>
          </div>
        </a>

        <a href="https://github.com/KorirMoze" target="_blank" class="contact-link fade-in-up" style="animation-delay: 0.5s;">
          <i class="fab fa-github"></i>
          <div class="contact-info">
            <span class="label">GitHub</span>
            <span class="value">KorirMoze</span>
          </div>
        </a>

        <a href="https://twitter.com/korirmoze" target="_blank" class="contact-link fade-in-up" style="animation-delay: 0.6s;">
          <i class="fab fa-twitter"></i>
          <div class="contact-info">
            <span class="label">Twitter</span>
            <span class="value">@korirmoze</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.contact-intro {
  text-align: center;
  color: #94a3b8;
  font-size: 1.2rem;
  margin-bottom: 3rem;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #1e293b;
  border-radius: 16px;
  text-decoration: none;
  color: #e2e8f0;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-link:hover {
  transform: translateX(10px);
  background: linear-gradient(135deg, #1e293b, #2d3a4f);
  border-color: rgba(96, 165, 250, 0.3);
}

.contact-link i {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(96, 165, 250, 0.1);
  border-radius: 12px;
  color: #60a5fa;
  transition: all 0.3s ease;
}

.contact-link:hover i {
  background: #60a5fa;
  color: #0f172a;
  transform: scale(1.1);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.label {
  font-size: 0.9rem;
  color: #94a3b8;
}

.value {
  font-size: 1.1rem;
  color: #e2e8f0;
}

/* Animations */
.fade-in {
  animation: fadeIn 0.8s ease-in forwards;
}

.fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .contact-content {
    padding: 1rem;
  }

  .contact-link {
    padding: 1rem;
  }

  .contact-info {
    font-size: 0.9rem;
  }
}
</style>

<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
    }
  ]
})
</script> 