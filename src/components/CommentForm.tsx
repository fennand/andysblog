/* "use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react"; */
import { WEB_SITE } from "config";
import FormStatusButton from "./FormStatusButton";

import { saveComment } from "@/lib/comments";

import { revalidatePath } from "next/cache";

/// ... imports here

export function CommentForm({ postSlug }: { postSlug: string }) {
  // the router hook to trigger a page refresh
  // const router = useRouter();
  console.log("This is running on the browser");

  // the react useTransition hook to manage client/server data upodates
  // without refreshing the page. isPending gives us the ability to know
  // show a spinner or similar

  // runs when onSubmit event fires, uses fetch to send a POST request to
  // our API comment route, and then refreshes the page data to show the comment
  async function handleFormSubmit(formData: FormData) {
    "use server";
    console.log("submiting the form");

    const username = formData.get("username") as string;
    const comment = formData.get("comment") as string;
    await saveComment(username, comment, postSlug);
    revalidatePath(`/blog/${postSlug}`);
  }
  /*   // prevent the form submitting and redircting us to the action location
    event.preventDefault();

    // get the form input values
    // @ts-ignore
    const username = event.target["username"].value;
    // @ts-ignore
    const comment = event.target["comment"].value;

    // create a FormData object and append our values to send to the API
    const formData = new FormData();
    formData.append("username", username);
    formData.append("comment", comment);

    // POST the FormData to the API
    const res = await fetch(`${WEB_SITE}/api/comments/${postSlug}`, {
      body: formData,
      method: "POST",
    });

    // Refresh the current route and fetch new data from the server without
    // losing client-side browser or React state.
    startTransition(() => {
      router.refresh();
      console.log("reloaded the page data");
    });
   */

  // the handleFormSubmit fuction is passed to the onSubmit event handler on the form
  return (
    <form action={handleFormSubmit}>
      <label className="text-3xl" htmlFor="username">
        Name:
      </label>
      <input className="text-black text-2xl" type="text" name="username" />
      <label className="text-3xl" htmlFor="comment">
        Comment:
      </label>
      <textarea
        className="text-black text-2xl"
        name="comment"
        cols={30}
        rows={10}
      />
      <FormStatusButton />
    </form>
  );
}
