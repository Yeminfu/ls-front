"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  description: string;
  image: FileList;
};

export function CreateTeamMemberForm() {
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  async function onSubmit(data: FormValues) {
    console.log(data);

    // upload logic
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Имя
        </label>

        <input
          {...register("name", {
            required: "Введите имя",
          })}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
        />

        {errors.name && (
          <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Описание
        </label>

        <textarea
          {...register("description", {
            required: "Введите описание",
          })}
          rows={6}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
        />

        {errors.description && (
          <p className="mt-2 text-sm text-red-500">
            {errors.description.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Изображение
        </label>

        <input
          type="file"
          accept="image/*"
          {...register("image", {
            required: "Загрузите изображение",
            onChange: (e) => {
              const file = e.target.files?.[0];

              if (!file) return;

              const imageUrl = URL.createObjectURL(file);

              setPreview(imageUrl);
            },
          })}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition file:mr-4 file:rounded-xl file:border-0 file:bg-orange-100 file:px-4 file:py-2 file:font-semibold file:text-orange-600 hover:file:bg-orange-200"
        />

        {errors.image && (
          <p className="mt-2 text-sm text-red-500">{errors.image.message}</p>
        )}

        {preview && (
          <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
            <Image
              src={preview}
              alt="Preview"
              width={500}
              height={700}
              className="mx-auto h-[500px] w-auto object-contain"
              unoptimized
            />
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-2xl bg-orange-500 px-6 py-4 text-sm font-bold text-white transition hover:bg-orange-600 disabled:opacity-50"
      >
        {isSubmitting ? "Сохранение..." : "Создать участника"}
      </button>
    </form>
  );
}
