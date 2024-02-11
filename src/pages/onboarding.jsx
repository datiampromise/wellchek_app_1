import { useState } from "react";
import { Link } from "react-router-dom";

export const OnboardingFirstPage = () => {
    return (
        <div className="onboarding">
            <div className="onboarding-header">
                <h1 className="onboarding_title">How may we help you</h1>
                <p className="onboarding_subtitle">
                    Select all that applies
                </p>
                <form>
                    <div className="form-group">
                        <label htmlFor="improve_sleep">
                            <span>
                                Improve the quality of your sleep
                            </span>
                        </label>
                        <input type="checkbox" name="improve_sleep" id="improve_sleep" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eat_healthier">
                            <span>
                                Eat more healthier
                            </span>
                        </label>
                        <input type="checkbox" name="eat_healthier" id="eat_healthier" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fitness_goals">
                            <span>
                                Achieve your fitness goals
                            </span>
                        </label>
                        <input type="checkbox" name="fitness_goals" id="fitness_goals" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="stay_focused">
                            <span>
                                Stay focused with sound state of mind
                            </span>
                        </label>
                        <input type="checkbox" name="stay_focused" id="stay_focused" />
                    </div>
                    <div className="action_buttons">
                        <Link to="/onboarding/2" className="continue" >Continue</Link>
                        <input type="submit" value="Skip for now" className="skip" />
                    </div>
                </form>
            </div>
        </div>
    );
}


export const OnboardingSecondPage = () => {
    return (
        <div className="onboarding">
            <div className="onboarding-header">
                <p className="onboarding_subtitle large">
                    On a typical night, how many
                    hours of sleep do you get?
                </p>
                <form>
                    <div className="form-group">
                        <label htmlFor="seven-nine-hours">
                            <span>
                                7-9hrs
                            </span>
                        </label>
                        <input type="checkbox" name="seven-nine-hours" id="seven-nine-hours" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="four-to-six-hours">
                            <span>
                                4-6 hrs
                            </span>
                        </label>
                        <input type="checkbox" name="four-to-six-hours" id="four-to-six-hours" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ten-hours-above">
                            <span>
                                10hrs and above
                            </span>
                        </label>
                        <input type="checkbox" name="ten-hours-above" id="ten-hours-above" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export const OnboardingThirdPage = () => {
    const [showContext, setShowContext] = useState(false)
    const toggleContextShow = () => {
        setShowContext(!showContext)
    }
    return (
        <div className="onboarding">
            <div className="onboarding-header">
                <p className="onboarding_subtitle large">
                    Do you experience difficulty fall asleep, staying asleep or waking up too early?
                </p>
                <form>
                    <div className="form-group">
                        <label htmlFor="yes">
                            <span>
                                Yes
                            </span>
                        </label>
                        <input type="checkbox" name="yes" id="yes" />
                    </div>
                    {
                        !showContext && (
                            <>
                                <div className="form-group">
                                    <label htmlFor="no">
                                        <span onClick={toggleContextShow}>
                                            No
                                        </span>
                                    </label>
                                    <input type="checkbox" name="no" id="no" />
                                </div>
                            </>
                        )
                    }
                    {
                        showContext && (
                            <>
                                <p className="context-title">That&apos;s Ok</p>
                                <p className="context">Recognizing how you sleep is an important part of the process, we will keep checking in on you</p>
                            </>
                        )
                    }
                </form>
            </div>
        </div>
    );
}
