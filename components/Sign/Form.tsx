import styled from "styled-components";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import { useForm } from "react-hook-form";
import { useAuthForm } from "./Form.hook";

// Think: 제어컴포넌트로 사용할 것인가, 비제어 컴포넌트로 사용할 것인가?
export const Form = ({ currentPath }: { currentPath: "signin" | "signup" }) => {
    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
    } = useForm({ mode: "onBlur" });

    const { handleLoginSubmit, handleRegisterSubmit, onSubmit } = useAuthForm(
        watch,
        setError
    );

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Label htmlFor="email">이메일</Label>
                <EmailInput
                    id="email"
                    currentPath={currentPath}
                    register={register}
                    errors={errors}
                    onLoginSubmit={handleLoginSubmit}
                    onRegisterSubmit={handleRegisterSubmit}
                    watch={watch}
                    setError={setError}
                />
            </div>
            <div>
                <Label htmlFor="password">비밀번호</Label>
                <PasswordInput
                    id="password"
                    currentPath={currentPath}
                    register={register}
                    errors={errors}
                    onLoginSubmit={handleLoginSubmit}
                    onRegisterSubmit={handleRegisterSubmit}
                />
            </div>
            {currentPath === "signin" ? null : (
                <div>
                    <Label htmlFor="confirmPassword">비밀번호 확인</Label>
                    <PasswordInput
                        id="confirmPassword"
                        currentPath={currentPath}
                        register={register}
                        errors={errors}
                        onLoginSubmit={handleLoginSubmit}
                        onRegisterSubmit={handleRegisterSubmit}
                        watch={watch}
                    />
                </div>
            )}
            {currentPath === "signin" ? (
                <SubmitButton type="submit" onClick={handleLoginSubmit}>
                    로그인
                </SubmitButton>
            ) : (
                <SubmitButton type="submit" onClick={handleRegisterSubmit}>
                    회원가입
                </SubmitButton>
            )}
        </FormWrapper>
    );
};

const FormWrapper = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    div {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
`;

const Label = styled.label`
    color: var(--black, #000);

    /* Linkbrary/body2-regular */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const SubmitButton = styled.button`
    color: var(--Grey-Light, #f5f5f5);
    font-family: Pretendard;
    font-size: 18px;

    border-radius: 8px;
    width: 400px;
    display: flex;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: var(
        --gra-purpleblue-to-skyblue,
        linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
    );
`;
