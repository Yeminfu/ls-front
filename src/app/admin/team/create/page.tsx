// app/admin/team/create/page.tsx

import { CreateTeamMemberForm } from "./components/create-team-member-form";

// import { CreateTeamMemberForm } from "./components/create-team-member-form";

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Добавить участника
        </h1>

        <p className="mt-2 text-slate-500">
          Создание нового участника команды
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <CreateTeamMemberForm />
      </div>
    </div>
  );
}