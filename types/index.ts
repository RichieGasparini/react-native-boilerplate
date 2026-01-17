/**
 * Common type definitions.
 * Add your app-specific types here.
 */

/**
 * Generic API response wrapper.
 */
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

/**
 * Generic user type.
 */
export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Navigation params - extend as needed.
 */
export type RootStackParamList = {
  index: undefined;
};
