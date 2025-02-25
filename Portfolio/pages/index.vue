<template>
  <section class="section">
    <h2 class="fade-in">About Me</h2>
    <div class="about-content">
      <div class="about-text">
        <p class="intro slide-in">Full Stack Software Engineer passionate about developing enterprise-level solutions with expertise in banking systems, GIS applications, and web development.</p>
        
        <p class="fade-in-up">With over 2 years of experience in the software industry, I specialize in building robust, scalable applications that solve complex business challenges. My expertise spans across banking solutions, geospatial applications, and full-stack development.</p>
        
        <p class="fade-in-up">My approach combines technical excellence with business acumen, focusing on delivering solutions that not only meet technical requirements but also drive business value. I'm particularly passionate about:</p>
        
        <ul class="passion-points">
          <li class="fade-in-left">Architecting scalable systems that handle high-volume transactions</li>
          <li class="fade-in-left">Implementing secure, efficient financial technology solutions</li>
          <li class="fade-in-left">Building intuitive user interfaces that enhance user experience</li>
          <li class="fade-in-left">Optimizing application performance and system reliability</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.about-text {
  color: #94a3b8;
  line-height: 1.8;
}

.intro {
  font-size: 1.4rem;
  color: #e2e8f0;
  margin-bottom: 2rem;
  font-weight: 500;
}

p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.passion-points {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.passion-points li {
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

/* Animations */
.fade-in {
  animation: fadeIn 0.8s ease-in forwards;
}

.slide-in {
  animation: slideIn 0.8s ease-out forwards;
}

.fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: 0.3s;
}

.fade-in-left {
  opacity: 0;
  animation: fadeInLeft 0.8s ease-out forwards;
}

.passion-points li:nth-child(1) { animation-delay: 0.4s; }
.passion-points li:nth-child(2) { animation-delay: 0.6s; }
.passion-points li:nth-child(3) { animation-delay: 0.8s; }
.passion-points li:nth-child(4) { animation-delay: 1s; }

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Hover animations */
.passion-points li {
  transition: transform 0.3s ease;
}

.passion-points li:hover {
  transform: translateX(10px);
}

.passion-points li:hover:before {
  animation: arrowBounce 0.8s infinite;
}

@keyframes arrowBounce {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
}

/* Reduce animations on preference */
@media (prefers-reduced-motion: reduce) {
  .fade-in,
  .slide-in,
  .fade-in-up,
  .fade-in-left {
    animation: none;
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .about-content {
    padding: 1rem;
  }
  
  .intro {
    font-size: 1.2rem;
  }
}
</style> 