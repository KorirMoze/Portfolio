<template>
  <section class="section">
    <h2 class="fade-in">Technical Skills</h2>
    <div class="skills-grid">
      <div class="skill-card fade-in-up">
        <h3>
          <i class="fas fa-code"></i>
          Programming Languages
        </h3>
        <ul>
          <li>C#</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>

      <div class="skill-card fade-in-up" style="animation-delay: 0.2s;">
        <h3>
          <i class="fas fa-layer-group"></i>
          Frameworks & Libraries
        </h3>
        <ul>
          <li>.NET Framework</li>
          <li>Django</li>
          <li>Flask</li>
          <li>Vue.js</li>
          <li>Bootstrap</li>
        </ul>
      </div>

      <div class="skill-card fade-in-up" style="animation-delay: 0.3s;">
        <h3>
          <i class="fas fa-database"></i>
          Database Systems
        </h3>
        <ul>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Redis</li>
        </ul>
      </div>

      <div class="skill-card fade-in-up" style="animation-delay: 0.4s;">
        <h3>
          <i class="fas fa-cloud"></i>
          Cloud & DevOps
        </h3>
        <ul>
          <li>Microsoft Azure</li>
          <li>Linode</li>
          <li>Docker</li>
          <li>Kubernetes</li>
        </ul>
      </div>

      <div class="skill-card fade-in-up" style="animation-delay: 0.5s;">
        <h3>
          <i class="fas fa-sitemap"></i>
          Architecture & Patterns
        </h3>
        <ul>
          <li>Microservices</li>
          <li>Clean Architecture</li>
          <li>Domain-Driven Design (DDD)</li>
          <li>SOLID Principles</li>
          <li>CQRS Pattern</li>
        </ul>
      </div>

      <div class="skill-card fade-in-up" style="animation-delay: 0.6s;">
        <h3>
          <i class="fas fa-tools"></i>
          Development Tools
        </h3>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
          <li>GitLab</li>
          <li>Unit Testing</li>
          <li>API Development</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.skill-card {
  background: #1e293b;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
}

.skill-card h3 {
  color: #60a5fa;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.skill-card i {
  font-size: 1.2rem;
  width: 24px;
  opacity: 0.9;
}

.skill-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-card li {
  color: #94a3b8;
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;
  transition: transform 0.2s ease;
}

.skill-card li:before {
  content: "•";
  color: #60a5fa;
  position: absolute;
  left: 0;
}

.skill-card li:hover {
  transform: translateX(5px);
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

/* Hover effect for cards */
.skill-card:hover {
  background: #1e293b;
  border-color: rgba(96, 165, 250, 0.2);
}

/* Responsive design */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .skill-card {
    padding: 1.5rem;
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