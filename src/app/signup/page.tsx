"use client";

import { useState } from "react";

export const Signup = () => {
  const [state, setState] = useState<{
    id: string;
    password: string;
    passwordConfirm: string;
  }>({ id: "", password: "", passwordConfirm: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    console.log(state);
  };

  return (
    <div>
      <p>회원가입</p>
      <input type="text" placeholder="아이디" name="id" onChange={onChange} />
      <input
        type="password"
        placeholder="비밀번호"
        name="password"
        onChange={onChange}
      />
      <input
        type="password"
        placeholder="비밀번호 확인"
        name="passwordConfirm"
        onChange={onChange}
      />
      <button onClick={onSubmit}>회원가입</button>
    </div>
  );
};
