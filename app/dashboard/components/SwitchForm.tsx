"use client";
import { toast } from '@/components/ui/use-toast';
import { Switch } from "@/components/ui/switch";
import React from 'react'

export default function SwitchForm({checked, onToggle, name} : {checked: boolean, onToggle: () => Promise<string>, name: string}) {

    const onSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {error} = await JSON.parse(await onToggle());
        if (error?.message) {
            toast({
              title: "Fail to update Blog" + name,
              description: (
                <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
                  <code className="text-white">{error.message}</code>
                </pre>
              ),
            });
          } else {
            toast({
              title: "Successfully updated Blog " + name + " ",
            });
          }
    }

  return (
    <form onSubmit={onSubmit}>
        <Switch checked={checked} type='submit' />
    </form>
  )
}
