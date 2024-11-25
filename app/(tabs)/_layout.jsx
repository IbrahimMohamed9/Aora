import { View, Text, Image } from "react-native";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => (
  <View className="items-center justify-center gap-2">
    <Image
      className="w-6 h-6"
      source={icon}
      resizeMode="contain"
      tintColor={color}
    />
    <Text
      className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
      style={{ color: color }}
    >
      {name}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopColor: "#232533",
            borderTopWidth: 0,
            height: 64,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                focused={focused}
                name="Home"
              />
            ),
          }}
        />

        <Tabs.Screen
          name="bookmark"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                focused={focused}
                name="Bookmark"
              />
            ),
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                focused={focused}
                name="Create"
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                focused={focused}
                name="Profile"
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
