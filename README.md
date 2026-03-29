# Animated Background for Home Assistant

> by **Maudersoft** — forked & rebuilt from the original by Villhellm & TRusselo

Beautiful, dynamic animated backgrounds for your Home Assistant dashboards. Works out of the box with weather entities — or bring your own videos and images.

**v2.0.0** — Complete rebuild for modern Home Assistant (2024–2026+).

![animated-background-preview](https://raw.githubusercontent.com/Villhellm/README_images/master/Animation.gif)

---

## ✨ Features

- **Weather Preset** — Animated sky gradients for all 15 weather states, zero config needed
- **Day/Night Aware** — Automatically adjusts colors based on `sun.sun` entity
- **Particle Effects** — Rain, snow, twinkling stars, hail (GPU-accelerated CSS)
- **Lightning Flashes** — Realistic random flashes during thunderstorms
- **Smooth Crossfade** — Seamless transitions when weather/state changes
- **Video & Image Support** — Use .mp4, .webm, or any image as background
- **Visual Editor** — Configure everything through the HA card editor UI
- **Transparent Header** — Frosted-glass effect on the toolbar
- **Adjustable Card Opacity** — Control how translucent your dashboard cards appear
- **Per-View Backgrounds** — Add the card to any view for view-specific backgrounds
- **HACS Compatible** — Install as custom repository

---

## 🚀 Quick Start (3 Steps)

### 1. Install via HACS (Custom Repository)

This card is not in the default HACS store — add it as a **custom repository**:

1. Open **HACS** in your Home Assistant sidebar
2. Click the **⋮** menu (top right) → **Custom repositories**
3. Add this URL:
   ```
   https://github.com/daMustermann/lovelace-animated-background
   ```
4. Category: **Dashboard**
5. Click **Add** → find **"Animated Background"** in HACS → **Download**
6. **Restart Home Assistant** (or reload resources)

[![Open HACS Repository](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=daMustermann&repository=lovelace-animated-background&category=dashboard)

### Manual Install

1. Download `animated-background.js` from the [`dist/`](dist/) folder
2. Copy to `<config>/www/animated-background.js`
3. Go to **Settings → Dashboards → Resources** → Add resource:
   - URL: `/local/animated-background.js`
   - Type: **JavaScript Module**

### 2. Add the Card

1. Open your dashboard → **Edit** → **Add Card**
2. Search for **"Animated Background"**
3. It auto-detects your weather entity and uses the Weather preset

### 3. Enjoy

Your dashboard now has a beautiful animated background that changes with the weather. ☀️🌧️❄️🌙

---

## ⚙️ Configuration

All options can be set via the **visual editor** (click the card → edit). You can also use YAML:

```yaml
type: custom:animated-background
entity: weather.home       # Entity to track (auto-detected if empty)
preset: weather            # 'weather' or 'none'
```

### Full Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `entity` | string | *(auto-detected)* | Entity whose state drives the background. Weather entities recommended. |
| `preset` | string | `none` | `weather` for built-in animated gradients + particles, `none` for custom only. |
| `default_url` | string/list | `''` | Fallback background URL. Supports `.mp4`, `.webm`, images. Use a list for random selection. |
| `state_url` | map | `{}` | Map of entity states to background URLs. Overrides preset gradients. |
| `transition_duration` | number | `1.5` | Crossfade duration in seconds (0.3–5). |
| `overlay` | string | `rgba(0,0,0,0.15)` | CSS color for readability overlay. Set to `none` to disable. |
| `particles` | boolean | `true` | Enable weather-appropriate particle effects (rain, snow, stars, hail). |
| `card_opacity` | number | `0.88` | Opacity of dashboard cards (0.3–1.0). Lower = more background visible. |
| `show_card` | boolean | `true` | Show the small status indicator card. Set `false` to hide. |
| `transparent_header` | boolean | `true` | Make the toolbar translucent with frosted-glass effect. |
| `debug` | boolean | `false` | Enable verbose console logging. |

---

## 🌦️ Weather Preset

When `preset: weather` is set, the card automatically creates beautiful animated gradients for all standard Home Assistant weather states:

| State | Day | Night |
|-------|-----|-------|
| ☀️ Sunny | Bright blue sky | → switches to Clear Night |
| 🌙 Clear Night | — | Deep navy with twinkling stars |
| ⛅ Partly Cloudy | Blue-grey gradient | Dark navy-grey |
| ☁️ Cloudy | Grey gradient | Darker grey |
| 🌧️ Rainy | Dark blue-grey + rain drops | Even darker + rain |
| 🌧️ Pouring | Very dark + heavy rain | Deepest dark + heavy rain |
| ⛈️ Lightning Rainy | Dark + rain + lightning flashes | Same + lightning |
| 🌩️ Lightning | Dark + lightning flashes | Same |
| ❄️ Snowy | Cool grey-white + snowflakes | Blue-purple + snow |
| 🌨️ Snowy Rainy | Grey + snowflakes | Same |
| 🌨️ Hail | Grey + hail particles | Same |
| 🌫️ Fog | Soft grey gradient | Dark grey |
| 💨 Windy | Blue sky gradient | Dark blue |
| ⚠️ Exceptional | Dramatic red gradient | Same |

All gradients slowly animate for a living, breathing feel. Night detection uses `sun.sun` automatically.

---

## 🎥 Custom Video Backgrounds

You can use your own videos or images for any entity state:

```yaml
type: custom:animated-background
entity: weather.home
preset: weather
state_url:
  sunny:
    - /local/videos/sunny1.mp4
    - /local/videos/sunny2.mp4
  rainy: /local/videos/rain.mp4
  clear-night: /local/videos/night-sky.mp4
```

**Tips:**
- Store videos locally in your `www/` folder for the fastest loading
- Use short looping videos (cinemagraphs) — 3–10 seconds is ideal
- MP4 with H.264 encoding works best across all browsers
- When multiple URLs are listed, one is chosen randomly on each state change
- Set a state to `none` to disable background for that state
- `state_url` entries override preset gradients for that specific state

### Using Any Entity

You can use **any** entity, not just weather:

```yaml
type: custom:animated-background
entity: light.living_room
state_url:
  'on': /local/videos/warm-glow.mp4
  'off': /local/videos/moonlight.mp4
default_url: /local/videos/default.mp4
```

### Combining Multiple Entities with Template Sensors

Create a template sensor to combine multiple entity states:

```yaml
# configuration.yaml
template:
  - sensor:
      - name: "Background State"
        state: "{{ states('sun.sun') }}-{{ states('switch.fireplace') }}"
```

```yaml
# Dashboard card
type: custom:animated-background
entity: sensor.background_state
state_url:
  above_horizon-on: /local/videos/day-fireplace.mp4
  above_horizon-off: /local/videos/day-calm.mp4
  below_horizon-on: /local/videos/night-fireplace.mp4
  below_horizon-off: /local/videos/night-calm.mp4
```

---

## 🖼️ Multiple Views

Add the card to each view where you want a background. Each view can have its own configuration:

- **Living Room view**: `entity: weather.home`, `preset: weather`
- **Gaming view**: `entity: light.game_room`, custom videos
- **Security view**: no animated-background card = normal HA background

---

## 📱 Mobile Considerations

- Video backgrounds may use significant mobile data — consider using the weather preset (CSS gradients, zero data) on mobile
- Particle effects are GPU-accelerated and perform well on modern devices
- Set `particles: false` if you notice performance issues on older devices
- Use Home Assistant's conditional cards to show/hide the background card per device

---

## 🔄 Migrating from v1.x (original plugin)

v2.0 is a complete rebuild. The old `animated_background:` root YAML configuration is **no longer used**. Migration:

1. Remove the old `animated_background:` block from your Lovelace raw config
2. Remove the old resource and add this one instead
3. Add `type: custom:animated-background` as a **card** on each view
4. Move your `entity`, `state_url`, and `default_url` into the card config
5. The weather preset replaces the need for external video URLs (but you can still use them)

**Before (v1):**
```yaml
# Root of lovelace config
animated_background:
  entity: weather.home
  state_url:
    sunny: https://example.com/sunny.mp4
```

**After (v2):**
```yaml
# As a card in any view
type: custom:animated-background
entity: weather.home
preset: weather
state_url:
  sunny: /local/videos/sunny.mp4  # optional — preset handles this automatically
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Background not showing | Check browser console for errors. Enable `debug: true`. |
| Background visible but cards are missing | Increase `card_opacity` toward 1.0. |
| Background flickers on view change | This is normal — the card disconnects/reconnects. Increase `transition_duration`. |
| Resource not found (404) | Ensure the resource URL is correct: `/local/animated-background.js` for manual install, or `/hacsfiles/lovelace-animated-background/animated-background.js` for HACS. |
| Editor not showing | Clear browser cache (Ctrl+Shift+R). Ensure the resource type is "JavaScript Module". |

---

## ❤️ Credits

- Originally created by **Villhellm** (R.I.P.) — thank you for the inspiration
- Previously maintained by **TRusselo** and **dreimer1986**
- Rebuilt & maintained by **Maudersoft** ([daMustermann](https://github.com/daMustermann))
- Inspired by [VideoBackground-Card](https://github.com/Perdemot/Lovelace-Cards/tree/master/VideoBackground-Card) and [Custom Header](https://github.com/maykar/custom-header)

---

## License

MIT
