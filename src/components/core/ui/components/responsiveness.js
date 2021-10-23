import React, { Component } from 'react'

export default ChilcComponent => (
  class ResponsiveChart extends Component {
    constructor(props) {
      super(props)

      this.state = {
        containerWidth: null,
        containerHeight: null,
      }

      this.fitParentContainer = this.fitParentContainer.bind(this)
    }


    componentDidMount() {
      this.fitParentContainer()
      window.addEventListener('resize', this.fitParentContainer)

      setTimeout(() =>{
        this.touch()
      }, 100)

      this.observer = new MutationObserver(function(mutations) {
         if (document.contains(this.componentContainer)) {
              this.touch()
              this.observer.disconnect();
          }
      });

      this.observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
    }

    touch(){
      this.setState({containerWidth: this.state.containerWidth - 1})
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.fitParentContainer)
      this.observer.disconnect();
    }

    fitParentContainer() {
      const { containerWidth, containerHeight } = this.state;
      const rect = this.componentContainer.getBoundingClientRect();
      const currentContainerWidth = rect.width
      const currentContainerHeight = rect.height

      const shouldResize = (containerWidth !== currentContainerWidth)

      if (shouldResize) {
        this.setState({
          containerWidth: currentContainerWidth,
          containerHeight: currentContainerHeight,
        })
      }
    }

    renderComponent() {
      const { containerWidth, containerHeight } = this.state

      return (
        <ChilcComponent {...this.props} parentWidth={containerWidth} parentHeight={containerHeight} />
      )
    }

    render() {
      const { containerWidth, containerHeight } = this.state
      const shouldRenderChart = containerWidth !== null

      return (
        <div
          ref={(el) => { this.componentContainer = el }}
          className="Responsive-wrapper"
        >
          {shouldRenderChart && this.renderComponent()}
        </div>
      )
    }
  }
)