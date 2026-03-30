# Animated Background for Home Assistant

> by **Maudersoft** — forked & rebuilt from the original by Villhellm & TRusselo

Beautiful, dynamic animated backgrounds for your Home Assistant dashboards. Works out of the box with weather entities — or bring your own videos and images.

**v2.2.0** — Complete rebuild for modern Home Assistant (2024–2026+).

![animated-background-preview](https://raw.githubusercontent.com/Villhellm/README_images/master/Animation.gif)

---

## ✨ Features

- **6 Built-in Presets** — Weather, Night Sky, Aurora, Ocean, Sunset, Classic Videos
- **Relaxed Animations** — Slow, gentle particles and gradient shifts — designed for all-day use
- **Day/Night Aware** — Automatically adjusts colors based on `sun.sun` entity
- **Particle Effects** — Rain, snow, twinkling stars, hail (GPU-accelerated CSS)
- **Lightning Flashes** — Realistic random flashes during thunderstorms
- **Smooth Crossfade** — Seamless transitions when weather/state changes
- **Video & Image Support** — Use .mp4, .webm, or any image as background
- **Classic Cinemagraph Videos** — Original Flixel video collection as a one-click preset
- **Visual Editor** — Configure everything through the HA card editor UI
- **Transparent Header** — Frosted-glass effect on the toolbar
- **Adjustable Card Opacity** — Control how translucent your dashboard cards appear
- **Per-Device Presets** — Different presets for mobile, tablet, and desktop
- **Background Blur** — Configurable constant blur effect
- **Idle Screensaver** — Auto blur & dim after inactivity, restores on touch/mouse
- **Static Gradient Mode** — Keep gradient fixed while particles still animate
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
preset: weather            # weather / night-sky / aurora / ocean / sunset / classic / none
```

### Full Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `entity` | string | *(auto-detected)* | Entity whose state drives the background. Weather entities recommended. |
| `preset` | string | `none` | `weather`, `night-sky`, `aurora`, `ocean`, `sunset`, `classic`, or `none`. See presets below. |
| `device_presets` | map | `{}` | Override preset per device type. Keys: `mobile`, `tablet`, `desktop`. |
| `default_url` | string/list | `''` | Fallback background URL. Supports `.mp4`, `.webm`, images. Use a list for random selection. |
| `state_url` | map | `{}` | Map of entity states to background URLs. Overrides preset gradients. |
| `transition_duration` | number | `1.5` | Crossfade duration in seconds (0.3–5). |
| `overlay` | string | `rgba(0,0,0,0.15)` | CSS color for readability overlay. Set to `none` to disable. |
| `particles` | boolean | `true` | Enable weather-appropriate particle effects (rain, snow, stars, hail). |
| `static_gradient` | boolean | `false` | Keep gradient background static (no animation) while particles still move. |
| `card_opacity` | number | `0.88` | Opacity of dashboard cards (0.3–1.0). Lower = more background visible. |
| `show_card` | boolean | `true` | Show the small status indicator card. Set `false` to hide. |
| `transparent_header` | boolean | `true` | Make the toolbar translucent with frosted-glass effect. |
| `blur` | number | `0` | Constant background blur in pixels (0–30). |
| `idle_blur` | boolean | `false` | Enable idle screensaver (blur + dim after inactivity). |
| `idle_timeout` | number | `60` | Seconds of inactivity before screensaver activates (5–300). |
| `idle_blur_strength` | number | `8` | Blur strength in pixels when idle (1–30). |
| `idle_dim` | number | `0.3` | Dim amount when idle (0–0.8). Higher = darker. |
| `debug` | boolean | `false` | Enable verbose console logging. |

---

## � Presets

Choose a preset in the visual editor or set `preset:` in YAML. All presets respond to your weather entity's state and include day/night awareness.

### ☀️ `weather` — Sky Gradients + Gentle Particles

Relaxed sky gradients for all 15 weather states with gentle rain, snow, twinkling stars, and hail. Gradients shift slowly (~30s cycle). Night variants auto-activate via `sun.sun`.

```yaml
preset: weather
```

### 🌌 `night-sky` — Deep Space, Always Dark

Always-dark deep-space color palette — perfect for night owls or dark-themed dashboards. Stars are shown on every weather state, with rain/snow layered on top when appropriate. Gradients shift very slowly (~45s cycle).

```yaml
preset: night-sky
```

### 🌌 `aurora` — Northern Lights

Dreamy teal, green, and purple northern-lights gradients at a slight angle. Stars appear on clear nights; rain and snow still show when it counts. Gradient cycle ~40s.

```yaml
preset: aurora
```

### 🌊 `ocean` — Calming Water Tones

Deep blues, teals, and seafoam greens. A calming palette that works beautifully with both day and night. ~35s gradient cycle.

```yaml
preset: ocean
```

### 🌅 `sunset` — Warm Amber & Earth Tones

Warm amber, orange, pink, and earth tones during the day. Shifts to deep purple/navy at night. Perfect for cozy, inviting dashboards. ~35s gradient cycle.

```yaml
preset: sunset
```

### 🎬 `classic` — Original Cinemagraph Videos

The original Flixel cinemagraph videos from v1 — beautiful looping scene videos for each weather state, streamed from CDN. No CSS gradients, just real video.

```yaml
preset: classic
```

Includes videos for: sunny, partly cloudy, cloudy, clear night, fog, rainy, pouring, lightning, snowy, snowy-rainy.

### Weather State Support

All gradient-based presets support these weather states:

| State | Particles |
|-------|----------|
| ☀️ Sunny | — |
| 🌙 Clear Night | ✨ Stars |
| ⛅ Partly Cloudy | — |
| ☁️ Cloudy | — |
| 🌧️ Rainy | 🌧 Gentle rain |
| 🌧️ Pouring | 🌧 Heavy rain |
| ⛈️ Lightning Rainy | 🌧 Rain + ⚡ flashes |
| 🌩️ Lightning | ⚡ Flashes |
| ❄️ Snowy | ❄ Slow snowflakes |
| 🌨️ Snowy Rainy | ❄ Snowflakes |
| 🌨️ Hail | 🧊 Hail |
| 🌫️ Fog | — |
| 💨 Windy | — |
| ⚠️ Exceptional | — |

All animations are deliberately slow and relaxed — designed to run all day without being distracting.

---

## 📱 Per-Device Presets

Different devices can show different presets. For example, use CSS gradients on mobile (zero data) and classic videos on desktop:

```yaml
type: custom:animated-background
entity: weather.home
preset: weather
device_presets:
  mobile: weather       # Lightweight gradients on phones
  tablet: ocean         # Calming ocean on tablets
  desktop: classic      # Full video on desktop
```

In the visual editor, check **"Override preset per device type"** and select a preset for each device. The device type is detected by screen width:
- **Mobile**: ≤600px
- **Tablet**: ≤1024px
- **Desktop**: >1024px

Leave a device on "Use main preset" to fall back to the main preset.

---

## 🔲 Static Gradient Mode

Want the particles (rain, snow, stars) but prefer a fixed background color?

```yaml
type: custom:animated-background
preset: weather
static_gradient: true
particles: true
```

The gradient stays at a fixed position while particles still animate on top.

---

## 🌀 Blur Effect & Idle Screensaver

### Constant Background Blur

Add a subtle blur to the background for a softer, more ambient look:

```yaml
type: custom:animated-background
preset: weather
blur: 5   # 0–30 pixels
```

### Idle Screensaver

After a period of inactivity (no mouse, keyboard, or touch), the background smoothly blurs and dims. Any interaction instantly restores it:

```yaml
type: custom:animated-background
preset: aurora
idle_blur: true
idle_timeout: 60        # Seconds before activating (5–300)
idle_blur_strength: 8   # Blur in pixels (1–30)
idle_dim: 0.3           # Dim amount (0–0.8, higher = darker)
```

This works great for wall-mounted tablets or kiosk dashboards — the screen becomes a subtle ambient display when not in use.

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
