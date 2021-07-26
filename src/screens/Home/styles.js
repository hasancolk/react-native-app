import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
    }, 
    searchInput: {
        alignSelf: 'center',
    },
    line: {
        flex: 1,
        height: 1,

        marginTop: 36,
        backgroundColor: colors.pink,
    },
    Button: {
        position: 'absolute',
        bottom: 36,
        end: 36,
    },
});


export const CategoryObjectStyles = StyleSheet.create({

    container: {
        flex: 1,    
    },
   
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: 'pink',
    },

    viewStyle: {
        borderWidth: 1,
        borderColor: 'gainsboro',
        shadowColor: 'pink',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
   
    categoryName: {
        flex: 1,
        marginStart: 12,
        color: colors.text_color,
    },

    categorySembol: {
        width: 32,
        height: 20,
        borderRadius: 4,
        backgroundColor: 'green',
    },
    
});

