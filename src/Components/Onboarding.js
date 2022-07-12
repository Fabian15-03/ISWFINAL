import React , {useState , useRef} from 'react'
import { FlatList } from 'react-native'
import {StyleSheet , Animated  , SafeAreaView} from 'react-native'
import colors from "../Utils/colors";


import slides from './slides'
import OnboardingItems from "./OnboardingItems"
import Paginator from "./Paginator"
import NextButton from "./NextButton"

export default OnBoarding = () => {
    
    const [currentIndex, setcurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null)

    const viewableItemsChanged = useRef(({viewableItems}) =>{
        setcurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

    const scrollTo = () => {
        if (currentIndex < slides.length -1 ) {
            slidesRef.current.scrollToIndex({index:currentIndex+1});
        }
        else {
            console.log("End.")
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
            data={slides} 
            renderItem={({item}) => <OnboardingItems item={item} /> }
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item)=> item.id}
            onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{
                useNativeDriver:false,
            })}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}

            />
            <Paginator data={slides} scrollX={scrollX}/>
            <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100/slides.length)}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.BACKGROUNDCOLOR,

    },
})

