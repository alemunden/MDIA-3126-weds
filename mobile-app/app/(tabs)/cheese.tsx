import { Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
        <Link href="/" asChild>
            <Pressable>
                <Text>Index</Text>
            </Pressable>
        </Link>
        <Text>This is a page about cheese</Text>
    </View>
  )
}
