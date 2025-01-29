/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/explore` | `/(tabs)\` | `/(tabs)\_layout` | `/(tabs)\explore` | `/..\components\Collapsible` | `/..\components\ExternalLink` | `/..\components\HapticTab` | `/..\components\HelloWave` | `/..\components\ParallaxScrollView` | `/..\components\ThemedText` | `/..\components\ThemedView` | `/..\components\ui\IconSymbol` | `/..\components\ui\IconSymbol.ios` | `/..\components\ui\TabBarBackground.ios` | `/..\constants\Colors` | `/..\hooks\useColorScheme` | `/..\hooks\useColorScheme.web` | `/..\hooks\useThemeColor` | `/_sitemap` | `/explore`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
