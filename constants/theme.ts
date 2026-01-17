/**
 * Theme constants for a dark neutral design system.
 */

export const colors = {
  // Backgrounds
  bgPrimary: '#141418',
  bgSecondary: '#0d0d14',
  bgCard: 'rgba(255, 255, 255, 0.08)',
  bgOverlay: 'rgba(0, 0, 0, 0.85)',

  // Accent colors
  accent: '#FFB875',
  accentSecondary: '#FFA500',
  accentSubtle: 'rgba(255, 184, 117, 0.15)',

  // Text colors
  textPrimary: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  textTertiary: 'rgba(255, 255, 255, 0.5)',
  textMuted: 'rgba(255, 255, 255, 0.3)',
  textOnAccent: '#000000',

  // Borders
  borderDefault: 'rgba(255, 255, 255, 0.2)',
  borderSubtle: 'rgba(255, 255, 255, 0.1)',
  borderAccent: '#FFB875',

  // Semantic colors
  error: '#ef4444',
  errorBg: 'rgba(239, 68, 68, 0.2)',
  errorBorder: 'rgba(239, 68, 68, 0.3)',
  success: '#22c55e',
  successBg: 'rgba(34, 197, 94, 0.2)',
  successBorder: 'rgba(34, 197, 94, 0.3)',
  warning: '#facc15',
  warningBg: 'rgba(250, 204, 21, 0.1)',
  warningBorder: 'rgba(250, 204, 21, 0.2)',
  info: '#3b82f6',
  infoBg: 'rgba(59, 130, 246, 0.2)',
  infoBorder: 'rgba(59, 130, 246, 0.3)',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const typography = {
  // Font sizes
  fontSizeXs: 11,
  fontSizeSm: 12,
  fontSizeMd: 14,
  fontSizeLg: 15,
  fontSizeXl: 18,
  fontSizeXxl: 20,
  fontSizeTitle: 24,
  fontSizeDisplay: 28,
  fontSizeHero: 32,

  // Font weights
  light: '300' as const,
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
};

export const borderRadius = {
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
  xxl: 14,
  pill: 999,
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  glow: {
    shadowColor: '#FFB875',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 12,
  },
};

export const animation = {
  spring: {
    damping: 15,
    stiffness: 150,
  },
  springFast: {
    damping: 20,
    stiffness: 300,
  },
  duration: {
    fast: 200,
    normal: 300,
    slow: 400,
  },
};
