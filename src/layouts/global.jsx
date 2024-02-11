import { Routes, Route } from 'react-router-dom'
import { OnboardingFirstPage, OnboardingSecondPage, OnboardingThirdPage } from '../pages/onboarding'
import SignUp from '../pages/signup'
import Signin from '../pages/signin'
const GlobalLayout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<OnboardingFirstPage />} />
                <Route path="/onboarding/2" element={<OnboardingSecondPage />} />
                <Route path="/onboarding/3" element={<OnboardingThirdPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Signin />} />
            </Routes>
        </>
    )
}

export default GlobalLayout