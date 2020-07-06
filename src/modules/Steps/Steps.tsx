import React, {createContext, ReactNode, useCallback, useState} from "react";
import {Button, Space, Steps as AntdSteps} from 'antd';
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

    FinishComponent?: any
}

const { Step } = AntdSteps;

function Steps({ steps, nextBtnText, prevBtnText, finishBtnText, changeStepCallback, finishStepCallback, FinishComponent }: IStepsProps): JSX.Element {
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
            if (
                typeof changeStepCallback === 'function'
                && !changeStepCallback(activeIndex, nextIndex)
                && nextIndex > activeIndex
            ) {
                nextIndex = activeIndex;
            }

            if (nextIndex > getStepLength && typeof finishStepCallback === 'function') {
                return finishStepCallback()
            }

            console.log(nextIndex, activeIndex);

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

                <div className={'steps__content'}>
                    <AntdSteps direction={"vertical"} size={'small'} className={'steps__navigation'}>
                        {
                            steps.map(({props}, index) =>
                                <Step {...props} key={'asd'} status={index === activeIndex ? 'process' : 'wait'} />
                            )
                        }
                    </AntdSteps>

                    <div>
                        {steps.filter((_, index) => index === activeIndex)
                            .map((step): JSX.Element => (
                                <div key={step.id} className={'steps__step'}>{step.children}</div>
                            ))
                        }
                        <ButtonGroup className={'steps__controls'}>
                            {hasPrevStep(activeIndex) && (
                                <Button size={'large'} type={"dashed"} onClick={goPrevStep} >{prevBtnText}</Button>
                            )}

                            {hasNextStep(activeIndex) && (
                                <Button size={'large'} type={"primary"} onClick={goNextStep}>{getNextBtnText()}</Button>
                            )}
                        </ButtonGroup>
                    </div>
                </div>

                {FinishComponent && FinishComponent}

            </div>

        </StepsContext.Provider>
    );
}

export default React.memo(Steps);
