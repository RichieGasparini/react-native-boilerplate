import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Type-safe AsyncStorage wrapper with JSON serialization.
 */
export const storage = {
  /**
   * Get a value from storage, parsed as JSON.
   * Returns null if the key doesn't exist or parsing fails.
   */
  async get<T>(key: string): Promise<T | null> {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data) {
        return JSON.parse(data) as T;
      }
      return null;
    } catch (error) {
      console.error(`Failed to get "${key}" from storage:`, error);
      return null;
    }
  },

  /**
   * Set a value in storage, serialized as JSON.
   */
  async set<T>(key: string, value: T): Promise<void> {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Failed to set "${key}" in storage:`, error);
    }
  },

  /**
   * Remove a value from storage.
   */
  async remove(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(`Failed to remove "${key}" from storage:`, error);
    }
  },

  /**
   * Clear all values from storage.
   * Use with caution - this removes everything!
   */
  async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Failed to clear storage:', error);
    }
  },

  /**
   * Get all keys in storage.
   */
  async getAllKeys(): Promise<string[]> {
    try {
      const keys = await AsyncStorage.getAllKeys();
      return [...keys];
    } catch (error) {
      console.error('Failed to get all keys from storage:', error);
      return [];
    }
  },
};
