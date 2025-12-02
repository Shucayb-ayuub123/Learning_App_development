import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown : false}}>
      <Stack.Screen name="index" options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="/Kaafid" options={{headerShown: false}}></Stack.Screen>
    
    </Stack>
  )
}
