import React from 'react';
import {

    Card,
    Flex,
    Badge,
    FlexItem,
    Button,
    Brand,
    BaseSizes

} from '@patternfly/react-core';

import { DownloadIcon, BorderStyleIcon, StarIcon, GithubIcon } from '@patternfly/react-icons';
import './index.css'
import '@patternfly/react-core/dist/styles/base.css';
import { Avatar } from '@patternfly/react-core';
import avatarImg from './download.png';
import { mockData } from '../../services/mockdata';

export interface BasicDetailProp {
    id: any
}

const BasicDetail: React.FC<BasicDetailProp> = (taskId) => {
    const task = mockData.filter((task) => task.id == taskId.id)[0];
    return (
        <Card>
            <Flex breakpointMods={[{ modifier: "align-items-center", breakpoint: "lg" }]}>
                <div className="avatar">
                    <Flex breakpointMods={[{ modifier: "align-self-flex-center", breakpoint: "lg" }]}>
                        <FlexItem><Avatar src={avatarImg} alt="avatar" style={{ height: "5em", width: "5em" }}></Avatar></FlexItem>
                    </Flex>
                </div>
                <Flex breakpointMods={[{ modifier: "flex-1", breakpoint: "lg" }]}>
                    <FlexItem>
                        <div className="data">
                            <Flex breakpointMods={[{ modifier: "column", breakpoint: "lg" }]}>

                                <FlexItem><span className="heading">{task.Name}</span>
                                    <p>{task.Description.split(".")[0] + "."}</p>
                                </FlexItem>
                                <FlexItem>
                                    <React.Fragment>
                                        {
                                            task.Tags.map(tag =>
                                                <span>
                                                    <Badge>{tag}</Badge>
                                                    {' '}
                                                </span>
                                            )
                                        }
                                    </React.Fragment>
                                </FlexItem>
                            </Flex>
                        </div>
                    </FlexItem>
                </Flex>


                <div className="download">
                    <Flex breakpointMods={[{ modifier: "align-right", breakpoint: "lg" }, { modifier: "column", breakpoint: "lg" }]}>
                        <FlexItem><span className="downloadNumber"><DownloadIcon />
                            {'  '}5M+</span></FlexItem>
                        <FlexItem><span className="star"><StarIcon color="gold" size="md" /></span></FlexItem>
                        <FlexItem><span className="downloadIcon"><Button className="button" style={{ width: "9em" }}>
                            Download
                        </Button></span></FlexItem>
                    </Flex>
                </div>

            </Flex>
        </Card>
    );
}



export default BasicDetail;


