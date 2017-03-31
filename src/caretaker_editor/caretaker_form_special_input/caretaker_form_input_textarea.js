class CaretakerFormInputTextarea extends React.Component{
	constructor(props){
		super(props)
		this.state = {}
		this.state.value = props.value || ""
	}
	updateParent(){
		if(this.props.onChange){
			this.props.onChange(this.state.value)
		}
	}
	onChange(event){
		this.state.value = event.target.value
		this.setState(this.state)
		this.updateParent()
	}
	getNegativePropKeys(){
		return []
	}
	getProps(){
		var props = Object.assign({}, this.props)
		this.getNegativePropKeys().forEach(function(key){
			props[key] = null
			delete props[key]
		})
		props.onChange = this.onChange.bind(this)
		return props
	}
	getTextarea(){
		return React.createElement('textarea', this.getProps())
	}
	render(){
		return React.createElement('div',{className: "CaretakerFormInputTextarea"}, (
			this.getTextarea()
		))
	}
}
