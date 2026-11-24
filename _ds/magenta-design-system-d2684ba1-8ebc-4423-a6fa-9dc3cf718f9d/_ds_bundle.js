/* @ds-bundle: {"format":4,"namespace":"MagentaDesignSystem_d2684b","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"EventCard","sourcePath":"components/display/EventCard.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"TicketTier","sourcePath":"components/display/TicketTier.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Button.jsx":"704bec8415c8","components/core/Icon.jsx":"73b1992bd4f5","components/core/IconButton.jsx":"a906d83663be","components/display/Badge.jsx":"5a290cf1e513","components/display/EventCard.jsx":"f32eb39eca3c","components/display/Tag.jsx":"f89d1c969feb","components/display/TicketTier.jsx":"27b9aaa5e98e","components/feedback/Dialog.jsx":"ef9edd64ceeb","components/feedback/Toast.jsx":"0b72b1fb4551","components/feedback/Tooltip.jsx":"5722117fd580","components/forms/Checkbox.jsx":"6ca2142d2ee7","components/forms/Input.jsx":"f54c1d1dee5b","components/forms/QuantityStepper.jsx":"d0165f8f7d53","components/forms/Select.jsx":"a77d8d0c2fa2","components/forms/Switch.jsx":"562caa333bf4","components/navigation/Tabs.jsx":"945dd0223604","ui_kits/website/Agenda.jsx":"7cf728c95e5e","ui_kits/website/Club.jsx":"88ff40fac9cc","ui_kits/website/EventDetail.jsx":"c5b73f2dc4f9","ui_kits/website/Footer.jsx":"022709ed8c9b","ui_kits/website/Header.jsx":"fe5288e84bd0","ui_kits/website/Home.jsx":"d645bc99a0c5","ui_kits/website/Vip.jsx":"070e62084b03","ui_kits/website/data.js":"dc5b56322ce4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MagentaDesignSystem_d2684b = window.MagentaDesignSystem_d2684b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style
}) {
  const url = 'https://unpkg.com/lucide-static@0.460.0/icons/' + name + '.svg';
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      background: color,
      WebkitMask: 'url(' + url + ') center/contain no-repeat',
      mask: 'url(' + url + ') center/contain no-repeat',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    h: 36,
    px: 16,
    fs: 12
  },
  md: {
    h: 48,
    px: 24,
    fs: 13
  },
  lg: {
    h: 60,
    px: 32,
    fs: 15
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  full,
  disabled,
  children,
  onClick,
  type = 'button',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = {
    primary: {
      bg: hover ? 'var(--accent-hover)' : 'var(--accent)',
      fg: 'var(--on-accent)',
      bd: 'transparent'
    },
    secondary: {
      bg: hover ? 'var(--ink-0)' : 'var(--ink-100)',
      fg: 'var(--ink-950)',
      bd: 'transparent'
    },
    outline: {
      bg: hover ? 'var(--ink-100)' : 'transparent',
      fg: hover ? 'var(--ink-950)' : 'var(--fg-1)',
      bd: 'var(--border-strong)'
    },
    ghost: {
      bg: hover ? 'var(--border-subtle)' : 'transparent',
      fg: hover ? 'var(--magenta-300)' : 'var(--fg-1)',
      bd: 'transparent'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      height: s.h,
      padding: '0 ' + s.px + 'px',
      width: full ? '100%' : undefined,
      background: v.bg,
      color: v.fg,
      border: '1px solid ' + v.bd,
      borderRadius: 'var(--radius-sm)',
      font: '700 ' + s.fs + 'px/1 var(--font-body)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.35 : 1,
      transform: press ? 'scale(.97)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.fs + 5
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.fs + 5
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  variant = 'outline',
  size = 44,
  onClick,
  disabled,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const filled = variant === 'primary';
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    title: label,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: 'inline-grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-round)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .35 : 1,
      background: filled ? hover ? 'var(--accent-hover)' : 'var(--accent)' : variant === 'ghost' ? hover ? 'var(--border-subtle)' : 'transparent' : hover ? 'var(--ink-100)' : 'transparent',
      color: filled ? '#fff' : variant === 'outline' && hover ? 'var(--ink-950)' : 'var(--fg-1)',
      border: variant === 'outline' ? '1px solid var(--border-strong)' : '1px solid transparent',
      transition: 'all var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.42)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const TONES = {
  brand: ['var(--accent)', '#fff'],
  live: ['var(--neon-500)', '#fff'],
  soldout: ['var(--ink-700)', 'var(--ink-300)'],
  warning: ['var(--warning-500)', 'var(--ink-950)'],
  success: ['var(--success-500)', 'var(--ink-950)'],
  paper: ['var(--ink-100)', 'var(--ink-950)']
};
function Badge({
  tone = 'brand',
  dot,
  children
}) {
  const [bg, fg] = TONES[tone] || TONES.brand;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 8px',
      background: bg,
      color: fg,
      borderRadius: 'var(--radius-sm)',
      font: '700 10px/1 var(--font-body)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/EventCard.jsx
try { (() => {
function EventCard({
  day,
  date,
  month,
  title,
  artists,
  image,
  status,
  price,
  onClick,
  layout = 'poster'
}) {
  const [hover, setHover] = React.useState(false);
  const media = /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--ink-800)',
      aspectRatio: layout === 'poster' ? '4 / 5' : '1 / 1',
      width: layout === 'row' ? 120 : '100%',
      flex: 'none'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.05)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'repeating-linear-gradient(135deg,var(--ink-800) 0 12px,var(--ink-850) 12px 24px)',
      transform: hover ? 'scale(1.05)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }), status && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: status === 'soldout' ? 'soldout' : status === 'live' ? 'live' : status === 'few' ? 'warning' : 'brand',
    dot: status === 'live'
  }, {
    soldout: 'Sold out',
    live: 'Esta noche',
    few: 'Últimas',
    new: 'Nuevo'
  }[status] || status)));
  if (layout === 'row') return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '16px 0',
      borderTop: '1px solid var(--border-default)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      flex: 'none',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 11px/1 var(--font-body)',
      letterSpacing: 'var(--ls-caps-wide)',
      textTransform: 'uppercase',
      color: 'var(--magenta-300)'
    }
  }, day), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '900 48px/1 var(--font-display)',
      color: 'var(--fg-1)'
    }
  }, date), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 var(--font-body)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--fg-3)'
    }
  }, month)), media, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '900 32px/.95 var(--font-display)',
      textTransform: 'uppercase',
      color: hover ? 'var(--magenta-300)' : 'var(--fg-1)',
      transition: 'color var(--dur-fast)'
    }
  }, title), artists && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 14,
      color: 'var(--fg-2)'
    }
  }, artists)), price && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px/1 var(--font-mono)',
      color: 'var(--fg-2)'
    }
  }, price), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 24,
    color: hover ? 'var(--magenta-300)' : 'var(--fg-1)'
  }));
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      cursor: 'pointer'
    }
  }, media, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 11px/1 var(--font-body)',
      letterSpacing: 'var(--ls-caps-wide)',
      textTransform: 'uppercase',
      color: 'var(--magenta-300)'
    }
  }, day, " ", date, " ", month), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '900 30px/.95 var(--font-display)',
      textTransform: 'uppercase',
      color: hover ? 'var(--magenta-300)' : 'var(--fg-1)',
      transition: 'color var(--dur-fast)'
    }
  }, title), artists && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--fg-2)'
    }
  }, artists)));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  active,
  onClick,
  children
}) {
  const [hover, setHover] = React.useState(false);
  const on = active || hover;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      height: 34,
      padding: '0 16px',
      borderRadius: 'var(--radius-pill)',
      cursor: onClick ? 'pointer' : 'default',
      font: '600 12px/1 var(--font-body)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      background: active ? 'var(--ink-100)' : 'transparent',
      color: active ? 'var(--ink-950)' : on ? 'var(--fg-1)' : 'var(--fg-2)',
      border: '1px solid ' + (active ? 'var(--ink-100)' : on ? 'var(--border-strong)' : 'var(--border-default)'),
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  onClose,
  children,
  footer,
  width = 520
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'grid',
      placeItems: 'center',
      padding: 24,
      background: 'var(--scrim)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--bg-raised)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-pop)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '20px 20px 0 28px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '900 30px/1 var(--font-display)',
      textTransform: 'uppercase',
      color: 'var(--fg-1)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Cerrar",
    variant: "ghost",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 28px 28px',
      color: 'var(--fg-2)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12,
      padding: '16px 28px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const ICON = {
  success: ['check-circle-2', 'var(--success-500)'],
  error: ['alert-circle', 'var(--danger-500)'],
  info: ['info', 'var(--magenta-300)']
};
function Toast({
  tone = 'info',
  title,
  message,
  onClose,
  style
}) {
  const [ic, col] = ICON[tone] || ICON.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      width: 360,
      maxWidth: '100%',
      padding: '14px 16px',
      background: 'var(--ink-100)',
      color: 'var(--ink-950)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-pop)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 20,
    color: col,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 14px/1.3 var(--font-body)'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-600)',
      marginTop: 2
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--ink-600)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  placement = 'top'
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      ...pos,
      transform: 'translateX(-50%)',
      padding: '6px 10px',
      background: 'var(--ink-100)',
      color: 'var(--ink-950)',
      borderRadius: 'var(--radius-sm)',
      font: '600 12px/1.2 var(--font-body)',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      opacity: show ? 1 : 0,
      transition: 'opacity var(--dur-fast) var(--ease-out)',
      zIndex: 50
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  onChange,
  label,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      color: 'var(--fg-2)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + (checked ? 'var(--accent)' : 'var(--border-strong)'),
      background: checked ? 'var(--accent)' : 'transparent',
      color: '#fff',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error,
  hint,
  disabled,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 11px/1 var(--font-body)',
      letterSpacing: 'var(--ls-caps-wide)',
      textTransform: 'uppercase',
      color: 'var(--fg-3)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 52,
      padding: '0 16px',
      background: 'var(--bg-raised)',
      color: 'var(--fg-1)',
      font: '400 16px/1 var(--font-body)',
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      opacity: disabled ? .4 : 1,
      border: '1px solid ' + (error ? 'var(--danger-500)' : focus ? 'var(--magenta-400)' : 'var(--border-default)'),
      transition: 'border-color var(--dur-fast) var(--ease-out)'
    }
  }), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? 'var(--danger-500)' : 'var(--fg-3)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function QuantityStepper({
  value = 0,
  min = 0,
  max = 10,
  onChange
}) {
  const btn = dis => ({
    width: 40,
    height: 40,
    display: 'grid',
    placeItems: 'center',
    background: 'transparent',
    color: 'var(--fg-1)',
    border: 'none',
    cursor: dis ? 'not-allowed' : 'pointer',
    opacity: dis ? .3 : 1
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Menos",
    style: btn(value <= min),
    disabled: value <= min,
    onClick: () => onChange && onChange(value - 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 32,
      textAlign: 'center',
      font: '500 15px/1 var(--font-mono)',
      color: 'var(--fg-1)'
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    "aria-label": "M\xE1s",
    style: btn(value >= max),
    disabled: value >= max,
    onClick: () => onChange && onChange(value + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 16
  })));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/display/TicketTier.jsx
try { (() => {
function TicketTier({
  name,
  description,
  price,
  status,
  qty = 0,
  onQty
}) {
  const sold = status === 'soldout';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: 20,
      background: 'var(--surface-card)',
      border: '1px solid ' + (qty > 0 ? 'var(--magenta-500)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-sm)',
      opacity: sold ? .5 : 1,
      transition: 'border-color var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 22px/1 var(--font-display)',
      textTransform: 'uppercase',
      color: 'var(--fg-1)'
    }
  }, name), status && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: sold ? 'soldout' : 'warning'
  }, sold ? 'Agotado' : 'Últimas')), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--fg-3)'
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 18px/1 var(--font-mono)',
      color: 'var(--fg-1)'
    }
  }, price), !sold && /*#__PURE__*/React.createElement(__ds_scope.QuantityStepper, {
    value: qty,
    max: 8,
    onChange: onQty
  }));
}
Object.assign(__ds_scope, { TicketTier });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/TicketTier.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 11px/1 var(--font-body)',
      letterSpacing: 'var(--ls-caps-wide)',
      textTransform: 'uppercase',
      color: 'var(--fg-3)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      appearance: 'none',
      width: '100%',
      height: 52,
      padding: '0 44px 0 16px',
      background: 'var(--bg-raised)',
      color: 'var(--fg-1)',
      font: '400 16px/1 var(--font-body)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      opacity: disabled ? .4 : 1
    }
  }, options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    style: {
      position: 'absolute',
      right: 16,
      top: 17,
      pointerEvents: 'none',
      color: 'var(--fg-2)'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      color: 'var(--fg-2)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": !!checked,
    disabled: disabled,
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 44,
      height: 24,
      padding: 2,
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--accent)' : 'var(--ink-700)',
      cursor: 'inherit',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      transform: checked ? 'translateX(20px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 32,
      borderBottom: '1px solid var(--border-default)'
    }
  }, items.map(it => {
    const id = typeof it === 'string' ? it : it.value;
    const label = typeof it === 'string' ? it : it.label;
    const on = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(id),
      style: {
        padding: '0 0 14px',
        marginBottom: -1,
        background: 'none',
        border: 'none',
        borderBottom: '2px solid ' + (on ? 'var(--magenta-500)' : 'transparent'),
        color: on ? 'var(--fg-1)' : 'var(--fg-3)',
        font: '700 13px/1 var(--font-body)',
        letterSpacing: 'var(--ls-caps)',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'color var(--dur-fast)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Agenda.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Agenda({
  openEvent
}) {
  const [g, setG] = React.useState('Todos');
  const list = MAGENTA_EVENTS.filter(e => g === 'Todos' || e.genre === g);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'calc(var(--header-h) + var(--space-8)) var(--gutter) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display)',
      marginBottom: 40
    }
  }, "Agenda"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginBottom: 40
    }
  }, ['Todos', 'House', 'Techno', 'Latin', 'Pop'].map(x => /*#__PURE__*/React.createElement(DS.Tag, {
    key: x,
    active: g === x,
    onClick: () => setG(x)
  }, x))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 12px/1 var(--font-body)',
      letterSpacing: 'var(--ls-caps-wide)',
      textTransform: 'uppercase',
      color: 'var(--fg-3)',
      marginBottom: 16
    }
  }, "Octubre 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-default)'
    }
  }, list.map(e => /*#__PURE__*/React.createElement(DS.EventCard, _extends({
    key: e.id,
    layout: "row"
  }, e, {
    onClick: () => openEvent(e)
  })))), !list.length && /*#__PURE__*/React.createElement("p", {
    style: {
      padding: '40px 0',
      color: 'var(--fg-3)'
    }
  }, "No hay fechas para este g\xE9nero todav\xEDa."));
}
window.Agenda = Agenda;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Agenda.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Club.jsx
try { (() => {
function Club({
  go
}) {
  const facts = [['1', 'Sala principal'], ['2', 'Barras'], ['3', 'Zonas VIP'], ['06:00', 'Cierre']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: '70vh',
      minHeight: 520,
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(MagentaPH, {
    label: "[ foto interior del club ]"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(11,7,9,1) 0%, rgba(11,7,9,0) 70%)'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      position: 'relative',
      fontSize: 'var(--fs-mega)',
      padding: '0 var(--gutter) var(--space-7)'
    }
  }, "El club")), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      padding: 'var(--space-8) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: '900 44px/1 var(--font-display)',
      textTransform: 'uppercase',
      color: 'var(--fg-1)'
    }
  }, "M\xFAsica de principio a fin, luz baja y una pista hecha para bailar."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontSize: 'var(--fs-lg)'
    }
  }, /*#__PURE__*/React.createElement("p", null, "[Historia del club \u2014 pendiente de copy real.]"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    onClick: () => go('agenda')
  }, "Ver agenda"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "outline",
    icon: "map-pin"
  }, "C\xF3mo llegar")))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, facts.map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      padding: '40px var(--gutter)',
      borderLeft: i ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '900 72px/1 var(--font-display)',
      color: 'var(--magenta-400)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 12px/1 var(--font-body)',
      letterSpacing: 'var(--ls-caps-wide)',
      textTransform: 'uppercase',
      color: 'var(--fg-2)',
      marginTop: 12
    }
  }, l)))));
}
window.Club = Club;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Club.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EventDetail.jsx
try { (() => {
function EventDetail({
  ev,
  go
}) {
  const [tab, setTab] = React.useState('Entradas');
  const [q, setQ] = React.useState({
    early: 0,
    general: 0,
    late: 0
  });
  const [done, setDone] = React.useState(false);
  const tiers = [{
    id: 'early',
    name: 'Early entry',
    description: 'Acceso antes de 01:00',
    price: 20,
    status: ev.status === 'soldout' ? 'soldout' : 'soldout'
  }, {
    id: 'general',
    name: 'General',
    description: 'Acceso toda la noche',
    price: 25,
    status: ev.status === 'soldout' ? 'soldout' : 'few'
  }, {
    id: 'late',
    name: 'General + copa',
    description: 'Incluye una consumición',
    price: 32,
    status: ev.status === 'soldout' ? 'soldout' : undefined
  }];
  const total = tiers.reduce((s, t) => s + q[t.id] * t.price, 0);
  const n = Object.values(q).reduce((a, b) => a + b, 0);
  const meta = (ic, t) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      color: 'var(--fg-1)',
      font: '500 14px/1 var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement(DS.Icon, {
    name: ic,
    size: 18,
    color: "var(--magenta-300)"
  }), t);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: '72vh',
      minHeight: 520,
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(MagentaPH, {
    label: "[ artwork del evento ]"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(11,7,9,1) 0%, rgba(11,7,9,0) 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '0 var(--gutter) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('agenda'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--fg-2)',
      font: '700 12px/1 var(--font-body)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      padding: 0,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(DS.Icon, {
    name: "arrow-left",
    size: 16
  }), "Agenda"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 12px/1 var(--font-body)',
      letterSpacing: 'var(--ls-caps-wide)',
      textTransform: 'uppercase',
      color: 'var(--magenta-300)',
      marginBottom: 14
    }
  }, ev.day, " ", ev.date, " ", ev.month), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display)'
    }
  }, ev.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 'var(--fs-lg)',
      color: 'var(--fg-1)'
    }
  }, ev.artists))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 400px',
      gap: 64,
      padding: 'var(--space-6) var(--gutter) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.Tabs, {
    items: ['Entradas', 'Info', 'Line-up'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 32
    }
  }, tab === 'Entradas' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, tiers.map(t => /*#__PURE__*/React.createElement(DS.TicketTier, {
    key: t.id,
    name: t.name,
    description: t.description,
    price: t.price + ' €',
    status: t.status,
    qty: q[t.id],
    onQty: v => setQ({
      ...q,
      [t.id]: v
    })
  }))), tab === 'Info' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("p", null, "Puertas a las ", ev.doors.split(' ')[0], ". Entrada para mayores de 18 con DNI o pasaporte original. La organizaci\xF3n se reserva el derecho de admisi\xF3n."), /*#__PURE__*/React.createElement("p", null, "Las entradas son nominativas y no se admiten devoluciones salvo cancelaci\xF3n del evento.")), tab === 'Line-up' && /*#__PURE__*/React.createElement("div", null, ev.artists.split(/ · | \+ /).map(a => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      font: '900 48px/1.1 var(--font-display)',
      textTransform: 'uppercase',
      color: 'var(--fg-1)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '10px 0'
    }
  }, a))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 'calc(var(--header-h) + 24px)',
      alignSelf: 'start',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, meta('calendar', ev.day + ' ' + ev.date + ' ' + ev.month + ' 2026'), meta('clock', ev.doors), meta('map-pin', 'Magenta · Sala principal'), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 12px/1 var(--font-body)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--fg-3)'
    }
  }, "Total \xB7 ", n, " ", n === 1 ? 'entrada' : 'entradas'), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '900 44px/1 var(--font-display)',
      color: 'var(--fg-1)'
    }
  }, total, " \u20AC")), /*#__PURE__*/React.createElement(DS.Button, {
    full: true,
    size: "lg",
    disabled: !n || ev.status === 'soldout',
    iconRight: "arrow-right",
    onClick: () => setDone(true)
  }, ev.status === 'soldout' ? 'Agotado' : 'Pagar'), /*#__PURE__*/React.createElement(DS.Button, {
    full: true,
    variant: "outline",
    onClick: () => go('vip')
  }, "Reservar mesa VIP"))), /*#__PURE__*/React.createElement(DS.Dialog, {
    open: done,
    title: "\xA1Nos vemos dentro!",
    onClose: () => setDone(false),
    footer: /*#__PURE__*/React.createElement(DS.Button, {
      onClick: () => {
        setDone(false);
        go('home');
      }
    }, "Volver al inicio")
  }, /*#__PURE__*/React.createElement("p", null, "Hemos enviado ", n, " ", n === 1 ? 'entrada' : 'entradas', " para ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fg-1)'
    }
  }, ev.title), " a tu email. Muestra el QR en la puerta.")));
}
window.EventDetail = EventDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EventDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Footer({
  go
}) {
  const [email, setEmail] = React.useState('');
  const [ok, setOk] = React.useState(false);
  const h = {
    font: '700 11px/1 var(--font-body)',
    letterSpacing: 'var(--ls-caps-wide)',
    textTransform: 'uppercase',
    color: 'var(--fg-3)',
    marginBottom: 16
  };
  const a = {
    display: 'block',
    color: 'var(--fg-1)',
    fontSize: 15,
    marginBottom: 10,
    cursor: 'pointer'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      padding: 'var(--space-9) var(--gutter) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 48,
      marginBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 56,
      marginBottom: 20
    }
  }, "Ent\xE9rate", /*#__PURE__*/React.createElement("br", null), "primero"), ok ? /*#__PURE__*/React.createElement(DS.Toast, {
    tone: "success",
    title: "Est\xE1s dentro",
    message: "Te avisaremos de cada nueva fecha."
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-end',
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement(DS.Input, {
    placeholder: "tu@email.com",
    value: email,
    onChange: setEmail,
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(DS.Button, {
    onClick: () => email && setOk(true)
  }, "Suscribirme"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: h
  }, "Club"), /*#__PURE__*/React.createElement("a", {
    style: a,
    onClick: () => go('agenda')
  }, "Agenda"), /*#__PURE__*/React.createElement("a", {
    style: a,
    onClick: () => go('vip')
  }, "Reservas VIP"), /*#__PURE__*/React.createElement("a", {
    style: a,
    onClick: () => go('club')
  }, "El club")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: h
  }, "Info"), /*#__PURE__*/React.createElement("a", {
    style: a
  }, "Preguntas frecuentes"), /*#__PURE__*/React.createElement("a", {
    style: a
  }, "Pol\xEDtica de acceso"), /*#__PURE__*/React.createElement("a", {
    style: a
  }, "Trabaja con nosotros")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: h
  }, "S\xEDguenos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(DS.IconButton, {
    icon: "instagram",
    label: "Instagram"
  }), /*#__PURE__*/React.createElement(DS.IconButton, {
    icon: "music-2",
    label: "TikTok"
  }), /*#__PURE__*/React.createElement(DS.IconButton, {
    icon: "mail",
    label: "Email"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 24,
      fontSize: 13,
      color: 'var(--fg-3)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.png",
    alt: "Magenta",
    style: {
      height: 72,
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Magenta \xB7 Cookies \xB7 Privacidad \xB7 Aviso legal \xB7 +18")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
function Header({
  go,
  route
}) {
  const [menu, setMenu] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('scroller');
    const f = () => setScrolled(el.scrollTop > 40);
    el.addEventListener('scroll', f);
    return () => el.removeEventListener('scroll', f);
  }, []);
  const links = [['agenda', 'Agenda'], ['vip', 'VIP'], ['club', 'El club']];
  const lk = on => ({
    font: '700 13px/1 var(--font-body)',
    letterSpacing: 'var(--ls-caps)',
    textTransform: 'uppercase',
    color: on ? 'var(--magenta-300)' : 'var(--fg-1)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0
  });
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      height: 'var(--header-h)',
      marginBottom: 'calc(var(--header-h) * -1)',
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      padding: '0 var(--gutter)',
      background: scrolled ? 'rgba(11,7,9,.78)' : 'transparent',
      backdropFilter: scrolled ? 'var(--blur-glass)' : 'none',
      WebkitBackdropFilter: scrolled ? 'var(--blur-glass)' : 'none',
      borderBottom: '1px solid ' + (scrolled ? 'var(--border-subtle)' : 'transparent'),
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(DS.IconButton, {
    icon: menu ? 'x' : 'menu',
    label: "Men\xFA",
    variant: "ghost",
    onClick: () => setMenu(!menu)
  }), links.map(([r, l]) => /*#__PURE__*/React.createElement("button", {
    key: r,
    style: lk(route === r),
    onClick: () => go(r)
  }, l))), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home'),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.png",
    alt: "Magenta",
    style: {
      height: 60,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: lk(false)
  }, "ES / EN"), /*#__PURE__*/React.createElement(DS.Button, {
    size: "sm",
    iconRight: "arrow-up-right",
    onClick: () => go('agenda')
  }, "Entradas")), menu && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 'var(--header-h) 0 0 0',
      background: 'var(--bg-page)',
      padding: '48px var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, [['home', 'Inicio'], ...links, ['contacto', 'Contacto']].map(([r, l]) => /*#__PURE__*/React.createElement("button", {
    key: r,
    onClick: () => {
      go(r === 'contacto' ? 'club' : r);
      setMenu(false);
    },
    style: {
      textAlign: 'left',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      font: '900 88px/.95 var(--font-display)',
      textTransform: 'uppercase',
      color: 'var(--fg-1)',
      padding: 0
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--magenta-400)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--fg-1)'
  }, l))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Home({
  go,
  openEvent
}) {
  const ev = MAGENTA_EVENTS;
  const railRef = React.useRef(null);
  const scroll = d => railRef.current.scrollBy({
    left: d * 360,
    behavior: 'smooth'
  });
  const eyebrow = {
    font: '700 12px/1 var(--font-body)',
    letterSpacing: 'var(--ls-caps-wide)',
    textTransform: 'uppercase',
    color: 'var(--magenta-300)'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: '100vh',
      minHeight: 680,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(MagentaPH, {
    label: "[ foto / v\xEDdeo hero \xB7 pista llena ]"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(11,7,9,.95) 0%, rgba(11,7,9,.2) 55%, rgba(11,7,9,.5) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '0 var(--gutter) var(--space-8)',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(DS.Badge, {
    tone: "live",
    dot: true
  }, "Esta noche"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...eyebrow,
      color: 'var(--fg-1)'
    }
  }, "Vie 11 Oct \xB7 23:59")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-mega)'
    }
  }, "Magenta", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--magenta-400)'
    }
  }, "Nights"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    size: "lg",
    iconRight: "arrow-up-right",
    onClick: () => openEvent(ev[0])
  }, "Comprar entradas"), /*#__PURE__*/React.createElement(DS.Button, {
    size: "lg",
    variant: "outline",
    onClick: () => go('vip')
  }, "Reservar VIP")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-9) 0 var(--space-9) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      paddingRight: 'var(--gutter)',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrow,
      marginBottom: 14
    }
  }, "Agenda"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h1)'
    }
  }, "Pr\xF3ximos eventos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "ghost",
    onClick: () => go('agenda'),
    iconRight: "arrow-right"
  }, "Ver todo"), /*#__PURE__*/React.createElement(DS.IconButton, {
    icon: "arrow-left",
    label: "Anterior",
    onClick: () => scroll(-1)
  }), /*#__PURE__*/React.createElement(DS.IconButton, {
    icon: "arrow-right",
    label: "Siguiente",
    onClick: () => scroll(1)
  }))), /*#__PURE__*/React.createElement("div", {
    ref: railRef,
    style: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: 'minmax(300px, 22vw)',
      gap: 24,
      overflowX: 'auto',
      scrollbarWidth: 'none',
      paddingRight: 'var(--gutter)'
    }
  }, ev.map(e => /*#__PURE__*/React.createElement(DS.EventCard, _extends({
    key: e.id
  }, e, {
    onClick: () => openEvent(e)
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: 620,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(MagentaPH, {
    label: "[ foto zona VIP ]"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-9) var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 24,
      background: 'var(--magenta-500)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrow,
      color: 'var(--magenta-100)'
    }
  }, "Experiencia VIP"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h1)',
      color: '#fff'
    }
  }, "Tu mesa,", /*#__PURE__*/React.createElement("br", null), "junto a la cabina"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--magenta-50)',
      fontSize: 'var(--fs-lg)',
      maxWidth: 440
    }
  }, "Reservados para grupos con servicio de botella, acceso preferente y anfitri\xF3n durante toda la noche."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    iconRight: "arrow-up-right",
    onClick: () => go('vip')
  }, "Reservar mesa")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-10) var(--gutter)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrow,
      marginBottom: 24
    }
  }, "El club"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '900 clamp(40px,5vw,72px)/.95 var(--font-display)',
      textTransform: 'uppercase',
      color: 'var(--fg-1)',
      maxWidth: 1100,
      margin: '0 auto 40px'
    }
  }, "Una sala, un sistema de sonido y una noche que termina con el sol."), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "outline",
    onClick: () => go('club')
  }, "Conoce el club")));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Vip.jsx
try { (() => {
function Vip() {
  const [f, setF] = React.useState({
    name: '',
    email: '',
    date: 'SÁB 12 OCT · Rosa Club',
    size: '6 personas',
    terms: false
  });
  const [toast, setToast] = React.useState(false);
  const set = k => v => setF({
    ...f,
    [k]: v
  });
  const areas = [['Cabina', 'Junto al DJ · hasta 10 personas', 'desde 1.200 €'], ['Balcón', 'Vista a la pista · hasta 8', 'desde 800 €'], ['Lounge', 'Zona tranquila · hasta 6', 'desde 500 €']];
  const [area, setArea] = React.useState('Balcón');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'calc(var(--header-h) + var(--space-8)) var(--gutter) var(--space-9)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 12px/1 var(--font-body)',
      letterSpacing: 'var(--ls-caps-wide)',
      textTransform: 'uppercase',
      color: 'var(--magenta-300)',
      marginBottom: 16
    }
  }, "Reservas VIP"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display)',
      marginBottom: 24
    }
  }, "Elige", /*#__PURE__*/React.createElement("br", null), "tu mesa"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lg)',
      maxWidth: 480,
      marginBottom: 40
    }
  }, "El importe de la reserva se consume \xEDntegramente en botellas y servicio. Te confirmamos en menos de 24 horas."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, areas.map(([n, d, p]) => {
    const on = area === n;
    return /*#__PURE__*/React.createElement("button", {
      key: n,
      onClick: () => setArea(n),
      style: {
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        padding: 20,
        cursor: 'pointer',
        background: 'var(--surface-card)',
        border: '1px solid ' + (on ? 'var(--magenta-500)' : 'var(--border-subtle)'),
        boxShadow: on ? 'var(--shadow-glow)' : 'none',
        borderRadius: 'var(--radius-sm)',
        color: 'inherit',
        transition: 'all var(--dur-fast)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '800 26px/1 var(--font-display)',
        textTransform: 'uppercase',
        color: 'var(--fg-1)',
        marginBottom: 6
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--fg-3)'
      }
    }, d)), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 15px/1 var(--font-mono)',
        color: 'var(--fg-1)'
      }
    }, p));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-raised)',
      border: '1px solid var(--border-subtle)',
      padding: 36,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h3)'
    }
  }, "Solicitud \xB7 ", area), /*#__PURE__*/React.createElement(DS.Select, {
    label: "Fecha",
    value: f.date,
    onChange: set('date'),
    options: MAGENTA_EVENTS.filter(e => e.status !== 'soldout').map(e => e.day + ' ' + e.date + ' ' + e.month + ' · ' + e.title)
  }), /*#__PURE__*/React.createElement(DS.Select, {
    label: "Personas",
    value: f.size,
    onChange: set('size'),
    options: ['4 personas', '6 personas', '8 personas', '10 personas']
  }), /*#__PURE__*/React.createElement(DS.Input, {
    label: "Nombre",
    placeholder: "Nombre y apellidos",
    value: f.name,
    onChange: set('name')
  }), /*#__PURE__*/React.createElement(DS.Input, {
    label: "Email",
    type: "email",
    placeholder: "tu@email.com",
    value: f.email,
    onChange: set('email')
  }), /*#__PURE__*/React.createElement(DS.Checkbox, {
    checked: f.terms,
    onChange: set('terms'),
    label: "Acepto la pol\xEDtica de reservas"
  }), /*#__PURE__*/React.createElement(DS.Button, {
    size: "lg",
    full: true,
    disabled: !f.terms || !f.name,
    onClick: () => setToast(true)
  }, "Enviar solicitud")), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(DS.Toast, {
    tone: "success",
    title: "Solicitud enviada",
    message: area + ' · ' + f.date,
    onClose: () => setToast(false)
  })));
}
window.Vip = Vip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Vip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.DS = window.MagentaDesignSystem_d2684b;
window.MAGENTA_EVENTS = [{
  id: 'nights',
  day: 'VIE',
  date: '11',
  month: 'OCT',
  title: 'Magenta Nights',
  artists: 'Residents · All night long',
  status: 'live',
  price: 'desde 20 €',
  genre: 'House',
  doors: '23:59 → 06:00'
}, {
  id: 'rosa',
  day: 'SÁB',
  date: '12',
  month: 'OCT',
  title: 'Rosa Club',
  artists: 'Invitado especial + Residents',
  status: 'few',
  price: 'desde 25 €',
  genre: 'House',
  doors: '23:59 → 06:00'
}, {
  id: 'noir',
  day: 'VIE',
  date: '18',
  month: 'OCT',
  title: 'Noir',
  artists: 'Line-up por anunciar',
  status: 'new',
  price: 'desde 20 €',
  genre: 'Techno',
  doors: '00:00 → 06:00'
}, {
  id: 'fuego',
  day: 'SÁB',
  date: '19',
  month: 'OCT',
  title: 'Fuego Latino',
  artists: 'Reggaeton · Dembow · Salsa',
  price: 'desde 15 €',
  genre: 'Latin',
  doors: '23:30 → 06:00'
}, {
  id: 'opening',
  day: 'SÁB',
  date: '26',
  month: 'OCT',
  title: 'Aniversario',
  artists: 'Line-up por anunciar',
  status: 'soldout',
  price: '—',
  genre: 'House',
  doors: '23:00 → 07:00'
}, {
  id: 'disco',
  day: 'JUE',
  date: '31',
  month: 'OCT',
  title: 'Halloween Disco',
  artists: 'Disco · Funk · Edits',
  price: 'desde 18 €',
  genre: 'Pop',
  doors: '23:59 → 06:00'
}];
window.MagentaPH = function MagentaPH({
  label,
  style
}) {
  return React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'repeating-linear-gradient(135deg,var(--ink-800) 0 14px,var(--ink-850) 14px 28px)',
      ...style
    }
  }, label && React.createElement('span', {
    style: {
      position: 'absolute',
      top: 'calc(var(--header-h) + 16px)',
      right: 'var(--gutter)',
      font: '500 11px/1 var(--font-mono)',
      color: 'var(--fg-3)'
    }
  }, label));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TicketTier = __ds_scope.TicketTier;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
