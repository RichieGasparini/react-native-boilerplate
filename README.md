# React Native Boilerplate

A minimal React Native starter template with Expo SDK 54, React 19, and TypeScript.

## Stack

- **Expo SDK 54** with New Architecture enabled
- **React 19** + **React Native 0.81.5**
- **Expo Router** for file-based navigation
- **TypeScript** with strict mode
- Dark neutral theme system

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm start

# Run on specific platform
npm run ios
npm run android
npm run web
```

## Project Structure

```
├── app/                    # Screens (file-based routing)
│   ├── _layout.tsx         # Root layout with SafeAreaProvider
│   └── index.tsx           # Home screen
├── assets/                 # Images, fonts, etc.
├── components/             # Reusable components
├── constants/
│   └── theme.ts            # Colors, typography, spacing
├── lib/
│   ├── haptics.ts          # Haptic feedback utilities
│   └── storage.ts          # AsyncStorage wrapper
└── types/
    └── index.ts            # TypeScript definitions
```

## Utilities

### Haptics

Platform-aware haptic feedback:

```typescript
import { haptics } from '../lib/haptics';

haptics.light();    // Subtle tap
haptics.medium();   // Standard tap
haptics.heavy();    // Strong tap
haptics.selection(); // Picker change
haptics.success();  // Success notification
haptics.error();    // Error notification
haptics.warning();  // Warning notification
```

### Storage

Type-safe AsyncStorage wrapper:

```typescript
import { storage } from '../lib/storage';

// Save data
await storage.set('user', { name: 'John', age: 30 });

// Load data with type safety
const user = await storage.get<{ name: string; age: number }>('user');

// Remove data
await storage.remove('user');

// Clear all data
await storage.clear();
```

### Theme

Import theme constants:

```typescript
import { colors, spacing, typography, borderRadius, shadows } from '../constants/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgPrimary,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
  },
  text: {
    color: colors.textPrimary,
    fontSize: typography.fontSizeMd,
    fontWeight: typography.medium,
  },
});
```

## Customization

1. Update `app.json` with your app name, slug, and bundle identifiers
2. Replace icons in `assets/` with your own
3. Modify `constants/theme.ts` to match your design system
4. Add screens to `app/` directory (they auto-register as routes)
