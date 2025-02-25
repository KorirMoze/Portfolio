<template>
  <section class="section">
    <h2 class="fade-in">Projects</h2>
    <div class="projects-grid">
      <div class="project-card fade-in-up">
        <h3>Mobile Banking Platform</h3>
        <p class="company">Ronford Digital</p>
        <p class="description">Led USSD solution development for unified banking platform serving multiple East African countries.</p>
        
        <div class="achievements">
          <ul>
            <li>Spearheaded USSD solution development for unified banking platform</li>
            <li>Integrated multiple payment services including MTN and KPLC</li>
            <li>Established comprehensive security protocols including hashing</li>
          </ul>
        </div>

        <div class="tech-stack">
          <span>.NET</span>
          <span>C#</span>
          <span>MySQL</span>
          <span>Redis</span>
          <span>Azure</span>
        </div>
      </div>

      <div class="project-card fade-in-up" style="animation-delay: 0.2s;">
        <h3>Tour Booking Platform</h3>
        <p class="description">Full-stack booking platform with scalable architecture and comprehensive booking management.</p>
        
        <div class="achievements">
          <ul>
            <li>Architected full-stack booking platform with scalable infrastructure</li>
            <li>Incorporated JWT authentication and role-based access control</li>
            <li>Built reactive frontend with Vue.js and robust Django backend</li>
            <li>Structured efficient PostgreSQL database schema</li>
          </ul>
        </div>

        <div class="tech-stack">
          <span>Django</span>
          <span>Vue.js</span>
          <span>PostgreSQL</span>
          <span>JWT</span>
        </div>
      </div>

      <div class="project-card fade-in-up" style="animation-delay: 0.4s;">
        <h3>E-commerce Platform</h3>
        <p class="description">Comprehensive e-commerce solution with product catalog and secure payment integration.</p>
        
        <div class="achievements">
          <ul>
            <li>Engineered comprehensive e-commerce solution with product catalog</li>
            <li>Structured secure checkout process and payment integration</li>
            <li>Crafted responsive user interfaces with modern web technologies</li>
            <li>Constructed robust backend systems for inventory management</li>
          </ul>
        </div>

        <div class="tech-stack">
          <span>Django</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: #1e293b;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card h3 {
  color: #60a5fa;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.company {
  color: #a78bfa;
  font-style: italic;
  margin-bottom: 1rem;
}

.description {
  color: #94a3b8;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.achievements ul {
  list-style: none;
  padding: 0;
}

.achievements li {
  color: #94a3b8;
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;
}

.achievements li:before {
  content: "→";
  color: #60a5fa;
  position: absolute;
  left: 0;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.tech-stack span {
  background: rgba(96, 165, 250, 0.1);
  color: #60a5fa;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.tech-stack span:hover {
  background: #60a5fa;
  color: #0f172a;
  transform: translateY(-2px);
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

@media (max-width: 768px) {
  .project-card {
    padding: 1.5rem;
  }
}
</style> 