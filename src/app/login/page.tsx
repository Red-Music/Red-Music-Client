"use client";

import { loginApi, signupApi } from "@/api/auth";
import { HeadFootLayout } from "@/components/common/HeadFootLayout";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const nav = useRouter();

  const [state, setState] = useState<{
    id: string;
    password: string;
  }>({ id: "", password: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const { mutate: loginMutate } = useMutation({
    mutationFn: (data: { id: string; password: string }) =>
      loginApi(data.id, data.password),
    mutationKey: ["login"],
    onSuccess: (data) => {
      alert(data.message);
      localStorage.setItem("access_token", data.token);
      nav.push("/search");
    },
    onError: (error) => {
      alert(error);
    },
  });

  const { mutate: signupMutate } = useMutation({
    mutationFn: (data: { id: string; password: string }) =>
      signupApi(data.id, data.password),
    mutationKey: ["signup"],
    onSuccess: (data) => {
      alert(data.message);
    },
    onError: (error) => {
      alert(error);
    },
  });

  const onSubmit = () => {
    if (!state.id || !state.password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    loginMutate({ id: state.id, password: state.password });
  };

  const signupOnSubmit = () => {
    if (!state.id || !state.password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    signupMutate({ id: state.id, password: state.password });
  };

  return (
    <HeadFootLayout title="LOGIN">
      <div className="flex flex-col w-10/12 border-2 border-gray-300 rounded-md p-4 self-center gap-4">
        <h1 className="text-center font-bold text-4xl">로그인</h1>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="아이디"
            name="id"
            onChange={onChange}
            className="border-2 border-gray-300 rounded-md p-2"
          />
          <input
            type="password"
            placeholder="비밀번호"
            name="password"
            onChange={onChange}
            className="border-2 border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <button
            onClick={onSubmit}
            className="bg-blue-500 text-white p-2 rounded-md w-full"
          >
            로그인
          </button>
          <button
            onClick={signupOnSubmit}
            className="bg-400 dark:bg-400-dark text-white p-2 rounded-md w-full"
          >
            회원가입
          </button>
        </div>
      </div>
    </HeadFootLayout>
  );
}
