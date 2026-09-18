const { createApp } = Vue;

createApp({
  data() {
    return {
      year: new Date().getFullYear(),
      menuOpen: false,
      lightboxProject: null,
      activeSection: 'home',
      navigation: [
        { id: 'home', label: 'Home', href: '#home' },
        { id: 'about', label: 'About', href: '#about' },
        { id: 'projects', label: 'Projects', href: '#projects' },
        { id: 'skills', label: 'Skills', href: '#skills' },
        { id: 'experience', label: 'Experience', href: '#experience' },
        { id: 'contact', label: 'Contact', href: '#contact' }
      ]
    };
  },
  mounted() {
    this.updateActiveSection();
    window.addEventListener('scroll', this.updateActiveSection, { passive: true });
    window.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateActiveSection);
    window.removeEventListener('keydown', this.handleKeydown);
  },
  methods: {
    toggleTheme() {
      document.documentElement.classList.toggle('dark');
      document.body.classList.toggle('dark');
    },
    openProject(title, image, description) {
      this.lightboxProject = { title, image, description };
      document.body.style.overflow = 'hidden';
    },
    closeLightbox() {
      this.lightboxProject = null;
      document.body.style.overflow = '';
    },
    handleKeydown(event) {
      if (event.key === 'Escape' && this.lightboxProject) this.closeLightbox();
    },
    updateActiveSection() {
      const y = window.scrollY + 130;
      let current = 'home';
      document.querySelectorAll('main section[id]').forEach((section) => {
        if (section.offsetTop <= y) current = section.id;
      });
      this.activeSection = current;
    }
  }
}).mount('#app');
