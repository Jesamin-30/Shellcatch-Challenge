import * as React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Dimensions, Image, ActivityIndicator} from 'react-native';

import ChuckLogo from '../../images/chuckNorris.png';

const { width: WIDHT } = Dimensions.get('window')
class Joke extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            joke: "",
            isLoading: false,
        }
    }

    componentDidMount() {
        this.getJoke();
    }

    getJoke = () => {
        this.setState({isLoading: true});
        return fetch('http://api.icndb.com/jokes/random')
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                this.setState({
                    joke: json.value.joke,
                    isLoading: false,
                })
            })
            .catch((err) => {
                this.setState({
                    joke: 'Not found',
                    isLoading: false,
                })
                console.error('err', err)
            })
    }

    render() {
        const { joke, isLoading } = this.state;
        return (
            <View style={styles.background}>

                <View style={styles.logoContainer}>
                    <Image source={ChuckLogo} style={styles.logo} />
                    <Text style={styles.jokeTitle}>Chuck Norris' Jokes</Text>
                </View>

                {isLoading ? <ActivityIndicator size='large' color="#f57200" />: (
                    <>
                        
                        <Text style={styles.jokeText}>
                            "{joke}"
                        </Text>
                    
                        <TouchableOpacity style={styles.reload} onPress={this.getJoke}>
                            <Text style={styles.textBtnReload}>Reload</Text>
                        </TouchableOpacity>

                    </>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#60acd0',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50,
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
    },
    jokeTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
    },    
    jokeText: {
        fontSize: 18,
        margin: 20,
        color: 'white',
        textAlign: 'center',
        fontStyle: 'italic',
    },
    reload: {
        width: WIDHT - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#f57200',
        justifyContent: 'center',
        marginTop: 40,
    },
    textBtnReload: {
        color: 'rgba(255,255,255, 0.7)',
        fontSize: 20,
        textAlign: 'center'
    },
})
export default Joke;