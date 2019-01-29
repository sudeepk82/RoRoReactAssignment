import React from 'react';
import TagBlock from './TagBlock';

class Navigation extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        let content = [];
        let currentTag = "";
        let tagModules = [];
        const moduleNo = this.props.modules.length;

        for(let mod in this.props.modules) {
            if(!this.props.modules[mod].tagId) {
                if(tagModules.length !== 0){
                    content.push(
                        <TagBlock modules={tagModules} tags={this.props.tags} width={(tagModules.length * 100)/moduleNo} />
                    );
                }
                tagModules = [this.props.modules[mod]];
                currentTag = "";
                content.push(
                        <TagBlock modules={tagModules} tags={this.props.tags} width={(tagModules.length * 100)/moduleNo} />
                );
                tagModules = [];
            }
            else{
                if(this.props.modules[mod].tagId === currentTag){
                    tagModules.push(
                        this.props.modules[mod]
                    );
                    continue;
                }
                if(tagModules.length !== 0){
                    content.push(
                        <TagBlock modules={tagModules} tags={this.props.tags} width={(tagModules.length * 100)/moduleNo} />
                    );
                }
                currentTag = this.props.modules[mod].tagId;
                tagModules = [];
                tagModules.push(
                    this.props.modules[mod]
                );
            }
        }

        return(
            <div className="container-fluid row col-xs-12 col-md-12 navigation-bar" >
                {
                    content.map(
                        item => item
                    )
                }
            </div>
        );
    }
}

export default Navigation;