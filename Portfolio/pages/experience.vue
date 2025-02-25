<template>
  <section class="section">
    <h2 class="fade-in">Professional Experience</h2>
    <div class="experience-grid">
      <div class="experience-card fade-in-up">
        <h3>Software Engineer | Ronford Digital</h3>
        <p class="duration">October 2023 - Present</p>
        <p class="summary">Led development of enterprise banking solutions with focus on USSD and mobile banking applications across East Africa, serving over 100,000 daily active users across three countries.</p>
        
        <div class="achievements">
          <h4>Key Achievements:</h4>
          <ul>
            <li>Spearheaded development of banking USSD application integrating with core banking systems, resulting in 40% faster transaction processing times</li>
            <li>Engineered high-performance APIs using .NET framework, handling peak loads of 1000+ transactions per minute with 99.9% uptime</li>
            <li>Established secure integration with 15+ billers and mobile money services, expanding platform reach to 5+ million potential users</li>
            <li>Maintained banking-grade security standards through comprehensive testing and achieved PCI DSS compliance</li>
          </ul>
        </div>

        <div class="implementations">
          <h4>Technical Implementations:</h4>
          <ul>
            <li>Architected Strategy Design Pattern for dynamic algorithm selection, reducing USSD session handling time by 25%</li>
            <li>Built loosely coupled service infrastructure enabling seamless integration of 8 new financial services in 3 months</li>
            <li>Structured comprehensive error handling system reducing customer support tickets by 30%</li>
            <li>Optimized application performance through Redis caching, achieving sub-200ms response times for 95% of requests</li>
          </ul>
        </div>

        <div class="tech-stack">
          <span>.NET</span>
          <span>C#</span>
          <span>MySQL</span>
          <span>Redis</span>
          <span>Azure</span>
          <span>Docker</span>
        </div>
      </div>

      <div class="experience-card fade-in-up" style="animation-delay: 0.2s;">
        <h3>GIS Analyst and Developer (Freelance)</h3>
        <p class="duration">May 2022 - September 2023</p>
        
        <div class="achievements">
          <h4>Key Responsibilities:</h4>
          <ul>
            <li>Engineered scalable web applications for 3 major environmental research projects</li>
            <li>Architected RESTful APIs handling geospatial data for 50+ concurrent users</li>
            <li>Refined database performance reducing query times by 60% for spatial operations</li>
            <li>Crafted responsive interfaces achieving 98% user satisfaction rating</li>
            <li>Orchestrated application deployment reducing system downtime by 75%</li>
          </ul>
        </div>

        <div class="implementations">
          <h4>Darlberg Research Projects:</h4>
          <ul>
            <li>Performed data cleaning and validation for 50,000+ spatial data points</li>
            <li>Executed digitization of 200+ analog maps for historical preservation project</li>
            <li>Generated actionable insights through spatial analysis for urban planning initiatives</li>
            <li>Programmed automation scripts reducing manual GIS tasks by 70%</li>
          </ul>
        </div>

        <div class="tech-stack">
          <span>Django</span>
          <span>Vue.js</span>
          <span>PostgreSQL</span>
          <span>Linode</span>
          <span>GIS</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-grid {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
}

.experience-card {
  background: #1e293b;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-5px);
}

.duration {
  color: #a78bfa;
  font-style: italic;
  margin: 0.5rem 0;
}

.summary {
  color: #94a3b8;
  font-size: 1.1rem;
  margin: 1rem 0;
  line-height: 1.6;
}

h3 {
  color: #60a5fa;
  font-size: 1.3rem;
}

h4 {
  color: #e2e8f0;
  margin: 1.5rem 0 1rem;
  font-size: 1.1rem;
}

.achievements ul, .implementations ul {
  list-style: none;
  padding: 0;
}

.achievements li, .implementations li {
  color: #94a3b8;
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;
}

.achievements li:before, .implementations li:before {
  content: "•";
  color: #60a5fa;
  position: absolute;
  left: 0;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 2rem;
  padding-top: 2rem;
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
  .experience-card {
    padding: 1.5rem;
  }
  
  .tech-stack {
    justify-content: center;
  }
}
</style> 