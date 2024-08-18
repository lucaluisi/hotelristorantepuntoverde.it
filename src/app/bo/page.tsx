"use client";

import { useActionState } from "react";

async function increment(previousState: any, formData: any) {
  return previousState + 1;
}

function StatefulForm({}) {
  const [state, formAction] = useActionState(increment, 0);
  return (
    <form>
      {state}
      <button formAction={formAction}>Increment</button>
    </form>
  )
}

export default StatefulForm;