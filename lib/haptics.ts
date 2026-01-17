import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

/**
 * Haptic feedback utilities with platform-aware implementations.
 * On iOS, uses full haptic feedback. On Android, falls back to selection feedback
 * for light impacts due to platform differences.
 */
export const haptics = {
  /**
   * Light impact - for subtle interactions like button taps
   */
  light: () => {
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } else {
      Haptics.selectionAsync();
    }
  },

  /**
   * Medium impact - for more noticeable interactions
   */
  medium: () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  },

  /**
   * Heavy impact - for significant actions
   */
  heavy: () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  },

  /**
   * Selection feedback - for picker changes
   */
  selection: () => {
    Haptics.selectionAsync();
  },

  /**
   * Success notification - for completing actions successfully
   */
  success: () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  },

  /**
   * Error notification - for invalid actions
   */
  error: () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
  },

  /**
   * Warning notification - for important alerts
   */
  warning: () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
  },
};
