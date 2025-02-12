/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/sign-in` | `/(auth)/sign-up` | `/(tabs)` | `/(tabs)/bookmark` | `/(tabs)/create` | `/(tabs)/home` | `/(tabs)/profile` | `/_sitemap` | `/bookmark` | `/create` | `/home` | `/profile` | `/sign-in` | `/sign-up`;
      DynamicRoutes: `/${Router.SingleRoutePart<T>}` | `/(search)/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/(search)/[query]` | `/[query]`;
    }
  }
}
