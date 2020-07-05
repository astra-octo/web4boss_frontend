import React, {createContext, ReactNode, useCallback, useState} from "react";
import {Button, Steps as AntdSteps} from 'antd';
import {StepProps} from "antd/lib/steps";

import './Steps.scss';
import ButtonGroup from "antd/es/button/button-group";

interface IStep {
    id: string|number;
    children: ReactNode;
    props: StepProps;
}

interface IStepsProps {
    nextBtnText: string;
    prevBtnText: string;
    finishBtnText?: string;

    steps: IStep[];

    changeStepCallback?: CallableFunction,
    finishStepCallback?: CallableFunction,
}

const { Step } = AntdSteps;

function Steps({ steps, nextBtnText, prevBtnText, finishBtnText, changeStepCallback, finishStepCallback }: IStepsProps): JSX.Element {
    const [activeIndex, setActiveIndex] = useState(0);

    const hasNextStep = (index: number): boolean => getStepLength + 1 > index;
    const hasPrevStep = (index: number): boolean => index > 0;

    const getActiveStepProps = (): object => steps[activeIndex] || {};
    const getStepLength = steps.length - 1;
    const getIsLastStep = (): boolean => activeIndex === getStepLength;
    const getNextBtnText = (): string => getIsLastStep() && finishBtnText ? finishBtnText : nextBtnText;

    const StepsContext = createContext({});

    /**
     * Update step index on the state
     */
    const changeStep = useCallback((
        nextIndex => {
            if (nextIndex > getStepLength && typeof finishStepCallback === 'function') {
                return finishStepCallback()
            }

            if (typeof changeStepCallback === 'function' && !changeStepCallback(activeIndex, nextIndex)) {
                nextIndex = activeIndex;
            }

            setActiveIndex(nextIndex);
        }
    ), [activeIndex, setActiveIndex, changeStepCallback, finishStepCallback, getStepLength]);

    /**
     * Reduce active step index
     */
    const goPrevStep = () => changeStep(
        activeIndex - 1 < 0 ? 0 : activeIndex - 1
    );

    /**
     * Increase active step index
     */
    const goNextStep = () => changeStep(
        activeIndex > getStepLength ? getStepLength : activeIndex + 1
    );

    return (
        <StepsContext.Provider value={{...getActiveStepProps()}}>
            <div className={'steps'}>
                <AntdSteps>
                    {
                        steps.map(({props}, index) =>
                            <Step {...props} key={'asd'} status={index === activeIndex ? 'process' : 'wait'} />
                        )
                    }
                </AntdSteps>

                {steps.filter((_, index) => index === activeIndex)
                    .map((step): JSX.Element => (
                        <div key={step.id} className={'steps__step'}>{step.children}</div>
                    ))
                }

                <ButtonGroup>
                    {hasPrevStep(activeIndex) && (
                        <Button type={"dashed"} onClick={goPrevStep} >{prevBtnText}</Button>
                    )}

                    {hasNextStep(activeIndex) && (
                        <Button type={"primary"} onClick={goNextStep}>{getNextBtnText()}</Button>
                    )}
                </ButtonGroup>
            </div>
        </StepsContext.Provider>
    );
}

export default React.memo(Steps);
