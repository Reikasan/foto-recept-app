import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
// /app/_layout.tsx (Conceptual Example)
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// Import only the specific font weights you intend to use
import { NotoSans_400Regular } from "@expo-google-fonts/noto-sans";
import { PlayfairDisplay_400Regular_Italic } from "@expo-google-fonts/playfair-display/400Regular_Italic";
import { PlayfairDisplay_700Bold } from "@expo-google-fonts/playfair-display/700Bold";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded, fontError] = useFonts({
    // The keys here must match the string values you defined in typography.fontFamily
    NotoSansRegular: NotoSans_400Regular,
    PlayfairDisplayItalic: PlayfairDisplay_400Regular_Italic,
    PlayfairDisplayBold: PlayfairDisplay_700Bold,
    // Add any other specific font weights you want to use here
    // e.g., NotoSansBold: NotoSans_700Bold,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (fontError) throw fontError;
  }, [fontError]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
