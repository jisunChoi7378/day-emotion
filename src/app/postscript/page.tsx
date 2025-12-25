"use client";

import "./postscript.css";

import Link from "next/link";
import React from "react";
import Modal from "@/components/common/Modal";
import EnvelopeButton from "@/components/common/EnvelopeButton";
import { letters, type Letter } from "./letters";
import { useOpenProfileModalStore } from "@/store/modal";

const PostscriptPage = () => {
  const { open, close } = useOpenProfileModalStore();

  const openLetter = (letter: Letter) => {
    const content = (
      <div className="p-6 text-gray-900">
        <div className="min-h-[90vh] sm:min-h-0 flex flex-col items-center justify-center">
          <div className="modal-paper mx-auto" style={{ maxWidth: 900 }}>
            <div
              className="modal-paper-bg"
              style={{ backgroundImage: "url('/paper.jpg')" }}
            >
              <div className="modal-paper-inner">
                <h2 className="text-xl font-semibold text-gray-900">
                  from. {letter.author}
                </h2>
                <div className="mt-1 text-sm text-gray-600">
                  [{letter.title}]
                </div>
                <div
                  className="mt-4 whitespace-pre-wrap text-sm md:text-base"
                  dangerouslySetInnerHTML={{ __html: letter.body.replace(/\n/g, "<br/>") }}
                />
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              aria-label="close letter"
              className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg border-2 border-green-800"
              onClick={() => close()}
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    );

    open(content, "no-modal-bg");
  };

  return (
    <div className="px-6 py-8">
      <Modal />

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">후기</h1>
        <Link href="/" className="text-sm text-blue-600">
          홈으로
        </Link>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        산타의 선물에 보내온 답장을 열어볼까요?
      </p>

      <div className="max-w-[min(1500px,85vw)] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-12 lg:gap-16 justify-items-center">
          {letters.map((l) => (
            <div key={l.id} className="w-full flex justify-center">
              <EnvelopeButton
                id={l.id}
                author={l.author}
                title={l.title}
                onOpen={() => openLetter(l)}
                maxWidth={160}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostscriptPage;
