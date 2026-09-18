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
        { id: 'projects', label: 'Projects', href: '#projects' },
        { id: 'skills', label: 'Skills', href: '#skills' },
        { id: 'contact', label: 'Contact', href: '#contact' }
      ]
    };
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  },
  methods: {
    toggleTheme() {
      document.documentElement.classList.toggle('dark');
      document.body.classList.toggle('dark');
    },
    navigate(item, event) {
      event.preventDefault();
      this.activeSection = item.id;
      this.menuOpen = false;
      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', item.href);
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
    }
  }
}).mount('#app');
