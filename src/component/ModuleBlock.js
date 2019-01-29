import React from 'react';
import Check from '../img/check.svg';
import Exclamation from '../img/exclaimation.svg';
import Standard from '../img/standard.svg';

class ModuleBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const moduleMandatory = this.props.mandatory?
            (
                    <img src={Exclamation} alt="Mandatory Module" height="20px" />
            ):
            (
                    <img src={Standard} alt="Standard Module" height="20px" />
            );

        const moduleComplete = this.props.completed?
            (
                <div className="img-holder">
                    <div className="img-container">
                        <img src={Check} alt="Module Complete" height="20px" />
                    </div>
                </div>
            ):
            (
                <div className="img-holder">
                    <div className="img-container">
                        {moduleMandatory}
                    </div>
                </div>
            );

        return(
            <div id={"module"+this.props.id} className={"container-fluid col-xs-12 col-md-"+this.props.part+" module_box"}>
                    <div className="container-fluid text-center module-name">{this.props.moduleName}</div>
                    <div className="text-center module_status">
                        {moduleComplete}
                    </div>
            </div>
        );
    }
}

export default ModuleBlock;