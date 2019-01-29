import React from 'react';
import ModuleBlock from './ModuleBlock';

class TagBlock extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let currentTag = null;
        this.props.modules[0].tagId?(currentTag=this.props.modules[0].tagId):(currentTag=null);
        let screenWidth = window.innerWidth;

        return(
            <div className="tag-box col-xs-12" style={{background:(currentTag?this.props.tags[currentTag-1].color:"grey"), width:(screenWidth<1000?"100%":this.props.width+"%")}} >
                <div className="container tag-name">
                    {this.props.modules[0].tagId?this.props.tags[this.props.modules[0].tagId -1].name:""}
                </div>
                <div className="row col-xs-12 col-md-12 module-holder">
                    {
                        this.props.modules.map(
                            module => <ModuleBlock 
                                            id = {module.id} 
                                            moduleName = {module.name} 
                                            mandatory = {module.mandatory?module.mandatory:false} 
                                            completed = {module.completed?module.completed:false} 
                                            tag = {module.tagId?this.props.tags[module.tagId - 1]:{id:"0", color:"grey"}} 
                                            part = {12/this.props.modules.length}
                                        />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default TagBlock;