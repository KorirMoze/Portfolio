<template>
  <div class="portfolio">
    <header>
      <nav>
        <h1>KORIR MOSES</h1>
        <div class="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>

    <main>
      <section id="about" class="section">
        <h2>About Me</h2>
        <p>Full Stack Software Engineer passionate about developing enterprise-level solutions with expertise in banking systems, GIS applications, and web development.</p>
        
        <div class="about-content">
          <div class="about-text">
            <p>With over 2 years of experience in the software industry, I specialize in building robust, scalable applications that solve complex business challenges. My expertise spans across:</p>
            
            <div class="expertise-areas">
              <div class="expertise-item">
                <h3>Banking Solutions</h3>
                <p>Developing secure, high-performance USSD and mobile banking applications serving 100,000+ daily users across East Africa. Expertise in financial integrations, transaction processing, and banking security standards.</p>
              </div>
              
              <div class="expertise-item">
                <h3>GIS Development</h3>
                <p>Creating sophisticated geospatial applications for environmental research projects, focusing on data analysis, visualization, and spatial operations. Experience with large-scale spatial data processing and mapping solutions.</p>
              </div>
              
              <div class="expertise-item">
                <h3>Full Stack Development</h3>
                <p>Building end-to-end solutions using modern technologies including .NET, Django, Vue.js, and cloud services. Strong focus on clean architecture, performance optimization, and scalable infrastructure.</p>
              </div>
            </div>

            <p class="approach">My approach combines technical excellence with business acumen, focusing on delivering solutions that not only meet technical requirements but also drive business value. I'm particularly passionate about:</p>
            
            <ul class="passion-points">
              <li>Architecting scalable systems that handle high-volume transactions</li>
              <li>Implementing secure, efficient financial technology solutions</li>
              <li>Building intuitive user interfaces that enhance user experience</li>
              <li>Optimizing application performance and system reliability</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="experience" class="section">
        <h2>Professional Experience</h2>
        <div class="experience-grid">
          <div class="experience-card">
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
              <span>Microservices</span>
            </div>
          </div>

          <div class="experience-card">
            <h3>GIS Analyst and Developer (Freelance)</h3>
            <p class="duration">May 2022 - September 2023</p>
            
            <div class="achievements">
              <h4>Key Responsibilities:</h4>
              <ul>
                <li>Engineered scalable web applications for 3 major environmental research projects</li>
                <li>Architected RESTful APIs handling geospatial data for 50+ concurrent users</li>
                <li>Refined database performance reducing query times by 60% for spatial operations</li>
                <li>Crafted responsive interfaces achieving 98% user satisfaction rating</li>
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

      <section id="projects" class="section">
        <h2>Projects</h2>
        <div class="projects-grid">
          <div class="project-card">
            <h3>Mobile Banking Platform</h3>
            <p>Led USSD solution development for unified NCBA Bank mobile banking platform with multiple payment service integrations.</p>
            <div class="tech-stack">
              <span>.NET</span>
              <span>C#</span>
              <span>MySQL</span>
              <span>Redis</span>
              <span>Azure</span>
            </div>
          </div>
          <div class="project-card">
            <h3>Tour Booking Platform</h3>
            <p>Full-stack booking platform with JWT authentication and role-based access control.</p>
            <div class="tech-stack">
              <span>Django</span>
              <span>Vue.js</span>
              <span>PostgreSQL</span>
            </div>
          </div>
          <div class="project-card">
            <h3>E-commerce Platform</h3>
            <p>Comprehensive e-commerce solution with product catalog and secure checkout process.</p>
            <div class="tech-stack">
              <span>Django</span>
              <span>JavaScript</span>
              <span>HTML/CSS</span>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" class="section">
        <h2>Technical Skills</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>Programming Languages</h3>
            <ul>
              <li>C#</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Frameworks & Libraries</h3>
            <ul>
              <li>.NET Framework</li>
              <li>Django</li>
              <li>Flask</li>
              <li>Vue.js</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Cloud & DevOps</h3>
            <ul>
              <li>Microsoft Azure</li>
              <li>Linode</li>
              <li>Docker</li>
              <li>Kubernetes</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Database Systems</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Redis</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" class="section">
        <h2>Contact</h2>
        <div class="contact-links">
          <a href="tel:+254724324545">Phone</a>
          <a href="mailto:korirkipsmoze@gmail.com">Email</a>
          <a href="https://linkedin.com/in/moses-k-528947ba" target="_blank">LinkedIn</a>
          <a href="https://github.com/KorirMoze" target="_blank">GitHub</a>
          <a href="https://twitter.com/korirmoze" target="_blank">Twitter</a>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  background: #0f172a;
  color: #e2e8f0;
}

.portfolio {
  max-width: 1200px;
  margin: 0 auto;
}

header {
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav h1 {
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #e2e8f0;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-links a:after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  transition: width 0.3s ease;
}

.nav-links a:hover:after {
  width: 100%;
}

.section {
  padding: 4rem 2rem;
  min-height: 60vh;
}

.section h2 {
  color: #e2e8f0;
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
}

.section h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
}

.experience-card {
  padding: 2rem;
  border-radius: 16px;
  background: #1e293b;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.experience-card h3 {
  color: #60a5fa;
  margin-bottom: 1rem;
}

.summary {
  font-size: 1.1rem;
  color: #94a3b8;
  margin: 1rem 0;
  line-height: 1.8;
}

.achievements h4, .implementations h4 {
  color: #e2e8f0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.achievements li, .implementations li {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  color: #94a3b8;
}

.achievements li:before, .implementations li:before {
  content: "•";
  color: #60a5fa;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.tech-stack {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.tech-stack span {
  background: rgba(96, 165, 250, 0.1);
  color: #60a5fa;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.tech-stack span:hover {
  background: #60a5fa;
  color: #0f172a;
  transform: translateY(-2px);
}

.duration {
  color: #a78bfa;
  font-style: italic;
  margin: 0.5rem 0;
  font-weight: 500;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  padding: 1.5rem;
  border-radius: 16px;
  background: #1e293b;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card h3 {
  color: #60a5fa;
}

.contact-links {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
}

.contact-links a {
  text-decoration: none;
  color: #e2e8f0;
  font-weight: 500;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  background: #1e293b;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.contact-links a:hover {
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  color: #0f172a;
  transform: translateY(-2px);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.skill-category {
  background: #1e293b;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.skill-category h3 {
  color: #60a5fa;
  margin-bottom: 1rem;
}

.skill-category ul {
  list-style: none;
  padding: 0;
}

.skill-category li {
  margin: 0.8rem 0;
  color: #94a3b8;
  padding-left: 1.5rem;
  position: relative;
}

.skill-category li:before {
  content: "•";
  color: #a78bfa;
  position: absolute;
  left: 0;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .contact-links {
    flex-wrap: wrap;
  }
}

.about-content {
  margin-top: 2rem;
}

.about-text {
  max-width: 800px;
  margin: 0 auto;
}

.about-text p {
  color: #94a3b8;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.expertise-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.expertise-item {
  background: #1e293b;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}

.expertise-item:hover {
  transform: translateY(-5px);
}

.expertise-item h3 {
  color: #60a5fa;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.expertise-item p {
  color: #94a3b8;
  font-size: 1rem;
  margin: 0;
}

.approach {
  margin-top: 2rem;
}

.passion-points {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.passion-points li {
  color: #94a3b8;
  margin: 1rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.passion-points li:before {
  content: "→";
  color: #60a5fa;
  position: absolute;
  left: 0;
}
</style>