export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 30px rgba(147, 51, 234, 0.35)',
      },
      colors: {
        page: '#050509',
        surface: '#11131a',
        panel: '#151822',
        accent: '#7c3aed',
        accentSoft: '#8b5cf6',
        neon: '#22d3ee',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(124,58,237,0.22), transparent 36%), radial-gradient(circle at 20% 20%, rgba(14,165,233,0.16), transparent 24%)',
      },
    },
  },
  plugins: [],
};
