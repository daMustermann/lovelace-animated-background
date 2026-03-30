// ============================================================
// Animated Background for Home Assistant — v2.0.0
// by Maudersoft — Complete rebuild for modern HA (2024–2026+)
// https://github.com/daMustermann/lovelace-animated-background
// ============================================================

const CARD_VERSION = '2.2.0';
const CARD_NAME = 'animated-background';
const BG_CONTAINER_ID = 'ab-container';

console.info(
  `%c ANIMATED BACKGROUND %c v${CARD_VERSION} %c by Maudersoft `,
  'color: white; background: #7c3aed; font-weight: 700; padding: 2px 6px; border-radius: 4px 0 0 4px;',
  'color: #7c3aed; background: #ede9fe; font-weight: 700; padding: 2px 6px;',
  'color: #6d28d9; background: #f5f3ff; font-weight: 500; padding: 2px 6px; border-radius: 0 4px 4px 0;'
);

window.customCards = window.customCards || [];
window.customCards.push({
  type: CARD_NAME,
  name: 'Animated Background',
  description: 'Stunning animated backgrounds for Home Assistant dashboards — by Maudersoft',
  preview: false,
  documentationURL: 'https://github.com/daMustermann/lovelace-animated-background',
});

// ============================================================
// PRESET DEFINITIONS
// ============================================================

// --- Preset 1: weather — Relaxed sky gradients + gentle particles ---

const WEATHER_GRADIENTS = {
  'sunny':           'linear-gradient(180deg, #1565c0 0%, #1e88e5 25%, #42a5f5 50%, #90caf9 75%, #e3f2fd 100%)',
  'clear-night':     'linear-gradient(180deg, #0a0e27 0%, #0d1b2a 25%, #1a237e 55%, #283593 80%, #1a237e 100%)',
  'partlycloudy':    'linear-gradient(180deg, #1976d2 0%, #42a5f5 30%, #78909c 60%, #b0bec5 85%, #cfd8dc 100%)',
  'cloudy':          'linear-gradient(180deg, #546e7a 0%, #607d8b 25%, #78909c 50%, #90a4ae 75%, #b0bec5 100%)',
  'rainy':           'linear-gradient(180deg, #1a1a2e 0%, #263238 25%, #37474f 50%, #455a64 75%, #546e7a 100%)',
  'pouring':         'linear-gradient(180deg, #0d1117 0%, #1a1a2e 25%, #263238 50%, #37474f 75%, #455a64 100%)',
  'lightning-rainy': 'linear-gradient(180deg, #0d1117 0%, #1a1a2e 30%, #263238 60%, #37474f 85%, #455a64 100%)',
  'lightning':       'linear-gradient(180deg, #0d1117 0%, #1a1a2e 25%, #212121 50%, #37474f 75%, #455a64 100%)',
  'snowy':           'linear-gradient(180deg, #90a4ae 0%, #b0bec5 25%, #cfd8dc 50%, #e0e0e0 75%, #eceff1 100%)',
  'snowy-rainy':     'linear-gradient(180deg, #78909c 0%, #90a4ae 25%, #b0bec5 50%, #cfd8dc 75%, #e0e0e0 100%)',
  'hail':            'linear-gradient(180deg, #37474f 0%, #455a64 25%, #607d8b 50%, #78909c 75%, #90a4ae 100%)',
  'fog':             'linear-gradient(180deg, #78909c 0%, #90a4ae 25%, #b0bec5 50%, #cfd8dc 75%, #e0e0e0 100%)',
  'windy':           'linear-gradient(180deg, #0d47a1 0%, #1565c0 25%, #1976d2 50%, #42a5f5 75%, #90caf9 100%)',
  'windy-variant':   'linear-gradient(180deg, #0d47a1 0%, #1565c0 25%, #1976d2 50%, #42a5f5 75%, #90caf9 100%)',
  'exceptional':     'linear-gradient(180deg, #b71c1c 0%, #c62828 25%, #e53935 50%, #ef5350 75%, #ff8a80 100%)',
};

const WEATHER_NIGHT_GRADIENTS = {
  'partlycloudy':  'linear-gradient(180deg, #0d1b2a 0%, #1a237e 25%, #283593 50%, #455a64 75%, #607d8b 100%)',
  'cloudy':        'linear-gradient(180deg, #0d1b2a 0%, #1a1a2e 25%, #37474f 50%, #455a64 75%, #546e7a 100%)',
  'rainy':         'linear-gradient(180deg, #050510 0%, #0d1117 25%, #1a1a2e 50%, #263238 75%, #37474f 100%)',
  'pouring':       'linear-gradient(180deg, #020208 0%, #050510 25%, #0d1117 50%, #1a1a2e 75%, #263238 100%)',
  'snowy':         'linear-gradient(180deg, #1a237e 0%, #283593 25%, #3949ab 50%, #90a4ae 75%, #b0bec5 100%)',
  'fog':           'linear-gradient(180deg, #1a1a2e 0%, #263238 25%, #37474f 50%, #546e7a 75%, #78909c 100%)',
  'windy':         'linear-gradient(180deg, #0a0e27 0%, #0d1b2a 25%, #0d47a1 50%, #1565c0 75%, #1976d2 100%)',
  'windy-variant': 'linear-gradient(180deg, #0a0e27 0%, #0d1b2a 25%, #0d47a1 50%, #1565c0 75%, #1976d2 100%)',
};

const WEATHER_PARTICLE_MAP = {
  'rainy': 'rain', 'pouring': 'heavy-rain', 'lightning-rainy': 'rain',
  'snowy': 'snow', 'snowy-rainy': 'snow', 'hail': 'hail', 'clear-night': 'stars',
};

// --- Preset 2: night-sky — Deep space chill, always dark ---

const NIGHTSKY_GRADIENTS = {
  'sunny':           'linear-gradient(180deg, #0f0c29 0%, #302b63 40%, #24243e 100%)',
  'clear-night':     'linear-gradient(180deg, #020111 0%, #0a0e27 30%, #1a237e 70%, #0d1b2a 100%)',
  'partlycloudy':    'linear-gradient(180deg, #0d1b2a 0%, #1a237e 35%, #283593 65%, #0d1b2a 100%)',
  'cloudy':          'linear-gradient(180deg, #0a0e27 0%, #1a1a2e 30%, #263238 70%, #0d1b2a 100%)',
  'rainy':           'linear-gradient(180deg, #020111 0%, #0d1117 30%, #1a1a2e 60%, #0a0e27 100%)',
  'pouring':         'linear-gradient(180deg, #000005 0%, #050510 30%, #0d1117 60%, #050510 100%)',
  'lightning-rainy': 'linear-gradient(180deg, #020111 0%, #0d1117 30%, #1a1a2e 60%, #0a0e27 100%)',
  'lightning':       'linear-gradient(180deg, #020111 0%, #0d1117 30%, #1a1a2e 60%, #0a0e27 100%)',
  'snowy':           'linear-gradient(180deg, #1a237e 0%, #283593 30%, #3949ab 70%, #1a237e 100%)',
  'snowy-rainy':     'linear-gradient(180deg, #1a237e 0%, #283593 35%, #455a64 65%, #1a237e 100%)',
  'hail':            'linear-gradient(180deg, #0a0e27 0%, #263238 35%, #37474f 65%, #0a0e27 100%)',
  'fog':             'linear-gradient(180deg, #1a1a2e 0%, #263238 30%, #37474f 60%, #1a1a2e 100%)',
  'windy':           'linear-gradient(180deg, #020111 0%, #0d1b2a 30%, #1a237e 70%, #020111 100%)',
  'windy-variant':   'linear-gradient(180deg, #020111 0%, #0d1b2a 30%, #1a237e 70%, #020111 100%)',
  'exceptional':     'linear-gradient(180deg, #1a0000 0%, #4a0000 40%, #1a0000 100%)',
};

// Night sky always gets stars; rain/snow layer on top
const NIGHTSKY_PARTICLE_MAP = {
  'rainy': 'stars-rain', 'pouring': 'stars-rain', 'lightning-rainy': 'stars-rain',
  'snowy': 'stars-snow', 'snowy-rainy': 'stars-snow', 'hail': 'stars',
};

// --- Preset 3: aurora — Northern lights chill gradient ---

const AURORA_GRADIENTS = {
  'sunny':           'linear-gradient(160deg, #0a0e27 0%, #0f3460 20%, #16c79a 45%, #11999e 65%, #0a0e27 100%)',
  'clear-night':     'linear-gradient(160deg, #020111 0%, #0a2e4f 20%, #0f9b8e 40%, #16c79a 60%, #0d1b2a 80%, #020111 100%)',
  'partlycloudy':    'linear-gradient(160deg, #0a0e27 0%, #1a3c5e 20%, #16c79a 45%, #3d9ec7 65%, #0a0e27 100%)',
  'cloudy':          'linear-gradient(160deg, #0d1b2a 0%, #1a3a4a 25%, #11999e 50%, #1a3a4a 75%, #0d1b2a 100%)',
  'rainy':           'linear-gradient(160deg, #050510 0%, #0a2e4f 25%, #0f6f6f 50%, #0a2e4f 75%, #050510 100%)',
  'pouring':         'linear-gradient(160deg, #020208 0%, #0a1e3f 25%, #0a5f5f 50%, #0a1e3f 75%, #020208 100%)',
  'lightning-rainy': 'linear-gradient(160deg, #050510 0%, #0a2e4f 25%, #0f6f6f 50%, #0a2e4f 75%, #050510 100%)',
  'lightning':       'linear-gradient(160deg, #050510 0%, #0a2e4f 25%, #0f6f6f 50%, #0a2e4f 75%, #050510 100%)',
  'snowy':           'linear-gradient(160deg, #1a237e 0%, #283593 25%, #16c79a 50%, #283593 75%, #1a237e 100%)',
  'snowy-rainy':     'linear-gradient(160deg, #1a237e 0%, #283593 25%, #11999e 50%, #283593 75%, #1a237e 100%)',
  'hail':            'linear-gradient(160deg, #0d1b2a 0%, #1a3a4a 25%, #11999e 50%, #1a3a4a 75%, #0d1b2a 100%)',
  'fog':             'linear-gradient(160deg, #0d1b2a 0%, #1a3a4a 25%, #0f9b8e 50%, #1a3a4a 75%, #0d1b2a 100%)',
  'windy':           'linear-gradient(160deg, #020111 0%, #0f3460 25%, #16c79a 50%, #0f3460 75%, #020111 100%)',
  'windy-variant':   'linear-gradient(160deg, #020111 0%, #0f3460 25%, #16c79a 50%, #0f3460 75%, #020111 100%)',
  'exceptional':     'linear-gradient(160deg, #2d0a0a 0%, #6a1b1b 25%, #c7166a 50%, #6a1b1b 75%, #2d0a0a 100%)',
};

const AURORA_PARTICLE_MAP = {
  'clear-night': 'stars', 'rainy': 'rain', 'pouring': 'heavy-rain',
  'lightning-rainy': 'rain', 'snowy': 'snow', 'snowy-rainy': 'snow', 'hail': 'hail',
};

// --- Preset 4: ocean — Calming ocean/water gradients ---

const OCEAN_GRADIENTS = {
  'sunny':           'linear-gradient(180deg, #006994 0%, #0097b2 25%, #43b3ae 50%, #7ec8b8 75%, #b8dbd9 100%)',
  'clear-night':     'linear-gradient(180deg, #001219 0%, #003049 25%, #005f73 50%, #0a9396 75%, #005f73 100%)',
  'partlycloudy':    'linear-gradient(180deg, #005f73 0%, #0a9396 25%, #78909c 50%, #5f8a8b 75%, #94d2bd 100%)',
  'cloudy':          'linear-gradient(180deg, #2c3e50 0%, #3d5a6e 25%, #4a7c7e 50%, #5f8a8b 75%, #7c9a92 100%)',
  'rainy':           'linear-gradient(180deg, #001219 0%, #002430 25%, #003544 50%, #004455 75%, #005566 100%)',
  'pouring':         'linear-gradient(180deg, #000a0f 0%, #001219 25%, #002430 50%, #003040 75%, #003544 100%)',
  'lightning-rainy': 'linear-gradient(180deg, #001219 0%, #002430 25%, #003544 50%, #004455 75%, #005566 100%)',
  'lightning':       'linear-gradient(180deg, #001219 0%, #002430 25%, #003544 50%, #004455 75%, #005566 100%)',
  'snowy':           'linear-gradient(180deg, #8ecae6 0%, #a3d5e6 25%, #bee1e6 50%, #caf0f8 75%, #e0f7fa 100%)',
  'snowy-rainy':     'linear-gradient(180deg, #8ecae6 0%, #94b8c4 25%, #7c9a92 50%, #94b8c4 75%, #8ecae6 100%)',
  'hail':            'linear-gradient(180deg, #2c3e50 0%, #3d5a6e 25%, #4a7c7e 50%, #5f8a8b 75%, #7c9a92 100%)',
  'fog':             'linear-gradient(180deg, #5f8a8b 0%, #7c9a92 25%, #94b8c4 50%, #b0c4c4 75%, #caf0f8 100%)',
  'windy':           'linear-gradient(180deg, #003049 0%, #005f73 25%, #0a9396 50%, #43b3ae 75%, #94d2bd 100%)',
  'windy-variant':   'linear-gradient(180deg, #003049 0%, #005f73 25%, #0a9396 50%, #43b3ae 75%, #94d2bd 100%)',
  'exceptional':     'linear-gradient(180deg, #3d0000 0%, #6b1e2a 25%, #c05050 50%, #6b1e2a 75%, #3d0000 100%)',
};

const OCEAN_PARTICLE_MAP = {
  'clear-night': 'stars', 'rainy': 'rain', 'pouring': 'heavy-rain',
  'lightning-rainy': 'rain', 'snowy': 'snow', 'snowy-rainy': 'snow', 'hail': 'hail',
};

// --- Preset 5: sunset — Warm amber/pink tones ---

const SUNSET_GRADIENTS = {
  'sunny':           'linear-gradient(180deg, #1a237e 0%, #e65100 20%, #ff8f00 40%, #ffab40 60%, #ffe082 80%, #fff8e1 100%)',
  'clear-night':     'linear-gradient(180deg, #0a0e27 0%, #1a0033 20%, #4a1a5e 40%, #7b2d8e 55%, #2d1b69 80%, #0a0e27 100%)',
  'partlycloudy':    'linear-gradient(180deg, #37474f 0%, #bf360c 20%, #e65100 40%, #ff8f00 60%, #9e9e9e 80%, #78909c 100%)',
  'cloudy':          'linear-gradient(180deg, #455a64 0%, #795548 25%, #8d6e63 50%, #a1887f 75%, #bcaaa4 100%)',
  'rainy':           'linear-gradient(180deg, #1a1a2e 0%, #3e2723 25%, #4e342e 50%, #5d4037 75%, #3e2723 100%)',
  'pouring':         'linear-gradient(180deg, #0d1117 0%, #2a1a0a 25%, #3e2723 50%, #2a1a0a 75%, #0d1117 100%)',
  'lightning-rainy': 'linear-gradient(180deg, #1a1a2e 0%, #3e2723 25%, #4e342e 50%, #5d4037 75%, #3e2723 100%)',
  'lightning':       'linear-gradient(180deg, #1a1a2e 0%, #3e2723 25%, #4e342e 50%, #5d4037 75%, #3e2723 100%)',
  'snowy':           'linear-gradient(180deg, #e8d5b7 0%, #d7ccc8 25%, #efebe9 50%, #fafafa 75%, #eceff1 100%)',
  'snowy-rainy':     'linear-gradient(180deg, #bcaaa4 0%, #a1887f 25%, #c8b8a8 50%, #d7ccc8 75%, #bcaaa4 100%)',
  'hail':            'linear-gradient(180deg, #455a64 0%, #5d4037 25%, #6d4c41 50%, #795548 75%, #78909c 100%)',
  'fog':             'linear-gradient(180deg, #a1887f 0%, #bcaaa4 25%, #d7ccc8 50%, #e8d5b7 75%, #efebe9 100%)',
  'windy':           'linear-gradient(180deg, #bf360c 0%, #e65100 25%, #ff8f00 50%, #ffab40 75%, #ffe082 100%)',
  'windy-variant':   'linear-gradient(180deg, #bf360c 0%, #e65100 25%, #ff8f00 50%, #ffab40 75%, #ffe082 100%)',
  'exceptional':     'linear-gradient(180deg, #b71c1c 0%, #c62828 25%, #e53935 50%, #ef5350 75%, #ff8a80 100%)',
};

const SUNSET_PARTICLE_MAP = {
  'clear-night': 'stars', 'rainy': 'rain', 'pouring': 'heavy-rain',
  'lightning-rainy': 'rain', 'snowy': 'snow', 'snowy-rainy': 'snow', 'hail': 'hail',
};

// --- Preset 6: classic — Original flixel cinemagraph videos ---

const CLASSIC_VIDEOS = {
  'sunny': [
    'https://cdn.flixel.com/flixel/hlhff0h8md4ev0kju5be.hd.mp4',
    'https://cdn.flixel.com/flixel/zjqsoc6ecqhntpl5vacs.hd.mp4',
    'https://cdn.flixel.com/flixel/jvw1avupguhfbo11betq.hd.mp4',
    'https://cdn.flixel.com/flixel/8cmeusxf3pkanai43djs.hd.mp4',
    'https://cdn.flixel.com/flixel/guwb10mfddctfvwioaex.hd.mp4',
  ],
  'partlycloudy': [
    'https://cdn.flixel.com/flixel/13e0s6coh6ayapvdyqnv.hd.mp4',
    'https://cdn.flixel.com/flixel/aorl3skmssy7udwopk22.hd.mp4',
    'https://cdn.flixel.com/flixel/qed6wvf2igukiioykg3r.hd.mp4',
    'https://cdn.flixel.com/flixel/3rd72eezaj6d23ahlo7y.hd.mp4',
    'https://cdn.flixel.com/flixel/9m11gd43m6qn3y93ntzp.hd.mp4',
    'https://cdn.flixel.com/flixel/hrkw2m8eofib9sk7t1v2.hd.mp4',
  ],
  'cloudy': [
    'https://cdn.flixel.com/flixel/3rd72eezaj6d23ahlo7y.hd.mp4',
    'https://cdn.flixel.com/flixel/e95h5cqyvhnrk4ytqt4q.hd.mp4',
    'https://cdn.flixel.com/flixel/l2bjw34wnusyf5q2qq3p.hd.mp4',
    'https://cdn.flixel.com/flixel/rrgta099ulami3zb9fd2.hd.mp4',
  ],
  'clear-night': [
    'https://cdn.flixel.com/flixel/x9dr8caygivq5secll7i.hd.mp4',
    'https://cdn.flixel.com/flixel/v26zyfd6yf0r33s46vpe.hd.mp4',
    'https://cdn.flixel.com/flixel/ypy8bw9fgw1zv2b4htp2.hd.mp4',
    'https://cdn.flixel.com/flixel/rosz2gi676xhkiw1ut6i.hd.mp4',
  ],
  'fog': [
    'https://cdn.flixel.com/flixel/vwqzlk4turo2449be9uf.hd.mp4',
    'https://cdn.flixel.com/flixel/5363uhabodwwrzgnq6vx.hd.mp4',
  ],
  'rainy': [
    'https://cdn.flixel.com/flixel/qti3s5st0srowd9krhcw.hd.mp4',
    'https://cdn.flixel.com/flixel/f0w23bd0enxur5ff0bxz.hd.mp4',
  ],
  'pouring': [
    'https://cdn.flixel.com/flixel/qti3s5st0srowd9krhcw.hd.mp4',
    'https://cdn.flixel.com/flixel/f0w23bd0enxur5ff0bxz.hd.mp4',
  ],
  'lightning-rainy': [
    'https://cdn.flixel.com/flixel/sbk5sc03j7vay52r3e4o.hd.mp4',
    'https://cdn.flixel.com/flixel/chrgj6raf5q3s6y2so7z.hd.mp4',
  ],
  'snowy': [
    'https://cdn.flixel.com/flixel/on3ysblo5hzdmrhv1kwh.hd.mp4',
    'https://cdn.flixel.com/flixel/ndza6yswd0k6vlboxyhk.hd.mp4',
    'https://cdn.flixel.com/flixel/psi1hhbsshcus8eumtr7.hd.mp4',
  ],
  'snowy-rainy': [
    'https://cdn.flixel.com/flixel/on3ysblo5hzdmrhv1kwh.hd.mp4',
    'https://cdn.flixel.com/flixel/psi1hhbsshcus8eumtr7.hd.mp4',
    'https://cdn.flixel.com/flixel/ndza6yswd0k6vlboxyhk.hd.mp4',
  ],
};

const CLASSIC_DEFAULT = 'https://cdn.flixel.com/flixel/ypy8bw9fgw1zv2b4htp2.hd.mp4';

// --- Preset registry ---

const PRESETS = {
  weather:    { gradients: WEATHER_GRADIENTS, nightGradients: WEATHER_NIGHT_GRADIENTS, particles: WEATHER_PARTICLE_MAP, speed: 30, label: 'Weather', icon: '\u2600\uFE0F' },
  'night-sky':{ gradients: NIGHTSKY_GRADIENTS, nightGradients: null, particles: NIGHTSKY_PARTICLE_MAP, speed: 45, defaultParticle: 'stars', label: 'Night Sky', icon: '\uD83C\uDF0C' },
  aurora:     { gradients: AURORA_GRADIENTS, nightGradients: null, particles: AURORA_PARTICLE_MAP, speed: 40, defaultParticle: 'stars', label: 'Aurora', icon: '\uD83C\uDF0C' },
  ocean:      { gradients: OCEAN_GRADIENTS, nightGradients: null, particles: OCEAN_PARTICLE_MAP, speed: 35, label: 'Ocean', icon: '\uD83C\uDF0A' },
  sunset:     { gradients: SUNSET_GRADIENTS, nightGradients: null, particles: SUNSET_PARTICLE_MAP, speed: 35, label: 'Sunset', icon: '\uD83C\uDF05' },
  classic:    { videos: CLASSIC_VIDEOS, defaultUrl: CLASSIC_DEFAULT, label: 'Classic Videos', icon: '\uD83C\uDFAC' },
};

const WEATHER_EMOJIS = {
  'sunny': '\u2600\uFE0F', 'clear-night': '\uD83C\uDF19', 'partlycloudy': '\u26C5',
  'cloudy': '\u2601\uFE0F', 'rainy': '\uD83C\uDF27\uFE0F', 'pouring': '\uD83C\uDF27\uFE0F',
  'lightning-rainy': '\u26C8\uFE0F', 'lightning': '\uD83C\uDF29\uFE0F', 'snowy': '\u2744\uFE0F',
  'snowy-rainy': '\uD83C\uDF28\uFE0F', 'fog': '\uD83C\uDF2B\uFE0F', 'hail': '\uD83C\uDF28\uFE0F',
  'windy': '\uD83D\uDCA8', 'windy-variant': '\uD83D\uDCA8', 'exceptional': '\u26A0\uFE0F',
};

// ============================================================
// CSS Keyframes — RELAXED timings (much slower than before)
// ============================================================

const AB_GLOBAL_STYLES = `
  @keyframes ab-gradient-shift {
    0%   { background-position: 50% 0%; }
    50%  { background-position: 50% 100%; }
    100% { background-position: 50% 0%; }
  }
  @keyframes ab-rain-fall {
    0%   { transform: translateY(-10vh) translateX(0); opacity: 0; }
    5%   { opacity: 0.6; }
    100% { transform: translateY(110vh) translateX(-20px); opacity: 0.15; }
  }
  @keyframes ab-snow-fall {
    0%   { transform: translateY(-5vh) translateX(0) rotate(0deg); opacity: 0; }
    5%   { opacity: 0.8; }
    100% { transform: translateY(105vh) translateX(60px) rotate(360deg); opacity: 0; }
  }
  @keyframes ab-twinkle {
    0%, 100% { opacity: 0.05; transform: scale(0.8); }
    50%      { opacity: 0.9; transform: scale(1.15); }
  }
  @keyframes ab-hail-fall {
    0%   { transform: translateY(-5vh); opacity: 0; }
    5%   { opacity: 0.8; }
    100% { transform: translateY(105vh); opacity: 0.05; }
  }
`;

// ============================================================
// Particle Generator — MUCH slower, fewer particles, gentle
// ============================================================

function createParticles(type, container) {
  container.innerHTML = '';
  if (!type) return;

  const frag = document.createDocumentFragment();

  switch (type) {
    // Gentle rain — slow, sparse, dreamy
    case 'rain':
      for (let i = 0; i < 40; i++) {
        const d = document.createElement('div');
        d.style.cssText = `position:absolute;left:${Math.random()*100}%;top:-5vh;width:1.5px;height:${12+Math.random()*18}px;background:linear-gradient(transparent,rgba(174,194,224,0.35));border-radius:0 0 2px 2px;animation:ab-rain-fall ${2.5+Math.random()*2}s linear ${Math.random()*8}s infinite;pointer-events:none;will-change:transform;`;
        frag.appendChild(d);
      }
      break;

    // Heavy rain — still slower than before
    case 'heavy-rain':
      for (let i = 0; i < 80; i++) {
        const d = document.createElement('div');
        d.style.cssText = `position:absolute;left:${Math.random()*100}%;top:-5vh;width:1.5px;height:${15+Math.random()*22}px;background:linear-gradient(transparent,rgba(174,194,224,0.45));border-radius:0 0 2px 2px;animation:ab-rain-fall ${1.8+Math.random()*1.5}s linear ${Math.random()*5}s infinite;pointer-events:none;will-change:transform;`;
        frag.appendChild(d);
      }
      break;

    // Dreamy slow snow
    case 'snow':
      for (let i = 0; i < 30; i++) {
        const sz = 3 + Math.random() * 7;
        const d = document.createElement('div');
        d.style.cssText = `position:absolute;left:${Math.random()*100}%;top:-5vh;width:${sz}px;height:${sz}px;background:white;border-radius:50%;opacity:${0.3+Math.random()*0.5};animation:ab-snow-fall ${8+Math.random()*12}s linear ${Math.random()*10}s infinite;pointer-events:none;will-change:transform;`;
        frag.appendChild(d);
      }
      break;

    // Slow twinkling stars — the main chill particle
    case 'stars':
      for (let i = 0; i < 60; i++) {
        const sz = 1 + Math.random() * 2.5;
        const d = document.createElement('div');
        d.style.cssText = `position:absolute;left:${Math.random()*100}%;top:${Math.random()*100}%;width:${sz}px;height:${sz}px;background:white;border-radius:50%;animation:ab-twinkle ${5+Math.random()*10}s ease-in-out ${Math.random()*8}s infinite;pointer-events:none;will-change:opacity;`;
        frag.appendChild(d);
      }
      break;

    // Stars layered with gentle rain
    case 'stars-rain':
      // Stars layer
      for (let i = 0; i < 40; i++) {
        const sz = 1 + Math.random() * 2;
        const d = document.createElement('div');
        d.style.cssText = `position:absolute;left:${Math.random()*100}%;top:${Math.random()*100}%;width:${sz}px;height:${sz}px;background:white;border-radius:50%;animation:ab-twinkle ${5+Math.random()*10}s ease-in-out ${Math.random()*8}s infinite;pointer-events:none;will-change:opacity;`;
        frag.appendChild(d);
      }
      // Rain layer
      for (let i = 0; i < 30; i++) {
        const d = document.createElement('div');
        d.style.cssText = `position:absolute;left:${Math.random()*100}%;top:-5vh;width:1.5px;height:${12+Math.random()*18}px;background:linear-gradient(transparent,rgba(174,194,224,0.3));border-radius:0 0 2px 2px;animation:ab-rain-fall ${2.5+Math.random()*2}s linear ${Math.random()*8}s infinite;pointer-events:none;will-change:transform;`;
        frag.appendChild(d);
      }
      break;

    // Stars layered with gentle snow
    case 'stars-snow':
      for (let i = 0; i < 40; i++) {
        const sz = 1 + Math.random() * 2;
        const d = document.createElement('div');
        d.style.cssText = `position:absolute;left:${Math.random()*100}%;top:${Math.random()*100}%;width:${sz}px;height:${sz}px;background:white;border-radius:50%;animation:ab-twinkle ${5+Math.random()*10}s ease-in-out ${Math.random()*8}s infinite;pointer-events:none;will-change:opacity;`;
        frag.appendChild(d);
      }
      for (let i = 0; i < 20; i++) {
        const sz = 3 + Math.random() * 6;
        const d = document.createElement('div');
        d.style.cssText = `position:absolute;left:${Math.random()*100}%;top:-5vh;width:${sz}px;height:${sz}px;background:white;border-radius:50%;opacity:${0.25+Math.random()*0.4};animation:ab-snow-fall ${10+Math.random()*12}s linear ${Math.random()*10}s infinite;pointer-events:none;will-change:transform;`;
        frag.appendChild(d);
      }
      break;

    // Hail
    case 'hail':
      for (let i = 0; i < 25; i++) {
        const sz = 3 + Math.random() * 5;
        const d = document.createElement('div');
        d.style.cssText = `position:absolute;left:${Math.random()*100}%;top:-3vh;width:${sz}px;height:${sz}px;background:rgba(255,255,255,0.7);border-radius:50%;animation:ab-hail-fall ${1.5+Math.random()*1.5}s linear ${Math.random()*5}s infinite;pointer-events:none;will-change:transform;`;
        frag.appendChild(d);
      }
      break;
  }

  container.appendChild(frag);
}

// ============================================================
// Helpers
// ============================================================

function isVideoUrl(url) {
  if (!url || typeof url !== 'string') return false;
  const c = url.split('?')[0].split('#')[0].toLowerCase();
  return c.endsWith('.mp4') || c.endsWith('.webm') || c.endsWith('.ogg');
}

function getVideoType(url) {
  const c = url.split('?')[0].split('#')[0].toLowerCase();
  if (c.endsWith('.webm')) return 'video/webm';
  if (c.endsWith('.ogg'))  return 'video/ogg';
  return 'video/mp4';
}

function randomFrom(val) {
  if (!Array.isArray(val)) return val;
  return val[Math.floor(Math.random() * val.length)];
}

function _detectDeviceType() {
  const w = window.innerWidth;
  if (w <= 600) return 'mobile';
  if (w <= 1024) return 'tablet';
  return 'desktop';
}

// ============================================================
// Main Card
// ============================================================

class AnimatedBackground extends HTMLElement {

  static getConfigElement() {
    return document.createElement('animated-background-editor');
  }

  static getStubConfig(hass) {
    const entity = hass
      ? Object.keys(hass.states).find(e => e.startsWith('weather.'))
      : '';
    return { entity: entity || '', preset: 'weather' };
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = {};
    this._hass = null;
    this._connected = false;
    this._huiRoot = null;
    this._bgContainer = null;
    this._layerA = null;
    this._layerB = null;
    this._particleContainer = null;
    this._lightningOverlay = null;
    this._currentLayer = 'a';
    this._prevState = null;
    this._prevUrl = null;
    this._prevParticles = null;
    this._retries = 0;
    this._viewObs = null;
    this._transTimer = null;
    this._flashTimer = null;
    this._idleTimer = null;
    this._isIdle = false;
    this._idleListeners = [];
  }

  /* --- Lifecycle --- */

  setConfig(config) {
    if (!config) throw new Error('Invalid configuration');
    const oldEntity = this._config.entity;
    const oldPreset = this._config.preset;

    // Resolve per-device preset
    const deviceType = _detectDeviceType();
    const devicePresets = config.device_presets || {};
    const resolvedPreset = devicePresets[deviceType] || config.preset || 'none';

    this._config = {
      entity:              config.entity || '',
      preset:              resolvedPreset,
      device_presets:      config.device_presets || {},
      default_url:         config.default_url || '',
      state_url:           config.state_url || {},
      transition_duration: config.transition_duration !== undefined ? config.transition_duration : 2,
      overlay:             config.overlay !== undefined ? config.overlay : 'rgba(0,0,0,0.15)',
      particles:           config.particles !== undefined ? config.particles : true,
      static_gradient:     config.static_gradient !== undefined ? config.static_gradient : false,
      card_opacity:        config.card_opacity !== undefined ? config.card_opacity : 0.88,
      show_card:           config.show_card !== undefined ? config.show_card : true,
      transparent_header:  config.transparent_header !== undefined ? config.transparent_header : true,
      blur:                config.blur !== undefined ? config.blur : 0,
      idle_blur:           config.idle_blur !== undefined ? config.idle_blur : false,
      idle_timeout:        config.idle_timeout !== undefined ? config.idle_timeout : 60,
      idle_blur_strength:  config.idle_blur_strength !== undefined ? config.idle_blur_strength : 8,
      idle_dim:            config.idle_dim !== undefined ? config.idle_dim : 0.3,
      debug:               config.debug || false,
    };

    // Store raw preset for saving back (not the resolved one)
    this._rawPreset = config.preset || 'none';

    this._renderCard();

    if (this._connected && (oldEntity !== this._config.entity || oldPreset !== this._config.preset)) {
      this._prevState = null;
      this._prevUrl = null;
      this._prevParticles = null;
      this._setupBackground();
    }
    if (this._connected) {
      this._applyBlur();
      this._setupIdleWatcher();
    }
  }

  set hass(hass) {
    const entity  = this._getEntity();
    const oldSt   = this._hass?.states?.[entity]?.state;
    const newSt   = hass?.states?.[entity]?.state;
    const oldSun  = this._hass?.states?.['sun.sun']?.state;
    const newSun  = hass?.states?.['sun.sun']?.state;

    this._hass = hass;

    const changed  = oldSt !== newSt;
    const presetId = this._config.preset;
    const sunFlip  = oldSun !== newSun && presetId && presetId !== 'none';

    if (this._connected && (changed || sunFlip)) {
      if (sunFlip) this._prevUrl = null;
      this._updateBackground();
    }
    this._updateCardDisplay();
  }

  getCardSize() { return this._config.show_card ? 1 : 0; }

  connectedCallback()    { this._connected = true;  this._retries = 0; this._setupBackground(); this._setupIdleWatcher(); }
  disconnectedCallback() { this._connected = false; this._cleanup(); }

  /* --- Helpers --- */

  _getEntity() {
    if (this._config.entity) return this._config.entity;
    const pr = this._config.preset;
    if (pr && pr !== 'none' && this._hass)
      return Object.keys(this._hass.states).find(e => e.startsWith('weather.')) || null;
    return null;
  }

  _isNight() {
    const sun = this._hass?.states['sun.sun'];
    return sun ? sun.state === 'below_horizon' : false;
  }

  _getPreset() {
    return PRESETS[this._config.preset] || null;
  }

  _gradientFor(state) {
    const preset = this._getPreset();
    if (!preset || !preset.gradients) return null;
    // Night variants
    if (state === 'sunny' && this._isNight() && preset.gradients['clear-night'])
      return preset.gradients['clear-night'];
    if (this._isNight() && preset.nightGradients?.[state])
      return preset.nightGradients[state];
    return preset.gradients[state] || null;
  }

  _getGradientSpeed() {
    const preset = this._getPreset();
    return (preset?.speed || 30) + 's';
  }

  /* --- Find hui-root --- */

  _findHuiRoot() {
    let el = this;
    for (let i = 0; i < 20; i++) {
      if (!el) break;
      const r = el.getRootNode();
      if (r === document || r === el) break;
      el = r.host;
      if (!el) break;
      if (el.localName === 'hui-root') return el;
    }
    try {
      const ha   = document.querySelector('home-assistant');
      const main = ha?.shadowRoot?.querySelector('home-assistant-main');
      if (!main) return null;
      const sr   = main.shadowRoot;
      const drawer = sr?.querySelector('ha-drawer');
      let panel =
        drawer?.querySelector('partial-panel-resolver ha-panel-lovelace') ||
        drawer?.querySelector('ha-panel-lovelace') ||
        sr?.querySelector('partial-panel-resolver ha-panel-lovelace') ||
        sr?.querySelector('ha-panel-lovelace');
      if (!panel) {
        const res = sr?.querySelector('partial-panel-resolver');
        panel = res?.shadowRoot?.querySelector('ha-panel-lovelace') || res?.querySelector('ha-panel-lovelace');
      }
      return panel?.shadowRoot?.querySelector('hui-root') || null;
    } catch (_) { return null; }
  }

  /* --- Background Setup --- */

  _setupBackground() {
    if (!this._connected) return;
    this._huiRoot = this._findHuiRoot();
    if (!this._huiRoot) {
      if (++this._retries < 50) setTimeout(() => this._setupBackground(), 100);
      else if (this._config.debug) console.warn('Animated Background: hui-root not found');
      return;
    }
    if (this._config.debug) console.log('Animated Background: injecting into hui-root');
    this._injectGlobal();
    this._createContainer();
    this._makeTransparent();
    this._applyBlur();
    this._updateBackground();
  }

  _injectGlobal() {
    const sr = this._huiRoot.shadowRoot;
    if (sr.getElementById('ab-gstyles')) return;
    const s = document.createElement('style');
    s.id = 'ab-gstyles';
    s.textContent = AB_GLOBAL_STYLES;
    sr.appendChild(s);
  }

  _createContainer() {
    const sr = this._huiRoot.shadowRoot;
    sr.getElementById(BG_CONTAINER_ID)?.remove();
    sr.getElementById('ab-mstyles')?.remove();

    const style = document.createElement('style');
    style.id = 'ab-mstyles';
    style.textContent = `
      #${BG_CONTAINER_ID}{position:fixed;inset:0;z-index:-10;overflow:hidden}
      .ab-ly{position:absolute;inset:0;transition:opacity ${this._config.transition_duration}s ease-in-out;background-size:100% 200%}
      .ab-ly video,.ab-ly img{min-width:100%;min-height:100%;width:auto;height:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);object-fit:cover}
      .ab-ov{position:absolute;inset:0;z-index:1;pointer-events:none}
      .ab-pt{position:absolute;inset:0;z-index:2;pointer-events:none;overflow:hidden}
      .ab-fl{position:absolute;inset:0;z-index:3;pointer-events:none;background:white;opacity:0;transition:opacity .08s}
      #view{background:transparent!important}
    `;

    const ct = document.createElement('div');
    ct.id = BG_CONTAINER_ID;

    this._layerA = document.createElement('div');
    this._layerA.className = 'ab-ly'; this._layerA.id = 'ab-la';

    this._layerB = document.createElement('div');
    this._layerB.className = 'ab-ly'; this._layerB.id = 'ab-lb';
    this._layerB.style.opacity = '0';

    const ov = document.createElement('div');
    ov.className = 'ab-ov';
    ov.style.background = this._config.overlay;

    this._particleContainer = document.createElement('div');
    this._particleContainer.className = 'ab-pt';

    this._lightningOverlay = document.createElement('div');
    this._lightningOverlay.className = 'ab-fl';

    ct.append(this._layerA, this._layerB, ov, this._particleContainer, this._lightningOverlay);
    sr.prepend(style);
    sr.prepend(ct);
    this._bgContainer = ct;
  }

  _makeTransparent() {
    const sr   = this._huiRoot.shadowRoot;
    const view = sr.getElementById('view');
    if (!view) return;

    const inject = (id, css) => { sr.getElementById(id)?.remove(); const s = document.createElement('style'); s.id = id; s.textContent = css; sr.appendChild(s); };

    inject('ab-trans', '#view>*{background:transparent!important;--lovelace-background:transparent!important}');
    inject('ab-opac',  `#view>*{opacity:${this._config.card_opacity}}`);

    if (this._config.transparent_header) {
      inject('ab-hdr', `
        :host{--app-header-background-color:rgba(var(--rgb-primary-color,3,169,244),.55)!important}
        .header,.toolbar,app-header{backdrop-filter:blur(12px) saturate(1.4);-webkit-backdrop-filter:blur(12px) saturate(1.4)}
      `);
    }

    if (this._viewObs) this._viewObs.disconnect();
    this._viewObs = new MutationObserver(() => {
      for (const c of view.children) if (c.style) c.style.background = 'transparent';
    });
    this._viewObs.observe(view, { childList: true });

    let n = 0;
    if (this._transTimer) clearInterval(this._transTimer);
    this._transTimer = setInterval(() => {
      for (const c of view.children) if (c.style) c.style.background = 'transparent';
      if (++n > 20) { clearInterval(this._transTimer); this._transTimer = null; }
    }, 100);
  }

  /* --- Background Updates --- */

  _updateBackground() {
    if (!this._hass || !this._bgContainer) return;

    const entity  = this._getEntity();
    const state   = entity ? this._hass.states[entity]?.state : null;
    const night   = this._isNight();
    const preset  = this._getPreset();
    let url       = null;
    let gradient  = null;
    let particles = null;

    // 1. Custom state_url always wins
    if (state && this._config.state_url?.[state]) {
      const v = this._config.state_url[state];
      if (v === 'none') { this._bgContainer.style.display = 'none'; return; }
      url = randomFrom(v);
    }
    // 2. Preset: classic (video-based)
    else if (preset?.videos && state) {
      // At night, always pick from the night videos
      const effectiveState = (night && preset.videos['clear-night']) ? 'clear-night' : state;
      const vids = preset.videos[effectiveState];
      if (vids) url = randomFrom(vids);
      else if (preset.defaultUrl) url = preset.defaultUrl;
    }
    // 3. Preset: gradient-based
    else if (preset?.gradients && state) {
      gradient = this._gradientFor(state);
      if (this._config.particles) {
        particles = preset.particles?.[state] || preset.defaultParticle || null;
        if (night && !particles && state !== 'fog' && preset.gradients['clear-night'])
          particles = 'stars';
      }
    }
    // 4. default_url fallback
    else if (this._config.default_url) {
      url = randomFrom(this._config.default_url);
    }

    if (!url && !gradient) return;
    this._bgContainer.style.display = '';

    const key = url || gradient;
    if (key === this._prevUrl) return;
    this._prevState = state;
    this._prevUrl   = key;

    if (url) this._toUrl(url); else this._toGradient(gradient);

    if (particles !== this._prevParticles) {
      this._prevParticles = particles;
      createParticles(particles, this._particleContainer);
    }
    this._lightning(state);

    if (this._config.debug) console.log('Animated Background:', { state, url, gradient, particles, preset: this._config.preset });
  }

  _toUrl(url) {
    const next = this._currentLayer === 'a' ? this._layerB : this._layerA;
    const curr = this._currentLayer === 'a' ? this._layerA : this._layerB;
    next.innerHTML = '';
    next.style.background = ''; next.style.backgroundSize = ''; next.style.animation = '';

    const swap = () => {
      next.style.opacity = '1'; curr.style.opacity = '0';
      this._currentLayer = this._currentLayer === 'a' ? 'b' : 'a';
    };

    const loadMedia = (resolvedUrl, originalUrl) => {
      if (isVideoUrl(originalUrl)) {
        const v = document.createElement('video');
        v.autoplay = true; v.loop = true; v.muted = true; v.playsInline = true;
        v.setAttribute('playsinline', '');
        if (resolvedUrl.startsWith('blob:')) {
          v.src = resolvedUrl;
        } else {
          const src = document.createElement('source');
          src.src = resolvedUrl; src.type = getVideoType(originalUrl);
          v.appendChild(src);
        }
        next.appendChild(v);
        v.addEventListener('canplay', () => { v.play().catch(() => {}); swap(); }, { once: true });
        v.addEventListener('error', () => console.warn('Animated Background: video load failed', originalUrl), { once: true });
      } else {
        const img = document.createElement('img');
        img.src = resolvedUrl; img.alt = '';
        next.appendChild(img);
        img.addEventListener('load', swap, { once: true });
        img.addEventListener('error', () => console.warn('Animated Background: image load failed', originalUrl), { once: true });
      }
    };

    loadMedia(url, url);
  }

  _toGradient(g) {
    const next = this._currentLayer === 'a' ? this._layerB : this._layerA;
    const curr = this._currentLayer === 'a' ? this._layerA : this._layerB;
    next.innerHTML = '';
    next.style.background     = g;
    next.style.backgroundSize = '100% 200%';
    if (this._config.static_gradient) {
      next.style.animation = 'none';
      next.style.backgroundPosition = '50% 50%';
    } else {
      next.style.animation = `ab-gradient-shift ${this._getGradientSpeed()} ease infinite`;
    }
    requestAnimationFrame(() => {
      next.style.opacity = '1'; curr.style.opacity = '0';
      this._currentLayer = this._currentLayer === 'a' ? 'b' : 'a';
    });
  }

  _lightning(state) {
    if (this._flashTimer) { clearInterval(this._flashTimer); this._flashTimer = null; }
    if (state !== 'lightning-rainy' && state !== 'lightning') {
      if (this._lightningOverlay) this._lightningOverlay.style.opacity = '0';
      return;
    }
    const flash = () => {
      if (!this._lightningOverlay) return;
      const lo = this._lightningOverlay;
      lo.style.opacity = '0.6';
      setTimeout(() => lo.style.opacity = '0', 120);
      setTimeout(() => lo.style.opacity = '0.25', 250);
      setTimeout(() => lo.style.opacity = '0', 380);
    };
    flash();
    this._flashTimer = setInterval(flash, 6000 + Math.random() * 12000);
  }

  /* --- Blur & Idle Screensaver --- */

  _applyBlur() {
    if (!this._bgContainer) return;
    const blurVal = this._isIdle ? this._config.idle_blur_strength : this._config.blur;
    const dimVal = this._isIdle ? this._config.idle_dim : 0;
    const speed = this._isIdle ? '2s' : '0.5s';
    this._bgContainer.style.transition = `filter ${speed} ease, opacity ${speed} ease`;
    this._bgContainer.style.filter = blurVal > 0 ? `blur(${blurVal}px)` : 'none';
    // Use a dim overlay instead of changing opacity (which would hide particles too)
    const sr = this._huiRoot?.shadowRoot;
    if (sr) {
      let dimEl = sr.getElementById('ab-idle-dim');
      if (dimVal > 0) {
        if (!dimEl) {
          dimEl = document.createElement('div');
          dimEl.id = 'ab-idle-dim';
          dimEl.style.cssText = 'position:fixed;inset:0;z-index:-9;pointer-events:none;background:black;transition:opacity 2s ease;opacity:0';
          this._bgContainer.parentNode.insertBefore(dimEl, this._bgContainer.nextSibling);
        }
        requestAnimationFrame(() => { dimEl.style.opacity = String(dimVal); });
      } else if (dimEl) {
        dimEl.style.opacity = '0';
      }
    }
  }

  _setupIdleWatcher() {
    this._teardownIdleWatcher();
    if (!this._config.idle_blur || !this._connected) return;

    const timeout = Math.max(5, this._config.idle_timeout) * 1000;

    const resetIdle = () => {
      if (this._isIdle) {
        this._isIdle = false;
        this._applyBlur();
      }
      clearTimeout(this._idleTimer);
      this._idleTimer = setTimeout(() => {
        this._isIdle = true;
        this._applyBlur();
      }, timeout);
    };

    const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'wheel'];
    events.forEach(evt => {
      const handler = () => resetIdle();
      document.addEventListener(evt, handler, { passive: true });
      this._idleListeners.push({ evt, handler });
    });

    // Start the timer
    resetIdle();
  }

  _teardownIdleWatcher() {
    clearTimeout(this._idleTimer);
    this._idleTimer = null;
    this._idleListeners.forEach(({ evt, handler }) => document.removeEventListener(evt, handler));
    this._idleListeners = [];
    if (this._isIdle) {
      this._isIdle = false;
      this._applyBlur();
    }
  }

  /* --- Card Display --- */

  _renderCard() {
    if (!this._config.show_card) {
      this.shadowRoot.innerHTML = `
        <style>
          :host{display:block;min-height:1px}
          ha-card{min-height:32px;overflow:hidden;background:transparent!important;box-shadow:none!important;border:none!important;opacity:0;transition:opacity .2s}
          :host(:hover) ha-card,:host(.edit-mode) ha-card{opacity:1;background:rgba(var(--rgb-card-background-color,255,255,255),.4)!important;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}
          .h{display:flex;align-items:center;justify-content:center;padding:6px 12px;gap:6px;font-size:12px;opacity:.7}
        </style>
        <ha-card>
          <div class="h">Animated Background — Card hidden (hover to configure)</div>
        </ha-card>`;
      return;
    }
    this.shadowRoot.innerHTML = `
      <style>
        :host{display:block}
        ha-card{overflow:hidden;background:rgba(var(--rgb-card-background-color,255,255,255),.6)!important;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
        .c{display:flex;align-items:center;padding:12px 16px;gap:12px}
        .p{width:40px;height:40px;border-radius:10px;flex-shrink:0;background-size:100% 200%;animation:g 20s ease infinite;box-shadow:0 2px 8px rgba(0,0,0,.15)}
        @keyframes g{0%{background-position:50% 0%}50%{background-position:50% 100%}100%{background-position:50% 0%}}
        .i{display:flex;flex-direction:column;min-width:0}
        .t{font-size:12px;font-weight:500;opacity:.7;text-transform:uppercase;letter-spacing:.5px}
        .s{font-size:14px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      </style>
      <ha-card>
        <div class="c">
          <div class="p" id="pv"></div>
          <div class="i">
            <span class="t">Animated Background</span>
            <span class="s" id="sd">Initializing\u2026</span>
          </div>
        </div>
      </ha-card>`;
  }

  _updateCardDisplay() {
    if (!this._config.show_card) return;
    const sd = this.shadowRoot?.getElementById('sd');
    const pv = this.shadowRoot?.getElementById('pv');
    if (!sd || !pv) return;

    const entity = this._getEntity();
    const state  = entity && this._hass ? this._hass.states[entity]?.state : null;
    const preset = this._getPreset();

    if (state) {
      const em = WEATHER_EMOJIS[state] || (preset?.icon || '\uD83C\uDFAC');
      const label = state.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const presetLabel = preset ? ` \u00B7 ${preset.label}` : '';
      sd.textContent = `${em} ${label}${presetLabel}`;
      const g = this._gradientFor(state);
      if (g) { pv.style.background = g; pv.style.backgroundSize = '100% 200%'; }
      else { pv.style.background = 'linear-gradient(135deg, #667eea, #764ba2)'; }
    } else if (this._config.default_url) {
      sd.textContent = '\uD83C\uDFAC Custom Background';
      pv.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    } else {
      sd.textContent = '\u23F8\uFE0F No entity configured';
      pv.style.background = 'linear-gradient(135deg, #ccc, #999)';
    }
  }

  /* --- Cleanup --- */

  _cleanup() {
    this._teardownIdleWatcher();
    const sr = this._huiRoot?.shadowRoot;
    if (sr) ['ab-container','ab-mstyles','ab-gstyles','ab-trans','ab-opac','ab-hdr','ab-idle-dim'].forEach(id => sr.getElementById(id)?.remove());
    if (this._viewObs)    { this._viewObs.disconnect(); this._viewObs = null; }
    if (this._transTimer) { clearInterval(this._transTimer); this._transTimer = null; }
    if (this._flashTimer) { clearInterval(this._flashTimer); this._flashTimer = null; }
    this._bgContainer = this._layerA = this._layerB = this._particleContainer = this._lightningOverlay = null;
    this._prevState = this._prevUrl = this._prevParticles = null;
  }
}

// ============================================================
// Visual Editor
// ============================================================

class AnimatedBackgroundEditor extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = {};
    this._hass = null;
    this._rendered = false;
  }

  set hass(h) {
    this._hass = h;
    const p = this.shadowRoot?.querySelector('ha-entity-picker');
    if (p) { p.hass = h; }
  }

  setConfig(config) {
    this._config = Object.assign({
      entity: '', preset: 'none', device_presets: {}, default_url: '', state_url: {},
      transition_duration: 2, overlay: 'rgba(0,0,0,0.15)',
      particles: true, static_gradient: false,
      card_opacity: 0.88, show_card: true,
      transparent_header: true, blur: 0,
      idle_blur: false, idle_timeout: 60, idle_blur_strength: 8, idle_dim: 0.3,
      debug: false,
    }, config);
    if (!this._rendered) {
      this._render();
      this._rendered = true;
    } else {
      this._updateValues();
    }
  }

  _render() {
    const c = this._config;
    const presetOptions = [
      { value: 'none',      label: 'None (custom only)' },
      { value: 'weather',   label: '\u2600\uFE0F Weather \u2014 Sky gradients + gentle particles' },
      { value: 'night-sky', label: '\uD83C\uDF0C Night Sky \u2014 Deep space feel, always dark + stars' },
      { value: 'aurora',    label: '\uD83C\uDF0C Aurora \u2014 Northern lights, teal + purple' },
      { value: 'ocean',     label: '\uD83C\uDF0A Ocean \u2014 Calming water tones' },
      { value: 'sunset',    label: '\uD83C\uDF05 Sunset \u2014 Warm amber, pink + earth tones' },
      { value: 'classic',   label: '\uD83C\uDFAC Classic \u2014 Original cinemagraph videos' },
    ];
    const opts = presetOptions.map(p =>
      `<option value="${p.value}"${c.preset===p.value?' selected':''}>${p.label}</option>`
    ).join('');

    this.shadowRoot.innerHTML = `
      <style>
        .e{padding:16px}.r{margin-bottom:16px}
        .r label{display:block;font-weight:500;margin-bottom:6px;font-size:14px;color:var(--primary-text-color)}
        .h{font-size:12px;color:var(--secondary-text-color);margin-top:4px}
        ha-entity-picker{display:block;width:100%}
        select,input[type="text"],input[type="number"]{width:100%;padding:10px 12px;border:1px solid var(--divider-color,#e0e0e0);border-radius:8px;background:var(--card-background-color,#fff);color:var(--primary-text-color,#333);font-size:14px;box-sizing:border-box;font-family:inherit}
        input[type="number"]{width:80px}
        .tg{display:flex;align-items:center;justify-content:space-between}.tg label{margin-bottom:0}
        .sl{display:flex;align-items:center;gap:12px}.sl label{flex-shrink:0;margin-bottom:0}.sl input[type="range"]{flex:1}
        .sv{min-width:44px;text-align:right;font-size:14px;color:var(--secondary-text-color)}
        .st{font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--primary-color);margin:24px 0 12px;padding-bottom:8px;border-bottom:1px solid var(--divider-color,#e0e0e0)}
        .sr{display:flex;gap:8px;margin-bottom:8px;align-items:center}
        .sr input{flex:1;padding:8px 10px;border:1px solid var(--divider-color,#e0e0e0);border-radius:6px;background:var(--card-background-color,#fff);color:var(--primary-text-color);font-size:13px;box-sizing:border-box}
        .sr input:first-child{max-width:120px}
        .b{padding:6px 14px;border:1px solid var(--primary-color);border-radius:6px;background:transparent;color:var(--primary-color);cursor:pointer;font-size:13px}
        .b:hover{background:var(--primary-color);color:#fff}
        .x{padding:4px 8px;border:none;background:transparent;color:var(--error-color,#f44);cursor:pointer;font-size:18px;line-height:1}
        .presets-info{background:var(--secondary-background-color,#f5f5f5);border-radius:8px;padding:10px 14px;margin-top:6px;font-size:12px;color:var(--secondary-text-color);line-height:1.5}
        .dp-grid{display:grid;grid-template-columns:auto 1fr;gap:6px 10px;align-items:center;margin-top:8px}
        .dp-grid label{font-size:13px;font-weight:400;margin-bottom:0}
        .dp-grid select{padding:6px 8px;font-size:13px;border-radius:6px;border:1px solid var(--divider-color,#e0e0e0);background:var(--card-background-color,#fff);color:var(--primary-text-color);font-family:inherit}
        .sub-section{background:var(--secondary-background-color,#f5f5f5);border-radius:8px;padding:12px 14px;margin-top:8px}
        .sub-section .r{margin-bottom:10px}
        .sub-section .r:last-child{margin-bottom:0}
        .idle-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px}
        .idle-grid .r{margin-bottom:0}
      </style>
      <div class="e">
        <div class="st">General</div>
        <div class="r"><label>Entity</label><div id="ep-wrap"></div><div class="h">Weather entity recommended. Leave empty for auto-detection.</div></div>
        <div class="r"><label>Preset</label><select id="ps">${opts}</select>
          <div class="presets-info">
            <b>Weather</b> \u2014 Relaxed sky gradients with gentle rain, snow, stars<br>
            <b>Night Sky</b> \u2014 Always dark deep-space look, twinkling stars on every state<br>
            <b>Aurora</b> \u2014 Northern lights teal/green/purple, dreamy<br>
            <b>Ocean</b> \u2014 Calm water blues and teals<br>
            <b>Sunset</b> \u2014 Warm amber, orange, pink earth tones<br>
            <b>Classic</b> \u2014 Original cinemagraph videos from Flixel (uses internet)
          </div>
        </div>
        <div class="r"><label>Per-Device Presets</label>
          <div class="r tg" style="margin-bottom:8px"><label>Override preset per device type</label><input type="checkbox" id="dp-en"${Object.keys(c.device_presets||{}).length>0?' checked':''}></div>
          <div id="dp-wrap" style="display:${Object.keys(c.device_presets||{}).length>0?'block':'none'}">
            <div class="dp-grid">
              <label>\uD83D\uDCF1 Mobile (\u2264600px)</label><select id="dp-mobile">${this._presetOpts(c.device_presets?.mobile||'')}</select>
              <label>\uD83D\uDCCA Tablet (\u22641024px)</label><select id="dp-tablet">${this._presetOpts(c.device_presets?.tablet||'')}</select>
              <label>\uD83D\uDDA5\uFE0F Desktop (&gt;1024px)</label><select id="dp-desktop">${this._presetOpts(c.device_presets?.desktop||'')}</select>
            </div>
            <div class="h">When set, the device-specific preset overrides the main preset above. Leave on \u201CUse main preset\u201D to fall back to the main preset. Current device: <b>${_detectDeviceType()}</b>.</div>
          </div>
        </div>
        <div class="r"><label>Default Background URL</label><input type="text" id="du" value="${this._esc(c.default_url)}" placeholder="/local/videos/background.mp4"/><div class="h">Fallback video/image URL (.mp4, .webm, images).</div></div>
        <div class="st">Appearance</div>
        <div class="r sl"><label>Transition</label><input type="range" id="td" min="0.5" max="5" step="0.1" value="${c.transition_duration}"/><span class="sv" id="tv">${c.transition_duration}s</span></div>
        <div class="r sl"><label>Card Opacity</label><input type="range" id="co" min="0.3" max="1.0" step="0.02" value="${c.card_opacity}"/><span class="sv" id="ov">${Math.round(c.card_opacity*100)}%</span></div>
        <div class="r"><label>Overlay Color</label><input type="text" id="ol" value="${this._esc(c.overlay)}" placeholder="rgba(0,0,0,0.15)"/><div class="h">CSS color for readability overlay. 'none' to disable.</div></div>
        <div class="r tg"><label>Particle Effects</label><input type="checkbox" id="pa"${c.particles?' checked':''}></div>
        <div class="r tg"><label>Static Gradient (no animation)</label><input type="checkbox" id="sg"${c.static_gradient?' checked':''}></div>
        <div class="h" style="margin-top:-12px;margin-bottom:12px">Keep background gradient static while particles still animate.</div>
        <div class="r tg"><label>Transparent Header</label><input type="checkbox" id="th"${c.transparent_header!==false?' checked':''}></div>
        <div class="r tg"><label>Show Status Card</label><input type="checkbox" id="sc"${c.show_card!==false?' checked':''}></div>
        <div class="st">Blur</div>
        <div class="r sl"><label>Background Blur</label><input type="range" id="bl" min="0" max="30" step="1" value="${c.blur||0}"/><span class="sv" id="blv">${c.blur||0}px</span></div>
        <div class="h" style="margin-top:-12px;margin-bottom:16px">Apply a constant blur to the background. 0 = no blur.</div>
        <div class="r tg"><label>Idle Blur (Screensaver)</label><input type="checkbox" id="ib"${c.idle_blur?' checked':''}></div>
        <div class="sub-section" id="idle-wrap" style="display:${c.idle_blur?'block':'none'}">
          <div class="h" style="margin-top:0;margin-bottom:10px">After a period of inactivity, the background blurs and dims. Interaction instantly restores it.</div>
          <div class="idle-grid">
            <div class="r sl"><label>Timeout</label><input type="range" id="it" min="5" max="300" step="5" value="${c.idle_timeout||60}"/><span class="sv" id="itv">${c.idle_timeout||60}s</span></div>
            <div class="r sl"><label>Blur Strength</label><input type="range" id="ibs" min="1" max="30" step="1" value="${c.idle_blur_strength||8}"/><span class="sv" id="ibsv">${c.idle_blur_strength||8}px</span></div>
            <div class="r sl"><label>Dim Amount</label><input type="range" id="idm" min="0" max="0.8" step="0.05" value="${c.idle_dim||0.3}"/><span class="sv" id="idmv">${Math.round((c.idle_dim||0.3)*100)}%</span></div>
          </div>
        </div>
        <div class="st">Custom State Backgrounds</div>
        <div id="su"></div>
        <button class="b" id="as">+ Add State</button>
        <div class="h" style="margin-top:8px">Map entity states to custom video/image URLs. Overrides preset for that state.</div>
      </div>`;
    this._bind();
  }

  _updateValues() {
    const sr = this.shadowRoot;
    const c = this._config;
    const pk = sr.querySelector('ha-entity-picker');
    if (pk && pk.value !== (c.entity || '')) pk.value = c.entity || '';
    const ps = sr.getElementById('ps');
    if (ps && ps.value !== c.preset) ps.value = c.preset;
    const du = sr.getElementById('du');
    if (du && du.value !== (c.default_url || '')) du.value = c.default_url || '';
    const td = sr.getElementById('td');
    if (td) { td.value = c.transition_duration; sr.getElementById('tv').textContent = c.transition_duration + 's'; }
    const co = sr.getElementById('co');
    if (co) { co.value = c.card_opacity; sr.getElementById('ov').textContent = Math.round(c.card_opacity * 100) + '%'; }
    const ol = sr.getElementById('ol');
    if (ol && ol.value !== (c.overlay || '')) ol.value = c.overlay || '';
    sr.getElementById('pa').checked = !!c.particles;
    sr.getElementById('sg').checked = !!c.static_gradient;
    sr.getElementById('th').checked = c.transparent_header !== false;
    sr.getElementById('sc').checked = c.show_card !== false;
    // Blur
    const bl = sr.getElementById('bl');
    if (bl) { bl.value = c.blur || 0; sr.getElementById('blv').textContent = (c.blur || 0) + 'px'; }
    sr.getElementById('ib').checked = !!c.idle_blur;
    sr.getElementById('idle-wrap').style.display = c.idle_blur ? 'block' : 'none';
    const it = sr.getElementById('it');
    if (it) { it.value = c.idle_timeout || 60; sr.getElementById('itv').textContent = (c.idle_timeout || 60) + 's'; }
    const ibs = sr.getElementById('ibs');
    if (ibs) { ibs.value = c.idle_blur_strength || 8; sr.getElementById('ibsv').textContent = (c.idle_blur_strength || 8) + 'px'; }
    const idm = sr.getElementById('idm');
    if (idm) { idm.value = c.idle_dim || 0.3; sr.getElementById('idmv').textContent = Math.round((c.idle_dim || 0.3) * 100) + '%'; }
    // Device presets
    const dpEn = sr.getElementById('dp-en');
    const hasDP = Object.keys(c.device_presets || {}).length > 0;
    dpEn.checked = hasDP;
    sr.getElementById('dp-wrap').style.display = hasDP ? 'block' : 'none';
    if (hasDP) {
      const dpm = sr.getElementById('dp-mobile'); if (dpm) dpm.value = c.device_presets?.mobile || '';
      const dpt = sr.getElementById('dp-tablet'); if (dpt) dpt.value = c.device_presets?.tablet || '';
      const dpd = sr.getElementById('dp-desktop'); if (dpd) dpd.value = c.device_presets?.desktop || '';
    }
    this._renderStates();
  }

  _esc(s) { return (s || '').replace(/"/g, '&quot;'); }

  _presetOpts(selected) {
    const options = [
      { value: '', label: 'Use main preset' },
      { value: 'weather', label: '\u2600\uFE0F Weather' },
      { value: 'night-sky', label: '\uD83C\uDF0C Night Sky' },
      { value: 'aurora', label: '\uD83C\uDF0C Aurora' },
      { value: 'ocean', label: '\uD83C\uDF0A Ocean' },
      { value: 'sunset', label: '\uD83C\uDF05 Sunset' },
      { value: 'classic', label: '\uD83C\uDFAC Classic' },
      { value: 'none', label: 'None' },
    ];
    return options.map(o => `<option value="${o.value}"${selected===o.value?' selected':''}>${o.label}</option>`).join('');
  }

  _bind() {
    const sr = this.shadowRoot;
    const epWrap = sr.getElementById('ep-wrap');
    if (epWrap) {
      const pk = document.createElement('ha-entity-picker');
      pk.allowCustomEntity = true;
      pk.hass = this._hass;
      pk.value = this._config.entity || '';
      pk.addEventListener('value-changed', e => {
        e.stopPropagation();
        this._set('entity', e.detail.value || '');
      });
      epWrap.appendChild(pk);
    }
    sr.getElementById('ps').addEventListener('change', e => { this._set('preset', e.target.value); });
    sr.getElementById('du').addEventListener('change', e => this._set('default_url', e.target.value));
    const td = sr.getElementById('td');
    td.addEventListener('input', e => { sr.getElementById('tv').textContent = e.target.value+'s'; this._set('transition_duration', parseFloat(e.target.value)); });
    const co = sr.getElementById('co');
    co.addEventListener('input', e => { sr.getElementById('ov').textContent = Math.round(e.target.value*100)+'%'; this._set('card_opacity', parseFloat(e.target.value)); });
    sr.getElementById('ol').addEventListener('change', e => this._set('overlay', e.target.value));
    sr.getElementById('pa').addEventListener('change', e => this._set('particles', e.target.checked));
    sr.getElementById('sg').addEventListener('change', e => this._set('static_gradient', e.target.checked));
    sr.getElementById('th').addEventListener('change', e => this._set('transparent_header', e.target.checked));
    sr.getElementById('sc').addEventListener('change', e => this._set('show_card', e.target.checked));
    // Blur
    const bl = sr.getElementById('bl');
    bl.addEventListener('input', e => { sr.getElementById('blv').textContent = e.target.value + 'px'; this._set('blur', parseInt(e.target.value)); });
    sr.getElementById('ib').addEventListener('change', e => {
      this._set('idle_blur', e.target.checked);
      sr.getElementById('idle-wrap').style.display = e.target.checked ? 'block' : 'none';
    });
    const it = sr.getElementById('it');
    it.addEventListener('input', e => { sr.getElementById('itv').textContent = e.target.value + 's'; this._set('idle_timeout', parseInt(e.target.value)); });
    const ibs = sr.getElementById('ibs');
    ibs.addEventListener('input', e => { sr.getElementById('ibsv').textContent = e.target.value + 'px'; this._set('idle_blur_strength', parseInt(e.target.value)); });
    const idm = sr.getElementById('idm');
    idm.addEventListener('input', e => { sr.getElementById('idmv').textContent = Math.round(e.target.value * 100) + '%'; this._set('idle_dim', parseFloat(e.target.value)); });
    // Device presets
    const dpEn = sr.getElementById('dp-en');
    dpEn.addEventListener('change', e => {
      if (e.target.checked) {
        this._set('device_presets', { mobile: '', tablet: '', desktop: '' });
      } else {
        this._set('device_presets', {});
      }
      sr.getElementById('dp-wrap').style.display = e.target.checked ? 'block' : 'none';
    });
    ['mobile', 'tablet', 'desktop'].forEach(dev => {
      sr.getElementById('dp-' + dev).addEventListener('change', e => {
        const dp = { ...(this._config.device_presets || {}) };
        if (e.target.value) dp[dev] = e.target.value; else delete dp[dev];
        this._set('device_presets', dp);
      });
    });
    this._renderStates();
    sr.getElementById('as').addEventListener('click', () => { this._config.state_url = { ...this._config.state_url, '': '' }; this._renderStates(); });
  }

  _renderStates() {
    const box = this.shadowRoot.getElementById('su');
    box.innerHTML = '';
    Object.entries(this._config.state_url || {}).forEach(([st, url], i) => {
      const r = document.createElement('div'); r.className = 'sr';
      r.innerHTML = `<input type="text" placeholder="State" value="${this._esc(st)}" data-f="s" data-i="${i}"/><input type="text" placeholder="URL (comma = random)" value="${this._esc(Array.isArray(url)?url.join(', '):url)}" data-f="u" data-i="${i}"/><button class="x" data-i="${i}">&times;</button>`;
      box.appendChild(r);
    });
    box.querySelectorAll('input').forEach(inp => inp.addEventListener('change', e => this._stateEv(e)));
    box.querySelectorAll('.x').forEach(btn => btn.addEventListener('click', e => {
      const a = Object.entries(this._config.state_url||{}); a.splice(parseInt(e.target.dataset.i),1);
      this._config.state_url = Object.fromEntries(a); this._fire(); this._renderStates();
    }));
  }

  _stateEv(e) {
    const a = Object.entries(this._config.state_url||{});
    const i = parseInt(e.target.dataset.i);
    if (e.target.dataset.f === 's') { a[i] = [e.target.value, a[i][1]]; }
    else { let v = e.target.value; if (v.includes(',')) v = v.split(',').map(s=>s.trim()).filter(Boolean); a[i] = [a[i][0], v]; }
    this._config.state_url = Object.fromEntries(a); this._fire();
  }

  _set(k, v) { this._config = { ...this._config, [k]: v }; this._fire(); }

  _fire() {
    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config: { ...this._config } }, bubbles: true, composed: true,
    }));
  }
}

// ============================================================
// Register
// ============================================================

customElements.define(CARD_NAME, AnimatedBackground);
customElements.define(CARD_NAME + '-editor', AnimatedBackgroundEditor);
