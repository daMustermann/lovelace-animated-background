// ============================================================
// Animated Background for Home Assistant — v2.0.0
// by Maudersoft — Complete rebuild for modern HA (2024–2026+)
// https://github.com/daMustermann/lovelace-animated-background
// ============================================================

const CARD_VERSION = '2.0.0';
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
// Weather Presets — Sky-inspired animated gradients
// ============================================================

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

const NIGHT_GRADIENTS = {
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
  'rainy': 'rain',
  'pouring': 'heavy-rain',
  'lightning-rainy': 'rain',
  'snowy': 'snow',
  'snowy-rainy': 'snow',
  'hail': 'hail',
  'clear-night': 'stars',
};

const WEATHER_EMOJIS = {
  'sunny': '\u2600\uFE0F', 'clear-night': '\uD83C\uDF19', 'partlycloudy': '\u26C5',
  'cloudy': '\u2601\uFE0F', 'rainy': '\uD83C\uDF27\uFE0F', 'pouring': '\uD83C\uDF27\uFE0F',
  'lightning-rainy': '\u26C8\uFE0F', 'lightning': '\uD83C\uDF29\uFE0F', 'snowy': '\u2744\uFE0F',
  'snowy-rainy': '\uD83C\uDF28\uFE0F', 'fog': '\uD83C\uDF2B\uFE0F', 'hail': '\uD83C\uDF28\uFE0F',
  'windy': '\uD83D\uDCA8', 'windy-variant': '\uD83D\uDCA8', 'exceptional': '\u26A0\uFE0F',
};

// ============================================================
// CSS Keyframes (injected once into hui-root shadow)
// ============================================================

const AB_GLOBAL_STYLES = `
  @keyframes ab-gradient-shift {
    0%   { background-position: 50% 0%; }
    50%  { background-position: 50% 100%; }
    100% { background-position: 50% 0%; }
  }
  @keyframes ab-rain-fall {
    0%   { transform: translateY(-10vh); opacity: 0; }
    10%  { opacity: 1; }
    100% { transform: translateY(110vh); opacity: 0.3; }
  }
  @keyframes ab-snow-fall {
    0%   { transform: translateY(-5vh) translateX(0) rotate(0deg); opacity: 0; }
    10%  { opacity: 1; }
    100% { transform: translateY(105vh) translateX(80px) rotate(360deg); opacity: 0; }
  }
  @keyframes ab-twinkle {
    0%, 100% { opacity: 0.1; transform: scale(0.8); }
    50%      { opacity: 1; transform: scale(1.2); }
  }
  @keyframes ab-hail-fall {
    0%   { transform: translateY(-5vh); opacity: 0; }
    10%  { opacity: 0.9; }
    100% { transform: translateY(105vh); opacity: 0.1; }
  }
`;

// ============================================================
// Particle Generator (CSS-based, GPU-accelerated)
// ============================================================

function createParticles(type, container) {
  container.innerHTML = '';
  if (!type) return;

  const frag = document.createDocumentFragment();

  switch (type) {
    case 'rain':
      for (let i = 0; i < 80; i++) {
        const d = document.createElement('div');
        d.style.cssText = `position:absolute;left:${Math.random()*100}%;top:-5vh;width:2px;height:${15+Math.random()*25}px;background:linear-gradient(transparent,rgba(174,194,224,0.5));border-radius:0 0 2px 2px;animation:ab-rain-fall ${0.6+Math.random()*0.4}s linear ${Math.random()*2}s infinite;pointer-events:none;`;
        frag.appendChild(d);
      }
      break;

    case 'heavy-rain':
      for (let i = 0; i < 150; i++) {
        const d = document.createElement('div');
        d.style.cssText = `position:absolute;left:${Math.random()*100}%;top:-5vh;width:2px;height:${20+Math.random()*30}px;background:linear-gradient(transparent,rgba(174,194,224,0.6));border-radius:0 0 2px 2px;animation:ab-rain-fall ${0.4+Math.random()*0.3}s linear ${Math.random()*1.5}s infinite;pointer-events:none;`;
        frag.appendChild(d);
      }
      break;

    case 'snow':
      for (let i = 0; i < 50; i++) {
        const sz = 4 + Math.random() * 8;
        const d = document.createElement('div');
        d.style.cssText = `position:absolute;left:${Math.random()*100}%;top:-5vh;width:${sz}px;height:${sz}px;background:white;border-radius:50%;opacity:${0.4+Math.random()*0.6};animation:ab-snow-fall ${4+Math.random()*6}s linear ${Math.random()*5}s infinite;pointer-events:none;`;
        frag.appendChild(d);
      }
      break;

    case 'stars':
      for (let i = 0; i < 80; i++) {
        const sz = 1 + Math.random() * 3;
        const d = document.createElement('div');
        d.style.cssText = `position:absolute;left:${Math.random()*100}%;top:${Math.random()*100}%;width:${sz}px;height:${sz}px;background:white;border-radius:50%;animation:ab-twinkle ${2+Math.random()*4}s ease-in-out ${Math.random()*5}s infinite;pointer-events:none;`;
        frag.appendChild(d);
      }
      break;

    case 'hail':
      for (let i = 0; i < 40; i++) {
        const sz = 4 + Math.random() * 6;
        const d = document.createElement('div');
        d.style.cssText = `position:absolute;left:${Math.random()*100}%;top:-3vh;width:${sz}px;height:${sz}px;background:rgba(255,255,255,0.8);border-radius:50%;animation:ab-hail-fall ${0.5+Math.random()*0.4}s linear ${Math.random()*2}s infinite;pointer-events:none;`;
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
  const clean = url.split('?')[0].split('#')[0].toLowerCase();
  return clean.endsWith('.mp4') || clean.endsWith('.webm') || clean.endsWith('.ogg');
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
  }

  /* --- Lifecycle --- */

  setConfig(config) {
    if (!config) throw new Error('Invalid configuration');
    const oldEntity = this._config.entity;

    this._config = {
      entity:              config.entity || '',
      preset:              config.preset || 'none',
      default_url:         config.default_url || '',
      state_url:           config.state_url || {},
      transition_duration: config.transition_duration !== undefined ? config.transition_duration : 1.5,
      overlay:             config.overlay !== undefined ? config.overlay : 'rgba(0,0,0,0.15)',
      particles:           config.particles !== undefined ? config.particles : true,
      card_opacity:        config.card_opacity !== undefined ? config.card_opacity : 0.88,
      show_card:           config.show_card !== undefined ? config.show_card : true,
      transparent_header:  config.transparent_header !== undefined ? config.transparent_header : true,
      debug:               config.debug || false,
    };

    this._renderCard();

    if (this._connected && oldEntity !== this._config.entity) {
      this._prevState = null;
      this._prevUrl = null;
      this._prevParticles = null;
      this._setupBackground();
    }
  }

  set hass(hass) {
    const entity  = this._getEntity();
    const oldSt   = this._hass?.states?.[entity]?.state;
    const newSt   = hass?.states?.[entity]?.state;
    const oldSun  = this._hass?.states?.['sun.sun']?.state;
    const newSun  = hass?.states?.['sun.sun']?.state;

    this._hass = hass;

    const changed = oldSt !== newSt;
    const sunFlip = oldSun !== newSun && this._config.preset === 'weather';

    if (this._connected && (changed || sunFlip)) {
      if (sunFlip) this._prevUrl = null;
      this._updateBackground();
    }
    this._updateCardDisplay();
  }

  getCardSize() { return this._config.show_card ? 1 : 0; }

  connectedCallback()    { this._connected = true;  this._retries = 0; this._setupBackground(); }
  disconnectedCallback() { this._connected = false; this._cleanup(); }

  /* --- Helpers --- */

  _getEntity() {
    if (this._config.entity) return this._config.entity;
    if (this._config.preset === 'weather' && this._hass)
      return Object.keys(this._hass.states).find(e => e.startsWith('weather.')) || null;
    return null;
  }

  _isNight() {
    const sun = this._hass?.states['sun.sun'];
    return sun ? sun.state === 'below_horizon' : false;
  }

  _gradientFor(state) {
    if (state === 'sunny' && this._isNight()) return WEATHER_GRADIENTS['clear-night'];
    if (this._isNight() && NIGHT_GRADIENTS[state]) return NIGHT_GRADIENTS[state];
    return WEATHER_GRADIENTS[state] || null;
  }

  /* --- Find hui-root (robust: shadow chain + fallback) --- */

  _findHuiRoot() {
    // Walk up from card
    let el = this;
    for (let i = 0; i < 20; i++) {
      if (!el) break;
      const r = el.getRootNode();
      if (r === document || r === el) break;
      el = r.host;
      if (!el) break;
      if (el.localName === 'hui-root') return el;
    }
    // Fallback — manual traversal
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

    // Observer for dynamic view children
    if (this._viewObs) this._viewObs.disconnect();
    this._viewObs = new MutationObserver(() => {
      for (const c of view.children) if (c.style) c.style.background = 'transparent';
    });
    this._viewObs.observe(view, { childList: true });

    // Short-term race-condition fix
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
    let url       = null;
    let gradient  = null;
    let particles = null;

    // 1. Custom state_url
    if (state && this._config.state_url?.[state]) {
      const v = this._config.state_url[state];
      if (v === 'none') { this._bgContainer.style.display = 'none'; return; }
      url = randomFrom(v);
    }
    // 2. Weather preset
    else if (this._config.preset === 'weather' && state) {
      gradient = this._gradientFor(state);
      if (this._config.particles) {
        particles = WEATHER_PARTICLE_MAP[state] || null;
        if (night && !particles && state !== 'fog') particles = 'stars';
      }
    }
    // 3. default_url
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

    if (this._config.debug) console.log('Animated Background:', { state, url, gradient, particles });
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

    if (isVideoUrl(url)) {
      const v = document.createElement('video');
      v.autoplay = true; v.loop = true; v.muted = true; v.playsInline = true;
      v.setAttribute('playsinline', '');
      const src = document.createElement('source');
      src.src = url; src.type = getVideoType(url);
      v.appendChild(src);
      next.appendChild(v);
      v.addEventListener('canplay', () => { v.play().catch(() => {}); swap(); }, { once: true });
      v.addEventListener('error', () => console.warn('Animated Background: video load failed', url), { once: true });
    } else {
      const img = document.createElement('img');
      img.src = url; img.alt = '';
      next.appendChild(img);
      img.addEventListener('load', swap, { once: true });
      img.addEventListener('error', () => console.warn('Animated Background: image load failed', url), { once: true });
    }
  }

  _toGradient(g) {
    const next = this._currentLayer === 'a' ? this._layerB : this._layerA;
    const curr = this._currentLayer === 'a' ? this._layerA : this._layerB;
    next.innerHTML = '';
    next.style.background     = g;
    next.style.backgroundSize = '100% 200%';
    next.style.animation      = 'ab-gradient-shift 12s ease infinite';
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
      lo.style.opacity = '0.7';
      setTimeout(() => lo.style.opacity = '0', 100);
      setTimeout(() => lo.style.opacity = '0.3', 200);
      setTimeout(() => lo.style.opacity = '0', 300);
    };
    flash();
    this._flashTimer = setInterval(flash, 4000 + Math.random() * 6000);
  }

  /* --- Card Display --- */

  _renderCard() {
    if (!this._config.show_card) {
      this.shadowRoot.innerHTML = '<div style="display:none"></div>';
      return;
    }
    this.shadowRoot.innerHTML = `
      <style>
        :host{display:block}
        ha-card{overflow:hidden;background:rgba(var(--rgb-card-background-color,255,255,255),.6)!important;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
        .c{display:flex;align-items:center;padding:12px 16px;gap:12px}
        .p{width:40px;height:40px;border-radius:10px;flex-shrink:0;background-size:100% 200%;animation:g 6s ease infinite;box-shadow:0 2px 8px rgba(0,0,0,.15)}
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
    if (state) {
      const em = WEATHER_EMOJIS[state] || '\uD83C\uDFAC';
      sd.textContent = `${em} ${state.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}`;
      const g = this._gradientFor(state);
      if (g) { pv.style.background = g; pv.style.backgroundSize = '100% 200%'; }
    } else if (this._config.default_url) {
      sd.textContent = '\uD83C\uDFAC Custom Background';
    } else {
      sd.textContent = '\u23F8\uFE0F No entity configured';
    }
  }

  /* --- Cleanup --- */

  _cleanup() {
    const sr = this._huiRoot?.shadowRoot;
    if (sr) ['ab-container','ab-mstyles','ab-gstyles','ab-trans','ab-opac','ab-hdr'].forEach(id => sr.getElementById(id)?.remove());
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
  }

  set hass(h) {
    this._hass = h;
    const p = this.shadowRoot?.querySelector('ha-entity-picker');
    if (p) p.hass = h;
  }

  setConfig(config) {
    this._config = Object.assign({
      entity: '', preset: 'none', default_url: '', state_url: {},
      transition_duration: 1.5, overlay: 'rgba(0,0,0,0.15)',
      particles: true, card_opacity: 0.88, show_card: true,
      transparent_header: true, debug: false,
    }, config);
    this._render();
  }

  _render() {
    const c = this._config;
    this.shadowRoot.innerHTML = `
      <style>
        .e{padding:16px}.r{margin-bottom:16px}
        .r label{display:block;font-weight:500;margin-bottom:6px;font-size:14px;color:var(--primary-text-color)}
        .h{font-size:12px;color:var(--secondary-text-color);margin-top:4px}
        ha-entity-picker{display:block;width:100%}
        select,input[type="text"]{width:100%;padding:10px 12px;border:1px solid var(--divider-color,#e0e0e0);border-radius:8px;background:var(--card-background-color,#fff);color:var(--primary-text-color,#333);font-size:14px;box-sizing:border-box;font-family:inherit}
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
      </style>
      <div class="e">
        <div class="st">General</div>
        <div class="r"><label>Entity</label><ha-entity-picker allow-custom-entity></ha-entity-picker><div class="h">Weather entity recommended. Leave empty for auto-detection.</div></div>
        <div class="r"><label>Preset</label><select id="ps"><option value="none"${c.preset==='none'?' selected':''}>None (custom only)</option><option value="weather"${c.preset==='weather'?' selected':''}>Weather (auto gradients + particles)</option></select><div class="h">Weather preset provides beautiful animated gradients &amp; particles for every weather state.</div></div>
        <div class="r"><label>Default Background URL</label><input type="text" id="du" value="${this._esc(c.default_url)}" placeholder="/local/videos/background.mp4"/><div class="h">Fallback video/image URL (.mp4, .webm, images).</div></div>
        <div class="st">Appearance</div>
        <div class="r sl"><label>Transition</label><input type="range" id="td" min="0.3" max="5" step="0.1" value="${c.transition_duration}"/><span class="sv" id="tv">${c.transition_duration}s</span></div>
        <div class="r sl"><label>Card Opacity</label><input type="range" id="co" min="0.3" max="1.0" step="0.02" value="${c.card_opacity}"/><span class="sv" id="ov">${Math.round(c.card_opacity*100)}%</span></div>
        <div class="r"><label>Overlay Color</label><input type="text" id="ol" value="${this._esc(c.overlay)}" placeholder="rgba(0,0,0,0.15)"/><div class="h">CSS color for readability overlay. 'none' to disable.</div></div>
        <div class="r tg"><label>Particle Effects</label><input type="checkbox" id="pa"${c.particles?' checked':''}></div>
        <div class="r tg"><label>Transparent Header</label><input type="checkbox" id="th"${c.transparent_header!==false?' checked':''}></div>
        <div class="r tg"><label>Show Status Card</label><input type="checkbox" id="sc"${c.show_card!==false?' checked':''}></div>
        <div class="st">Custom State Backgrounds</div>
        <div id="su"></div>
        <button class="b" id="as">+ Add State</button>
        <div class="h" style="margin-top:8px">Map entity states to custom video/image URLs. Overrides preset gradients.</div>
      </div>`;
    this._bind();
  }

  _esc(s) { return (s || '').replace(/"/g, '&quot;'); }

  _bind() {
    const sr = this.shadowRoot;
    const pk = sr.querySelector('ha-entity-picker');
    if (pk) { pk.hass = this._hass; pk.value = this._config.entity || ''; pk.addEventListener('value-changed', e => this._set('entity', e.detail.value || '')); }
    sr.getElementById('ps').addEventListener('change', e => this._set('preset', e.target.value));
    sr.getElementById('du').addEventListener('change', e => this._set('default_url', e.target.value));
    const td = sr.getElementById('td');
    td.addEventListener('input', e => { sr.getElementById('tv').textContent = e.target.value+'s'; this._set('transition_duration', parseFloat(e.target.value)); });
    const co = sr.getElementById('co');
    co.addEventListener('input', e => { sr.getElementById('ov').textContent = Math.round(e.target.value*100)+'%'; this._set('card_opacity', parseFloat(e.target.value)); });
    sr.getElementById('ol').addEventListener('change', e => this._set('overlay', e.target.value));
    sr.getElementById('pa').addEventListener('change', e => this._set('particles', e.target.checked));
    sr.getElementById('th').addEventListener('change', e => this._set('transparent_header', e.target.checked));
    sr.getElementById('sc').addEventListener('change', e => this._set('show_card', e.target.checked));
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
