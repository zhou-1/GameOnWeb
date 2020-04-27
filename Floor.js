import React, { Component } from "react";
import { View, Image } from "react-native";
import Images from './assets/Images';

export default class Floor extends Component {
    render() {
        const widthofscreen = this.props.body.bounds.max.x - this.props.body.bounds.min.x;
        const heightoffloor = this.props.body.bounds.max.y - this.props.body.bounds.min.y;
        const x = this.props.body.position.x - widthofscreen / 2;
        const y = this.props.body.position.y - heightoffloor / 2;

        const imageIterations = Math.ceil(widthofscreen / heightoffloor);

        return (
            <View
                style={{
                    position: "absolute",
                    left: x,
                    top: y,
                    width: widthofscreen,
                    height: heightoffloor,
                    overflow: 'hidden',
                    flexDirection: 'row'
                }}>
                {Array.apply(null, Array(imageIterations)).map(( el, idx) => {
                    return <Image style={{ width: heightoffloor, height: heightoffloor }} key={idx} resizeMode="stretch" source={Images.floor} />
                })}
            </View>
    );
  }
}
