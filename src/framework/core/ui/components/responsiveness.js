import React, { Component } from 'react'

export default ChartComponent => (
  class ResponsiveChart extends Component {
    constructor(props) {
      super(props)

      this.state = {
        containerWidth: null,
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
         if (document.contains(this.chartContainer)) {
              this.touch()
              this.observer.disconnect();
          }
      });

      this.observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
    }

    touch(){
      this.setState({containerWidth: this.state.containerWidth + 1})
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.fitParentContainer)
      this.observer.disconnect();
    }

    fitParentContainer() {
      const { containerWidth } = this.state;
      const currentContainerWidth = this.chartContainer.getBoundingClientRect().width

      const shouldResize = containerWidth !== currentContainerWidth

      if (shouldResize) {
        this.setState({
          containerWidth: currentContainerWidth,
        })
      }
    }

    renderChart() {
      const parentWidth = this.state.containerWidth

      return (
        <ChartComponent {...this.props} parentWidth={parentWidth} />
      )
    }

    render() {
      const { containerWidth } = this.state
      const shouldRenderChart = containerWidth !== null

      return (
        <div
          ref={(el) => { this.chartContainer = el }}
          className="Responsive-wrapper"
        >
          {shouldRenderChart && this.renderChart()}
        </div>
      )
    }
  }
)