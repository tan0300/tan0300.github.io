const { createApp } = Vue;

createApp({
  data() {
    return {
      year: new Date().getFullYear(),
      menuOpen: false,
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
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateActiveSection);
  },
  methods: {
    toggleTheme() {
      document.documentElement.classList.toggle('dark');
      document.body.classList.toggle('dark');
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
