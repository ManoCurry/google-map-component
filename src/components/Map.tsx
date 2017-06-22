import g from 'glamorous'
import * as React from 'react'
import { Mixins } from '../style'

const Styled = {
  Root: g.div({
    height: 400,
    position: 'relative',
  }),
  MapDiv: g.div({
    ...Mixins.fullsize,
    zIndex: 1,
  }),
  InteractDiv: g.div({
    ...Mixins.fullsize,
    zIndex: 2,
  }),
}

interface MapProps {

}

interface MapState {

}

export default class Map extends React.PureComponent<MapProps, MapState> {
  public mapDiv: HTMLDivElement
  public map: google.maps.Map

  public componentDidMount() {
    const uluru = {lat: -25.363, lng: 131.044}
    this.map = new google.maps.Map(this.mapDiv, {
      zoom: 4,
      center: uluru,
    })
    const marker = new google.maps.Marker({
      position: uluru,
      map: this.map,
    })
  }

  public componentWillUnmount() {
    this.map.unbindAll()
  }

  public onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('yolo')

    // const simulatedEvent = document.createEvent('MouseEvent')
    // const {
    //   cancelable, view,
    //   detail, screenX, screenY, clientX, clientY,
    //   ctrlKey, altKey, shiftKey, metaKey,
    //   button, relatedTarget,
    // } = e.nativeEvent
    // simulatedEvent.initMouseEvent('click',
    //   false, cancelable, view,
    //   detail, screenX, screenY, clientX, clientY,
    //   ctrlKey, altKey, shiftKey, metaKey,
    //   button, relatedTarget)
    // this.mapDiv.dispatchEvent(e.nativeEvent)
  }

  public render(): JSX.Element {
    return <Styled.Root>test
      <Styled.InteractDiv onClick={this.onClick}>test</Styled.InteractDiv>
      <Styled.MapDiv
        innerRef={(c: HTMLDivElement)  => (this.mapDiv = c)}
      />
    </Styled.Root>
  }
}
