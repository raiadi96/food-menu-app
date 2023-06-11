import {View, Text, StyleSheet} from 'react-native';
function Subtitle({children}){
    return <View style={styles.subtitleContainer}>
        <Text style = {{fontWeight:'bold', fontSize:16}}>{children}</Text>
    </View>
}
export default Subtitle;

const styles = StyleSheet.create(
    {
        subtitleContainer:{
            padding:2,
            alignSelf:'center',
            backgroundColor:'#fff',
            alignItems:'center',
            width:'25%'
        }
    }
);
